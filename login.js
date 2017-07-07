function test()
{
    alert("提交完成");
    form.action="upsave.jsp"; 
    document.getElementById("form").submit();    
    window.load=validate();
}