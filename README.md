# HighLevelMKT - Website Premium

Site completo, ultra moderno e mobile-first para agência de marketing digital HighLevelMKT.

## 🎨 Características

- **Design Premium**: Paleta preto (#0B0B0B) + laranja (#FF7A00) tecnológico
- **Efeitos Visuais**: Loading screen animado, partículas em canvas, micro-interações
- **Performance**: Lazy loading, animações otimizadas, respeita prefers-reduced-motion
- **SEO**: Meta tags completas, Schema.org, sitemap, canonical tags
- **i18n**: Suporte PT-PT (principal) e EN (secundário)
- **Mobile-First**: Totalmente responsivo
- **Conversão**: WhatsApp floating button, CTAs estratégicos, formulários otimizados

## 📦 Stack

- **Frontend**: React 18 + Vite
- **Styling**: TailwindCSS com tema customizado
- **Routing**: React Router v6
- **Animações**: Framer Motion
- **i18n**: react-i18next
- **Icons**: Lucide React

## 🚀 Instalação

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

```
highlevelmkt/
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Navegação sticky
│   │   ├── Footer.jsx              # Footer com links
│   │   ├── LoadingScreen.jsx       # Tela de carregamento
│   │   ├── WhatsAppButton.jsx      # Botão flutuante
│   │   ├── ParticleBackground.jsx  # Background tecnológico
│   │   └── sections/
│   │       └── HeroSection.jsx     # Hero da homepage
│   ├── pages/
│   │   ├── Home.jsx                # Página inicial
│   │   ├── Services.jsx            # Serviços
│   │   ├── About.jsx               # Sobre
│   │   ├── Plans.jsx               # Planos e preços
│   │   ├── Results.jsx             # Casos de sucesso
│   │   ├── Testimonials.jsx        # Depoimentos
│   │   ├── Blog.jsx                # Listagem blog
│   │   ├── BlogPost.jsx            # Artigo individual
│   │   ├── Contact.jsx             # Contacto
│   │   └── NicheLanding.jsx        # Landing pages por nicho
│   ├── data/
│   │   ├── clients.json            # Clientes reais
│   │   └── plans.json              # Planos e preços
│   ├── i18n/
│   │   ├── index.js                # Configuração i18n
│   │   └── locales/
│   │       ├── pt.json             # Traduções PT-PT
│   │       └── en.json             # Traduções EN
│   ├── styles/
│   │   └── index.css               # Estilos globais
│   ├── App.jsx                     # App principal
│   └── main.jsx                    # Entry point
├── public/
├── index.html                      # HTML base com SEO
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎯 Páginas Principais

1. **Home** (`/`) - Hero, serviços, nichos, clientes, depoimentos, planos, FAQ
2. **Serviços** (`/servicos`) - Detalhamento de todos os serviços
3. **Planos** (`/planos`) - 3 pacotes com tabela comparativa
4. **Resultados** (`/resultados`) - Casos de sucesso (stub)
5. **Blog** (`/blog`) - Listagem de artigos
6. **Contacto** (`/contacto`) - Formulário + informações

## 🏢 Landing Pages por Nicho

Todas optimizadas para SEO local:

- `/marketing-imobiliario-lisboa` - Imobiliárias
- `/marketing-restaurantes-lisboa` - Restaurantes
- `/marketing-escolas-portugal` - Escolas
- `/marketing-estetica-lisboa` - Estética
- `/marketing-barbearias-lisboa` - Barbearias
- `/marketing-construcao-lisboa` - Construção

## 💰 Planos

1. **Presença Profissional** - 250€/mês
2. **Leads & Movimento** - 490€/mês (+ verba anúncios 300€)
3. **Crescimento Local** - 790€/mês (+ verba anúncios 500€)

## 📊 KPIs Realistas

- CTR Meta Ads: 0.7% - 1.5%
- Conversão: 5% - 15%
- CPL por nicho:
  - Imobiliárias: 10-30€
  - Restaurantes: 2-7€
  - Escolas: 8-25€
  - Estética: 6-20€
  - Barbearias: 2-6€
  - Construção: 12-40€

## 📞 Contactos

- WhatsApp: +351 934 071 660
- Email: contato@highlevelmkt.com
- Localização: Lisboa, Cascais, Oeiras

## 🔧 Configuração de Tracking

### Google Tag Manager
Adicionar GTM ID em `index.html` (linha marcada com comentário)

### Meta Pixel
Adicionar Pixel ID em `index.html` (linha marcada com comentário)

### Google Analytics 4
Adicionar GA4 ID em `index.html` (linha marcada com comentário)

## 🎨 Personalização

### Cores
Editar em `tailwind.config.js`:
```js
colors: {
  'dark-bg': '#0B0B0B',
  'dark-card': '#111111',
  'dark-surface': '#161616',
  'orange-primary': '#FF7A00',
  'orange-hover': '#FF8C1A',
}
```

### Fontes
Mudar em `tailwind.config.js` e `src/styles/index.css`

### Traduções
Editar `src/i18n/locales/pt.json` e `en.json`

### Dados
Editar `src/data/clients.json` e `plans.json`

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Produção
vercel --prod
```

### Configuração Vercel
- Build Command: `npm run build`
- Output Directory: `dist`
- Framework Preset: Vite

## ✅ Checklist Pré-Deploy

- [ ] Adicionar Google Tag Manager ID
- [ ] Adicionar Meta Pixel ID
- [ ] Adicionar Google Analytics 4 ID
- [ ] Configurar domínio highlevelmkt.com
- [ ] Testar todos os links
- [ ] Testar formulários
- [ ] Verificar WhatsApp links
- [ ] Verificar responsividade
- [ ] Testar performance (Lighthouse)
- [ ] Verificar SEO (Lighthouse)
- [ ] Adicionar favicon personalizado

## 📝 Próximos Passos

1. Adicionar conteúdo real nos artigos do blog
2. Completar página de resultados com cases
3. Adicionar mais depoimentos
4. Criar imagens personalizadas
5. Implementar cookie consent completo
6. Adicionar chat ao vivo (opcional)
7. Implementar CRM integração (opcional)

## 🐛 Troubleshooting

### Erro de instalação
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Port já em uso
```bash
# Mudar porta em vite.config.js
server: { port: 3001 }
```

## 📄 Licença

© 2026 HighLevelMKT. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para HighLevelMKT**
