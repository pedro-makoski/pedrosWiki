```java
```java
@GetMapping("/users/{id}") // Indica entre chaves onde na URL vai ficar o item  
public String getUserById(@PathVariable Long id) {   // Pega como parâmetro o id
    return "User ID: " + id;  
}
```
