<template>
  <div id="articleshow" class="box">
    <article>
      <div class="story-heading clearfix"><h1>{{dataset.hl}}</h1></div>
      <span class="timestamp" v-if="dataset.lu">{{dataset.lu}}</span>
      <strong v-if="dataset.ag">{{dataset.ag}}</strong>
      <div class="img_wrap" v-if="dataset.image[0].id">
        <img :src="imgCreation(dataset.image[0].id)" width="450">
      </div>
      <!-- <div class="artcontent" v-if="dataset.arttextxml && dataset.arttextxml.div.div.content">{{dataset.arttextxml.div.div.content.join('')}}</div>
      <div class="artcontent" v-else-if="dataset.arttextxml && dataset.arttextxml.div.div.p">{{dataset.arttextxml.div.div.p.join('')}}</div> -->
      <div class="artcontent"><div v-html="dataset.Story"></div></div>
    </article>
  </div>
</template>

<script>
  import route_mixin from '@/mixins/route-mixin'
  // import {articleshowdata} from '@/database/data'
  export default {
    name: 'articleshow',
    data () {
      return {
        dataset: {}
      }
    },
    methods: {
      printdata: function () {
        console.log(this.$route.params.msid + " entered articleshow --- " + this.$route.query.msid );
      },
      imgCreation: function (msid) {
        return msid ? 'https://opt.toiimg.com/recuperator/img/nbt/m-' + msid  + ',r-1,w-450,h-339/Navbharat-Times.jpg' : 'https://opt.toiimg.com/recuperator/img/nbt/m-47095658,r-4,w-250,h-172/NBT.jpg'
      },
      fetchData:function(){
        var vm = this;
        var msid = this.$route.query.msid || this.$route.params.msid;
        vm.$data.dataset = {}

        if(msid){
           fetch('http://navbharattimes.indiatimes.com/feeds/appnavigationshowv3next.cms?feedtype=sjson&version=v4&tag=news&msid=' + msid.replace('.cms','')).then(function(response){
              response.json().then(function(data){                    
                  // vm.$data.dataset = data.wdt_articleshow.article ;
                  vm.$data.dataset = data.it ;
                  console.log(vm.$data.dataset);
              });
          });
        }
      }
    },
    mounted() {
      this.printdata();
      this.fetchData();
    },
    watch:{
      '$route':'fetchData'
    },
    mixins: [route_mixin]
  }
</script>

<!-- scoped is used when css specific for this template -->
<style scoped>
  .box{padding:10px;}
  h1{font-size: 20px; line-height: 30px; padding:5px 0 0; margin:0}
  .img_wrap{width:100%; padding:0; text-align:center;margin: 5% 0;}
  .img_wrap img{margin:0 -40px}
  .timestamp{color:#999; font-size:14px; margin:10px 0; display:block}
  .artcontent{padding: 10px 0; font-size: 18px; line-height: 32px;}
</style>
