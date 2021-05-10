const { resolve } = require('dns')
const os = require('os')
const path = require('path')
const URL = require('url')
const util = require('util')
const fs=require('fs')
const { RSA_NO_PADDING } = require('constants')
const net = require('net')
const http=require('http')

// console.log(os.EOL)
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.tmpdir());
// console.log(path.dirname('ss/ddd/ss.js'))
// console.log(path.extname('ss/ddd/ss.js'))
// console.log(path.join('a','s','..','a.js'))
// console.log(path.resolve('/a.js'));
// const url=URL.parse('https://home.firefoxchina.cn/')
// console.log(url);
// require('./src/a')

// async function abc() {
//   return new Promise(resolve => {
//     setTimeout(()=> {
//      console.log('dd')
//    },1000)
//  })
// }
// util.promisify()
// util.isDeepStrictEqual(obj1, obj2)

//  const obj1

// const callback=util.callbackify(abc)
// console.log(callback);
// callback()
// function aa() {
//   console.log('ss')
// }

// abc()
// aa()






//回调异步执行
// fs.readFile(filename,'utf-8', (err, content) => {
//   console.log(content);
// })

//同步执行，会阻塞js，不建议这么写，通常在初始化程序（启动时）的时候有限的读取
// fs.readFileSync(filename, 'utf-8')


// async function copyfile() {
//   const buffer = await fs.promises.readFile(filename)
//   console.log(buffer)
//   const copyfile=path.resolve(__dirname,'./file/2.jpg')
//   await fs.promises.writeFile(copyfile,buffer)
// }
// copyfile()


// async function write() {
//   await fs.promises.writeFile(filename, 'dasdfafafdf', {
//     flag:'a'
//   })
// }

// write()


// async function file() {
//   const state =await fs.promises.stat(filename)
//   console.log(state);
// }


// const filename1 = path.resolve(__dirname, './file/1')

// async function readdir() {
//  await fs.promises.mkdir(filename1)
// }


// readdir()
const filename = path.resolve(__dirname ,'./file/1.txt')




//可读流
// const rs=fs.createReadStream(filename, {
//   encoding: 'utf-8',
//   // start: '',
//   // end:''     //不把它读完
//   // highWaterMark:64*1024    //每次默认读64kb
//   highWaterMark: 1,
//   autoClose:true   //读完后自动关闭
// })


//文件读取设计事件
//1.打开事件  open
//2.出错   error
//3.文件关闭   close
//4.数据读取时   data 
//注册data事件的时候，才会开始读取数据
// rs.on('open', () => {   
//   console.log('open');
// })
// rs.on('end', () => {
//   console.log('end');
// }
// )
// rs.on('close', () => {
//   console.log('close');
// })
// // rs.close()
// rs.on('data', chunk => {
//   console.log('读了一部分');   
//   console.log(chunk);    //之前设置了每一读取一个字符
// })

// rs.pause()
// rs.on('pause',()=>{})
// //暂停读取
// rs.resume()
//恢复读取

// const filename = path.resolve(__dirname, './file/1.txt')

// const ws = fs.createWriteStream(filename, {
//   encoding: 'utf-8',
//   highWaterMark:2
// })
// // ws.on()  //与rs一致

// var i = 0;
// function write() {
//   let flag = true;
//   while (i < 1024 * 1024 * 10 && flag) {
//     flag = ws.write('g')
//   }
// }

// write()
// ws.on('drain', () => {
//   write();  //drain的时候就触发write
// })


// const from = path.resolve(__dirname, './file/1.txt')
// const to = path.resolve(__dirname ,'./file/2.txt')
// console.time('方式')
// const rs = fs.createReadStream(from);
// const ws = fs.createWriteStream(to);
// rs.pipe(ws)
// rs.on('close', () => {
//   console.timeEnd('方式');
// })


// const socket=net.createConnection({
//   host: 'duyi.ke.qq.com',
//   port:80
// },
//   () => {
//   console.log('connection');
//   })

// socket.on('data', chunk => {
//     console.log('来自服务器的数据',chunk.toString('utf-8'));
// })
  
// socket.write('dd')

// const server = net.createServer(90)

// server.on('listening', () => {
//   console.log('listening');
// })

// server.on('connection', socket => {
//   console.log('connection',socket);
// })



//和ajax没关系，普通的http请求，所以不是浏览器上的，不会跨域
http.request()

