<template>
    <mt-swipe :auto="4000" :style="`width: ${imgWidth};height: ${imgHeight}`">
      <mt-swipe-item v-for="(src,index) in images[num]" :key="index">
        <img :src=src>
      </mt-swipe-item>
    </mt-swipe>
</template>
<script>

  export default {
    data () {
      return {
        images: [[
          'https://img2.epetbar.com/nowater/2017-09/20/10/4288b3a722d59db33b34181caa7ef1e4.jpg@!water',
          'https://img2.epetbar.com/nowater/2017-09/18/10/c3d406e9e2219ab08e083548161061d4.jpg@!water',
          'https://img2.epetbar.com/nowater/2017-09/18/10/ed80ee64f24384450e757c1188e553dc.png@!water',
          'https://img2.epetbar.com/nowater/2017-09/21/14/04e9257ea937c263aacf7d6241a84298.png@!water',
          'https://img2.epetbar.com/nowater/2017-09/18/08/c6ddc480d009e7ec42f4933070377dc6.jpg@!water',
          'https://img2.epetbar.com/nowater/2017-09/13/19/ab6890236a6be0089d042873e7dc1797.jpg@!water',
          'https://img2.epetbar.com/nowater/2017-09/18/15/409553239265ca47621c007fb11c3241.jpg@!water'
        ],[
          'https://img2.epetbar.com/nowater/2017-07/03/8/747562c921cd37cf0dafbe24ccfe62bd.gif'
      ],[
        'https://img2.epetbar.com/nowater/2017-09/14/09/3862fcd9c0004d91a81ad63a494b82a0.jpg@!water'
        ]],
          imgWidth: '375px',
          imgHeight: '160px'
      }
    },
    props: {
      num: Number
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  img
    width 100%
    height 100%
</style>
