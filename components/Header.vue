<template>
	<header class="header">
    <div class="container">
      <div class="header__inner">
          <NuxtLink to="/" class="logo nuxt-link-exact-active nuxt-link-active logo--light" aria-current="page">
            <img src="@/assets/svg/logo.svg" class="logo__svg">
          </NuxtLink>
          <div class="header__right">
            <nav class="nav">
              <a href="/work" class="hover">{{ TranslatedText.work }}</a>
              <a href="/about" class="hover">{{ TranslatedText.about }}</a>
            </nav>
            <div class="actions">
              <div tabindex="0" class="select">
                <div class="selected" @click="ChangeFlag(0)">
                  <div class="selected-value">
                    <div class="flag__svg" 
                      :class="{'flagen__svg' : lang[currentFlag] === 'en', 
                      'flagrus__svg' : lang[currentFlag] === 'rus'}"/>
                  </div>
                </div>
                <div class="items" v-if="showAllFlags" @click="ChangeFlag(1)">
                  <div class="items__item">
                    <div class="flag__svg" 
                      :class="{'flagen__svg' : lang[currentFlag] === 'rus', 
                      'flagrus__svg' : lang[currentFlag] === 'en'}"/>
                  </div>
                </div>
              </div>
              <div class="burger" @click="openBurger = true"><span></span><span></span></div>
              <button class="btn btn--main"><span>{{ TranslatedText.letswork }}</span></button>
            </div>
         </div>
      </div>

      <div v-if="openBurger" class="header-burger__container">
        <div class="mobile-menu active">
          <div class="mobile-menu__header">
            <h4>
              Menu
            </h4>
            <div @click="openBurger = false" class="burger active"><span></span> <span></span></div>
          </div>
          <div class="mobile-menu__body">
            <nav class="nav">
              <a href="/work" class="hover">{{ TranslatedText.work }}</a>
              <a href="/about" class="hover nuxt-link-active">{{ TranslatedText.about }}</a>
              <button class="hover btn">Let’s work</button>
            </nav>
          </div>
          <div class="mobile-menu__footer">
            <div tabindex="0" class="select">
                <div class="selected" @click="ChangeFlag(0)">
                  <div class="selected-value">
                    <div class="flag__svg" 
                      :class="{'flagen__svg' : lang[currentFlag] === 'en', 
                      'flagrus__svg' : lang[currentFlag] === 'rus'}"/>
                  </div>
                </div>
                <div class="items" v-if="showAllFlags" @click="ChangeFlag(1)">
                  <div class="items__item">
                    <div class="flag__svg" 
                      :class="{'flagen__svg' : lang[currentFlag] === 'rus', 
                      'flagrus__svg' : lang[currentFlag] === 'en'}"/>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: 'headerCom',
  data () {
    return {
      lang: ['rus', 'en'],
      currentFlag: 0,
      showAllFlags: false,
      openBurger: false
    }
  },
  computed: {
    TranslatedText () {
        let currentLang = this.lang[this.currentFlag]
        let text = this.$store.state.lang[currentLang]
        return text
    },
  },
  methods : {
    ChangeFlag(ind) {
      this.currentFlag === ind && ind === 1 ? ind = 0 : ''
      !this.showAllFlags ? this.showAllFlags = true : this.SetFlag(ind)
      this.$store.commit('SET_LANG', this.lang[this.currentFlag])
    },
    SetFlag (ind) {
      this.currentFlag = ind 
      this.showAllFlags = false
    },
  },
  
}
</script>

<style scoped>
.mobile-menu__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mobile-menu__header h4 {
  font-weight: 400;
  font-size: 16px;
  color: black;
  line-height: 120%;
  letter-spacing: .01em;
}

.burger.active span:first-child {
    position: relative;
    top: 1px;
    transform: rotate(45deg);
}

.burger.active span:last-child {
    transform: rotate(-45deg);
}

.burger.active span {
    margin: 0;
}

.mobile-menu__body {
    margin: auto 0;
    padding: 70px 0;
}

.mobile-menu .nav {
    align-items: flex-start;
}

.header-burger__container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 1005;
  padding: 23px 20px 85px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: auto;
  transition: all .3s ease;
}

.flag__svg {
  width: 24px;
  height: 24px;
  margin: auto;  
}

.flagrus__svg {
  background: url("../assets/svg/flagrus.svg")
}
.flagen__svg {
  background: url("../assets/svg/flagen.svg")  
}

.header {
  position: fixed;
  left: 0;
  z-index: 1000;
  top: 0;
  width: 100%;
  transition: transform .3s ease,padding-top .3s ease,padding-bottom .3s ease;
  padding: 25px 0;
  background-color: white;
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header .logo--light {
  fill: #fff;
}

.header .logo__svg {
  width: 84px;
  height: 25px;
}

.header .actions, .header__right {
  display: flex;
}

.nav {
  display: flex;
  align-items: center;
  margin-right: 91px;
}

.header .actions, .header__right {
  display: flex;
}

.nav a:not(:last-child) {
  margin-right: 48px;
}

.nav a {
  font-size: 20px;
  line-height: 100%;
  color: black;
  display: flex;
}

.burger {
  width: 40px;
  cursor: pointer;
  height: 40px;
  border: 1.6px solid rgba(0, 0, 0, 0.1);
  border-radius: 999px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  z-index: 777;
  background: transparent;
  flex-shrink: 0;
  display: none;
  flex-direction: column;
}

.burger span {
  transition: transform .3s ease;
  display: block;
  width: 16px;
  height: 1px;
  background-color: black;
  margin: 2px 0;
}

.header .actions .btn {
  margin-left: 16px;
  background-color: black;
  color: white;
}

.btn--main {
  border-radius: 999px;
  padding: 11px 32.3px;
  position: relative;
  overflow: hidden;
  height: 52px;
}

.btn--main span {
  position: relative;
  z-index: 2;
}

.btn--main:after, .btn--main:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%
}

.btn--main:before {
  content: "";
  background: #9effbf;
  width: 120%;
  height: 0;
  padding-bottom: 120%;
  top: -110%;
  left: -10%;
  border-radius: 50%;
  transform: translate3d(0,68%,0) scale3d(0,0,0)
}

.btn--main:after {
  content: "";
  background: #9effbf;
  transform: translate3d(0,-100%,0);
  transition: transform .4s cubic-bezier(.1,0,.3,1)
}

@media(any-hover: hover) {
  .btn--main:hover:not(:disabled) span {
    -webkit-animation:MoveScaleUpInitial .3s forwards,MoveScaleUpEnd .3s .3s forwards;
    animation: MoveScaleUpInitial .3s forwards,MoveScaleUpEnd .3s .3s forwards
  }

  .btn--main:hover:not(:disabled):before {
    transform: translateZ(0) scaleX(1);
    transition: transform .4s cubic-bezier(.1,0,.3,1)
  }

  .btn--main:hover:not(:disabled):after {
    transform: translateZ(0);
    transition-duration: .05s;
    transition-delay: .4s;
    transition-timing-function: linear
  }
}



.select {
  outline: 0!important;
  box-shadow: 0 0 0 0 transparent!important;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: relative;
}

.select .items__item, .select .selected-value {
  cursor: pointer;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  border: 2px solid rgba(0, 0, 0, 0.1);
  transition: all .2s linear;
  background-color: white;
}

.select .items__item:hover, .select .selected-value:hover {
  background: #ffffff1a;
}

select .items__item {
  background: #101010;
}

.select .items.selectHide {
  opacity: 0;
  visibility: hidden;
}

.select .items {
  position: absolute;
  left: 0;
  top: calc(100% + 8px);
  z-index: 1;
  transition: all .2s linear;
}

.select .items__item img, .select .selected-value img {
  margin: auto;
}

.select .items {
  position: absolute;
  left: 0;
  top: calc(100% + 8px);
  z-index: 1;
  transition: all .2s linear;
}

@media screen and (max-width: 991px) {
  .nav {
    display: none;
  }  
  .burger {
    display: flex;
  }
  .header .actions .select {
    display: none;
  }
  burger {
    display: flex;
  }
  .mobile-menu .nav {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
  .mobile-menu .nav a:first-child, .mobile-menu .nav button:first-child {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  .mobile-menu .nav a, .mobile-menu .nav button {
    font-size: 36px;
    line-height: 45px;
    margin: 0;
    padding: 16px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
  }
  .mobile-menu .nav button {
    color: #e2beff;
    justify-content: flex-start;
  }
  .mobile-menu .nav a, .mobile-menu .nav button {
    font-size: 36px;
    line-height: 45px;
    margin: 0;
    padding: 16px 0;
    border-bottom: 1px solid #232323;
    width: 100%;
  }


}

@media screen and (max-width: 600px) {
  .header {
    padding: 16px 0;
  }
  .header .actions .btn {
    margin-left: 8px;
    display: none;
  }
  .btn--main {
    font-size: 16px;
    padding: 9px 20px;
  }
}

@-webkit-keyframes MoveScaleUpInitial {
  to {
    transform: translate3d(0,-105%,0) scaleY(2);
    opacity: 0
  }
}

@keyframes MoveScaleUpInitial {
  to {
    transform: translate3d(0,-105%,0) scaleY(2);
    opacity: 0
  }
}

@-webkit-keyframes MoveScaleUpEnd {
  0% {
    transform: translate3d(0,100%,0) scaleY(2);
    opacity: 0
  }

  to {
    transform: translateZ(0);
    opacity: 1
  }
}

@keyframes MoveScaleUpEnd {
  0% {
      transform: translate3d(0,100%,0) scaleY(2);
      opacity: 0
  }

  to {
    transform: translateZ(0);
    opacity: 1
  }
}
</style>









