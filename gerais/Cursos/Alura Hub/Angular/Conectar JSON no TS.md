```ts
import agenda from './agenda.json'
```
Você pode importar um JSON, dessa forma, e dar um nome como neste caso agenda. Caso isso não funcione, no compillerOptions do TS Config adicione a linha:
```json
"resolveJsonModule": true,
```