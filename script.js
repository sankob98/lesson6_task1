let colors = document.querySelector('.colors');
let textarea = document.querySelector('.textarea');
let btn = document.querySelector('.button');

textarea.value = localStorage.getItem('textarea');

const changeColor = (color) => {
  console.log(color);
  document.body.style.backgroundColor = color;
  localStorage.setItem('bgcolor', color);
};

if (localStorage.getItem('bgcolor')) {
  changeColor(localStorage.getItem('bgcolor'));
}

colors.onchange = (event) => {
  changeColor(event.target.value);
};

textarea.oninput = () => {
  console.log('sfsgrth');
  localStorage.setItem('textarea', textarea.value);
};

btn.onclick = () => {
  localStorage.removeItem('textarea');
  textarea.value = '';
};
