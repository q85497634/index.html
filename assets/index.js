<!--标题及签名-->
var title='somneone's Cloud';
var sign='sign';
<!--主页内容-->

// 🔥 修正：适配新数组格式的分割线
const blank = [{ name: '————————', icon: 'blank', url: '#none#' }];

var arrA=new Array();
// ===================== arrA 主页面数据【新数组格式】=====================
arrA.push([
  { name: '文件浏览器', icon: 'fbis', port: '38088' },
  { name: 'IPV6', icon: 'wan', url: 'https://yourdomain:38088',type:'ipv6' },
  { name: '局域网', icon: 'lan', url: 'https://192.168.1.1:38088',type:'lan' },
  ...blank
]):
