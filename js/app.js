// globsl variables
allImages = [];
var imageOne = document.getElementById('imageOne');

//Objects
new image('bag');
new image('banana');
new image('bathroom');
new image('boots');
new image('breakfast');
new image('bubblegum');
new image('chair');
new image('cthulhu');
new image('dog-duck');
new image('dragon');
new image('pen');
new image('pet-sweep');
new image('scissors');
new image('shark');
// new image('sweep'); //not a jpg
new image('tauntaun');
new image('unicorn');
// new image('usb'); //not a jpg
new image('water-can');
new image('wine-glass');


// constructor function
function image(name){
    this.filepath = `img/${name}.jpg`;
    this.name = name
    this.views = 0;
    allImages.push(this)
}

//random image function
function showRandomImage(){
    var random = Math.floor(Math.random() * allImages.length);
    imageOne.src = allImages[random].filepath;
    imageOne.alt = allImages[random].name;
    imageOne.title = allImages[random].name;
    allImages[random].views++;
}

showRandomImage();

//event listener

imageOne.addEventListener('click', clickHandler);

function clickHandler(event){
    console.log(event.target);
    showRandomImage();
}