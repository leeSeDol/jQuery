$(function(){
	$("#btn").click(function(){
		htmlobj = $.ajax({url:"http://www.w3school.com.cn/jquery/test1.txt",async:false});
		$("#myDiv").html(htmlobj.responseText);
	});
});
