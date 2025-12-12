let answer = document.getElementById("answer");

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const add = document.getElementById("add");
const multiply = document.getElementById("multiply");
const minus = document.getElementById("minus");
const divide = document.getElementById("divide");
const dot = document.getElementById("dot");
let inp1 = 0;
let inp2 = 0;
let sign = 0;
// 1 - add, 2 - minus , 3 - divide , 4 - multiply

one.addEventListener('click',function(){
    answer.innerText += '1';
    if(sign!=0){
        inp2 += '1';
    }
})
two.addEventListener('click',function(){
    answer.innerText += '2';
    if(sign!=0){
        inp2 += '2';
    }
})
three.addEventListener('click',function(){
    answer.innerText += '3';
    if(sign!=0){
        inp2 += '3';
    }
})
four.addEventListener('click',function(){
    answer.innerText += '4';
    if(sign!=0){
        inp2 += '4';
    }
})
five.addEventListener('click',function(){
    answer.innerText += '5';
    if(sign!=0){
        inp2 += '5';
    }
})
six.addEventListener('click',function(){
    answer.innerText += '6';
    if(sign!=0){
        inp2 += '6';
    }
})
seven.addEventListener('click',function(){
    answer.innerText += '7';
    if(sign!=0){
        inp2 += '7';
    }
})
eight.addEventListener('click',function(){
    answer.innerText += '8';
    if(sign!=0){
        inp2 += '8';
    }
})
nine.addEventListener('click',function(){
    answer.innerText += '9';
    if(sign!=0){
        inp2 += '9';
    }
})
zero.addEventListener('click',function(){
    answer.innerText += '0';
    if(sign!=0){
        inp2 += '0';
    }
})
dot.addEventListener('click',function(){
    answer.innerText += '.';
    if(sign!=0){
        inp2 += '.';
    }
})
add.addEventListener('click',function(){

    if(sign!=0){
        
        dothis(1,'+');
    }
    else{

        inp1 = answer.innerText;
        answer.innerText += '+';
        sign = 1;
    }



})

minus.addEventListener('click',function(){

    if(sign!=0){
        
        dothis(2,'-');
    }
    else{
    inp1 = answer.innerText;
    answer.innerText += '-';
    sign = 2;
    }

})

multiply.addEventListener('click',function(){
    if(sign!=0){
        
        dothis(4,'x');
    }
    else{
    inp1 = answer.innerText;
    answer.innerText += 'x';
    sign = 4;
    }

})

divide.addEventListener('click',function(){
    if(sign!=0){
        
        dothis(3,'÷');
    }
    else{
    inp1 = answer.innerText;
    answer.innerText += '÷';
    sign = 3;
    }
})

function dothis(sign_1,ab){
    inp1 = Number(inp1);
    inp2 = Number(inp2);
    if(sign==1){
        answer.innerText = inp1 + inp2;
    }
    else if(sign==2){
        answer.innerText = inp1 - inp2;
    }
    else if(sign==3){
        answer.innerText = inp1 / inp2;
   let num = Number(answer.innerText);

// Convert to string to check decimal length
let str = String(num);
let parts = str.split('.');

if (parts.length === 2 && parts[1].length > 5) {
    // Round only when decimal places > 5
    num = Math.round(num * 100000) / 100000;
}

answer.innerText = num;

    }
    else{
        answer.innerText = inp1 * inp2;
       let num = Number(answer.innerText);

// Convert to string to check decimal length
let str = String(num);
let parts = str.split('.');

if (parts.length === 2 && parts[1].length > 5) {
    // Round only when decimal places > 5
    num = Math.round(num * 100000) / 100000;
}

answer.innerText = num;

    }

    inp1 = answer.innerText;
    answer.innerText += ab;
    inp2 = 0;
    sign = sign_1;
}

enter.addEventListener('click',function(){
    inp1 = Number(inp1);
    inp2 = Number(inp2);
    if(sign==1){
        answer.innerText = inp1 + inp2;
    }
    else if(sign==2){
        answer.innerText = inp1 - inp2;
    }
    else if(sign==3){
        answer.innerText = inp1 / inp2;
   let num = Number(answer.innerText);

// Convert to string to check decimal length
let str = String(num);
let parts = str.split('.');

if (parts.length === 2 && parts[1].length > 5) {
    // Round only when decimal places > 5
    num = Math.round(num * 100000) / 100000;
}

answer.innerText = num;

    }
    else{
        answer.innerText = inp1 * inp2;
       let num = Number(answer.innerText);

// Convert to string to check decimal length
let str = String(num);
let parts = str.split('.');

if (parts.length === 2 && parts[1].length > 5) {
    // Round only when decimal places > 5
    num = Math.round(num * 100000) / 100000;
}

answer.innerText = num;

    }

    inp1 = 0;
    inp2 = 0;
    sign = 0;
})
document.getElementById("cl").addEventListener('click',function(){
    
    answer.innerText = answer.innerText.slice(0, -1);
    if(sign!=0){
        inp2 = inp2.slice(0, -1);
    }

})






document.getElementById("re").addEventListener('click',function(){
    answer.innerText = "";
    inp1 = 0;
    inp2 = 0;
    sign = 0;
})


