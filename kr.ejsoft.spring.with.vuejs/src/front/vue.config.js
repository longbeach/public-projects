module.exports = {
    devServer: {
        proxy: {
            '/data': {
                target: 'http://localhost:8080',
                changeOrigin: true,
//                pathRewrite: {
//                    '^/data': ''
//                }
            }
        }
    },
    
    configureWebpack: () => {
	if (process.env.NODE_ENV === "production") {
        devtool: 'source-map'
	} else {
		devtool: 'inline-source-map'
	}
    },
}