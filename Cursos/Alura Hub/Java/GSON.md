Biblioteca Java que permite a serialização e dessirealização do JSON.
Para converter uma String em um objeto no GSON, você faz o seguinte:
```java
Gson gson = new Gson();  
Objeto res = gson.fromJson(json, Objeto.class);  
System.out.println(res);
```
Em caso de uma ter um nome diferente do atributo você coloca em cima do atributo, que tem um nome diferente ``@SerializedName("<nome-do-atributo-diferente>")``.
Para definir uma regra de como é feito as nomenclaturas de um atributo no Objeto contra o da String, você pode usar um builder:
```java
Gson gson = new GsonBuilder()  
        .setFieldNamingPolicy(FieldNamingPolicy.UPPER_CAMEL_CASE)  
        .create();
```
