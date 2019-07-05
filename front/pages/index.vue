<template>
  <div>

    <div class="_menu-background">
      <div class="_menu">
        <img src="../../public/assets/logo.svg"/>
        <div class="_menu-big-p">
          <h1>سفارش آنلاین غذا از بهترین رستوران‌ها و فست‌فودها</h1>
        </div>
        <div>
          <p>برای دیدن لیست رستوران‌ها و فست‌فود‌هایی که به شما سرویس می‌دهند، منطقه خود را وارد کنید.</p>
        </div>
        <div class="_input-list">

          <div class="_city-menu">
            <svg class="_arrow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 20">
              <path fill="currentColor" fill-rule="evenodd" d="M9.17 19.708L.607 11.444a1.95 1.95 0 0 1 0-2.827L9.232.292c.4-.385 1.048-.39 1.454-.01a.976.976 0 0 1 .011 1.425L2.803 9.324a.975.975 0 0 0 0 1.414l7.831 7.557a.974.974 0 0 1 0 1.413c-.405.39-1.06.39-1.464 0z">
              </path>
            </svg>
            <input type="text" value="" placeholder="شهر">
          </div>

          <div class="_location-menu">
            <fieldset>
              <legend>منطقه خود را وارد کنید</legend>
              <svg class="_arrow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 20">
                <path fill="currentColor" fill-rule="evenodd" d="M9.17 19.708L.607 11.444a1.95 1.95 0 0 1 0-2.827L9.232.292c.4-.385 1.048-.39 1.454-.01a.976.976 0 0 1 .011 1.425L2.803 9.324a.975.975 0 0 0 0 1.414l7.831 7.557a.974.974 0 0 1 0 1.413c-.405.39-1.06.39-1.464 0z">
                </path>
              </svg>
              <input type="text" value="" placeholder="مثلا نیاوران">
            </fieldset>
          </div>

          <button>
            <i class="fas fa-search"></i>
          </button>
        </div>
        <p>
          <i class="fas fa-history"></i>
          آخرین جستجو: تهران، شیخ هادی ، چهارراه ولیعصر
        </p>

      </div>
    </div>

    <div class="_instruction">
      <p>غذایتان را نوش‌جان کنید</p>
      <p>غذای خود را انتخاب کنید</p>
      <p>شهر و منطقه خود را وارد کنید</p>
      <div>
        <p>
          درب منزل یا حضوری از خود رستوران سفارشتان را تحویل بگیرید.
        </p>
        <div class="_instruction-pics">
          <img src="../../public/assets/rey-bag.png"/>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradientHeart" gradientUnits="userSpaceOnUse"><stop stop-color="#8B00AF" offset="0%"></stop><stop stop-color="#D40062" offset="90%"></stop><stop stop-color="#FF0613" offset="100%"></stop></linearGradient></defs><path fill="white" fill-rule="evenodd" d="M91.235 15.973a25.732 25.732 0 0 0-18.353-8.8A35.802 35.802 0 0 0 50 18.261 35.861 35.861 0 0 0 27.059 7.232a25.438 25.438 0 0 0-18.294 8.741c-11.662 11.77-11.662 30.706 0 42.475 19.764 17.893 30.059 27.28 35.294 32.09a8.723 8.723 0 0 0 11.765 0l35.294-32.09c11.694-11.737 11.747-30.673.117-42.475zM86.53 53.58C71.647 67.248 62.176 75.813 56.118 81.328l-4.647 4.224c-.765.7-1.941.7-2.706 0-5.412-4.81-15.647-14.139-35.294-31.973-8.968-9.125-8.968-23.729 0-32.854a18.9 18.9 0 0 1 13.588-6.746 29.44 29.44 0 0 1 18.412 9.269L50 27.355l4.588-4.107a29.026 29.026 0 0 1 18.294-9.328 19.194 19.194 0 0 1 13.53 6.805c9 9.093 9.053 23.697.117 32.854z"></path></svg>

        </div>

      </div>
      <div>
        <p>
          غذایی که می‌خواهید را انتخاب کنید و بدون هزینه اضافی سفارش خود را ثبت کنید.
        </p>
        <div class="_instruction-pics">
          <img src="../../public/assets/kabab.png"/>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradientHeart" gradientUnits="userSpaceOnUse"><stop stop-color="#8B00AF" offset="0%"></stop><stop stop-color="#D40062" offset="90%"></stop><stop stop-color="#FF0613" offset="100%"></stop></linearGradient></defs><path fill="white" fill-rule="evenodd" d="M91.235 15.973a25.732 25.732 0 0 0-18.353-8.8A35.802 35.802 0 0 0 50 18.261 35.861 35.861 0 0 0 27.059 7.232a25.438 25.438 0 0 0-18.294 8.741c-11.662 11.77-11.662 30.706 0 42.475 19.764 17.893 30.059 27.28 35.294 32.09a8.723 8.723 0 0 0 11.765 0l35.294-32.09c11.694-11.737 11.747-30.673.117-42.475zM86.53 53.58C71.647 67.248 62.176 75.813 56.118 81.328l-4.647 4.224c-.765.7-1.941.7-2.706 0-5.412-4.81-15.647-14.139-35.294-31.973-8.968-9.125-8.968-23.729 0-32.854a18.9 18.9 0 0 1 13.588-6.746 29.44 29.44 0 0 1 18.412 9.269L50 27.355l4.588-4.107a29.026 29.026 0 0 1 18.294-9.328 19.194 19.194 0 0 1 13.53 6.805c9 9.093 9.053 23.697.117 32.854z"></path></svg>

        </div>

      </div>
      <div>
        <p>
          منوی مورد علاقه خود را از بین بیش از 4000 رستوران خوب در تهران و شهرستان‌ها جستجو کنید.
        </p>
        <div class="_instruction-pics">
          <img src="../../public/assets/azadi.png"/>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradientHeart" gradientUnits="userSpaceOnUse"><stop stop-color="#8B00AF" offset="0%"></stop><stop stop-color="#D40062" offset="90%"></stop><stop stop-color="#FF0613" offset="100%"></stop></linearGradient></defs><path fill="white" fill-rule="evenodd" d="M91.235 15.973a25.732 25.732 0 0 0-18.353-8.8A35.802 35.802 0 0 0 50 18.261 35.861 35.861 0 0 0 27.059 7.232a25.438 25.438 0 0 0-18.294 8.741c-11.662 11.77-11.662 30.706 0 42.475 19.764 17.893 30.059 27.28 35.294 32.09a8.723 8.723 0 0 0 11.765 0l35.294-32.09c11.694-11.737 11.747-30.673.117-42.475zM86.53 53.58C71.647 67.248 62.176 75.813 56.118 81.328l-4.647 4.224c-.765.7-1.941.7-2.706 0-5.412-4.81-15.647-14.139-35.294-31.973-8.968-9.125-8.968-23.729 0-32.854a18.9 18.9 0 0 1 13.588-6.746 29.44 29.44 0 0 1 18.412 9.269L50 27.355l4.588-4.107a29.026 29.026 0 0 1 18.294-9.328 19.194 19.194 0 0 1 13.53 6.805c9 9.093 9.053 23.697.117 32.854z"></path></svg>

        </div>

      </div>

    </div>

    <div class="_the-bests">
      <h2>رستوران‌ها و فست‌فود‌های برتر ماه بر اساس امتیازدهی کاربران</h2>

      <div>
        <div class="_the-bests-pics" id="bestspic1">
          <!--                <img src="../../public/assets/baget.jpeg"/>-->
        </div>
        <div class="_the-bests-name" >
          <h2 id="bestsname1"></h2>
        </div>
        <div class="_the-bests-rate">
          <p id="bestsnumrate1"></p>
          <div>
            <i class="fa fa-star star-mark"></i>
            <i class="fa fa-star star-mark"></i>
            <i class="fa fa-star star-mark"></i>
            <i class="fa fa-star star-mark"></i>
            <i class="fa fa-star star-empty"></i>
          </div>
          <p id="bestsrate1"></p>
        </div>
        <div class="_the-bests-food">
          <ul id="bestsfood1">
            <!--                    <li>فست فود</li>-->
            <!--                    <li>پیتزا</li>-->
            <!--                    <li>برگر</li>-->
            <!--                    <li>ساندویچ</li>-->
          </ul>
        </div>
        <div class="_the-bests-address">
          <address id="bestsaddress1"></address>
        </div>
        <button>شروع سفارش</button>
      </div>
      <div>
        <div class="_the-bests-pics" id="bestspic2">
          <!--                <img src="../../public/assets/shila.jpeg"/>-->
        </div>
        <div class="_the-bests-name">
          <h2 id="bestsname2"></h2>
        </div>
        <div class="_the-bests-rate">
          <p id="bestsnumrate2"></p>
          <div>
            <i class="fa fa-star star-mark"></i>
            <i class="fa fa-star star-mark"></i>
            <i class="fa fa-star star-mark"></i>
            <i class="fa fa-star star-mark"></i>
            <i class="fa fa-star star-empty"></i>
          </div>
          <p id="bestsrate2"></p>
        </div>
        <div class="_the-bests-food">
          <ul id="bestsfood2">
            <!--                    <li>فست فود</li>-->
            <!--                    <li>هات داگ</li>-->
            <!--                    <li>پیتزا</li>-->
            <!--                    <li>برگر</li>-->
          </ul>
        </div>
        <div class="_the-bests-address">
          <address id="bestsaddress2">ولیعصر، مطهری، فتحی شقاقی، زیر برج بلورین</address>
        </div>
        <button>شروع سفارش</button>
      </div>
      <div>
        <div class="_the-bests-pics" id="bestspic3">
          <!--                <img src="../../public/assets/pizza-hot.jpeg"/>-->
        </div>
        <div class="_the-bests-name">
          <h2 id="bestsname3"></h2>
        </div>
        <div class="_the-bests-rate">
          <p id="bestsnumrate3"></p>
          <div>
            <i class="fa fa-star star-mark"></i>
            <i class="fa fa-star star-mark"></i>
            <i class="fa fa-star star-mark"></i>
            <i class="fa fa-star star-mark"></i>
            <i class="fa fa-star star-empty"></i>
          </div>
          <p id="bestsrate3"></p>
        </div>
        <div class="_the-bests-food">
          <ul id="bestsfood3">
            <!--                    <li>فست فود</li>-->
            <!--                    <li>هات داگ</li>-->
            <!--                    <li>پیتزا</li>-->
            <!--                    <li>برگر</li>-->
          </ul>
        </div>
        <div class="_the-bests-address">
          <address id="bestsaddress3"></address>
        </div>
        <button>شروع سفارش</button>
      </div>
    </div>

    <div class="_good-res">
      <h3>رستوران های خوب تهران در ریحون</h3>
      <div id="goodres">
        <a href="#">
          <!--                <img src="../../public/assets/amolai.png"/>-->
          <!--                <p>آمولای</p>-->
        </a>
        <a href="#">
          <!--                <img src="../../public/assets/rad.jpeg"/>-->
          <!--                <p>تهیه غذای راد</p>-->
        </a>
        <a href="#">
          <!--                <img src="../../public/assets/shandiz.jpeg"/>-->
          <!--                <p>شاندیز جردن</p>-->
        </a>
        <a href="#">
          <!--                <img src="../../public/assets/vitrin.jpeg"/>-->
          <!--                <p>ویترین</p>-->
        </a>
        <a href="#">
          <!--                <img src="../../public/assets/koo.jpeg"/>-->
          <!--                <p>رستوران کوبابا</p>-->
        </a>
        <a href="#">
          <!--                <img src="../../public/assets/joo.jpg"/>-->
          <!--                <p>جو گریل فود</p>-->
        </a>
        <a href="#">
          <!--                <img src="../../public/assets/lanjin.jpeg"/>-->
          <!--                <p>لانجین</p>-->
        </a>
        <a href="#">
          <!--                <img src="../../public/assets/jenaro.jpeg"/>-->
          <!--                <p>جنارو</p>-->
        </a>
        <a href="#">
          <!--                <img src="../../public/assets/shirin.jpeg"/>-->
          <!--                <p>شیرین پلو</p>-->
        </a>
        <a href="#">
          <!--                <img src="../../public/assets/amir.jpeg"/>-->
          <!--                <p>امیر شکلات</p>-->
        </a>
        <a href="#">
          <!--                <img src="../../public/assets/narije.jpeg"/>-->
          <!--                <p>کترینگ و تشریفات ناریجه</p>-->
        </a>
        <a href="#">
          <!--                <img src="../../public/assets/tomo.jpeg"/>-->
          <!--                <p>تومو</p>-->
        </a>
      </div>
    </div>

    <div class="_what-need">
      <h2>غذا چی میل دارید؟</h2>
      <p>صبحانه، ناهار، شام یا هر چیزی که میل دارید را انتخاب کنید</p>
      <div class="_what-need-foods" id="whatneedfood">
        <div class="_what-need-kabab">
          <div class="_what-need-back">
            <!--                    <p>کباب<br> ۱۸۳۶ رستوران فعال</p>-->
          </div>
        </div>
        <div class="_what-need-pizza">
          <div class="_what-need-back">
            <!--                    <p>پیتزا<br> ۲۴۰۸ رستوران فعال</p>-->
          </div>
        </div>
        <div class="_what-need-burger">
          <div class="_what-need-back">
            <!--                    <p>برگر<br> ۲۴۵۲ رستوران فعال</p>-->
          </div>
        </div>
        <div class="_what-need-sand">
          <div class="_what-need-back">
            <!--                    <p>ساندویچ<br> ۲۷۴۲ رستوران فعال</p>-->
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <div class="_more-foods">
      <p>انتخاب غذاهای بیشتر</p>
      <div id="morefoods">
        <!--            <a href="#">-->
        <!--                پاستا-->
        <!--            </a>-->
        <!--            <a href="#">-->
        <!--                چلوکباب-->
        <!--            </a>-->
        <!--            <a href="#">-->
        <!--                سوخاری-->
        <!--            </a>-->
        <!--            <a href="#">-->
        <!--                فست فود-->
        <!--            </a>-->
        <!--            <a href="#">-->
        <!--                غذای ایرانی-->
        <!--            </a>-->
        <!--            <a href="#">-->
        <!--                سالاد-->
        <!--            </a>-->
        <!--            <a href="#">-->
        <!--                خوراک-->
        <!--            </a>-->
        <!--            <a href="#">-->
        <!--                غذای پلویی-->
        <!--            </a>-->
        <!--            <a href="#">-->
        <!--                خورشت-->
        <!--            </a>-->
        <!--            <a href="#">-->
        <!--                آبمیوه طبیعی-->
        <!--            </a>-->
        <!--            <a href="#">-->
        <!--                غذای دریایی-->
        <!--            </a>-->
        <!--            <a href="#">-->
        <!--                سوپ-->
        <!--            </a>-->
        <!--            <a href="#">-->
        <!--                صبحانه-->
        <!--            </a>-->
        <!--            <a href="#">-->
        <!--                بشقاب-->
        <!--            </a>-->
        <!--            <a href="#">-->
        <!--                استیک-->
        <!--            </a>-->
        <!--            <a href="#">-->
        <!--                ماهی-->
        <!--            </a>-->

      </div>
    </div>
  </div>
</template>

<script>
import main from '../assets/js/jscript-main.js'

export default {
  async created() {
    main.start();
  }
}
</script>

<style>
  ._header {
    display: grid;
    grid-template-columns: 80% 10% 20%;
    width: 100%;
    height: 3.5rem;
    border-image: linear-gradient(270deg,#8b00af,#d40062,#ff0613) 1;
    border-bottom-style: solid;
    border-image-repeat: stretch;
    border-width: 0 0 .2rem;
    margin: 0 auto;
    justify-content: center;
    align-content: space-between;
  }

  ._header > ul {
    list-style-type: none;
    display: inline-block;
    -webkit-transform: translate(0, 0.2rem);
    -moz-transform: translate(0, 0.2rem);
    -ms-transform: translate(0, 0.2rem);
    -o-transform: translate(0, 0.2rem);
    transform: translate(0, 0.2rem);
  }

  ._header > ul > li {
    direction: rtl;
    display: inline-block;
  }

  ._header > div > a > img:hover {
    padding-left: 5.5rem;
    width: 7.5rem;
    height: 4.5rem;
    position: relative;
    transform: translate(0, -.5rem);
    cursor: pointer;
  }

  ._header > div > a > img {
    padding-left: 5.5rem;
    width: 7.5rem;
    height: 4.5rem;
    position: relative;
    transform: translate(0, -.5rem);
    cursor: pointer;
  }

  ._header-guide {
    direction: rtl;
    position: relative;
    -webkit-transform: translate(0, 1.2rem);
    -moz-transform: translate(0, 1.2rem);
    -ms-transform: translate(0, 1.2rem);
    -o-transform: translate(0, 1.2rem);
    transform: translate(0, 1.2rem);
  }


  .links {
    text-decoration: none;
    color: #4a4a4a;
    /*cursor: pointer;*/
  }

  .links:hover {
    text-decoration: none;
    color: #d40062;
    cursor: pointer;
  }

  ._menu-background {
    height: 27.9rem;
    width: 100%;
    margin-top: 3rem;
    background-image: url("../../public/assets/menu-bg.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transform: translate(-11.5rem, 0);
    -moz-transform: translate(-11.5rem, 0);
    -ms-transform: translate(-11.5rem, 0);
    -o-transform: translate(-11.5rem, 0);
    transform: translate(-11.5rem, 0);
  }

  ._menu {
    margin-top: -3rem;
    transform: translate(12rem, 0);
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 12rem 3rem 3rem;
    justify-content: center;
    grid-gap: 1rem;
  }

  ._menu > img {
    /*position: relative;*/
    /*padding-left: 6rem;*/
    margin: auto;
    height: 15rem;
    width: 15rem;

    /*-webkit-transform: translate(12rem, -2rem);*/
    /*-moz-transform: translate(12rem, -2rem);*/
    /*-ms-transform: translate(12rem, -2rem);*/
    /*-o-transform: translate(12rem, -2rem);*/
    /*transform: translate(12rem, -2rem);*/

  }

  ._menu > div > p {
    font-size: .8rem;
    direction: rtl;
    text-align: center;
  }

  ._menu-big-p > h1 {
    text-align: center;
    font-size: 1.5rem;
    direction: rtl;
  }

  ._input-list {
    padding: .3rem;
    background-color: #fff;
    border-radius: .7rem;
    box-shadow: 0 0.7rem 3rem rgba(0,0,0,.15);
    display: grid;
    grid-template-columns: 13rem 34rem 3rem;
    direction: rtl;
    width: 50rem;
    justify-content: flex-end;
    align-content: center;

  }

  ._location-menu > fieldset {


    border: 1px solid #dedede;
    border-radius: 0px 8px 8px 0px;
    text-align: right;
    -webkit-transform: translate(0rem , -.3rem);
    -moz-transform: translate(0rem , -.3rem);
    -ms-transform: translate(0rem , -.3rem);
    -o-transform: translate(0rem , -.3rem);
    transform: translate(0rem , -.3rem);
  }
  ._location-menu > fieldset > legend {
    font-size: .8rem;
    text-align: center;
    color: #9a9a9a;
  }

  ._location-menu > fieldset > input {
    border: none;
    text-align: right;
    font-family: Shabnam;
    font-size: 1.1rem;
    height: 1rem;
    -webkit-transform: translate(-.7rem, 0);
    -moz-transform: translate(-.7rem, 0);
    -ms-transform: translate(-.7rem, 0);
    -o-transform: translate(-.7rem, 0);
    transform: translate(-.7rem, 0);


  }

  ._city-menu {
    border: 1px solid #dedede;
    border-radius: 8px 8px 8px 8px;
    text-align: right;
    height: 2.84rem;
    -webkit-transform: translate(0, .5rem);
    -moz-transform: translate(0, .5rem);
    -ms-transform: translate(0, .5rem);
    -o-transform: translate(0, .5rem);
    transform: translate(0, .5rem);
  }

  ._city-menu > input {
    border: none;
    text-align: right;
    transform: translate(-1.8rem, .7rem);
    font-size: 1.1rem;
    width: 8rem;
    font-family: Shabnam;
  }

  ._city-menu > svg {
    color: #9a9a9a;
    vertical-align: middle;
    width: 0.6rem;
    transform: translate(-1rem, .8rem) rotate(270deg);
  }

  ._input-list > button {
    display: inline-block;
    margin-right: -.2rem;
    margin-top: .5rem;
    width: 3rem;
    height: 3rem;
    border: none;
    border-radius: 8px 0 0 8px;
    background-image: -webkit-linear-gradient(45deg, #d40062 30%, #8e00ab 90%);
    background-image: -moz-linear-gradient(45deg, #d40062 30%, #8e00ab 90%);
    background-image: -o-linear-gradient(45deg, #d40062 30%, #8e00ab 90%);
    background-image: linear-gradient(45deg, #d40062 30%, #8e00ab 90%);
  }

  ._input-list > button > i {
    color: #fff;
    font-size: 1.4rem;
  }

  ._arrow-svg {
    color: #9a9a9a;
    vertical-align: middle;
    width: 0.6rem;
    transform: rotate(270deg);
  }

  ._menu > p {
    direction: rtl;
    font-size: .8rem;
  }

  ._instruction {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: auto auto auto;
    /*grid-template-rows: ;*/
    justify-content: space-evenly;
    /*align-content: center;*/
  }

  ._instruction > div {
    padding: 15px;
    background-color: white;
    box-shadow: 2px 5px 9px #aaa;
    display: grid;
    height: 6rem;
    grid-template-columns: 9rem 4rem;
  }

  ._instruction > div > p {
    font-family: Shabnam;
    font-size: .8rem;
    direction: rtl;
    color: #9a9a9a;
  }

  ._instruction-pics > img {
    width: 3.5rem;
    height: 3.5rem;
    -webkit-transform: translate(.4rem, 0);
    -moz-transform: translate(.4rem, 0);
    -ms-transform: translate(.4rem, 0);
    -o-transform: translate(.4rem, 0);
    transform: translate(.4rem, 0);
  }

  ._instruction > p {
    color: #9a9a9a;
    direction: rtl;
  }

  ._instruction-pics > svg {
    /*position: absolute;*/
    width: 20px;
    margin-top: 28px;
    margin-left: 28px;
    border: 2px solid white;
    border-radius: 50%;
    padding: 4px;
    background-image: linear-gradient(45deg, #d40062 30%, #8e00ab 90%);
    -webkit-transform: translate(.5rem, -3.5rem);
    -moz-transform: translate(.5rem, -3.5rem);
    -ms-transform: translate(.5rem, -3.5rem);
    -o-transform: translate(.5rem, -3.5rem);
    transform: translate(.5rem, -3.5rem);
  }

  ._the-bests {
    margin-top: 10rem;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-evenly;
  }

  ._the-bests > h2 {
    grid-column: 1 / 4;
    font-family: Shabnam;
    text-align: center;
    direction: rtl;
  }

  ._the-bests > div {
    width: 15rem;
    height: 20rem;
    background-color: white;
    padding: 2rem 1rem;
    margin: 0 1rem;
    text-align: center;
    box-shadow: 0 0 5px #ccc;
    transition: 0.2s;
    border-radius: 5px;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 4rem 6rem 2rem 3rem;
    justify-content: space-evenly;
    color: #aaa;
  }

  ._the-bests > div:hover {
    box-shadow: 0 0 2rem #acacac;
  }

  ._the-bests-pics {

  }

  ._the-bests-pics > img {
    background-color: white;
    text-align: center;
    transition: 0.2s;
    border-radius: 5px;
    box-shadow: 0 0.25rem 1rem #ccc;
    margin: 0;
    width: 5rem;
    height: 5rem;
  }


  ._the-bests-name > h2 {
    padding-top: 1rem;
    direction: rtl;
    color: black;
    /*margin: 0;*/
    /*margin-bottom: -122rem;*/
  }

  ._the-bests-rate {
    margin-top: .5rem;
    display: grid;
    grid-template-columns: 2rem auto 2rem;
    justify-content: center;
    align-content: center;
    font-size: .8rem;
  }

  ._the-bests-rate > div {
    margin: auto;
  }

  ._the-bests-rate > div > i {
    font-size: .9rem;
  }

  ._the-bests-rate > p {
    padding: -10rem;
  }

  .star-mark {
    color: #ffc430;
  }


  ._the-bests-food > ul {
    font-size: .7rem;
    direction: rtl;
    /*margin: auto;*/
    padding-left: 1rem;
  }


  ._the-bests-food > ul > li {
    display: inline-block;
  }


  ._the-bests-food > ul > li:not(:last-child):after {
    content: "";
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 1rem;
    margin: 0.6rem .4rem auto .4rem;
    background-color: #777;
  }

  ._the-bests-address > address {
    font-size: .8rem;
    position: relative;
  }

  ._the-bests-address > address:after {
    content: "";
    top: 0;
    left: 0;
    width: 50px;
    height: 100%;
    display: block;
    position: absolute;
    background: -webkit-gradient(linear,left top,right top,color-stop(30%,#fff),to(hsla(0,0%,100%,0)));
    background: -webkit-linear-gradient(left,#fff 30%,hsla(0,0%,100%,0));
    background: -o-linear-gradient(left,#fff 30%,hsla(0,0%,100%,0) 100%);
    background: linear-gradient(90deg,#fff 30%,hsla(0,0%,100%,0));
  }

  ._the-bests > div > button {
    font-size: 0.8rem;
    width: 9rem;
    padding: 0.4rem 0;
    border: .1rem solid #d40062;
    background-color: white;
    color: #d40062;
    border-radius: 26px;
    font-family: Shabnam;
    margin: auto;
  }


  ._good-res {
    margin-top: 10rem;
    height: 35rem;
    width: 100%;
    background-image: url("../../public/assets/good-res.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    direction: ltr;
  }

  ._good-res > h3 {
    direction: rtl;
    font-family: Shabnam;
    -webkit-transform: translate(-3rem, 5rem);
    -moz-transform: translate(-3rem, 5rem);
    -ms-transform: translate(-3rem, 5rem);
    -o-transform: translate(-3rem, 5rem);
    transform: translate(-3rem, 5rem);
  }

  ._good-res > div {
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: space-evenly;
    width: 50%;
    -webkit-transform: translate(40rem, 8rem);
    -moz-transform: translate(40rem, 8rem);
    -ms-transform: translate(40rem, 8rem);
    -o-transform: translate(40rem, 8rem);
    transform: translate(40rem, 8rem);

  }

  ._good-res > div > a > img{
    width: 80px;
    box-shadow: 0 0 8px #ccc;
    -webkit-box-shadow: 0 0 8px #ccc;
    transition: 0.25s;
    -webkit-transition: 0.25s;
    border: 1px solid #bbbbbb;
    border-radius: 4px;
  }

  ._good-res > div > a > p {
    margin-top: -.4rem;
    font-family: Shabnam;
    font-weight: bold;
    direction: rtl;
  }

  a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: none;
    color: black;
    font-family: Shabnam;
    font-size: .8rem;
    text-align: center;
  }


  ._what-need {
    font-family: Shabnam;
  }

  ._what-need > h2 {
    margin-top: 4rem;
    text-align: center;
  }

  ._what-need > p {
    text-align: center;
    font-size: .8rem;
  }

  ._what-need-foods {
    margin-top: -5rem;
    height: 10rem;
    /*width: 100%;*/
    display: grid;
    grid-template-columns: auto auto auto auto;
    /*grid-template-rows: 20rem;*/
    justify-content: space-evenly;
    align-content: center;
  }

  ._what-need-kabab {
    -webkit-transform: translate(0, 10rem);
    -moz-transform: translate(0, 10rem);
    -ms-transform: translate(0, 10rem);
    -o-transform: translate(0, 10rem);
    transform: translate(0, 10rem);
    height: 15rem;
    width: 15rem;
    background-image: url("../../public/assets/back-kabab.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 4px;
  }

  ._what-need-pizza {
    -webkit-transform: translate(0, 10rem);
    -moz-transform: translate(0, 10rem);
    -ms-transform: translate(0, 10rem);
    -o-transform: translate(0, 10rem);
    transform: translate(0, 10rem);
    height: 15rem;
    width: 15rem;
    background-image: url("../../public/assets/pizza-back.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 4px;
  }

  ._what-need-burger {
    -webkit-transform: translate(0, 10rem);
    -moz-transform: translate(0, 10rem);
    -ms-transform: translate(0, 10rem);
    -o-transform: translate(0, 10rem);
    transform: translate(0, 10rem);
    height: 15rem;
    width: 15rem;
    background-image: url("../../public/assets/burger-back.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 4px;
  }

  ._what-need-sand {
    -webkit-transform: translate(0, 10rem);
    -moz-transform: translate(0, 10rem);
    -ms-transform: translate(0, 10rem);
    -o-transform: translate(0, 10rem);
    transform: translate(0, 10rem);
    height: 15rem;
    width: 15rem;
    background-image: url("../../public/assets/sand-back.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 4px;
  }

  ._what-need-back {
    color: #fff;
    height: 94%;
    width: 100%;
    background-image: linear-gradient(180deg, transparent, rgba(0, 0, 0, .02) 10%, rgba(0, 0, 0, 0.82));
    border-radius: 4px;
  }

  ._what-need-back > p {
    direction: rtl;
    -webkit-transform: translate(-1rem, 10rem);
    -moz-transform: translate(-1rem, 10rem);
    -ms-transform: translate(-1rem, 10rem);
    -o-transform: translate(-1rem, 10rem);
    transform: translate(-1rem, 10rem);
    font-weight: bold;
  }

  ._more-foods {
    margin-top: 20rem;
  }

  ._more-foods > p {
    direction: rtl;
    text-align: center;
    font-size: 1.5rem;
  }

  ._more-foods > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /*align-items: flex-end;*/
  }

  ._more-foods > div > a {
    box-shadow: 0 0 2px #eee;
    -webkit-box-shadow: 0 0 2px #aaa;
    height: 2.7rem;
    border-radius: 10rem;
    padding: 0 1.5rem;
    background-color: #fff;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    line-height: 2.3rem;
    margin-left: 2rem;
    margin-bottom: 2.5rem;
    cursor: pointer;
    -webkit-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s;

  }

  ._more-foods > div > a:hover {
    box-shadow: 0 0.3rem 2rem rgba(0,0,0,.2);
  }

  ._end {
    background-color: #1f1f1f;
    height: 30rem;
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
  }

  ._end-end > p {
    font-size: .9rem;
    line-height: 5rem;
  }

  ._some {
    display: inline-block;
    padding: 1rem;
  }


</style>
