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
*/
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




})
