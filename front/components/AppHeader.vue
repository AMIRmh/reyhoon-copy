<template>
  <div class="_header">

    <div>
      <a href="../../public/src/main.html"><img src="../../public/assets/logo.svg"/></a>
    </div>

    <div class="_header-guide">
      <div class="links">
        <a class="links"  href="../../public/src/main.html">راهنما</a>
      </div>
    </div>

    <ul>
      <li><div ><a href="../../public/src/login_register_template.html#s" class="links">عضویت</a></div></li>
      <li>|</li>
      <li><div ><a href="../../public/src/login_register_template.html#l" class="links">ورود</a></div></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
  ._header {
    display: grid;
    grid-template-columns: 65% 10% 20%;
    width: 100%;
    height: 3.5rem;
    border-image: linear-gradient(270deg,#8b00af,#d40062,#ff0613) 1;
    border-bottom-style: solid;
    border-image-repeat: stretch;
    border-width: 0 0 .2rem;
    margin: 0 auto;
    justify-content: center;
    align-content: space-between;
    direction: ltr;
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

</style>
