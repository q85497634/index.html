这是一个主页文件，可以替换您的openwrt路由器的uhttpd或nas上的小型服务器的主页文件<br>
<br>
替换后，当您通过dnns访问路由器或nas时，将会看到这个导航主页<br>
项目使用前，应修改index.html中的ddns和lan_addr，并按自己的需求填写/assets/index.js的地址<br>
openwrt路由器，请将本项目所有文件放入/www，群晖nas放入web文件夹下，其他设备请自行查阅<br>
<br>
本项目的作用：</br>
1 自动切换内外网：根据您所处的网络环境判断应呈现给您的网址。<br>
2 拓展菜单：右键或长按导航页面图标，弹出拓展菜单（具体编写方法参见/assets/index.js）<br>
<br>
附：<br>
地址生成逻辑：<br>
①有url属性，返回url<br>
②有lan属性&&(通过内网ip访问||检测到内网ip)，返回lan<br>
③有wan属性，返回wan<br>
④有ports属性，返回`https://${host}:${mainItem.ports}/`<br>
⑤否则，返回`http://${host}:${mainItem.port}/`<br>
局域网ip检测如果通过，会将有lan属性的地址替换<br>
