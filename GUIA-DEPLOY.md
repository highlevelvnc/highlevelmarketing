# HighLevelMKT - Guia de Deploy e Personalização

## 🎉 Projeto Completo Criado!

Site premium, ultra moderno, mobile-first com design tecnológico preto + laranja.

---

## 🚀 PASSOS PARA COLOCAR ONLINE (15 minutos)

### 1. Preparar Ambiente Local

```bash
# Descompactar o projeto
cd highlevelmkt

# Instalar dependências
npm install

# Testar localmente
npm run dev
# Abrir http://localhost:3000
```

### 2. Deploy na Vercel (RECOMENDADO - GRATUITO)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login na Vercel
vercel login

# Deploy
vercel

# Para produção
vercel --prod
```

**OU** pela interface web:
1. Ir para vercel.com
2. Conectar repositório GitHub
3. Import projeto
4. Deploy automático

### 3. Configurar Domínio

Na Vercel:
1. Settings → Domains
2. Adicionar `highlevelmkt.com`
3. Configurar DNS conforme instruções

---

## 🔧 PERSONALIZAÇÕES ESSENCIAIS

### 1. Adicionar Tracking (IMPORTANTE para análise)

Editar `index.html`:

```html
<!-- Google Tag Manager -->
Linha ~54: Substituir GTM-XXXXXXX pelo seu ID

<!-- Meta Pixel -->
Linha ~61: Substituir YOUR_PIXEL_ID pelo seu Pixel

<!-- Google Analytics -->
Linha ~73: Substituir G-XXXXXXXXXX pelo seu GA4
```

### 2. Adicionar Conteúdo Real

#### Artigos do Blog
Editar `src/pages/Blog.jsx` e `src/pages/BlogPost.jsx`

#### Casos de Sucesso
Editar `src/pages/Results.jsx`

#### Depoimentos
Editar `src/pages/Testimonials.jsx`

### 3. Adicionar Imagens Reais

Colocar em `public/images/`:
- Logo completo
- Fotos de equipa
- Screenshots de resultados
- Fotos de clientes
- Imagens para blog

Depois usar em componentes:
```jsx
<img src="/images/logo.png" alt="HighLevelMKT" />
```

### 4. Personalizar Textos

Editar traduções em:
- `src/i18n/locales/pt.json` (PT-PT)
- `src/i18n/locales/en.json` (EN)

---

## 📊 ESTRUTURA DE PASTAS

```
highlevelmkt/
├── 📄 index.html          ← SEO, tracking, meta tags
├── 📦 package.json        ← Dependências
├── ⚙️ vite.config.js      ← Config Vite
├── 🎨 tailwind.config.js  ← Cores, fontes, animações
├── src/
│   ├── 📱 App.jsx         ← App principal com rotas
│   ├── 🎨 styles/
│   │   └── index.css      ← Estilos globais
│   ├── 🧩 components/     ← Componentes reutilizáveis
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── WhatsAppButton.jsx
│   │   └── ParticleBackground.jsx
│   ├── 📄 pages/          ← Todas as páginas
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Plans.jsx
│   │   ├── Contact.jsx
│   │   └── NicheLanding.jsx (6 nichos)
│   ├── 📊 data/           ← Dados editáveis
│   │   ├── clients.json   ← Lista de clientes
│   │   └── plans.json     ← Planos e preços
│   └── 🌍 i18n/           ← Traduções
│       └── locales/
│           ├── pt.json
│           └── en.json
└── public/
    ├── favicon.svg
    ├── robots.txt
    └── sitemap.xml
```

---

## 🎨 PERSONALIZAR CORES

Editar `tailwind.config.js`:

```js
colors: {
  'dark-bg': '#0B0B0B',      // Fundo principal
  'dark-card': '#111111',     // Cards
  'dark-surface': '#161616',  // Superfícies
  'orange-primary': '#FF7A00', // Laranja principal
  'orange-hover': '#FF8C1A',   // Laranja hover
}
```

---

## 📱 FUNCIONALIDADES IMPLEMENTADAS

✅ Loading screen animado com barra de progresso
✅ Partículas em canvas (background tecnológico)
✅ Header sticky com blur ao scroll
✅ Menu mobile responsivo
✅ WhatsApp floating button em todas as páginas
✅ Animações on-scroll (Framer Motion)
✅ 6 Landing pages otimizadas para SEO
✅ Sistema de traduções PT-PT / EN
✅ 3 planos com tabela comparativa
✅ Formulário de contacto
✅ Blog structure
✅ Footer completo
✅ Dark theme premium
✅ Respeita prefers-reduced-motion

---

## 🔍 SEO OTIMIZADO

✅ Meta tags completas
✅ Open Graph (Facebook/LinkedIn)
✅ Twitter Cards
✅ Schema.org LocalBusiness
✅ Sitemap.xml
✅ Robots.txt
✅ Canonical tags
✅ URLs limpas
✅ H1 único por página
✅ Alt texts
✅ Links internos estruturados

---

## 📞 CONTACTOS NO SITE

WhatsApp: +351 934 071 660
Email: contato@highlevelmkt.com
Localização: Lisboa, Cascais, Oeiras

Mensagens pré-preenchidas por nicho:
- Imobiliárias
- Restaurantes
- Escolas
- Estética
- Barbearias
- Construção

---

## 🎯 LANDING PAGES POR NICHO

Todas com SEO local optimizado:

1. `/marketing-imobiliario-lisboa`
2. `/marketing-restaurantes-lisboa`
3. `/marketing-escolas-portugal`
4. `/marketing-estetica-lisboa`
5. `/marketing-barbearias-lisboa`
6. `/marketing-construcao-lisboa`

Cada uma tem:
- Hero focado na dor
- 3 promessas realistas
- KPIs em faixas típicas
- Estratégia detalhada
- Entregáveis claros
- Clientes do sector
- CTA WhatsApp personalizado

---

## 💰 PLANOS CONFIGURADOS

1. **Presença Profissional** - 250€/mês
   - 2 redes sociais
   - 8 posts/mês
   - Sem tráfego pago

2. **Leads & Movimento** - 490€/mês
   - Meta Ads OU Google Ads
   - 4 criativos/mês
   - Landing page
   - (+ verba anúncios 300€/mês)

3. **Crescimento Local** - 790€/mês
   - Meta Ads + Google Ads
   - SEO Local
   - 8 criativos/mês
   - 2 Landing pages
   - Automação WhatsApp
   - (+ verba anúncios 500€/mês)

Editar em: `src/data/plans.json`

---

## 📊 MÉTRICAS E KPIs

Valores realistas configurados:
- CTR Meta Ads: 0.7% - 1.5%
- Conversão: 5% - 15%
- CPL varia por nicho (ver detalhes nas landing pages)

Editar em: `src/data/clients.json`

---

## 🐛 TROUBLESHOOTING

### Erro "Cannot find module"
```bash
npm install
```

### Port 3000 em uso
Editar `vite.config.js`:
```js
server: { port: 3001 }
```

### Build falha
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm run build
```

---

## 📈 PRÓXIMOS PASSOS RECOMENDADOS

1. ✅ Fazer deploy básico na Vercel
2. 🎨 Adicionar logo e imagens reais
3. 📝 Escrever artigos do blog
4. 📊 Adicionar casos de sucesso reais
5. 💬 Adicionar mais depoimentos
6. 🔧 Configurar tracking (GTM, Pixel, GA4)
7. 🍪 Implementar cookie consent completo
8. 📧 Integrar com email marketing (opcional)
9. 💬 Adicionar live chat (opcional)
10. 📱 Testar em dispositivos reais

---

## 🎓 COMANDOS ÚTEIS

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Preview do build
npm run preview

# Verificar erros
npm run build 2>&1 | grep error
```

---

## ✅ CHECKLIST PRÉ-LANÇAMENTO

- [ ] Testar todas as páginas
- [ ] Verificar links WhatsApp
- [ ] Testar formulários
- [ ] Verificar responsividade mobile
- [ ] Adicionar tracking codes
- [ ] Configurar domínio
- [ ] Testar performance (Lighthouse)
- [ ] Verificar SEO (Lighthouse)
- [ ] SSL configurado
- [ ] Backup do código

---

## 📞 SUPORTE

Qualquer dúvida sobre o site, entre em contacto.

**Boa sorte com o lançamento! 🚀**

---

© 2026 HighLevelMKT - Site desenvolvido com tecnologia premium
