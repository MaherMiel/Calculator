let buttons = document.querySelector('.buttons');
let btn = document.querySelectorAll('span');
let value = document.getElementById('value');

for(let i=0; i<btn.length;i++){
    btn[i].addEventListener("click", function(){

        if(this.innerHTML=="="){
           try{
            value.innerHTML = eval(value.innerHTML);
           }
           catch{
            value.innerHTML = "INVALID";
           }
        }else{
            if(this.innerHTML=="CLEAR"){
               value.innerHTML = "";
            }
            else{
                value.innerHTML += this.innerHTML;
            }
        }
    })
}