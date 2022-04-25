const canvas = document.getElementById("canvas")

//change size to the complete html size.
canvas.width = 500
canvas.height = 500
const ctx = canvas.getContext("2d")

ctx.fillStyle = "black"
ctx.fillRect(100, 100, 200, 200)
ctx.clearRect(100, 100, 100, 100)
ctx.strokeRect(100, 100,90, 90)
ctx.fillStyle = "red"
ctx.fillRect(120, 120, 50, 50)

ctx.fillStyle ="blue"
ctx.fillRect(100, 50, 200, 40)



console.log(canvas)
console.log(ctx)

// Line

ctx.beginPath()
ctx.moveTo(300, 300)
ctx.lineTo(100, 100)
ctx.moveTo(100, 200)
ctx.lineTo(300, 300)
//ctx.moveTo(300, 100)
//ctx.lineTo(100, 300)
ctx.strokeStyle = "yellow"
ctx.stroke()


ctx.beginPath()
ctx.arc(100, 100, 30, 0, Math.PI*2, false)
ctx.arc(200, 200, 30, 0, Math.PI*2, false)
ctx.strokeStyle = "white"
ctx.stroke()
ctx.beginPath()
ctx.arc(100, 100, 30, 0, Math.PI*2, false)
ctx.arc(200, 200, 30, 0, Math.PI*2, false)
ctx.strokeStyle = "white"
ctx.stroke()


function draw(x ,y, z) {

    if(x < 300 && y < 300) {
    ctx.fillStyle = "green"
    ctx.fillRect(x, y, 50, 50)
    x += 3
    setTimeout(`draw(${x}, ${y})`,60)
    }
    if(x > 300) {
    ctx.fillStyle = "green"
    ctx.fillRect(x, y, 50, 50)
    y += 3
    setTimeout(`draw(${x}, ${y})`,60)
    }
    if(y > 300) {
    ctx.fillStyle = "green"
    ctx.fillRect(x, y, 50, 50)
    x-= 3
    setTimeout(`draw(${x}, ${y})`,60)
    }

}
draw(100,1)

/*function draw2(x ,y) {
    ctx.fillStyle = "green"
    ctx.fillRect(x, y, 50, 50)
    x -= 3
    setTimeout(`draw2(${x}, ${y})`,300)
}*/








