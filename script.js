//spreading operator
var arr = [10,20,30];
var arr1 = [...arr,40,50,60];
console.log(arr);
console.log(arr1);
//destructuring operator
var marks = [100,89,98,96,95];
var [m1,m2,m3,m4,m5] = marks;
console.log(m1,m2,m3,m4,m5);
//call back function
function demo1(){
    console.log("Hello from demo");
}

const callback = (callbackfun) =>{
    console.log("Hello from call back");
    callbackfun();
}
callback(demo1)
var name = "hema"
console.log(`My Name is ${name}`)
//MAP-
let array=[1,2,3,4,5];
let mappedarr=array.map((i)=>{return i*2})
console.log(array);
console.log(mappedarr);
//accept a function return new array
function addOne(n){
    return n*2;
}
let array1=[1,2,3,4,5];
let mappedarr1=array.map((i)=>{return i*2})
console.log(array1);
console.log(mappedarr1);
//filter 
const filteredArray=array.filter((i)=>{return i%2===0});
    console.log(filteredArray);
    //return single value based on the function 
    const reducedArray=array.reduce((sum,current)=>{return sum+current},0);
    console.log(reducedArray);
    //async wait
    const getData = async()=>{
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const users = await response.json()
            console.log(users);
        
        }
        catch(error){
            console.log(`Error: ${error}`);
        }
    }
    getData()