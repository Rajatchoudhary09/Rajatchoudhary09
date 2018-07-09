
var array=[1, 0, 1, 1, 1, 0, 0, 1, 0];
console.log('Binary array before sorting is:\n'+array);
var size=array.length;
var count=0;
var store=[];
for(var i=0;i<size;i++)
{
    if(array[i]==0)
    {
        count++;
    }
}
for(var i=0;i<count;i++)
{
    store.push(array[i]=0);
}
for(var i=count;i<size;i++)
{
    store.push(array[i]=1);
}
console.log('After sorting binary array is:');
console.log(store);