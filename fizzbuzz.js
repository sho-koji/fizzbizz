'use strict'

{
  document.querySelector('button').addEventListener('click', () => {
    const li = document.createElement('li');
    const lists = document.querySelectorAll('input');
    lists.forEach( (list) => {
      li.textContent = list.value;
      document.querySelector('ul').appendChild(li);
    });
  });
}