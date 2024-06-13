let cor
let posicaohorizontal
let posicaovertical

function setup() {
  createCanvas(460, 450);
  background("rgb(4,0,255)")
  cor=color(random(0,255), random(0,255), random(0,255))
  posicaohorizontal=[0,0,0]
  posicaovertical=[random(height), random(height), random(height)]
}

function draw() {
  fill(cor)
  for(let contador in posicaohorizontal) {
  circle(posicaohorizontal[contador], posicaovertical[contador], 60)
  posicaohorizontal[contador]+=random(1,5)
  posicaovertical[contador]+=random(-3,3)
    if(posicaohorizontal[contador]>=width){
      posicaohorizontal[contador]=0;
      posicaovertical[contador]=random(height)
    }
  }
  if(mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
}
