// console.log("hello World")

function inputfocus(input){
    // console.log(input)
    input.style.backgroundColor = "grey";
}

// function inputblur(input){
//     // console.log(input);
//     input.style.backgroundColor = "lightpink";
// }


function inputblur(input){
    // console.log(input);
    input.style.backgroundColor = "lightpink";

    if (input.value.length >= 3 ){
        input.style.backgroundColor = "lightblue";
    }else{
        input.style.backgroundColor = "brown";
    }
}


function changepara(){
    var para = document.getElementById("para");
    // console.log(para)
    para.className += " bigtext";
}


