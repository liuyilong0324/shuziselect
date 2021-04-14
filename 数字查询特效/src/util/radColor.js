const colors = ['red', 'black', 'pink', 'green', 'yellow']

let getRadNum = (max,min) => {
  return Math.floor(Math.random() * (max - min) + min);

}



export default function() {
  return colors[getRadNum(0, 5)];
}