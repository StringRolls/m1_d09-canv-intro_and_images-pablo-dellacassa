console.log("JS Loaded");

const canvas = document.getElementById("canvas");

const context = canvas.getContext("2d");

// let x = Math.floor(Math.random() * context.canvas.width);
// let y = Math.floor(Math.random() * context.canvas.height);

/*
canvas.addEventListener("mousemove", drawLineFromMousePosition)

function drawLineFromMousePosition(event){
context.clearRect(0, 0, context.canvas.width, context.canvas.height);
context.beginPath();
context.lineWidth = 6;
context.strokeStyle = "yellow";
context.moveTo(context.canvas.width / 2, context.canvas.height / 2);;
context.lineTo(event.clientX, event.clientY);
context.stroke();
context.closePath();
// Text needs to be inside the async function in order to be printed after the lines
context.font = "24px monospace";
context.fillText("Hello StringRolls", 0, 25);
}
*/

let frameId = window.requestAnimationFrame(draw);

function draw() {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  context.font = "24px monospace";
  context.fillText("Hello StringRolls", 0, 25);
  context.fillText(`You are on frame ${frameId}`, 0, 55);
  frameId = window.requestAnimationFrame(draw);
}

document.getElementById("stop-frames").addEventListener("click", (event) => {
    if (event.target.getAttribute("data-start-stop") === "stop") {
      event.target.setAttribute("data-start-stop", "start");
      event.target.textContent = "Start the show!";
      window.cancelAnimationFrame(frameId);
    } else {
      event.target.setAttribute("data-start-stop", "stop");
      event.target.textContent = "Stop the madness!";
      frameId = window.requestAnimationFrame(draw);
    }
  });
