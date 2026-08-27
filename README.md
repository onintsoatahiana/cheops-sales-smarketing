# CHEOPS Sales Copilot
## Démarrage
```bash
npm install
npm run dev
```
Ouvrir `http://localhost:3000`.

## Production
```bash
npm run build
npm run start
```
Compatible Vercel et Netlify (adaptateur Next requis selon configuration Netlify).

## Architecture
- `app/` : routes Next.js App Router
- `components/` : shell et composants UI
- `lib/` : types et seed data
- `store/` : persistance Zustand/localStorage

## Intégrations à brancher avant production réelle
1. Authentification SSO/OIDC.
2. API CRM/HubSpot côté serveur.
3. Webhooks Make avec secrets serveur.
4. Moteur Amoïn via API sécurisée.
5. Base de données (PostgreSQL/Prisma).
6. RBAC, audit logs, CSP et monitoring.
