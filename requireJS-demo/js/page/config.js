/**
 * Created by Administrator on 2016/4/28.
 */
require.config({
    baseUrl: './js/page',
	urlArgs: 'time='+new Date().getTime(),
    paths: {
        // 'jquery': ['../lib/jQuery-2.1.4.min','https://code.jquery.com/jquery-2.2.4.min']
        'jquery': '../lib/jQuery-2.1.4.min',
        'layer': '../plugin/layer/layer',
        'style': '../../css/index'
    },
    map:{
        '*':{
            'css':'../lib/require-css'
        },
        'api2':{
            'jq':'jQuery2'
        },
        'api':{
            'jq':'jQuery1'
        }
    },
    shim:{
        'layer':{
            deps:['jquery']
        }
    }

});