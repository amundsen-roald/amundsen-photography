<template>

  <div class="main">

    <div :class="['container', picModel.visible ? 'no-scroll filter' : '']">
      <div class="beta">测试版</div>

      <div class="logo"></div>

      <div class="essence">
        <div class="essence-title">精华选粹</div>
        <div class="essence-pics">
          <img class="essence-pics-item" v-for="(item, index) in pics" :key="item" @click="showPic(index)" :src="item" alt="">
        </div>
      </div>

      <div class="footer">
        ©copyright Amundsen 2019
      </div>
    </div>

    <div class="pic-model" v-show="picModel.visible" @click="handleClosePicModel" @touchmove.prevent="handlePicModelMousemove">
      <img class="pic-content" :src="picModel.pic" alt="">
      <div class="pic-detail">
        <div class="pic-parameter pic-info">
          <div class="pic-info-title">参数</div>
          <div class="pic-parameter-value pic-info-value">{{ picModel.info.parameter.focal }} {{ picModel.info.parameter.aperture }} {{ picModel.info.parameter.shutter }} {{ picModel.info.parameter.iso }}</div>
        </div>
        <div class="pic-location pic-info">
          <div class="pic-info-title">地点</div>
          <div class="pic-location-value pic-info-value">{{ picModel.info.location }}</div>
        </div>
        <div class="pic-date pic-info">
          <div class="pic-info-title">日期</div>
          <div class="pic-date-value pic-info-value">{{ picModel.info.date }}</div>
        </div>
        <div class="pic-camera pic-info">
          <div class="pic-info-title">相机</div>
          <div class="pic-camera-value pic-info-value">{{ picModel.info.camera }}</div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'Photography',
  data(){
    return {
      picModel: {
        visible: false,
        pic: '',
        info: {
          parameter: {
            focal: '', // 焦距
            aperture: '', // 光圈
            shutter: '', // 快门
            iso: '', // ISO
          },
          location: '中国·上海',
          date: '2018-08-27',
          camera: 'Nikon Z6'
        }
      },
      pics: [
        'http://pwtrnh84p.bkt.clouddn.com//blog/%E6%9D%BE%E6%B1%9F%E5%8C%BA-%E8%BD%A6%E5%A2%A9%E9%95%87.jpeg',
        'http://pwtrnh84p.bkt.clouddn.com//blog/%E6%B5%A6%E4%B8%9C%E6%96%B0%E5%8C%BA-%E5%BC%A0%E6%B1%9F%E9%AB%98%E7%A7%91-%E5%8D%8E%E8%99%B9%E7%A7%91%E6%8A%80%E5%9B%ADC%E5%8C%BA.jpeg',
        'https://ncdn.camarts.cn/1739332d.jpg',
        'https://ncdn.camarts.cn/22e8dea1.jpg',
        'https://ncdn.camarts.cn/3d38db6e.jpg',
        'https://ncdn.camarts.cn/904925db.jpg',
        'https://ncdn.camarts.cn/421ddb79.jpg',
        'https://ncdn.camarts.cn/e7f2503e.jpg',
        'https://ncdn.camarts.cn/83b278df.jpg',
        'https://ncdn.camarts.cn/8b6df735.jpg',
        'https://ncdn.camarts.cn/f8ee9c6c.jpg',
        'https://ncdn.camarts.cn/47f42c42.jpg',
      ]
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    showPic (index) {
      let _this = this
      _this.picModel = {
        visible: true,
        pic: _this.pics[index],
        info: {
          parameter: {
            focal: '200mm',
            aperture: 'ƒ/1.8',
            shutter: '1/640s',
            iso: '100',
          },
          location: '中国·上海',
          date: '2018-08-27',
          camera: 'Nikon Z6'
        }
      }
    },
    handleClosePicModel () {
      this.picModel.visible = false
    },
    handlePicModelMousemove () {}
    // handleMouseMove (event) {
    //   let node = event.srcElement

    //   let centerX = node.offsetLeft + node.offsetWidth / 2
    //   let centerY = node.offsetTop + node.offsetHeight / 2

    //   let deltaX = event.pageX - centerX
    //   let deltaY = event.pageY - centerY

    //   let percentageX = deltaX / centerX
    //   let percentageY = deltaY / centerY

    //   const deg = 40

    //   node.style.transform = 'rotateX(' + percentageY * - deg + 'deg)' + 'rotateY(' + percentageX * deg + 'deg)'
    //   node.style.boxShadow = '0 3px 15px 3px rgba(51, 51, 51, 0.5)'

    // },
    // handleMouseLeave (event) {
    //   let node = event.srcElement
    //   node.style.transform = ''
    // }
  },
}
</script>

<style lang="less" scoped>
  @import "~@/styles/fn";
  .main {
    position: relative;
    .container {
      .beta {
        position: absolute;
        left: 20px;
        top: 20px;
        padding: 3px 5px;
        border-radius: 5px;
        font-size: 12px;
        color: #eee;
        background: #9b9b9b;
        box-shadow: 0 12px 46px 0 rgba(0,0,0,.08), 0 6px 12px 0 rgba(0,0,0,.1);
      }
      .logo {
        height: 50vw;
        width: 40vw;
        margin: 0 auto;
        .bg('~@/views/photography/img/logo.png');
        background-size: 100% 80%;
      }
      .essence {
        &-title {
          text-align: center;
          font-size: 32px;
          font-weight: 400;
          color: #9b9b9b;
        }
        &-pics {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
          &-item {
            height: 20vh;
            margin: 15px 20px;
            border-radius: 3px;
            box-shadow: 0 0 15px rgba(0,0,0,0.25);
            transition: 0.15s;
            box-sizing: border-box;
            overflow: hidden;
            &:hover {
              transform: scale(1.1);
            }
          }
        }
      }

      .footer {
        margin: 20px auto;
        font-size: 14px;
        text-align: center;
        color: #9d9d9d;
      }
    }

    .pic {
      &-model {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        padding: 20px;
        box-sizing: border-box;
        overflow: hidden;
        z-index: 9999;
        background: hsla(0,0%,100%,.88);
      }
      &-content {
        width: 100%;
      }
      &-detail {
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      &-parameter {
        &-value {
          display: flex;
          justify-content: center;
        }
      }
      &-location {
        &-value {
          
        }
      }
      &-date {
        &-value {
          
        }
      }
      &-camera {
        &-value {

        }
      }
      &-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &-title {
          font-size: 12px;
          text-align: center;
          text-transform: uppercase;
          color: #9b9b9b;
        }
        &-value {
          font-size: 12px;
        }
      }
    }
  }

  .no-scroll {
    overflow: hidden;
    height: 100vh;
  }
  .filter {
    filter: blur(8px);
  }

  @media (max-width: 600px) {
    .essence-pics-item {
      width: 45vw;
      height: auto !important;
      margin: 10px auto !important;
    }
  }

</style>