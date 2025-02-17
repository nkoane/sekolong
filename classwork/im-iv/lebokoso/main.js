window.addEventListener('DOMContentLoaded', (event) => {
  /* saving the content of three */
  const one = document.querySelector('div#one');

  one.addEventListener('dragstart', (event) => {
    console.log("They see me rollin'");
  });

  one.addEventListener('dragend', (event) => {
    console.log("They hatin'");
  });

  /* read up collision detection; or is it boundary detection */

  /* saving the content of two */
  const two = document.querySelector('div#two');
  /* saving the content of three */
  const three = document.querySelector('div#three');
  /* saving the content of three */
  const threeContent = three.innerText;

  setTimeout(() => {
    return;
    /* the swap */
    three.innerText = one.innerText;
    one.innerText = two.innerText;
    two.innerText = three.innerText;
    /* returning the content of three to its original value */
    three.innerText = threeContent;
  }, 1000);
});
