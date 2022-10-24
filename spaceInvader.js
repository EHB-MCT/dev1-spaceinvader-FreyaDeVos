"use strict";


drawspaceInvader();

function drawspaceInvader() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    //background
    context.fillStyle = "beige";
    context.beginPath();
    context.rect(50, 50, 350, 350);
    context.fill();

    //figuuuVoorgrond
    context.beginPath();
    context.fillStyle = "orange";
    context.rect(100, 100, 250, 150);
    context.rect(150, 250, 150, 100);
    context.fill();

    //ogen en mond 
    context.beginPath();
    context.fillStyle = "beige";
    context.rect(150, 150, 50, 50);
    context.rect(250, 150, 50, 50);
    context.rect(200, 200, 50, 100);
    context.fill();

}