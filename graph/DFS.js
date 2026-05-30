
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

    dfs(start,visited = new Set()){
        if(!this.adjacencyList[start]) return;

        console.log(start);
        visited.add(start);

        for(let neighbour of this.adjacencyList[start]){
            if(!visited.has(neighbour)){
                this.dfs(neighbour,visited);
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

graph.dfs('A');

