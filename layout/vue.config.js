//__dirname 绝对路径;代表的是当前文件的目录
const path = require('path')
const px2rem = require('postcss-px2rem')
function resolve (dir) {
    return path.join(__dirname, dir)
}
const postcss = px2rem({remUnit: 75})
module.exports={
    lintOnSave:false,
    devServer:{
        open:true,
        proxy:{ 
             '/3001':{
                 target: 'http://localhost:3001',
                 changeOrigin: true,//是否进行代理
                 pathRewrite:{
                     "^/3001":""
                 }
             },
             '/api':{
                target:'https://m.you.163.com',
                changeOrigin: true,
                secure:true,
                pathRewrite:{
                    "^/api":""
                },
             }
     },
 },
    configureWebpack:{
        resolve: {
            alias: {
                'components': resolve('src/components'),
                'pages': resolve('src/pages'),
                'store': resolve('src/store'),
            }
        }
    },
    css: { loaderOptions: { postcss: { plugins: [ postcss ] } } }
}