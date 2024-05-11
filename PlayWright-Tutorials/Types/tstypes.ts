let isPresent: boolean = false;
let magic: number = 66.6;
let hello: string = 'world';

let notDefined: undefined = undefined;
let notPresent: null = null;

let penta: symbol = Symbol('star');
//let biggy: bigint = 24n;
/*Buold in java classes*/

let regex :RegExp =  new RegExp('a+b');
let array:Array<number> = [1,4,7,2,24,7,3,1];
let set = new Set(array);
console.log(set);

/*User defined classes */
//FIFO- QUEUE
class Queue<T>{
    private data: Array<T> =[];
    push(item:T){
        this.data.push(item);
    }
    pop(): T | undefined {
        return this.data.shift();
    }
}
let queue: Queue<number> = new Queue();

let arrays:number[] = [1,2,3,4]
//Arrays are expendable in nature
//but for a fixed lenght arry in typescript has something called tuple 
//to represent a point in space
let tuples :[number,number] =[10,2];
//assign tupple -
tuples = [2,3];
//tuples=[1]; gives errror sicne its less then the specified size
 
//type alise and its uses


let center :{x:number, y:number}={
    x:10,
    y:8
}

let corner :{x:number, y:number}={
    x:0,
    y:0
}

/****************/
type Point = {x:number, y:number};
let centerwittype :Point={
    x:10,
    y:8
}
let cornerwithtype :Point={
    x:0,
    y:0
}
const point:Point={x:10,y:7};
point.x=123;

function sum(...values:number[]){
return values.reduce((previous,current)=>{
    return previous+current;
});
}
type Point2D = {x:number,y:number};
type Point3D = {x:number,y:number,z:number};

let P2d:Point2D = {x:10,y:3};
let p3d:Point3D = {x:5,y:2,z:4};
P2d=p3d;
// Duck type style in typescritp
function takepoint2d(point:Point2D){}
takepoint2d(p3d);
//Any and unknown are used to bypass the type in ts
//so for any yuou can pass anything but for unknow u can store anything but to do any operation you need to check the tyoeof of it

let anyexmp:any;
let unknowexmp : unknown;

anyexmp = "10";
unknowexmp=10;
const value= (anyexmp as string).split('i');
if(typeof unknowexmp == 'number'){
console.log(unknowexmp);
}

console.log(anyexmp);

//type assertion

//type casting

let nu=100;
let numb=+nu;// saying that my nu type will be integer/number always

