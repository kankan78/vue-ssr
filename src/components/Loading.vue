<template>
    <!-- main div placeholder -->
    <div id="loadingDiv">
        <div class="content_placeholder">
            <div class="mrec_placeholder"></div>
        </div>

        <!-- listing placeholder -->
        <div class="content_placeholder id_pcholder article-txt">
           <ul class="clearfix">
              <li>
                 <!-- <div class="thumb_slot"></div> -->
                 <div class="content_slot">
                    <div class="first_line line"></div>
                    <div class="second_line line"></div>
                 </div>
                 </br>
              </li>
              <li>
                 <!-- <div class="thumb_slot"></div> -->
                 <div class="content_slot">
                    <div class="first_line line"></div>
                    <div class="second_line line"></div>
                 </div>
                 </br>
              </li>
              <li>
                 <!-- <div class="thumb_slot"></div> -->
                 <div class="content_slot">
                    <div class="first_line line"></div>
                    <div class="second_line line"></div>
                 </div>
                 </br>
              </li>
              <li>
                 <!-- <div class="thumb_slot"></div> -->
                 <div class="content_slot">
                    <div class="first_line line"></div>
                    <div class="second_line line"></div>
                 </div>
                 </br>
              </li>
              <li>
                 <!-- <div class="thumb_slot"></div> -->
                 <div class="content_slot">
                    <div class="first_line line"></div>
                    <div class="second_line line"></div>
                 </div>
                 </br>
              </li>
              <li>
                 <!-- <div class="thumb_slot"></div> -->
                 <div class="content_slot">
                    <div class="first_line line"></div>
                    <div class="second_line line"></div>
                 </div>
                 </br>
              </li>
           </ul>
        </div>
    </div>
</template>


<style>
    #loadingDiv {
        display: none;
    }

    /*main div placeholder*/
    .content_placeholder .mrec_placeholder {
        width: 300px;
        height: 250px;
        background-color: #eee;
        animation: mrec_animation 1s infinite linear;
        margin: 0 auto
    }
    @-webkit-keyframes mrec_animation {
        from {
            box-shadow: inset 0 0 0 rgba(255,255,255,.3)
        }

        to {
            box-shadow: inset 80px 0 0 rgba(255,255,255,.3)
        }
    }
    @keyframes mrec_animation {
        from {
            box-shadow: inset 0 0 0 rgba(255,255,255,.3)
        }

        to {
            box-shadow: inset 300px 0 0 rgba(255,255,255,.3)
        }
    }

    /*listing placeholder*/
    .content_placeholder {
       /*border-bottom: 1px solid #ddd;*/
        /*border-top: 1px solid #ddd;*/
        padding: 10px 30px;
    }
    .article-txt ul {
        padding: 0px;
    }

    .article-txt ul li,.article-txt li {
        display: list-item;
        margin: 5px 0;
        list-style-type: none;
    }

    .content_placeholder .thumb_slot {
        width: 92px;
        height: 68px;
        float: right;
        background-color: #eee;
        animation: thumb_animation 1s infinite linear
    }
    @-webkit-keyframes thumb_animation {
        from {
            box-shadow: inset 0 0 0 rgba(255,255,255,.3)
        }

        to {
            box-shadow: inset 80px 0 0 rgba(255,255,255,.3)
        }
    }

    @keyframes thumb_animation {
        from {
            box-shadow: inset 0 0 0 rgba(255,255,255,.3)
        }

        to {
            box-shadow: inset 100px 0 0 rgba(255,255,255,.3)
        }
    }
    .content_placeholder .content_slot {
        /*float: left;*/
        margin-top: 2px
    }

    .content_placeholder .line {
        height: 8px;
        background-color: #eee
    }

    .content_placeholder .first_line {
        /*width: 186px;*/
        animation: first_line_animation 1s infinite linear
    }

    .content_placeholder .second_line {
        margin-top: 8px;
        width: 150px;
        animation: sec_line_animation 1s infinite linear
    }
    @-webkit-keyframes first_line_animation {
        from {
            box-shadow: inset 0 0 0 rgba(255,255,255,.3)
        }

        to {
            box-shadow: inset 200px 0 0 rgba(255,255,255,.3)
        }
    }

    @keyframes first_line_animation {
        from {
            box-shadow: inset 0 0 0 rgba(255,255,255,.3)
        }

        to {
            box-shadow: inset 200px 0 0 rgba(255,255,255,.3)
        }
    }

    @-webkit-keyframes sec_line_animation {
        from {
            box-shadow: inset 0 0 0 rgba(255,255,255,.3)
        }

        to {
            box-shadow: inset 150px 0 0 rgba(255,255,255,.3)
        }
    }

    @keyframes sec_line_animation {
        from {
            box-shadow: inset 0 0 0 rgba(255,255,255,.3)
        }

        to {
            box-shadow: inset 150px 0 0 rgba(255,255,255,.3)
        }
    }

</style>




