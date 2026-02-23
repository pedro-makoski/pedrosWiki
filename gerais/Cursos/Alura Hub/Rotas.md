```

Eu quero que você crie um YAML, a partir destas rotas e campos no request body ou query params:
/user::POST 
Parâmetros do corpo:
nome: string
email: string
senha: string
fotoPerfil: base64
Saída:
{
	"uuid": "uuid-gerado"
	"token": ""
}
Ou uma resposta de erro, de bad request.
/user/:uuid::GET
requisição:
{
	"from": {
		"uuid": "",
		"token": ""
	}
}
resposta:
{
	"foto-perfil": "https://rota-da-foto-perfil",
	"nome": "nome-usuario",
	"total-xp": 0,
	"emblemas": [
		{
			"nome": "",
			"descricao": "",
			"imagem": "rota-imagem"
		}
	]
}
pode retornar também algo como token inspirado/token invalido
/user/:uuid::PUT
requisição:
{
	"from": {
		"uuid": "",
		"token": ""
	},
	"novo-usuario": {
		nome: ""
		email: ""
		fotoPerfil: ""
	}
}
Pode retornar:
{
	"message": "Usuário alterado"
}
Ou token inspirado/token invalido.
/user/change-password/:uuid:PUT
{
	"from": {
		"uuid": "",
		"token": ""
	},
	"password": "nova-senha",
}
Pode retornar um ok, ou token inspirado/token invalido.
/user/:uuid::DELETE
{
	"from": {
		"uuid": "",
		"token": ""
	},
}

Pode retornar um token inspirado/token invalido ou um status deletado.
/user/foto-perfil/:uuid-user::GET
Retorna uma imagem.
/user/embelema/:uuid-emblema::GET
Retorna uma imagem.
/user/by-name/:name::GET
{
	"from": {
		"uuid": "",
		"token": ""
	},
}

retorna a mesma resposta que /user/:uuid::GET, só que pelo nome.

/area/::POST
{
	"from": {
		"uuid": "",
		"token": ""
	}
	"nome": "",
	"tags": [],
	"descricao": [
		
	],
}

resposta:
token invalido/token inspirado.
ou
{
	"uuid": ""
}
/area/:uuid:GET
{
	"nome": "",
	"tags": [],
	"descricao": [
		
	],
	"avaliation": [
		"likes": 0,
		"dislikes": 0,
		"date": "",
		"user-uuid": ""
	]
}
/area/:uuid/forums?page=0&limit=10
{
	"from": {
		"uuid": "",
		"token": ""
	},
}
resposta:
[
]
/area/:uuid/trilhas?page=0&limit=10::GET
{
	"from": {
		"uuid": "",
		"token": ""
	},
}
resposta:
[
]

/area/:uuid/cursos?page=0&limit=10::GET
{
	"from": {
		"uuid": "",
		"token": ""
	},
}
resposta:
[
]
/area/:uuid/home-page::GET
{
	"from": {
		"uuid": "",
		"token": ""
	},
}
resposta:
[
]
Lista de bloco de textos.
{
	"from": {
		"uuid": "",
		"token": ""
	},
}
/area/:uuid/ranking
{
	"ranking": [
		{
			"nome": "",
			"uuid": "",
			"total-xp": "",
			"selo": {
				"has-selo": true,
				"selo": "url-image"
			}
		}
	]
}
/area/search?value=""&limit=0&page=0
{
	"from": {
		"uuid": "",
		"token": ""
	},
}
[
	{
		// mesmo itens de area
	}
]
/area/search/trilha?value=""&limit=0&page=0
{
	"from": {
		"uuid": "",
		"token": ""
	},
}
[
	{
		// mesmo itens de trilha
	}
]
/area/search/curso?value=""&limit=0&page=0
{
	"from": {
		"uuid": "",
		"token": ""
	},
}
[
	{
		// mesmo itens de curso
	}
]
/area/search/forums?value=""&limit=0&page=0
{
	"from": {
		"uuid": "",
		"token": ""
	},
}
[
	{
		// mesmo itens de forums
	}
]
/area/:uuid/add-trilha/:uuid-trilha
{
	"from": {
		"uuid": "",
		"token": ""
	},
}
/area/:uuid/add-curso/:uuid-curso
{
	"from": {
		"uuid": "",
		"token": ""
	},
}
/area/:uuid/add-forum/:uuid-forum
{
	"from": {
		"uuid": "",
		"token": ""
	},
}
/area/:uuid/set-acess
{
	"from": {
		"uuid": "",
		"token": ""
	},
	"is-public": false,
	"people-can-edit": [
		{
			"uuid": ""
		}
	],
	"people-can-view":  {
		"is-all": false,
		"with-code": false
		"peoples": {
			{
				"uuid": ""
			}
		}
	}
	"trilhas-uuid": [],
	"areas-uuid": [],
	"cursos-uuid": [],
}
/area/:uuid/generate-view-code
{
	"from": {
		"uuid": "",
		"token": ""
	},
}
{
	"code": ""
}

/area/comments?page=0&limit=0
[
 {
	 "id": "",
	 "message": [
		 // Lista de blocos de texto
	 ],
	 "avaliation": [
		 // Mesmo avaliation de áreas
	 ]
 }
]
Pode também retornar um já é público ou 404 de não encontrado
Nas rotas acima, além de uuid, pode ter também pelo /get-name/:name, com os mesmos efeitos.
Para /curso é a mesma coisa que /area, porém não tem como colocar cursos dentro, porém tem como colocar e acessar textos/quizzes/videos dentro.
/comments/:uuid/comments?page=0&limit=0
[
 {
	 "id": "",
	 "message": [
		 // Lista de blocos de texto
	 ],
	 "avaliation": [
		 // Mesmo avaliation de áreas
	 ]
 }
]

/forum/::POST
{
	"capa": base64,
	"nome": "",
	"tags": [],
	"descricao": [
		// Lista de blocos de texto
	],
}
{
	"uuid": ""
}

O forum tem rotas também de pesquisar por um item específico, dentro do forum. Ou pesquisar por um forum. O forum também tem como obter um forum específico pelo UUID. O forum também tem uma avaliação.

O quiz tem propriedades e rotas semelhantes a /forum, nome, tags, descrição, capa, também tem-se:
max-points: number
isFullPageEachQuestion: bool

Além disso tem uma lista de questão com os seguintes atributos:
isRequired: bool
typeOfQuestao: string
enunciado: lista de blocos de texto
id: string
isNeedToAvaliate: bool
e a questão base que varia de acordo com o typeOfQuestão:

ALTERNATIVA
TEXT_ANSWER
AVALIATION
UPLOAD_FILE
ALTERNATIVA_GRID

Quando o valor é diferente existe estruturas diferentes.

Tem também a rota: /quiz/response::POST
{
	"quiz-base-id": "",
	"respostas": [
		{
			"type-of-questao": "",
			"questao-response": {
			},
			"questao-base-id": ""
		}
	],
	"inicio": "",
	"fim": "",
	"inicio-cada-questao": [
	],
	"fim-cada-questao": [
	],
}
Resposta:
{
	"pontos-total": 0,
	"numeros-corretos": 0,
	"numeros-errados": 0,
	"corretos-indice": [],
	"errados-indice": [],
	"tempo-total": 0,
	"tempo-por-questao": []
}

Assim como quiz tem o bigquiz, porém com a unica diferença é que ele possui uma lista de sections, que possuem em cada item um titulo e um quiz para cada section.
Também tem uma rota para você pegar cada seção específica.

 Também tem a tarefa, que recebe as mesmas propriedades em comum entre forum/area/quiz, ela tem os seguintes atributos, além dos já citados:
 - typeOfTarefa, que pode ser TEXT, YOUTUBE_VIDEO, QUIZ
- E pode receber 3 atributos possíveis: youtubeVideoID, quizId, textID. Também recebe porcentagemDeAproveitamentoParaPassar do tipo double.

Assim como área/forum/quiz tem o text, que recebe os mesmos atributos em comum deles, tem como atributos: tempoEsperadoInMilisseconds e também lista blocos de texto.
Que cada bloco de texto é basicamente:
typeOfText: string, 
blockTextBase: um bloco de texto do tipo any
backgroundColor: do tipo Color Java awt
paddingInPixels: opcional do tipo double.

@JsonTypeInfo(  
        use = JsonTypeInfo.Id.NAME,  
        include = JsonTypeInfo.As.EXTERNAL_PROPERTY,  
        property = "typeOfText",  
        defaultImpl = DefaultBlockText.class  
)  
@JsonSubTypes({  
        @JsonSubTypes.Type(value = HeadTitleAndParagrafo.class, name = "H1"),  
        @JsonSubTypes.Type(value = HeadTitleAndParagrafo.class, name = "H2"),  
        @JsonSubTypes.Type(value = HeadTitleAndParagrafo.class, name = "H3"),  
        @JsonSubTypes.Type(value = HeadTitleAndParagrafo.class, name = "H3"),  
        @JsonSubTypes.Type(value = HeadTitleAndParagrafo.class, name = "H4"),  
        @JsonSubTypes.Type(value = HeadTitleAndParagrafo.class, name = "H5"),  
        @JsonSubTypes.Type(value = HeadTitleAndParagrafo.class, name = "H6"),  
        @JsonSubTypes.Type(value = HeadTitleAndParagrafo.class, name = "PARAGRAFO"),  
        @JsonSubTypes.Type(value = Imagem.class, name = "IMAGEM"),  
        @JsonSubTypes.Type(value = YoutubeVideo.class, name = "YOUTUBE_VIDEO"),  
        @JsonSubTypes.Type(value = Link.class, name = "LINK"),  
        @JsonSubTypes.Type(value = Table.class, name = "TABLE"),  
        @JsonSubTypes.Type(value = OL.class, name = "OL"),  
        @JsonSubTypes.Type(value = UL.class, name = "UL"),  
        @JsonSubTypes.Type(value = HtmlElement.class, name = "HTML_ELEMENT"),  
        @JsonSubTypes.Type(value = Threed.class, name = "3D"),  
        @JsonSubTypes.Type(value = Graphic.class, name = "GRAPHIC"),  
        @JsonSubTypes.Type(value = Column.class, name = "COLUMN"),  
        @JsonSubTypes.Type(value = Row.class, name = "ROWS"),  
        @JsonSubTypes.Type(value = Grid.class, name = "GRID"),  
        @JsonSubTypes.Type(value = BeautyLink.class, name = "BEAUTY_LINK"),  
        @JsonSubTypes.Type(value = Ranking.class, name = "RANKING"),  
})

O texto também tem uma response, assim como quiz:
que recebe o id base do text.
o momento de inicio.
o momento de fim.

Assim como quiz/area/forum também tem os atributos comuns a entidade Trilha
que não tem atributos quando criada.
Porém ela pode adicionar uma tarefa, a partir do UUID da tarefa e da trilha
Na rota de acessar uma trilha, é retornado os acessible contents e os not-acessible contents, os not acessible só possuem o nome e a descrição. 
Também tem trilha response, que na verdade adicionar uma tarefa response feitas. 

Assim como quiz/area/forum também tem os atributos comuns a entidade youtube_video
que tem estes outros atributos:
url: string

E também tem o youtubeVideoResponse que diz o inicio e o fim da conclusão de uma tarefa.

Para fazer funcionar considere alguns detalhes:
Todos os itens, que tem avaliação, nome, descricao e afins, tem como alterar a visibilidade, assim como vimos na área.
Todas as entidades tem como fazer uma busca/acessar pelo nome na rota/acessar pelo UUID.
Todas as listas com um limite e página, informa a quantidade de páginas existentes a partir do limite além da lista.
Se ter algum problema de segurança para alterar, pode alterar.
Todas as requisições exigem o token e informa se o token está valido ou não.
Como os get tem em alguns casos requisição de corpo, altere o método para um que deixe.
```

