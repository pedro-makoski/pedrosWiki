```java
package med.voll.web_application.infra.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class ConfiguracoesDeSeguranca {

    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails user1 = User.builder()
                .username("jaoa@email.com")
                .password("{noop}joao123")
                .build();

        UserDetails user2 = User.builder()
                .username("maria@email.com")
                .password("{noop}mario123")
                .build();

        return new InMemoryUserDetailsManager(user1, user2);
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception{
        return httpSecurity
                .authorizeHttpRequests(req -> {
                    req.requestMatchers("/css/*", "/js/*", "/assets/*").permitAll();
                    req.anyRequest().authenticated();
                }) // Adiciona as requisições e suas autenticações necessárias
                .formLogin(form ->
                    form.loginPage("/login") // Adiona a página de login para redirecionamento
                            .defaultSuccessUrl("/") // Caso de certo ele redireciona para essa página
                            .permitAll())

                .build();
    }
}

```
# SecurityFilterChain
Conjunto de filtros de segurança que ocorrem antes da resposta da página ao usuário.