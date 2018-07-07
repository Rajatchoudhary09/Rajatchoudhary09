var x=require('readline');
var y=x.createInterface(process.stdin,process.stdout);
var a;
y.question('Enter Number \n',function(a){
    
    var factorial = function fac(n) 
    { 
        return n < 2 ? 1 : n * fac(n - 1); 
    };
    console.log('Factorial is ' +factorial(a));
});
