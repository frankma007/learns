//第一步1文件.vue
class globalObject {
  constructor(name,age){
    this.name=name
    this.age=age
  }
  run(){
    console.log(`${this.name}在跑,他${this.age}岁了`);
  }

}
export default globalObject

