# Site Institucional Fernanda Fonoaudióloga Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir um site institucional completo, acessível, mobile-first e otimizado para SEO local para uma fonoaudióloga, convertendo visitantes em agendamentos de consulta via WhatsApp e formulário de contato.

**Architecture:** Aplicação Next.js 15 (App Router) com renderização estática (SSG) e Tailwind CSS, onde 100% dos dados textuais, de contato e serviços são desacoplados e centralizados em `src/data/site-config.ts`. A estrutura é composta por 4 páginas (`/`, `/sobre`, `/servicos`, `/contato`), componentes reutilizáveis acessíveis, botão flutuante de WhatsApp, formulário Web3Forms, mapa interativo e metadados JSON-LD (MedicalBusiness).

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Lucide React, Vitest, React Testing Library.

**Spec:** [2026-11-15-site-fernanda-fono-design.md](file:///C:/Users/HOME/github/site-fernanda-fono/docs/superpowers/specs/2026-11-15-site-fernanda-fono-design.md)

## Global Constraints

- **Hospedagem:** Vercel Free Tier (Deploy estático / SSG).
- **Sem Backend próprio:** Formulário via Web3Forms (ou serviço serverless estático), sem banco de dados.
- **Conteúdo flexível:** Todo conteúdo e placeholders devem vir estritamente de `src/data/site-config.ts`.
- **Acessibilidade:** Padrão WCAG AA (contraste, navegação por teclado, tags semânticas e aria-labels).
- **SEO:** Metadados dinâmicos por rota, sitemap.xml, robots.txt e JSON-LD schema `MedicalBusiness`.

## Review Focus

1. **WhatsApp link formatting:** Números com ou sem formatação internacional (`5511...`) devem abrir a URL `https://wa.me/...` com mensagem codificada via `encodeURIComponent`.
2. **Mobile Nav toggle:** Menu hamburger deve abrir/fechar corretamente no mobile sem quebrar o layout e bloquear/restaurar rolagem se necessário.
3. **Form submission state:** O formulário de contato deve exibir estados claros de carregamento, sucesso e erro para não desorientar o paciente.
4. **Google Maps embed fallback:** Se a URL de embed não estiver preenchida ou falhar, deve haver um link direto funcional para o endereço físico no Google Maps.
5. **SSG Static Export compatibility:** As páginas não devem conter chamadas dinâmicas inseguras em tempo de execução que impeçam `next build`.

---

### Task 1: Project Scaffolding & Test Setup

**Files:**
- Create: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.mjs`, `next.config.ts`, `vitest.config.ts`
- Create: `tests/setup.ts`
- Create: `src/app/layout.tsx`, `src/app/globals.css`
- Test: `tests/scaffold.test.ts`

**Interfaces:**
- Produces: Base do projeto com suporte a Next.js App Router, Tailwind CSS e testes com Vitest/Testing Library.

- [ ] **Step 1: Write initial test to verify test environment**

```typescript
// tests/scaffold.test.ts
import { describe, it, expect } from "vitest";

describe("Scaffold Environment", () => {
  it("runs unit tests correctly", () => {
    expect(true).toBe(true);
  });
});
```

- [ ] **Step 2: Run test to verify failure (sem vitest instalado)**

Run: `npx vitest run tests/scaffold.test.ts`
Expected: FAIL (módulo ou comando não encontrado)

- [ ] **Step 3: Setup project structure and configuration**

Criar `package.json`, instalar dependências (`next`, `react`, `react-dom`, `lucide-react`, `tailwindcss`, `@tailwindcss/postcss`, `postcss`, `typescript`, `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`).
Configurar `vitest.config.ts`, `tailwind.config.ts`, `postcss.config.mjs`, `tsconfig.json`, `src/app/layout.tsx` e `src/app/globals.css`.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json tsconfig.json tailwind.config.ts postcss.config.mjs next.config.ts vitest.config.ts tests/ src/
git commit -m "chore: scaffold Next.js 15 project with Tailwind CSS and Vitest"
```

---

### Task 2: Site Configuration Schema & Types

**Files:**
- Create: `src/types/site.ts`
- Create: `src/data/site-config.ts`
- Test: `tests/site-config.test.ts`

**Interfaces:**
- Produces: `SiteConfig` type e objeto `siteConfig` contendo todas as variáveis, textos, contatos e placeholders da clínica.

- [ ] **Step 1: Write failing test for siteConfig validation**

```typescript
// tests/site-config.test.ts
import { describe, it, expect } from "vitest";
import { siteConfig } from "@/data/site-config";

describe("siteConfig", () => {
  it("contains required contact and metadata properties", () => {
    expect(siteConfig.name).toBeDefined();
    expect(siteConfig.whatsapp).toMatch(/^\d+$/);
    expect(siteConfig.professional.crfa).toBeDefined();
    expect(siteConfig.services.length).toBeGreaterThan(0);
    expect(siteConfig.faq.length).toBeGreaterThan(0);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/site-config.test.ts`
Expected: FAIL (módulo `@/data/site-config` não existe)

- [ ] **Step 3: Implement `src/types/site.ts` and `src/data/site-config.ts`**

Definir tipagens estritas (`SiteConfig`, `ServiceItem`, `FAQItem`, `ProfessionalInfo`, `AddressInfo`) e instanciar `siteConfig` com dados padrão e placeholders coerentes.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/site-config.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/types/site.ts src/data/site-config.ts tests/site-config.test.ts
git commit -m "feat: define siteConfig schema, types, and defaults"
```

---

### Task 3: Base Shared UI Components (Header, Footer, WhatsAppButton)

**Files:**
- Create: `src/components/Header.tsx`
- Create: `src/components/Footer.tsx`
- Create: `src/components/WhatsAppButton.tsx`
- Test: `tests/components/Header.test.tsx`
- Test: `tests/components/WhatsAppButton.test.tsx`

**Interfaces:**
- Consumes: `siteConfig` de `@/data/site-config`
- Produces: Componentes de navegação, rodapé institucional e botão flutuante para contato instantâneo.

- [ ] **Step 1: Write failing tests for Header and WhatsAppButton**

```typescript
// tests/components/WhatsAppButton.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { WhatsAppButton } from "@/components/WhatsAppButton";

describe("WhatsAppButton", () => {
  it("renders a link with wa.me and proper encoded message", () => {
    render(<WhatsAppButton />);
    const link = screen.getByRole("link", { name: /agendar via whatsapp/i });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link.getAttribute("href")).toContain("https://wa.me/");
  });
});
```

- [ ] **Step 2: Run test to verify failure**

Run: `npx vitest run tests/components/WhatsAppButton.test.tsx`
Expected: FAIL (componente não encontrado)

- [ ] **Step 3: Implement Header, Footer, and WhatsAppButton**

Criar `Header.tsx` com navegação desktop e mobile responsiva (hamburger menu com aria-expanded), `Footer.tsx` com dados do CRFa, Instagram e links rápidos, e `WhatsAppButton.tsx` com posição fixa `bottom-6 right-6`, ícone, animação de pulso e acessibilidade.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/components/WhatsAppButton.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/Header.tsx src/components/Footer.tsx src/components/WhatsAppButton.tsx tests/components/
git commit -m "feat: implement Header, Footer, and floating WhatsApp CTA"
```

---

### Task 4: Interactive Feature Components (ServiceCard, FAQAccordion, ContactForm, GoogleMap)

**Files:**
- Create: `src/components/ServiceCard.tsx`
- Create: `src/components/FAQAccordion.tsx`
- Create: `src/components/ContactForm.tsx`
- Create: `src/components/GoogleMap.tsx`
- Test: `tests/components/FAQAccordion.test.tsx`
- Test: `tests/components/ContactForm.test.tsx`

**Interfaces:**
- Consumes: Tipos de `@/types/site`, Web3Forms API para envio assíncrono.
- Produces: Cards de serviço, acordeão acessível de perguntas, formulário com feedback visual e iframe responsivo do mapa.

- [ ] **Step 1: Write failing test for FAQAccordion**

```typescript
// tests/components/FAQAccordion.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FAQAccordion } from "@/components/FAQAccordion";

describe("FAQAccordion", () => {
  const items = [
    { question: "O que faz a fono?", answer: "Trata fala e linguagem." },
  ];

  it("expands answer on click", () => {
    render(<FAQAccordion items={items} />);
    const button = screen.getByRole("button", { name: /o que faz a fono/i });
    expect(screen.queryByText("Trata fala e linguagem.")).toBeNull();
    fireEvent.click(button);
    expect(screen.getByText("Trata fala e linguagem.")).toBeDefined();
  });
});
```

- [ ] **Step 2: Run test to verify failure**

Run: `npx vitest run tests/components/FAQAccordion.test.tsx`
Expected: FAIL

- [ ] **Step 3: Implement ServiceCard, FAQAccordion, ContactForm, and GoogleMap**

Implementar acordeão com `aria-expanded` e controle de estado aberto/fechado; formulário com campos Nome, Telefone/WhatsApp, Mensagem e estados (submitting, success, error); ServiceCard com suporte a ícones; e GoogleMap com iframe responsivo e fallback para link externo.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/components/FAQAccordion.test.tsx tests/components/ContactForm.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/ServiceCard.tsx src/components/FAQAccordion.tsx src/components/ContactForm.tsx src/components/GoogleMap.tsx tests/components/
git commit -m "feat: add ServiceCard, FAQAccordion, ContactForm and GoogleMap components"
```

---

### Task 5: Home Page (`/`)

**Files:**
- Create/Modify: `src/app/page.tsx`
- Test: `tests/pages/Home.test.tsx`

**Interfaces:**
- Consumes: `siteConfig`, `ServiceCard`, `FAQAccordion`, `WhatsAppButton`.
- Produces: Página inicial completa com Hero Section, Destaques de Atendimento, Quem Sou (resumo), FAQ e Seção de Chamada para Ação (CTA).

- [ ] **Step 1: Write test for Home Page elements**

```typescript
// tests/pages/Home.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders hero section with CTA and main headline", () => {
    render(<HomePage />);
    expect(screen.getByRole("heading", { level: 1 })).toBeDefined();
    expect(screen.getAllByRole("link", { name: /agendar/i }).length).toBeGreaterThan(0);
  });
});
```

- [ ] **Step 2: Run test to verify failure**

Run: `npx vitest run tests/pages/Home.test.tsx`
Expected: FAIL

- [ ] **Step 3: Implement Home Page in `src/app/page.tsx`**

Estruturar seções:
1. **Hero:** Título atraente, subtítulo, botão principal de Agendamento WhatsApp e botão secundário "Conheça os Serviços".
2. **Serviços em Destaque:** Grid responsivo dos principais tratamentos com link para a página completa.
3. **Sobre Resumido:** Apresentação da fonoaudióloga, badge do CRFa e link "Conheça minha trajetória".
4. **FAQ Resumido:** Principais dúvidas dos pacientes.
5. **CTA Final:** Fundo acolhedor e convite para conversa pelo WhatsApp.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/pages/Home.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx tests/pages/Home.test.tsx
git commit -m "feat: implement comprehensive Home page layout and sections"
```

---

### Task 6: Sobre Page (`/sobre`)

**Files:**
- Create: `src/app/sobre/page.tsx`
- Test: `tests/pages/Sobre.test.tsx`

**Interfaces:**
- Consumes: `siteConfig.professional`
- Produces: Página de perfil detalhado com biografia, formação, registro profissional e filosofia de atendimento humanizado.

- [ ] **Step 1: Write test for Sobre Page**

```typescript
// tests/pages/Sobre.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SobrePage from "@/app/sobre/page";
import { siteConfig } from "@/data/site-config";

describe("SobrePage", () => {
  it("renders professional credentials and biography", () => {
    render(<SobrePage />);
    expect(screen.getByText(siteConfig.professional.crfa)).toBeDefined();
    expect(screen.getByRole("heading", { name: new RegExp(siteConfig.professional.fullName, "i") })).toBeDefined();
  });
});
```

- [ ] **Step 2: Run test to verify failure**

Run: `npx vitest run tests/pages/Sobre.test.tsx`
Expected: FAIL

- [ ] **Step 3: Implement `src/app/sobre/page.tsx`**

Construir página com foto da profissional, selo de validação CRFa, lista de formações/especializações, abordagem terapêutica acolhedora e CTA para agendamento.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/pages/Sobre.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/app/sobre/page.tsx tests/pages/Sobre.test.tsx
git commit -m "feat: create Sobre page with credentials and bio"
```

---

### Task 7: Serviços Page (`/servicos`)

**Files:**
- Create: `src/app/servicos/page.tsx`
- Test: `tests/pages/Servicos.test.tsx`

**Interfaces:**
- Consumes: `siteConfig.services`
- Produces: Página detalhada listando todas as áreas de atuação (fala, linguagem, motricidade, voz, etc.) com sintomas comuns que indicam necessidade de acompanhamento.

- [ ] **Step 1: Write test for Serviços Page**

```typescript
// tests/pages/Servicos.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ServicosPage from "@/app/servicos/page";
import { siteConfig } from "@/data/site-config";

describe("ServicosPage", () => {
  it("renders all services from siteConfig", () => {
    render(<ServicosPage />);
    siteConfig.services.forEach((service) => {
      expect(screen.getByText(service.title)).toBeDefined();
    });
  });
});
```

- [ ] **Step 2: Run test to verify failure**

Run: `npx vitest run tests/pages/Servicos.test.tsx`
Expected: FAIL

- [ ] **Step 3: Implement `src/app/servicos/page.tsx`**

Estruturar cabeçalho com proposta de valor, grid de serviços detalhados, bloco "Quando procurar um fonoaudiólogo?" e botões diretos de consulta para cada especialidade.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/pages/Servicos.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/app/servicos/page.tsx tests/pages/Servicos.test.tsx
git commit -m "feat: build Servicos page with specialties catalog"
```

---

### Task 8: Contato Page (`/contato`)

**Files:**
- Create: `src/app/contato/page.tsx`
- Test: `tests/pages/Contato.test.tsx`

**Interfaces:**
- Consumes: `siteConfig.address`, `siteConfig.phone`, `ContactForm`, `GoogleMap`
- Produces: Página de contato unificada com formulário, canais de comunicação direta, horários de atendimento e localização.

- [ ] **Step 1: Write test for Contato Page**

```typescript
// tests/pages/Contato.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ContatoPage from "@/app/contato/page";
import { siteConfig } from "@/data/site-config";

describe("ContatoPage", () => {
  it("displays contact details and form", () => {
    render(<ContatoPage />);
    expect(screen.getByText(new RegExp(siteConfig.address.city, "i"))).toBeDefined();
    expect(screen.getByRole("button", { name: /enviar mensagem/i })).toBeDefined();
  });
});
```

- [ ] **Step 2: Run test to verify failure**

Run: `npx vitest run tests/pages/Contato.test.tsx`
Expected: FAIL

- [ ] **Step 3: Implement `src/app/contato/page.tsx`**

Montar layout em 2 colunas no desktop:
- Coluna esquerda: Informações de contato (endereço, telefone, WhatsApp, Instagram, horários de atendimento).
- Coluna direita: Formulário de contato funcional.
- Seção inferior: Mapa interativo ou embed do Google Maps com rotas.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/pages/Contato.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/app/contato/page.tsx tests/pages/Contato.test.tsx
git commit -m "feat: implement Contato page with map and interactive form"
```

---

### Task 9: SEO, Local Business JSON-LD, Sitemap & Robots

**Files:**
- Create: `src/app/robots.ts`
- Create: `src/app/sitemap.ts`
- Create: `src/components/JsonLd.tsx`
- Modify: `src/app/layout.tsx`
- Test: `tests/seo.test.ts`

**Interfaces:**
- Consumes: `siteConfig.seo`, `siteConfig.address`
- Produces: Metadados globais Open Graph, Twitter Cards, Sitemap dinâmico, Robots.txt e Schema.org `MedicalBusiness` / `LocalBusiness`.

- [ ] **Step 1: Write test for JSON-LD structure**

```typescript
// tests/seo.test.ts
import { describe, it, expect } from "vitest";
import { generateMedicalBusinessSchema } from "@/components/JsonLd";
import { siteConfig } from "@/data/site-config";

describe("SEO JSON-LD", () => {
  it("generates valid schema.org MedicalBusiness data", () => {
    const schema = generateMedicalBusinessSchema();
    expect(schema["@type"]).toBe("MedicalBusiness");
    expect(schema.name).toBe(siteConfig.name);
    expect(schema.address.addressLocality).toBe(siteConfig.address.city);
  });
});
```

- [ ] **Step 2: Run test to verify failure**

Run: `npx vitest run tests/seo.test.ts`
Expected: FAIL

- [ ] **Step 3: Implement SEO components and Next.js route handlers**

Criar `src/components/JsonLd.tsx` gerando `MedicalBusiness`, implementar `src/app/sitemap.ts` mapeando todas as rotas estáticas e `src/app/robots.ts` permitindo indexação padrão. Atualizar `layout.tsx` com as tags de metadata.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/seo.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/app/robots.ts src/app/sitemap.ts src/components/JsonLd.tsx src/app/layout.tsx tests/seo.test.ts
git commit -m "feat: add SEO local optimization, schema.org JSON-LD, sitemap, and robots.txt"
```

---

### Task 10: Production Build, Responsiveness & Quality Verification

**Files:**
- Modify (if needed): ajustes finos em estilos ou configurações
- Test: Suíte completa de testes + `npm run build`

**Interfaces:**
- Produces: Verificação de ponta a ponta sem erros de build estático (SSG), cobertura de testes e confirmação de qualidade.

- [ ] **Step 1: Run complete test suite**

Run: `npm test`
Expected: All tests PASS

- [ ] **Step 2: Run production build check**

Run: `npm run build`
Expected: Build succeeds with 0 errors and generates static pages for `/`, `/sobre`, `/servicos`, `/contato`.

- [ ] **Step 3: Verify linting and formatting**

Run: `npm run lint` (se configurado) ou `npx tsc --noEmit`
Expected: 0 type errors.

- [ ] **Step 4: Final commit and cleanup**

```bash
git add .
git commit -m "chore: verify production build, tests, and static export readiness"
```
