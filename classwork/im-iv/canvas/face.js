let video = document.getElementById('video');
let model;

// declare the canvas variable and setting up the context

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

const accessCamera = async () => {
  console.log(await navigator.mediaDevices.enumerateDevices());

  navigator.mediaDevices
    .getUserMedia({
      video: { width: 500, height: 400 },
      //audio: false,
    })
    .then((stream) => {
      video.srcObject = stream;
    });
};

const detectFaces = async () => {
  const prediction = await model.estimateFaces(video, false);

  // Using canvas to draw the video first

  ctx.drawImage(video, 0, 0, 500, 400);

  prediction.forEach((predictions) => {
    // Drawing rectangle that'll detect the face
    ctx.beginPath();
    ctx.lineWidth = '4';
    ctx.strokeStyle = 'yellow';
    ctx.rect(
      predictions.topLeft[0],
      predictions.topLeft[1],
      predictions.bottomRight[0] - predictions.topLeft[0],
      predictions.bottomRight[1] - predictions.topLeft[1]
    );
    // The last two arguments denotes the width and height
    // but since the blazeface models only returns the coordinates
    // so we have to subtract them in order to get the width and height
    ctx.stroke();
  });
};

accessCamera();
video.addEventListener('loadeddata', async () => {
  model = await blazeface.load();
  // Calling the detectFaces every 40 millisecond
  setInterval(detectFaces, 40);
});
