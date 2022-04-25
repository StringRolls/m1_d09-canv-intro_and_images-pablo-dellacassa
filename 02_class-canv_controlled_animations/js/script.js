//controlledApp.init('myCanvas')

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const basketBall = new Image();

basketBall.src = "./img/ball.png";

let frameId = 0;

const firstObj = {
  img: basketBall,
  x: 0,
  y: 100,
  speedX: 3,
  speedY: 0,
  width: 50,
  height: 50,
};

const objects = [firstObj];

function draw() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.width);
  objects.forEach((obj) => {
    const x = (obj.x += obj.speedX);
    const y = (obj.y += obj.speedY);
    if (x > ctx.canvas.width - obj.width || x < 0) obj.speedX = -obj.speedX;
    if (y > ctx.canvas.height - obj.height || y < 0) obj.speedY = -obj.speedY;
    ctx.drawImage(obj.img, x, y, obj.width, obj.height);
  });
  frameId = window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);

window.addEventListener("keydown", (event) => {
  const key = event.key;
  console.log(key)
  switch (key) {
    case "ArrowLeft":
      firstObj.speedX -= 0.9;
    case "ArrowRight":
      firstObj.speedX += 1.1;
    case "ArrowUp":
      firstObj.speedY += 0.9;
    case "ArrowDown":
      firstObj.speedY -= 1.1;
  }
});