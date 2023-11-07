var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	this.document.querySelector("video").loop = false;
	this.document.querySelector("video").autoplay = false;
	var video = document.getElementById("player1");

	this.document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		document.getElementById("player1").play();
		document.getElementById("player1").volume = document.getElementById("slider").value / 100;
		document.getElementById("volume").innerHTML = document.getElementById("slider").value + '%';
	});

	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause video");
		document.getElementById("player1").pause();
	});
	
	document.querySelector("#slower").addEventListener("click", function() {
		document.getElementById("player1").playbackRate = document.getElementById("player1").playbackRate * 0.9;
		console.log('New speed is ' + document.getElementById("player1").playbackRate);
	});
	
	document.querySelector("#faster").addEventListener("click", function() {
		document.getElementById("player1").playbackRate = document.getElementById("player1").playbackRate * 1.1;
		console.log('New speed is ' + document.getElementById("player1").playbackRate);
	});
	
	document.querySelector("#skip").addEventListener("click", function() {
		document.getElementById("player1").currentTime = document.getElementById("player1").currentTime + 10;
		console.log('Current location is' + document.getElementById("player1").currentTime);
	});
	
	document.querySelector("#mute").addEventListener("click", function() {
		if(document.getElementById("player1").muted == true) {
			document.getElementById("player1").muted = false;
			document.querySelector("#mute").innerHTML = "Mute";
		}
		else {
			document.getElementById("player1").muted = true;
			document.querySelector("#mute").innerHTML = "Unmute";
		}
	});

	this.document.querySelector("#slider").addEventListener("change", function () {
		video.volume = document.getElementById("slider").value / 100;
		document.getElementById("volume").innerHTML = document.getElementById("slider").value + '%';
	});

	this.document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
	});

	this.document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
	});
});

// this.document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// 	document.getElementById("player1").play();
// 	document.getElementById("player1").volume = document.getElementById("slider").target.value;
// });

// document.querySelector("#pause").addEventListener("click", function() {
// 	console.log("Pause video");
// 	document.getElementById("player1").pause();
// });

// document.querySelector("#slower").addEventListener("click", function() {
// 	document.getElementById("player1").speed = document.getElementById("player1").speed * 0.9;
// 	console.log('New speed is ' + document.getElementById("player1").speed);
// });

// document.querySelector("#faster").addEventListener("click", function() {
// 	document.getElementById("player1").speed = document.getElementById("player1").speed * 1.1;
// 	console.log('New spped is ' + document.getElementById("player1").speed);
// });

// document.querySelector("#skip").addEventListener("click", function() {
// 	document.getElementById("player1").currentTime = document.getElementById("player1").currentTime + 15;
// });

// document.querySelector("#mute").addEventListener("click", function() {

// });


