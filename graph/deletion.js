
class Graph {
     constructor(){
        this.adjacencyList = {};
     }

     addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set();
        }
     }

     addEdge(v1,v2){
        if(!this.adjacencyList[v1]){
            this.addVertex(v1);
        }
        if(!this.adjacencyList[v2]){
            this.addVertex(v2);
        }
 
         this.adjacencyList[v1].add(v2);
         this.adjacencyList[v2].add(v1)
     }

     removeEdge(vertex1,vertex2){
         this.adjacencyList[vertex1].delete(vertex2);
         this.adjacencyList[vertex2].delete(vertex1);
     }

     removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return;
        }

         for(let adjacentVertex of this.adjacencyList[vertex]){
             this.removeEdge(vertex,adjacentVertex);
         }

         delete this.adjacencyList[vertex];
     }

     display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex +'->'+ [...this.adjacencyList[vertex]]);
        }
     }

      hasEdge(v1,v2){
        return this.adjacencyList[v1].has(v2);
      }

}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');

graph.addEdge('A','B');
graph.addEdge('B','C');

graph.display();

console.log(graph.hasEdge('A','B'));

graph.removeVertex('B');

graph.display();
