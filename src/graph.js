//Example
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to
// Should return true.

const parse = function (pairs) {
  const data = pairs.slice();
  const paths = {};
  data.forEach(([source, target]) => {
    if (!Object.keys(paths).includes(source)) {
      paths[source] = [];
    }
    paths[source].push(target);
  });
  return paths;
};

const bfs = function (pairs, source, target) {
  const paths = parse(pairs);
  const visited = [];
  const queue = [source];
  while (queue.length) {
    const current = queue.shift();
    visited.push(current);
    if (paths[current].includes(target)) {
      return true;
    }
    paths[current].forEach((e) => {
      if (!visited.includes(e) && !queue.includes(e)) {
        queue.push(e);
      }
    });
  }
  return false;
};

module.exports = {bfs};
