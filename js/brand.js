/* ============================================================
   brand.js — ARQUIVO ÚNICO DE PERSONALIZAÇÃO (ACADEMIA)
   ------------------------------------------------------------
   Para entregar este site a um novo cliente, edite SOMENTE
   este arquivo. Não é necessário mexer em HTML, CSS ou app.js.

   Checklist rápido:
     1. nome, sigla, contato
     2. tema (cores) e fontes
     3. planos e preços, modalidades, grade de aulas
     4. equipe, depoimentos, horários, dúvidas
     5. trocar as imagens em assets/ mantendo os nomes
   ============================================================ */

window.BRAND = {

  /* ---------- 1. identidade ---------- */
  nome: 'Forja Gym',
  sigla: 'FG',
  tagline: 'Treino sério, sem contrato que prende',

  seo: {
    titulo: 'Forja Gym — Academia 24h em Porto Alegre',
    descricao: 'Musculação, funcional, cross e aulas coletivas com professor na sala. Planos sem fidelidade a partir de R$ 89. Primeira aula grátis.'
  },

  /* ---------- 2. cores e fontes ----------
     O acento volt é o único momento de cor da interface.
     Trocar --accent muda a energia do site inteiro.        */
  tema: {
    'primary':       '#111111',
    'primary-hover': '#000000',
    'accent':        '#ccff00',
    'accent-ink':    '#1a2200'
  },
  fontes: {
    display: "'Anton', 'Arial Narrow', Impact, system-ui, sans-serif",
    corpo:   "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  },

  /* ---------- 3. contato ---------- */
  contato: {
    whatsapp: '+55 51 95555-0000',   // qualquer formato: o código normaliza
    telefone: '+55 51 3555-0000',
    telefoneLabel: '(51) 3555-0000',
    whatsappLabel: '(51) 95555-0000',
    email: 'contato@forjagym.com.br',
    endereco: 'Av. Cristóvão Colombo, 2100 — Floresta, Porto Alegre/RS',
    enderecoCurto: 'Floresta, Porto Alegre',
    mensagemWhatsapp: 'Olá! Vim pelo site e quero agendar a aula experimental.',
    tituloMensagem: 'Nova matrícula pelo site'
  },

  redes: [
    { nome: 'Instagram', url: 'https://instagram.com/' },
    { nome: 'TikTok',    url: 'https://tiktok.com/' }
  ],

  /* ---------- 4. rótulos de interface ---------- */
  ui: {
    pularConteudo: 'Pular para o conteúdo',
    abrirMenu: 'Abrir menu',
    fecharMenu: 'Fechar menu',
    erros: {
      obrigatorio: 'Preencha este campo para continuar.',
      telefone: 'Informe DDD e número, ex.: (51) 95555-0000.',
      email: 'Confira o e-mail, ex.: nome@dominio.com.br.',
      revisar: 'Confira os campos destacados abaixo.',
      enviadoWhatsapp: 'Abrimos o WhatsApp com a sua mensagem pronta. É só enviar.',
      enviadoEmail: 'Abrimos o seu e-mail com a mensagem pronta.'
    }
  },

  nav: {
    modalidades: 'Modalidades',
    planos: 'Planos',
    grade: 'Grade de aulas',
    equipe: 'Professores',
    faq: 'Dúvidas',
    cta: 'Aula grátis'
  },

  /* ---------- 5. hero ---------- */
  hero: {
    eyebrow: 'Primeira aula por nossa conta',
    tituloHtml: 'Aparece.<br>O resto <em>a gente treina</em>',
    subtitulo: 'Musculação com professor na sala o tempo todo, aulas coletivas todo dia e avaliação física a cada 90 dias. Sem fidelidade, sem multa para cancelar.',
    ctaPrimario: 'Agendar aula grátis',
    ctaSecundario: 'Ver planos',
    imagem: 'assets/hero-wide.svg',
    numeros: [
      { valor: '05h — 23h', label: 'segunda a sexta' },
      { valor: '38',        label: 'aulas por semana' },
      { valor: '0',         label: 'taxa de cancelamento' }
    ]
  },

  /* ---------- 6. modalidades ---------- */
  modalidades: {
    eyebrow: 'O que tem aqui',
    titulo: 'Escolhe o teu treino',
    subtitulo: 'Todas as modalidades entram em qualquer plano. Sem pacote extra, sem cobrança por aula.',
    cta: 'Ver grade completa',
    itens: [
      { tag: 'Sala aberta', nome: 'Musculação', texto: 'Equipamento novo, professor na sala das 5h às 23h e ficha revisada a cada 45 dias.', foto: 'assets/card-1.svg' },
      { tag: 'Alta intensidade', nome: 'Funcional', texto: 'Circuito em grupo de 50 minutos, com carga ajustada por pessoa.', foto: 'assets/card-2.svg' },
      { tag: 'Turma fechada', nome: 'Cross training', texto: 'Treino do dia em quadro, com escalonamento para quem está começando.', foto: 'assets/card-3.svg' },
      { tag: 'Cardio',      nome: 'Spinning',  texto: 'Sala com 22 bikes, monitoramento de frequência cardíaca na tela.', foto: 'assets/card-4.svg' },
      { tag: 'Mobilidade',  nome: 'Pilates e yoga', texto: 'Turmas pequenas, foco em coluna, respiração e amplitude de movimento.', foto: 'assets/card-5.svg' },
      { tag: 'Combate',     nome: 'Muay thai e boxe', texto: 'Do primeiro jab ao sparring, com equipamento de proteção incluso.', foto: 'assets/card-6.svg' }
    ]
  },

  /* ---------- 7. planos ---------- */
  planos: {
    eyebrow: 'Planos',
    titulo: 'Preço na tela, sem consultor',
    subtitulo: 'Todos os planos dão acesso a todas as modalidades e à avaliação física. A diferença está no prazo e no horário.',
    nota: 'Matrícula de R$ 49 cobrada uma única vez. Sem taxa de anuidade.',
    itens: [
      {
        nome: 'Off-peak',
        preco: 'R$ 89',
        periodo: '/mês',
        detalhe: 'Acesso das 9h às 16h, segunda a sexta',
        classe: '',
        flag: '',
        beneficios: [
          'Todas as modalidades',
          'Avaliação física a cada 90 dias',
          'Sem fidelidade',
          'App de treino incluso'
        ],
        cta: 'Quero este'
      },
      {
        nome: 'Livre',
        preco: 'R$ 129',
        periodo: '/mês',
        detalhe: 'Acesso em qualquer horário, todos os dias',
        classe: 'is-featured',
        flag: 'Mais escolhido',
        beneficios: [
          'Todas as modalidades',
          'Avaliação física a cada 90 dias',
          'Sem fidelidade e sem multa',
          'Leve um convidado por mês',
          'Reserva de aula pelo app'
        ],
        cta: 'Começar agora'
      },
      {
        nome: 'Anual',
        preco: 'R$ 99',
        periodo: '/mês',
        detalhe: '12 meses, pago mensalmente',
        classe: '',
        flag: 'Melhor custo',
        beneficios: [
          'Tudo do plano Livre',
          'Dois meses de acompanhamento com personal',
          'Camiseta e garrafa na matrícula',
          'Congelamento de até 30 dias por ano'
        ],
        cta: 'Quero este'
      }
    ]
  },

  /* ---------- 8. grade de aulas ---------- */
  grade: {
    eyebrow: 'Grade',
    titulo: 'Aula todo dia, no horário que dá',
    subtitulo: 'Turmas de 50 minutos. Reserve pelo app até 30 minutos antes; sem reserva, entra quem chegar.',
    nota: 'Grade de exemplo. Sábado tem funcional às 9h e cross às 10h; domingo é sala aberta das 9h às 13h.',
    colunas: ['Horário', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
    linhas: [
      { hora: '06:00', aulas: [ {a:'Funcional', s:'Sala 2'}, {a:'Cross', s:'Box'}, {a:'Funcional', s:'Sala 2'}, {a:'Cross', s:'Box'}, {a:'Funcional', s:'Sala 2'} ] },
      { hora: '07:00', aulas: [ {a:'Spinning', s:'Sala 3'}, {a:'Pilates', s:'Sala 1'}, {a:'Spinning', s:'Sala 3'}, {a:'Pilates', s:'Sala 1'}, {a:'Spinning', s:'Sala 3'} ] },
      { hora: '12:00', aulas: [ {a:'Cross', s:'Box'}, {a:'Funcional', s:'Sala 2'}, {a:'Cross', s:'Box'}, {a:'Funcional', s:'Sala 2'}, {a:'Cross', s:'Box'} ] },
      { hora: '18:00', aulas: [ {a:'Muay thai', s:'Tatame'}, {a:'Spinning', s:'Sala 3'}, {a:'Boxe', s:'Tatame'}, {a:'Spinning', s:'Sala 3'}, {a:'Muay thai', s:'Tatame'} ] },
      { hora: '19:00', aulas: [ {a:'Funcional', s:'Sala 2'}, {a:'Cross', s:'Box'}, {a:'Funcional', s:'Sala 2'}, {a:'Cross', s:'Box'}, {a:'—', s:''} ] },
      { hora: '20:00', aulas: [ {a:'Yoga', s:'Sala 1'}, {a:'Muay thai', s:'Tatame'}, {a:'Yoga', s:'Sala 1'}, {a:'Boxe', s:'Tatame'}, {a:'—', s:''} ] }
    ]
  },

  /* ---------- 9. estrutura ---------- */
  estrutura: {
    eyebrow: 'Estrutura',
    titulo: 'O que você encontra na porta',
    itens: [
      { icone: 'dumbbell', titulo: '1.400 m² em dois andares', texto: 'Sala de musculação, box de cross, três salas de aula e área externa.' },
      { icone: 'shower',   titulo: 'Vestiário com armário e ducha', texto: 'Armário com chave sem custo, secador e chuveiro quente o dia inteiro.' },
      { icone: 'clock',    titulo: 'Aberto das 5h às 23h', texto: 'De segunda a sexta. Sábado até 18h e domingo até 13h.' },
      { icone: 'car',      titulo: 'Estacionamento coberto', texto: 'Duas horas grátis para alunos, com acesso direto pela recepção.' },
      { icone: 'heart',    titulo: 'Avaliação física inclusa', texto: 'Bioimpedância e teste de resistência a cada 90 dias, sem custo extra.' },
      { icone: 'phone',    titulo: 'App de treino', texto: 'Ficha, histórico de carga e reserva de aula no celular.' }
    ]
  },

  /* ---------- 10. números ---------- */
  numeros: [
    { valor: '1.400 m²', label: 'de área de treino' },
    { valor: '2.100',    label: 'alunos ativos' },
    { valor: '18',       label: 'professores com CREF' },
    { valor: '4,8',      label: 'estrelas no Google' }
  ],

  /* ---------- 11. equipe ---------- */
  equipe: {
    eyebrow: 'Professores',
    titulo: 'Quem fica na sala com você',
    subtitulo: 'Todos com CREF ativo. Nenhum treino é montado por estagiário sem supervisão.',
    itens: [
      { nome: 'Bruna Kessler',  especialidade: 'Musculação',  registro: 'CREF 021456-G/RS', foto: 'assets/equipe-1.svg' },
      { nome: 'Diego Ramos',    especialidade: 'Cross',       registro: 'CREF 018233-G/RS', foto: 'assets/equipe-2.svg' },
      { nome: 'Aline Prado',    especialidade: 'Pilates',     registro: 'CREF 030118-G/RS', foto: 'assets/equipe-3.svg' },
      { nome: 'Vitor Camargo',  especialidade: 'Luta',        registro: 'CREF 025907-G/RS', foto: 'assets/equipe-4.svg' }
    ]
  },

  /* ---------- 12. depoimentos ---------- */
  depoimentos: {
    eyebrow: 'Alunos',
    titulo: 'Quem treina aqui',
    itens: [
      { texto: 'Entrei sem saber usar nada. Em duas semanas eu tinha ficha, sabia a execução e ninguém me deixou sozinho no canto.', autor: 'Rafaela M.', detalhe: 'aluna há 1 ano', inicial: 'R' },
      { texto: 'O que me fez ficar foi não ter contrato. Cancelei em janeiro, voltei em março, e ninguém cobrou multa nem fez cara feia.', autor: 'Thiago B.', detalhe: 'aluno há 3 anos', inicial: 'T' },
      { texto: 'Faço cross às 6h e nunca peguei sala lotada. O professor escala o treino para quem está voltando de lesão.', autor: 'Carla S.', detalhe: 'aluna há 8 meses', inicial: 'C' }
    ]
  },

  /* ---------- 13. horários ---------- */
  horarios: {
    titulo: 'Horário de funcionamento',
    nota: 'Aulas coletivas seguem a grade acima. A sala de musculação fica aberta o tempo todo.',
    itens: [
      { dia: 'Segunda a sexta', hora: '05h — 23h' },
      { dia: 'Sábado',          hora: '08h — 18h' },
      { dia: 'Domingo',         hora: '09h — 13h' },
      { dia: 'Feriados',        hora: '09h — 13h' }
    ]
  },

  /* ---------- 14. faixa final ---------- */
  faixaFinal: {
    tituloHtml: 'A primeira aula é <em>de graça</em>',
    texto: 'Sem cadastro longo e sem consultor de vendas. Manda uma mensagem, escolhe o dia e traz roupa de treino.',
    cta: 'Agendar pelo WhatsApp'
  },

  /* ---------- 15. dúvidas ---------- */
  faq: {
    eyebrow: 'Dúvidas',
    titulo: 'Antes de vir treinar',
    itens: [
      { p: 'Preciso de atestado médico?', r: 'Para musculação e aulas coletivas, não exigimos na matrícula. Recomendamos avaliação médica se você tem condição cardíaca, está gestante ou voltando de cirurgia.' },
      { p: 'Tem fidelidade ou multa para cancelar?', r: 'Nos planos mensais, não. Você cancela pelo app ou na recepção até 5 dias antes do vencimento e não paga nada a mais. No plano anual há desconto em troca do prazo, com regras claras no contrato.' },
      { p: 'A aula experimental é mesmo gratuita?', r: 'É. Uma aula de qualquer modalidade, sem compromisso e sem cadastro de cartão. Basta agendar pelo WhatsApp e trazer documento com foto.' },
      { p: 'Posso congelar o plano?', r: 'No plano anual, até 30 dias por ano. Nos mensais, em vez de congelar você simplesmente cancela e volta quando quiser, sem nova matrícula em até 6 meses.' },
      { p: 'Nunca treinei. Vou conseguir acompanhar?', r: 'Vai. As aulas coletivas têm escalonamento e o professor ajusta carga e movimento individualmente. Na musculação, a primeira ficha é montada com você na sala.' },
      { p: 'Tem day use para quem está de passagem?', r: 'Tem, por R$ 35 o dia, com acesso a tudo. Se você se matricular na mesma semana, o valor é abatido da matrícula.' }
    ]
  },

  /* ---------- 16. contato ---------- */
  contatoSecao: {
    eyebrow: 'Matrícula',
    titulo: 'Agende a sua aula experimental',
    subtitulo: 'Responda em menos de um minuto. Confirmamos o horário no mesmo dia.',
    chaves: { whatsapp: 'WhatsApp', telefone: 'Telefone', endereco: 'Endereço', email: 'E-mail' },
    form: {
      nome: 'Seu nome',
      nomeHint: 'Ex.: Maria Silva…',
      whats: 'WhatsApp',
      whatsHint: 'Ex.: (51) 99999-0000',
      objetivo: 'Seu objetivo',
      objetivos: ['Emagrecimento', 'Ganho de massa', 'Condicionamento', 'Saúde e mobilidade', 'Preparação para prova', 'Ainda não sei'],
      modalidade: 'Modalidade de interesse',
      modalidades: ['Musculação', 'Funcional', 'Cross training', 'Spinning', 'Pilates e yoga', 'Muay thai e boxe', 'Quero conhecer tudo'],
      turno: 'Melhor turno',
      turnos: ['Manhã cedo (5h — 8h)', 'Manhã (8h — 12h)', 'Almoço (12h — 14h)', 'Tarde (14h — 18h)', 'Noite (18h — 23h)'],
      mensagem: 'Algo que devemos saber?',
      mensagemHint: 'Ex.: parei de treinar há dois anos e tenho dor no joelho…',
      enviar: 'Agendar pelo WhatsApp',
      nota: 'Abrimos o WhatsApp com a sua mensagem já escrita. Nenhum dado fica salvo no site.'
    }
  },

  rodape: {
    sobre: 'Academia com musculação, aulas coletivas e luta, aberta das 5h às 23h. Planos sem fidelidade e primeira aula gratuita.',
    aviso: 'Procure orientação médica antes de iniciar atividade física.',
    colTreino: 'Treino',
    colAcademia: 'Academia',
    colContato: 'Contato',
    colOnde: 'Onde estamos',
    direitos: 'Todos os direitos reservados.'
  }
};
