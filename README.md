# Backend Limpo  
Vídeo da Cod3r - https://www.youtube.com/watch?v=5p5sE62bBVs

## Referências
https://bun.sh/
https://elysiajs.com/
https://www.prisma.io/docs/getting-started/quickstart


### Instalar o Bun
> curl -fsSL https://bun.sh/install | bash

## Criar projeto Elysia with Bun runtime

### Getting Started
To get started with this template, simply paste this command into your terminal:
```bash
> bun create elysia backend
```

### Development
To start the development server run:
```bash
> bun run dev
```

Open http://localhost:3000/ with your browser to see the result.

## Instalar Prisma no projeto

> bun install -d prisma

## Instalar o provider do postgresql do Prisma
> bunx prisma init --datasource-provider postgresql

## Registrar a pasta e arquivo do schema.prisma
> bunx prisma generate --schema=./src/external/prisma/schema.prisma

## Executar a migration do prisma
> bunx prisma migrate dev --name init --schema=./src/external/prisma/schema.prisma


 