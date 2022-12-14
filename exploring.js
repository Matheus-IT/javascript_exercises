const commands = [
  {spoken: 'nova linha', result: '\\n'},
  {spoken: 'interrogação', result: '?'},
  {spoken: 'exclamação', result: '!'},
  {spoken: 'reticências', result: '...'},
  {spoken: 'ponto e vírgula', result: ';'},
  {spoken: 'dois pontos', result: ':'},
  {spoken: 'ponto', result: '.'},
  {spoken: 'vírgula', result: ','},
  {spoken: 'vírgula', result: ','},
  {spoken: 'abrir parênteses', result: '('},
  {spoken: 'fechar parênteses', result: ')'},
  {spoken: 'hífen', result: '-'},
  {spoken: 'abrir aspas simples', result: '\''},
  {spoken: 'fechar aspas simples', result: '\''},
  {spoken: 'abrir aspas duplas', result: '"'},
  {spoken: 'fechar aspas duplas', result: '"'},
  {spoken: 'barra normal', result: '/'},
  {spoken: 'barra vertical', result: '|'},
  {spoken: 'barra invertida', result: '\\'},
  {spoken: 'arroba', result: '@'},
  {spoken: 'arroba', result: '@'},
  {spoken: 'hashtag delete', result: 'Ctrl + Backspace'},
  {spoken: 'hashtag', result: '#'},
  {spoken: 'cifrão', result: '$'},
  {spoken: 'porcento', result: '%'},
  {spoken: 'asterisco', result: '*'},
  {spoken: 'abrir chaves', result: '{'},
  {spoken: 'fechar chaves', result: '}'},
  {spoken: 'abrir colchetes', result: '['},
  {spoken: 'fechar colchetes', result: ']'},
  {spoken: 'sinal de menos', result: '-'},
  {spoken: 'sinal de mais', result: '+'},
  {spoken: 'sinal de igualdade', result: '='},
  {spoken: 'sinal de maior que', result: '>'},
  {spoken: 'sinal de menor que', result: '<'},
  {spoken: 'espaço tipográfico', result: '\\b'},
  {spoken: 'e comercial', result: '&'},
];

commands.sort((a, b) => a.spoken.localeCompare(b.spoken));

console.log(commands);
