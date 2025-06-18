Você pode gerar um arquivo especial para a interface com:
```bash
ng g i local_da_interface
```
Você pode deixar uma opção da interface opcional colocando um `?` antes do :
```ts
export interface Contato {

  id: number

  nome: string

  telefone: string

  email: string

  aniversario?: string

  redes?: string

  observacao?: string

}
```
