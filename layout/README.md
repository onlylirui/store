### layout项目的初始化
    1. 使用@vue/cli创建项目
    2. 添加vue.config.js配置文件;对脚手架创建的项目做一些环境的配置
    3. 安装husky 修改package.json 为husky添加配置文件
            关闭eslint 在文件保存时的检验
                lintOnSave:false
            关闭eslint 在代码提交前的钩子(下述配置不加)
                "husky": {
                    "hooks": {
                      "pre-commit": "npm run lint"
                    }
                }
    4. mock数据 ; 安装mock.js 拦截请求
    5. 搭建axios的环境; 安装vant
            因为axios的轻提示依赖于vant ; 所以我们要安装vant;
            如果你的项目中不会使用到vant;那么请把toast.js中的轻提示 换成其他轻量级的库
    6. 搭建vue-router的环境
    7. 搭建vuex的环境

### 移动端页面的准备工作
    1. 引入resetcss
    2. 加入viewport meta标签(理想化移动端的视口)
        <meta name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
    3. 解决点击响应延时0.3s问题
        <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
        <script>
          if ('addEventListener' in document) {
            document.addEventListener('DOMContentLoaded', function() {
              FastClick.attach(document.body);
            }, false);
          }
        </script>
    4. 安装stylus
        npm install stylus stylus-loader --save-dev
        <style lang="stylus" rel="stylesheet/stylus">

        </style>
    5. 选定适配方案
        不做适配;以中间固定,两边留空白的形式;画移动端的界面.
        所有移动端浏览器的厂商都会实现一件事情:
            px是一个抽象单位;1px在不同的设备上有可能占据的实际尺寸是不一样的(1px !== 1px)
            在理想视口的情况下 在不缩放的前提下; 1px所占据的实际尺寸是一模一样的
    6. 图片怎么才可以完美清晰的展示
        当图片上的1位图像素 与 设备上的1物理像素 对应上时; 图片才可以完美清晰的展示
        设计稿要设计的多大;得到公司挑选的基准设备的物理像素的点数
        设计稿(png)                设备(iPhone6)
            750 * 1336                  理想视口的情况下 整个屏幕可以放下的css像素的点数 375 * 667
                                        iPhone6的像素比为2 整个屏幕可以放下的物理像素的点数 750 * 1334


