export default {
  // Vue.js的插件应当有一个公开方法 install。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象。
  //自定义的方法最好以$开头
  install: function (Vue) {
    Vue.prototype.$global_func = (param) => {
      console.log(param, 'kankan');
    }
    Vue.prototype.$changeData = function () {
      console.log("执行成功");
    }
  }
}