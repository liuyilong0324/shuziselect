<template>
<div class='img-container'>
  <img v-if='!everydone' :src="placeholder" alt="" class="zhanwei">
<img :style="{opacity:opacity}" @load="loadimg" :src="src" alt="" >

</div>
</template>

<script>

export default {
  props:{
    src:{
      type:String,
      require:true
    },
    placeholder:{
      type:String,
      require:true
    },
    duration:{
      type:Number,
      default:500
    }
  },
  data(){
    return{
      imgloaded:false,
      everydone:false
    }
  },
  computed:{
    opacity(){
      return this.imgloaded?1:0;
    }
  },
  methods:{
    loadimg(){
      
      this.imgloaded=true;
      setTimeout(()=>{
         this.everydone=true;
         this.$emit('loaded')
      },2000)
    
    },
   
  }

}
</script>
<style  scoped>
@import '~@/style/global.less';
img{
  width: 100%;
  height: 100%;
  position: absolute;
  left:0;
  top:0;
  transition: opacity 2s ; 
  transition-timing-function:ease-in-out; 
  object-fit:cover

}

/* img:hover{
    opacity: 0;
} */
.zhanwei{
  filter:blur(3px);
}

</style>