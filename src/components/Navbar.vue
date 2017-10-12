<template>
  <div>
    <header class="tbl">
        <div class="tbl_row">
           <div class="logo tbl_col">
              <h1 data-page="home">
                <a href="/pwa/index.html" v-on:click="changeRoute('/pwa/index.html', $event)" title="Navbharat Times Hindi News">
                  <img title="Navbharat Times" alt="Navbharat Times Hindi News" 
                  src="https://opt.toiimg.com/recuperator/img/nbt/m-60120174/Navbharat-Times-Hindi-News.jpg">
                </a>
              </h1>
           </div>
        </div>
     </header>
     <div data-attr="hrnav" class="hrnavigation">
        <div class="scroll">
           <ul data-attr="list_nav" style="width: 309px;" class="list">
              <li class="hrcustomlink"><a class="track" href="/india/articlelist.cms?msid=1564454" 
                v-on:click="changeRoute('/india/articlelist.cms?msid=1564454', $event)" src="लाइव टीवी">भारत</a></li>
              <li class="hrcustomlink"><a class="track" href="/india/articlelist.cms?msid=2279801" 
                v-on:click="changeRoute('/india/articlelist.cms?msid=2279801', $event)" src="मस्त खबरें">दुनिया</a></li>
              
              <li class="hrcustomlink"><router-link to="/test">Test</router-link></li>
           </ul>
        </div>
     </div>
  </div>
</template>

<script>
  import route_mixin from '@/mixins/route-mixin'
  export default {
    name: 'navbar'
    ,mixins: [route_mixin]
  }
</script>
