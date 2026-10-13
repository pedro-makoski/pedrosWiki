Você pode criar uma documentação em Java automática, permitindo a documentação dos seus códigos.

Para isso coloque no seu POM:
```xml
<dependency>
			<groupId>org.springdoc</groupId>
			<artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
			<version>3.1.1</version>
</dependency>
```

E é recomendável que deixe de maneira pública sem autenticação as rotas:
```java
@Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http.csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and().authorizeHttpRequests()
                .requestMatchers(HttpMethod.POST, "/login").permitAll()
                .requestMatchers("/v3/api-docs/**",
                            "/swagger-ui.html", "/swagger-ui/**").permitAll() // Através dessa rota, o primeiro é um JSON e o segundo é um HTML gerado
                .anyRequest().authenticated()
                .and().addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }
```
Você pode criar configurações com ele:

```java
@Bean
public OpenAPI customOpenAPI() {
    return new OpenAPI()
            .components(new Components()
                    .addSecuritySchemes("bearer-key", // Adiciona campo de chave que pode estar em algumas rotas que recebe um JWT
                            new SecurityScheme()
                                    .type(SecurityScheme.Type.HTTP)
                                    .scheme("bearer")
                                    .bearerFormat("JWT")))
                    .info(new Info() // E adiciona informações
                            .title("Voll.med API")
                            .description("API Rest da aplicação Voll.med, contendo as funcionalidades de CRUD de médicos e de pacientes, além de agendamento e cancelamento de consultas")
                            .contact(new Contact()
                                    .name("Time Backend")
                                    .email("backend@voll.med"))
                    .license(new License()
                            .name("Apache 2.0")
                            .url("http://voll.med/api/licenca")));
}
```
Para que o JWT seja colocado nas rotas use:
```java
@SecurityRequirement(name = "bearer-key") // Com o mesmo nome colocado na configuração acima
```
Podendo ser na classe para que fique em todos ou na rota que vai ter.