var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0,line;
var turn = 0 , gameState = "start",count = 0;
var particle;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
    mousePressed();
    
}
 
//blockf = createSprite(20,20,200,200);

function mousePressed(){
  if(gameState!=="end")
  {
    count++;
    particle = new Particle(mouseX,10,10,10);
  }
}


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
//  line = new Line(400,450,800,10);
  text("Score :" + score,50,50);
  text("100",20,600);
  text("100",100,600);
  text("50",180,600);
  text("50",260,600);
  text("50",350,600);
  text("50",430,600);
  text("50",500,600);
  text("100",580,600);
  text("100",660,600);
  text("100",740,600);

  if (particle!= null)
  {
    particle.display();
    if(particle.body.position.y>450)
    {if(particle.body.position.x<100)
    {
      score = score + 100;
      particle = null;
      if(count>=5)gameState = "end";
    }
    }
  }
  if (particle!= null)
  {
    particle.display();
    if(particle.body.position.y>450)
    {if(particle.body.position.x<500&&particle.body.position.x>100)
    {
      score = score + 50;
      particle = null;
      if(count>=5)gameState = "end";
    }
    }
  }
  if (particle!= null)
  {
    particle.display();
    if(particle.body.position.y>450)
    {if(particle.body.position.x<800&&particle.body.position.x>500)
    {
      score = score + 100;
      particle = null;
      if(count>=5)gameState = "end";
    }
    }
  }
   for (var i = 0; i < plinkos.length; i++) {
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  //  if(frameCount%60===0){
  //    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //    score++;
  //  }
 
  // for (var j = 0; j < particles.length; j++) {
   
  //    particles[j].display();
  //  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   //line.display();
   }
  }