/**
 * Created by Vzhak on 08.07.2017.
 */

var images = [
    "4.jpg",
    "Screenshot_1.jpeg.jpg",
    "IMG_3481.JPG"
];

var num = 0;
function next() {
    var slider = document.getElementById("slider");
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById("slider");

    num--;
    if (num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}
function preview() {
    var imgPreview = document.getElementById("slider");
    var sliderDiv = document.getElementById("sliderDiv");
    sliderDiv.height= 1000;
    imgPreview.width = 600;
    imgPreview.height = 600;

}
function back() {
    var imgPreview = document.getElementById("slider");
    imgPreview.width = 300;
    imgPreview.height = 300;
}