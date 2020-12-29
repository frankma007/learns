<template>
  <div>
    <a-tabs default-active-key="1">
      <a-tab-pane key="1"
                  tab="Tab 1">
        Content of Tab Pane 1
      </a-tab-pane>
      <!-- forceRender  被隐藏时是否渲染dom结构 默认false -->
      <a-tab-pane key="2"
                  tab="Tab 2"
                  force-render>
        Content of Tab Pane 2
      </a-tab-pane>

    </a-tabs>

    <a-row>
      <a-col :span="8">
      </a-col>
      <a-col :span="8">
        <a-form-model layout="vertical"
                      :model="formInline"
                      @submit="handleSubmit"
                      @submit.native.prevent>
          <a-form-model-item>
            <a-input v-model="formInline.user"
                     placeholder="Username">
              <a-icon slot="prefix"
                      type="user"
                      style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-model-item>
          <a-form-model-item>
            <a-input v-model="formInline.password"
                     type="password"
                     placeholder="Password">
              <a-icon slot="prefix"
                      type="lock"
                      style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-model-item>
          <a-form-model-item>
            <a-button type="primary"
                      html-type="submit"
                      :disabled="formInline.user === '' || formInline.password === ''">
              登陆
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-col>
      <a-col :span="8">
        <div>
    <a-input-number id="inputNumber" v-model="value" :min="1" :max="10"  />
    当前值：{{ value }}
  </div>
      </a-col>
    </a-row>

    <div>

    <a-input-number
      :default-value="100"
      :min="0"
      :max="100"
      :formatter="value => `${value}%`"
      :parser="value => value.replace('%', '')"
     
    />
  </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        value:1,
        formInline: {
          user: '',
          password: '',
        },
      };
    },
    mounted(){
      this.$changeData()
      console.log(this.globalVariable.baseURL);
      this.$global_func('马壮啊')
      console.log();
      var m=new this.globalObjs('马壮','30')
      m.run()
      
    },
    methods: {
      handleSubmit (e) {
        console.log(this.formInline);
      },
    },
    watch:{
      value(val,oldval){
        // if(val!==oldval){
//做某事
console.log('我改变成了'+val);
        // }
      },
      formInline:{//深度监听，可监听到对象、数组的变化
      // 只要数据发生变化 就会触发 handler方法
      // 只要对象属性发生变化（可被监测到的），便会执行handler函数；
         handler(val){
           console.log(arguments);
            //  console.log("b.c: "+val.c, oldVal.c);
            // if(val.user!=oldVal.user){
              console.dir(`用户名变成了${val.user}`);
              this.$nextTick(()=>{
      // 进行诸如拿到数据再创建实例等操作
    //   if(this.commonsVariable.isMathjaxConfig){//判断是否初始配置，若无则配置。
    //     this.commonsVariable.initMathjaxConfig();
    // }
    // this.commonsVariable.MathQueue("question-id");//传入组件id，让组件被MathJax渲染
    // wathc+$nextTick,实现数据更新后,界面更新时重新渲染数据
    //实现界面属性更新后重新渲染数据，返回一个箭头函数
		})
           
           
         },
        //  immediate: true,
         deep:true //true 深度监听
     }
    }
  };
</script>