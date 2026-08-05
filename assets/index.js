const blank = [{ name: '————————', icon: 'blank', url: '#none#' }];
var arrA=new Array();
// ===================== arrA 主页面数据==================
arrA.push([
   //示例①：ports和port，会生成对应的https://host:ports和https://host:port。host由内网或外网决定
  { name: '文件浏览器(第一个对象为主图标)', icon: 'fbis', ports: '18088' },
  { name: '文件浏览器(第二个及以后为弹出菜单图标)', icon: 'fbis', port: '28088' },
  //添加blank生成一条分割线
  ...blank,
  //示例②：url中填入${ddns}或${lan_addr}，会总是填入预设的内网ip/ddns域名。
  { name: 'IPV6(第二个及以后为弹出菜单图标)', icon: 'wan', url: `https://${ddns}:18088`,type:'ipv6' },
  { name: '局域网(第二个及以后为弹出菜单图标)', icon: 'lan', url: `https://${lan_addr}:28088`,type:'lan' }
]):
//##############################
//以上部分为主页面的第一个图标，其中第一个对象为主图标，第二个及以后为弹出菜单图标
//name为显示的名称，icon为/img/png下的图标名，推荐128*128,必须为png格式，type决定了文字的显示样式，样式可在index.html中修改，其他参数（url,ports,port,lan,wan,）至少有一个就行
//##############################
arrA.push([
  //示例③：ports和port后面可以跟/路径
  { name: 'Lucky', icon: 'lucky2', ports: '16601/safe' },
  ...blank,
  { name: 'IPV6', icon: 'wan', url: `https://${ddns}:16601/safe`,type:'ipv6' },
  { name: '局域网', icon: 'lan', url: `https://${lan_addr}:16601/safe`,type:'lan' }
]):
//##############################
//以上部分为主页面的第二个图标
//##############################
arrA.push([
  //示例④：可以填入相对路径
  { name: 'iStore', icon: 'is', url: '../cgi-bin/luci'},
]);

arrB.push([
  { name: 'NanoCloud', icon: 'clash', url: 'https://edu.360buyimg.men/auth/register?code=x1up9jm6' }
]);

arrA.push([
  //示例⑥：可以分别填写wan和lan地址,wan地址可写ddnsto的地址
  { name: '电信光猫', icon: 'tele', 'wan': 'https://xxx.gd.ddnsto.com/cgi-bin/luci','lan': 'http://192.168.1.1' }
]);

var arrB=new Array();
// ===================== arrB 副页面数据==================
arrB.push([
  { name: 'Github', icon: 'github2', url: 'https://github.com/q85497634/index.html',type:'vpn' },
  { name: '☑luci-app-lucky安装-aarch64_cortex-a53', icon: 'lucky', url: 'https://github.com/sirpdboy/luci-app-lucky/releases' },
  { name: 'luci-app-wechatpush-aarch64_cortex-a53', icon: 'github2', url: 'https://github.com/tty228/luci-app-wechatpush' },
  { name: 'luci-theme-argon', icon: 'argon', url: 'https://github.com/jerrykuku/luci-theme-argon' },
  { name: 'luci-app-ddns-go', icon: 'ddnsgo', url: 'https://github.com/sirpdboy/luci-app-ddns-go' }
]);

arrB.push([
  { name: 'DockerHub', icon: 'Docker_D', url: 'https://hub.docker.com',type:'vpn' }
]);

arrB.push([
  { name: 'CSDN', icon: 'csdn', url: 'https://www.csdn.net' }
]);

arrB.push([
  { name: 'ddnsto', icon: 'ddnsto', url: 'https://fw.koolcenter.com/binary/ddnsto/openwrt/' }
]);

arrB.push([
  { name: '浩思彼岸', icon: 'hassbian', url: 'https://bbs.hassbian.com/forum-38-1.html' }
]);

arrB.push([
  { name: '矿神', icon: 'imnks', url: 'https://imnks.com/#google_vignette' }
]);

arrB.push([
  { name: '恩山', icon: 'enshan', url: 'https://www.right.com.cn' }
]);

arrB.push([
  { name: '酷友社', icon: 'kool', url: 'https://www.koolcenter.com' }
]);
