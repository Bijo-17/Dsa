
class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set();
        }
    
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1);
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2);
        }

        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

     hasEdge(vertex1,vertex2){
        return this.adjacencyList[vertex1].has(vertex2);
     }

    bfs(start){
        if(!this.adjacencyList[start]) return;

        let visited = new Set();
        let queue = [start];
        visited.add(start);

        while(queue.length){
             let current = queue.shift();

             console.log(current);
             
             for(let neighbour of this.adjacencyList[current]){
                if(!visited.has(neighbour)){
                    visited.add(neighbour);
                    queue.push(neighbour);
                }
             }
        }
    }

      

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + '->' + [...this.adjacencyList[vertex]]);
        }
    }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A','B');
graph.addEdge('B','C');

graph.display();

graph.bfs('B');

