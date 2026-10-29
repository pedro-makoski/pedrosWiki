```java
package med.voll.web_application.infra.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
@EnableWebSecurity // Indica que é configuração de segurança
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

        return new InMemoryUserDetailsManager(user1, user2); // Coloca dois tipos de usuário em memória para fazer login
    }
}
```
