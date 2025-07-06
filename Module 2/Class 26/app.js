// document.write("Practice JS")
// console.log("class 26")

function foo() {
    console.log("Welcome"); 
}


function link(){
    console.log("welcome to Pakistan");
}


function para(){
    console.log("Welcome to Paragragh");
}

function mouseenter(){
    console.log("welcome to black box")
}

function mouseout(){
    console.log("Back to plane box");
}


function para(){
    console.log("Welcome to Paragragh");
}

// function seemore(){
//     console.log("See further?");
// }


// function seeless(){
//     console.log("See less ")
// }

var longtext = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laboriosam illo ducimus quaerat! Nesciunt, numquam saepe, quas, soluta aspernatur quia quod magnam iste dicta porro accusantium suscipit asperiores natus modi!"

var Shorttext = "Lorem ipsum, dolor sit amet consectetur adipisicing elit."


function seemore(){
    var  paraElement = document.getElementById("paraElement");
    // console.log("See More", paraElement)
    paraElement.innerHTML = longtext ;   
}

function seeless(){
    var paraElement =  document.getElementById("paraElement");
    // console.log("See less" , paraElement)
    paraElement.innerHTML =  Shorttext;
}

function bigimage(){
    // console.log("Welcome to image");
    var carimage = document.getElementById("carimage")
    carimage.width = "600";
    carimage.height = "400";
}




