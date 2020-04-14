'use strict'

{
  document.querySelector('button').addEventListener('click', () => {
//    window.location.reload();
    
    var fizzInput = document.querySelector('#fizz').value;
    var buzzInput = document.querySelector('#buzz').value;

//    if (typeof fizzInput !== "string" || typeof fizzInput !== "string") {
//      return false;
//    } else {}

      for (let i = 1; i <= 10; i++) {

        var fizzli = document.createElement('li');
        var buzzli = document.createElement('li');
        var fizzbuzzli = document.createElement('li');

        var fizzOutput = fizzInput * i;
        fizzli.textContent = "fizz" + fizzOutput;
        var buzzOutput = buzzInput * i;
        buzzli.textContent = "buzz" + buzzOutput;

        if (i % buzzInput === 0) {
          var fizzbuzz = fizzInput * i;
          fizzbuzzli.textContent = "FizzBuzz" + fizzbuzz;
          document.querySelector('ul').appendChild(fizzbuzzli)
        } else if (i % fizzInput === 0) {
          //        var fizzbuzz = buzzInput * i;
          //        fizzbuzzli.textContent = "FizzBuzz" + fizzbuzz;
          //        document.querySelector('ul').appendChild(fizzbuzzli)
        } else {
          document.querySelector('ul').appendChild(fizzli);
          document.querySelector('ul').appendChild(buzzli);
        }
      }

  });
}
