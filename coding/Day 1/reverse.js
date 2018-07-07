var x=require('readline');
var y=x.createInterface(process.stdin,process.stdout);
var rstring = '';
var ch;
y.question("Enter String \n",function(string){
  
    {
          for(var i=string.length-1;i>=0;i--)
            {
                rstring+=string[i];
            }
        console.log('Reverse string is ' +rstring);
    }

});