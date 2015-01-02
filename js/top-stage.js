// create new instance of a pixi stage
var topStage = new PIXI.Stage(0x66FF99);
var container = new PIXI.DisplayObjectContainer();
// create renderer instance 
var rendererTop = PIXI.autoDetectRenderer(330, 225);

// add renderer view element to the DOM
document.getElementById('top-stage').appendChild(rendererTop.view);

requestAnimFrame( animateStage );    


/*                               \*
   CREATING AND ADDING A SPRITE
\*                              */

// create texture from image path
var btexture = PIXI.Texture.fromImage('images/bunny.png');
var bunnies = new Array();
for(var i=0; i<=1; i++){ 
    // create a new Sprite using the texture
    bunnies[i] = new PIXI.Sprite(btexture);

    // Setting the anchor points to the middle values 0 - 1
    //bunnies[i].anchor.x = 0.5;
    //bunnies[i].anchor.y = 0.5;

    // Set the graphic's position
    bunnies[i].position.x = rendererTop.width / 2;
    bunnies[i].position.y = rendererTop.height / 2;


    container.addChild(bunnies[i]);
}

topStage.addChild(container);

function animateStage() {
    requestAnimFrame( animateStage );

     for(var i=0; i<bunnies.length; i++) {
        bunnies[i].rotation += 0.05;
    }

    // render the stage
    rendererTop.render(topStage);
}