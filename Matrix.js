let input = require(`readline-sync`);
class Graph{
    constructor(){
        this.arr = []
        this.result = []
    }
getCordinates(a,b){
    let x = this.arr.indexOf(a);
    let y = this.arr.indexOf(b);
    this.getMatrix(x,y)
}

getMatrix(x,y){
    this.result[x][y] = "1";
    this.result[y][x] = "1";
}
}

let graph = new Graph();


let x =  input.question("Enter the number of vertices");
for(let i=0;i<x;i++){

    let tempArr = []

    for(let i=0;i<x;i++){

        tempArr.push(0);
    }
    graph.result.push(tempArr);
}

for(let i = 0;i<x;i++){
    graph.arr.push(input.question("Enter the Nodes"));
}

do {
    let edges = input.question("Enter edges: "). split(" ");
    if(edges == -1) {
        break;
    }
    let a = edges[0];
    let b = edges[1];
    graph.getCordinates(a, b);
} while(true);

// graph.getCordinates("1","2")
// graph.getCordinates("2","4")
// graph.getCordinates("3","2")

console.log(graph.result)

















































