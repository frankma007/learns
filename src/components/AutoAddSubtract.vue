<template>

  <div>
    <button @click="autoSubtract">-</button>
    <input class="txt"
           type="text"
           v-model="number">
    <button @click="autoAdd">+</button>
    <!-- <ul>
      <li v-for ="(item,index) in list" :key="item.index" >{{++index}}---{{item}} </li>
    </ul> -->
    <p>
      给transition-group 添加appear属性 实现页面刚展示出来的时候，入场时的效果
    </p>
    <transition-group appear
                      tag="ul">
      <li v-for="item in books"
          :key="item.name">---{{item.name}} --{{item.desc}} </li>
    </transition-group>
    <p>
      :key 的值只能是number 或者string类型
    </p>
    <p v-for="(val,key,index) in userInfo"
       :key="index">
      键是{{key}},值是{{val}},索引是{{index}}
    </p>
    <p v-for="(val,key,index) in 3"
       :key="index"> 这是第{{val}}个p标签key-{{key}},index-{{index}}</p>
    <!-- <ul>
      <li v-for="(item , index) in books" :key="item.name"> {{++index}}--{{item.desc}}--{{item.name}}

      </li>
    </ul> -->
    <div>
      <h3>华山论剑</h3>
      <label for="">ID:
        <input type="text"
               v-model="id">
      </label>
      <label for="">绰号:
        <input type="text"
               v-model="desc">
      </label>
      <input type="button"
             value="晋级"
             @click="add">
      <transition-group appear
                      tag="table">
        <tr v-for="(item) in names"
            :key="item.id">
          <td><input type="checkbox"></td>
          <td>{{item.id}}</td>
          <td>{{item.desc}}</td>
          <td><button @click="del(item.id)">删除</button></td>
        </tr>
      </transition-group>
    </div>
    <p>
      使用transition元素 ,把需要被动画控制的元素包裹起来
    </p>
    <div v-if="flag">
      从一而终 if 是需要从dom节点中删除 重新创建
    </div>
    <transition>
      <div v-show="flag">
        反复无常 show 是display:none
      </div>
    </transition>
    <input type="button"
           value="显示/隐藏"
           @click="flag=!flag">

    <!-- :style="{color:'green','font-size':'18px'}" -->
    <div :class="['red','default',isActive?'active':'',]"
         :style="[styleObj,styleOrange]"
         ref="artical">
      春花秋月何时了，往事知多少，小楼昨夜又东风，故国不堪回首月明中。
    </div>
    <div>
      <input type="text"
             v-model="number"
             v-focus
             v-color="'red'"
             v-font-size="24">
      {{number | toFixed(2)}}
      <input type="text"
             v-model="dt">
      {{dt | dataFormat }}
    </div>
    <input type="button"
           v-on:keyup.enter="submitForm"
           value="点击">
    <AutoAdd ref="myAutoAdd"></AutoAdd>
    <Amount />
    <belle ref="mybelle"></belle>
  </div>
</template>
<script >
  import AutoAdd from "@/components/AutoAdd";
  import Amount from "@/components/Amount";
  var belle = {
    template: '<h3>武林第一美人</h3>',
    data () {
      return {
        name: '孔雀妃子梅吟雪',
        subname: '李媚娘'
      }

    },
    methods: {
      show () {
        console.log(this.subname);
      }
    }
  }

  const books = [
    { name: '01', desc: '水浒传' },
    { name: '02', desc: '红楼梦' },
    { name: '03', desc: '西游记' },
    { name: '04', desc: '三国演义' },
    { name: '05', desc: '大战车迟国' },
  ]

  const names = [
    { id: '01', desc: '东邪-黄药师' },
    { id: '02', desc: '西毒-欧阳锋' },
    { id: '03', desc: '南帝-段智兴' },
    { id: '04', desc: '北丐-洪七公' },
    { id: '05', desc: '中神通-王重阳' },
  ]
  // 将样式定义到data中 直接饮用data

  const styleObj = { color: 'green', 'font-size': '18px' }
  const styleOrange = { border: 'orange 1px solid', color: 'orange' }


  export default {
    name: "AutoAddSubtract",
    components: {
      AutoAdd, Amount, belle
    },
    mounted () {
      // console.log(this.$refs.myAutoAdd.innerHTML);
      console.log(this.$refs.artical.innerHTML);
      console.log(this.$refs.mybelle.name);
      this.$refs.mybelle.show()

    },
    data () {
      return {
        number: 0,
        list: [1, 2, 3, 4, 5, 6, 7],
        books,
        names,
        id: '',
        desc: '',
        userInfo: {
          username: '马壮',
          age: 100,
          tool: '九阳太极剑法'
        },
        flag: true,
        isActive: true,
        styleObj,//样式对象
        styleOrange,
        dt: new Date()
      }
    },
    filters: {
      //子组件私有过滤器
      dataFormat (input, pattern = "") {
        var dt = new Date(input)
        var y = dt.getFullYear()
        var m = (dt.getMonth() + 1).toString().padStart(2, '0')//少于两位补0
        var d = dt.getDate().toString().padStart(2, '0')
        return `${y}-${m}-${d}`

      }

    },
    //自定义局部过指令
    directives: {
      color: {
        bind (el, binding) {
          el.style.color = binding.value
        }
      }
      ,
      'font-size': function (el, binding) {
        el.style.fontSize = binding.value + 'px'
      }
    },
    methods: {
      autoAdd: function () {
        this.number++
      },
      autoSubtract: function () {
        this.number--
      },
      add: function () {
        var isContain = this.names.some((val) => {
          return val.id === this.id; //只要有一个相同 就返回true
        })
        if (isContain) {
          console.log('不可以重复使用哦');
          return;
        }
        this.names.unshift({ id: this.id, desc: this.desc })
      },
      del:function (id) {
        console.log(id,"我选中的");
        var index = this.names.findIndex(val=>{
          if(id===val.id){
            return true;
          }
        })
        console.log(index);
        if(index !==-1){
       this.names.splice(index,1)
        }        
      },
      submitForm () {
        console.log('我提交了form');
      },
    }
  }
</script>
<style  scoped>
  .red {
    color: red;
  }
  .default {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 14px;
    line-height: 1.8;
  }
  .active {
    color: blue;
  }

  /* 定义两组样式 */
  /* v-enter 时间点 是进入之前 元素的起始状态， 此时还没有开始进入 */
  /* v-leave-to 时间点 是动画离开之后 离开的终止状态 此时 元素的动画已经结束了 */
  .v-enter,
  .v-leave-to {
    opacity: 0;
    transform: translateX(150px) translateY(80px);
  }
  /* .v-enter-active 入场动画的时间段， v-leave-active 离场动画的时间段 */
  /**
  'v-'是在transition没有使用name时的前缀，如果使用name ,样式的前缀 v  就是'name-' 
  例如 <transition name="fade">
  .fade-enter .fade-leave-to等等
  **/
  .v-enter-active,
  .v-leave-active {
    transition: all 0.8s ease;
  }
  .v-move {
    transition: all 0.6s ease;
  }
  .v-leave-active {
    position: absolute;
  }
</style>