let segundo1=0;
let segundo2=0;
let minuto1=0;
let minuto2=0;
let hora=0;

setInterval(()=>{
        segundo1++;
    if(segundo1==10){
        segundo2++;
        segundo1=0;
    }
    if(segundo2==6){
        minuto1++;
        segundo2=0;
    }
}, 1000)

console.log(segundo1);