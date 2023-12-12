var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.arc(200, 100, 40, 0, 2 * Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(180, 90, 5, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(220, 90, 5, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 100, 20, 0, 1 * Math.PI);
ctx.stroke();
ctx.fillStyle = "#FF0000";

