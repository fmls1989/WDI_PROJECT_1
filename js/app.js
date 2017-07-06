$(init);

let score = 0;
const speed = 1500;

const options = {
  skull: {
    image: 'skull',
    value: 10
  },
  avocado: {
    image: 'avocado',
    value: 10
  },
  sombrero: {
    image: 'sombrero',
    value: 20
  }
}

function init() {
  const $lis = $('li');
  const gameInterval = setInterval(chooseSquare, speed);

  function chooseSquare() {
    const option  = chooseRandomImage();
    const $square = $(pickRandomSquare());
    $square.css('background-image', `url(images/${option.image}.png)`);

    $square.on('click', function() {
      if (option.image === 'skull') {
        score = score - option.value;
      } else {
        score = score + option.value;
      }
      console.log(score);
    });

    setTimeout(function() {
      $square.off('click');
      $square.css('background', '#eee');
    }, 1000);
  }

  function pickRandomSquare() {
    return $lis[Math.floor(Math.random()*$lis.length)];
  }

  function chooseRandomImage() {
    const number = Math.random();
    if (number >= 0.9 && number <= 1) {
      return options['sombrero'];
    } else if (number >= 0.6 && number <= 0.9) {
      return options['avocado'];
    } else if (number >= 0.0 && number <= 0.6) {
      return options['skull'];
    }
  }
}
