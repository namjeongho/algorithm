var Graph = require('../src/Graph');

const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B', 10);
g.addEdge('A', 'C', 20);
g.addEdge('B', 'D', 5);
g.addEdge('B', 'E', 5);
g.addEdge('C', 'F');

console.log(g.dfs('A'));
console.log(g.bfs('A'));