<template>
  <i class="iconfont icon-container" :class='fontclass'></i>
</template>

<script>
  const iconmap = {
    home: 'icon-ziyuan62',
    QQ:'icon-tubiao215',
    weixin:'icon-weixin',
    email:'icon-youxiang',
    git:'icon-GitHub',
    index:'icon-ziyuan62',
    wenzhang:'icon-wenzhang',
    aboutme:'icon-guanyuwomen',
    project:'icon-jiaowu',
    liuyan:'icon-liuyanban-05'

  }
  export default {
    props: {
      type: {
        type: String
      }
    },
    computed: {
      fontclass() {
        return iconmap[this.type]
      }
    }
  }
</script>
<style scoped>
  @import "//at.alicdn.com/t/font_2493700_fdh5pxukb0k.css";

  /* @font-face {
    font-family: 'iconfont';
    
    src: url('//at.alicdn.com/t/font_2493700_l2kk0nno2yq.eot');
    src: url('//at.alicdn.com/t/font_2493700_l2kk0nno2yq.eot?#iefix') format('embedded-opentype'),
      url('//at.alicdn.com/t/font_2493700_l2kk0nno2yq.woff2') format('woff2'),
      url('//at.alicdn.com/t/font_2493700_l2kk0nno2yq.woff') format('woff'),
      url('//at.alicdn.com/t/font_2493700_l2kk0nno2yq.ttf') format('truetype'),
      url('//at.alicdn.com/t/font_2493700_l2kk0nno2yq.svg#iconfont') format('svg');
  }  */

  .iconfont {
    
    font-size: 27px;
  }
</style>