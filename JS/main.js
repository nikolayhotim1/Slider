// find elements
let showPrevBtn = document.getElementById("show_prev_btn");
let showNextBtn = document.getElementById("show_next_btn");
let slideImage = document.getElementById("slide_img");

// subscribe to events
showPrevBtn.addEventListener("click", onShowPrevBtnClick);
showNextBtn.addEventListener("click", onShowNextBtnClick);

// create images array
let imagesUrls = [];
imagesUrls.push("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mclaren-765lt-101-1583186188.jpg?crop=0.671xw:0.570xh;0.147xw,0.351xh&resize=1200:*");
imagesUrls.push("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-ferrari-f8-spyder-112-1593551723.jpg?crop=0.795xw:0.671xh;0.131xw,0.212xh&resize=1200:*");
imagesUrls.push("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-amg-gt-black-series-118-1601842340.jpg?crop=0.653xw:0.490xh;0.298xw,0.352xh&resize=980:*");
imagesUrls.push("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-porsche-911-turbo-s-coupe-101-1586288365.jpg?crop=0.764xw:0.647xh;0.120xw,0.212xh&resize=1200:*");

let currentImageIndex = 0;
slideImage.src = imagesUrls[currentImageIndex];
showPrevBtn.disabled = true;

// functions definitions
function onShowPrevBtnClick() {
    currentImageIndex--;
    slideImage.src = imagesUrls[currentImageIndex];
    showNextBtn.disabled = false;

    // disable prev button if need
    if (currentImageIndex === 0) {
        showPrevBtn.disabled = true;
    }
}

function onShowNextBtnClick() {
    currentImageIndex++;
    slideImage.src = imagesUrls[currentImageIndex];
    showPrevBtn.disabled = false;

    // disable next button if need
    if (currentImageIndex === (imagesUrls.length - 1) ) {
        showNextBtn.disabled = true;
    }
}