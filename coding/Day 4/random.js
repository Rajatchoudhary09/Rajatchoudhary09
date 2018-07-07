var a,b,sum,sub;
var x=require('readline');
var y=x.createInterface(process.stdin,process.stdout);
function getrange(){
y.question('enter minimum and maximum range for generating random numbers',function(min){
y.question('',function(max){
        min=Math.ceil(min);
        max=Math.floor(max);
    getrandom(min,max);
    });
});
}
  function getrandom(min,max){     
a=Math.floor(Math.random()*(max-min+1))+min;
b=Math.floor(Math.random()*(max-min+1))+min;
    sum=a+b;
    sub=a-b;
   console.log('sum of two random generated number is'+sum);
   
   console.log('difference of two random generated number is'+ sub);
   y.question('Enter the value of any number',function(val){
       if(val==a||val==b){
           console.log('your answer is correct');
      
           sleep(5000).then(()=> {
               console.log('................');
            getrandom(min,max);
          })  ;
       }
       else{
           console.log('Your answer is wrong');
          sleep(5000).then(()=> {
               console.log('.........');
            getrandom(min,max);
          })  ;
           
       }
   });
}

function sleep(time){
    return new Promise((resolve)=> setTimeout(resolve,time));
}
  

getrange();