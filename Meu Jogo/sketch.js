var gameState = "play";
var gameState = "end";
var gameOver, gameOverImg, gameOverSound;

var WarriorLife = 250, WarriorLifeImg, WarriorLifeGroup;
var slimeLife = 100;

var WarriorDMG = 50;
var slimeDMG = 10;

//Cavaleira;

var Warrior = 250;
//CORRIDA
var WarriorRun1, WarriorRun2, WarriorRun3, WarriorRun4 , WarriorRun5, WarriorRun6, WarriorRun7, WarriorRun8;
//PARADA
var WarriorIdle1, WarriorIdle2, WarriorIdle3, WarriorIdle4, WarriorIdle5, WarriorIdle6;
//CORRIDA PRO OUTRO LADO
var WarriorRunReverse1, WarriorRunReverse2, WarriorRunReverse3, WarriorRunReverse4, WarriorRunReverse5, WarriorRunReverse6, WarriorRunReverse7, WarriorRunReverse8;
//PARADA PRO OUTRO LADO
var WarriorIdleReverse1, WarriorIdleReverse2, WarriorIdleReverse3, WarriorIdleReverse4, WarriorIdleReverse5, WarriorIdleReverse6;
//ATAQUE
var WarriorAttack1,  WarriorAttack2,  WarriorAttack3,  WarriorAttack4,  WarriorAttack5,  WarriorAttack6,  WarriorAttack7,  WarriorAttack8,  WarriorAttack9, WarriorAttack10, WarriorAttack11, WarriorAttack12;




//////////////////////////////////////////////////

//Fundo;
var bg_img, bg;

//////////////////////////////////////////////////

//Esqueleto;

var Skeleton, SkeletonATK, SkeletonF, SkeletonHit, SkeletonWalk, SkeletonIdle;

//////////////////////////////////////////////////

//Slime;

var slime = 100;
var slimeGroup;
var slimeMove1, slimeMove2, slimeMove3, slimeMove4;
var slimeDie1, slimeDie2, slimeDie3, slimeDie4;
var slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5;

//MOVIMENTAÇÃO
var direction = 1;
var velocityX = 0;

function preload() {
  bg_img = loadImage("dungeon do meu game.png"); 

  //CAVALEIRO
  //corrida
  WarriorRun1 = loadImage("assets/WarriorRun/Warrior_Run_1.png");
  WarriorRun2 = loadImage("assets/WarriorRun/Warrior_Run_2.png");
  WarriorRun3 = loadImage("assets/WarriorRun/Warrior_Run_3.png");
  WarriorRun4 = loadImage("assets/WarriorRun/Warrior_Run_4.png");
  WarriorRun5 = loadImage("assets/WarriorRun/Warrior_Run_5.png");
  WarriorRun6 = loadImage("assets/WarriorRun/Warrior_Run_6.png");
  WarriorRun7 = loadImage("assets/WarriorRun/Warrior_Run_7.png");
  WarriorRun8 = loadImage("assets/WarriorRun/Warrior_Run_8.png");



  //corrida reversa
  WarriorRunReverse1 = loadImage("assets/WarriorRunReverse/Warrior_RunReverse_1.png");
  WarriorRunReverse2 = loadImage("assets/WarriorRunReverse/Warrior_RunReverse_2.png");
  WarriorRunReverse3 = loadImage("assets/WarriorRunReverse/Warrior_RunReverse_3.png");
  WarriorRunReverse4 = loadImage("assets/WarriorRunReverse/Warrior_RunReverse_4.png");
  WarriorRunReverse5 = loadImage("assets/WarriorRunReverse/Warrior_RunReverse_5.png");
  WarriorRunReverse6 = loadImage("assets/WarriorRunReverse/Warrior_RunReverse_6.png");
  WarriorRunReverse7 = loadImage("assets/WarriorRunReverse/Warrior_RunReverse_7.png");
  WarriorRunReverse8 = loadImage("assets/WarriorRunReverse/Warrior_RunReverse_8.png");



  //parado
  WarriorIdle1 = loadImage("assets/WarriorIdle/Warrior_Idle_1.png");
  WarriorIdle2 = loadImage("assets/WarriorIdle/Warrior_Idle_2.png");
  WarriorIdle3 = loadImage("assets/WarriorIdle/Warrior_Idle_3.png");
  WarriorIdle4 = loadImage("assets/WarriorIdle/Warrior_Idle_4.png");
  WarriorIdle5 = loadImage("assets/WarriorIdle/Warrior_Idle_5.png");
  WarriorIdle6 = loadImage("assets/WarriorIdle/Warrior_Idle_6.png");



  //parado reverso
  WarriorIdleReverse1 = loadImage("assets/WarriorIdleReverse/Warrior_IdleReverse_1.png");
  WarriorIdleReverse2 = loadImage("assets/WarriorIdleReverse/Warrior_IdleReverse_2.png");
  WarriorIdleReverse3 = loadImage("assets/WarriorIdleReverse/Warrior_IdleReverse_3.png");
  WarriorIdleReverse4 = loadImage("assets/WarriorIdleReverse/Warrior_IdleReverse_4.png");
  WarriorIdleReverse5 = loadImage("assets/WarriorIdleReverse/Warrior_IdleReverse_5.png");
  WarriorIdleReverse6 = loadImage("assets/WarriorIdleReverse/Warrior_IdleReverse_6.png");



  //ataque
  WarriorAttack1 = loadImage("assets/WarriorAttack/Warrior_Attack_1.png");
  WarriorAttack2 = loadImage("assets/WarriorAttack/Warrior_Attack_2.png");
  WarriorAttack3 = loadImage("assets/WarriorAttack/Warrior_Attack_3.png");
  WarriorAttack4 = loadImage("assets/WarriorAttack/Warrior_Attack_4.png");
  WarriorAttack5 = loadImage("assets/WarriorAttack/Warrior_Attack_5.png");
  WarriorAttack6 = loadImage("assets/WarriorAttack/Warrior_Attack_6.png");
  WarriorAttack7 = loadImage("assets/WarriorAttack/Warrior_Attack_7.png");
  WarriorAttack8 = loadImage("assets/WarriorAttack/Warrior_Attack_8.png");
  WarriorAttack9 = loadImage("assets/WarriorAttack/Warrior_Attack_9.png");
  //2°Attack
  WarriorAttack10 = loadImage("assets/WarriorAttack/Warrior_Attack_10.png");
  WarriorAttack11 = loadImage("assets/WarriorAttack/Warrior_Attack_11.png");
  WarriorAttack12 = loadImage("assets/WarriorAttack/Warrior_Attack_12.png");




  //SLIME
  slimeMove1 = loadImage("assets/SlimeMove/slime-move-0.png");
  slimeMove2 = loadImage("assets/SlimeMove/slime-move-1.png");
  slimeMove3 = loadImage("assets/SlimeMove/slime-move-2.png");
  slimeMove4 = loadImage("assets/SlimeMove/slime-move-3.png");

  slimeATQ1 = loadImage("assets/SlimeATQ/slime-attack-0.png");
  slimeATQ2 = loadImage("assets/SlimeATQ/slime-attack-1.png");
  slimeATQ3 = loadImage("assets/SlimeATQ/slime-attack-2.png");
  slimeATQ4 = loadImage("assets/SlimeATQ/slime-attack-3.png");
  slimeATQ5 = loadImage("assets/SlimeATQ/slime-attack-4.png");

  slimeDie1 = loadImage("assets/SlimeDie/slime-die-0.png");
  slimeDie2 = loadImage("assets/SlimeDie/slime-die-1.png");
  slimeDie3 = loadImage("assets/SlimeDie/slime-die-2.png");
  slimeDie4 = loadImage("assets/SlimeDie/slime-die-3.png");

  gameOverImg = loadImage("gameOver.png");


  
  //WarriorRun
  WarriorRun1.playing = true;
  WarriorRun2.playing = true;
  WarriorRun3.playing = true;
  WarriorRun4.playing = true;
  WarriorRun5.playing = true;
  WarriorRun6.playing = true;
  WarriorRun7.playing = true;

  WarriorRun1.looping = false;
  WarriorRun2.looping = false;
  WarriorRun3.looping = false;
  WarriorRun4.looping = false;
  WarriorRun5.looping = false;
  WarriorRun6.looping = false;
  WarriorRun7.looping = false;

  //WarriorRunReverse
  WarriorRunReverse1.playing = true;
  WarriorRunReverse2.playing = true;
  WarriorRunReverse3.playing = true;
  WarriorRunReverse4.playing = true;
  WarriorRunReverse5.playing = true;
  WarriorRunReverse6.playing = true;
  WarriorRunReverse7.playing = true;
  WarriorRunReverse8.playing = true;

  WarriorRunReverse1.looping = false;
  WarriorRunReverse2.looping = false;
  WarriorRunReverse3.looping = false;
  WarriorRunReverse4.looping = false;
  WarriorRunReverse5.looping = false;
  WarriorRunReverse6.looping = false;
  WarriorRunReverse7.looping = false;
  WarriorRunReverse8.looping = false;

  //WarriorIdle
  WarriorIdle1.playing = true;
  WarriorIdle2.playing = true;
  WarriorIdle3.playing = true;
  WarriorIdle4.playing = true;
  WarriorIdle5.playing = true;
  WarriorIdle6.playing = true;

  WarriorIdle1.looping = true;
  WarriorIdle2.looping = true;
  WarriorIdle3.looping = true;
  WarriorIdle4.looping = true;
  WarriorIdle5.looping = true;
  WarriorIdle6.looping = true;

  //WarriorIdleReverse
  WarriorIdleReverse1.playing = true;
  WarriorIdleReverse2.playing = true;
  WarriorIdleReverse3.playing = true;
  WarriorIdleReverse4.playing = true;
  WarriorIdleReverse5.playing = true;
  WarriorIdleReverse6.playing = true;

  WarriorIdleReverse1.looping = true;
  WarriorIdleReverse2.looping = true; 
  WarriorIdleReverse3.looping = true; 
  WarriorIdleReverse4.looping = true;
  WarriorIdleReverse5.looping = true;
  WarriorIdleReverse6.looping = true;

  //WarriorAttack
  WarriorAttack1.playing = true;
  WarriorAttack2.playing = true;
  WarriorAttack3.playing = true;
  WarriorAttack4.playing = true;
  WarriorAttack5.playing = true;
  WarriorAttack6.playing = true;
  WarriorAttack7.playing = true;
  WarriorAttack8.playing = true;
  WarriorAttack9.playing = true;

  WarriorAttack1.looping = false;
  WarriorAttack2.looping = false;
  WarriorAttack3.looping = false;
  WarriorAttack4.looping = false;
  WarriorAttack5.looping = false;
  WarriorAttack6.looping = false;
  WarriorAttack7.looping = false;
  WarriorAttack8.looping = false;
  WarriorAttack9.looping = false;

  WarriorAttack10.playing = true;
  WarriorAttack11.playing = true;
  WarriorAttack12.playing = true;

  WarriorAttack10.looping = false;
  WarriorAttack11.looping = false;
  WarriorAttack12.looping = false;

  //SLIME
  //move
  slimeMove1.playing = true;
  slimeMove2.playing = true;
  slimeMove3.playing = true;
  slimeMove4.playing = true;

  slimeMove1.looping = true;
  slimeMove2.looping = true;
  slimeMove3.looping = true;
  slimeMove4.looping = true;

  //attack
  slimeATQ1.playing = true;
  slimeATQ2.playing = true;
  slimeATQ3.playing = true;
  slimeATQ4.playing = true;
  slimeATQ5.playing = true;

  slimeATQ1.looping = false;
  slimeATQ2.looping = false;
  slimeATQ3.looping = false;
  slimeATQ4.looping = false;
  slimeATQ5.looping = false;

  //die
  slimeDie1.playing = true;
  slimeDie2.playing = true;
  slimeDie3.playing = true;
  slimeDie4.playing = true;

  slimeDie1.looping = false;
  slimeDie2.looping = false;
  slimeDie3.looping = false;
  slimeDie4.looping = false;

}

function setup() {
  createCanvas(1536,270);
  frameRate(50);

  bg = createSprite(displayWidth/2-20,displayHeight/2-300,20,20);
  bg.addImage(bg_img);
  bg.scale = 1.1;

  textSize(40);
  text("VIDA: ", +WarriorLife, 80, 60);



  Warrior = createSprite(displayWidth/2-10,displayHeight/2-215, 135);
  Warrior.scale = 2;
  Warrior.addAnimation('Running', WarriorRun1, WarriorRun2, WarriorRun3, WarriorRun4, WarriorRun5, WarriorRun6, WarriorRun7, WarriorRun8);
  Warrior.addAnimation('ReverseRunning', WarriorRunReverse1, WarriorRunReverse2, WarriorRunReverse3, WarriorRunReverse4, WarriorRunReverse5, WarriorRunReverse6, WarriorRunReverse7, WarriorRunReverse8);
  Warrior.addAnimation('Idling', WarriorIdle1, WarriorIdle2, WarriorIdle3, WarriorIdle4, WarriorIdle5, WarriorIdle6);
  Warrior.addAnimation('ReverseIdling', WarriorIdleReverse1, WarriorIdleReverse2, WarriorIdleReverse3, WarriorIdleReverse4, WarriorIdleReverse5, WarriorIdleReverse6);
  Warrior.addAnimation("Attacking", WarriorAttack1, WarriorAttack2, WarriorAttack3, WarriorAttack4, WarriorAttack5, WarriorAttack6, WarriorAttack7, WarriorAttack8, WarriorAttack9);
  Warrior.addAnimation("Attacking2", WarriorAttack10, WarriorAttack11, WarriorAttack12);

  //slime

  
  slime = createSprite(random(width/2, 1536), height -35);
  slime.debug = true;
  slime.setCollider("rectangle", 1,11,23,35,90);
  slime.addAnimation('Moving', slimeMove1, slimeMove2, slimeMove3, slimeMove4);
  slime.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime.changeAnimation('Moving');
  slime.scale = 2.2;

  slimeGroup = new Group();
  slimeGroup.add(slime);

  
  Warrior.scale = 2;


  textSize(15);
}

function draw() {
  background(51);

  if(gameState = "play"){


textSize(40);
text("VIDA: ", +WarriorLife, 80, 60);

//movimentar o PC
if(keyDown("d")){

direction = 1
  Warrior.changeAnimation('Running');
  velocityX = 3

}
 
Warrior.x = Warrior.x + velocityX;
if (velocityX == 0){
  if(direction == 1){
    Warrior.changeAnimation("Idling");
  }
  else{
    Warrior.changeAnimation("ReverseIdling");
  }
}

if(keyDown("a")){
  direction = -1
  velocityX = -3
  Warrior.changeAnimation('ReverseRunning');
}
if(!keyDown("a") && !keyDown("d")){
  velocityX = 0
}
camera.position.x = Warrior.position.x;


//Atacando
if(keyDown("space")){

  Warrior.changeAnimation('Attacking');
  Warrior.velocityX = 0;
  Warrior.debug = true;
  Warrior.setCollider("rectangle", 12, 11, 5, 35, 90);

  if(slimeGroup.isTouching(Warrior)){

    for(var i = 0; slimeGroup.length; i++){

      if(slimeGroup[i].isTouching(Warrior)){
        slime.changeAnimation('Dying');
        slimeGroup.destroyEach();

        
      }
    }
  }
  
 Warrior.changeAnimation('Attacking');
 Warrior.velocityX = 0;

  }
}





  drawSprites();




}
