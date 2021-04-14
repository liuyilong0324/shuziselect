import getnum from '../util/getnum'
import joinNum from './joinNum'


let num = new getnum();


//注意：此处是给类实例化的num对象的callback属性赋值，然后在下面的start方法中，才得以调用
num.callback = (m,isPrime) => {
  joinNum(m,isPrime)
  
}


let isStart = false;

window.onclick = () => {
  
  if (isStart) {
   
    num.stop();
    isStart = false;
  } else {
    
    num.start();
    isStart = true;
  }

}


 





