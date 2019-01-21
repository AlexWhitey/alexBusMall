// globsl variables
allImages = [];

//Objects
new image('bag');
new image('banana');
new image('bathroom');
new image('boots');
new image('breakfast');
new image('bubblegum');
new image('chair');
new image('cthulu');
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



function image(name){
    this.filepath = `img/${name}.jpg`;
    this.name = name
    this.views = 0;
    allImages.push(this)
}