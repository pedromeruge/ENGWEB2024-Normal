
#1.1 Setup
- comecei por usar um conversor online para conveter csv para json
- troquei o id das entradas para _id com ctr+f replace no vscode
- depois corri o script script.py para criar um docker-compose com mongodb e as coleções 

- ao acrescentar as entradas ao container com o script, verifiquei que deu o output "36377 document(s) imported successfully", logo foram importadas as entradas corretamente
- de qualquer forma corri o comando "db.contratos.countDocuments()" dentro da respetiva mongosh e obtive o mesmo resultado 36777 o que comprova a importação correta

#1.2 Queries
no queries.txt


#1.3 API
Nesta rota "GET /contratos?entidade=EEEE:" decidi utilizar o nome da entidade como argumento, por consistencia com a rota "GET /contratos/entidades:" que pedia as rotas ordenadas alfebeticamente, logo no formato de nome

(Adicinado mais tarde)>>  Em retrospetiva não foi uma decisão adequada, visto que os nomes das entidades são complexos e podem conter espaços, pelo que seria mais simples utilizar ids. Não tive tempo para restruturar de modo a utilizar ids, pelo que mantive o uso de nomes como identificadores. Neste sentido, no desenvolvimentos dos endereços "http://localhost:16001/entidades/:nipc", utilizei o nome da entidade como nipc.
