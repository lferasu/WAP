window.onload = function () {
    document.getElementById("q-2Button").onclick=calculateMax;
    document.getElementById("q-3Button").onclick=calculateMax3;
    document.getElementById("q-4Button").onclick = checkVowel;
    document.getElementById("q-5Enter").onclick=enterNumbers;
    document.getElementById("multiply").onclick=multiplyNumbers;
    document.getElementById("sum").onclick=sumNumbers;
    document.getElementById("q-6Button").onclick=reverse;
    document.getElementById("q-7Enter").onclick =enterStringQ7;
    document.getElementById("q-7Button").onclick=getLargestString;
    document.getElementById("q-8Enter").onclick =enterStringQ8;
    document.getElementById("q-8Button").onclick=getNumberOfStrings;
    document.getElementById("function").onchange=calculateValue;
    document.getElementById('q-9aEnter').onclick = enterNumberQ9;
};
var numbers = [];
var Strings_q7 =[];
var Strings_q8 =[];
var q9_Numbers = [];
function calculateMax()
{
    let x = document.getElementById("number2-1").value;
    let y = document.getElementById("number2-2").value
    let max;
    if(parseInt(x)>=parseInt(y))
    {
        max = parseInt(x);
    }
    else{
        max=parseInt(y);
    }
    document.getElementById("result-2").value=max;
}

function calculateMax3()
{
    var x = parseInt(document.getElementById("number3-1").value);
    var y = parseInt(document.getElementById("number3-2").value);
    var z = parseInt(document.getElementById("number3-3").value);
    let max;
    if(x>=y && x>=z)
    {
        max=x;
    }
    else if(y>=x && y>=z)
    {
        max =y;
    }
    else{
        max =z;
    }
    document.getElementById("result-3").value=max;
}

function checkVowel()
{
    let ch = document.getElementById("q4-char").value;
    let vowels = ["a", "e", "i", "o", "u","A","E","I","O","U"];
    let isVowel = false;
    for(let i =0; i<vowels.length;i++){

        if(ch === vowels[i]){
            isVowel = true;
        } 
    }

    document.getElementById("isVowel").value=isVowel;


   
}

function enterNumbers()
{
   
    let inputNumber = parseInt(document.getElementById("q5-number").value);
    numbers.push(inputNumber);
    let inputString =document.getElementById("q5-numbers").innerHTML ;
    if(inputString.length==0)
    document.getElementById("q5-numbers").innerHTML += inputNumber;
    else
    document.getElementById("q5-numbers").innerHTML += ","+inputNumber;
    
}

function multiplyNumbers()
{
    if(numbers.length ==0)
    {
        document.getElementById("q-5result").innerHTML ="no numbers are entered";
        return;
    }
  let product =1;
  for(let i=0;i<numbers.length;i++)
  {
      product *=numbers[i];
  }

  document.getElementById("q-5result").value = product;
}

function sumNumbers()
{if(numbers.length ==0)
    {
        document.getElementById("q-5result").innerHTML ="no numbers are entered";
        return;
    }
  let sum =0;
  for(let i=0;i<numbers.length;i++)
  {
      sum +=numbers[i];
  }

  document.getElementById("q-5result").value = sum;
}

function reverse(){
    let stringToReverse = document.getElementById("String6-1").value;
    let stringToReverseArray = stringToReverse.split("");
    document.getElementById("String6-2").value = stringToReverseArray.reverse().join("");
}

function enterStringQ7()
{
    let inputString = document.getElementById("q7-string").value;
    Strings_q7.push(inputString);
    let inputStrings =document.getElementById("q7-strings").innerHTML ;
    if(inputStrings.length==0)
    document.getElementById("q7-strings").innerHTML += inputString;
    else
    document.getElementById("q7-strings").innerHTML += ","+inputString;
}

function getLargestString()
{
    let largestString ="";
    for(let i=0;i<Strings_q7.length;i++)
    {
        if(largestString.length <Strings_q7[i].length)
        {
            largestString = Strings_q7[i];
        }
    }
    document.getElementById("largestString").value=largestString;
}

function enterStringQ8()
{
    let inputString = document.getElementById("q8-string").value;
    Strings_q8.push(inputString);
    let inputStrings =document.getElementById("q8-strings").innerHTML ;
    if(inputStrings.length==0)
    document.getElementById("q8-strings").innerHTML += inputString;
    else
    document.getElementById("q8-strings").innerHTML += ","+inputString;
}

function getNumberOfStrings()
{
    let minLength = parseInt(document.getElementById("min-length").value);
    let counter =0;

    for(let i=0; i<Strings_q8.length;i++)
    {
        if(Strings_q8[i].length>minLength)
        {
            counter++;
        }
    }

    document.getElementById("count").value =counter;
}

function enterNumberQ9()
{
    let inputNumber = parseInt(document.getElementById("q9a-number").value);
    q9_Numbers.push(inputNumber);
    let inputString =document.getElementById("q9a-numbers").innerHTML ;
    if(inputString.length==0)
    document.getElementById("q9a-numbers").innerHTML += inputNumber;
    else
    document.getElementById("q9a-numbers").innerHTML += ","+inputNumber;
}

function calculateValue()
{
   let method = document.getElementById("function").value;
   if(method == "MUL")
   {
    
    let val = q9_Numbers.map(function(elem, i, array) {
        return elem *10;
    });
    let result = val.toString();
    document.getElementById("q9a-result").value = result;   
   }
   else if (method == "THREES"){

    let val = q9_Numbers.filter(function(elem){
        return elem==3;
    });

    
    document.getElementById("q9a-result").value = val.length;  

   }

   else if (method = "PRODUCT")
   {
    let val = q9_Numbers.reduce(function (product, elem){
        return product*elem;
    })
    document.getElementById("q9a-result").value = val;  
   }

}