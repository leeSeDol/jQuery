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
});
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

$("div.panel h5.head").toggle(function(){
    $(this).addClass("highlight");
    $(this).next().show("fast");
},function(){
    $(this).removeClass("highlight");
    $(this).next().hide("fast");
});

//为span元素绑定click事件
$("span").click(function(){
   var txt = $("#msg").html()+"<p>内层span元素被点击</p>";
   $("#msg").html(txt);
   event.stopPropagation();
});
//为div元素绑定click事件
$("div#content").click(function(){
    var txt = $("#msg").html()+"<p>外层div元素被点击</p>";
    $("#msg").html(txt);
    event.stopPropagation();
});
$("body").click(function(){
    var txt = $("#msg").html()+"<p>body被点击</p>";
    $("#msg").html(txt);
});
$("#sub").bind("click",function(){
    var username=$("#username").val();
    if(username==""){
        $("#msg").html("<p>文本框的值不能为空。</p>");
        event.preventDefault();
    }
});

$("a").click(function(){
    alert(event.type);
    return false;
});
$("a[href='#']").click(function(){
    var tg=event.target;
    alert(tg.href);
    alert(event.pageX);
    alert(event.pageY);
    return false;
});
$("a").click(function(event){
    console.log(event.which);
});
$("input").keyup(function(event){
    console.log(event.which);
});

$("#btn").bind("click",myFun1=function(){
    $("#test").append("<p>我绑定函数1</p>");
}).bind("click",myFun2=function(){
    $("#test").append("<p>我绑定函数2</p>");
}).bind("click",myFun3=function(){
    $("#test").append("<p>我绑定函数3</p>");
});
$("#delAll").click(function(){
    $("#btn").unbind("click",myFun2).unbind("click",myFun1);
    $("#btn").unbind("click");
});
$("#btn").one("click",function(){
    $("#test").append("<p>我绑定函数1</p>");
}).one("click",myFun2=function(){
    $("#test").append("<p>我绑定函数2</p>");
}).one("click",myFun3=function(){
    $("#test").append("<p>我绑定函数3</p>");
});
$("#btn").trigger("click");

$("#btn").bind("myClick",function(event,message1,message2){
    alert("<p>"+message1+message2+"</p>");
})
$("#btn").trigger("myClick",["counter ","striker"]);
$("div").bind("mouseover mouseout",function(){
    $(this).toggleClass("over");
});
//等于上面的代码
$("div").bind("mouseover",function(){
    $(this).toggleClass("over");
}).bind("mouseout",function(){
    $(this).toggleClass("over");
});
$("div").bind("click",function(){
    $("body").append("<p>click事件</p>");
}).bind("click.plugin",function(){
    $("body").append("<p>click.plugin事件</p>");
});
$("button").bind("click",function(){
    $("div").trigger("click!");
});
$("div#body").hide();
$("div#body").fadeIn();
$("div#body").slideUp();
$("div#body").slideDown();
$("div#body").animate({
    "width":"+=100",
},500).animate({
    "height":"+=100",
},500,function(){
    $(this).css({
        "border":"1px solid #08b"
    });
});
$("#body").hover(function(){
    $(this).stop(true)
        .delay(1000)
        .animate({
            width:"200"
        }).animate({
            height:"200"
        });
},function(){
    $(this).stop(true)
        .animate({
            width:"100"
        }).animate({
            height:"100"
        });
});
$("#head").click(function(){
    $(this).next("div").slideToggle();
}).toggle(function(){
    $(this).fadeTo(500,0.2);
},function(){
    $(this).fadeTo(500,1);
});
$(":input").focus(function(){
    $(this).addClass("focus");
}).blur(function(){
    $(this).removeClass("focus");
});
var $comment=$("#comment");
$(".bigger").click(function(){
    if(!$comment.is(":animated")){
        if( $comment.height()<500 ){
            //$comment.height( $comment.height() + 50 );
            $comment.animate({
                height:"+=50"
            },400);
        }
    }
    
});
$(".smaller").click(function(){
    if(!$comment.is(":animated")){
        if( $comment.height()>50 ){
            //$comment.height( $comment.height() - 50 );
            $comment.animate({
                height:"-=50"
            },400);
        }
    }
});
$(".up").click(function(){
    if(!$comment.is(":animated")){
        $comment.animate({
            scrollTop:"-=50"
        },400);
    }
});
$(".down").click(function(){
    if(!$comment.is(":animated")){
        $comment.animate({
            scrollTop:"+=50"
        },400);
    }
});
$("#checkAll").click(function(){
    $("[name=items]:checkbox").attr('checked',true);
});
$("#checkNo").click(function(){
    $("[name=items]:checkbox").attr('checked',false);
});
$("#checkAll").click(function(){
        $('[name=items]:checkbox').attr("checked",this.checked);
});
$("#checkRev").click(function(){
    $("[name=items]:checkbox").each(function(){
        this.checked =! this.checked;
    });
});
$("#send").click(function(){
    var str="你选中的是：\r\n";
    $('[name=items]:checkbox:checked').each(function(){
        str += $(this).val()+"\r\n";
    });
    alert(str);
});
$('[name=items]:checkbox').click(function(){
    var flag=true;
    $('[name=items]:checkbox').each(function(){
        if(!this.checked){
            flag=false;
        }
    });
    $("#checkAll").attr("checked",flag);
});
$('[name=items]:checkbox').click(function(){
    var $tmp = $('[name=items]:checkbox');
    $('#checkAll').attr("checked",$tmp.length==$tmp.filter(':checked').length);
});
$("#add").click(function(){
    var $options = $("#select1 option:selected");
    $options.appendTo("#select2");
});
$("#add_all").click(function(){
    var $options = $("#select1 option");
    $options.appendTo("#select2");
});
$("#remove").click(function(){
    var $options = $("#select2 option:selected");
    $options.appendTo("#select1");
});
$("#remove_all").click(function(){
    var $options = $("#select2 option");
    $options.appendTo("#select1");
});*/
$("form :input.required").each(function(){
    var $required = $("<strong class='high'> *</strong>")
    $(this).parent().append($required);//将它追加到文档中
});
$("form :input").blur(function(){
    var $parent = $(this).parent();
    $parent.find(".formtips").remove();
    //验证用户名
    if($(this).is("#username")){
        if(this.value=="" || this.value.length<6){
            var errorMsg = '请输入至少六位的用户名';
            $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
        }else{
            var okMsg='输入正确';
            $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
        }
    }
    //验证邮箱

});

});
