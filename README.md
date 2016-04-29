# seajs-requirejs-demo
There you will know the difference between seajs and requirejs!

一个小白自己做的小demo，以便理解seajs和requirejs的使用，适合初学者！

index.html
主页面

mian.js
入口模块

config.js
配置文件

注意：requirejs可以使用data-main属性来引入入口模块，而seajs已经取消了此属性，只能通过seajs.use来载入入口模块。此外seajs也取消了直接引入css的功能，本demo中，将seajs-css插件混入了sea.js文件中，因此可以直接使用require引入css文件。seajs中的jquery文件已经进行了CMD包装。


tips：require.js version 2.2.0；sea.js version 3.0.0;
