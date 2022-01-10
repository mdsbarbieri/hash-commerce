# hash-commerce

## Sobre o projeto
- Projeto foi desenvolvido em NodeJS/Typescript
- O bootstrap da aplicação está localizado em `src/main.ts`

## Instruções para execução

- Necessário ter docker e docker-compose instalado
- No terminal navegar até a pasta da aplicação e executar o
  comando: ```docker-compose -f docker-compose.yml up --build```

## Instruções para execução em desenvolvimento

- Necessário ter docker/docker-compose/node:16.13.1/yarn instalado
- No terminal navegar até a pasta da aplicação
- Executar a instalação das dependências: ```yarn install```
- Copiar a definição das variáveis de ambiente: ```cp .env.example .env && cp .env.test.example .env.test```
- Executar o comando: ```docker-compose -f docker-compose.dev.yml up```
- Em um segundo terminal executar o comando: ```yarn dev```
- Para rodar os testes é executar o comando ```yarn test``` ou ```yarn test:watch``` para escutar alterações no código

## Endpoints

### Adicionar item ao carrinho:

```
  curl --location --request POST 'http://localhost:4000/cart/1' \
  --header 'Content-Type: application/json' \
  --data-raw '{"products": [{"id": 1, "quantity": 1}]}'
```

### Resgatar um carrinho:

```
  curl --location --request GET 'http://localhost:4000/cart/1' \
  --header 'Content-Type: application/json'
```