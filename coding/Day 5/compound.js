var compoundinterest;
var x=require('readline');
var y=x.createInterface(process.stdin,process.stdout);
y.question('Enter prinicple investment amount',function(princ){
    y.question('Enter rate of interest',function(rate){
        y.question('ENter the number of compounded period for a year',function(num){
           rate=1+parseFloat(rate);
            rate=Math.pow(rate,num);
        compoundinterest=(princ*(rate-1));
        console.log('compound interest is:'+ ci);
        })

    })
})