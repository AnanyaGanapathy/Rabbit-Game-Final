var garden,rabbit;
var gardenImg,rabbitImg;
var apple, leaf; 

function preload(){

  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png")

}

function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX

  drawSprites();

  var select_sprite = Math.round(random(1, 2))

  if (frameCount % 80 == 0) {
  if (select_sprite == 1) {
    create_apples()
  }
    else {
    create_leaves()
  

    }  
  }
}

  function create_leaves() {
  leaf = createSprite(600, 300, 40, 10)
  leaf.addImage(leafImg)
  leaf.x = Math.round(random(0, 400))
  leaf.y = Math.round(random(50))
  leaf.scale = 0.1
  leaf.velocityY = 3
  leaf.lifetime = 100
  leaf.depth = rabbit.depth - 1
  }
  

  function create_apples() {
  apple = createSprite(600, 300, 40, 10)
  apple.addImage(appleImg)
  apple.x = Math.round(random(0, 400))
  apple.y = Math.round(random(50))
  apple.scale = 0.1
  apple.velocityY = 3
  apple.lifetime = 100
  apple.depth = rabbit.depth - 1
}

