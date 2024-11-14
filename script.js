let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

//Taking an empty string where we store the value to show in input.
let string = '';

//Take array of all button to run loop on it.
let arr = Array.from(buttons);

//adding eventListner whenever any buttons get clicked.
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }else if (e.target.innerHTML == 'AC'){
            string = '';
            input.value = string;
        }else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;    
        }else{
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});