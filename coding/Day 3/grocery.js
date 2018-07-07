var counter=1;
var obj;
var arr=[];
var arrays=[];
var fs=require('fs');
var x=require('readline');
var y=x.createInterface(process.stdin,process.stdout);
y.question('how many items you want to insert in a grocery file',function(num){
                          itemno(num);
});
    function itemno(num){
   
    
        console.log('Enter item details');
    y.question('ENter item name ',function(name){
    y.question('ENter item price ',function(price){
            obj={itemname:name,itemprice:price};
            arr.push(obj); 
            counter++;
            console.log(obj);
            if(counter<=num)
            itemno(num);
            else{
            fs.writeFile('one.txt',JSON.stringify(arr),function(err){
                console.log("data entered successfully");
                 readf();      
            
       });
    }
    });
});    
    }



function readf()
{
    fs.readFile('one.txt',function(err,arrays){
        if(err)
        console.log('error');
        arrays=JSON.parse(arrays);
        search(arrays);
    });
 }
 function search(arrays)
 {
     y.question('ENter item whose price you want to know',function(item){
         for(var i=0;i<arrays.length;i++){
             if(item==arrays[i].itemname)
             {
                 console.log('price of'+item+' is '+  arrays[i].itemprice);
             }
            

         }
         process.exit();
     })
 }