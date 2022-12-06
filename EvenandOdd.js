const even_no=document.querySelector('#evenno');
const ev_count=document.querySelector('#evcount');
const ev_sum=document.querySelector('#evsum');
const odd_no=document.querySelector('#oddno');
const odd_count=document.querySelector('#oddcount');
const odd_sum=document.querySelector('#oddsum');

checkEven();
function checkEven()
{
var evenarr=[]
var oddarr=[]
// let a=Math.floor(Math.random()*100) + 1;
for(a=1; a<=100; a++)
{
    var x=Math.floor(Math.random() * 100);
    if(x%2==0)
    {
        evenarr.push(x);
    }
    else
    {
        oddarr.push(x);
    }
}
var evensum=0;
for(var i=0; i<evenarr.length; i++)
{
    evensum=evensum+evenarr[i];
    
}

var oddsum=0;
for(var j=0; j<oddarr.length; j++)
{
    oddsum=oddsum+oddarr[j];
    
}
even_no.textContent=`even numbers are ${evenarr}`;
ev_count.textContent=`even numbers length is ${evenarr.length}`;
ev_sum.textContent=`even sum is ${evensum}`;

odd_no.textContent=`odd numbers are ${oddarr}`;
odd_count.textContent=`odd numbers length is ${oddarr.length}`;
odd_sum.textContent=`sum of odd numbers is ${oddsum}`;
}

