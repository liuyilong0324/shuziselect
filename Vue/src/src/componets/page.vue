<template>
  <div class='page-container' v-if="pageNumber>1" >
    <span @click="handleClick(1)" :class="{disabled:current==1}">&lt;&lt;</span>
    <span @click="handleClick(current-1)" :class="{disabled:current==1}"  >&lt;</span>
    <span v-for="(n,i) in array"  :key='i' :class="{active:n==current}"  >{{n}}</span>
    <span :class="{disabled:current==pageNumber}" @click="handleClick(current+1)">&gt;</span>
    <span :class="{disabled:current==pageNumber}" @click="handleClick(pageNumber)">&gt;&gt;</span>
    
    
  </div> 
  
</template>

<script>
  export default {
    // data(){
    //   return{
    //     current:2
    //   }
    // },
    props:{
      eachNum:{
        type:Number,
        default:5
      },
      total:{
        type:Number,
        default:20
      },
      current:{
        type:Number,
        default:2
      },
      visableNum:{
        type:Number,
        default:6
      }
    },
    computed:{
      pageNumber(){
        return Math.ceil(this.total/this.eachNum);
      },
      minNum(){
        let min=this.current-Math.floor(this.visableNum/2);
        return min;
      },
      maxNum(){
        let max=this.minNum+this.visableNum;
       
        if(max>this.pageNum){
          max=this.pageNum
        }
         return max;
      },
      array(){
        let arr=[];
        console.log(this.minNum)
        for(let i=this.minNum;i<this.maxNum;i++){
          arr.push(i)
        }
        return arr;
        // return [this.minNum,this.minNum+1]
      }

    },
    methods:{
      handleClick(newpage){
        this.$emit('pagechange',newpage)
      }
    }
  }
  
  
</script>
<style lang="less" scoped>
 @import '../style/global.less';
  .page-container {
    display: flex;
    justify-content: center;

    span {
      margin:0 10px;
      cursor: pointer;
      &.disabled{
        color: @LightSlateGray ;
        cursor: not-allowed;
      }
      &.active{
        cursor: text;
        border-radius:50% ;
        color: @yellow;
      }
    }

  }

 
</style>