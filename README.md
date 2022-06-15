# NodeJs
Aplicaç~]ao CRUD em Node

## Rota /projects - método GET
Acessa todos os projetos do servidor e retorna a lista completa no corpo da resposta
![image](https://user-images.githubusercontent.com/98959848/173846805-0ec642d1-4e03-4444-a8b8-2aa9d576be76.png)

## Rota /projects?title=Aplicação CRUD nodeJs - método GET
Acessa projeto com título enviado na query da requisição
![image](https://user-images.githubusercontent.com/98959848/173848164-94cbb5b0-830c-44c2-b41b-b39117828d3a.png)

## Rota /projects - método POST
Criação de id (middleware que utiliza biblioteca uuidv), título do projeto e proprietário enviados no corpo da requisição
![image](https://user-images.githubusercontent.com/98959848/173847318-1e96f085-5fc8-49ce-9038-d6d6eeddc3b1.png)
![image](https://user-images.githubusercontent.com/98959848/173847452-c4ec7a45-d1c7-4c75-bffe-00e165464cf7.png)

## Rota /projects/:id - método PUT
Atualização dos dados do projeto cadastrado 
Id enviado através dos parâmetros da requisição (query) e os dados a serem atualizados, no corpo da requisição.
Dados atualizados serão enviados no corpo da resposta: 
![image](https://user-images.githubusercontent.com/98959848/173849120-df228a9f-25fe-4c82-8805-00443970d677.png)

Verificamos que a base foi atualizada:
![image](https://user-images.githubusercontent.com/98959848/173849266-5ed03f9d-1aa1-470e-a058-9fed48a881f6.png)

Caso o id enviado na query seja inválido, será retornado uma resposta de erro:
![image](https://user-images.githubusercontent.com/98959848/173849581-7503ee1f-b282-4285-bae4-5b5af8db473c.png)

Caso o id enviado seja válido, porém não encontrado na base, será retornado um erro:
![image](https://user-images.githubusercontent.com/98959848/173850256-9ab114dc-5d57-41d1-b6f4-f69a223359d3.png)

## Rota /projects/:id - método DELETE
Deleta projeto cadastrado através do id enviado pela query da requisição
Como resposta, envia o status 204 sem nenhum dado no corpo
![image](https://user-images.githubusercontent.com/98959848/173851345-40cf72a2-bef8-485d-ad2c-52cba7bbe389.png)

Caso o id não seja encontrado na base, será retornado um erro:
![image](https://user-images.githubusercontent.com/98959848/173851661-b7a19f6b-1210-40aa-80e4-ded9ca101699.png)








