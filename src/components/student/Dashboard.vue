<template>
  <div>
    <b-loading :is-full-page="true" :active.sync="getIsloadingDashboard"></b-loading>
    <div class="columns is-mobile is-centered header">
      <div class="column is-10 load is-size-5 has-text-weight-bold" style="color: #c9788c;">
        <div class="glitch load is-mobile" data-text="TITLE">TITLE</div>
      </div>
    </div>
    <div class="columns is-mobile is-centered">
      <div class="column is-12 load">
        <carousel :perPage="1" paginationActiveColor="#c9788c" paginationColor="#fff">
          <slide>
            <TA1 />
          </slide>
          <slide>
            <TA2 />
          </slide>
          <slide>
            <TA3 />
          </slide>
          <slide>
            <TA4 />
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Carousel, Slide } from 'vue-carousel'
import TA1 from './TA1'
import TA2 from './TA2'
import TA3 from './TA3'
import TA4 from './TA4'
export default {
  name: 'Dashboard',
  data () {
    return {
      data: 'Dashboard Page'
    }
  },
  computed: {
    ...mapGetters([
      'getUserLogin',
      'getIsloadingDashboard'
    ])
  },
  components: {
    Carousel,
    Slide,
    TA1,
    TA2,
    TA3,
    TA4
  },
  mounted () {
    console.log(this.getUserLogin, 'this.getUserLogin')
  }
}
</script>

<style>
.glitch {
  color:white;
  margin-bottom:5vh;
  margin-top: 5vh;
  font-size: 11vw;
  position: relative;
  left: 16.5vw;
}

@keyframes noise-anim {
  0% {
    clip: rect(399px, 19999px, 394px, 0);
  }
  5% {
    clip: rect(255px, 19999px, 266px, 0);
  }
  10% {
    clip: rect(27px, 19999px, 29px, 0);
  }
  15% {
    clip: rect(168px, 19999px, 254px, 0);
  }
  20% {
    clip: rect(127px, 19999px, 280px, 0);
  }
  25% {
    clip: rect(173px, 19999px, 257px, 0);
  }
  30% {
    clip: rect(155px, 19999px, 278px, 0);
  }
  35% {
    clip: rect(198px, 19999px, 288px, 0);
  }
  40% {
    clip: rect(196px, 19999px, 255px, 0);
  }
  45% {
    clip: rect(154px, 19999px, 27px, 0);
  }
  50% {
    clip: rect(128px, 19999px, 216px, 0);
  }
  55% {
    clip: rect(170px, 19999px, 267px, 0);
  }
  60% {
    clip: rect(193px, 19999px, 24px, 0);
  }
  65% {
    clip: rect(181px, 19999px, 219px, 0);
  }
  70% {
    clip: rect(113px, 10999px,2 51px, 0);
  }
  75% {
    clip: rect(114px, 9999px, 287px, 0);
  }
  80% {
    clip: rect(153px, 9999px, 252px, 0);
  }
  85% {
    clip: rect(125px, 9999px, 272px, 0);
  }
  90% {
    clip: rect(148px, 9999px, 236px, 0);
  }
  95% {
    clip: rect(84px, 9999px, 265px, 0);
  }
  100% {
    clip: rect(175px, 9999px, 18px, 0);
  }
}
.glitch:after {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  text-shadow: -1px 0 red;
  top: 0;
  color: #fff;
  background: black;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim 2s infinite linear alternate-reverse;
}

@keyframes noise-anim-2 {
  0% {
    clip: rect(13px, 9999px, 50px, 0);
  }
  5% {
    clip: rect(72px, 9999px, 75px, 0);
  }
  10% {
    clip: rect(54px, 9999px, 79px, 0);
  }
  15% {
    clip: rect(73px, 9999px, 11px, 0);
  }
  20% {
    clip: rect(24px, 9999px, 8px, 0);
  }
  25% {
    clip: rect(75px, 9999px, 7px, 0);
  }
  30% {
    clip: rect(46px, 9999px, 90px, 0);
  }
  35% {
    clip: rect(39px, 9999px, 69px, 0);
  }
  40% {
    clip: rect(9px, 9999px, 22px, 0);
  }
  45% {
    clip: rect(62px, 9999px, 85px, 0);
  }
  50% {
    clip: rect(100px, 9999px, 94px, 0);
  }
  55% {
    clip: rect(34px, 9999px, 31px, 0);
  }
  60% {
    clip: rect(85px, 9999px, 61px, 0);
  }
  65% {
    clip: rect(27px, 9999px, 1px, 0);
  }
  70% {
    clip: rect(43px, 9999px, 67px, 0);
  }
  75% {
    clip: rect(14px, 9999px, 49px, 0);
  }
  80% {
    clip: rect(91px, 9999px, 83px, 0);
  }
  85% {
    clip: rect(20px, 9999px, 35px, 0);
  }
  90% {
    clip: rect(43px, 9999px, 6px, 0);
  }
  95% {
    clip: rect(97px, 9999px, 28px, 0);
  }
  100% {
    clip: rect(26px, 9999px, 25px, 0);
  }
}
.glitch:before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: 1px 0 blue;
  top: 0;
  color: #c9788c;
  background: black;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim-2 3s infinite linear alternate-reverse;
}
</style>
