let img = document.getElementById("img");
let Upload = document.getElementById("Upload");
let Saturate = document.getElementById("Saturate");
let Contrast = document.getElementById("Contrast");
let Brightness = document.getElementById("Brightness");
let Sepia = document.getElementById("Sepia");
let Grayscale = document.getElementById("Grayscale");
let Blur = document.getElementById("Blur");
let HueRotate = document.getElementById("Hue-Rotate");
let download = document.getElementById("download");
let reset = document.getElementById("reset");
let imgItem = document.querySelector(".imgItem");
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
window.onload = function(){
reset.style.display = "none";
download.style.display = "none";
imgItem.style.display = "none";
}
Upload.onchange = function(){
  resetValue();
reset.style.display = "block";
download.style.display = "block";
imgItem.style.display = "block";
let file = new FileReader();
file.readAsDataURL(Upload.files[0]);
file.onload = function(){
    img.src = file.result;
}
img.onload = function(){
canvas.width = img.width;
canvas.height = img.height;
    ctx.drawImage(img,0,0,canvas.width,canvas.height);
    img.style.display='none';
}
}
function resetValue(){
ctx.filter = "none";
Saturate.value = "100";
Contrast.value="100";
Brightness.value="100";
Sepia.value="0";
Grayscale.value="0";
Blur.value="0";
HueRotate.value="0";
ctx.drawImage(img,0,0,canvas.width,canvas.height);
}
let filters = document.querySelectorAll(" ul li input");
filters.forEach(filter =>{
    filter.addEventListener("input" , function(){
       ctx.filter = `
        saturate(${Saturate.value}%)
        contrast(${Contrast.value}%)
        brightness(${Brightness.value}%)
        sepia(${Sepia.value}%)
        grayscale(${Grayscale.value})
        Hue-Rotate(${HueRotate.value}deg)
        Blur(${Blur.value}px) 
        `
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
    })
})
download.onclick = function(){
    download.href = canvas.toDataURL('jpeg');
}

