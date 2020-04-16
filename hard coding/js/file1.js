var count=0;
function show1(){
	if (count%2==0)
		show2();
	else
		notshow1();
}

function show2(){
	// alert("hi")
	document.getElementById("img2").style.visibility="visible";
	count= count+1;
	
}

function notshow1(){
	document.getElementById("img2").style.visibility="hidden";
	count=count+1;
}

window.onload = function(){
	// var a = document.getElementsByClassName("disp")
	// for(var i=0;i<a.lenght;i++){
	// 	a[i].addEventListener("click",show1().bind(a[i],i));
	// } 
	document.getElementById("disp").addEventListener("click", show1);
}




// let elements = document.querySelectorAll(".disp");

// // Convert the node list into an Array so we can
// // safely use Array methods with it
// let elementsArray = Array.prototype.slice.call(elements);

// // Loop over the array of elements
// elementsArray.forEach(function(elem){
//   // Assign an event handler
//   elem.addEventListener("click", show1());
// });