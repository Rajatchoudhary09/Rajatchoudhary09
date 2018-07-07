
var x=require('readline');
var a,b,temp;
var y=x.createInterface(process.stdin,process.stdout);
y.question('Enter any two numbers to calculate their hcf and lcm',function(num1){
y.question('',function(num2){
a=num1;
b=num2;
while(b!=0){
    temp=b;
    b=a%b;
    a=temp;
}
console.log('hcf of '+num1+' and '+ num2+' is '+ a);
console.log('lcm of '+num1+' and '+ num2+' is '+ (num1*num2)/a);
process.exit();
});
});
