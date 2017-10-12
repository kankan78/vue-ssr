<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Navbar/>
    <Loading/>
    <router-view></router-view>
  </div>
</template>

<script>
  // import Navbar from '@/components/Navbar'
  const Navbar = () => import('@/components/Navbar')
  const Loading = () => import('@/components/Loading')

  export default {
    name: 'app',
    components: { Navbar ,Loading }
  }
</script>

<style>
        @font-face {
            font-family: 'NotoSansDevanagari Regular';
            src: url('http://m.navbharattimes.indiatimes.com//fonts/NotoSansDevanagari-Regular.eot');
            src: url('http://m.navbharattimes.indiatimes.com//fonts/NotoSansDevanagari-Regular.eot?#iefix') format('embedded-opentype'), url('http://m.navbharattimes.indiatimes.com//fonts/NotoSansDevanagari-Regular.woff') format('woff'), url('http://m.navbharattimes.indiatimes.com//fonts/NotoSansDevanagari-Regular.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
        }
        ul {
            margin: 0;
        }
        body,
        html {
            margin: 0;
            padding: 0;
            font-family: NotoSansDevanagari Regular, Arial, Helvetica, sans-serif;
            font-size: 16px;
            background: #f3f3f3;
            color: #000;
            max-width: 760px;
            margin: auto;
        }
        a {
            text-decoration: none;
            color: #000;
            display: inline-block;
        }
        img {
            border: 0;
            max-width: 100%;
        }
        .list {
            margin: 0;
            padding: 0;
            list-style-type: none;
        }
        .img_wrap {
            display: block;
            position: relative;
            line-height: 0;
            border: solid 1px #f5f5f5;
            box-sizing: border-box;
        }
        .img_wrap img {
            line-height: 0;
            height: auto;
            width: 100%;
        }
        .sprite {
            background-image: url(https://opt.toiimg.com/recuperator/img/nbt/m-54408487/Navbharat-Times.jpg);
            background-repeat: no-repeat;
        }
        .type_icon {
            width: 45px;
            height: 45px;
            position: absolute;
            margin: auto;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
        }
        .type_icon.slideshow {
            background-image: url(https://opt.toiimg.com/recuperator/img/nbt/m-54408487/Navbharat-Times.jpg);
            background-position: -82px -100px;
        }
        .box {
            background: white;
            padding: 10px;
            position: relative;
            word-wrap: break-word;
        }
        .view-more {
            color: #999;
            font-size: .9rem;
            text-align: center;
            display: block;
            margin: 2% auto 0;
            text-transform: uppercase;
            border: solid 1px #d8d8d8;
            padding: 6px;
        }
        .tbl {
            display: Table;
            width: 100%;
        }
        .tbl .tbl_row {
            display: table-row;
            vertical-align: middle;
        }
        .tbl .tbl_col {
            display: table-cell;
            vertical-align: middle;
        }
        .sectionheading {
            border-bottom: 5px solid #f5cc10;
            background-color: white;
            position: relative;
            margin: 0 -10px 6px;
        }
        .sectionheading h1 {
            padding: 11px 5px 8px 7px;
            margin: -2% 0 0;
            font-size: 1.2rem;
            font-weight: bold;
            word-wrap: break-word;
            line-height: 1.2rem;
        }
        .confirm_dialogue {
            padding: 5px;
            background-color: #b40001;
            margin: 1% 0;
        }
        .confirm_dialogue .wrap {
            min-width: 270px;
            margin: auto;
            height: 17px;
            text-align: center;
        }
        .confirm_dialogue span {
            display: inline-block;
            line-height: 0;
            height: 18px;
        }
        .confirm_dialogue .confirtext {
            background-position: 0 -35px;
            min-width: 190px;
            margin-right: 5px;
        }
        .confirm_dialogue .yes {
            background-position: 0 -58px;
            width: 27px;
            margin-right: 15px;
        }
        .confirm_dialogue .no {
            background-position: -31px -58px;
            width: 30px;
            margin-right: 0;
        }
        h1 {
            font-size: 1.4rem;
        }
        header {
            position: relative;
            background-color: #fff;
        }
        header h1 {
            margin: 0;
            padding: 0;
        }
        .logo {
            padding: 10px 0 10px 10px;
        }
        @media (max-width: 330px) {
            .logo {
                padding-left: 5px;
            }
        }
        .logo a {
            display: block;
            width: 80px;
            height: 25px;
        }
        .pagetitle {
            width: 100%;
            text-align: center;
        }
        .user-icon {
            border-left: solid 1px #e7e7e7;
        }
        .user-icon .icons {
            display: block;
            width: 16px;
            height: 16px;
            margin: 14px 16px;
        }
        .con_pushalert {
            display: none;
            background-color: #fff;
            padding: 15px 10px;
            width: 280px;
            position: fixed;
            margin: auto;
            top: 0;
            right: 0;
            left: 0;
            z-index: 10001;
        }
        .con_pushalert h4 {
            font-size: 1rem;
            margin: 0;
            padding: 0;
        }
        .con_pushalert p {
            font-size: .85rem;
            color: gray;
        }
        .con_pushalert .bell {
            width: 70px;
            vertical-align: top;
            padding-right: 10px;
        }
        .btn {
            display: inline-block;
            vertical-align: middle;
            font-size: .8rem;
            border-radius: 1px;
            border: solid 1px #cacad4;
            padding: 6px 10px 3px;
            min-width: 50px;
            text-align: center;
            line-height: 1.2rem;
            margin-right: 10px;
        }
        .btn.latter {
            color: #777;
            background-color: #f7f7f7;
            font-size: .8rem;
            font-weight: bold;
        }
        .btn.agree {
            background-color: #3a9600;
            color: #fff;
            border-color: #3a9600;
        }
        .list li {
            display: block;
        }
        .listview ul.list {
            margin: 0;
            padding: 0;
            list-style-type: none;
        }
        .listview ul.list li {
            display: block;
            margin-bottom: 2%;
            padding-bottom: 2%;
            border-bottom: 1px solid #dedede;
        }
        .listview ul.list li:last-child {
            border-bottom: 0;
            padding-bottom: 0;
            margin-bottom: 0;
        }
        .listview .img_wrap {
            float: left;
            width: 85px;
            margin-right: 2%;
            line-height: 0;
            min-height: 60px;
            text-align: center;
        }
        .listview .thumbanchor .img_wrap {
            border: 0;
            width: 100%;
        }
        .listview .thumbanchor .img_wrap .holder {
            float: left;
            width: 80px;
            margin-right: 2%;
            line-height: 0;
            min-height: 60px;
            text-align: center;
            position: relative;
            display: table-cell;
        }
        .listview .thumbanchor .title {
            display: table-cell;
        }
        .listview .img_wrap img {
            width: 100%;
            height: auto;
        }
        .listview .title {
            font-size: 1rem;
            line-height: 1.4rem;
            font-weight: 400;
            color: #000;
            text-align: left;
            word-break: break-word;
        }
        .listview .title.tbl_col {
            width: 100%;
            padding-left: 10px;
            vertical-align: top;
            display: table-cell;
            text-align: left;
        }
        .listview .img_wrap.tbl_col {
            width: 80px;
            vertical-align: top;
            display: table-cell;
        }
        .listview .clearfix {
            clear: both;
        }
        .clearfix:after {
            content: "";
            display: block;
            font-size: 0;
            height: 0;
            clear: both;
            visibility: hidden;
        }
        span.time-caption {
            display: block;
            line-height: 1.5rem;
            color: #9d9d9d;
            font-size: .8rem;
            margin-bottom: 5px;
        }
        .list li {
            display: block;
        }
        .type_icon.slideshow {
            background-image: url(/photo/54408487.cms);
            background-position: -82px -100px;
        }
        .hrnavigation {
            padding: 3px 5px 5px;
            height: 35px;
            background-color: #f5cc10;
            box-sizing: border-box;
            position: relative
        }
        .hrnavigation .scroll li {
            padding: 7.5px 10px 0;
            display: inline-block;
            line-height: 15px
        }
        .hrnavigation li a {
            color: #000;
            font-size: .95rem;
            vertical-align: middle;
            line-height: 1.1rem
        }
        .hrnavigation .scroll li sup {
            color: #c00;
            text-transform: uppercase;
            font: bold .6rem arial;
            margin-left: 3px
        }
        .hrnavigation .scroll .activelink {
            border-bottom: solid 2px #000
        }
        .hrnavigation .scroll ul li:not(.hrcustomlink):first-child {
            border-bottom: 0;
            font-weight: bold;
            padding-right: 0
        }
        .hrnavigation .scroll ul li:not(.hrcustomlink):first-child:after {
            content: "";
            display: inline-block;
            height: 8px;
            width: 8px;
            margin: auto 5px auto 5px;
            transition: all 350ms ease-in-out;
            border-top: solid 1px #000;
            border-right: solid 1px #000;
            transform: rotate(45deg);
            vertical-align: middle
        }
        #app {
            font-family: 'Avenir', Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: #2c3e50;
            background: #fff;
            min-height: 640px;
        }
        .topnews figure {
            margin: -8px -10px 10px;
            position: relative;
        }
        .topnews figcaption {
            color: #fff;
            position: absolute;
            display: block;
            margin: auto;
            bottom: 0;
            left: 0;
            right: 0;
            color: #fff;
            font-weight: normal;
            font-size: 1rem;
            padding: 12px 10px;
            background: rgba(0, 0, 0, 0);
            background: -webkit-gradient(linear, 0 0, 0 bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, .9)));
            background: -webkit-linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .9));
            background: -moz-linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .9));
            background: -ms-linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .9));
            background: -o-linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .9));
            background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .9));
        }
        .topnews figure a {
            color: #fff !important;
            font-size: 20px
        }
</style>
