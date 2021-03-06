export enum Subjects {
  HEALTH = 'health',
  FINANCES = 'finances',
  SALARIES = 'salaries',
  LABOR = 'labor',
  EDUCATION = 'education',
  JUSTICE = 'justice',
  HUMAN_RIGHTS = 'humanRights',
  ANIMAL_RIGHTS = 'animalRights',
  FOREIGN_AFFAIRS = 'foreignAffairs',
  PUBLIC_FINANCES = 'publicFinances',
  TRANSPARENCY = 'transparency',
  GOVERNMENT_ADMINISTRATION = 'governmentAdministration',
  INTERNAL_ADMINISTRATION = 'internalAdministration',
  ENVIRONMENT = 'environment',
  TRANSPORTATION = 'transportation',
  SOCIAL_WELFARE = 'socialWelfare',
  HOUSING = 'housing',
  CULTURE = 'culture',
  GOVERNMENT = 'government',
}
export enum Parties {
  PS = 'PS',
  PSD = 'PSD',
  IL = 'IL',
  BE = 'BE',
  CDU = 'CDU',
  CDS = 'CDS',
  CHEGA = 'Chega',
  LIVRE = 'Livre',
  PAN = 'Pan',
}

export enum SupportValues {
  FAVOR = 'favor',
  AGAINST = 'against',
  ABSTAIN = 'abstain',
  BLOCKER = 'blocker',
}
export interface Idea {
  id: number;
  subject: Subjects;
  title: string;
  description: string;
  partiesVision: Record<Parties, SupportValues>;
}

export const VOTE_MATRIX: Record<
  SupportValues,
  Record<SupportValues, number>
> = {
  [SupportValues.FAVOR]: {
    [SupportValues.FAVOR]: 3,
    [SupportValues.ABSTAIN]: 0,
    [SupportValues.AGAINST]: -3,
    [SupportValues.BLOCKER]: -10,
  },
  [SupportValues.ABSTAIN]: {
    [SupportValues.FAVOR]: 0,
    [SupportValues.ABSTAIN]: 0,
    [SupportValues.AGAINST]: -1,
    [SupportValues.BLOCKER]: -5,
  },
  [SupportValues.AGAINST]: {
    [SupportValues.FAVOR]: -3,
    [SupportValues.ABSTAIN]: -1,
    [SupportValues.AGAINST]: 3,
    [SupportValues.BLOCKER]: 2,
  },
  [SupportValues.BLOCKER]: {
    [SupportValues.FAVOR]: -10,
    [SupportValues.ABSTAIN]: -3,
    [SupportValues.AGAINST]: 3,
    [SupportValues.BLOCKER]: 5,
  },
};

export const IDEIAS: Record<number, Idea> = {
  1: {
    id: 1,
    subject: Subjects.HEALTH,
    title: 'Modelo de financiamento da saúde',
    description:
      'Alterar o modelo de financiamento da Saúde e aumentar a liberdade de escolha entre privado e público',
    partiesVision: {
      [Parties.CDU]: SupportValues.AGAINST,
      [Parties.BE]: SupportValues.AGAINST,
      [Parties.LIVRE]: SupportValues.AGAINST,
      [Parties.PAN]: SupportValues.AGAINST,
      [Parties.PS]: SupportValues.AGAINST,
      [Parties.PSD]: SupportValues.FAVOR,
      [Parties.CDS]: SupportValues.FAVOR,
      [Parties.IL]: SupportValues.FAVOR,
      [Parties.CHEGA]: SupportValues.FAVOR,
    },
  },
  2: {
    id: 2,
    subject: Subjects.HEALTH,
    title: 'Resolução das listas de espera no SNS',
    description:
      'Aumentar o recurso aos privados e ao sector social para colmatar uma eventual falta de resposta do SNS',
    partiesVision: {
      [Parties.CDU]: SupportValues.AGAINST,
      [Parties.BE]: SupportValues.AGAINST,
      [Parties.LIVRE]: SupportValues.AGAINST,
      [Parties.PAN]: SupportValues.AGAINST,
      [Parties.PS]: SupportValues.AGAINST,
      [Parties.PSD]: SupportValues.FAVOR,
      [Parties.CDS]: SupportValues.FAVOR,
      [Parties.IL]: SupportValues.FAVOR,
      [Parties.CHEGA]: SupportValues.FAVOR,
    },
  },
  3: {
    id: 3,
    subject: Subjects.HEALTH,
    title: 'Terapêuticas não convencionais',
    description: 'Integrar terapêuticas não convencionais no SNS',
    partiesVision: {
      [Parties.CDU]: SupportValues.ABSTAIN,
      [Parties.BE]: SupportValues.ABSTAIN,
      [Parties.LIVRE]: SupportValues.AGAINST,
      [Parties.PAN]: SupportValues.FAVOR,
      [Parties.PS]: SupportValues.ABSTAIN,
      [Parties.PSD]: SupportValues.ABSTAIN,
      [Parties.CDS]: SupportValues.ABSTAIN,
      [Parties.IL]: SupportValues.AGAINST,
      [Parties.CHEGA]: SupportValues.FAVOR,
    },
  },
  4: {
    id: 4,
    subject: Subjects.HEALTH,
    title: 'Morte medicamente assistida',
    description: 'Despenalizar e legislar a morte medicamente assistida',
    partiesVision: {
      [Parties.CDU]: SupportValues.AGAINST,
      [Parties.BE]: SupportValues.FAVOR,
      [Parties.LIVRE]: SupportValues.FAVOR,
      [Parties.PAN]: SupportValues.FAVOR,
      [Parties.PS]: SupportValues.FAVOR,
      [Parties.PSD]: SupportValues.ABSTAIN,
      [Parties.CDS]: SupportValues.AGAINST,
      [Parties.IL]: SupportValues.FAVOR,
      [Parties.CHEGA]: SupportValues.AGAINST,
    },
  },
  5: {
    id: 5,
    subject: Subjects.FOREIGN_AFFAIRS,
    title: 'Acesso à saúde de imigrantes em situação irregular',
    description:
      'Acabar com o acesso gratuito a serviços de saúde para imigrantes em situação irregular (excepto serviços de urgências)',
    partiesVision: {
      [Parties.CDU]: SupportValues.AGAINST,
      [Parties.BE]: SupportValues.AGAINST,
      [Parties.LIVRE]: SupportValues.AGAINST,
      [Parties.PAN]: SupportValues.AGAINST,
      [Parties.PS]: SupportValues.AGAINST,
      [Parties.PSD]: SupportValues.AGAINST,
      [Parties.CDS]: SupportValues.AGAINST,
      [Parties.IL]: SupportValues.AGAINST,
      [Parties.CHEGA]: SupportValues.FAVOR,
    },
  },
  6: {
    id: 6,
    subject: Subjects.SALARIES,
    title: 'Salário Mínimo Nacional',
    description: 'Aumentar o Salário Mínimo Nacional',
    partiesVision: {
      [Parties.CDU]: SupportValues.FAVOR,
      [Parties.BE]: SupportValues.FAVOR,
      [Parties.LIVRE]: SupportValues.FAVOR,
      [Parties.PAN]: SupportValues.FAVOR,
      [Parties.PS]: SupportValues.FAVOR,
      [Parties.PSD]: SupportValues.FAVOR,
      [Parties.CDS]: SupportValues.ABSTAIN,
      [Parties.IL]: SupportValues.AGAINST,
      [Parties.CHEGA]: SupportValues.ABSTAIN,
    },
  },
  7: {
    id: 7,
    subject: Subjects.SALARIES,
    title: 'Salário Mínimo Municipal',
    description:
      'Substituir o Salário Mínimo Nacional por um Salário Mínimo Municipal',
    partiesVision: {
      [Parties.CDU]: SupportValues.AGAINST,
      [Parties.BE]: SupportValues.AGAINST,
      [Parties.LIVRE]: SupportValues.AGAINST,
      [Parties.PAN]: SupportValues.AGAINST,
      [Parties.PS]: SupportValues.AGAINST,
      [Parties.PSD]: SupportValues.AGAINST,
      [Parties.CDS]: SupportValues.ABSTAIN,
      [Parties.IL]: SupportValues.FAVOR,
      [Parties.CHEGA]: SupportValues.ABSTAIN,
    },
  },
  8: {
    id: 8,
    subject: Subjects.FINANCES,
    title: 'Escalões de IRS',
    description: 'Aumentar o número de escalões de IRS',
    partiesVision: {
      [Parties.CDU]: SupportValues.FAVOR,
      [Parties.BE]: SupportValues.FAVOR,
      [Parties.LIVRE]: SupportValues.ABSTAIN,
      [Parties.PAN]: SupportValues.FAVOR,
      [Parties.PS]: SupportValues.FAVOR,
      [Parties.PSD]: SupportValues.ABSTAIN,
      [Parties.CDS]: SupportValues.AGAINST,
      [Parties.IL]: SupportValues.AGAINST,
      [Parties.CHEGA]: SupportValues.AGAINST,
    },
  },
  9: {
    id: 9,
    subject: Subjects.FINANCES,
    title: 'Taxa Única de IRS',
    description: 'Criar uma taxa única de IRS',
    partiesVision: {
      [Parties.CDU]: SupportValues.AGAINST,
      [Parties.BE]: SupportValues.AGAINST,
      [Parties.LIVRE]: SupportValues.AGAINST,
      [Parties.PAN]: SupportValues.AGAINST,
      [Parties.PS]: SupportValues.AGAINST,
      [Parties.PSD]: SupportValues.AGAINST,
      [Parties.CDS]: SupportValues.AGAINST,
      [Parties.IL]: SupportValues.FAVOR,
      [Parties.CHEGA]: SupportValues.FAVOR,
    },
  },
  10: {
    id: 10,
    subject: Subjects.FINANCES,
    title: 'IRS Jovem',
    description:
      'Alargar as condições de acesso ao IRS Jovem, permitindo que jovens no início de carreira recebam mais',
    partiesVision: {
      [Parties.CDU]: SupportValues.ABSTAIN,
      [Parties.BE]: SupportValues.ABSTAIN,
      [Parties.LIVRE]: SupportValues.ABSTAIN,
      [Parties.PAN]: SupportValues.FAVOR,
      [Parties.PS]: SupportValues.FAVOR,
      [Parties.PSD]: SupportValues.ABSTAIN,
      [Parties.CDS]: SupportValues.ABSTAIN,
      [Parties.IL]: SupportValues.FAVOR,
      [Parties.CHEGA]: SupportValues.ABSTAIN,
    },
  },
  11: {
    id: 11,
    subject: Subjects.FINANCES,
    title: 'IRS',
    description:
      'Descer, a partir do segundo filho (inclusive), um escalão no IRS por cada filho adicional',
    partiesVision: {
      [Parties.CDU]: SupportValues.ABSTAIN,
      [Parties.BE]: SupportValues.ABSTAIN,
      [Parties.LIVRE]: SupportValues.ABSTAIN,
      [Parties.PAN]: SupportValues.ABSTAIN,
      [Parties.PS]: SupportValues.AGAINST,
      [Parties.PSD]: SupportValues.ABSTAIN,
      [Parties.CDS]: SupportValues.FAVOR,
      [Parties.IL]: SupportValues.AGAINST,
      [Parties.CHEGA]: SupportValues.ABSTAIN,
    },
  },
  12: {
    id: 12,
    subject: Subjects.SOCIAL_WELFARE,
    title: 'Abono de família pré-natal',
    description: 'Alargar base de beneficiários do abono de família pré-natal',
    partiesVision: {
      [Parties.CDU]: SupportValues.FAVOR,
      [Parties.BE]: SupportValues.ABSTAIN,
      [Parties.LIVRE]: SupportValues.ABSTAIN,
      [Parties.PAN]: SupportValues.ABSTAIN,
      [Parties.PS]: SupportValues.ABSTAIN,
      [Parties.PSD]: SupportValues.FAVOR,
      [Parties.CDS]: SupportValues.ABSTAIN,
      [Parties.IL]: SupportValues.ABSTAIN,
      [Parties.CHEGA]: SupportValues.ABSTAIN,
    },
  },
  13: {
    id: 13,
    subject: Subjects.SOCIAL_WELFARE,
    title: 'Subsídio de desemprego',
    description:
      'Atribuir subsídio de desemprego a quem se despede para, por exemplo, melhorar as qualificações',
    partiesVision: {
      [Parties.CDU]: SupportValues.ABSTAIN,
      [Parties.BE]: SupportValues.ABSTAIN,
      [Parties.LIVRE]: SupportValues.FAVOR,
      [Parties.PAN]: SupportValues.ABSTAIN,
      [Parties.PS]: SupportValues.ABSTAIN,
      [Parties.PSD]: SupportValues.AGAINST,
      [Parties.CDS]: SupportValues.ABSTAIN,
      [Parties.IL]: SupportValues.ABSTAIN,
      [Parties.CHEGA]: SupportValues.AGAINST,
    },
  },
  14: {
    id: 14,
    subject: Subjects.FINANCES,
    title: 'IRC',
    description: 'Reduzir taxa de IRC',
    partiesVision: {
      [Parties.CDU]: SupportValues.AGAINST,
      [Parties.BE]: SupportValues.AGAINST,
      [Parties.LIVRE]: SupportValues.ABSTAIN,
      [Parties.PAN]: SupportValues.FAVOR,
      [Parties.PS]: SupportValues.FAVOR,
      [Parties.PSD]: SupportValues.FAVOR,
      [Parties.CDS]: SupportValues.FAVOR,
      [Parties.IL]: SupportValues.FAVOR,
      [Parties.CHEGA]: SupportValues.FAVOR,
    },
  },
  15: {
    id: 15,
    subject: Subjects.SOCIAL_WELFARE,
    title: 'Complemento de pensão',
    description:
      'Atribuir um complemento de pensão para ajudar idosos carenciados no aquecimento das casas',
    partiesVision: {
      [Parties.CDU]: SupportValues.ABSTAIN,
      [Parties.BE]: SupportValues.ABSTAIN,
      [Parties.LIVRE]: SupportValues.ABSTAIN,
      [Parties.PAN]: SupportValues.ABSTAIN,
      [Parties.PS]: SupportValues.ABSTAIN,
      [Parties.PSD]: SupportValues.ABSTAIN,
      [Parties.CDS]: SupportValues.FAVOR,
      [Parties.IL]: SupportValues.ABSTAIN,
      [Parties.CHEGA]: SupportValues.ABSTAIN,
    },
  },
  16: {
    id: 16,
    subject: Subjects.FINANCES,
    title: 'IVA na construção',
    description: 'Reduzir o IVA na construção imobiliária para habitação',
    partiesVision: {
      [Parties.CDU]: SupportValues.ABSTAIN,
      [Parties.BE]: SupportValues.ABSTAIN,
      [Parties.LIVRE]: SupportValues.ABSTAIN,
      [Parties.PAN]: SupportValues.ABSTAIN,
      [Parties.PS]: SupportValues.ABSTAIN,
      [Parties.PSD]: SupportValues.ABSTAIN,
      [Parties.CDS]: SupportValues.ABSTAIN,
      [Parties.IL]: SupportValues.FAVOR,
      [Parties.CHEGA]: SupportValues.ABSTAIN,
    },
  },
  17: {
    id: 17,
    subject: Subjects.FINANCES,
    title: 'IVA na restauração',
    description: 'Reduzir o IVA na restauração',
    partiesVision: {
      [Parties.CDU]: SupportValues.ABSTAIN,
      [Parties.BE]: SupportValues.ABSTAIN,
      [Parties.LIVRE]: SupportValues.ABSTAIN,
      [Parties.PAN]: SupportValues.ABSTAIN,
      [Parties.PS]: SupportValues.ABSTAIN,
      [Parties.PSD]: SupportValues.FAVOR,
      [Parties.CDS]: SupportValues.ABSTAIN,
      [Parties.IL]: SupportValues.ABSTAIN,
      [Parties.CHEGA]: SupportValues.FAVOR,
    },
  },
  18: {
    id: 18,
    subject: Subjects.FINANCES,
    title: 'IVA na energia',
    description: 'Reduzir o IVA na energia',
    partiesVision: {
      [Parties.CDU]: SupportValues.FAVOR,
      [Parties.BE]: SupportValues.FAVOR,
      [Parties.LIVRE]: SupportValues.FAVOR,
      [Parties.PAN]: SupportValues.ABSTAIN,
      [Parties.PS]: SupportValues.ABSTAIN,
      [Parties.PSD]: SupportValues.FAVOR,
      [Parties.CDS]: SupportValues.ABSTAIN,
      [Parties.IL]: SupportValues.ABSTAIN,
      [Parties.CHEGA]: SupportValues.FAVOR,
    },
  },
  19: {
    id: 19,
    subject: Subjects.FINANCES,
    title: 'IVA nos ginásios',
    description: 'Reduzir o IVA nos ginásios para 6%',
    partiesVision: {
      [Parties.CDU]: SupportValues.ABSTAIN,
      [Parties.BE]: SupportValues.ABSTAIN,
      [Parties.LIVRE]: SupportValues.ABSTAIN,
      [Parties.PAN]: SupportValues.ABSTAIN,
      [Parties.PS]: SupportValues.ABSTAIN,
      [Parties.PSD]: SupportValues.ABSTAIN,
      [Parties.CDS]: SupportValues.ABSTAIN,
      [Parties.IL]: SupportValues.ABSTAIN,
      [Parties.CHEGA]: SupportValues.FAVOR,
    },
  },
  20: {
    id: 20,
    subject: Subjects.FINANCES,
    title: 'Imposto de Selo',
    description:
      'Iniciar um processo progressivo de abolição do Imposto de Selo',
    partiesVision: {
      [Parties.CDU]: SupportValues.ABSTAIN,
      [Parties.BE]: SupportValues.ABSTAIN,
      [Parties.LIVRE]: SupportValues.ABSTAIN,
      [Parties.PAN]: SupportValues.ABSTAIN,
      [Parties.PS]: SupportValues.ABSTAIN,
      [Parties.PSD]: SupportValues.ABSTAIN,
      [Parties.CDS]: SupportValues.ABSTAIN,
      [Parties.IL]: SupportValues.FAVOR,
      [Parties.CHEGA]: SupportValues.ABSTAIN,
    },
  },
  21: {
    id: 21,
    subject: Subjects.TRANSPORTATION,
    title: 'Preço dos combustíveis',
    description: 'Definir um tecto máximo para o preço dos combustíveis',
    partiesVision: {
      [Parties.CDU]: SupportValues.FAVOR,
      [Parties.BE]: SupportValues.ABSTAIN,
      [Parties.LIVRE]: SupportValues.ABSTAIN,
      [Parties.PAN]: SupportValues.ABSTAIN,
      [Parties.PS]: SupportValues.ABSTAIN,
      [Parties.PSD]: SupportValues.ABSTAIN,
      [Parties.CDS]: SupportValues.ABSTAIN,
      [Parties.IL]: SupportValues.ABSTAIN,
      [Parties.CHEGA]: SupportValues.FAVOR,
    },
  },
  22: {
    id: 22,
    subject: Subjects.LABOR,
    title: 'Horas semanais de trabalho',
    description: 'Reduzir o horário de trabalho para as 35 horas semanais',
    partiesVision: {
      [Parties.CDU]: SupportValues.FAVOR,
      [Parties.BE]: SupportValues.FAVOR,
      [Parties.LIVRE]: SupportValues.FAVOR,
      [Parties.PAN]: SupportValues.FAVOR,
      [Parties.PS]: SupportValues.AGAINST,
      [Parties.PSD]: SupportValues.AGAINST,
      [Parties.CDS]: SupportValues.AGAINST,
      [Parties.IL]: SupportValues.AGAINST,
      [Parties.CHEGA]: SupportValues.ABSTAIN,
    },
  },
  23: {
    id: 23,
    subject: Subjects.LABOR,
    title: 'Dias de férias',
    description: 'Repor os 25 dias de férias para todos os trabalhadores',
    partiesVision: {
      [Parties.CDU]: SupportValues.FAVOR,
      [Parties.BE]: SupportValues.FAVOR,
      [Parties.LIVRE]: SupportValues.FAVOR,
      [Parties.PAN]: SupportValues.FAVOR,
      [Parties.PS]: SupportValues.AGAINST,
      [Parties.PSD]: SupportValues.AGAINST,
      [Parties.CDS]: SupportValues.AGAINST,
      [Parties.IL]: SupportValues.AGAINST,
      [Parties.CHEGA]: SupportValues.ABSTAIN,
    },
  },
  24: {
    id: 24,
    subject: Subjects.INTERNAL_ADMINISTRATION,
    title: 'Burocracia',
    description: 'Criar um Simplex para a gestão de fundos europeus',
    partiesVision: {
      [Parties.CDU]: SupportValues.ABSTAIN,
      [Parties.BE]: SupportValues.ABSTAIN,
      [Parties.LIVRE]: SupportValues.ABSTAIN,
      [Parties.PAN]: SupportValues.ABSTAIN,
      [Parties.PS]: SupportValues.FAVOR,
      [Parties.PSD]: SupportValues.ABSTAIN,
      [Parties.CDS]: SupportValues.ABSTAIN,
      [Parties.IL]: SupportValues.ABSTAIN,
      [Parties.CHEGA]: SupportValues.ABSTAIN,
    },
  },
  25: {
    id: 25,
    subject: Subjects.SOCIAL_WELFARE,
    title: 'Reforma a tempo parcial',
    description: 'Criar o mecanismo de reforma a tempo parcial',
    partiesVision: {
      [Parties.CDU]: SupportValues.AGAINST,
      [Parties.BE]: SupportValues.ABSTAIN,
      [Parties.LIVRE]: SupportValues.ABSTAIN,
      [Parties.PAN]: SupportValues.ABSTAIN,
      [Parties.PS]: SupportValues.FAVOR,
      [Parties.PSD]: SupportValues.FAVOR,
      [Parties.CDS]: SupportValues.ABSTAIN,
      [Parties.IL]: SupportValues.FAVOR,
      [Parties.CHEGA]: SupportValues.ABSTAIN,
    },
  },
  26: {
    id: 26,
    subject: Subjects.SOCIAL_WELFARE,
    title: 'Rendimento Básico Incondicional',
    description: 'Testar a implementação de um Rendimento Básico Incondicional',
    partiesVision: {
      [Parties.CDU]: SupportValues.ABSTAIN,
      [Parties.BE]: SupportValues.ABSTAIN,
      [Parties.LIVRE]: SupportValues.FAVOR,
      [Parties.PAN]: SupportValues.FAVOR,
      [Parties.PS]: SupportValues.ABSTAIN,
      [Parties.PSD]: SupportValues.ABSTAIN,
      [Parties.CDS]: SupportValues.ABSTAIN,
      [Parties.IL]: SupportValues.AGAINST,
      [Parties.CHEGA]: SupportValues.AGAINST,
    },
  },
  27: {
    id: 27,
    subject: Subjects.PUBLIC_FINANCES,
    title: 'TAP',
    description: 'Manter a TAP na esfera pública',
    partiesVision: {
      [Parties.CDU]: SupportValues.FAVOR,
      [Parties.BE]: SupportValues.FAVOR,
      [Parties.LIVRE]: SupportValues.FAVOR,
      [Parties.PAN]: SupportValues.FAVOR,
      [Parties.PS]: SupportValues.ABSTAIN,
      [Parties.PSD]: SupportValues.AGAINST,
      [Parties.CDS]: SupportValues.AGAINST,
      [Parties.IL]: SupportValues.AGAINST,
      [Parties.CHEGA]: SupportValues.ABSTAIN,
    },
  },
  28: {
    id: 28,
    subject: Subjects.ENVIRONMENT,
    title: 'Energia nuclear',
    description:
      'Começar a debater a utilização de energia nuclear em Portugal',
    partiesVision: {
      [Parties.CDU]: SupportValues.ABSTAIN,
      [Parties.BE]: SupportValues.ABSTAIN,
      [Parties.LIVRE]: SupportValues.ABSTAIN,
      [Parties.PAN]: SupportValues.ABSTAIN,
      [Parties.PS]: SupportValues.AGAINST,
      [Parties.PSD]: SupportValues.ABSTAIN,
      [Parties.CDS]: SupportValues.FAVOR,
      [Parties.IL]: SupportValues.ABSTAIN,
      [Parties.CHEGA]: SupportValues.ABSTAIN,
    },
  },
  29: {
    id: 29,
    subject: Subjects.TRANSPORTATION,
    title: 'Transportes',
    description:
      'Garantir que uma viagem de avião dentro do território nacional não é mais barata que uma viagem de comboio ',
    partiesVision: {
      [Parties.CDU]: SupportValues.ABSTAIN,
      [Parties.BE]: SupportValues.ABSTAIN,
      [Parties.LIVRE]: SupportValues.FAVOR,
      [Parties.PAN]: SupportValues.ABSTAIN,
      [Parties.PS]: SupportValues.ABSTAIN,
      [Parties.PSD]: SupportValues.ABSTAIN,
      [Parties.CDS]: SupportValues.ABSTAIN,
      [Parties.IL]: SupportValues.ABSTAIN,
      [Parties.CHEGA]: SupportValues.ABSTAIN,
    },
  },
  30: {
    id: 30,
    subject: Subjects.ENVIRONMENT,
    title: 'Floresta',
    description:
      'Criar um Vale Floresta que apoie pequenos proprietários florestais na limpeza destes terrenos',
    partiesVision: {
      [Parties.CDU]: SupportValues.ABSTAIN,
      [Parties.BE]: SupportValues.ABSTAIN,
      [Parties.LIVRE]: SupportValues.ABSTAIN,
      [Parties.PAN]: SupportValues.ABSTAIN,
      [Parties.PS]: SupportValues.FAVOR,
      [Parties.PSD]: SupportValues.ABSTAIN,
      [Parties.CDS]: SupportValues.ABSTAIN,
      [Parties.IL]: SupportValues.ABSTAIN,
      [Parties.CHEGA]: SupportValues.ABSTAIN,
    },
  },
  31: {
    id: 31,
    subject: Subjects.ANIMAL_RIGHTS,
    title: 'Veterinários',
    description:
      'Alargar a oferta pública de acesso a serviços médico-veterinários',
    partiesVision: {
      [Parties.CDU]: SupportValues.ABSTAIN,
      [Parties.BE]: SupportValues.FAVOR,
      [Parties.LIVRE]: SupportValues.FAVOR,
      [Parties.PAN]: SupportValues.FAVOR,
      [Parties.PS]: SupportValues.ABSTAIN,
      [Parties.PSD]: SupportValues.ABSTAIN,
      [Parties.CDS]: SupportValues.ABSTAIN,
      [Parties.IL]: SupportValues.ABSTAIN,
      [Parties.CHEGA]: SupportValues.ABSTAIN,
    },
  },
  32: {
    id: 32,
    subject: Subjects.ANIMAL_RIGHTS,
    title: 'Animais',
    description: 'Inserir a protecção animal na Constituição',
    partiesVision: {
      [Parties.CDU]: SupportValues.ABSTAIN,
      [Parties.BE]: SupportValues.ABSTAIN,
      [Parties.LIVRE]: SupportValues.ABSTAIN,
      [Parties.PAN]: SupportValues.FAVOR,
      [Parties.PS]: SupportValues.ABSTAIN,
      [Parties.PSD]: SupportValues.ABSTAIN,
      [Parties.CDS]: SupportValues.ABSTAIN,
      [Parties.IL]: SupportValues.ABSTAIN,
      [Parties.CHEGA]: SupportValues.ABSTAIN,
    },
  },
  33: {
    id: 33,
    subject: Subjects.ANIMAL_RIGHTS,
    title: 'Touradas',
    description:
      'Terminar com os apoios públicos directos e indirectos às actividades tauromáquicas',
    partiesVision: {
      [Parties.CDU]: SupportValues.AGAINST,
      [Parties.BE]: SupportValues.FAVOR,
      [Parties.LIVRE]: SupportValues.FAVOR,
      [Parties.PAN]: SupportValues.FAVOR,
      [Parties.PS]: SupportValues.AGAINST,
      [Parties.PSD]: SupportValues.AGAINST,
      [Parties.CDS]: SupportValues.AGAINST,
      [Parties.IL]: SupportValues.FAVOR,
      [Parties.CHEGA]: SupportValues.AGAINST,
    },
  },
  34: {
    id: 34,
    subject: Subjects.TRANSPORTATION,
    title: 'Novo aeroporto',
    description:
      'Apostar no Aeroporto de Beja em detrimento da opção de construir um novo aeroporto em Lisboa',
    partiesVision: {
      [Parties.CDU]: SupportValues.AGAINST,
      [Parties.BE]: SupportValues.AGAINST,
      [Parties.LIVRE]: SupportValues.ABSTAIN,
      [Parties.PAN]: SupportValues.FAVOR,
      [Parties.PS]: SupportValues.AGAINST,
      [Parties.PSD]: SupportValues.AGAINST,
      [Parties.CDS]: SupportValues.AGAINST,
      [Parties.IL]: SupportValues.AGAINST,
      [Parties.CHEGA]: SupportValues.ABSTAIN,
    },
  },
  35: {
    id: 35,
    subject: Subjects.JUSTICE,
    title: 'Crime de violação',
    description: 'Transformar o crime de violação num crime público',
    partiesVision: {
      [Parties.CDU]: SupportValues.AGAINST,
      [Parties.BE]: SupportValues.FAVOR,
      [Parties.LIVRE]: SupportValues.ABSTAIN,
      [Parties.PAN]: SupportValues.FAVOR,
      [Parties.PS]: SupportValues.AGAINST,
      [Parties.PSD]: SupportValues.AGAINST,
      [Parties.CDS]: SupportValues.FAVOR,
      [Parties.IL]: SupportValues.FAVOR,
      [Parties.CHEGA]: SupportValues.FAVOR,
    },
  },
  36: {
    id: 36,
    subject: Subjects.JUSTICE,
    title: 'Prisão perpétua',
    description: 'Introduzir a pena de prisão perpétua',
    partiesVision: {
      [Parties.CDU]: SupportValues.BLOCKER,
      [Parties.BE]: SupportValues.BLOCKER,
      [Parties.LIVRE]: SupportValues.BLOCKER,
      [Parties.PAN]: SupportValues.BLOCKER,
      [Parties.PS]: SupportValues.BLOCKER,
      [Parties.PSD]: SupportValues.BLOCKER,
      [Parties.CDS]: SupportValues.BLOCKER,
      [Parties.IL]: SupportValues.BLOCKER,
      [Parties.CHEGA]: SupportValues.FAVOR,
    },
  },
  37: {
    id: 37,
    subject: Subjects.INTERNAL_ADMINISTRATION,
    title: 'SEF',
    description: 'Reverter a extinção do Serviço de Estrangeiros e Fronteiras',
    partiesVision: {
      [Parties.CDU]: SupportValues.ABSTAIN,
      [Parties.BE]: SupportValues.AGAINST,
      [Parties.LIVRE]: SupportValues.ABSTAIN,
      [Parties.PAN]: SupportValues.ABSTAIN,
      [Parties.PS]: SupportValues.AGAINST,
      [Parties.PSD]: SupportValues.FAVOR,
      [Parties.CDS]: SupportValues.FAVOR,
      [Parties.IL]: SupportValues.ABSTAIN,
      [Parties.CHEGA]: SupportValues.FAVOR,
    },
  },
  38: {
    id: 38,
    subject: Subjects.ENVIRONMENT,
    title: 'Incêndios',
    description: 'Agravar penas para crimes de fogo posto',
    partiesVision: {
      [Parties.CDU]: SupportValues.ABSTAIN,
      [Parties.BE]: SupportValues.ABSTAIN,
      [Parties.LIVRE]: SupportValues.ABSTAIN,
      [Parties.PAN]: SupportValues.ABSTAIN,
      [Parties.PS]: SupportValues.ABSTAIN,
      [Parties.PSD]: SupportValues.ABSTAIN,
      [Parties.CDS]: SupportValues.FAVOR,
      [Parties.IL]: SupportValues.ABSTAIN,
      [Parties.CHEGA]: SupportValues.FAVOR,
    },
  },
  39: {
    id: 39,
    subject: Subjects.JUSTICE,
    title: 'Castração Química',
    description:
      'Introduzir a castração química para condenados de crimes sexuais sobre menores de 16 anos',
    partiesVision: {
      [Parties.CDU]: SupportValues.BLOCKER,
      [Parties.BE]: SupportValues.BLOCKER,
      [Parties.LIVRE]: SupportValues.BLOCKER,
      [Parties.PAN]: SupportValues.BLOCKER,
      [Parties.PS]: SupportValues.BLOCKER,
      [Parties.PSD]: SupportValues.BLOCKER,
      [Parties.CDS]: SupportValues.BLOCKER,
      [Parties.IL]: SupportValues.BLOCKER,
      [Parties.CHEGA]: SupportValues.FAVOR,
    },
  },
  40: {
    id: 40,
    subject: Subjects.JUSTICE,
    title: 'Agentes de autoridade',
    description:
      'Agravar o crime de ofensa à integridade de agentes da autoridade',
    partiesVision: {
      [Parties.CDU]: SupportValues.ABSTAIN,
      [Parties.BE]: SupportValues.ABSTAIN,
      [Parties.LIVRE]: SupportValues.ABSTAIN,
      [Parties.PAN]: SupportValues.ABSTAIN,
      [Parties.PS]: SupportValues.ABSTAIN,
      [Parties.PSD]: SupportValues.ABSTAIN,
      [Parties.CDS]: SupportValues.FAVOR,
      [Parties.IL]: SupportValues.ABSTAIN,
      [Parties.CHEGA]: SupportValues.ABSTAIN,
    },
  },
  41: {
    id: 41,
    subject: Subjects.JUSTICE,
    title: 'Corrupção',
    description:
      'Retirar reforma a titulares de cargos públicos condenados por corrupção',
    partiesVision: {
      [Parties.CDU]: SupportValues.ABSTAIN,
      [Parties.BE]: SupportValues.ABSTAIN,
      [Parties.LIVRE]: SupportValues.ABSTAIN,
      [Parties.PAN]: SupportValues.ABSTAIN,
      [Parties.PS]: SupportValues.ABSTAIN,
      [Parties.PSD]: SupportValues.ABSTAIN,
      [Parties.CDS]: SupportValues.ABSTAIN,
      [Parties.IL]: SupportValues.ABSTAIN,
      [Parties.CHEGA]: SupportValues.FAVOR,
    },
  },
  42: {
    id: 42,
    subject: Subjects.FOREIGN_AFFAIRS,
    title: 'NATO',
    description: 'Sair da NATO',
    partiesVision: {
      [Parties.CDU]: SupportValues.FAVOR,
      [Parties.BE]: SupportValues.FAVOR,
      [Parties.LIVRE]: SupportValues.AGAINST,
      [Parties.PAN]: SupportValues.AGAINST,
      [Parties.PS]: SupportValues.AGAINST,
      [Parties.PSD]: SupportValues.AGAINST,
      [Parties.CDS]: SupportValues.AGAINST,
      [Parties.IL]: SupportValues.AGAINST,
      [Parties.CHEGA]: SupportValues.AGAINST,
    },
  },
  43: {
    id: 43,
    subject: Subjects.INTERNAL_ADMINISTRATION,
    title: 'Forças Armadas',
    description: 'Aumentar o orçamento atribuído às Forças Armadas',
    partiesVision: {
      [Parties.CDU]: SupportValues.FAVOR,
      [Parties.BE]: SupportValues.ABSTAIN,
      [Parties.LIVRE]: SupportValues.ABSTAIN,
      [Parties.PAN]: SupportValues.ABSTAIN,
      [Parties.PS]: SupportValues.FAVOR,
      [Parties.PSD]: SupportValues.FAVOR,
      [Parties.CDS]: SupportValues.FAVOR,
      [Parties.IL]: SupportValues.ABSTAIN,
      [Parties.CHEGA]: SupportValues.FAVOR,
    },
  },
  44: {
    id: 44,
    subject: Subjects.GOVERNMENT,
    title: 'Número de deputados',
    description: 'Reduzir o número de deputados na Assembleia da República',
    partiesVision: {
      [Parties.CDU]: SupportValues.AGAINST,
      [Parties.BE]: SupportValues.AGAINST,
      [Parties.LIVRE]: SupportValues.ABSTAIN,
      [Parties.PAN]: SupportValues.AGAINST,
      [Parties.PS]: SupportValues.ABSTAIN,
      [Parties.PSD]: SupportValues.FAVOR,
      [Parties.CDS]: SupportValues.ABSTAIN,
      [Parties.IL]: SupportValues.AGAINST,
      [Parties.CHEGA]: SupportValues.FAVOR,
    },
  },
  45: {
    id: 45,
    subject: Subjects.INTERNAL_ADMINISTRATION,
    title: 'Regionalização',
    description: 'Iniciar o processo de regionalização do país',
    partiesVision: {
      [Parties.CDU]: SupportValues.FAVOR,
      [Parties.BE]: SupportValues.FAVOR,
      [Parties.LIVRE]: SupportValues.FAVOR,
      [Parties.PAN]: SupportValues.FAVOR,
      [Parties.PS]: SupportValues.FAVOR,
      [Parties.PSD]: SupportValues.FAVOR,
      [Parties.CDS]: SupportValues.AGAINST,
      [Parties.IL]: SupportValues.FAVOR,
      [Parties.CHEGA]: SupportValues.ABSTAIN,
    },
  },
  46: {
    id: 46,
    subject: Subjects.JUSTICE,
    title: 'Transparência',
    description:
      'Tornar os pareceres da Comissão de Acesso a Documentos Administrativos (CADA) vinculativos',
    partiesVision: {
      [Parties.CDU]: SupportValues.ABSTAIN,
      [Parties.BE]: SupportValues.ABSTAIN,
      [Parties.LIVRE]: SupportValues.FAVOR,
      [Parties.PAN]: SupportValues.FAVOR,
      [Parties.PS]: SupportValues.ABSTAIN,
      [Parties.PSD]: SupportValues.ABSTAIN,
      [Parties.CDS]: SupportValues.ABSTAIN,
      [Parties.IL]: SupportValues.FAVOR,
      [Parties.CHEGA]: SupportValues.ABSTAIN,
    },
  },
  47: {
    id: 47,
    subject: Subjects.PUBLIC_FINANCES,
    title: 'RTP',
    description: 'Privatizar a RTP',
    partiesVision: {
      [Parties.CDU]: SupportValues.AGAINST,
      [Parties.BE]: SupportValues.AGAINST,
      [Parties.LIVRE]: SupportValues.AGAINST,
      [Parties.PAN]: SupportValues.ABSTAIN,
      [Parties.PS]: SupportValues.AGAINST,
      [Parties.PSD]: SupportValues.AGAINST,
      [Parties.CDS]: SupportValues.ABSTAIN,
      [Parties.IL]: SupportValues.FAVOR,
      [Parties.CHEGA]: SupportValues.ABSTAIN,
    },
  },
  48: {
    id: 48,
    subject: Subjects.CULTURE,
    title: 'Cultura',
    description: 'Atribuir 1% do Orçamento do Estado à Cultura',
    partiesVision: {
      [Parties.CDU]: SupportValues.FAVOR,
      [Parties.BE]: SupportValues.ABSTAIN,
      [Parties.LIVRE]: SupportValues.FAVOR,
      [Parties.PAN]: SupportValues.ABSTAIN,
      [Parties.PS]: SupportValues.ABSTAIN,
      [Parties.PSD]: SupportValues.ABSTAIN,
      [Parties.CDS]: SupportValues.FAVOR,
      [Parties.IL]: SupportValues.ABSTAIN,
      [Parties.CHEGA]: SupportValues.ABSTAIN,
    },
  },
  49: {
    id: 49,
    subject: Subjects.FOREIGN_AFFAIRS,
    title: 'Acordo Ortográfico',
    description: 'Reverter o Acordo Ortográfico',
    partiesVision: {
      [Parties.CDU]: SupportValues.ABSTAIN,
      [Parties.BE]: SupportValues.ABSTAIN,
      [Parties.LIVRE]: SupportValues.ABSTAIN,
      [Parties.PAN]: SupportValues.ABSTAIN,
      [Parties.PS]: SupportValues.ABSTAIN,
      [Parties.PSD]: SupportValues.ABSTAIN,
      [Parties.CDS]: SupportValues.FAVOR,
      [Parties.IL]: SupportValues.ABSTAIN,
      [Parties.CHEGA]: SupportValues.FAVOR,
    },
  },
  50: {
    id: 50,
    subject: Subjects.EDUCATION,
    title: 'Alunos por turma',
    description:
      'Atribuir autonomia às escolas para definir o número de alunos por turma',
    partiesVision: {
      [Parties.CDU]: SupportValues.AGAINST,
      [Parties.BE]: SupportValues.AGAINST,
      [Parties.LIVRE]: SupportValues.AGAINST,
      [Parties.PAN]: SupportValues.AGAINST,
      [Parties.PS]: SupportValues.ABSTAIN,
      [Parties.PSD]: SupportValues.FAVOR,
      [Parties.CDS]: SupportValues.ABSTAIN,
      [Parties.IL]: SupportValues.FAVOR,
      [Parties.CHEGA]: SupportValues.ABSTAIN,
    },
  },
  51: {
    id: 51,
    subject: Subjects.EDUCATION,
    title: 'Educação',
    description: 'Substituir o 12.º ano por um ano zero no ensino superior',
    partiesVision: {
      [Parties.CDU]: SupportValues.ABSTAIN,
      [Parties.BE]: SupportValues.ABSTAIN,
      [Parties.LIVRE]: SupportValues.FAVOR,
      [Parties.PAN]: SupportValues.ABSTAIN,
      [Parties.PS]: SupportValues.ABSTAIN,
      [Parties.PSD]: SupportValues.ABSTAIN,
      [Parties.CDS]: SupportValues.ABSTAIN,
      [Parties.IL]: SupportValues.ABSTAIN,
      [Parties.CHEGA]: SupportValues.ABSTAIN,
    },
  },
};
