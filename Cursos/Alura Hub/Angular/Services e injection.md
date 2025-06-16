# Como gerar um serviço
```bash
ng g s servicos/{{nome-servico}}
```
Perceba que temos lá um decorator de injectable, isso de #injeção é conhecido assim, pois ele é usado em 1 ou mais componentes.
# Entendendo 
```ts
@Injectable({

  providedIn: 'root'

})

export class ContatoService {

  

  private contatos: Contato[] = [

    {"id": 1, "nome": "Ana", "telefone": "29 278869420"},

    {"id": 2, "nome": "Antônio", "telefone": "38 128451235"},

    {"id": 2, "nome": "Ágata", "telefone": "38 128451235"},

    {"id": 3, "nome": "Bruno", "telefone": "95 695521583"}

  ];

  

  constructor() {
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage = contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null;
    this.contatos = contatosLocalStorage || null;
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  

  obterContatos(): Contato[] {
    return this.contatos;
  }
```
Ele criar métodos para ao serviço e define os atributos.