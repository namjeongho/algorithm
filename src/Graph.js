class Graph {
    constructor() {
        this.vertices = [];
        this.edges = new Map();
        this.weight = new Map();
    }

    addVertex(v) {
        if(~this.vertices.indexOf(v)) return;

        this.vertices.push(v);
        this.edges.set(v, []);
        this.weight.set(v, []);
    }

    removeVertex(v) {
        const idx = this.vertices.indexOf(v);
        if(!~idx) return;
        this.vertices.splice(idx, 1);
        this.edges.delete(v);
        this.weight.delete(v);
    }

    addEdge(v1, v2, weight) {
        if(!~this.vertices.indexOf(v1) || !~this.vertices.indexOf(v2)) return;

        if(weight === undefined) weight = 1;

        this.edges.get(v1).push(v2);
        this.edges.get(v2).push(v1);

        this.weight.get(v1).push(weight);
        this.weight.get(v2).push(weight);
    }

    removeEdge(v1, v2) {
        if(!~this.vertices.indexOf(v1) || !~this.vertices.indexOf(v2)) return;
        
        const e1 = this.edges.get(v1);
        const e2 = this.edges.get(v2);
        const w1 = this.weight.get(v1);
        const w2 = this.weight.get(v2);

        const eidx1 = e1.indexOf(v2);
        const eidx2 = e2.indexOf(v1);

        e1.splice(eidx1, 1);
        e2.splice(eidx2, 1);

        const widx1 = w1.indexOf(v2);
        const widx2 = w2.indexOf(v1);

        w1.splice(widx1, 1);
        w2.splice(widx2, 1);
    }

    dfs(v) {
        const visited = [];
        const path = [];
        
        this._dfs(v, visited, path);
        return path;
    }

    _dfs(v, visited, path) {
        visited.push(v);
        path.push(v);
        const e = this.edges.get(v);
        for(let i=0; i<e.length; i++) {
            if(!~visited.indexOf(e[i])) {
                this._dfs(e[i], visited, path);
            }
        }
    }

    bfs(v) {
        const visited = [];
        const path = [];
        const queue = [];

        queue.push(v);
        visited.push(v);

        while(queue.length) {
            const current = queue.shift();
            path.push(current);

            const e = this.edges.get(current);

            for(let i=0; i<e.length; i++) {
                if(!~visited.indexOf(e[i])) {
                    queue.push(e[i]);
                    visited.push(e[i]);
                }
            }
        }
        return path;
    }
}

module.exports = Graph;