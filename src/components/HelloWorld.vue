<template>
  <div class="hello">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main

          <i class="el-icon-edit"></i>
          <i class="el-icon-share"></i>
          <i class="el-icon-delete"></i>
          <el-button type="primary"
                     icon="el-icon-search">搜索</el-button>

          <el-row>
            <el-button disabled>默认按钮</el-button>
            <el-button type="primary"
                       disabled>主要按钮</el-button>
            <el-button type="success"
                       disabled>成功按钮</el-button>
            <el-button type="info"
                       disabled>信息按钮</el-button>
            <el-button type="warning"
                       disabled>警告按钮</el-button>
            <el-button type="danger"
                       disabled>危险按钮</el-button>
          </el-row>

          <el-row>
            <el-button plain
                       disabled>朴素按钮</el-button>
            <el-button type="primary"
                       plain
                       disabled>主要按钮</el-button>
            <el-button type="success"
                       plain
                       disabled>成功按钮</el-button>
            <el-button type="info"
                       plain
                       disabled>信息按钮</el-button>
            <el-button type="warning"
                       plain
                       disabled>警告按钮</el-button>
            <el-button type="danger"
                       plain
                       disabled>危险按钮</el-button>
          </el-row>
          <el-row>
            <el-button type="text">文字按钮</el-button>
            <el-button type="text"
                       disabled>文字按钮</el-button>
          </el-row>
          <el-row>
            <el-button type="primary"
                       icon="el-icon-edit"></el-button>
            <el-button type="primary"
                       icon="el-icon-share"></el-button>
            <el-button type="primary"
                       icon="el-icon-delete"></el-button>
            <el-button type="primary"
                       icon="el-icon-search">搜索</el-button>
            <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
          </el-row>
          <el-row>
            <el-button-group>
              <el-button type="primary"
                         icon="el-icon-arrow-left">上一页</el-button>
              <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </el-button-group>
            <el-button-group>
              <el-button type="primary"
                         icon="el-icon-edit"></el-button>
              <el-button type="primary"
                         icon="el-icon-share"></el-button>
              <el-button type="primary"
                         icon="el-icon-delete"></el-button>
            </el-button-group>
          </el-row>
          <el-row>
            <el-button type="primary"
                       :loading="true">加载中</el-button>
          </el-row>
          <el-row>
            <el-button>默认按钮</el-button>
            <el-button size="medium">中等按钮</el-button>
            <el-button size="small">小型按钮</el-button>
            <el-button size="mini">超小按钮</el-button>
          </el-row>
          <el-row>
            <el-button round>默认按钮</el-button>
            <el-button size="medium"
                       round>中等按钮</el-button>
            <el-button size="small"
                       round>小型按钮</el-button>
            <el-button size="mini"
                       round>超小按钮</el-button>
          </el-row>
          <div>
            <el-link href="https://element.eleme.io"
                     target="_blank">默认链接</el-link>
            <el-link type="primary">主要链接</el-link>
            <el-link type="success"
                     disabled>成功链接</el-link>
            <el-link type="warning">警告链接</el-link>
            <el-link type="danger">危险链接</el-link>
            <el-link type="info"
                     disabled>信息链接</el-link>
            <el-link :underline="false">无下划线</el-link>
            <el-link>有下划线</el-link>
            <el-link icon="el-icon-edit">编辑</el-link>
            <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
          </div>
          <div>
            <el-radio v-model="radio"
                      label="1">备选项</el-radio>
            <el-radio v-model="radio"
                      label="2">备选项</el-radio>
          </div>
          <div>
            <el-radio disabled
                      v-model="radio1"
                      label="禁用">备选项禁用</el-radio>
            <el-radio disabled
                      v-model="radio1"
                      label="选中且禁用">备选项禁用</el-radio>
          </div>
          <div>
            <el-radio-group v-model="radio_g">
              <el-radio :label="3"
                        border>备选项</el-radio>
              <el-radio :label="6">备选项</el-radio>
              <el-radio :label="9">备选项</el-radio>
            </el-radio-group>
          </div>
          <div>
            <el-radio-group v-model="radio1">
              <el-radio-button label="上海"></el-radio-button>
              <el-radio-button label="北京"></el-radio-button>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </div>
          <div style="margin-top: 20px">
            <el-radio-group v-model="radio2"
                            size="medium">
              <el-radio-button label="上海"></el-radio-button>
              <el-radio-button label="北京"></el-radio-button>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </div>
          <div style="margin-top: 20px">
            <el-radio-group v-model="radio3"
                            size="small">
              <el-radio-button label="上海"></el-radio-button>
              <el-radio-button label="北京"
                               disabled></el-radio-button>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </div>
          <div style="margin-top: 20px">
            <el-radio-group v-model="radio4"
                            disabled
                            size="mini">
              <el-radio-button label="上海"></el-radio-button>
              <el-radio-button label="北京"></el-radio-button>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </div>
          <div>
            <el-checkbox v-model="checked1">备选项</el-checkbox>
            <el-checkbox v-model="checked2"
                         disabled>备选项</el-checkbox>

          </div>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="复选框 A"></el-checkbox>
            <el-checkbox label="复选框 B"></el-checkbox>
            <el-checkbox label="复选框 C"></el-checkbox>
            <el-checkbox label="禁用"
                         disabled></el-checkbox>
            <el-checkbox label="选中且禁用"
                         disabled></el-checkbox>
          </el-checkbox-group>
          <div>
            <el-checkbox :indeterminate="isIndeterminate"
                         v-model="checkAll"
                         @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities"
                               @change="handleCheckedCitiesChange">
              <el-checkbox v-for="city in cities"
                           :label="city"
                           :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
          </div>
          <div>
            <el-checkbox-group v-model="checkboxGroup1">
              <el-checkbox-button v-for="city in cities"
                                  :label="city"
                                  :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
          </div>

          <div>
            <el-input v-model="input01"
                      placeholder="请输入内容"
                      :disabled="true"
                      clearable></el-input>
            <el-input v-model="input01"
                      placeholder="请输入内容"
                      clearable></el-input>
            <el-input placeholder="请输入密码"
                      v-model="input01"
                      show-password></el-input>

          </div>
          <div class="demo-input-suffix">
            属性方式：
            <el-input placeholder="请选择日期"
                      suffix-icon="el-icon-date"
                      v-model="input1">
            </el-input>
            <el-input placeholder="请输入内容"
                      prefix-icon="el-icon-search"
                      v-model="input2">
            </el-input>

          </div>
          <div class="demo-input-suffix">
            slot 方式：
            <el-input placeholder="请选择日期"
                      v-model="input3">
              <i slot="suffix"
                 class="el-input__icon el-icon-date"></i>
            </el-input>
            <el-input placeholder="请输入内容"
                      v-model="input4">
              <i slot="prefix"
                 class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
          <div>
            <el-input type="textarea"
                      :rows="2"
                      placeholder="请输入内容"
                      v-model="textarea"
                      autosize>
            </el-input>

            <div>
              <el-input placeholder="请输入内容"
                        v-model="input1">
                <template slot="prepend">Http://</template>
              </el-input>
            </div>
            <div style="margin-top: 15px;">
              <el-input placeholder="请输入内容"
                        v-model="input2">
                <template slot="append">.com</template>
              </el-input>
            </div>
            <div style="margin-top: 15px;">
              <el-input placeholder="请输入内容"
                        v-model="input3"
                        class="input-with-select">
                <el-select v-model="select"
                           slot="prepend"
                           placeholder="请选择">
                  <el-option label="餐厅名"
                             value="1"></el-option>
                  <el-option label="订单号"
                             value="2"></el-option>
                  <el-option label="用户电话"
                             value="3"></el-option>
                </el-select>
                <el-button slot="append"
                           icon="el-icon-search"></el-button>
              </el-input>
            </div>
          </div>

          <div class="demo-input-size">
            <el-row :gutter="20">
              <el-col :span="6">
                <el-input placeholder="请输入内容"
                          suffix-icon="el-icon-date"
                          v-model="input1">
                </el-input>
              </el-col>
              <el-col :span="6">
                <el-input placeholder="请输入内容"
                          size="medium"
                          suffix-icon="el-icon-date"
                          v-model="input2">
                </el-input>
              </el-col>
              <el-col :span="6">
                <el-input size="small"
                          :span="6"
                          placeholder="请输入内容"
                          suffix-icon="el-icon-date"
                          v-model="input3">
                </el-input>
              </el-col>
              <el-col :span="6">
                <el-input placeholder="请输入内容"
                          suffix-icon="el-icon-date"
                          size="mini"
                          v-model="input4">
                </el-input>
              </el-col>
            </el-row>

          </div>
          <div>
            <el-input-number v-model="num"
                             @change="handleChange"
                             :min="1"
                             :max="10"
                             label="描述文字"
                             :disabled="true"></el-input-number>
          </div>
          <div>
            <el-select v-model="value"
                       placeholder="请选择"
                       clearable>
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value"
                         :disabled="item.disabled">
              </el-option>
            </el-select>
          </div>
          <div>
            <!-- //多选下拉框  -->
            <el-select v-model="value1"
                       multiple
                       collapse-tags
                       placeholder="请选择">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div>

            <el-table :data="tableData"
                      :row-class-name="tableRowClassName"
                      height="250"
                      v-loading="loading"
                      element-loading-text="拼命加载中"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="rgba(0, 0, 0, 0.8)"
                      border
                      style="width: 100%">
              <el-table-column prop="date"
                               label="日期"
                               width="180">
              </el-table-column>
              <el-table-column prop="name"
                               label="姓名"
                               width="180">
              </el-table-column>
              <el-table-column prop="address"
                               label="地址">
              </el-table-column>
            </el-table>
          </div>
          <div>

            <el-pagination background
                           layout="prev, pager, next"
                           :total="1000">
            </el-pagination>
          </div>
          <div>
            <el-badge :value="12"
                      class="item">
              <el-button size="small">评论</el-button>
            </el-badge>
            <el-badge :value="3"
                      class="item">
              <el-button size="small">回复</el-button>
            </el-badge>
            <el-badge :value="1"
                      class="item"
                      type="primary">
              <el-button size="small">评论</el-button>
            </el-badge>
            <el-badge :value="2"
                      class="item"
                      type="warning">
              <el-button size="small">回复</el-button>
            </el-badge>

            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="clearfix">
                  评论
                  <el-badge class="mark"
                            :value="12" />
                </el-dropdown-item>
                <el-dropdown-item class="clearfix">
                  回复
                  <el-badge class="mark"
                            :value="3" />
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div>

            <div class="demo-basic--circle">
              <div class="block">
                <el-avatar :size="50"
                           :src="circleUrl"
                           @error="errorHandler"></el-avatar>
              </div>
              <div class="block"
                   v-for="size in sizeList"
                   :key="size">
                <el-avatar :size="size"
                           :src="circleUrl"></el-avatar>
              </div>
            </div>
          </div>
          <div>
            <el-button type="text"
                       @click="open">点击打开 Message Box</el-button>
          </div>

          <el-dropdown>
            <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div>
            <span>雨纷纷</span>
            <el-divider direction="vertical"></el-divider>
            <span>旧故里</span>
            <el-divider direction="vertical"></el-divider>
            <span>草木深</span>
          </div>
          <!-- <Map></Map> -->
          <div>
           
            <!-- <el-amap vid="amapDemo" :zoom="zoom" :center="center">
  <el-amap-marker v-for="marker in markers" :position="marker.position"></el-amap-marker>
</el-amap> -->
          </div>

        </el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>

  </div>
</template>

<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  // import Map from 'Map';
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        radio: '1',
        radio1: '禁用',
        radio_g: 3,
        radio1: '上海',
        radio2: '上海',
        radio3: '上海',
        radio4: '上海',
        checked1: true,
        checked2: true,
        checkList: ['选中且禁用', '复选框 A'],
        checkedCities: ["北京", "上海"],
        cities: cityOptions,
        isIndeterminate: true,
        checkAll: false,
        checkboxGroup1: ['上海'],
        input01: '马壮你好',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        textarea: '',
        select: '',
        num: 1,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面',
          disabled: true
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        value1: [],
        value2: [],
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }
          , {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        loading: true,

        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        sizeList: ["large", "medium", "small"]

      }
    },
    methods: {
      tableRowClassName ({ row, rowIndex }) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },

      handleCheckAllChange (val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange (value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      handleChange (value) {
        console.log(value);
      },
      errorHandler () {
        // $msgbox(options)
        return true
      },
      open () {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style>
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    /* line-height: 160px; */
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>