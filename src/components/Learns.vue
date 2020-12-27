<template>
  <div>
    <div :title="myTitle">
      <input type="button"
             value="点击我（错误）"
             :title="myTitle+'卢照邻'"
             @click="showInfo('出庭文化人')">
    </div>
    <div class="container"
         v-text="msg"
         @mouseenter="stop()"
         @mouseleave="start()"></div>
    <div class="outer"
         @click="outerHandler">
      <div class="inner"
           @click.self="innerHandler">
        <h3>stop修饰符 阻止冒泡</h3>
        <input type="button"
               value="点击按钮"
               @click.stop="btnHandler">
        <input type="button"
               value="self按钮"
               @click="btnHandler">

      </div>
    </div>
    <div class="inner">
      <h3>.prevent 阻止默认事件</h3>
      <a href="http://www.baidu.com"
         @click.prevent="linkClick">百度</a>
      <a href="http://www.baidu.com"
         @click.once="linkClick">百度once事件测试</a>
    </div>

    <div class="inner"
         @click.capture="innerHandler">
      <h3>.capture 捕捉 实现捕获触发事件的机制</h3>
      <p>
        .capture 可以优先捕捉事件进行执行 默认情况下是限制性 本身事件再去执行外部事件
      </p>
      <input type="button"
             value="capture按钮"
             @click="btnHandler">
    </div>
    <div class="inner"
         @click.self="innerHandler">
      <h3>.self 实现只有点击当前元素的时候才会触发事件处理函数</h3>
      <p>self 只会阻止自身冒泡行为的触发，并不是真正的阻止冒泡行为</p>

      <input type="button"
             value="self按钮"
             @click="btnHandler">
    </div>
    <div>
      <h3>
        双向绑定数据
      </h3>
      <p>
        v-model是vue特殊属性，指令  是一个语法糖
        <br>
        v-bind 只能实现单向绑定，从 Model 自动绑定到view 
      </p>
      <div>
        <input type="text" v-model="message" class="txt">
      </div>
      <div>
        <input type="text" :value="message" class="txt">
      </div>
       <div>
        <input type="text" :value="message" class="txt" @input="message=$event.target.value">
      </div>
      <AutoAddSubtract></AutoAddSubtract>
      
    </div>
  </div>
</template>

<script>
import AutoAddSubtract from "@/components/AutoAddSubtract";
  export default {
    name: "Learns",
    components:{AutoAddSubtract},
    data () {
      return {
        myTitle: '我是马壮',
        msg: '得成比目何辞死，愿作鸳鸯不羡仙',
        interval: null,//定时器对象
        message:'静坐常思己过闲谈莫论人非'
        // zoom: 10,
        // center: [112.5862, 37.8268],
      };
    },
    methods: {
      showInfo (info) {
        console.log(info);
      },
      start () {
        if (this.interval === null) {
          this.interval = setInterval(() => {
            var start = this.msg.substring(0, 1); //substring() 方法用于提取字符串中介于两个指定下标之间的字符。
            var end = this.msg.substring(1);
            this.msg = end + start

          }, 1000)
        }

      },
      stop () {
        clearInterval(this.interval)
        this.interval = null
      },
      btnHandler () {
        console.log('我是内部按钮');
      },
      outerHandler () {
        console.log('外部盒子,捕获');
      },
      innerHandler () {
        console.log('内部盒子,捕获');
      },
      linkClick () {
        console.log('阻止跳转链接');
      }

      // function f(y) {
      //   return this.x+y
      // }
    }
    ,
    mounted () {
      this.start()
    },
    watch: {
      // 'msg': function (newVal, oldVal) {

      // }
    }
  };
</script>

<style scoped>
  .wraper {
    width: 100px;
    height: 30px;
    background: green;
  }
  .inner {
    margin-top: 20px;
    width: 400px;

    background: rgb(0, 195, 255);
    color: white;
    overflow: hidden;
  }
  .outer{
    padding: 30px; overflow: hidden; background: rgb(104, 196, 116);
  }
  .txt{
    background: #f5f503
  }
</style>
