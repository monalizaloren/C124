//Crie as variáveis 'noseX', 'noseY', 'difference', 'rightWristX', 'leftWristX'
//Todas elas começaram em 0

????

  function setup() {
    //Defina o tamanho do vídeo para 550 de largura e 500 de altura
  video = createCapture(???);
  video.size(???, ???);

  //Utilize o código 'createCanvas' para criar um canva com javascript
  canvas = ???(550, 550);
  //Utilize o código 'position' para definir a posição do canva
  canvas.???(560,150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +" noseY = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

  }
}

function draw() {
    //Escolha o código da cor de fundo 
background('#???');
//Utilize o código que muda o contúdo do HTML
  document.getElementById("square_side").??? = "Largura e altura serão = " + difference +"px";
  //Escolha a cor do seu quadrado
  fill('#???');
  //Escolha a cor da borda do quadrado
  stroke('#F90093');
  //Utilize o código 'square', pois ele cria um quadrado
  ???(noseX, noseY, difference);
}
