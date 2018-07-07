var x=require('readline');
var y=x.createInterface(process.stdin,process.stdout);


y.question('Enter Number \n',function(c){
    f = (c * 9/5) + 32
    
    console.log(f);
});