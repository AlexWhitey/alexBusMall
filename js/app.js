// globsl variables
var allImages = [];
var imageHolder = document.getElementById('imageHolder');
var imageOne = document.getElementById('imageOne');
var imageTwo = document.getElementById('imageTwo');
var imageThree = document.getElementById('imageThree');
var imageTag = [imageOne, imageTwo, imageThree];
var randomStored = [];
var previousStored = [];

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

function randomNumber(){
  for(i = 0; i < 3; i++){
    var random = Math.floor(Math.random() * allImages.length);
    randomStored.push(random);
}
}

// Random Image Generator
function loadRandomImages(){
    for(i = 0; i < 3; i++){
        imageTag[i].src = allImages[randomStored[i]].filepath;
        imageTag[i].alt = allImages[randomStored[i]].name;
        imageTag[i].title = allImages[randomStored[i]].name;
        allImages[randomStored[i]].views++;
    }
}


//event listener

imageHolder.addEventListener('click', clickHandler);

function clickHandler(event){
    previousStored.push.apply(previousStored, randomStored);
    console.log(event.target.alt);
		randomStored = [];
		randomNumber();
    loadRandomImages();
}
randomNumber();
loadRandomImages();