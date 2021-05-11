var qian = [3, 9, 20, 15, 7]
var zhong=[9,3,15,20,7]


function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}



function f1(qian, zhong) {
  if (qian == null || zhong == null || qian.length == 0 || zhong.length == 0 ) return null
  var root = new Node(qian[0]);
  var index = zhong.indexOf(root.value);
  var qianleft = qian.slice(1, index + 1);
  var qianright = qian.slice(index + 1, qian.length);
  var zhongleft = zhong.slice(0, index);
  var zhongright = zhong.slice(index + 1, zhong.length);
  root.left=f1(qianleft, zhongleft);     //根据左子树的前中序遍历还原左子树，并赋值给root的左子树
  root.right= f1(qianright, zhongright)
  return root
}


var root = f1(qian, zhong)
console.log(root);
var arr=[]

function f2(root) {
  if (root == null) {
    // arr.push('null')
    return 
  }
    
  if (root) {
    arr.push(root.value)
  }
  f2(root.left);
  f2(root.right)
  return arr
}


console.log(f2(root));