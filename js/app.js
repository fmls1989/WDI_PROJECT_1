window.addEventListener('DOMContentLoaded', () => {
  var score = 0,
      mySquare;
  const lis = document.getElementsByTagName('li');

  setInterval(function(){
    mySquare = lis[Math.floor(Math.random()*lis.length)];
    mySquare.className = 'coloredSquare';
    mySquare.addEventListener('click', getScore);

    function getScore(){
      score+=10;
      console.log(score);
    }

    setTimeout(function(){
      mySquare.removeEventListener('click', getScore);
      mySquare.classList.remove('coloredSquare');
    }, 1000);
  }, 1100);
});
