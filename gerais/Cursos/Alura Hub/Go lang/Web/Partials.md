Muitas vezes nos nossos códigos em vários arquivos HTML, colocamos código repetido, como, por exemplo, um header, uma navbar, um head. Podemos usar as partial para evitar essas repetições.
# Como criar partials
Crie um arquivo novo, começando com underline. No início coloca o ``{{define "_nome_para_o_partial"}}`` e depois coloque o `{{end}}`. E então nos outros HTMLs coloque: `{{template nome_que_voce_definiu}}`
