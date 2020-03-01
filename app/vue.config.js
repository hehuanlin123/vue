//CommonJs写法
module.exports = {
    publicPath:'',
    //webpack server
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/mock':{
                target:'http://localhost:8080',
                ws:false,
                //将主机头的源点改为目标URL
                changeOrigin: false
            },
            '/vue':{
                target:'http://localhost:63342',
                ws:false,
                changeOrigin: false
            }
        }
    }
};