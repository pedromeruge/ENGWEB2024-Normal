# Distribuição das aplicações
Tentei desenvolver o "docker-compose.yml" e "DockerFiles" de cada um dos serviços
Não consegui colocar os serviços a funcionar
De qualquer forma, anexei os ficheiros que desenvolvi, caso tenha alguma relevância

#1.1 Setup
- comecei por usar um conversor online para conveter csv para json
- troquei o id das entradas para _id com ctr+f replace no vscode
- depois corri o script script.py para criar um docker-compose com mongodb e as coleções
    - escrevi este comando "python3 script.py contratos testeContratos contratos ~/Desktop/Teste/ENGWEB2024-Normal/contratos2024.json"
    - este script cria um container com mongoDB e outro container para o serviço a desenvolver
    - fornecidos o nome do dataset, da coleção e o ficheiro do import, o script automaticamente cria, com mongoimport, a coleção (no ficheiro dado) para o container do serviço
    - mais tarde substitui este docker-compose por um novo que tentava incorporar todos os serviços e mongoDB

- ao acrescentar as entradas ao container com o script, verifiquei que deu o output "36377 document(s) imported successfully", logo foram importadas as entradas corretamente
- de qualquer forma corri o comando "db.contratos.countDocuments()" dentro da respetiva mongosh e obtive o mesmo resultado 36777 o que comprova a importação correta

#1.2 Queries
no queries.txt


#1.3 API
Nesta rota "GET /contratos?entidade=EEEE:" decidi utilizar o nome da entidade como argumento, por consistencia com a rota "GET /contratos/entidades:" que pedia as rotas ordenadas alfebeticamente, logo no formato de nome

(Adicinado mais tarde)>>  Em retrospetiva não foi uma decisão adequada, visto que os nomes das entidades são complexos e podem conter espaços, pelo que seria mais simples utilizar ids. Neste sentido, no desenvolvimentos dos endereços "http://localhost:16001/entidades/:nipc", utilizei o nome da entidade como nipc.

#2 Interface
Para satisfazer no endereço "http://localhost:16001/entidades/:nipc" o requesito "somatório do valor dos contratos", inclui uma nova rota na API: "http://localhost:16000/contratos/entidadeTotal/:idEntidade", que chamo no serviço de interface