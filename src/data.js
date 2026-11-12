export const profile = {
  name: 'Lara Alexandra Lopes Alves',
  first: 'Lara',
  last: 'Lopes',
  role: 'Quality Engineer',
  level: 'QA Pleno',
  location: 'Juiz de Fora, MG',
  email: 'laraalexandralopes919@gmail.com',
  linkedin: 'https://linkedin.com/in/laraalexandralopes',
  github: 'https://github.com/LaraAlexLopes',
  headline:
    'Testes manuais e automatizados de aplicações mobile, web, de APIs e de performance, estratégia de testes e análise de causa raiz, da interface ao banco de dados, à mensageria e ao código dos serviços.',
  rotating: ['automação E2E mobile', 'testes manuais e exploratórios', 'testes de API', 'testes de performance', 'sistemas orientados a eventos', 'análise de causa raiz'],
  summary:
    'Atuação em aplicações offline-first e em microsserviços orientados a eventos, com validação do dado efetivamente persistido no banco e publicado na mensageria, e não apenas do que a interface exibe. A análise de causa raiz combina logs, banco de dados, gateway e leitura do código-fonte, e cada defeito encontrado é investigado também em fluxos semelhantes.',
}

export const metrics = [
  { value: 400, suffix: '', label: 'casos de teste E2E', detail: 'em 192 specs, estruturados do zero' },
  { value: 60, suffix: '%', label: 'menos tempo de teste', detail: 'em produção, de 5 para 2 horas' },
  { value: 4, suffix: '', label: 'dias a menos de regressão', detail: 'com a automação de uma GMUD' },
  { value: 6, suffix: '', label: 'projetos abertos', detail: 'com CI e relatórios públicos' },
]

export const competencies = [
  { icon: 'mobile', title: 'Automação E2E mobile e web', text: 'WebdriverIO, Appium e Playwright em Page Object Model, com execução em CI e cenários offline via ADB.' },
  { icon: 'api', title: 'Testes de API', text: 'Contrato, integração e segurança com TypeScript e Vitest, além de Postman e Newman.' },
  { icon: 'flow', title: 'Sistemas orientados a eventos', text: 'Validação ponta a ponta de fluxos com Kafka e BullMQ, conferindo o efeito final de cada etapa.' },
  { icon: 'search', title: 'Análise de causa raiz', text: 'Correlação entre logs, banco de dados, gateway e código-fonte até a origem do defeito.' },
]

export const stack = [
  'Playwright', 'WebdriverIO', 'Appium', 'Cypress', 'Selenium', 'k6', 'Postman', 'Newman', 'TypeScript', 'Vitest',
  'JMeter', 'Node.js', 'JavaScript', 'C#', 'PostgreSQL', 'MongoDB', 'Elasticsearch', 'Redis', 'Docker', 'GitHub Actions',
  'Apache Kafka', 'BullMQ', 'Allure', 'Datadog', 'Azure DevOps', 'Jira',
]

export const experience = [
  {
    company: 'Canto Porto',
    role: 'Analista de Qualidade Pleno',
    location: 'Mogi Mirim/SP',
    period: 'dez/2025 — atual',
    current: true,
    highlights: [
      'Estruturei do zero a automação E2E do app Android offline-first: cerca de 400 casos de teste, executados no GitHub Actions do Android 10 ao 16.',
      'Cada teste confere o dado gravado no PostgreSQL, e não só a tela, o que revelou defeitos que a interface escondia, como dados não persistidos.',
      'Defini a estratégia de testes de API dos microsserviços em contrato, integração e segurança, e conduzi a migração da suíte para TypeScript e Vitest.',
      'Criei um executor de testes para fluxos assíncronos com Kafka e BullMQ, que detecta falhas silenciosas no processamento mesmo quando a API responde com sucesso.',
      'Reestruturei o fluxo de QA do time, com severidade separada de prioridade e automações de status, e validei a migração de dados de Elasticsearch para PostgreSQL.',
    ],
    stack: ['WebdriverIO', 'Appium', 'TypeScript', 'Vitest', 'Node.js', 'Kafka', 'BullMQ', 'PostgreSQL', 'GitHub Actions'],
  },
  {
    company: 'Minsait',
    role: 'Analista de Qualidade',
    location: 'Barueri/SP',
    period: 'jun/2025 — dez/2025',
    highlights: [
      'Conduzi o processo de testes nos ciclos de release da squad, com gestão de defeitos no Jira e relatórios de evidências.',
      'Automatizei cenários com Selenium e Cucumber, ajudando a reduzir os testes de validação em produção de 5 para 2 horas.',
      'Automatizei a regressão completa de uma GMUD, antes manual e de 1 a 2 semanas, reduzindo o prazo em 4 dias.',
    ],
    stack: ['Selenium', 'JavaScript', 'Cucumber', 'Gherkin', 'Jira'],
  },
  {
    company: 'Thomson Reuters',
    role: 'Analista de Qualidade',
    location: 'Juiz de Fora/MG',
    period: '2024 — 2025',
    highlights: [
      'Automatizei testes com Selenium e C# em Gherkin e validei endpoints com Postman.',
      'Investiguei a causa raiz de incidentes com Datadog, Azure DevOps, jobs Hangfire e SQL Server, acelerando as correções.',
      'Mapeei processos em BPMN e automatizei tarefas com Power Automate no fluxo de sustentação.',
    ],
    stack: ['Selenium', 'C#', 'Postman', 'Datadog', 'Azure DevOps', 'SQL Server'],
  },
]

export const openSourceProjects = [
  {
    id: 'event-driven',
    featured: true,
    label: 'Sistemas orientados a eventos',
    title: 'Testes ponta a ponta de um sistema de pedidos com Kafka e BullMQ',
    text: 'Um sistema de pedidos em Docker (API, workers e PostgreSQL) e uma suíte que acompanha cada pedido pelos eventos, pela fila e pelo banco, em vez de confiar no 201 da API.',
    results: [
      { value: '19', label: 'testes' },
      { value: '3', label: 'serviços derrubados nos testes' },
    ],
    modulesTitle: 'cenários cobertos',
    modules: ['Ciclo do pedido', 'Idempotência', 'Eventos reentregues', 'Retry e dead-letter', 'Mensagens inválidas', 'Concorrência', 'Queda de serviços'],
    stack: ['Vitest', 'TypeScript', 'Kafka', 'BullMQ', 'PostgreSQL', 'Docker'],
    links: [{ label: 'Repositório', url: 'https://github.com/LaraAlexLopes/event-driven-orders-tests' }],
  },
  {
    id: 'mobile-open',
    label: 'Automação mobile',
    title: 'E2E do app Android do Rocket.Chat',
    text: 'WebdriverIO e Appium contra um servidor Rocket.Chat em Docker, com dados criados e conferidos via API e emulador Android no CI.',
    results: [{ value: '26', label: 'cenários' }],
    stack: ['WebdriverIO', 'Appium', 'TypeScript', 'Allure'],
    links: [
      { label: 'Repositório', url: 'https://github.com/LaraAlexLopes/rocketchat-mobile-e2e' },
      { label: 'Relatório', url: 'https://laraalexlopes.github.io/rocketchat-mobile-e2e/' },
    ],
  },
  {
    id: 'web',
    label: 'Automação web',
    title: 'E2E cross-browser do SauceDemo',
    text: 'Playwright em Chromium, Firefox, WebKit e mobile, com teste visual, acessibilidade (axe-core) e totais do pedido recalculados a partir do catálogo.',
    results: [{ value: '153', label: 'testes' }],
    stack: ['Playwright', 'TypeScript', 'axe-core', 'Docker'],
    links: [
      { label: 'Repositório', url: 'https://github.com/LaraAlexLopes/saucedemo-e2e-tests' },
      { label: 'Relatório', url: 'https://laraalexlopes.github.io/saucedemo-e2e-tests/' },
    ],
  },
  {
    id: 'performance',
    label: 'Performance',
    title: 'Performance do ServeRest com k6',
    text: 'Smoke, load, stress, spike, breakpoint e soak contra a API em Docker, com SLOs como thresholds e um teste de concorrência no estoque.',
    results: [
      { value: '7', label: 'tipos de teste' },
      { value: '~580', label: 'req/s no limite' },
    ],
    stack: ['k6', 'TypeScript', 'Docker'],
    links: [
      { label: 'Repositório', url: 'https://github.com/LaraAlexLopes/serverest-performance-tests' },
      { label: 'Dashboards', url: 'https://laraalexlopes.github.io/serverest-performance-tests/' },
    ],
  },
  {
    id: 'api-code',
    label: 'API em código',
    title: 'API do Restful-Booker com Playwright',
    text: 'Contratos estritos com Zod, fixtures com limpeza automática e cada alteração conferida lendo a reserva de volta.',
    results: [{ value: '39', label: 'testes' }],
    stack: ['Playwright', 'TypeScript', 'Zod'],
    links: [
      { label: 'Repositório', url: 'https://github.com/LaraAlexLopes/restful-booker-api-tests' },
      { label: 'Relatório', url: 'https://laraalexlopes.github.io/restful-booker-api-tests/' },
    ],
  },
  {
    id: 'api-postman',
    label: 'API com Postman',
    title: 'API do ServeRest com Postman e Newman',
    text: 'Coleções geradas a partir de código, contratos em JSON Schema, conferência no servidor e testes orientados a dados (CSV).',
    results: [{ value: '151', label: 'asserts' }],
    stack: ['Postman', 'Newman', 'JSON Schema'],
    links: [
      { label: 'Repositório', url: 'https://github.com/LaraAlexLopes/serverest-api-tests' },
      { label: 'Relatório', url: 'https://laraalexlopes.github.io/serverest-api-tests/' },
    ],
  },
]

export const skills = [
  { group: 'Automação', items: ['Playwright', 'WebdriverIO', 'Appium', 'UiAutomator2', 'Mocha', 'Selenium', 'Cypress', 'Cucumber', 'Gherkin', 'Page Object Model', 'Allure', 'Vitest', 'axe-core'] },
  { group: 'API e performance', items: ['Postman', 'Newman', 'htmlextra', 'REST', 'JSON Schema', 'Zod', 'k6', 'JMeter'] },
  { group: 'Mobile', items: ['Android', 'ADB', 'Logcat', 'Offline', 'Emulador e device'] },
  { group: 'Linguagens', items: ['TypeScript', 'JavaScript', 'Node.js', 'C#', 'SQL', 'Java'] },
  { group: 'Processos', items: ['Scrum', 'Kanban', 'BPMN', 'UML', 'Jira', 'Figma'] },
  { group: 'Dados e mensageria', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Elasticsearch', 'Redis', 'Kafka', 'BullMQ'] },
  { group: 'Observabilidade', items: ['Portainer', 'Datadog', 'APISIX', 'Metabase', 'Azure', 'Azure DevOps', 'GitHub'] },
  { group: 'CI e infraestrutura', items: ['Docker', 'Docker Compose', 'GitHub Actions', 'GitHub Pages'] },
]

export const education = [
  {
    degree: 'Pós-graduação em Engenharia de Qualidade e Teste de Software',
    school: 'PUC Minas',
    period: '2026 — 2027',
    current: true,
  },
  {
    degree: 'Bacharelado em Sistemas de Informação',
    school: 'IF Sudeste MG',
    period: '2022 — 2025',
  },
]

