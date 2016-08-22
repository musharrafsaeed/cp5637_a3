// JavaScript Document

	var imagePaths = [
				"images/as2.jpg", "images/as3.jpg", "images/as10.jpg", "images/as11.jpg", "images/as12.jpg", "images/as13.jpg", "images/as14.jpg", "images/as15.jpg"
			];
			var showCanvas = null;
			var showCanvasCtx = null;
			var img = document.createElement("img");
			var currentImage = 0;
			var revealTimer;

			window.onload = function () {
				showCanvas = document.getElementById('showCanvas');
				showCanvasCtx = showCanvas.getContext('2d');
				
				img.setAttribute('width','600');
				img.setAttribute('height','400');
				switchImage();
				
				// start the animation
				setInterval(switchImage,3000);
			}
			
			function switchImage() {
				img.setAttribute('src',imagePaths[currentImage++]);
				if (currentImage >= imagePaths.length)
					currentImage = 0;
				
				showCanvasCtx.globalAlpha = 0.1;
				revealTimer = setInterval(revealImage,100);
			}
			
			function revealImage() {
				showCanvasCtx.save();
				showCanvasCtx.drawImage(img,0,0,600,400);
				showCanvasCtx.globalAlpha += 0.1;
				if (showCanvasCtx.globalAlpha >= 1.0)
					clearInterval(revealTimer);
				showCanvasCtx.restore();
			}
			
			
			