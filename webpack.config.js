module.exports = {
    mode:'development',
    devtool:"none",
    entry:"./index.js",
    output:{
        filename:'app.js'
    },
    module:{
        rules:[
            {
                test:/.\js/,
                use:["babel-loader"]
            }
        ]
    }
    
}