<template>
  <div class="container">
    
    <!-- <page  @pagerChange='change($event)' :total="total" :current="current"/>
    <page  :total="48" :current="4" /> -->
    <!-- <imglodar class="imglodar"  src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2849381321,2641171283&fm=26&gp=0.jpg" 
    placeholder='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2849381321,2641171283&fm=26&gp=0.jpg' 
    @loaded="handle"></imglodar> -->

    <!-- <p v-show="visabl">2222</p>
    <button @click="visabl=!visabl">qiehuan</button> -->
    <!-- <div class="left">
     <side></side>
    </div> -->
    <Layout>
      <template v-slot:main>
        <div class="left">
          <side></side>
        </div>
      </template>
      <template >
        <div class="middle">
          <router-view></router-view>
        </div>
      </template>
      <template v-slot:footer>
        <div class="right"></div>
      </template>

    </Layout>


   
   
  </div>
</template>


<script>


  // import touxiang from './componets/TouXiang';
import side from './componets/side'
  // import page from './componets/page'
  // import page from './componets/Pager1'
  // import imglodar from './componets/imgLodar'
  // import layout from './componets/Layout'
import Layout from './componets/Layout'

  export default {
    components: {
      // touxiang,
      // page,
      // imglodar,
      side,
      // layout,
        Layout

    },
    data(){
      return {
        visabl:true,
        current:3,
        total:200,
      }
    },
    methods:{
     change(n){
      //   if (n < 1) {
      //   newPage = 1;
      // }
      // if (newPage > this.pageNumber) {
      //   newPage = this.pageNumber;
      // }
      // if (newPage === this.current) {
      //   return;
      // }
      // console.log('ss')
        this.current=n;
      },
      handle(){
        console.log('加载完成')
      }
    }

  }
  // console.log('ss')
</script>

<style scoped lang='less'>
@import '~@/style/all.less';
 
 
 
  // .imglodar{
  //   width: 300px;
  //   height: 200px;
  //   overflow: hidden;
  //   position: relative;
  // }
  // .contact{
  //   width: 250px;
  // height: 360px;
  // background-color: black;
  
  // margin-top: 50px;
  // }

  .container{
    .self-fill(fixed);
    width: 100%;
  height: 100%;
 
  }
  
  
  .left {
  width: 250px;
  height: 100%;
  background: black;
}
.main {
  width: 100%;
  height: 100%;

}
.right {
  // width: 150px;
  height: 100%;
 
}
 
</style>