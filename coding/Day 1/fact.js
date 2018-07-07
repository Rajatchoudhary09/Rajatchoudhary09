var x=require('readline');
var y=x.createInterface(process.stdin,process.stdout);


y.question('Enter Number \n',function(number){
    var a=1;

        for(i=1; i<=number; i++)  
        {
        a= a*i;
        }  
    
    console.log(a);
});