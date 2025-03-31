const canvas = document.getElementById('canvas');

function draw() {}

draw();

function play() {
  // Select the video element
  const video = document.getElementById('webcam');

  // Access the webcam
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      // Set the video source to the webcam stream
      video.srcObject = stream;
    })
    .catch((error) => {
      console.error('Error accessing webcam:', error);
    });
}
play();
