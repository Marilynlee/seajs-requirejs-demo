
require(['jquery','./api', 'css!style'], function ($,api) {
    $('a').click(function () {
        var cont = $(this).text();
        alert(cont);
    });
    $('#user').click(function () {
        api.getUser().then(function (user) {
            console.info(user);
        });
    });
});

