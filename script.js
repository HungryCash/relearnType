    const letters = "abcdefghijklmnopqrstuvwxyz";
    const letterDiv = document.getElementById("letter");
    
    letterDiv.textContent = "For stupid idiots who insist on typing stupid. Press any key to begin";

    function newLetter() {
      let l = letters[Math.floor(Math.random()*letters.length)];
      letterDiv.textContent = l;
      return l;
    }

    //start
    let current = newLetter();
    let numRight = 0;

    document.addEventListener("keydown", (e) => {
      if (e.key === current) {
        current = newLetter();
        numRight++;

        if (numRight > 10) {
          //go next level
        }
      } else {
        letterDiv.textContent = "❌"; //maybe i dont use a stupid ass emoji
        setTimeout(() => { current = newLetter(); }, 500);
      }
    });