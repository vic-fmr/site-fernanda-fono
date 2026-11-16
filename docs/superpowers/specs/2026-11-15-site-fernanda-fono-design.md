# Site Institucional — Fernanda Fonoaudióloga

## Intent & Why

A tia do cliente é fonoaudióloga e precisa de um site profissional que converta visitantes em agendamentos de consulta. Hoje ela não tem presença web própria. O site deve transmitir credibilidade, apresentar seus serviços, e facilitar ao máximo o contato — principalmente via WhatsApp, que é o canal preferido de pacientes de saúde no Brasil.

O público-alvo, lista de serviços e identidade visual (logo + cores) serão fornecidos posteriormente. A arquitetura deve acomodar esses itens como dados configuráveis, sem exigir refatoração.

## Goals

1. **Conversão em agendamentos** — Todo elemento do site aponta para o CTA de WhatsApp ou formulário de contato
2. **SEO local** — Aparecer no Google para buscas como "fonoaudióloga em [cidade]"
3. **Credibilidade profissional** — Perfil com foto, formação, CRFa e experiência
4. **Mobile-first** — Maioria dos pacientes busca pelo celular
5. **Performance** — Lighthouse ≥ 90 em todas as categorias
6. **Manutenção simples** — Conteúdo centralizado em arquivo de configuração; trocar texto não exige conhecimento de React

## Non-Goals

- E-commerce ou venda de cursos online
- Área de login / portal do paciente
- Blog com CMS completo (pode ser adicionado no futuro, mas não faz parte deste escopo)
- Integração com sistemas de prontuário eletrônico
- Suporte multi-idioma

## Anti-Goals (o que faria este projeto falhar mesmo se "funcionar")

- Site genérico que parece template — precisa ter personalidade e refletir a profissional
- Excesso de informação na home — o visitante deve entender o que ela faz em 5 segundos
- Formulário complexo que desanima o paciente — o caminho até o WhatsApp deve ter no máximo 1 clique
- Site lento em 3G — pacientes em regiões com internet ruim precisam acessar

## Constraints

- **Orçamento de hospedagem:** R$0/mês (Vercel free tier)
- **Domínio próprio:** será adquirido separadamente (ex: fernandafono.com.br)
- **Conteúdo pendente:** público-alvo, serviços, logo, cores, endereço, WhatsApp, Instagram, dados profissionais — a estrutura deve funcionar com placeholders
- **Sem backend:** site 100% estático (SSG), sem banco de dados
- **Formulário de contato:** serviço externo (ex: Formspree, Web3Forms) ou API route simples do Next.js com envio via e-mail

## Approaches

### Abordagem A: Next.js (App Router) + Tailwind CSS — ✅ Escolhida

- **SSG nativo** — páginas pré-renderizadas, zero JS desnecessário no cliente
- **SEO excelente** — metadata API nativa, sitemap, robots.txt, Open Graph
- **Tailwind** — utilidades CSS, design system consistente, fácil customizar cores
- **Deploy na Vercel** — push no GitHub = site atualizado, HTTPS automático
- **Ecossistema** — componentes, ícones, animações (framer-motion) disponíveis
- **Tradeoff:** mais complexo que HTML puro, mas a manutenção a longo prazo compensa

### Abordagem B: Astro + Tailwind CSS — Descartada

- Mais leve e com menos JS, ideal para sites 100% estáticos
- **Por que descartada:** ecossistema menor, menos familiar ao cliente, e o Next.js não tem overhead relevante para um site desse porte quando usando SSG. O benefício de zero-JS do Astro não justifica abrir mão do ecossistema Next.js

### Abordagem C: HTML/CSS/JS puro — Descartada

- Zero dependências, funciona em qualquer hospedagem
- **Por que descartada:** muito mais trabalhoso para manter, sem componentização, sem sistema de rotas, sem otimização de imagens nativa. Para um site de 4+ páginas com seções reutilizáveis, um framework paga o investimento inicial rapidamente

## Architecture

### Páginas

| Página | Rota | Função |
|--------|------|--------|
| **Home** | `/` | Hero com CTA, resumo dos serviços, prova social, FAQ resumido |
| **Sobre** | `/sobre` | Foto, formação, CRFa, experiência, filosofia de trabalho |
| **Serviços** | `/servicos` | Lista de especialidades com descrição e ícones |
| **Contato** | `/contato` | Formulário, mapa Google Maps, endereço, telefone, horários |

### Componentes Compartilhados

| Componente | Descrição |
|------------|-----------|
| `Header` | Logo + navegação responsiva (hamburger no mobile) |
| `Footer` | Links, redes sociais (Instagram), CRFa, copyright |
| `WhatsAppButton` | Botão flutuante fixo no canto inferior direito |
| `CTASection` | Seção reutilizável com chamada para ação |
| `SEOHead` | Metadata, Open Graph, JSON-LD (LocalBusiness schema) |
| `GoogleMap` | Iframe do Google Maps embutido |
| `ServiceCard` | Card de serviço com ícone, título e descrição |
| `FAQAccordion` | Acordeão de perguntas frequentes |
| `ContactForm` | Formulário com nome, telefone, mensagem |

### Estrutura de Dados (arquivo de configuração)

Todo o conteúdo do site fica em `src/data/site-config.ts`:

```typescript
export const siteConfig = {
  name: "Dra. Fernanda — Fonoaudióloga",
  description: "Fonoaudióloga em [Cidade] — Avaliação e tratamento...",
  whatsapp: "5511999999999",
  whatsappMessage: "Olá! Gostaria de agendar uma consulta.",
  instagram: "@fernandafono",
  email: "contato@fernandafono.com.br",
  phone: "(11) 99999-9999",
  address: {
    street: "Rua Exemplo, 123",
    neighborhood: "Centro",
    city: "São Paulo",
    state: "SP",
    zip: "01000-000",
    googleMapsUrl: "https://maps.google.com/...",
    googleMapsEmbed: "https://www.google.com/maps/embed?...",
  },
  professional: {
    fullName: "Fernanda Silva",
    crfa: "CRFa 2-00000",
    title: "Fonoaudióloga",
    education: ["Graduação em Fonoaudiologia — USP", "Pós-graduação em..."],
    experience: "10+ anos de experiência",
    photo: "/images/fernanda.jpg",
  },
  services: [
    {
      title: "Avaliação de Fala e Linguagem",
      description: "Avaliação completa para crianças e adultos...",
      icon: "speech",
    },
    // ... demais serviços
  ],
  faq: [
    {
      question: "Quando devo levar meu filho ao fonoaudiólogo?",
      answer: "É recomendado buscar avaliação quando...",
    },
    // ... demais perguntas
  ],
  seo: {
    city: "São Paulo",
    state: "SP",
    keywords: ["fonoaudióloga", "fonoaudiologia", "fono em São Paulo"],
  },
};
```

### Stack Técnico

| Tecnologia | Versão | Função |
|------------|--------|--------|
| Next.js | 15 (App Router) | Framework, SSG, rotas, metadata |
| React | 19 | Componentes |
| Tailwind CSS | 4 | Estilização |
| TypeScript | 5.x | Tipagem |
| Lucide React | latest | Ícones |
| Framer Motion | latest | Animações sutis (opcional) |
| next-sitemap | latest | Geração de sitemap.xml |

### SEO & Performance

- **JSON-LD** com schema `LocalBusiness` + `MedicalBusiness`
- **Meta tags** dinâmicas por página (title, description, og:image)
- **Sitemap.xml** gerado automaticamente
- **robots.txt** configurado
- **next/image** para otimização automática de imagens
- **Font display: swap** para fontes Google
- **Preconnect** para Google Maps e fontes

### Design Visual

- **Layout:** limpo, espaçoso, tipografia grande
- **Tipografia:** Inter ou fonte similar (Google Fonts)
- **Cores:** variáveis CSS customizáveis via Tailwind (carregadas do `siteConfig` ou `tailwind.config`)
- **Mobile-first:** breakpoints `sm → md → lg`
- **Animações:** fade-in suave ao scroll (Framer Motion InView), nada excessivo
- **Acessibilidade:** contraste WCAG AA, navegação por teclado, alt texts, labels semânticos

## Decisions Left to the Builder

- Escolha exata de animações (se houver)
- Layout específico de cada seção (grid vs. flex, número de colunas)
- Provider do formulário de contato (Formspree vs. Web3Forms vs. API Route)
- Estilo exato do botão de WhatsApp (tamanho, animação de pulse)
- Configuração final do Google Maps embed

## Pending Content (Placeholders)

Os seguintes itens serão fornecidos pelo cliente e estão marcados com placeholders no código:

1. Público-alvo principal
2. Lista completa de serviços oferecidos
3. Logo + paleta de cores (identidade visual)
4. Número de WhatsApp
5. Endereço completo do consultório
6. @ do Instagram
7. Nome completo + número CRFa + formação acadêmica
8. Cidade/região para SEO local
9. Foto profissional
10. Textos de FAQ
