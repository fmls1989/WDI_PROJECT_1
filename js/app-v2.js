
$(init);

let score = 0;
let speed1 = 900;
// const speed2 = 500;
var timer = 46;
var interval1;
var interval2;
var interval3;
let $box;


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
  },
  garlic: {
    image: 'garlic',
    value: 5
  }

};

function init() {
  $('.start').on('click', startGame);
}
function countDown() {
  timer--;
  // console.log(timer);
  $('.countdown').text(timer);
  if (timer === 0) {
    $('.countdown').text('GAME OVER');
    clearInterval(interval1);
    clearInterval(interval2);
    timer = 46; // TO RE-START THE TIMER
    score = 0; // TO RE-START THE SCORE
  }
  // newLevels(); I CALL MY FUNCTION FROM HERE SO I CAN APPEND WHEN THE CLOCK IS TICKING and not from the bottom when the timer didnt start. I DONT NEED CAUSE IM NOT APPENDING NOW, JUST GIVING CLASS
}

function pickRandomSquare() {
  $box = $('.box');//2. RESET MY LIS
  return $box[Math.floor(Math.random()*$box.length)];
}

function chooseRandomImage() {
  const number = Math.random();
  if (number >= 0.7 && number <= 1) {
    return options['sombrero'];
  } else if (number >= 0.5 && number <= 0.7) {
    return options['avocado'];
  } else if (number >= 0.2 && number <= 0.5) {
    return options['skull'];
  } else if (number >= 0.0 && number <=0.2) {
    return options['garlic'];
  }
}

function chooseSquare() {
  const option  = chooseRandomImage();
  const $square = $(pickRandomSquare());
  var image = $(`<img src="images/${option.image}.png" class="img">`);
  $square.html(image);

  $square.on('click', function() {
    // console.log('clicked');
    if (option.image === 'skull') {
      score = score - option.value;
      $('.score-span').text(score);
    } else {
      score = score + option.value;
      $('.score-span').text(score);
    }
    // console.log(score);
  });
  //CLEAR THE CLICK AND PICTURE after 1sec
  setTimeout(function() {
    $square.off('click');
    $square.html('');
  }, speed1);
}


function startGame() {
  $box = $('.box');// 1.RESET LIS
  interval1 = setInterval(chooseSquare, speed1);
  interval2 = setInterval(countDown, 1000);
  interval3 = setInterval(newLevels, speed1);
}
// THE PICTURES DOES NOT APPEAR IN THE GENERATED BOXES

function newLevels(){
  // var $newLis = $('li').length;
  if(score >=100){
    var newBox1 = document.getElementById('4');
    newBox1.className = 'box';
    clearInterval(interval1);
    speed1 = 650;
    interval1 = setInterval(chooseSquare, speed1);
  }
  if(score >=200){
    var newBox2 = document.getElementById('9');
    newBox2.className = 'box';
    var newBox3 = document.getElementById('14');
    newBox3.className = 'box';
    clearInterval(interval1);
    speed1 = 550;
    interval1 = setInterval(chooseSquare, speed1);
  }
  if(score >=300){
    var newBox4 = document.getElementById('5');
    newBox4.className = 'box';
    var newBox5 = document.getElementById('10');
    newBox5.className = 'box';
    var newBox6 = document.getElementById('15');
    newBox6.className = 'box';
    clearInterval(interval1);
    speed1 = 450;
    interval1 = setInterval(chooseSquare, speed1);
  }
}



$(document).ready(function(){
  $('.start').hover(function() {
    $('.start').addClass('transition');

  }, function() {
    $('.start').removeClass('transition');
  });
});
