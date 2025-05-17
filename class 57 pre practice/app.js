var fileInput = document.getElementById("input-file")
var previewImg = document.getElementById("image-preview img")
var chooseImg = document.getElementById("choose-img")

// console.log(choseImg)

var loadImage = () => {
    var file = fileInput.files[0]
    if (!file) return
    console.log(file)
     previewImg.svg = URL.createObjectURL(file);
}

fileInput.addEventListener("change", loadImage)
chooseImg.addEventListener("click", () => fileInput.click());
