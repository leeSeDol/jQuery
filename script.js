$(function(){
/*
    $("#form1 input:enabled").val("这里变化了");
    $("#form1 input:disabled").val("这里也变化了");
    setInterval(function(){
        $(".length").text($("#form1 input:checked").length);
    },200);
    setInterval(function(){
        $(".select").text("你选中的是"+$("select :selected").text());
    },300);

    $("p").click(function(){
        $(this).css("background","red");
    });
    $("#id\\#b").css("background","red");
    $("#id\\[1\\]").css("background","blue");

*/    
/*    var $catagory = $('ul li:gt(5):not(:last)');
    if($catagory.is(":visible")){
        $catagory.hide();
        var $toggleBtn=$('div.showMore > a');
        $toggleBtn.click(function(){
            if($catagory.is(":hidden")){
                $catagory.show();
                $('.showMore').css("background","#860");
                $('.showMore a span').text("精简显示品牌");
                $('.SubCategoryBox ul li')
   +                .filter(":contains('佳能'),:contains('松下'),:contains('三星')")
                    .addClass("prompted");
            }else if($catagory.is(":visible")){
                $catagory.hide();
                $(".showMore").css("background","#fff");
                $(".showMore a span").text("显示全部品牌");
                $(".SubCategoryBox ul li")
                    .filter(":contains('佳能'),:contains('松下'),:contains('三星')")
                    .removeClass("prompted");
            }
            return false;
        });
    }
    var $catagory=$('.SubCategoryBox ul li:gt(5):not(:last)')
    console.log($catagory);
    if($catagory.is(":visible")){
        $catagory.hide();
        var $toggleBtn=$('div.showMore');
        $toggleBtn.click(function(){
            if($catagory.is(":hidden")){
                $catagory.show();
                $('.showMore').css("background","pink");
                $('.showMore a span').text("精简显示品牌");
                $('.SubCategoryBox ul li')
                    .filter(":contains('佳能'),:contains('松下'),:contains('三星')")
                    .addClass("prompted");
                $('.SubCategoryBox ul').animate({
                    height:"400px"
                });
            }else if($catagory.is(":visible")){
                $catagory.hide();
                $(".showMore").css("background","#fff");
                $(".showMore a span").text("显示全部品牌");
                $(".SubCategoryBox ul li")
                    .filter(":contains('佳能'),:contains('松下'),:contains('三星')")
                    .removeClass("prompted");
                $('.SubCategoryBox ul').animate({
                    height:"300px"
                });
            }
            return false;
        });
    }

var $li=$("ul li:eq(1)");
var li_txt = $li.text();
alert(li_txt);
var $para=$("p");
var p_txt=$para.attr("title");
alert(p_txt);

var $li_1=$("<li title='香蕉'>香蕉</li>");
var $li_2=$("<li title='雪梨'>雪梨</li>");
$("ul").append($li_1);
$($li_2).appendTo("ul");
$("ul").prepend($li_1);
$($li_2).prependTo("ul");

$($li_1).after($li_3);
$($li_2).before($li_3);

var $li=$("ul li:eq(1)").remove();
$("ul").append($li);
//$("ul li").remove("li[title != '菠萝']");
$("ul").empty();
$("ul li").click(function(){
    $(this).clone(true).appendTo("ul");
    $(this).remove();
});

$("p").replaceWith("<strong>你最不喜欢的水果是？</strong>");
$("ul").wrap("<div class='content'></div>");
$("ul").wrapAll("<div class='content'></div>")
$("ul li").wrapInner("<div class='content'></div>");

var $para=$("p");
$para.attr({
    "title":"your title",
    "name":"sss"
});
var p_txt=$para.attr("title");
console.log(p_txt);
$("p").removeAttr("name");
$("p").addClass("para slider att");
$("p").removeClass("att slider");
$("p").toggleClass("content");
if($("p").hasClass("content")){
    alert('');
}
if($("p").is(".content")){
    alert("content");
}
console.log($("p").html());
console.log($("p").text());
//this.defaultValue保存着
$("#address,#password").focus(function(){
    var txt_value=$(this).val();
    if(txt_value==this.defaultValue){
        $(this).val("");
    }
});
$("#address,#password").blur(function(){
    var txt_value=$(this).val();
    if(txt_value==""){
        $(this).val(this.defaultValue);
    }
});
var $body=$("body").children();
var $p=$("p").children();
var $ul=$("ul").children();
console.log($body.length);
console.log($p.length);
console.log($ul.length);
for(var i=0;i<$ul.length;i++){
    console.log($ul[i].innerHTML);
}
var $p1=$("p").next();
console.log($p1.html());
var $ul=$("ul").prev();
console.log($ul.html());
var $p2=$("p").siblings();
console.log($p2.html());
$(document).bind("click",function(e){
    $(e.target).closest("li").css("color","red");
});
console.log($("p").css("color"));
$("p").css({
    "color":"pink"
});
$("#address").width(500);
$("#address").height("18px");
var offset=$("#address").offset();
var left=offset.left;
var top=offset.top;
console.log(top);
console.log(left);
var position=$("#address").position();
var p_left=position.left;
var p_top=position.top;
console.log(p_top);
console.log(p_left);
console.log(position);

var x=10,y=20;
$("a.tooltip").mouseover(function(e){

    this.myTitle=this.title;
    this.title="";
    var $tooltip="<div id='tooltip'>"+this.myTitle+"</div>";
    $("body").append($tooltip);
    $("#tooltip").css({
        "top":e.pageY+x+"px",
        "left":e.pageX+y+"px"
    }).show("fast");
}).mouseout(function(){
    this.title=this.myTitle;
    $("#tooltip").remove();
}).mousemove(function(e){
    $("#tooltip").css({
        "top":e.pageY+x+"px",
        "left":e.pageX+y+"px"
    });
});

$("a.tooltip img").mouseover(function(e){
    this.myTitle=this.title;
    this.title="";
    var $tooltip="<div id='tooltip'><img src="+this.src+" alt='产品预览图' /></div>";
    $("body").append($tooltip);
    $($tooltip).css({
        "top":e.pageY+"px",
        "left":e.pageX+"px"
    }).show("fast");
}).mouseout(function(){
    this.title=this.myTitle;
    $("#tooltip").remove();
}).mousemove(function(e){
    $("#tooltip").css({
        "top":e.pageY+"px",
        "left":e.pageX+"px"
    });
});

$("div.panel .content").hide();
$("div.panel h5.head").bind("click",function(){
    if($("div.panel .content").is(":visible")){
        $("div.panel .content").hide("slow");
    }else{
        $("div.panel .content").show("slow");
    }
});
$("div.panel .content").hide();
$("div.panel h5.head").bind("click",function(){
    var $content=$(this).next("div.content");
    if($content.is(":visible")){
        $content.hide("fast");
    }else{
        $content.show("fast");
    }
});*/
$("div.panel .content").hide();
$("div.panel h5.head").bind("mouseover",function(){
    var $content=$(this).next("div.content");
    if($content.is(":visible")){
        $content.hide("fast");
    }else{
        $content.show("fast");
    }
});
$("div.panel h5.head").bind("mouseleave",function(){
    var $content=$(this).next("div.content");
    if($content.is(":visible")){
        $content.hide("fast");
    }else{
        $content.show("fast");
    }
});



})
