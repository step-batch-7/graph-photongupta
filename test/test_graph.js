const {bfs} = require('../src/graph');
const assert = require('assert');

describe('#BFS', function () {
  it('should validate if the path exists between source and target', function () {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['c', 'd'],
    ];
    assert.ok(bfs(pairs, 'a', 'd'));
  });

  it('should not validate if the no path exists between source and target', function () {
    const pairs = [
      ['a', 'b'],
      ['b', 'a'],
      ['c', 'd'],
    ];
    assert.ok(!bfs(pairs, 'a', 'd'));
  });
});
