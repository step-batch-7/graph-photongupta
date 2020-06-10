const {bfs} = require('./src/graph');
const fs = require('fs');

const main = function () {
  const pairs = fs
    .readFileSync('./sample_data.txt', 'utf-8')
    .split('\n')
    .filter((e) => e != '')
    .map((e) => e.split(' ').filter((e) => e != '|'));
  const questions = [
    ['bb', 'jj'],
    ['jj', 'aa'],
    ['aa', 'hh'],
    ['hh', 'ii'],
    ['ii', 'ee'],
    ['ee', 'mm'],
    ['mm', 'jj'],
  ];
  const answers = questions.map(([source, target]) =>
    bfs(pairs, source, target)
  );
  console.log(questions);
  console.log(answers);
};

main();
