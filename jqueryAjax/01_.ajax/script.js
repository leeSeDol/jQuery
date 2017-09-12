$(function(){
	$("#btn").click(function(){
		htmlobj = $.ajax({url:"test1.txt",async:false});
		$("#myDiv").html(htmlobj.responseText);
	});
});
