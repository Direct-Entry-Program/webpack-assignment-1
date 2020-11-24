/*
 *  Copyright (c) 2020 Ranjith Suranga. All rights reserved.
 *  Licensed under the MIT License. See License file in the project root for license information.
 */

/**
 * @author : Ranjith Suranga <suranga@ijse.lk>
 * @since : 11/24/20
 **/

/*===============================================================================================================
 * Global Variables
 *===============================================================================================================*/

var circle = document.createElement('div');         // The small circle that moves with the mouse
var mouseX = -1;
var mouseY = -1;
var elements = [];                                          // Holds all the particles
var tmrId = -1;
var title = document.querySelector("h1");
var texts = [];                                             // Stores all the typewriting animation texts
var k = 0;                                                  // An increment
var j = 0;                                                  // An increment
var NUM_OF_PARTICLES = 100;

/*===============================================================================================================
 * Init
 *===============================================================================================================*/

init();

function init() {

    /* Storing typewriting animation texts */
    texts.push('Lankawea <span class="animate__animated animate__rubberBand" style="display: inline-block; color: blue;">#1</span>');
    texts.push('<span style="color:red;">SE</span> Pissangea <span class="animate__animated animate__backOutDown" style="display: inline-block;color: red;">,</span>');
    texts.push('<span class="animate__animated animate__heartBeat" style="display: inline-block">A</span>mbalama');
    texts.push('Direct Entry Program!');
    texts.push('We are born to code!');

    circle.className = 'circle';
    document.body.append(circle);

    /* Adding particles to the canvas */
    for (var i = 0; i < NUM_OF_PARTICLES; i++) {
        var elm = document.createElement('div');

        /* We need to store these particles in an array for later usage */
        elements.push(elm);
        elm.className = 'particle';


        elm.dx = Math.ceil(4 * Math.sin(Math.random() * 361 * Math.PI / 180));
        elm.dy = Math.ceil(4 * Math.sin(Math.random() * 361 * Math.PI / 180));
        if (elm.dx === 0) {
            elm.dx = 1;
        }
        if (elm.dy === 0) {
            elm.dy = 1;
        }
        elm.style.backgroundColor = randomColor();
        elm.style.left = (innerWidth - 30) * Math.random() + "px";
        elm.style.top = (innerHeight - 30) * Math.random() + "px";
        elm.style.transform = 'rotate(' + (Math.random() * 361) + 'deg) scale(' + Math.random() + ')';
        elm.style.borderRadius = (Math.random() * 100) + '%';
        document.body.append(elm);
    }
}

/*===============================================================================================================
 * Event Handlers and Timers
 *===============================================================================================================*/

addEventListener('mousemove', handleMouseMove);
addEventListener('touchmove', handleMouseMove);
setInterval(animateParticles, 50);
setInterval(typeWritingAnimation, 100);
document.addEventListener('mouseleave', function () {
    clearTimeout(tmrId);
    reset();
});

/*===============================================================================================================
 * Functions
 *===============================================================================================================*/

function animateParticles(){
        for (var i = 0; i < elements.length; i++) {
            var elm = elements[i];

            if (mouseX !== -1 && mouseY !== -1) {
                var x = ((elm.offsetLeft + elm.clientWidth / 2) - mouseX);
                var y = ((elm.offsetTop + elm.clientHeight / 2) - mouseY);
                var z = Math.sqrt(x * x + y * y);
                if (z <= 100) {
                    if (x < 0) {
                        elm.style.left = (elm.offsetLeft - (100 - Math.abs(x))) + "px";
                    } else {
                        elm.style.left = (elm.offsetLeft + (100 - x)) + "px";
                    }
                    if (y < 0) {
                        elm.style.top = (elm.offsetTop - (100 - Math.abs(y))) + "px";
                    } else {
                        elm.style.top = (elm.offsetTop + (100 - y)) + "px";
                    }
                    if ((elm.offsetLeft + 35) > innerWidth || elm.offsetLeft < 0) {
                        elm.style.left = (innerWidth - 30) * Math.random() + "px";
                    }
                    if ((elm.offsetTop + 35) > innerHeight || elm.offsetTop < 0) {
                        elm.style.top = (innerHeight - 30) * Math.random() + "px";
                    }
                    elm.dx = -elm.dx;
                    elm.dy = -elm.dy;
                }
            }

            elm.style.left = elm.offsetLeft + elm.dx + "px";
            elm.style.top = elm.offsetTop + elm.dy + "px";

            if ((elm.offsetLeft + 35) > innerWidth || elm.offsetLeft < 0) {
                elm.dx = -elm.dx;
            }
            if ((elm.offsetTop + 35) > innerHeight || elm.offsetTop < 0) {
                elm.dy = -elm.dy;
            }

        }
}

function randomColor() {
    var r = Math.random() * 256;
    var g = Math.random() * 256;
    var b = Math.random() * 256;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function handleMouseMove(eventData) {

    clearTimeout(tmrId);
    tmrId = setTimeout(reset, 5000);
    circle.style.display = 'block';

    mouseX = eventData.pageX;
    mouseY = eventData.pageY;

    if (eventData.type === 'touchmove') {
        mouseX = eventData.changedTouches[0].pageX;
        mouseY = eventData.changedTouches[0].pageY;
    }

    circle.style.left = mouseX - circle.clientWidth / 2 + "px";
    circle.style.top = mouseY - circle.clientHeight / 2 + "px";
}

function reset() {
    circle.style.display = 'none';
    mouseY = -1;
    mouseX = -1;
}

