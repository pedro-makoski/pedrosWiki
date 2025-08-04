Permite usar os detalhes da rota atual do Angular. Por exemplo, supondo que você colocou um id nas routes tipo um `:id`. Para encontrar, injete o service `ActivatedRoute`, e coloque:
```ts
const id = this.activatedRoute.snapshot.paramMap.get("id")
```
O snapshot é um conjunto de métodos que possui como objetivo obter algo da URL. o paramMap é os parâmetros que são adicionados na URL. O get obtem um parâmetro específico.