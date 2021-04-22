<template>
<div class='loading-container'>
<div><img :src="loading" alt=""></div>

</div>
</template>

<script>
import loading from '@/assets/loading.svg'
export default {
  data(){
    return{
      loading
    }
  }
}
</script>
<style scoped lang='less'>

</style>