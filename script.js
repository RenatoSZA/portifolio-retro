// Bem-vindo aos anos 2000! 

// 1. O clássico alerta de boas-vindas
window.onload = function() {
    alert("Bem-vindo ao Cyberespaço do Renato SZA! 👾\nMelhor visualizado em 800x600!");
    
    // Pequeno efeito piscante psicodélico rápido na seção do github no clique
    var githubSection = document.getElementById("github-section");
    if(githubSection) {
        githubSection.onclick = function() {
            var colors = ["red", "blue", "lime", "yellow", "magenta", "cyan"];
            var interval = setInterval(function() {
                var randomColor = colors[Math.floor(Math.random() * colors.length)];
                githubSection.style.background = randomColor;
            }, 100);
            
            setTimeout(function() {
                clearInterval(interval);
                githubSection.style.background = "linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta)";
            }, 1000);
        };
    }
};

// 2. Efeito de rastro no mouse (Mouse Trail) muito famoso na época
var dots = [];
var mouse = {
  x: 0,
  y: 0
};

var Dot = function() {
  this.x = 0;
  this.y = 0;
  this.node = (function(){
    var n = document.createElement("div");
    n.className = "mouse-trail";
    document.body.appendChild(n);
    return n;
  }());
};

Dot.prototype.draw = function() {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};

for (var i = 0; i < 12; i++) {
  var d = new Dot();
  dots.push(d);
}

function draw() {
  var x = mouse.x,
      y = mouse.y;
  
  dots.forEach(function(dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];
    
    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * .6;
    y += (nextDot.y - dot.y) * .6;
  });
}

addEventListener("mousemove", function(event) {
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

function animate() {
  draw();
  requestAnimationFrame(animate);
}

animate();

// 3. Proibir botão direito (proteção contra roubo de código super segura e nostálgica)
document.addEventListener('contextmenu', event => {
    event.preventDefault();
    alert("Código protegido por Copyright ©️ 2008! Não copie minha página!!!");
});
