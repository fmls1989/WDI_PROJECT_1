window.addEventListener('DOMContentLoaded', () => {
  var score = 0;
  var timer = 61;
  var interval1;
  var interval2;
  // console.log(time);
  $('.start').on('click', startGame);

  function startGame() {
    interval1 = setInterval(createElements, 2000);
    // createElements();
    interval2 = setInterval(countDown, 1000);
  }

  //SET  TIMER
  function countDown() {
    timer--;
    console.log(timer);
    $('.countdown').text(timer);
    if (timer === 0) {
      $('.countdown').text('GAME OVER');
      clearInterval(interval1);
      clearInterval(interval2);
    }
    newLevels();
  }
  //CREATE ELEMENTS
  function createElements(){

    var lis = document.getElementsByTagName('li');
    //2. SELECT ONE SQ AT RANDOM
    var mySquare1 = lis[Math.floor(Math.random()*lis.length)];
    var mySquare2 = lis[Math.floor(Math.random()*lis.length)];
    var mySquare3 = lis[Math.floor(Math.random()*lis.length)];

    mySquare1.className = 'skull';
    mySquare2.className = 'avocado';
    mySquare3.className = 'sombrero';

    mySquare1.addEventListener('click', getScoreMinusPoints);
    mySquare2.addEventListener('click', getScoreTenPoints);
    mySquare3.addEventListener('click', getScoreTwentyPoints);

    mySquare1.innerHTML ='<img src="images/skull.png" class="img">';
    mySquare2.innerHTML ='<img src="images/avocado.png" class="img">';
    mySquare3.innerHTML ='<img src="images/sombrero.png" class="img">';

    function getScoreMinusPoints(){
      mySquare1.removeEventListener('click', getScoreMinusPoints);
      score-=10;
      document.getElementsByClassName('score-span')[0].innerHTML = score;
      // console.log(score);
    }
    function getScoreTenPoints(){
      mySquare2.removeEventListener('click', getScoreTenPoints);
      score+=10;
      document.getElementsByClassName('score-span')[0].innerHTML = score;
      // console.log(score);
    }
    function getScoreTwentyPoints(){
      mySquare3.removeEventListener('click', getScoreTwentyPoints);
      score+=20;
      document.getElementsByClassName('score-span')[0].innerHTML = score;
      // console.log(score);
    }
    //REMOVE EL
    setTimeout(function(){
      mySquare1.removeEventListener('click', getScoreMinusPoints);
      mySquare1.classList.remove('skull');
      mySquare1.innerHTML = '';
    }, 800);

    setTimeout(function(){
      mySquare2.removeEventListener('click', getScoreTenPoints);
      mySquare2.classList.remove('avocado');
      mySquare2.innerHTML = '';
    }, 900);
    
    setTimeout(function(){
      mySquare3.removeEventListener('click', getScoreTwentyPoints);
      mySquare3.classList.remove('sombrero');
      mySquare3.innerHTML = '';
    }, 1000);
    // console.log(time);

    // var newBlock = document.createElement('li');
    // newBlock.textContent = 'fran'
    // // var newBlocks = document.createElement('li');
    // for(var i=0; i<lis.length; i++){
    //   lis[i].appendChild(newBlock)
    // }


  }
  function newLevels(){
    var $newLis = $('li').length;
    if(score >50 && $newLis <= 9){
      var newBox1 = document.createElement('li');
      newBox1.className = 'newBoxLevelUp';
      document.getElementsByTagName('ul')[0].appendChild(newBox1);
    } else if(score >=100 && $newLis <= 10){
      var newBox2 = document.createElement('li');
      newBox2.className = 'newBoxLevelUp';
      document.getElementsByTagName('ul')[0].appendChild(newBox2);
    } else if (score >=150 && $newLis <= 11) {
      var newBox3 = document.createElement('li');
      newBox3.className = 'newBoxLevelUp';
      document.getElementsByTagName('ul')[0].appendChild(newBox3);
    }
  }


});
