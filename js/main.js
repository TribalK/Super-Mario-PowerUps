const powers = document.querySelectorAll('.power');
const marios = document.querySelectorAll('.mario_figure');
let audio;

Array.from(powers).forEach(element => element.addEventListener('click', addPowerUp));

function playAudio(audioType) {
  if(audio) {
    audio.pause();
  }

  if(audioType === 1) {
    audio = document.getElementById("powerUpAudio");
  }
  else if(audioType === 2) {
    audio = document.getElementById("starAudio");
  }
  else {
    audio = document.getElementById("deathAudio");
  }

  audio.currentTime = 0;
  audio.play();
}

//Click on power up image
function addPowerUp(element) {
  const powerId = element.target.id;

  let replMarioType = getMarioType();

  if(replMarioType !== '') {
    switch(powerId) {
      case "mushroom":
          document.getElementById(replMarioType).classList.toggle('hidden');
          document.querySelector('#tallMario').classList.toggle('hidden');
          document.body.style.backgroundImage = 'url("img/Mushroom-Kingdom.png")';
          playAudio(1);
        break;
      case "fire":
          document.getElementById(replMarioType).classList.toggle('hidden');
          document.querySelector('#fireMario').classList.toggle('hidden');
          document.body.style.backgroundImage = 'url("img/Mushroom-Kingdom.png")';
          playAudio(1);
        break;
      case "penguin":
          document.getElementById(replMarioType).classList.toggle('hidden');
          document.querySelector('#penguinMario').classList.toggle('hidden');
          document.body.style.backgroundImage = 'url("img/Glacier-Pass.png")';
          playAudio(1);
        break;
      case "leaf":
          document.getElementById(replMarioType).classList.toggle('hidden');
          document.querySelector('#tanookiMario').classList.toggle('hidden');
          document.body.style.backgroundImage = 'url("img/Mushroom-Kingdom.png")';
          playAudio(1);
        break;
      case "star":
          document.getElementById(replMarioType).classList.toggle('hidden');
          document.querySelector('#starMario').classList.toggle('hidden');
          document.body.style.backgroundImage = 'url("img/Mushroom-Kingdom.png")';
          playAudio(2);
        break;
      case "poison":
          document.getElementById(replMarioType).classList.toggle('hidden');
          document.querySelector('#screamAtUser').innerHTML = "YOU KILLED HIM!";
          playAudio(3);
         break;
      case "propeller":
          document.getElementById(replMarioType).classList.toggle('hidden');
          document.querySelector('#propellerMario').classList.toggle('hidden');
          document.body.style.backgroundImage = 'url("img/Sky-background.jpg")';
          playAudio(1);
        break;
      case "boomerang":
          document.getElementById(replMarioType).classList.toggle('hidden');
          document.querySelector('#boomerangMario').classList.toggle('hidden');
          document.body.style.backgroundImage = 'url("img/Mushroom-Kingdom.png")';
          playAudio(1);
        break;
    }
  }
}

function getMarioType() {
  for(let i=0; i<marios.length; i++) {
    let thisMario = marios[i];
    if(!thisMario.classList.contains("hidden")) {
      return thisMario.id;
    }
  }
  return "";
}
