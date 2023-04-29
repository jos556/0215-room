<template>
    <div class="l-footer__main-bottom">
        <ul class="l-footer__main-bottom__nav">
            <li><div class="aa" style="display: flex;"><a href="/">Home</a></div></li>
            <li><div class="aa" style="display: flex;"><a href="/">footer2</a></div></li>
            <li><div class="aa" style="display: flex;"><a href="/">footer3</a></div></li>
            <li><div class="aa" style="display: flex;"><a href="/">footer4</a></div></li>
            <li><div class="aa" style="display: flex;"><a href="/">footer5</a></div></li>
        </ul>
        <div class="copyright"><p class="l-footer__main-bottom__copyright u-ff-poppins">2023 Yu-Fan All Rights Reserved</p></div>
    </div>
</template>

<script >
export default {
    name: 'Footer'
}
</script>
<style>
.l-footer__main-bottom{
  display: flex ;
  flex-direction: column;
  position: relative;
  z-index: 99999999999;
  justify-content: center;
  margin-top: 10px;
  padding-top:30px;
  border-top: 1px solid #bebebe;
}
.l-footer__main-bottom__nav {
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: stretch;
  align-items: stretch;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}
.aa>a{
  color:#223344;
  padding-left: 40px;
}
.aa>a:hover{
  color: #fd920c ;
}
.copyright{
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 99999999999;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-left: 0;
  padding-left: 0;
}
</style>