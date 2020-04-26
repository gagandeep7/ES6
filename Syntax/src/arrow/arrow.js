let buttonES5 = document.querySelector('.es5');
let buttonES6 = document.querySelector('.es6');

// arrow function
let fn = () => console.log(this);


// es5 function
function fn2(){
    console.log(this)
}

buttonES6.addEventListener("click",fn)
buttonES5.addEventListener("click",fn2)