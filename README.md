# Portfólio Deivy Batista

Portfólio pessoal feito com React e Vite.

## Rodar localmente

Requer Node.js 22 ou superior e pnpm.

```bash
pnpm install
pnpm dev
```

| Comando | O que faz |
| --- | --- |
| `pnpm dev` | Servidor de desenvolvimento |
| `pnpm build` | Gera a versão de produção em `dist/` |
| `pnpm preview` | Serve a pasta `dist/` localmente |
| `pnpm lint` | Verifica o código com o Oxlint |

## Deploy no Netlify

As configurações já estão em `netlify.toml`: comando de build, pasta publicada (`dist`), versão do Node, cache dos arquivos e cabeçalhos de segurança.

1. No Netlify, escolha **Add new site → Import an existing project** e conecte este repositório.
2. Mantenha as configurações detectadas e clique em **Deploy**.

O endereço do site usado no SEO (canonical, Open Graph, `sitemap.xml` e `robots.txt`) vem da variável `URL`, que o Netlify define automaticamente. Para usar outro endereço, como um domínio próprio ainda não configurado no Netlify, cadastre `SITE_URL` em **Site configuration → Environment variables**.

Depois do primeiro deploy, envie `https://seu-site/sitemap.xml` no [Google Search Console](https://search.google.com/search-console) para acelerar a indexação.
