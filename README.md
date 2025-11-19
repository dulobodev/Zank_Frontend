<<<<<<< HEAD
# 💰 Zank - Frontend

Landing page moderna e responsiva para o **Zank**, uma plataforma de controle financeiro inteligente integrada com WhatsApp.

## 📋 Sobre o Projeto

O Zank é uma solução inovadora para gestão financeira pessoal que funciona diretamente pelo WhatsApp. Esta landing page apresenta as funcionalidades, benefícios e planos da plataforma de forma atraente e intuitiva.

### 🎯 Características Principais

- **Design Moderno**: Interface limpa e profissional com paleta de cores verde limão (#9EEA6C) e cinza claro (#E8E8E8)
- **Totalmente Responsivo**: Adaptável para desktop, tablet e mobile
- **Navegação Suave**: Scroll suave entre seções e links de navegação funcionais
- **Menu Mobile**: Menu hambúrguer animado para dispositivos móveis
- **Performance Otimizada**: Lazy loading de imagens e otimizações de carregamento
- **Acessibilidade**: Componentes semânticos e navegação por teclado

## 🛠️ Tecnologias Utilizadas

- **React 18.3** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.8** - Superset JavaScript com tipagem estática
- **Vite 5.4** - Build tool rápida e moderna
- **Tailwind CSS 3.4** - Framework CSS utility-first
- **React Router DOM 6.30** - Roteamento para aplicações React
- **shadcn/ui** - Componentes UI acessíveis e customizáveis
- **Radix UI** - Componentes primitivos acessíveis
- **Lucide React** - Biblioteca de ícones

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn** ou **bun** (gerenciador de pacotes)

## 🚀 Instalação

1. **Clone o repositório**

```bash
git clone <URL_DO_REPOSITORIO>
cd Zank_FrontEnd
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
# ou
bun install
```

## ⚙️ Configuração de Ambiente

Antes de executar o projeto, copie o arquivo `env.example` para `.env` e ajuste o endpoint da API (por padrão usamos `http://localhost:8000`):

```bash
cp env.example .env
```

No PowerShell:

```powershell
Copy-Item env.example .env
```

Edite `VITE_API_URL` conforme o ambiente (produção, homologação, etc). Essa variável é utilizada pelos serviços em `src/services/api.ts` para montar as chamadas `POST /users/`, `POST /auth/token` e `POST /auth/refresh_token`.

## 💻 Como Executar

### Modo Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
bun run dev
```

A aplicação estará disponível em: `http://localhost:8080`

### Build de Produção

Para criar um build de produção:

```bash
npm run build
# ou
yarn build
# ou
bun run build
```

### Preview do Build

Para visualizar o build de produção localmente:

```bash
npm run preview
# ou
yarn preview
# ou
bun run preview
```

### Linting

Execute o linter para verificar o código:

```bash
npm run lint
# ou
yarn lint
# ou
bun run lint
```

## 📁 Estrutura do Projeto

```
Zank_FrontEnd/
├── public/                 # Arquivos estáticos
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/            # Imagens e recursos
│   │   └── card-background.png
│   ├── components/        # Componentes React
│   │   ├── ui/           # Componentes UI (shadcn/ui)
│   │   ├── FeatureCard.tsx
│   │   ├── FeaturesGrid.tsx
│   │   ├── FinalCTASection.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── NavLink.tsx
│   │   ├── PricingSection.tsx
│   │   └── StatsSection.tsx
│   ├── config/           # Configurações (ex.: API base URL)
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utilitários (tokens, helpers, etc.)
│   ├── services/         # Camada de acesso à API (cadastro, login, refresh)
│   ├── pages/            # Páginas da aplicação
│   │   ├── Auth.tsx      # Formulários de cadastro e login
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx           # Componente principal
│   ├── main.tsx          # Ponto de entrada
│   ├── index.css         # Estilos globais
│   └── vite-env.d.ts     # Tipos do Vite
├── index.html            # HTML principal
├── package.json          # Dependências e scripts
├── tailwind.config.ts    # Configuração do Tailwind
├── tsconfig.json         # Configuração do TypeScript
└── vite.config.ts        # Configuração do Vite
```

## 🎨 Componentes Principais

### Header
Componente de navegação com menu responsivo e links para as seções da página.

### HeroSection
Seção hero com título principal, descrição e botões de ação (CTA).

### StatsSection
Seção de estatísticas sobre a realidade financeira do Brasil com fundo verde limão.

### FeaturesGrid
Grid de funcionalidades com 6 cards destacando as principais features do Zank:
- Bot com IA
- Controle do dinheiro
- Lembretes personalizados
- Gerenciamento de gastos
- Organização de metas
- Visualização de despesas

### HowItWorksSection
Seção explicativa sobre como o Zank funciona, com exemplos práticos de uso.

### PricingSection
Seção de planos com toggle entre mensal e anual, incluindo ícones decorativos.

### FinalCTASection
Call-to-action final com ilustração e botão de ação principal.

## 🔐 Autenticação & Integração com API

- Rotas dedicadas `/auth?mode=register` e `/auth?mode=login` com UI moderna.
- Validação client-side com `react-hook-form` + `zod`, seguindo as mesmas regras do backend (`StrongPassword`, `PhoneValidate`).
- Integração direta com a API FastAPI (`POST /users/`, `POST /auth/token`, `POST /auth/refresh_token`) respeitando o `VITE_API_URL`.
- Armazenamento seguro do token JWT no `localStorage` (`zank.accessToken`) para ser usado em requests autenticados.
- Feedback imediato com toasts e tratamento de erros em português.

## 🎨 Paleta de Cores

- **Verde Limão**: `#9EEA6C` - Cor principal de destaque
- **Cinza Escuro**: `#204749` - Cor de texto e elementos escuros
- **Cinza Claro**: `#E8E8E8` - Cor de fundo das seções
- **Branco**: `#FFFFFF` - Cor de fundo de cards e elementos claros

## 📱 Responsividade

A aplicação é totalmente responsiva com breakpoints configurados:

- **Desktop**: Layout completo com todas as funcionalidades
- **Tablet** (max-md): Layout adaptado com grid de 2 colunas
- **Mobile** (max-sm): Layout em coluna única com menu hambúrguer

## 🔗 Navegação

A página possui navegação por âncoras para as seguintes seções:

- `#home` - Seção inicial (Hero e Stats)
- `#funcionalidades` - Seção "Como funciona"
- `#planos` - Seção de preços
- `#contato` - Seção final de CTA
- `/auth?mode=register` - Fluxo de cadastro conectado à API
- `/auth?mode=login` - Fluxo de login com tokens JWT

## 🚀 Deploy

### Vercel

1. Conecte seu repositório à Vercel
2. Configure a variável `VITE_API_URL`
3. Deploy automático a cada push

### Netlify

1. Conecte seu repositório à Netlify
2. Configure o build command: `npm run build`
3. Configure o publish directory: `dist`
4. Informe `VITE_API_URL` em *Site settings → Build & deploy → Environment*
5. Deploy automático a cada push

### Outros Serviços

A aplicação pode ser deployada em qualquer serviço que suporte aplicações estáticas, como:
- GitHub Pages
- AWS S3 + CloudFront
- Azure Static Web Apps
- Firebase Hosting

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📝 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria o build de produção |
| `npm run build:dev` | Cria o build em modo desenvolvimento |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run lint` | Executa o linter ESLint |

## 📄 Licença

Este projeto é privado e proprietário do Zank.

## 👥 Autores

- **Equipe Zank** - Desenvolvimento e design

## 📞 Contato

Para mais informações sobre o Zank, entre em contato através dos canais oficiais.

---

Desenvolvido com ❤️ pela equipe Zank
=======

>>>>>>> 7317a6038295b11058f1e16067c4e8ef5e42fb24
