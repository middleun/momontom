const body = document.body;
const imgs = ["bg_1.jpg", "bg_2.jpg", "bg_3.jpg", "bg_4.jpg", "bg_5.jpg", "bg_6.jpg", "bg_7.jpg", "bg_8.jpg","bg_9.jpg","bg_10.jpg",
"bg_11.jpg","bg_12.jpg","bg_13.jpg","bg_14.jpg","bg_15.jpg"]
const num = Math.floor(Math.random()* imgs.length);
const randomImg = imgs[num];
// console.log(randomImg);

// append image to html
function appendImg(img){
    img.classList.add("background");
    body.append(img);
}

// get new image from array and add event
function getImg(){
    const newImg = document.createElement("img");
    newImg.src = `imgs/${imgs[num]}`;
    newImg.addEventListener("load", appendImg(newImg));
}
getImg();