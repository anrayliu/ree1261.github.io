/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
  "particles": {
    "number": {
      "value": 80,
    },
    "color": {
      "value": "#b0b0b0"
    },
    "shape": {
      "type": "circle",
    },
    "opacity": {
      "value": 0.7,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.5,
      }
    },
    "size": {
      "value": 5,
      "random": true,
    },
    "line_linked": {
      "enable": false,
    },
    "move": {
      "enable": true,
      "speed": 0.7,
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
      },
      "onclick": {
        "enable": false,
      },
      "resize": true,
    }
  },
  "retina_detect": true
}

);