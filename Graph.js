const input = require(`readline-sync`)
//creating a class graph
class Graph{
    constructor(no_of_v){
        this.no_of_v = no_of_v;
        //creating a map for storing key => node and value=>adjacent 
        this.adjList = new Map();
        this.visit = new Set();
    }

    addVertex(v){
        this.adjList.set(v,[]);
    }

    addEdge(source,destination){

        // Directed Graph
        this.adjList.get(source).push(destination);
        // Undirected Graph
        this.adjList.get(destination).push(source);
    }

    print(){

        let x = this.adjList.keys()
        for(let key of x){
            console.log("Key :"+ key);
            let values = this.adjList.get(key);
            for(let value of values)
            console.log("values :" + value);
        }
    }

dfs(start){
    console.log(start);
    this.visit.add(start); //to eliminate the duplicate 

    let destinations = this.adjList.get(start); //key ooda value aedukurom
    for(let dest of destinations){
        //iruka ilaya nu check panren 
        if(!this.visit.has(dest)){
            //ilana matum call panu
            this.dfs(dest)
        }
    }
}

}

let x = input.question("Enter no of nodes");
let graph = new Graph(x);

let arr = [];
for(let i=0;i<x;i++){
    let y = input.question("Enter the node values/ vertices ");
    //    let y = readline.question("Enter the node values/ vertices ");
 
    arr[i] = y;
    // console.log(arr[i]);
}
//  console.log(typeof arr[0]);
for(let i=0;i<x;i++){
    graph.addVertex(arr[i])
   
}
do {
    let edges = input.question("Enter edges: "). split(" ");
    if(edges == -1) {
        break;
    }
    let a = edges[0];
    let b = edges[1];
    graph.addEdge(a, b);
} while(true);

// console.log(graph.adjList)
// console.log(arr)

graph.print()
graph.dfs(arr[0])