# Gerenciador Financeiro

Um aplicativo web moderno para gerenciamento financeiro pessoal, desenvolvido durante a Full Stack Week #6 da Full Stack Club.

## 🚀 Tecnologias Utilizadas

- **Frontend:**

  - Next.js 14
  - React 18
  - TypeScript
  - Tailwind CSS
  - Radix UI (Componentes acessíveis)
  - React Hook Form
  - Zod (Validação)
  - Recharts (Gráficos)
  - Lucide React (Ícones)

- **Backend:**

  - Next.js API Routes
  - Prisma (ORM)
  - PostgreSQL (Banco de dados)
  - Clerk (Autenticação)
  - Stripe (Pagamentos)
  - OpenAI (Integração com IA)

## ✨ Funcionalidades

- Autenticação segura com Clerk
- Dashboard com visualização de gastos e receitas
- Gráficos interativos para análise financeira
- Categorização de transações
- Relatórios personalizados
- Integração com IA para insights financeiros
- Sistema de assinatura com Stripe
- Interface responsiva e acessível
- Tema claro/escuro

## 🛠️ Configuração do Ambiente

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/gerenciador-financeiro.git
```

2. Instale as dependências

```bash
cd finance-manager
npm install
```

3. Configure as variáveis de ambiente

```bash
cp .env.example .env
```

4. Execute as migrações do banco de dados

```bash
npx prisma migrate dev
```

5. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa a verificação de código
- `npm run prepare` - Configura o Husky e gera os tipos do Prisma

## 🔧 Ferramentas de Desenvolvimento

- ESLint para linting
- Prettier para formatação de código
- Husky para git hooks
- TypeScript para tipagem estática
- Tailwind CSS para estilização

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Contribuição

Contribuições são bem-vindas! Por favor, leia o arquivo [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes sobre nosso código de conduta e o processo para enviar pull requests.

## 📞 Contato

Para mais informações sobre o projeto, entre em contato através do [LinkedIn](www.linkedin.com/in/alanmarinho) ou [GitHub](https://github.com/alanmarinho1).
