# 📋 Guia de Metadados - Zank

Este documento mostra onde estão localizados os metadados do site Zank e como modificá-los.

## 📍 Localização dos Metadados

Todos os metadados estão localizados no arquivo **`index.html`** na raiz do projeto.

## 🔧 Como Modificar os Metadados

### 1. **Metadados Primários (SEO Básico)**

Localização: Linhas 8-14 do `index.html`

```html
<!-- Primary Meta Tags -->
<title>Zank - Controle Financeiro Inteligente pelo WhatsApp</title>
<meta name="title" content="Zank - Controle Financeiro Inteligente pelo WhatsApp" />
<meta name="description" content="Controle financeiro inteligente direto do seu WhatsApp. Gerencie gastos, receba lembretes e organize suas metas financeiras de forma simples e prática." />
<meta name="author" content="Zank" />
<meta name="keywords" content="controle financeiro, WhatsApp, gestão financeira, bot financeiro, IA financeira, economia pessoal, finanças pessoais, orçamento, economia" />
<meta name="robots" content="index, follow" />
<meta name="language" content="Portuguese" />
```

**O que modificar:**
- `<title>`: Título que aparece na aba do navegador
- `meta name="description"`: Descrição que aparece nos resultados de busca
- `meta name="keywords"`: Palavras-chave para SEO
- `meta name="author"`: Autor do site

### 2. **Favicon (Ícone do Site)**

Localização: Linhas 16-19 do `index.html`

```html
<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/Logo.svg" />
<link rel="alternate icon" href="/Logo.svg" />
<link rel="apple-touch-icon" href="/Logo.svg" />
```

**O que modificar:**
- `href="/Logo.svg"`: Caminho para o ícone do site
- O arquivo deve estar na pasta `public/`
- Formatos suportados: `.svg`, `.png`, `.ico`

### 3. **Open Graph (Facebook, LinkedIn, etc.)**

Localização: Linhas 21-28 do `index.html`

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://zank.com.br/" />
<meta property="og:title" content="Zank - Controle Financeiro Inteligente pelo WhatsApp" />
<meta property="og:description" content="Controle financeiro inteligente direto do seu WhatsApp. Gerencie gastos, receba lembretes e organize suas metas financeiras." />
<meta property="og:image" content="/Logo.svg" />
<meta property="og:site_name" content="Zank" />
<meta property="og:locale" content="pt_BR" />
```

**O que modificar:**
- `og:url`: URL completa do site
- `og:title`: Título para compartilhamento
- `og:description`: Descrição para compartilhamento
- `og:image`: Imagem para compartilhamento (recomendado: 1200x630px)
- `og:site_name`: Nome do site
- `og:locale`: Idioma e região (pt_BR para português do Brasil)

### 4. **Twitter Card**

Localização: Linhas 30-35 do `index.html`

```html
<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://zank.com.br/" />
<meta name="twitter:title" content="Zank - Controle Financeiro Inteligente pelo WhatsApp" />
<meta name="twitter:description" content="Controle financeiro inteligente direto do seu WhatsApp. Gerencie gastos, receba lembretes e organize suas metas financeiras." />
<meta name="twitter:image" content="/Logo.svg" />
```

**O que modificar:**
- `twitter:url`: URL completa do site
- `twitter:title`: Título para compartilhamento no Twitter
- `twitter:description`: Descrição para compartilhamento no Twitter
- `twitter:image`: Imagem para compartilhamento no Twitter (recomendado: 1200x675px)

### 5. **Theme Color (Cores do Tema)**

Localização: Linhas 37-39 do `index.html`

```html
<!-- Theme Color -->
<meta name="theme-color" content="#9EEA6C" />
<meta name="msapplication-TileColor" content="#9EEA6C" />
```

**O que modificar:**
- `theme-color`: Cor do tema (cor verde claro do Zank: #9EEA6C)
- `msapplication-TileColor`: Cor do tile no Windows

## 📝 Checklist de Metadados

Antes de fazer deploy, verifique:

- [ ] Título está correto e inclui palavras-chave relevantes
- [ ] Descrição está clara e atrativa (máximo 160 caracteres)
- [ ] URL do site está correta (og:url, twitter:url)
- [ ] Imagem de compartilhamento está configurada e otimizada
- [ ] Favicon está configurado corretamente
- [ ] Palavras-chave estão relevantes para o negócio
- [ ] Idioma está configurado como pt-BR

## 🖼️ Imagens Recomendadas

### Favicon
- Tamanho: 32x32px ou 64x64px
- Formato: SVG (recomendado) ou PNG
- Localização: `public/Logo.svg`

### Imagem de Compartilhamento (Open Graph / Twitter)
- Tamanho: 1200x630px (Open Graph) ou 1200x675px (Twitter)
- Formato: PNG ou JPG
- Peso: Máximo 1MB
- Localização: `public/` (ex: `public/og-image.png`)

## 🔗 URLs Importantes

**Atualize as URLs abaixo quando o site estiver em produção:**

1. `og:url`: `https://zank.com.br/` (ou sua URL de produção)
2. `twitter:url`: `https://zank.com.br/` (ou sua URL de produção)
3. `og:image`: `/og-image.png` (caminho da imagem de compartilhamento)
4. `twitter:image`: `/og-image.png` (caminho da imagem de compartilhamento)

## 📚 Recursos Adicionais

- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Meta Tags para SEO](https://developers.google.com/search/docs/advanced/appearance/snippet)

---

**Última atualização:** Dezembro 2024
**Projeto:** Zank Frontend




