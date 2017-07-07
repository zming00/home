function BrowserType()  
  {  
      var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
      var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器  
      var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器  
      var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器  
      var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器  
      var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器  
      var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器  
  
      if (isIE)   
      {  
           var reIE = new RegExp("MSIE (\\d+\\.\\d+);");  
           reIE.test(userAgent);  
           var fIEVersion = parseFloat(RegExp["$1"]);  
           if(fIEVersion == 7)  
           { return "IE7";}  
           else if(fIEVersion == 8)  
           { return "IE8";}  
           else if(fIEVersion == 9)  
           { return "IE9";}  
           else if(fIEVersion == 10)  
           { return "IE10";}  
           else if(fIEVersion == 11)  
           { return "IE11";}  
           else  
           { return "0"}//IE版本过低  
       }//isIE end  
         
       if (isFF) {  return "FF";}  
       if (isOpera) {  return "Opera";}  
       if (isSafari) {  return "Safari";}  
       if (isChrome) { return "Chrome";}  
       if (isEdge) { return "Edge";}  
   }//myBrowser() end  
     
   //判断是否是IE浏览器  
   function isIE()  
   {  
      var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
      var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器  
      if(isIE)  
      {  
          return "1";  
      }  
      else  
      {  
          return "-1";  
      }  
   }  
     
     
   //判断是否是IE浏览器，包括Edge浏览器  
   function IEVersion()  
   {  
      var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
      var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器  
var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器  
      if(isIE)  
      {  
           var reIE = new RegExp("MSIE (\\d+\\.\\d+);");  
           reIE.test(userAgent);  
           var fIEVersion = parseFloat(RegExp["$1"]);  
           if(fIEVersion == 7)  
           { return "IE7";}  
           else if(fIEVersion == 8)  
           { return "IE8";}  
           else if(fIEVersion == 9)  
           { return "IE9";}  
           else if(fIEVersion == 10)  
           { return "IE10";}  
           else if(fIEVersion == 11)  
           { return "IE11";}  
           else  
           { return "0"}//IE版本过低  
      }  
else if(isEdge)  
{  
    return "Edge";  
}  
      else  
      {  
          return "-1";//非IE  
      }  
   }  
   -->

   var DEFAULT_VERSION = "8.0";
var ua = navigator.userAgent.toLowerCase();
var isIE = ua.indexOf("msie")>-1;
var safariVersion;
if(isIE){
    safariVersion =  ua.match(/msie ([\d.]+)/)[1];
}
if(safariVersion <= "11"){
    alert("请用IE8或以上版本的浏览器浏览本网");// 进行你所要的操作
}





var BrowserDetect = {
      init: function () {
         this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
         this.version = this.searchVersion(navigator.userAgent)
         || this.searchVersion(navigator.appVersion)
         || "an unknown version";
      },
      searchString: function (data) {
         for (var i=0;i<data.length;i++) {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
               if (dataString.indexOf(data[i].subString) != -1)
                  return data[i].identity;
            }
            else if (dataProp)
               return data[i].identity;
         }
      },
      searchVersion: function (dataString) {
         var index = dataString.indexOf(this.versionSearchString);
         if (index == -1) return;
         return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
      },
      dataBrowser: [
         {
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
         },
         {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
         },
         {
            prop: window.opera,
            identity: "Opera",
            versionSearch: "Version"
         },
         { 
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
         },
         {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
         },
         {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
         },
         { // for older Netscapes (4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
         }
      ],
   };
   BrowserDetect.init();
   if(test.BrowserDetect.version <= 12 && test.BrowserDetect.browser == "Explorer"){
    alert("IE版本小于8，请更新！");
}

//----------------------------------------------------------------------------------------------
EventUtil.addHandler(window, "unload", function (event) {
    alert("Unloaded");
})
function  showMsg(){
            var flag =  confirm('你真要退出吗');
            if (flag){
                alert('退出成功')
            } else {
                alert('取消')
            }
        }
 onbeforeunload="checkLeave()"
//-----------------------------疑问疑问？？？--------------------------------------
window.onbeforeunload=function (){ 
alert("===onbeforeunload==="); 
if(event.clientX>document.body.clientWidth && event.clientY < 0 || event.altKey){ 
return confirm('您确定退出吗？');
}else{ 
alert("你正在刷新页面"); 
} 
} 


function checkLeave(){   
      var n = event.screenX - screenLeft;   
      var b = n > document.documentElement.scrollWidth-20;   
      if(b && event.clientY < 0 || event.altKey)   
      {   

          event.returnValue = "是否关闭？";
      }else{
          alert("是刷新而非关闭");   
     }   
}