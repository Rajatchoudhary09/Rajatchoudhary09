var x=require('readline');
var y=x.createInterface(process.stdin,process.stdout);
y.question("Enter first number \n",function(a)
{
y.question("Enter another number \n",function(b)
{
y.question("Enter what kind of operation you want to perform on numbers(+,-,/,%,*) \n" ,function(calculator)
{
a=parseInt(a);
b=parseInt(b);
switch(calculator)
{
case '+':console.log('sum of '+a+' and '+b+' is '+ (a+b));
break;
case '-':console.log('subtraction of '+a+' and '+b+' is '+ (a-b));
break;
case '/':console.log('Division of '+a+' and '+b+' is '+a/b);
break;
case '%':console.log('Moduler of '+a+' and '+b+ 'is' +a%b);
break;
case '*':console.log('Multiplication of '+a+' and '+b+ 'is' +a*b);
break;
default:console.log('Wrong choice');
}
});
});
});