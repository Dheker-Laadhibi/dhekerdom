const btn=document.querySelectorAll(".btn");
console.log(btn);

const btn1=document.querySelectorAll(".btn1");

//const textfield=document.querySelectorAll("input");


const textfield=document.querySelectorAll(".input");
console.log(textfield);



const prix=document.querySelectorAll(".amount");
console.log(prix);

const price=document.querySelectorAll(".price");
console.log(price);

const total=document.querySelector(".total");
console.log(total);



for (let i=0; i<btn.length; i++){

    btn[i].addEventListener("click",function(){
        textfield[i].value++;
        prix[i].innerHTML = parseInt(prix[i].innerHTML)+parseInt(price[i].value);
        total.innerHTML=parseInt(total.innerHTML)+parseInt(prix[i].innerHTML);    
    }
    )

}


for (let i=0; i<btn1.length; i++){

    btn1[i].addEventListener("click",function(){
        textfield[i].value--;
        prix[i].innerHTML = parseInt(prix[i].innerHTML)-parseInt(price[i].value);
        total.innerHTML=parseInt(total.innerHTML)-parseInt(prix[i].innerHTML);

    }
    )

}



const img=document.querySelectorAll("#heart");


for(let i=0; i<img.length; i++){
    img[i].addEventListener("click",function(){

    if(img[i].style.color=="black"){
    img[i].style.color="red";}
    else{
        img[i].style.color="black";
    }

})
};

//remove item
const row=document.querySelectorAll("tbody tr");
const corbeille=document.querySelectorAll("#trash");

for(let i=0; i<corbeille.length; i++){
    corbeille[i].addEventListener("click" , function(){
        let child= row[i].lastChild;
        while(child){
           row[i].removeChild(child);
           child= row[i].lastChild ;
         }

});
}