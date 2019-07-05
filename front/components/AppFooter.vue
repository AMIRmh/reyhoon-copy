<template>
  <div>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <div class="_end">
      <div class="_end-top">
        <div class="_end-top-1">
          <ul class="_nostyle">
            <li>اپلیکیشن های موبایل</li>
            <li>
              <div class="_playstores-pics _right">
                <ul class="_nostyle">
                  <li ><a href="#"><img class="_png" src="../../public/assets/cafe.png"></a> </li>
                  <li ><a href="#"><img class="_png" src="../../public/assets/google.png"></a></li>
                  <li ><a href="#"><img class="_png" src="../../public/assets/sib.png"></a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="_end-top-2">
          <ul class="_nostyle">
            <li>پشتیبانی ریحون</li>
            <li><a href="#">سوالات متداول</a> </li>
            <li><a href="#">تماس با پشتیبانی</a> </li>
            <li><a href="#">قوانین و مقررات</a> </li>

          </ul>
        </div>
        <div class="_end-top-3">
          <ul class="_nostyle">
            <li>رستوران ها</li>
            <li><a href="#">ثبت رستوران</a> </li>
          </ul>
        </div>
        <div class="_end-top-4">
          <ul class="_nostyle">
            <li>تماس با ریحون</li>
            <li><a href="#">درباره ریحون</a> </li>
            <li><a href="#">تماس با ما</a> </li>
            <li><a href="#">وبلاگ ریحون</a> </li>
          </ul>
        </div>
        <div class="_end-top-5">
          <p>مراقبت و محافظت از حساب کاربری و رمزعبور هر کاربر بر عهده کاربر است. ریحون سریعترین راه سفارش آنلاین غذا است. منوی عکس‌دار رستوران‌های اطرافتان را بر اساس مکان خود به راحتی مشاهده کنید و سفارش دهید.</p>
          <a href="#">لیست رستوران ها</a>
        </div>
      </div>
      <div class="_end-bot">
        <img src="../../public/assets/enamad.png"/>
        <img src="../../public/assets/kasbokar.png"/>
      </div>
    </div>

    <div class="_end-end">
      <div>
        <ul class="_nostyle">
          <li class="_some"><i class="fab fa-google-plus-g"></i></li>
          <li class="_some"><i class="fab fa-instagram"></i></li>
          <li class="_some"><i class="fab fa-twitter"></i></li>
          <li class="_some"><i class="fab fa-facebook-f"></i></li>
          <li class="_some"><i class="fab fa-telegram-plane"></i></li>
        </ul>
      </div>
      <p>
        © 2017, Reyhoon, All Rights Reserved.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
  ._end {
    background-color: #1f1f1f;
    height: 30rem;
    direction: ltr;
  }

  ._end-top {
    display: flex;
    flex-wrap: nowrap;
  }

  ._end-top-1 {
    border-top-color: yellow;
    border-style: solid;
    border-width: 2px 0 0;
    direction: rtl;
    margin-left: 4rem;
    color: white;
    font-size: .8rem;
    margin-top: 5rem;
    font-family: Shabnam;
    width: 10rem;
  }

  ._end-top-1 > ul > li {
    margin-right: -.5rem;
    margin-top: 1rem;
  }

  ._png {
    width: 7rem;
    height: 2rem;
  }

  ._nostyle {
    margin-right: -1rem;
    list-style-type: none;
  }

  ._right {
    direction: ltr;
  }


  ._end-top-2 {
    border-top-color: red;
    border-style: solid;
    border-width: 2px 0 0;
    direction: rtl;
    margin-left: 4rem;
    color: white;
    font-size: .8rem;
    margin-top: 5rem;
    font-family: Shabnam;
    width: 10rem;
  }

  ._end-top-2  > ul > li {
    margin-right: -.5rem;
    margin-top: 1rem;
  }

  ._end-top-2 > ul > li > a {
    color: gray;
  }

  ._end-top-3 {
    border-top-color: deeppink;
    border-style: solid;
    border-width: 2px 0 0;
    direction: rtl;
    margin-left: 4rem;
    color: white;
    font-size: .8rem;
    margin-top: 5rem;
    font-family: Shabnam;
    width: 10rem;
  }

  ._end-top-3  > ul > li {
    margin-right: -.5rem;
    margin-top: 1rem;
  }

  ._end-top-3 > ul > li > a {
    color: gray;
  }


  ._end-top-4 {
    border-top-color: purple;
    border-style: solid;
    border-width: 2px 0 0;
    direction: rtl;
    margin-left: 4rem;
    color: white;
    font-size: .8rem;
    margin-top: 5rem;
    font-family: Shabnam;
    width: 10rem;
  }

  ._end-top-4  > ul > li {
    margin-right: -.5rem;
    margin-top: 1rem;
  }

  ._end-top-4 > ul > li > a {
    color: gray;
  }


  ._end-top-5 {
    border-top-color: #1f1f1f;
    border-style: solid;
    border-width: 2px 0 0;
    direction: rtl;
    margin-left: 4rem;
    color: white;
    font-size: .8rem;
    margin-top: 5rem;
    font-family: Shabnam;
    width: 15rem;
  }

  ._end-top-5  > p {
    margin-right: -.5rem;
    margin-top: 1rem;
    color: gray;
  }

  ._end-top-5 >  a {
    color: blue;
    text-decoration: underline;
  }


  ._end-bot {
    margin-top: 4rem;
    display: flex;
    justify-content: center;
  }


  ._end-end {
    background-color: black;
    height: 7rem;
    display: flex;
    justify-content: space-between;
    color: darkgray;
    font-size: 1.2rem;
    direction: ltr;
  }

  ._end-end > p {
    font-size: .9rem;
    line-height: 5rem;
  }

  ._some {
    display: inline-block;
    padding: 1rem;
  }

  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }

  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
</style>
