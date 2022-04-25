console.log("fireball loaded");

const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

const fireball = new Image();
fireball.src = "images/fireBall.png";

/*
fireball.addEventListener(
    "load",
    ()=>ctx.drawImage(
    fireball,
    250, 0,
    100,100,
    0,0,
    100,100
)
)
*/

let frameNumber;

const ondaEnergetica = {
  animating: false,
  img: fireball,
  x: 0,
  y: 0,
  draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.x += canvas.width / 900;
    this.y += canvas.height / 1200;

    if(this.x > canvas.width || this.y > canvas.height) this.x = this.y = 0;
    ctx.drawImage(this.img, 250, 0, 100, 100, this.x, this.y, 100, 100);
    if (this.animating) {
      frameNumber = requestAnimationFrame(this.draw.bind(this));
    }
  },
};

canvas.addEventListener(
    "click",
    ()=>{
        console.log("canvas clicked")
        ondaEnergetica.animating = !ondaEnergetica.animating
        ondaEnergetica.draw()
    }
    )