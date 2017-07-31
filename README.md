# seajs-requirejs-demo
There you will know the difference between seajs and requirejs!
一个小白做的小demo,以便理解seajs和requirejs的使用，适合初学者！

- 主页面index.html
- 入口模块mian.js
- 配置文件config.js


## requirejs配置：
1. baseUrl加载文件的根路径
    - 如果未设置baseUrl和data-main属性，则文件路径是相对与html本身；
    - 如果设置了data-main属性，则模块内引用的文件路径是相对于data-main文件；
    - 如果设置了baseUrl，则模块都是依据basrUrl设置的路径；
2. paths
    映射不放在baseUrl下的模块名，采用名值对的形式：模块名：模块路径（相对于baseUrl，可用逗号分隔写多个路径），
3. shim
    配置不支持AMD的模块：模块名：{deps（依赖的模块）；exports（全局变量作为模块对象）；init（初始化函数，返回对象代替exports作为模块对象）}
4. map
    根据需要为模块配置不同版本的模块
5. waitSeconds
    下载js等待的时间，默认7秒，如果设置为0则禁用等待超时
6. urlArgs
    下载文件时在url后增加额外的query参数，如：` urlArgs: '_='+(new Date()).getTime() `


## requirejs加载机制：
- 使用 ` appendChild() ` 将每一个依赖加载为一个script标签
- 加载即执行


注意：requirejs可以使用data-main属性来引入入口模块，而seajs已经取消了此属性，只能通过seajs.use来载入入口模块。
此外seajs也取消了直接引入css的功能，本demo中，将seajs-css插件混入了sea.js文件中，因此可以直接使用require引入css文件。seajs中的jquery文件已经进行了CMD包装。

tips：require.js version 2.2.0；sea.js version 3.0.0;
