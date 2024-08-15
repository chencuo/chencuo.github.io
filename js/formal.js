








/* 禁用f12与按键防抖 start */
// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
  if (TT !== null) clearTimeout(TT);
  TT = setTimeout(fn, time);
}


// 复制提醒
document.addEventListener("copy", function () {
    debounce(function () {
      new Vue({
        data: function () {
          this.$notify({
            title: "八嘎！你被我发现啦😜",
            message: "你滴不点赞滴干活！死啦死啦地！",
            position: 'top-left',
            offset: 50,
            showClose: true,
            type: "success",
            duration: 5000
          });
        }
      })
    }, 300);
  })
  


// 分享本页
function share_() {
    let url = window.location.origin + window.location.pathname
    try {
        // 截取标题
        var title = document.title;
        var subTitle = title.endsWith("| cuo") ? title.substring(0, title.length - 14) : title;
        navigator.clipboard.writeText('陈错错的站内分享\n标题：' + subTitle + '\n链接：' + url + '\n欢迎来访！🍭🍭🍭');
        new Vue({
            data: function () {
                this.$notify({
                    title: "成功复制分享信息🎉",
                    message: "您现在可以通过粘贴直接跟小伙伴分享了！",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "success", 
                    duration: 5000
                });
                // return { visible: false }
            }
        })
    } catch (err) {
        console.error('复制失败！', err);
    }
    // new ClipboardJS(".share", { text: function () { return '标题：' + document.title + '\n链接：' + url } });
    // btf.snackbarShow("本页链接已复制到剪切板，快去分享吧~")
}

// 防抖
function share() {
    debounce(share_, 300);
}

/*f12禁用*/
// document.onkeydown = function (e) {
//     if (123 == e.keyCode || (e.ctrlKey && e.shiftKey && (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode)) || (e.ctrlKey && 85 === e.keyCode)) return btf.snackbarShow("哎呀小哥哥，不要看人家的代码啦！o(*////▽////*)!"), event.keyCode = 0, event.returnValue = !1, !1
// };






/*节日公祭日弹出*/
var d = new Date();
m = d.getMonth() + 1;
dd = d.getDate();
y = d.getFullYear();

// 公祭日
if (m == 9 && dd == 18) {
    document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(60%);");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是九一八事变" + (y - 1931).toString() + "周年纪念日\n🪔勿忘国耻，振兴中华🪔");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 7 && dd == 7) {
    document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(60%);");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是卢沟桥事变" + (y - 1937).toString() + "周年纪念日\n🪔勿忘国耻，振兴中华🪔");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 12 && dd == 13) {
    document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(60%);");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是南京大屠杀" + (y - 1937).toString() + "周年纪念日\n🪔勿忘国耻，振兴中华🪔");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 8 && dd == 14) {
    document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(60%);");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是世界慰安妇纪念日\n🪔勿忘国耻，振兴中华🪔");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}


// 节假日
if (m == 10 && dd <= 3) {//国庆节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("祝祖国" + (y - 1949).toString() + "岁生日快乐！");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 8 && dd == 15) {//搞来玩的，小日子投降
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("小日子已经投降" + (y - 1945).toString() + "年了😃");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 1 && dd == 1) {//元旦节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire(y.toString() + "年元旦快乐！🎉");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 3 && dd == 8) {//妇女节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("各位女神们，妇女节快乐！👩");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
l = ["非常抱歉，因为不可控原因，博客将于明天停止运营！", "好消息，日本没了！", "美国垮了，原因竟然是川普！", "微软垮了！", "你的电脑已经过载，建议立即关机！", "你知道吗？站长很喜欢你哦！", "一分钟有61秒哦", "你喜欢的人跟别人跑了！"]
if (m == 4 && dd == 1) {//愚人节，随机谎话
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire(l[Math.floor(Math.random() * l.length)]);
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 5 && dd == 1) {//劳动节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("劳动节快乐\n为各行各业辛勤工作的人们致敬！");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 5 && dd == 4) {//青年节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("青年节快乐\n青春不是回忆逝去,而是把握现在！");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 5 && dd == 20) {//520
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今年是520情人节\n快和你喜欢的人一起过吧！💑");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 7 && dd == 1) {//建党节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("祝中国共产党" + (y - 1921).toString() + "岁生日快乐！");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 9 && dd == 10) {//教师节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("各位老师们教师节快乐！👩‍🏫");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 12 && dd == 25) {//圣诞节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("圣诞节快乐！🎄");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}

//传统节日部分

if ((y == 2023 && m == 4 && dd == 5) || (y == 2024 && m == 4 && dd == 4) || (y == 2025 && m == 4 && dd == 4)) {//清明节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("清明时节雨纷纷,一束鲜花祭故人💐");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if ((y == 2023 && m == 12 && dd == 22) || (y == 2024 && m == 12 && dd == 21) || (y == 2025 && m == 12 && dd == 21)) {//冬至
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("冬至快乐\n快吃上一碗热热的汤圆和饺子吧🧆");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}

var lunar = calendarFormatter.solar2lunar();

//农历采用汉字计算，防止出现闰月导致问题

if ((lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初六") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初五") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初四") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初三") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初二") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初一") || (lunar["IMonthCn"] == "腊月" && lunar["IDayCn"] == "三十") || (lunar["IMonthCn"] == "腊月" && lunar["IDayCn"] == "廿九")) {
    //春节，本来只有大年三十到初六，但是有时候除夕是大年二十九，所以也加上了
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire(y.toString() + "年新年快乐\n🎊祝你心想事成，诸事顺利🎊");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if ((lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "十五")) {
    //元宵节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("元宵节快乐\n送你一个大大的灯笼🧅");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if ((lunar["IMonthCn"] == "五月" && lunar["IDayCn"] == "初五")) {
    //端午节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("端午节快乐\n请你吃一条粽子🍙");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if ((lunar["IMonthCn"] == "七月" && lunar["IDayCn"] == "初七")) {
    //七夕节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("七夕节快乐\n黄昏后,柳梢头,牛郎织女来碰头");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if ((lunar["IMonthCn"] == "八月" && lunar["IDayCn"] == "十五")) {
    //中秋节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("中秋节快乐\n请你吃一块月饼🍪");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if ((lunar["IMonthCn"] == "九月" && lunar["IDayCn"] == "初九")) {
    //重阳节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("重阳节快乐\n独在异乡为异客，每逢佳节倍思亲");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}

// 切换主题提醒
// if (y == 2022 && m == 12 && (dd >= 18 && dd <= 20)) {
//     if (sessionStorage.getItem("isPopupWindow") != "1") {
//         Swal.fire("网站换成冬日限定主题啦⛄");
//         sessionStorage.setItem("isPopupWindow", "1");
//     }
// }


/*结束弹窗节假日*/


/*开启定位*/
$.ajax({
    type: 'get',
    url: 'https://apis.map.qq.com/ws/location/v1/ip',
    data: {
      key: 'AO7BZ-OEDWJ-IKMF4-DJ7CX-PHT6K-SVFEO',  // 这里要写你的KEY!!!
      output: 'jsonp',
    },
    dataType: 'jsonp',
    success: function (res) {
        console.log(res);
        ipLoacation = res;
        console.log(ipLoacation);
    }
  })
  function getDistance(e1, n1, e2, n2) {
    const R = 6371
    const { sin, cos, asin, PI, hypot } = Math
    let getPoint = (e, n) => {
      e *= PI / 180
      n *= PI / 180
      return { x: cos(n) * cos(e), y: cos(n) * sin(e), z: sin(n) }
    }
  
    let a = getPoint(e1, n1)
    let b = getPoint(e2, n2)
    let c = hypot(a.x - b.x, a.y - b.y, a.z - b.z)
    let r = asin(c / 2) * 2 * R
    return Math.round(r);
  }
  
  function showWelcome() {
  
    let dist = getDistance(109.554011, 29.882572, ipLoacation.result.location.lng, ipLoacation.result.location.lat); //这里换成自己的经纬度
    let pos = ipLoacation.result.ad_info.nation;
    let ip;
    let posdesc;
    //根据国家、省份、城市信息自定义欢迎语
    switch (ipLoacation.result.ad_info.nation) {
      case "日本":
        posdesc = "よろしく，一起去看樱花吗";
        break;
      case "美国":
        posdesc = "Let us live in peace!";
        break;
      case "英国":
        posdesc = "想同你一起夜乘伦敦眼";
        break;
      case "俄罗斯":
        posdesc = "干了这瓶伏特加！";
        break;
      case "法国":
        posdesc = "C'est La Vie";
        break;
      case "德国":
        posdesc = "Die Zeit verging im Fluge.";
        break;
      case "澳大利亚":
        posdesc = "一起去大堡礁吧！";
        break;
      case "加拿大":
        posdesc = "拾起一片枫叶赠予你";
        break;
      case "中国":
        pos = ipLoacation.result.ad_info.province + " " + ipLoacation.result.ad_info.city + " " + ipLoacation.result.ad_info.district;
        ip = ipLoacation.result.ip;
        switch (ipLoacation.result.ad_info.province) {
          case "北京市":
            posdesc = "北——京——欢迎你~~~";
            break;
          case "天津市":
            posdesc = "讲段相声吧。";
            break;
          case "河北省":
            posdesc = "山势巍巍成壁垒，天下雄关。铁马金戈由此向，无限江山。";
            break;
          case "山西省":
            posdesc = "展开坐具长三尺，已占山河五百余。";
            break;
          case "内蒙古自治区":
            posdesc = "天苍苍，野茫茫，风吹草低见牛羊。";
            break;
          case "辽宁省":
            posdesc = "我想吃烤鸡架！";
            break;
          case "吉林省":
            posdesc = "状元阁就是东北烧烤之王。";
            break;
          case "黑龙江省":
            posdesc = "很喜欢哈尔滨大剧院。";
            break;
          case "上海市":
            posdesc = "众所周知，中国只有两个城市。";
            break;
          case "江苏省":
            switch (ipLoacation.result.ad_info.city) {
              case "南京市":
                posdesc = "这是我挺想去的城市啦。";
                break;
              case "苏州市":
                posdesc = "上有天堂，下有苏杭。";
                break;
              default:
                posdesc = "散装是必须要散装的。";
                break;
            }
            break;
          case "浙江省":
            posdesc = "东风渐绿西湖柳，雁已还人未南归。";
            break;
          case "河南省":
            switch (ipLoacation.result.ad_info.city) {
              case "郑州市":
                posdesc = "豫州之域，天地之中。";
                break;
              case "南阳市":
                posdesc = "臣本布衣，躬耕于南阳。此南阳非彼南阳！";
                break;
              case "驻马店市":
                posdesc = "峰峰有奇石，石石挟仙气。嵖岈山的花很美哦！";
                break;
              case "开封市":
                posdesc = "刚正不阿包青天。";
                break;
              case "洛阳市":
                posdesc = "洛阳牡丹甲天下。";
                break;
              default:
                posdesc = "可否带我品尝河南烩面啦？";
                break;
            }
            break;
          case "安徽省":
            posdesc = "蚌埠住了，芜湖起飞。";
            break;
          case "福建省":
            posdesc = "井邑白云间，岩城远带山。";
            break;
          case "江西省":
            posdesc = "落霞与孤鹜齐飞，秋水共长天一色。";
            break;
          case "山东省":
            posdesc = "遥望齐州九点烟，一泓海水杯中泻。";
            break;
          case "湖北省":
            posdesc = "来碗热干面！";
            break;
          case "湖南省":
            posdesc = "74751，长沙斯塔克。";
            break;
          case "广东省":
            posdesc = "老板来两斤福建人。";
            break;
          case "广西壮族自治区":
            posdesc = "桂林山水甲天下。";
            break;
          case "海南省":
            posdesc = "朝观日出逐白浪，夕看云起收霞光。";
            break;
          case "四川省":
            posdesc = "康康川妹子。";
            break;
          case "贵州省":
            posdesc = "茅台，学生，再塞200。";
            break;
          case "云南省":
            posdesc = "玉龙飞舞云缠绕，万仞冰川直耸天。";
            break;
          case "西藏自治区":
            posdesc = "躺在茫茫草原上，仰望蓝天。";
            break;
          case "陕西省":
            posdesc = "来份臊子面加馍。";
            break;
          case "甘肃省":
            posdesc = "羌笛何须怨杨柳，春风不度玉门关。";
            break;
          case "青海省":
            posdesc = "牛肉干和老酸奶都好好吃。";
            break;
          case "宁夏回族自治区":
            posdesc = "大漠孤烟直，长河落日圆。";
            break;
          case "新疆维吾尔自治区":
            posdesc = "驼铃古道丝绸路，胡马犹闻唐汉风。";
            break;
          case "台湾省":
            posdesc = "我在这头，大陆在那头。";
            break;
          case "香港特别行政区":
            posdesc = "永定贼有残留地鬼嚎，迎击光非岁玉。";
            break;
          case "澳门特别行政区":
            posdesc = "性感荷官，在线发牌。";
            break;
          default:
            posdesc = "带我去你的城市逛逛吧！";
            break;
        }
        break;
      default:
        posdesc = "带我去你的国家逛逛吧。";
        break;
    }
  
    //根据本地时间切换欢迎语
    let timeChange;
    let date = new Date();
    if (date.getHours() >= 5 && date.getHours() < 11) timeChange = "<span>上午好</span>，一日之计在于晨！";
    else if (date.getHours() >= 11 && date.getHours() < 13) timeChange = "<span>中午好</span>，该摸鱼吃午饭了。";
    else if (date.getHours() >= 13 && date.getHours() < 15) timeChange = "<span>下午好</span>，懒懒地睡个午觉吧！";
    else if (date.getHours() >= 15 && date.getHours() < 16) timeChange = "<span>三点几啦</span>，一起饮茶呀！";
    else if (date.getHours() >= 16 && date.getHours() < 19) timeChange = "<span>夕阳无限好！</span>";
    else if (date.getHours() >= 19 && date.getHours() < 24) timeChange = "<span>晚上好</span>，夜生活嗨起来！";
    else timeChange = "夜深了，早点休息，少熬夜。";
  
    try {
      //自定义文本和需要放的位置
      document.getElementById("welcome-info").innerHTML =
        `<b><center>🎉 欢迎信息 🎉</center>&emsp;&emsp;欢迎来自 <span style="color:var(--theme-color)">${pos}</span> 的小伙伴，${timeChange}您现在距离站长约 <span style="color:var(--theme-color)">${dist}</span> 公里，当前的IP地址为： <span style="color:var(--theme-color)">${ip}</span>， ${posdesc}</b>`;
    } catch (err) {
      // console.log("Pjax无法获取#welcome-info元素🙄🙄🙄")
    }
  }
  window.onload = showWelcome;
  // 如果使用了pjax在加上下面这行代码
  document.addEventListener('pjax:complete', showWelcome);
  
  /* 欢迎信息 end */