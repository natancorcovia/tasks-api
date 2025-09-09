# Tasks API 📝 (Em Desenvolvimento)

API de gerenciamento de tarefas com autenticação JWT, construída com **NestJS**.  
Cada usuário pode criar, visualizar, atualizar e deletar suas próprias tarefas.

---

## **Tecnologias**

- Node.js
- NestJS
- JWT (JSON Web Token)
- bcrypt (para hash de senhas)
- TypeScript
- Postman/Insomnia para testes

---

## **Funcionalidades**

- Registro de usuários (em memória)
- Login e geração de token JWT
- CRUD de tarefas vinculado ao usuário
- Proteção de rotas com JWT
- Cada usuário só acessa suas próprias tarefas
