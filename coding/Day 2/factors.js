var x=require('readline');
var y=x.createInterface(process.stdin,process.stdout);
var str=1;
y.question('Enter a number',function(a){
    for(var i=2;i<=a;i++)
{
    if(a%i==0)
       str +=','+i; 
}
console.log('Factors of '+a +' is '+str);
})
