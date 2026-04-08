# Configurando
```java
package med.voll.api.controller.infra.security;

  

import org.springframework.context.annotation.Bean;

import org.springframework.context.annotation.Configuration;

import org.springframework.security.authentication.AuthenticationManager;

import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;

import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

import org.springframework.security.config.http.SessionCreationPolicy;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.security.web.SecurityFilterChain;

  

@Configuration

@EnableWebSecurity

public class SecurityConfigurations {

    @Bean // Informa que deve ser usado isso quando for requerido

    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {

        return httpSecurity

            .csrf(csrf -> csrf.disable()) // Faz um disable do tipo do CSRF proteção de ataque

            .sessionManagement(sm -> sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) // Configura como stateless 

            .build();

    }

  

    @Bean

    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {

        return configuration.getAuthenticationManager(); // Cria um autentication manager que será usado depois no serviço de login

    }

  

    @Bean

    public PasswordEncoder passwordEncoder() {

        return new BCryptPasswordEncoder(); // Retorna o encoder a ser usado no gerenciamento de senhas

    }
}
```
```java
package med.voll.api.domain.usuario;

  

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.userdetails.UserDetails;

import org.springframework.security.core.userdetails.UserDetailsService;

import org.springframework.security.core.userdetails.UsernameNotFoundException;

import org.springframework.stereotype.Service;

  

@Service

public class AutenticacaoService implements UserDetailsService { // Implementa a interface que faz com que seja considerado um sistema de login

    @Autowired

    private UsuarioRepository usuarioRepository;

  

    @Override

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException { // Carrega o usuário pelo nome

        return usuarioRepository.findByLogin(username);

    }

}
```
```java
package med.voll.api.domain.usuario;

  

import java.util.Collection;

import java.util.List;

  

import org.springframework.security.core.GrantedAuthority;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import org.springframework.security.core.userdetails.UserDetails;

  

import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;

import jakarta.persistence.GenerationType;

import jakarta.persistence.Id;

import jakarta.persistence.Table;

import lombok.AllArgsConstructor;

import lombok.EqualsAndHashCode;

import lombok.Getter;

import lombok.NoArgsConstructor;

  

@Table(name = "usuarios")

@Entity(name = "Usuario")

@Getter

@NoArgsConstructor

@AllArgsConstructor

@EqualsAndHashCode(of = "id")

public class Usuario implements UserDetails { // Implementa uma interface de tipo de usuário

  

    @Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)    

    private Long id;

  

    private String login;

    private String senha;

  

    @Override

    public Collection<? extends GrantedAuthority> getAuthorities() {

        return List.of(new SimpleGrantedAuthority("ROLE_USER")); // Retorna os roles do usuário

    }

  

    @Override

    public String getPassword() {
 
        return this.senha; // retorna a senha

    }

  

    @Override

    public String getUsername() {

        return this.login; // retorna o email

    }

  

    @Override

    public boolean isAccountNonExpired() {

        return true;    // Retorna se conta não está expirada

    }

  

    @Override

    public boolean isAccountNonLocked() {

        return true; // Retorna se a conta não está bloqueada

    }

    @Override

    public boolean isCredentialsNonExpired() {

        return true; // Retorna se a credênciais não estão expiradas 

    }

    @Override

    public boolean isEnabled() {

        return true; // Retorna se a conta está ativa
    }

  

}
```
```java
package med.voll.api.controller.infra.security;

  

import java.time.Instant;

import java.time.LocalDateTime;

import java.time.ZoneOffset;

import java.util.Date;

  

import org.springframework.beans.factory.annotation.Value;

import org.springframework.stereotype.Service;

  

import com.auth0.jwt.JWT; // Usa auth0 para lidar com geração de tokens

import com.auth0.jwt.algorithms.Algorithm;

import com.auth0.jwt.exceptions.JWTCreationException;

  

import med.voll.api.domain.usuario.Usuario;

  

@Service

public class TokenService {

  

    @Value("${api.security.token.secret}") // Obtem do aplication properties essa propriedade que está assim: api.security.token.secret=${JWT_SECRET:P019EFK_A481+.+-._()_}, onde é definido a chave do env, e o valor padrão.

    private String secret;

  

    public String gerarToken(Usuario usuario) {

        try {

            var algorithm = Algorithm.HMAC256(secret); // Usa um dos algorimos a partir da secret

            return JWT.create()

                .withIssuer("API Voll.med") // Adiciona o sistema que gerou esse token

                .withSubject(usuario.getLogin()) // Adiciona o usuário que gerou este token

                .withClaim("id", usuario.getId()) // Adiciona o id que gerou esse token

                .withExpiresAt(dataExpiracao()) // Adiciona uma data de expiração neste token

                .sign(algorithm); // Gera a partir do algortimo

        } catch(JWTCreationException e) {

            throw new RuntimeException("Erro ao gerar token jwt");

        }

    }

  

    private Instant dataExpiracao() {

        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));

    }

}
```
```java
package med.voll.api.domain.usuario;

  

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;

import org.springframework.security.authentication.AuthenticationManager;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

  

import jakarta.validation.Valid;

import med.voll.api.controller.infra.security.TokenDTO;

import med.voll.api.controller.infra.security.TokenService;

  

@RestController

@RequestMapping("/login")

public class AutenticacaoController {

    @Autowired

    private AuthenticationManager manager;

  

    @Autowired

    private TokenService tokenService;

  

    @PostMapping

    public ResponseEntity<TokenDTO> efetuarLogin(@RequestBody @Valid DadosAutenticacao dadosAutenticacao) { // Retorna o token do usuário a partir do login

        var token = new UsernamePasswordAuthenticationToken(dadosAutenticacao.login(), dadosAutenticacao.senha()); // Gera o token de autenticação

        var autentication = manager.authenticate(token); // autentica

  

        var tokenGerado = tokenService.gerarToken((Usuario) autentication.getPrincipal()); // gera um token JWT

        return ResponseEntity.ok(new TokenDTO(tokenGerado));

    }

}
```
# JWT
Algortímos que geram tokens criptografados para um usuário específico. 
# Melhorias no conf
```java
package med.voll.api.controller.infra.security;

  

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.context.annotation.Bean;

import org.springframework.context.annotation.Configuration;

import org.springframework.http.HttpMethod;

import org.springframework.security.authentication.AuthenticationManager;

import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;

import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

import org.springframework.security.config.http.SessionCreationPolicy;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.security.web.SecurityFilterChain;

import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

  

@Configuration

@EnableWebSecurity

public class SecurityConfigurations {

  

    @Autowired

    private SecurityFilter securityFilter;

  

    @Bean

    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {

        return httpSecurity

            .csrf(csrf -> csrf.disable())

            .sessionManagement(sm -> sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS))

            .authorizeRequests(r ->  r.antMatchers(HttpMethod.POST, "/login").permitAll().anyRequest().authenticated()) // Lida com as autorizações da requisição

            .addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class) // Coloca um filtro gerado pelo securityFilter antes do UsernamePasswordAuthenticationFilter que verifica a autenticação

            .build();

    }

  

    @Bean

    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {

        return configuration.getAuthenticationManager();

    }

  

    @Bean

    public PasswordEncoder passwordEncoder() {

        return new BCryptPasswordEncoder();

    }

}
```