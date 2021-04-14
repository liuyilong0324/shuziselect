import isPrime from './isPrime'

export default class Num{
  constructor() {
    this.time = 300;
    this.n = 1;
    this.callback = null;
    this.timer = null;
  }

  start() {
    if (this.timer) {
      return;
    }
   this.timer=setInterval(() => {
     this.callback && this.callback(this.n, isPrime(this.n));
     //this.callback为真则执行后面的
     this.n++;
    },this.time)
  }

  stop() {
    clearInterval(this.timer);
    this.timer=null
  }
}