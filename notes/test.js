let m = 20
console.log(m);

//Type Coersion
m = m + ""
console.log(m, typeof m);
m=+m+2
console.log(m, typeof m)

m = m - 5
console.log(m, typeof m);
m = m+10
console.log(m, typeof m);

//airthematic operation:
let num1 = true
let num2 = true
let num3 = num1+num2

console.log(num3) //2

let a = 4
let b = Math.pow(4,3) //64
let c = 4**3 //64

console.log(b,c);

let x=5
let y =5
let data = x>=5
let res = x+y;

console.log(data) //output is true

//similarly strings can also be compared.

console.log(`The value of ${x} and ${y} is ${res}`);
console.log(`My name is        //to get printed as you want without using \n.
Siddhi Parekh`);

let obj = {
    name: "siddhi",
    tech: 'JS',
    'work expr': 2       //comma allowed here also.
}
let input = 'work expr';

console.log(obj.name);    //siddhi
console.log(obj[input]);   //2

let obj1 = {
    name: "siddhi",
    tech: 'JS',
    'work expr': 2 ,      
    laptop1:{
         cpu: 'i5',
         ram:64,
         brand:'DELL',
    }

}

console.log(obj1.laptop1.ram.length);
console.log(obj1);
//delete obj1.laptop1;
console.log(obj1);

/*for(let key in obj)
{
    console.log(key, obj[key]);
}*/

for(let key in obj1.laptop1)
{
    console.log(key, obj1.laptop1[key]);
}

//Functions


function greet(user)
{
    return `Hello ${user}.`
}

let user = 'siddhi';
let str=greet(user);
console.log(str);

let add= function(num1, num2)
{
    return num1+num2;
}
let sum=add;

let result=sum(5,2);
console.log(result);

let greet1 = (user)=>//let greet1=function()
{
    console.log("Hello World!!");
    console.log(`${user} here!! `);
    //return 1;
}

console.log(greet1("siddhi"));

let add1 = (num1, num2) => num1+num2  //=> arrow function
//let sum1 = add1;
//console.log(sum1(5,2));
let sum1=add1(5,2);
console.log(sum1);

let info1={
    cpu: 'i5',
    ram:64,

    greet: function()
    {
        console.log("Hello World");
    },

    greet1: function()
    {
       console.log(this.cpu);     //this represents the current object.
    },

    compare: function(info)
    {
        if(this.cpu>info.cpu)
        {
            console.log(this);
        }

        else 
        {
            console.log(info);
        }
    }

}

let info2 = {
    cpu: 'i7',
    ram:64,
}
info1.greet();
info1.greet1();
info1.compare(info2);

