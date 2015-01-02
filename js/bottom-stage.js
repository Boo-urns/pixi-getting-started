// create new instance of a pixi stage
var stage = new PIXI.Stage(0x66FF99);
var myContainer = new PIXI.DisplayObjectContainer();
var meter = new FPSMeter();

// create renderer instance 
var renderer = PIXI.autoDetectRenderer(400, 300);

// add renderer view element to the DOM
document.getElementById('bottom-stage').appendChild(renderer.view);

requestAnimFrame( animate );


/*                               \*
   CREATING AND ADDING A SPRITE
\*                              */

// create texture from image path
var texture = PIXI.Texture.fromImage('images/ball.png');

var orbs = new Array();
for(var i=0; i<=10; i++){ 
    // create a new Sprite using the texture
    orbs[i] = new PIXI.Sprite(texture);

    // Scaling the image for the transform.
    // -- Needs to be larger than it will be displayed 
    //    so it renders clearer on transform
    orbs[i].scale = new PIXI.Point(.25,.25);
    
    // Setting the anchor points to the middle values 0 - 1
    // orbs[i].anchor.x = 0;
    // orbs[i].anchor.y = 0;

    // Set the graphic's position
    orbs[i].position.x = 0 - (100 * Math.random());
    orbs[i].position.y = 25 * i;


    myContainer.addChild(orbs[i]);
}

stage.addChild(myContainer);



function animate() {
    requestAnimFrame( animate );

    for(var i=0; i<orbs.length; i++) {
        //orbs[i].rotation += 0.05;

        var curOrbX = orbs[i].position.x;
        if(curOrbX > renderer.width) {
            orbs[i].position.x = -5;
        } else {
            orbs[i].position.x += 0.5;
        }

    }

    meter.tick();

    // render the stage
    renderer.render(stage);
}
