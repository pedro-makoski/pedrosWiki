Clique em register > server
Em general defina o nome do servidor
Em connection coloque no campo hostname o resultado de executar esse dois comandos:
```
docker compose exec postgres sh
hostname -i
```
Na porta coloque a porta definida no yml.
Em maintance/database coloque o nome do banco de dados definido. 
Em username coloque o usuário definido
E em pasword o mesmo