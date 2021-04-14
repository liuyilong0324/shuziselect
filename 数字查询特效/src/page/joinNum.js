import radColor from '../util/radColor'
let divContainer = document.getElementById('divContainer');
let divCenter = document.getElementById('divCenter');


export default function (n,isPrime) {
  
let span = document.createElement('span');
  span.innerText = n;
  if (isPrime) {
    span.style.color = radColor();
  }

  divContainer.appendChild(span)
  divCenter.innerText = n
  if (isPrime) {
    divCenter.style.color=radColor()
  }

  
}


