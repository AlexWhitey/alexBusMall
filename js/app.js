// globsl variables
var allImages = [];
var imageHolder = document.getElementById('imageHolder');
var imageOne = document.getElementById('imageOne');
var imageTwo = document.getElementById('imageTwo');
var imageThree = document.getElementById('imageThree');
var ctx = document.getElementById("myChart").getContext("2d");
var imageTag = [imageOne, imageTwo, imageThree];
var randomArray = [];
var testArray = [];
var randomStored = [];
var totalClicks = 0;

//Objects
new Image('bag');
new Image('banana');
new Image('bathroom');
new Image('boots');
new Image('breakfast');
new Image('bubblegum');
new Image('chair');
new Image('cthulhu');
new Image('dog-duck');
new Image('dragon');
new Image('pen');
new Image('pet-sweep');
new Image('scissors');
new Image('shark');
new Image('sweep');
new Image('tauntaun');
new Image('unicorn');
new Image('usb');
new Image('water-can');
new Image('wine-glass');

// constructor function
function Image(name){
    this.filepath = `img/${name}.jpg`;
    this.name = name
		this.views = 0;
		this.clicks = 0;
    allImages.push(this)
}

function chooseRandomNumbers(){
	randomArray = [];
	for (var i = 0; i < imageTag.length; i++){
		var random = Math.floor(Math.random() * allImages.length);
			while(randomArray.includes(random)){
				random = Math.floor(Math.random() * allImages.length);
				console.log('duplicate caught',)
			}
			randomArray.push(random);
	} console.log('Array of randoms', randomArray);
	compare();
}

function compare(){
	for (var i = 0; i < imageTag.length; i++){
		if(randomStored.includes(randomArray[i])){
			chooseRandomNumbers();
		}
	}
}

// Random Image Generator
function loadRandomImages(){
    for(i = 0; i < 3; i++){
        imageTag[i].src = allImages[randomArray[i]].filepath;
        imageTag[i].alt = allImages[randomArray[i]].name;
        imageTag[i].title = allImages[randomArray[i]].name;
        allImages[randomArray[i]].views++;
    }
}

//event listener
imageHolder.addEventListener('click', clickHandler);

function clickHandler(event){
	console.log(event.target.alt);
	for (var i = 0; i < allImages.length; i++){
	if (event.target.alt === allImages[i].name){
		console.log('was clicked')
		allImages[i].clicks++
}
}
	totalClicks++;
	if(totalClicks === 25){
		imageHolder.removeEventListener('click', clickHandler);
		//show results
		return;
}
randomStored = randomArray;
pageLoader();
}


function pageLoader(){
	chooseRandomNumbers();
	loadRandomImages();
}

var myChart = new Chart(ctx, {
	type: 'bar',
	data: {
			labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
			datasets: [{
					label: '# of Votes',
					data: [12, 19, 3, 5, 2, 3],
					backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)'
					],
					borderColor: [
							'rgba(255,99,132,1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)'
					],
					borderWidth: 1
			}]
	},
	options: {
			scales: {
					yAxes: [{
							ticks: {
									beginAtZero:true
							}
					}]
			}
	}
});

pageLoader();