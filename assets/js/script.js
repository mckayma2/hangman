var planets = ["earth", "mars", "jupiter", "neptune", "saturn", "uranus", "venus", "mercury"];
console.log (planets);
var randomNumber = Math.floor(Math.random() * planets.length);
console.log (randomNumber);
var randomWord = planets[randomNumber];
console.log (randomWord);
var answers = [];
var word = randomNumber;
var earth;
var i = 0;
var plays = 10;
var score =0;
var an2;
var length;
document.addEventListener("keypress", myFunction);



function myFunction(event){
var keypressed = String.fromCharCode(event.keyCode);
var k = keypressed.toLowerCase();
var kcode =event.keyCode;
console.log(keypressed[0]);
console.log(kcode);
	// repeated code should be in a loop and willdo when I have more time.
if (word === 0 && plays >0 ){
			document.getElementById("image").style.display = "none";
			document.getElementById("b6").style.display = "none";
			document.getElementById("b7").style.display = "none";
			document.getElementById("b8").style.display = "none";
			if(planets[i][0] === k || planets[i][1] === k || planets[i][2] === k || planets[i][3] === k || planets[i][4] === k){
				if ( k === planets[0][0]){
				earth = document.getElementById("b1");
				earth.innerHTML = k.toUpperCase();
				//an2=document.getElementById("b1").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b1").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML = "Your Score: " + score;
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)	
				}
				else if ( k === "a"){
				earth = document.getElementById("b2");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b2").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b2").innerText).length;
				console.log(length);
				score=score+length;
				console.log(k);
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)		
				}
				else if ( k === "r"){
				earth = document.getElementById("b3");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b3").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b3").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
					
				}
				else if ( k === "t"){
				earth = document.getElementById("b4");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b4").textContent;
				console.log("this is " + an2);
				var length = (document.getElementById("b4").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
					
				}
				else if ( k === "h"){
				earth = document.getElementById("b5");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b5").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b5").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
								
				}
				
				
			}
			else{
					plays -=1;
					console.log(plays);
					document.getElementById("plays").innerHTML =  "Tries Remaining: " + plays;
						if(plays ===0){
						document.getElementById("image").style.display = "block";
						alert("GAME OVER");
						location.reload();
						}
		    }	
 
			an2=document.getElementById("b1").textContent;
			an2+=document.getElementById("b2").textContent;
			an2+=document.getElementById("b3").textContent;
			an2+=document.getElementById("b4").textContent;
			an2+=document.getElementById("b5").textContent;
			if (an2.toLowerCase() === planets[0]){
			console.log("contentlength  "+ document.getElementById("b4").textContent.length);
			location.reload();
			alert("you win");}
		}

		
		if (word === 1 && plays >0 ){
			document.getElementById("image").style.display = "none";
			document.getElementById("b5").style.display = "none";
			document.getElementById("b6").style.display = "none";
			document.getElementById("b7").style.display = "none";
			document.getElementById("b8").style.display = "none";
			if(planets[1][0] === k || planets[1][1] === k || planets[1][2] === k || planets[1][3] === k){
				if ( k === planets[1][0]){
				earth = document.getElementById("b1");
				earth.innerHTML = k.toUpperCase();
				//an2=document.getElementById("b1").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b1").innerText).length;
				console.log(length);
				score=score+length;
				console.log(k);
				document.getElementById("score").innerHTML = "Your Score: " + score;
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)	
				}
				else if ( k === "a"){
				earth = document.getElementById("b2");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b2").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b2").innerText).length;
				console.log(length);
				score=score+length;
				console.log(k);
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)		
				}
				else if ( k === "r"){
				earth = document.getElementById("b3");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b3").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b3").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
					
				}
				else if ( k === "s"){
				earth = document.getElementById("b4");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b4").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b4").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
					
				}
					
			}
			else{
					plays -=1;
					console.log(plays);
					document.getElementById("plays").innerHTML =  "Tries Remaining: " + plays;
						if(plays ===0){
						document.getElementById("image").style.display = "block";
						alert("GAME OVER");
						location.reload();
						}
		    }	
 
			an2=document.getElementById("b1").textContent;
			an2+=document.getElementById("b2").textContent;
			an2+=document.getElementById("b3").textContent;
			an2+=document.getElementById("b4").textContent;
			
			if (an2.toLowerCase() === planets[1]){
			console.log("contentlength  "+ document.getElementById("b4").textContent.length);
			
			alert("you win");
			location.reload();}
		}
	
			if (word === 2 && plays >0 ){
			document.getElementById("image").style.display = "none";
			document.getElementById("b8").style.display = "none";
			if(planets[2][0] === k || planets[2][1] === k || planets[2][2] === k || planets[2][3] === k || planets[2][4] === k || planets[2][5] === k || planets[2][6] === k){
				if ( k === planets[2][0]){
				earth = document.getElementById("b1");
				earth.innerHTML = k.toUpperCase();
				//an2=document.getElementById("b1").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b1").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML = "Your Score: " + score;
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)	
				}
				else if ( k === "u"){
				earth = document.getElementById("b2");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b2").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b2").innerText).length;
				console.log(length);
				score=score+length;
				console.log(k);
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)		
				}
				else if ( k === "p"){
				earth = document.getElementById("b3");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b3").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b3").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
					
				}
				else if ( k === "i"){
				earth = document.getElementById("b4");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b4").textContent;
				console.log("this is " + an2);
				var length = (document.getElementById("b4").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
					
				}
				else if ( k === "t"){
				earth = document.getElementById("b5");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b5").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b5").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
								
				}
				else if ( k === "e"){
				earth = document.getElementById("b6");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b6").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b6").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
								
				}
				else if ( k === "r"){
				earth = document.getElementById("b7");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b7").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b7").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
								
				}
				
				
			}
			else{
					plays -=1;
					console.log(plays);
					document.getElementById("plays").innerHTML =  "Tries Remaining: " + plays;
						if(plays ===0){
						document.getElementById("image").style.display = "block";
						alert("GAME OVER");
						location.reload();
						}
		    }	
 
			an2=document.getElementById("b1").textContent;
			an2+=document.getElementById("b2").textContent;
			an2+=document.getElementById("b3").textContent;
			an2+=document.getElementById("b4").textContent;
			an2+=document.getElementById("b5").textContent;
			an2+=document.getElementById("b6").textContent;
			an2+=document.getElementById("b7").textContent;
			if (an2.toLowerCase() === planets[2]){
			console.log("contentlength  "+ document.getElementById("b4").textContent.length);
			location.reload();
			alert("you win");}
		}
		if (word === 3 && plays >0 ){
			document.getElementById("image").style.display = "none";
			document.getElementById("b8").style.display = "none";
			if(planets[3][0] === k || planets[3][1] === k || planets[3][2] === k || planets[3][3] === k || planets[3][4] === k || planets[3][5] === k || planets[3][6] === k){
				if ( k === planets[3][0]){
				earth = document.getElementById("b1");
				earth.innerHTML = k.toUpperCase();
				earth = document.getElementById("b6");
				earth.innerHTML =k.toUpperCase();

				//an2=document.getElementById("b1").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b1").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML = "Your Score: " + score;
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)	
				}
				else if ( k === "e"){
				earth = document.getElementById("b2");
				earth.innerHTML =k.toUpperCase();
				earth = document.getElementById("b7");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b2").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b2").innerText).length;
				console.log(length);
				score=score+length;
				console.log(k);
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)		
				}
				else if ( k === "p"){
				earth = document.getElementById("b3");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b3").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b3").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
					
				}
				else if ( k === "t"){
				earth = document.getElementById("b4");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b4").textContent;
				console.log("this is " + an2);
				var length = (document.getElementById("b4").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
					
				}
				else if ( k === "u"){
				earth = document.getElementById("b5");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b5").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b5").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
								
				}
				
				
				
				
			}
			else{
					plays -=1;
					console.log(plays);
					document.getElementById("plays").innerHTML =  "Tries Remaining: " + plays;
						if(plays ===0){
						document.getElementById("image").style.display = "block";
						alert("GAME OVER");
						location.reload();
						}
		    }	
 
			an2=document.getElementById("b1").textContent;
			an2+=document.getElementById("b2").textContent;
			an2+=document.getElementById("b3").textContent;
			an2+=document.getElementById("b4").textContent;
			an2+=document.getElementById("b5").textContent;
			an2+=document.getElementById("b6").textContent;
			an2+=document.getElementById("b7").textContent;
			if (an2.toLowerCase() === planets[3]){
			console.log("contentlength  "+ document.getElementById("b4").textContent.length);
			location.reload();
			alert("you win");}
		}

		if (word === 4 && plays >0 ){
			document.getElementById("image").style.display = "none";
			document.getElementById("b7").style.display = "none";
			document.getElementById("b8").style.display = "none";
			if(planets[4][0] === k || planets[4][1] === k || planets[4][2] === k || planets[4][3] === k || planets[4][4] === k || planets[4][5] === k){
				if ( k === planets[4][0]){
				earth = document.getElementById("b1");
				earth.innerHTML = k.toUpperCase();
				//an2=document.getElementById("b1").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b1").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML = "Your Score: " + score;
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)	
				}
				else if ( k === "a"){
				earth = document.getElementById("b2");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b2").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b2").innerText).length;
				console.log(length);
				score=score+length;
				console.log(k);
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)		
				}
				else if ( k === "t"){
				earth = document.getElementById("b3");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b3").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b3").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
					
				}
				else if ( k === "u"){
				earth = document.getElementById("b4");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b4").textContent;
				console.log("this is " + an2);
				var length = (document.getElementById("b4").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
					
				}
				else if ( k === "r"){
				earth = document.getElementById("b5");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b5").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b5").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
								
				}
				else if ( k === "n"){
				earth = document.getElementById("b6");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b6").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b6").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
								
				}
				
				
				
			}
			else{
					plays -=1;
					console.log(plays);
					document.getElementById("plays").innerHTML =  "Tries Remaining: " + plays;
						if(plays ===0){
						document.getElementById("image").style.display = "block";
						alert("GAME OVER");
						location.reload();
						}
		    }	
 
			an2=document.getElementById("b1").textContent;
			an2+=document.getElementById("b2").textContent;
			an2+=document.getElementById("b3").textContent;
			an2+=document.getElementById("b4").textContent;
			an2+=document.getElementById("b5").textContent;
			an2+=document.getElementById("b6").textContent;
			
			if (an2.toLowerCase() === planets[4]){
			console.log("contentlength  "+ document.getElementById("b4").textContent.length);
			location.reload();
			alert("you win");}
		}

		if (word === 5 && plays >0 ){
			document.getElementById("image").style.display = "none";
			document.getElementById("b7").style.display = "none";
			document.getElementById("b8").style.display = "none";
			if(planets[5][0] === k || planets[5][1] === k || planets[5][2] === k || planets[5][3] === k || planets[5][4] === k || planets[5][5] === k){
				if ( k === planets[5][0]){
				earth = document.getElementById("b1");
				earth.innerHTML = k.toUpperCase();
				earth = document.getElementById("b5");
				earth.innerHTML =k.toUpperCase();
				//an2=document.getElementById("b1").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b1").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML = "Your Score: " + score;
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)	
				}
				else if ( k === "r"){
				earth = document.getElementById("b2");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b2").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b2").innerText).length;
				console.log(length);
				score=score+length;
				console.log(k);
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)		
				}
				else if ( k === "a"){
				earth = document.getElementById("b3");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b3").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b3").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
					
				}
				else if ( k === "n"){
				earth = document.getElementById("b4");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b4").textContent;
				console.log("this is " + an2);
				var length = (document.getElementById("b4").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
					
				}
				
				else if ( k === "s"){
				earth = document.getElementById("b6");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b6").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b6").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
								
				}
				
				
				
			}
			else{
					plays -=1;
					console.log(plays);
					document.getElementById("plays").innerHTML =  "Tries Remaining: " + plays;
						if(plays ===0){
						document.getElementById("image").style.display = "block";
						alert("GAME OVER");
						location.reload();
						}
		    }	
 
			an2=document.getElementById("b1").textContent;
			an2+=document.getElementById("b2").textContent;
			an2+=document.getElementById("b3").textContent;
			an2+=document.getElementById("b4").textContent;
			an2+=document.getElementById("b5").textContent;
			an2+=document.getElementById("b6").textContent;
			
			if (an2.toLowerCase() === planets[5]){
			console.log("contentlength  "+ document.getElementById("b4").textContent.length);
			location.reload();
			alert("you win");}
		}


		if (word === 6 && plays >0 ){
			document.getElementById("image").style.display = "none";
			document.getElementById("b6").style.display = "none";
			document.getElementById("b7").style.display = "none";
			document.getElementById("b8").style.display = "none";
			if(planets[6][0] === k || planets[6][1] === k || planets[6][2] === k || planets[6][3] === k || planets[6][4] === k){
				if ( k === planets[6][0]){
				earth = document.getElementById("b1");
				earth.innerHTML = k.toUpperCase();
				//an2=document.getElementById("b1").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b1").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML = "Your Score: " + score;
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)	
				}
				else if ( k === "e"){
				earth = document.getElementById("b2");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b2").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b2").innerText).length;
				console.log(length);
				score=score+length;
				console.log(k);
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)		
				}
				else if ( k === "n"){
				earth = document.getElementById("b3");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b3").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b3").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
					
				}
				else if ( k === "u"){
				earth = document.getElementById("b4");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b4").textContent;
				console.log("this is " + an2);
				var length = (document.getElementById("b4").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
					
				}
				else if ( k === "s"){
				earth = document.getElementById("b5");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b5").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b5").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
								
				}
				
				
			}
			else{
					plays -=1;
					console.log(plays);
					document.getElementById("plays").innerHTML =  "Tries Remaining: " + plays;
						if(plays ===0){
						document.getElementById("image").style.display = "block";
						alert("GAME OVER");
						location.reload();
						}
		    }	
 
			an2=document.getElementById("b1").textContent;
			an2+=document.getElementById("b2").textContent;
			an2+=document.getElementById("b3").textContent;
			an2+=document.getElementById("b4").textContent;
			an2+=document.getElementById("b5").textContent;
			if (an2.toLowerCase() === planets[6]){
			console.log("contentlength  "+ document.getElementById("b4").textContent.length);
			location.reload();
			alert("you win");}
		}
			if (word === 7 && plays >0 ){
			document.getElementById("image").style.display = "none";
			document.getElementById("b8").style.display = "none";
			if(planets[7][0] === k || planets[7][1] === k || planets[7][2] === k || planets[7][3] === k || planets[7][4] === k || planets[7][5] === k || planets[7][6] === k){
				if ( k === planets[7][0]){
				earth = document.getElementById("b1");
				earth.innerHTML = k.toUpperCase();
				//an2=document.getElementById("b1").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b1").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML = "Your Score: " + score;
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)	
				}
				else if ( k === "e"){
				earth = document.getElementById("b2");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b2").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b2").innerText).length;
				console.log(length);
				score=score+length;
				console.log(k);
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)		
				}
				else if ( k === "r"){
				earth = document.getElementById("b3");
				earth.innerHTML =k.toUpperCase();
				earth = document.getElementById("b6");
				earth.innerHTML =k.toUpperCase();

				//an2+=document.getElementById("b3").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b3").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
					
				}
				else if ( k === "c"){
				earth = document.getElementById("b4");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b4").textContent;
				console.log("this is " + an2);
				var length = (document.getElementById("b4").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
					
				}
				else if ( k === "u"){
				earth = document.getElementById("b5");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b5").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b5").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
								
				}
				
				else if ( k === "y"){
				earth = document.getElementById("b7");
				earth.innerHTML =k.toUpperCase();
				//an2+=document.getElementById("b7").textContent;
				console.log("this is " + an2);
				length = (document.getElementById("b7").innerText).length;
				console.log(length);
				score=score+length;
				document.getElementById("score").innerHTML =  "Your Score: " + score;
				console.log(k);
				console.log(answers.slice(-1));
				console.log(score);	
				answers.push(k)
								
				}
				
				
			}
			else{
					plays -=1;
					console.log(plays);
					document.getElementById("plays").innerHTML =  "Tries Remaining: " + plays;
						if(plays ===0){
						document.getElementById("image").style.display = "block";
						alert("GAME OVER");
						location.reload();
						}
		    }	
 
			an2=document.getElementById("b1").textContent;
			an2+=document.getElementById("b2").textContent;
			an2+=document.getElementById("b3").textContent;
			an2+=document.getElementById("b4").textContent;
			an2+=document.getElementById("b5").textContent;
			an2+=document.getElementById("b6").textContent;
			an2+=document.getElementById("b7").textContent;
			if (an2.toLowerCase() === planets[7]){
			console.log("contentlength  "+ document.getElementById("b4").textContent.length);
			location.reload();
			alert("you win");}
		}

}
