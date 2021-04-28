// function Node(value) {
//   this.value = value;
//   this.next=null
// }

// let node1 =new Node(1)
// let node2 =new Node(2)
// let node3 =new Node(3)
// let node4 =new Node(4)
// let node5 =new Node(5)


// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;



// function nizhi(node) {
//   if (node.next != null) {
//     return nizhi(node.next)
//   } else {
//     return node
//   }
    
// }

// console.log(nizhi(node1))

// function nizhi(node) {
//   if (node == null || node.next == null) {
    // console.log(node)
  //  return node
  // }
  // console.log(node)
  // node=3
  // let result = nizhi(node.next);
  // console.log(node)
  // console.log(node)
  // node.next.next = node;
  // console.log(node)
  // node.next = null;
  // console.log(node)
  // nizhi(node.next);
//   console.log(result)
//   return result;
// }

// console.log(nizhi(node1))

// let newnode = nizhi(node1)

// function bianlinode(node) {
//   if (node == null) return
//   console.log(node.value);
//   bianlinode(node.next)
// }

// bianlinode(newnode)



// var arr1 = [3, 2, 5, 1, 8, 4, 6]


// function selectSort(arr){
//   // var minIndex = 0;
//   for(var i=0; i<arr.length; i++){
//       let minIndex = i;
//       for(var j=i; j<arr.length; j++){
//           if(arr[j] < arr[minIndex]){
//               minIndex = j;
//           }
//       }

//       var temp = arr[i];
//       arr[i] = arr[minIndex];
//       arr[minIndex] = temp; 
//   }

//   return arr;
// }

// console.log(selectSort(arr1))


// function jiaohuan(arr, a, b) {
//   let temp = arr[a];
//       arr[a] = arr[b]
//      arr[b]=temp
// }

// function Pao(arr) {

 
//   for (let j = 0; j < arr.length; j++){    
//     let index = j;
//     for (let i = j; i < arr.length; i++){   
//       if (arr[i]<arr[index]) {
//         index=i
//       }
//     }
   
//      let temp = arr[j];
//      arr[j]=arr[index]
//      arr[index]=temp
//   }

//   return arr
// }


// let result = Pao(arr1)

// console.log(result)


// var arr1 = [3, 2, 5, 1, 8, 4, 6]

// function quick(arr) {
//   if (arr == null || arr.length == 0) return [];
//   var leader = arr[0];
//   var left = [];
//   var right = [];
//   for (var i = 1; i < arr.length; i++){
//     if (arr[i] < leader) left.push(arr[i])
//     if(arr[i]>leader)   right.push(arr[i])
//   }
//   left = quick(left);
//   right = quick(right);
//   left.push(leader)

//   return left.concat(right)
// }


// console.log(quick(arr1))





// let arr = []

// for (let i = 0; i < 10000; i++){
//   arr[i]=Math.floor(Math.random()*100)
// }



// function Node(value) {
//   this.value = value;
//   this.left = null;
//   this.right=null
// }

// function search(node, num) {
//   if (node == null) return
//   if (node.value == num) return
//   if (node.value > num) {
//     if (node.left) {
//       search(node.left,num)
//     } else {
//       node.left=new Node(num)
//     }
//   } else {
//     if (node.right) {
//       search(node.right,num)
//     } else {
//       node.right=new Node(num)
//     }
//   }
// }


// function buildsearch(arr) {
//   if (arr == null) return;
//   let node = new Node(arr[0]);
//   for (let i = 0; i < arr.length; i++){
//     search(node,arr[i])
//   }
//   return node

// }

// let root = buildsearch(arr);

// console.log(buildsearch(arr))


// function searchTree(node, target) {
//   if (node == null) return false;
//   if (node.value == target) {
//     console.log(node)
//     return true;
//   } 
//   if (node.value > target) {
//    return  searchTree(node.left,target)
//   } else {
//    return searchTree(node.right,target)
//   }
  // return false
// }

// console.log(root)
// console.log(searchTree(root,80))





// function root(value) {
//   this.value = value;
//   this.left = null;
//   this.right=null
// }

function root(value) {
  this.value = value;
  this.child=[]
}

let a = new root("a")
let b = new root("b")
let c = new root("c")
let d = new root("d")
let e = new root("e")
let f = new root("f")

a.child.push(c)
a.child.push(f)
a.child.push(b)
b.child.push(d)
b.child.push(e)

// let a = new root(a);
// a.child.push(new root(c))
// a.child.push(new root(f))
// let b = new root(b)
// b.child.push(new root(d))
// b.child.push(new root(e))
// a.child.push(b)

// console.log(a)


function deepSearch(root) {
  if (root == null) return
  console.log(root.value)
  for (let i = 0; i < root.child.length; i++){
    deepSearch(root.child[i])
  }
}

deepSearch(a);




