<template>
  <div id="articlelist" class="box">
    <div class="sectionheading"><h1 v-if="dataset[0]">{{dataset[0].tn}}</h1></div>
    <div class="listview">
      <ul class="list">
        <li v-for = "(item, index) in dataset" v-if = "item.tn === 'news'" :class="chkfirstart(index)">
            <a :href="urlCreation(item.id)" v-on:click="changeRoute(urlCreation(item.id), $event)" class="tbl_row">
              <div class="img_wrap tbl_col">
                <img :src="imgCreation(item.imageid)" width="80" height="60" class="dummy-img">
              </div>
              <span class="title tbl_col">{{item.hl}}</span>
            </a>            
            <span class="time-caption">{{item.dl}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  import route_mixin from '@/mixins/route-mixin'
  // import {articlelistdata} from '@/database/data'

  export default {
    name: 'articlelist',
    // props:[eurl],
    data () {
      return {
        dataset: {}
      }
    },
    head () {
      return {
        title: 'Articlelist'
      }
    },
    methods: {
      imgCreation: function (msid) {
        return msid ? 'https://opt.toiimg.com/recuperator/img/nbt/m-' + msid  + ',r-1,w-80,h-60/Navbharat-Times.jpg' : 'https://opt.toiimg.com/recuperator/img/nbt/m-47095658,r-4,w-250,h-172/NBT.jpg'
      },
      urlCreation: function (seo,msid) {
        return msid ? 'seo/articleshow/' + msid  + '.cms' : 'seo/articleshow/61030583.cms'
      },
      chkfirstart: function(index){
        return index==0 ? 'tbl fistpic' : 'tbl'
      },
      printdata: function () {
        console.log(this.$route.params.msid + " entered articlelist --- " + this.$route.query.msid );
      },
      fetchData:function(){
        var vm = this;
        var msid = this.$route.query.msid || this.$route.params.msid;
        vm.$data.dataset = {}

        if(msid){
              fetch('http://navbharattimes.indiatimes.com/feeds/appnavigationlistv6.cms?tag=alrtdf&feedtype=json&msid='+msid).then(function(response){
                     response.json().then(function(data){
                        // vm.$data.dataset = data.wdt_articlelist.articlelistroot;
                        vm.$data.dataset = data.items;
                        console.log(vm.$data.dataset);
                    });
              });
        }
      }
    },
    created() {
      this.printdata();
      this.fetchData();
    },
    watch:{
      '$route':'fetchData' // keep watching route change , and accordingly fetch data
    }
    ,mixins: [route_mixin]
  }
</script>

<!-- scoped is used when css specific for this template -->
<style scoped>
  .fistpic{border-bottom: 0 !important; padding-bottom: 0 !important; position: relative;}
  .fistpic a {display: block !important; width: 100% !important; float: none !important}
  .fistpic .movie-name,.fistpic .movie-name a,.fistpic .movie-name a:visited,.fistpic .casting {color: #fff}
  .fistpic .img_wrap {width: 100% !important; float: none;border: 0;display: block !important}
  .fistpic .title {position: absolute; display: block; margin: auto; bottom: 0; left: 0; right: 0; color: #fff; font-weight: 700; font-size:18px; line-height:25px; padding: 12px 10px;
    box-sizing: border-box;
    background: rgba(0,0,0,0);
    background: -webkit-gradient(linear,0 0,0 bottom,from(rgba(0,0,0,0)),to(rgba(0,0,0,.9)));
    background: -webkit-linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.9));
    background: -moz-linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.9));
    background: -ms-linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.9));
    background: -o-linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.9));
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.9))
  }


  span.time-caption {margin-left: 90px;}
</style>
