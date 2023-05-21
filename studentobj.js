// const student={
//     name:'indresh',
//     age:23,
//     // greet:()=>{
//     //     console.log('hii i am'+this.name);
//     // }
//     // greet:function(){
//     //             console.log('hii i am'+this.name);
//     // }
//     greet(){
//                         console.log('hii i am'+this.name);
//     }
// }
// student.greet();
const arr = ['apple','oranges',' ', 'mango',' ','lemon'];
const arr2 =arr.map(temp=>{
    if(temp===' '){
        return 'empty string';
    }
    else
    {
        return temp;

    }
});
console.log(arr);
console.log(arr2);
