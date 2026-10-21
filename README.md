# Intranet A1

Réplica do portal de comunicação (frontend com dados mock; backend FastAPI virá depois).

- `frontend/` — Vite + React + TypeScript. `cd frontend && npm install && npm run dev`
- `backend/` — reservado para FastAPI.
- `referencia/` — imagens do portal original usadas como modelo.

Login: qualquer usuário/senha (mock). Todo acesso a dados passa por `frontend/src/services/api.ts`;
para integrar o backend, troque essas funções por `fetch('/api/...')` (o Vite já faz proxy de `/api` → `localhost:8000`).
