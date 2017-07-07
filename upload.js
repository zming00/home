//------------------------------版本检查--------------------------------
var DEFAULT_VERSION = "8.0";
var ua = navigator.userAgent.toLowerCase();
var isIE = ua.indexOf("msie")>-1;
var safariVersion;
 var now=(new Date()).getHours();
if(isIE){
    safariVersion =  ua.match(/msie ([\d.]+)/)[1];
}
if(safariVersion <= DEFAULT_VERSION){
    alert("请用IE8或以上版本的浏览器浏览本网");// 进行你所要的操作
}else{
  if(now>0&&now<=6){
    document.write("午夜好！");
   }else if(now>6&&now<=11){
    document.write("早上好！");
   }else if(now>11&&now<=14){
 //   document.write("中午好！");
   }else if(now>14&&now<=18){
    document.write("下午好！");
   }else{
    document.write("晚上好！");
   }
}

//-------------------------------检测卸载事件-------------------------------
//function checkLeave(){ 
//　　　　event.returnValue=""; 
//　　　} 
function  checkLeave(){
            var flag =  confirm('您确定退出吗？');
            if (flag){
                alert('退出成功')
            } else {
            }
        }

//window.onbeforeunload=function (){ 
//        if(event.clientX>document.body.clientWidth && event.clientY < 0 || event.altKey){ 
//            return confirm('您确定退出吗？');
//             }else{ 
//                 alert("你正在刷新页面"); 
//              } 
//        } 

//window.onbeforeunload=function(e){
//            return "我在这写点东西";
//        }
//        window.onunload=function(){
//            alert("离开")
//        }
//        window.onload=function(){
//              alert("加载完成");
//      }
//}
//----------------------------输入内容检查------------------------------
function beforeSubmit(form){
if(form.name.value=='' || form.tel.value=='' || form.email.value=='' || form.message.value==''){
alert('不能为空！');
form.name.focus();
return false;
}
else if(form.tel.value.length !=11){
alert('联系电话应为11位数字，请重新输入！');
form.password.focus();
return false;
}
else if (strEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1){
return true;
else
alert("邮箱格式不合法");
}
return true;
}

window.onbeforeunload=onclose;
function onclose()
{
if(event.clientX>document.body.clientWidth&&event.clientY<0||event.altKey)
{
return "您要离开吗？";
}
}
//-----------------------------------提交表单--------------------------------------------
//function abc(form)
//{
//alert("提交完成");
//form.action="upsave.jsp"; 
//form.submit();
//}

function test()
{
    alert("提交完成");
    form.action="upsave.jsp"; 
    document.getElementById("form").submit();    
    window.load=validate();
}