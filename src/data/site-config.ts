export interface ServiceItem {
  id: string;
  iconName: 'Activity' | 'Brain' | 'Volume2' | 'Smile' | 'Users' | 'ShieldCheck';
  title: string;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  indicatedFor: string[];
  benefits: string[];
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  text: string;
  highlight: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ModalityItem {
  title: string;
  description: string;
  tag: string;
}

export interface SiteConfig {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    siteUrl: string;
  };
  professional: {
    name: string;
    treatmentTitle: string; // Ex: "Dra. Fernanda Marques"
    role: string; // Ex: "Fonoaudióloga Clínica"
    crfa: string; // Ex: "CRFa 2-12345"
    heroHighlightBadge: string;
    shortBio: string;
    fullBioParagraphs: string[];
    qualifications: string[];
    credentials: {
      label: string;
      value: string;
    }[];
  };
  positioning: {
    badge: string;
    heroHeadline: string;
    heroHighlightWord: string;
    heroSubheadline: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    stats: {
      value: string;
      label: string;
    }[];
    modalitiesTitle: string;
    modalitiesSubtitle: string;
    modalities: ModalityItem[];
  };
  servicesSection: {
    tag: string;
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  methodologySection: {
    tag: string;
    title: string;
    subtitle: string;
    steps: StepItem[];
  };
  aboutSection: {
    tag: string;
    title: string;
    subtitle: string;
    quote: string;
  };
  testimonialsSection: {
    tag: string;
    title: string;
    subtitle: string;
    items: TestimonialItem[];
  };
  faqSection: {
    tag: string;
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    phoneDisplay: string;
    whatsappNumber: string; // Somente números (DDI + DDD + número)
    whatsappDefaultMessage: string;
    email: string;
    address: string;
    neighborhoodAndCity: string;
    hours: string;
    mapEmbedUrl?: string;
    directMapUrl: string;
  };
  navLinks: {
    label: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  meta: {
    title: "Dra. Fernanda Marques | Fonoaudiologia Adulta & Reabilitação",
    description: "Atendimento fonoaudiológico especializado no público adulto e idoso. Reabilitação pós-AVC, disfagia (deglutição segura), motricidade orofacial e voz baseada em evidências científicas.",
    keywords: [
      "Fonoaudiologia adulto",
      "Reabilitação pós AVC fonoaudiologia",
      "Tratamento de disfagia",
      "Fonoaudióloga São Paulo",
      "Reabilitação vocal adulto",
      "Paralisia facial fono",
      "Deglutição segura",
      "Home care fonoaudiologia"
    ],
    siteUrl: "https://fernandafono.com.br",
  },
  professional: {
    name: "Fernanda Marques",
    treatmentTitle: "Dra. Fernanda Marques",
    role: "Fonoaudióloga Clínica & Reabilitação Funcional",
    crfa: "CRFa 2-24890",
    heroHighlightBadge: "Atendimento Clínico & Home Care",
    shortBio: "Fonoaudióloga com mais de 10 anos de prática clínica hospitalar e ambulatorial, dedicada à reabilitação neurofuncional de adultos e idosos, disfagia e aperfeiçoamento da comunicação.",
    fullBioParagraphs: [
      "Sou graduada em Fonoaudiologia com especialização em Disfagia e Neuroreabilitação do Adulto. Minha atuação é guiada pela prática baseada em evidências científicas aliada a um olhar profundamente humano e acolhedor.",
      "Ao longo de mais de uma década de experiência em ambientes hospitalares, clínicas de referência e atendimentos domiciliares (home care), compreendi que reabilitar a fala, a voz e a deglutição é, acima de tudo, devolver a dignidade, a autonomia e o prazer de viver ao paciente e tranquilidade à sua família.",
      "Cada plano terapêutico que desenho é único, respeitando as prioridades do paciente, sua rotina e as orientações necessárias para que os cuidadores e familiares se tornem parceiros ativos na recuperação."
    ],
    qualifications: [
      "Especialização em Disfagia e Transtornos da Deglutição no Adulto",
      "Aprimoramento em Fonoaudiologia Neurofuncional e Pós-AVC",
      "Capacitação em Eletroestimulação e Laserterapia aplicadas à Motricidade Orofacial",
      "Certificação em Treinamento de Cuidadores e Manejo de Vias Aéreas/Cânulas",
      "Membro atuante de comitês científicos de fonoaudiologia hospitalar"
    ],
    credentials: [
      { label: "Registro Profissional", value: "CRFa 2-24890" },
      { label: "Experiência", value: "+10 anos de prática" },
      { label: "Abordagem", value: "Baseada em Evidências" },
      { label: "Modalidades", value: "Consultório, Home Care e Online" }
    ]
  },
  positioning: {
    badge: "Fonoaudiologia Especializada no Adulto",
    heroHeadline: "Recupere a autonomia na",
    heroHighlightWord: "comunicação e alimentação",
    heroSubheadline: "Cuidado humanizado e científico para reabilitação pós-AVC, disfagia (engasgos e deglutição), motricidade facial e saúde vocal no adulto e idoso.",
    primaryCtaText: "Agendar Avaliação",
    secondaryCtaText: "Conhecer Áreas de Atuação",
    stats: [
      { value: "+10", label: "Anos de prática clínica" },
      { value: "100%", label: "Planos individualizados" },
      { value: "CRFa", label: "Registro Ativo e Regular" },
      { value: "3", label: "Modalidades de atendimento" }
    ],
    modalitiesTitle: "Como você prefere ser atendido?",
    modalitiesSubtitle: "Opções flexíveis desenhadas para atender diferentes níveis de mobilidade e conforto.",
    modalities: [
      {
        title: "Atendimento em Consultório",
        description: "Espaço acessível, silencioso e totalmente equipado com recursos modernos para avaliação e terapia.",
        tag: "Presencial"
      },
      {
        title: "Home Care (Domiciliar)",
        description: "Atendimento no conforto de casa para pacientes com mobilidade reduzida, acamados ou em transição pós-alta hospitalar.",
        tag: "Máximo Conforto"
      },
      {
        title: "Teleatendimento / Orientação",
        description: "Consultas virtuais para acompanhamento, reabilitação vocal e alinhamento de condutas com familiares e cuidadores.",
        tag: "Praticidade"
      }
    ]
  },
  servicesSection: {
    tag: "Especialidades Clínicas",
    title: "Áreas de Atuação em Reabilitação",
    subtitle: "Tratamentos focados em restaurar a funcionalidade, independência e segurança nas atividades essenciais do cotidiano.",
    items: [
      {
        id: "disfagia",
        iconName: "Activity",
        title: "Reabilitação da Deglutição (Disfagia)",
        badge: "Segurança Alimentar",
        shortDescription: "Tratamento para engasgos frequentes, tosse durante as refeições e dificuldade para engolir alimentos ou líquidos.",
        fullDescription: "A disfagia compromete a nutrição, a hidratação e pode provocar pneumonias aspirativas. Realizamos avaliação clínica funcional da deglutição, treino miofuncional e gerenciamento de consistências para garantir uma alimentação prazerosa e segura.",
        indicatedFor: [
          "Engasgos e tosse frequente ao comer ou beber",
          "Sensação de alimento parado na garganta",
          "Perda de peso sem causa aparente ou recusa alimentar",
          "Pacientes em transição de sonda para via oral",
          "Pós-intubação prolongada ou traqueostomia"
        ],
        benefits: [
          "Redução drástica do risco de pneumonia aspirativa",
          "Reintrodução gradual e segura de alimentos favoritos",
          "Adaptação de texturas e manobras posturais de proteção",
          "Alívio e tranquilidade para o paciente e a família à mesa"
        ]
      },
      {
        id: "neurofuncional",
        iconName: "Brain",
        title: "Reabilitação Pós-AVC & Neurofuncional",
        badge: "Comunicação & Cognição",
        shortDescription: "Recuperação da linguagem (afasia), clareza da fala (disartria) e planejamento motor da fala (apraxia).",
        fullDescription: "Intervenção precoce ou crônica para sequelas decorrentes de Acidente Vascular Cerebral (AVC), traumatismo cranioencefálico (TCE) e doenças neurológicas (Parkinson, Alzheimer, ELA). Estimulamos a neuroplasticidade para reabilitar a capacidade de se expressar e interagir.",
        indicatedFor: [
          "Dificuldade de encontrar palavras ou falar frases completas (Afasia)",
          "Fala arrastada, enrolada, fraca ou ininteligível (Disartria)",
          "Dificuldade de coordenar os movimentos da boca para pronunciar os sons (Apraxia)",
          "Dificuldade de compreensão da fala de terceiros"
        ],
        benefits: [
          "Reativação e fortalecimento das vias de linguagem",
          "Aumento da inteligibilidade e clareza da fala",
          "Implementação de Comunicação Aumentativa e Alternativa (quando necessário)",
          "Resgate da participação social e autonomia do indivíduo"
        ]
      },
      {
        id: "voz",
        iconName: "Volume2",
        title: "Reabilitação Vocal & Voz no Adulto",
        badge: "Saúde Vocal",
        shortDescription: "Tratamento para rouquidão persistente, cansaço ao falar, paralisia de pregas vocais e voz fraca/envelhecida.",
        fullDescription: "A voz é a nossa identidade. O tratamento atua tanto em patologias da laringe (fendas glóticas, pólipos, nódulos) quanto em presbifonia (envelhecimento vocal natural) e aprimoramento vocal para profissionais que dependem da voz para trabalhar.",
        indicatedFor: [
          "Rouquidão com duração superior a duas semanas",
          "Cansaço, pigarro constante ou dor no pescoço após falar",
          "Voz fraca, falhando ou sem volume em conversas",
          "Sequelas de cirurgias de tireoide ou intubação",
          "Profissionais da voz (professores, advogados, palestrantes)"
        ],
        benefits: [
          "Eliminação do esforço e tensão muscular ao falar",
          "Aumento do alcance, projeção e resistência vocal",
          "Melhora da tonicidade e fechamento das cordas vocais",
          "Prevenção de lesões crônicas nas pregas vocais"
        ]
      },
      {
        id: "motricidade-facial",
        iconName: "Smile",
        title: "Paralisia Facial & Motricidade Orofacial",
        badge: "Mímica & Mastigação",
        shortDescription: "Terapia muscular para paralisia facial periférica (Paralisia de Bell), traumas e disfunções mastigatórias.",
        fullDescription: "Atuação direta na reabilitação dos músculos da mímica facial e funções de mastigação, respiração e repouso labial. Foco em restaurar a simetria facial, o fechamento dos olhos/lábios e evitar sincinesias (movimentos involuntários associados).",
        indicatedFor: [
          "Paralisia facial de Bell recente ou tardia",
          "Sequelas pós-cirúrgicas na região facial ou parótida",
          "Dificuldade de fechar o olho ou lábios com escape de líquido",
          "Assimetria do sorriso e perda de expressividade"
        ],
        benefits: [
          "Estímulo à reinervação e tônus muscular correto",
          "Recuperação do movimento harmonioso e simetria do sorriso",
          "Controle mastigatório e contenção oral de saliva e alimentos",
          "Prevenção e controle de contrações inadequadas (sincinesias)"
        ]
      },
      {
        id: "cuidadores",
        iconName: "Users",
        title: "Treinamento & Suporte a Cuidadores",
        badge: "Capacitação Prática",
        shortDescription: "Instrução direcionada para famílias e cuidadores sobre posicionamento seguro, alimentação e estímulos em casa.",
        fullDescription: "A reabilitação não acontece apenas no momento da terapia. Ensinamos técnicas práticas de manuseio alimentar, higiene oral correta em pacientes acamados e estratégias de comunicação para o dia a dia.",
        indicatedFor: [
          "Familiares de idosos em fase de reabilitação pós-hospitalar",
          "Cuidadores formais que precisam de orientação em disfagia",
          "Casos de doenças neurodegenerativas progressivas"
        ],
        benefits: [
          "Segurança total no manejo diário das refeições",
          "Redução do estresse e sobrecarga da equipe familiar",
          "Manutenção e continuidade dos ganhos terapêuticos em casa",
          "Orientações por escrito e acompanhamento constante"
        ]
      }
    ]
  },
  methodologySection: {
    tag: "Método de Atendimento",
    title: "Como Funciona o Processo Terapêutico",
    subtitle: "Uma abordagem estruturada, transparente e orientada a metas claras para você acompanhar cada avanço.",
    steps: [
      {
        number: "01",
        title: "Avaliação Clínica Completa",
        description: "Análise minuciosa do histórico de saúde, exames anteriores e avaliação funcional detalhada da fala, voz ou deglutição."
      },
      {
        number: "02",
        title: "Plano Terapêutico Individualizado",
        description: "Definição de objetivos realistas e personalizados, alinhados com as necessidades do paciente e a rotina da família."
      },
      {
        number: "03",
        title: "Sessões Práticas & Estimulação",
        description: "Exercícios terapêuticos direcionados, com técnicas baseadas em evidências para maximizar a neuroplasticidade e a força muscular."
      },
      {
        number: "04",
        title: "Reavaliações & Suporte Contínuo",
        description: "Acompanhamento periódico de métricas de melhora, ajustes no plano e suporte próximo para dúvidas e orientações práticas."
      }
    ]
  },
  aboutSection: {
    tag: "Sobre a Especialista",
    title: "Compromisso Técnico e Acolhimento Humano",
    subtitle: "Conheça quem estará ao lado da sua família durante todo o processo de reabilitação.",
    quote: "Acredito que reabilitar não é apenas aplicar técnicas: é devolver a voz a quem quer ser ouvido e a segurança a quem deseja compartilhar uma refeição com quem ama."
  },
  testimonialsSection: {
    tag: "Histórias de Recuperação",
    title: "O que dizem os pacientes e familiares",
    subtitle: "A maior recompensa é ver a autonomia e a qualidade de vida sendo reconquistadas.",
    items: [
      {
        name: "Carlos Eduardo Mendes",
        role: "Filho do Sr. Geraldo (Paciente Pós-AVC)",
        text: "Meu pai teve um AVC e não conseguia engolir nada sólido sem engasgar feio. Estávamos com muito medo de pneumonia. A Dra. Fernanda foi um anjo em nossas vidas. Com calma, paciência e muita técnica no atendimento domiciliar, meu pai voltou a almoçar na mesa com a gente.",
        highlight: "Voltou a comer à mesa com a família"
      },
      {
        name: "Renata Silveira",
        role: "Paciente de Reabilitação Facial",
        text: "Passei por uma paralisia facial súbita e entrei em desespero ao ver meu rosto sem movimento. A Fernanda iniciou a fisiologia e estímulos logo na primeira semana. O cuidado dela em me tranquilizar e os exercícios passados devolveram a simetria do meu sorriso em poucas semanas.",
        highlight: "Recuperação rápida e acolhimento"
      },
      {
        name: "Roberto F. Guimarães",
        role: "Professor Universitário",
        text: "Minha voz falhava com frequência e sentia dores na garganta toda sexta-feira. A terapia vocal com a Fernanda me ensinou a respirar, projetar e cuidar da minha laringe. Hoje leciono o dia inteiro sem nenhum cansaço vocal.",
        highlight: "Voz firme sem esforço"
      }
    ]
  },
  faqSection: {
    tag: "Tire suas Dúvidas",
    title: "Perguntas Frequentes",
    subtitle: "Esclarecimentos claros sobre o atendimento e a dinâmica das terapias.",
    items: [
      {
        question: "Como funciona o atendimento domiciliar (Home Care)?",
        answer: "O atendimento domiciliar é indicado para pacientes com mobilidade reduzida, acamados ou que se beneficiam do ambiente familiar para a reabilitação. Levamos todos os equipamentos e materiais necessários até a residência, avaliamos o contexto real da alimentação ou comunicação e orientamos os cuidadores diretamente no local."
      },
      {
        question: "O atendimento é particular ou aceita convênio?",
        answer: "Os atendimentos são particulares. Emitimos nota fiscal e relatório de justificativa clínica detalhado para que você possa solicitar o reembolso integral ou parcial junto ao seu plano de saúde, dependendo da cobertura da sua operadora."
      },
      {
        question: "Quanto tempo dura uma sessão e qual a frequência ideal?",
        answer: "As sessões têm duração média de 50 minutos a 1 hora. A frequência semanal (geralmente de 1 a 2 vezes por semana) é definida após a avaliação inicial, respeitando a tolerância e necessidade de cada quadro clínico."
      },
      {
        question: "Pacientes que sofreram AVC há mais de um ano ainda podem ter melhoras?",
        answer: "Sim! Embora a fase aguda (primeiros meses) ofereça uma janela intensa de neuroplasticidade, o cérebro mantém a capacidade de adaptação e reorganização contínua. Com estímulos adequados, manobras compensatórias e treino miofuncional, é possível alcançar ganhos funcionais significativos mesmo em fases crônicas."
      },
      {
        question: "Como agendar a primeira consulta / avaliação?",
        answer: "Basta clicar em qualquer botão de agendamento no site para falar diretamente comigo ou com a equipe pelo WhatsApp. Faremos uma breve triagem para entender a queixa principal e combinaremos o melhor dia e horário."
      }
    ]
  },
  contact: {
    tag: "Contato & Agendamento",
    title: "Dê o primeiro passo para a recuperação",
    subtitle: "Entre em contato para tirar dúvidas, agendar uma avaliação inicial ou solicitar atendimento domiciliar.",
    phoneDisplay: "(11) 98765-4321",
    whatsappNumber: "5511987654321",
    whatsappDefaultMessage: "Olá, Dra. Fernanda! Gostaria de informações sobre avaliação e horários de atendimento fonoaudiológico.",
    email: "contato@fernandafono.com.br",
    address: "Av. Brigadeiro Luís Antônio, 2500 - Conj. 82",
    neighborhoodAndCity: "Jardins, São Paulo - SP",
    hours: "Segunda a Sexta: 08h às 19h | Sábados: 08h às 13h",
    directMapUrl: "https://maps.google.com/?q=Av.+Brigadeiro+Lu%C3%ADs+Ant%C3%B4nio,+2500+-+São+Paulo+-+SP"
  },
  navLinks: [
    { label: "Início", href: "/" },
    { label: "Especialidades", href: "/especialidades" },
    { label: "Como funciona", href: "/como-funciona" },
    { label: "Sobre", href: "/sobre" },
    { label: "Dúvidas", href: "/duvidas" },
    { label: "Contato", href: "/contato" }
  ]
};
