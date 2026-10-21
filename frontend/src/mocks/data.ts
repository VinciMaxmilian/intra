import type { Birthday, EmailEntry, Post, Tile, User } from '../types'

export const demoUser: User = {
  id: 695114,
  firstName: 'Paulo',
  lastName: 'Lucio Zimmermann',
  email: 'paulo.zimmermann@a1.com.br',
  avatar: '/img/avatar-demo.jpg',
  birthday: '30/07',
}

// Atalhos da coluna direita (ícone = /icons/<slug>.png)
export const tiles: Tile[] = [
  { slug: 'emergencia', label: 'CONTATOS DE EMERGÊNCIA E ROTAS' },
  { slug: 'a1-movimento', label: 'A1 em Movimento' },
  { slug: 'fluxo-qualidade', label: 'Programa A1 Fluxo & Qualidade' },
  { slug: 'informe-rendimentos', label: 'Informe de Rendimentos' },
  { slug: 'tutorial-apresentacoes', label: 'Tutorial para Apresentações' },
  { slug: 'valores', label: 'Valores A1' },
  { slug: 'calendario', label: 'Calendário Sede e Escritório' },
  { slug: 'politica-qualidade', label: 'Política da Qualidade' },
  { slug: 'manual-cultura', label: 'Manual de Cultura' },
  { slug: 'codigo-conduta', label: 'Código de Conduta' },
  { slug: 'manual-colaborador', label: 'Manual do Colaborador' },
  { slug: 'compliance', label: 'Política de Compliance' },
  { slug: 'manual-marca', label: 'Manual da Marca e Procedimentos' },
  { slug: 'meio-ambiente', label: 'Meio Ambiente Iniciativas' },
  { slug: 'projetos-sociais', label: 'Nossos Projetos Sociais' },
  { slug: 'beneficios', label: 'Conheça nossos Benefícios' },
  { slug: 'universidade', label: 'Universidade Corporativa A1' },
  { slug: 'carona', label: 'Projeto Carona Solidária' },
  { slug: 'cegonha', label: 'Projeto Cegonha1' },
  { slug: 'mercado-honesto', label: 'Mercado Honesto A1' },
  { slug: 'mercado-solidario', label: 'Mercado Solidário A1' },
  { slug: 'lojinha', label: 'Lojinha1' },
  { slug: 'torneio', label: 'Torneio A1' },
  { slug: 'biblioteca', label: 'Biblioteca1' },
  { slug: 'manual-ti', label: 'Manual TI' },
]

export const shortcuts = [
  'A1 EPI',
  'A1 EIA1Ferramentas',
  'A1 Ferramentas',
  'A1 Guardião',
  'A1 Notas',
  'A1 PCP',
  'ControlA1',
  'Ficha Tempo',
  'Greendocs',
  'Portal RH',
  'Protheus ERP',
  'RH 1000',
]

const lorem =
  'Texto de exemplo da publicação. Aqui virá o conteúdo real cadastrado pela comunicação ou pelos colaboradores.'

export const posts: Post[] = [
  {
    id: 1,
    author: 'Paulo Lucio Zimmermann',
    avatar: '/img/avatar-demo.jpg',
    date: '13 de outubro, 08:51',
    text: lorem,
    link: 'https://exemplo.a1.ind.br/',
    hasImage: true,
    channel: 'feed',
    likes: 2,
    comments: 1,
    mine: true,
  },
  {
    id: 2,
    author: 'Alan Mello da Cruz',
    date: '09 de outubro, 15:46',
    text: lorem,
    channel: 'feed',
    likes: 0,
    comments: 0,
  },
  {
    id: 3,
    author: 'Comunicação A1',
    date: '10 de outubro, 10:00',
    text: lorem,
    hasImage: true,
    channel: 'comunicacao',
    likes: 14,
    comments: 3,
  },
  {
    id: 4,
    author: 'Comunicação A1',
    date: '02 de outubro, 09:30',
    text: lorem,
    channel: 'comunicacao',
    likes: 8,
    comments: 0,
  },
]

export const birthdays: Birthday[] = [
  { name: 'Colaborador Exemplo da Silva', when: 'Hoje' },
]

const units = ['UN A ENG', 'UN A ENG SP', 'UN B FAB']
const areas = [
  'INSTRUMENTACAO E AUTOMACAO (ENG SP)',
  'JATO E PINTURA (FAB)',
  'CIVIL ENGENHARIA (ENG)',
  'INSTALACOES INDUSTRIAIS 3 (ENG)',
  'ENGENHARIA DE PROCESSOS (ENG)',
  'RH',
  'ELETRICA (ENG SP)',
]
const first = ['Ana', 'Bruno', 'Carla', 'Diego', 'Elisa', 'Fábio', 'Gabriela', 'Hugo', 'Iara', 'João']
const last = ['Almeida', 'Barbosa', 'Cardoso', 'Duarte', 'Esteves', 'Ferraz', 'Gomes']

export const emails: EmailEntry[] = Array.from({ length: 40 }, (_, i) => {
  const f = first[i % first.length]
  const l = last[i % last.length]
  const slug = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  return {
    initials: (f[0] + l[0] + (i % 3 ? 'M' : 'J')).toUpperCase(),
    name: `${f} ${l} Exemplo`,
    email: `${slug(f)}.${slug(l)}${i}@a1.com.br`,
    unit: units[i % units.length],
    area: areas[i % areas.length],
  }
})
