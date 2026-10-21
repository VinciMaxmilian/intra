# Intranet A1 — Documentação do Projeto

Réplica em front-end do portal de comunicação do Grupo A1. Nesta fase tudo funciona com **dados mock**; o backend (Python + FastAPI) será construído depois, sem exigir reescrita das telas.

## 1. Visão geral

| Item | Situação |
|---|---|
| Frontend | Pronto (placeholder fiel ao modelo): Vite + React 18 + TypeScript |
| Backend | Pendente: FastAPI (pasta `backend/` reservada) |
| Dados | Mock em memória (`frontend/src/mocks/data.ts`) |
| Autenticação | Simulada: qualquer usuário/senha entra |
| Estilo | Flat com neomorfismo, mantendo cores, nomes, logos e ícones do modelo |

## 2. Estrutura de pastas

```
intra/
├── README.md              Resumo rápido
├── PROJETO.md             Este documento
├── referencia/            Prints do portal original (modelo visual)
├── backend/               Reservado para o FastAPI
│   └── README.md
└── frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.ts     Proxy /api → http://localhost:8000
    ├── tsconfig.json
    ├── public/
    │   ├── icons/         25 ícones dos atalhos (PNG transparente)
    │   └── img/           logo.png, logo-branco.png, login-bg.jpg, avatar-demo.jpg
    └── src/
        ├── main.tsx       Entrada: BrowserRouter + AuthProvider
        ├── App.tsx        Definição das rotas
        ├── auth.tsx       Contexto de sessão (mock)
        ├── styles.css     Todo o visual (tokens + neomorfismo)
        ├── types.ts       Interfaces TypeScript
        ├── mocks/data.ts  Dados de exemplo
        ├── services/api.ts  Camada de acesso a dados (ponto de troca p/ o backend)
        ├── components/    Header, Sidebar, RightPanel, Layout, PostCard, Avatar, Icons
        └── pages/         Login, Feed, Profile, Settings, EmailList, Placeholder
```

## 3. Como rodar

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
npm run build      # verificação de tipos + build de produção em dist/
```

Login: digite qualquer usuário e senha. A "sessão" é só uma flag no `localStorage`; o usuário logado é sempre o usuário demo (Paulo Lucio Zimmermann).

## 4. Telas e rotas

| Rota | Tela | Layout |
|---|---|---|
| `/login` | Login com mosaico institucional ("Intranet A1 — Sistema de Gerenciamento") | sem layout |
| `/` | **Página Principal**: comunicados da empresa | 3 colunas |
| `/feed` | **Feed Interativo**: publicações dos colaboradores, com caixa de nova publicação, curtidas, comentários (contadores) e exclusão dos próprios posts | 3 colunas |
| `/perfil` | Perfil: capa, avatar, abas Publicações / Marcações, e-mail e aniversário | 3 colunas |
| `/emergencia` | Contatos de Emergência e Rotas (tabela + espaço do mapa) | 3 colunas |
| `/p/:slug` | Página placeholder ("Conteúdo em construção") usada pelos 25 atalhos, Serviços e Atalhos | 3 colunas |
| `/emails` | **Lista de E-mails** com filtros (Iniciais, Nome, E-mail, Unidade, Área) e botão Limpar Filtros | 2 colunas |
| `/configuracoes` | Configurações → Informações Básicas (primeiro/segundo nome) | 2 colunas, sidebar de configurações |
| `/configuracoes/privacidade` | Configurações → Privacidade | idem |

Rotas internas exigem sessão; sem ela redirecionam para `/login`.

## 5. Anatomia do layout

- **Header** (`Header.tsx`): faixa laranja com logo "Grupo A1" em branco, três botões (destaques ⭐, Página Principal com selo de 40 não lidos, Feed Interativo) e avatar com menu (nome, e-mail, ID de Sessão, Meu Perfil, Configurações, Sair).
- **Sidebar esquerda** (`Sidebar.tsx`): usuário, Página Principal, Feed Interativo; seções **Úteis** (Contatos de Emergência, Lista de e-mail), **Serviços** (Helpdesk TI, Helpdesk SEA, Universidade A1) e **Atalhos** (A1 EPI, A1 EIA1Ferramentas, A1 Ferramentas, A1 Guardião, A1 Notas, A1 PCP, ControlA1, Ficha Tempo, Greendocs, Portal RH, Protheus ERP, RH 1000). Em Configurações troca por Informações Básicas / Privacidade.
- **Painel direito** (`RightPanel.tsx`): "Como estou me sentindo hoje?" (5 emojis em SVG), os 25 atalhos em cards com ícone, e Aniversariantes / Aniversariantes do Mês.
- **Layout** (`Layout.tsx`): protege a rota e monta header + colunas. Props `right` e `sidebar` controlam as variações.

### Atalhos do painel direito (ordem)

Contatos de Emergência e Rotas · A1 em Movimento · Programa A1 Fluxo & Qualidade · Informe de Rendimentos · Tutorial para Apresentações · Valores A1 · Calendário Sede e Escritório · Política da Qualidade · Manual de Cultura · Código de Conduta · Manual do Colaborador · Política de Compliance · Manual da Marca e Procedimentos · Meio Ambiente Iniciativas · Nossos Projetos Sociais · Conheça nossos Benefícios · Universidade Corporativa A1 · Projeto Carona Solidária · Projeto Cegonha1 · Mercado Honesto A1 · Mercado Solidário A1 · Lojinha1 · Torneio A1 · Biblioteca1 · Manual TI

Cada um aponta para `/p/<slug>` e usa o ícone `public/icons/<slug>.png`.

## 6. Identidade visual

Definida em `styles.css` por variáveis CSS (`:root`):

| Token | Valor | Uso |
|---|---|---|
| `--orange` / `--orange-dark` / `--orange-soft` | `#e8741a` / `#cf5f0a` / `#f08a3a` | header, banners, títulos de seção, item ativo |
| `--bg` / `--surface` | `#e6e8ec` | fundo e superfícies |
| `--light` / `--dark` | `#ffffff` / `#c2c6cf` | luz e sombra do neomorfismo |
| `--green` | `#5aaa3c` | verde institucional (reservado) |

**Neomorfismo:** elevação com `--raised` / `--raised-sm` (sombra clara + escura) e rebaixo com `--inset` / `--inset-sm` (campos de texto, item ativo, botões pressionados). O laranja é aplicado chapado (gradiente suave) nos destaques. Fonte: Ubuntu, com fallback para Segoe UI/Arial.

**Ativos:** os logos e os 25 ícones foram recortados dos prints de `referencia/` e convertidos para PNG transparente. Se houver os originais (SVG/PNG), basta substituir os arquivos com o mesmo nome.

## 7. Camada de dados e integração com o backend

Toda leitura/escrita passa por `frontend/src/services/api.ts`. As telas nunca importam os mocks diretamente.

| Função | Hoje | Endpoint sugerido |
|---|---|---|
| `login(user, pass)` | devolve usuário demo | `POST /api/auth/login` |
| `me()` | usuário demo | `GET /api/me` |
| `updateProfile(data)` | mescla no demo | `PATCH /api/me` |
| `getTiles()` | lista fixa | `GET /api/tiles` |
| `getShortcuts()` | lista fixa | `GET /api/shortcuts` |
| `getPosts(channel)` | filtra mock (`comunicacao` ou `feed`) | `GET /api/posts?channel=` |
| `getMyPosts()` | posts do usuário | `GET /api/me/posts` |
| `createPost(text)` | cria localmente | `POST /api/posts` |
| `getBirthdays()` | mock | `GET /api/birthdays` |
| `getEmails(filtros)` | filtra mock no cliente | `GET /api/emails?initials=&name=&email=&unit=&area=` |

**Para integrar:** trocar o corpo de cada função por `fetch('/api/...')` mantendo as assinaturas. Em desenvolvimento, o Vite redireciona `/api/*` para `http://localhost:8000` (configurado em `vite.config.ts`), então não há problema de CORS.

Tipos em `types.ts` (`User`, `Post`, `Tile`, `EmailEntry`, `EmailFilters`, `Birthday`) já espelham o que os schemas Pydantic do FastAPI precisarão devolver.

### Ainda mock / pendente no frontend

- Autenticação real (tokens/cookies, logout no servidor, "mantenha-me conectado", "esqueceu sua senha").
- Curtir/comentar e moderação de posts (o texto da caixa de publicação diz que passa por moderação).
- Humor do dia (apenas seleção visual), Aniversariantes do mês, selo de não lidos (fixo em 40).
- Conteúdo real das páginas `/p/:slug` e da tela de Contatos de Emergência.
- Upload de foto de perfil e salvamento da Privacidade.

## 8. Sugestão de plano para o backend (FastAPI)

1. Estrutura `backend/app/` com `main.py`, `routers/`, `schemas/` (Pydantic), `models/` e `core/`.
2. Banco (PostgreSQL ou SQLite no início) com SQLAlchemy: `users`, `posts`, `comments`, `likes`, `tiles`, `shortcuts`, `birthdays` (derivado de `users`).
3. Autenticação: JWT ou cookie de sessão; como o login do original usa "usuário de rede", prever integração com LDAP/AD.
4. Endpoints da tabela da seção 7, com paginação em posts e e-mails.
5. Fluxo de moderação: posts do feed entram como `pendente` e só aparecem após aprovação.
6. Upload de imagens para posts e avatar.
7. Trocar `services/api.ts` e remover `mocks/` quando tudo estiver ligado.

## 9. Convenções

- Componentes funcionais com hooks; sem biblioteca de UI externa (CSS próprio).
- Tipagem estrita (`strict`, `noUnusedLocals`); `npm run build` roda `tsc -b` antes do Vite.
- Textos e dados de exemplo são placeholders; nomes de pessoas na lista de e-mails são fictícios.
