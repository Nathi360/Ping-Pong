// The main game loop
var main = function ()
{
  var now = Date.now();
  var delta = now - then;

  update(delta / 1000);
  render();

  then = now;

  // Request to do this again ASAP
  requestAnimationFrame(main);
    
    if(p1.score == 5 || p2.score == 5)
    {
        if(p1.score == 5)
        {
            alert("Winner: Player-1");
        }
        else
        {
            alert("Winner: Player-2");
        }
        
        p1.score = 0;
        p2.score = 0;
        reset();
    }
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var isGameStarted = false;
var then = Date.now();
reset();
main();
