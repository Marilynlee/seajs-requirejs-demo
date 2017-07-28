/**
 * Created by Administrator on 2016/4/28.
 */

define(function (require, exports, moudle) {
    require.async(['jquery', 'style'], function () {
        $('a').click(function () {
            var cont = $(this).text();
            alert(cont);
        });
    });
    //var css=require('style');


});