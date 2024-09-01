<template>
    <div class="l-footer__main-bottom">
        <ul class="l-footer__main-bottom__nav">
            <li><div class="aa" style="display: flex;"><a href="/">Home</a></div></li>
            <li><div class="aa" style="display: flex;"><a href="mailto:d25823095@gmail.com?subject=聯繫郵件&body=這是一封聯繫給兪帆的郵件。">Email</a></div></li>
            <li><div class="aa" style="display: flex;"><a href="https://9rise.com/" target="_blank" rel="noopener noreferrer">九日生</a></div></li>
            <li><div class="aa" style="display: flex;"><a href="../dist/assets/履歷.pdf" target="_blank">查看履歷</a></div></li>
            <li><div class="aa" style="display: flex;"><a href="tel:0905286032">打電話給兪帆</a></div></li>
        </ul>
        <div class="copyright"><p class="l-footer__main-bottom__copyright u-ff-poppins">2023 All Rights Reserved</p></div>
    </div>
</template>

<script >
export default {
    name: 'Footer'
}
</script>
<style>
@font-face {
    font-family: VastShadow-Regular;
  src: local("VastShadow-Regular"),
  url(../assets/VastShadow-Regular.ttf);
  font-weight: bold;
      }
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
  font-size: larger;
  font-weight: bolder;
  padding-left: 40px;
}
.aa>a:active{
  color: #fd920c ;
}
.copyright{
  display: flex;
  justify-content: center;
  font-size: larger;
  font-weight: bolder;
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