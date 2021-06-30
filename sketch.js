
var bullet , wall , speed , weight , thickness 

function setup() {
  createCanvas(1000,400);
  
  thickness = Math.round(random(22 , 83))
  speed = Math.round(random(223 , 321))
  weight = Math.round(random(30 , 52));

  wall = createSprite(950 , 200 , thickness, height/2)
  bullet = createSprite(20 , 200 , 100 , 20)
  bullet.shapeColor = 'white'
  bullet.velocityX = speed

}

function draw() {
  background('black'); 

  if(collision(wall , bullet)){

    bullet.velocityX = 0
    
    damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if(damage > 10){

      wall.shapeColor = 'red'

    }

    if (damage < 10){

      wall.shapeColor = 'green'

    }


  }

  drawSprites();
}

function collision(wally , bullety){


  if(wally.x - bullety.x < (wally.width + bullety.width)/2){

    return true

  }


  else{

    return false

  }


}