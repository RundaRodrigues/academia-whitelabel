# Academia — modelo white label

Modelo white label para academias e estúdios de treino. Alto contraste,
tipografia atlética em caixa alta e uma única cor de energia.

Site **100% estático**: HTML, CSS e um JavaScript sem dependências. Sem build,
sem npm, sem backend. Publica direto no GitHub Pages.

---

## Personalizar para um cliente (o único passo obrigatório)

Edite **`js/brand.js`**. Nada mais. Esse arquivo controla nome, cores, fontes,
contato, planos e preços, modalidades, grade de aulas, professores,
depoimentos, dúvidas e todos os rótulos de formulário.

```js
window.BRAND = {
  nome: 'Nome da Academia',
  sigla: 'NA',                 // duas letras dentro do quadrado do logo

  tema: {
    'primary':    '#111111',   // cromo: preto
    'accent':     '#ccff00',   // a única cor da interface
    'accent-ink': '#1a2200'    // texto sobre o acento
  },

  contato: {
    whatsapp: '+55 51 99999-0000',   // qualquer formato; o código normaliza
    telefone: '+55 51 3333-0000',
    email:    'contato@cliente.com.br',
    endereco: 'Rua Exemplo, 100 — Bairro, Cidade/UF'
  }
};
```

**Trocar `tema.accent` muda a energia do site inteiro** — botões, selos, ícones,
o plano em destaque e o hover do cabeçalho. O cromo (preto, branco e um cinza)
fica de pé com qualquer acento; a referência de design manda usar cor com
parcimônia, então resista à tentação de colorir mais coisas.

Se o acento for claro (volt, amarelo, ciano), mantenha `accent-ink` escuro. Se
for escuro (roxo, vinho), troque `accent-ink` para `#ffffff`.

---

## Os três blocos que mais dão trabalho

### Planos

Cada item de `planos.itens` vira um cartão:

```js
{
  nome: 'Livre',
  preco: 'R$ 129',
  periodo: '/mês',
  detalhe: 'Acesso em qualquer horário, todos os dias',
  classe: 'is-featured',      // '' nos demais; só UM cartão em destaque
  flag: 'Mais escolhido',     // '' esconde o selo automaticamente
  beneficios: ['…', '…'],     // até 5; os que faltarem somem sozinhos
  cta: 'Começar agora'
}
```

O layout espera **três planos**. Com mais, ajuste
`.plans { grid-template-columns }` em `css/site.css`.

### Grade de aulas

`grade.colunas` define o cabeçalho e `grade.linhas` as faixas de horário. Cada
linha tem `aulas` com **exatamente um item por dia**, na mesma ordem das
colunas:

```js
colunas: ['Horário', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
linhas: [
  { hora: '06:00', aulas: [ {a:'Funcional', s:'Sala 2'}, … ] }
]
```

Use `{a:'—', s:''}` para um horário sem aula. A tabela rola na horizontal
dentro do próprio quadro no celular, sem empurrar a página.

Para incluir sábado e domingo, acrescente as colunas **e** um item `aulas`
correspondente em cada linha, e adicione as colunas extras no `<template>` do
`<tbody>` dentro do `index.html`.

### Modalidades

Cartões com foto de fundo. `tag` é o selo no canto superior. A foto é o que
carrega o bloco — troque os SVGs por fotos reais assim que puder.

---

## Trocar as imagens

Substitua os arquivos em `assets/` mantendo os nomes:

| Arquivo | Onde aparece |
|---|---|
| `favicon.svg` | aba do navegador |
| `hero-wide.svg` | fundo da área principal |
| `card-1..6.svg` | cartões de modalidade |
| `equipe-1..4.svg` | fotos dos professores |

Os SVGs atuais são espaços reservados gerados localmente. Trocando por `.webp`
ou `.jpg`, ajuste a extensão em `js/brand.js` (modalidades e equipe) e no
`index.html` (hero).

Fotos de academia costumam ser escuras e movimentadas — o cartão de modalidade
já aplica escurecimento e gradiente por cima, então mande a foto original sem
tratar.

---

## Publicar no GitHub Pages

1. Crie o repositório e faça push da branch `main`.
2. **Settings › Pages › Source: GitHub Actions**.
3. `.github/workflows/pages.yml` publica a cada push.

Caminhos são relativos, então funciona em `usuario.github.io/repo/` e em
domínio próprio sem ajuste. Para domínio próprio, crie um `CNAME` na raiz.

---

## Rodar localmente

```bash
npx --yes serve .
```

---

## Estrutura

```
index.html          marcação + sprite de ícones SVG embutido
css/tokens.css      design tokens (cores, tipografia, espaço, forma)
css/base.css        reset e primitivas (idêntico aos outros modelos)
css/site.css        componentes deste vertical: planos, grade, modalidades
js/brand.js         >>> único arquivo a editar por cliente <<<
js/app.js           motor de white label (idêntico aos outros modelos)
assets/             imagens e favicon
```

---

## Como o motor funciona

`js/app.js` lê `window.BRAND` e preenche a página:

| Atributo no HTML | Efeito |
|---|---|
| `data-b="hero.subtitulo"` | escreve o texto daquele caminho |
| `data-bhtml="hero.tituloHtml"` | o mesmo, aceitando HTML (`<em>`, `<br>`) |
| `data-battr="href:_links.whatsapp"` | define atributos; `_links` são links prontos |
| `data-list="planos.itens"` | repete o `<template>` interno para cada item |
| `data-list-options="…"` | preenche um `<select>` |
| `data-form-title="…"` | assunto próprio da mensagem daquele formulário |
| `data-year` | ano corrente no rodapé |

Dentro de um `<template>`: `{{campo}}`, `{{campo.sub}}`, `{{lista.0.campo}}`,
`{{.}}` (item simples), `{{@index}}` e `{{#pad}}` (01, 02, …).

**Links automáticos** a partir de `contato`: `_links.whatsapp`,
`_links.telefone`, `_links.email` e `_links.mapa`.

### Vários idiomas (opcional)

Crie um `js/i18n.js` com `window.I18N = { pt: {...}, en: {...} }`, carregue-o
**antes** do `js/app.js` e adicione `<button data-lang-btn="en">`. Sem esse
arquivo, o site roda em um idioma só. O site institucional da R&L usa esse
mesmo motor com três idiomas.

---

## Formulários

O GitHub Pages não executa backend. O formulário valida os campos, mostra o
erro ao lado de cada um, coloca o foco no primeiro campo inválido e abre o
WhatsApp com a mensagem pronta. Nenhum dado é armazenado.

---

## Acessibilidade e desempenho

- Marcos semânticos, link de pular conteúdo e foco visível.
- `prefers-reduced-motion` respeitado.
- Menu do celular com `aria-expanded`, fechável com `Esc`.
- A grade de aulas é uma `<table>` de verdade, com `<th scope>` e região
  rolável focável pelo teclado.
- Sem rolagem horizontal e sem alvo de toque abaixo do mínimo do WCAG 2.5.8,
  verificado de 320 px a 1920 px.
- Zero dependências em tempo de execução.

---

## Créditos de direção visual

Sistema adaptado (não copiado) de **nike**, via
[awesome-design-md](https://github.com/voltagent/awesome-design-md): contraste
tipográfico extremo, cromo quase monocromático, botão em pílula e cor reservada
à fotografia e a um único acento. Estrutura reaproveitada, cores e tipografia
substituídas.
