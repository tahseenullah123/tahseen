let inputt = document.getElementById("textbox");
let butt = document.querySelectorAll("button");

let string = "";
let arro = Array.from(butt);

arro.forEach(button => {
    button.addEventListener("click", (t) =>{
        if(t.target.innerHTML == "="){
            string = eval(string);
            inputt.value = string;
        }

        else{
            string += t.target.innerHTML;
            inputt.value = string;}
    })
})


// let inputt = document.getElementById("textbox");
// let butt = document.querySelectorAll("button");

// let string = "";
// let arro = Array.from(butt);

// arro.forEach(button => {
//     button.addEventListener('click', (t) =>{
//         if(t.target.innerHTML == '='){
//             string = eval(string);
//             inputt.value = string;
//         }

//         else if(t.target.innerHTML == "Ac"){
//             string = "";
//             inputt.value = string;
//         }

//         else if(t.target.innerHTML == "Del"){
//             string = string.substring(0, string.length-1);
//             inputt.value = string;
//         }

//         else{
//             string += t.target.innerHTML;
//         inputt.value = string;}
//     })
// })