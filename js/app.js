'use strict';

// globsl variables
var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var allImages = [];
var imageHolder = document.getElementById('imageHolder');
var ctx = document.getElementById("myChart").getContext("2d");
var imageTag = [document.getElementById('imageOne'), document.getElementById('imageTwo'), document.getElementById('imageThree')];
var randomArray = [];
var randomStored = [];
var totalClicks = 0;
var ticks = [];

// constructor function
function Image(name){
    this.filepath = `img/${name}.jpg`;
    this.name = name
		this.views = 0;
		this.clicks = 0;
    allImages.push(this)
}

for (var i = 0; i < names.length; i++){
	new Image(names[i]);
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
    for(var i = 0; i < 3; i++){
        imageTag[i].src = allImages[randomArray[i]].filepath;
        imageTag[i].alt = allImages[randomArray[i]].name;
        imageTag[i].title = allImages[randomArray[i]].name;
        allImages[randomArray[i]].views++;
    }
}

//Update chart function
function updateChartArrays() {
  for (var i = 0; i < allImages.length; i++) {
    ticks[i] = allImages[i].clicks;
  }
}

//event listener
imageHolder.addEventListener('click', clickHandler);

// click handler function
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
		callChart();
		return;
}
randomStored = randomArray;
pageLoader();
}


function pageLoader(){
	chooseRandomNumbers();
	loadRandomImages();
}


//chart
function callChart(){
	updateChartArrays();
var myChart = new Chart(ctx, {
	type: 'bar',
	data: {
			labels: names,
			datasets: [{
					label: 'Products',
					data: ticks, //placeholders
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
} 	
pageLoader();