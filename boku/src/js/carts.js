"use strict";$(function(){$.ajax({url:"../api/car.php",type:"get",data:{status:"initialize"},success:function(t){var e=JSON.parse(t).map(function(t){return'<ul class="order_lists" data-cid='+t.cid+"  data-repertory="+t.repertory+'>\n                    <li class="list_chk">\n                        <input type="checkbox" id="'+t.cid+'"  class="son_check">\n                        <label for="'+t.cid+'"  ></label>\n                    </li>\n                    <li class="list_con">\n                        <div class="list_img"><a href="javascript:;"><img src="'+t.img+'" alt=""></a></div>\n                        <div class="list_text"><a href="detailPage.html?cid='+t.cid+'">'+t.title+'</a></div>\n                    </li>\n                    <li class="list_price">\n                        <del class="price1">￥'+t.pricing+'</del>\n                        <p class="price">￥'+t.sellingPrice+'</p>\n                    </li>\n                    <li class="list_amount">\n                        <div class="amount_box">\n                            <a href="javascript:;" class="reduce reSty">-</a>\n                            <input type="text" value="'+t.totality+'" class="sum">\n                            <a href="javascript:;" class="plus">+</a>\n                        </div>\n                    </li>\n                    <li class="list_sum">\n                        <p class="sum_price">￥'+t.sum+'</p>\n                    </li>\n                    <li class="list_op">\n                        <p class="del"><a href="javascript:;" class="delBtn">移除商品</a></p>\n                    </li>\n                </ul>'});$(".order_content").html(e);var a=$('input[type="checkbox"]'),s=$(".whole_check"),l=$(".cartBox"),i=$(".shopChoice"),r=$(".son_check");a.click(function(){$(this).is(":checked")?$(this).next("label").addClass("mark"):$(this).next("label").removeClass("mark")}),s.click(function(){var t=l.find('input[type="checkbox"]');$(this).is(":checked")?(t.prop("checked",!0),t.next("label").addClass("mark")):(t.prop("checked",!1),t.next("label").removeClass("mark")),u()}),r.each(function(){$(this).click(function(){if($(this).is(":checked")){var t=r.length,e=0;r.each(function(){$(this).is(":checked")&&e++}),e==t&&(s.prop("checked",!0),s.next("label").addClass("mark"))}else s.prop("checked",!1),s.next("label").removeClass("mark")})}),i.click(function(){var t=l.find('input[type="checkbox"]');$(this).is(":checked")?(t.prop("checked",!0),$("#all").prop("checked",!0),t.next("label").addClass("mark"),$("#all").next("label").addClass("mark")):(t.prop("checked",!1),$("#all").prop("checked",!1),t.next("label").removeClass("mark"),$("#all").next("label").removeClass("mark")),u()}),l.each(function(){var a=$(this).find(".son_check");a.each(function(){$(this).click(function(){if($(this).is(":checked")){var t=a.length,e=0;a.each(function(){$(this).is(":checked")&&e++}),e==t&&($(this).parents(".cartBox").find(".shopChoice").prop("checked",!0),$(this).parents(".cartBox").find(".shopChoice").next("label").addClass("mark"))}else $(this).parents(".cartBox").find(".shopChoice").prop("checked",!1),$(this).parents(".cartBox").find(".shopChoice").next("label").removeClass("mark");u()})})});var c=$(".plus"),n=$(".reduce"),o=$(".sum");c.click(function(){var t=$(this).prev("input"),e=parseFloat(t.val())+1,a=$(this).parents(".order_lists").data("cid");$repertory=$(this).parents(".order_lists").data("repertory"),e>$repertory?(alert("库存不足"),e=$repertory):$.ajax({url:"../api/car.php",type:"get",data:{status:"plus",cid:a,totality:e}}),$obj=$(this).parents(".amount_box").find(".reduce"),$priceTotalObj=$(this).parents(".order_lists").find(".sum_price"),$price=$(this).parents(".order_lists").find(".price").html(),$priceTotal=1*(e*parseFloat($price.substring(1))).toFixed(2),t.val(1*e.toFixed(2)),$priceTotalObj.html("￥"+$priceTotal),1<t.val()&&$obj.hasClass("reSty")&&$obj.removeClass("reSty"),u()}),n.click(function(){var t=$(this).next("input"),e=parseFloat(t.val())-1,a=$(this).parents(".order_lists").data("cid");e<=0&&(e=1),$.ajax({url:"../api/car.php",type:"get",data:{status:"plus",cid:a,totality:e}}),$priceTotalObj=$(this).parents(".order_lists").find(".sum_price"),$price=$(this).parents(".order_lists").find(".price").html(),$priceTotal=1*(e*parseFloat($price.substring(1))).toFixed(2),1<t.val()&&(t.val(1*e.toFixed(2)),$priceTotalObj.html("￥"+1*$priceTotal.toFixed(2))),1!=t.val()||$(this).hasClass("reSty")||$(this).addClass("reSty"),u()}),o.keyup(function(){var t,e=0,a=$(this).parents(".order_lists").find(".sum_price"),s=$(this).parents(".order_lists").find(".price").html();""==$(this).val()&&$(this).val("1"),$(this).val($(this).val().replace(/\D|^0/g,"")),e=$(this).val();var l=$(this).parents(".order_lists").data("cid"),i=$(this).parents(".order_lists").data("repertory");i<e?(alert("库存不足"),e=i,$(this).val(e)):e<=0&&(e=1,$(this).val(e)),$.ajax({url:"../api/car.php",type:"get",data:{status:"plus",cid:l,totality:e}}),t=1*(e*parseInt(s.substring(1))).toFixed(2),$(this).attr("value",e),a.html("￥"+t),u()});var d=null,p="";function h(){p=d.parents(".order_content"),$(".model_bg").fadeIn(300),$(".my_model").fadeIn(300),$(".closeModel").click(function(){m()}),$(".dialog-close").click(function(){m()})}function m(){$(".model_bg").fadeOut(300),$(".my_model").fadeOut(300)}function u(){var a=0,s=0,t=$(".calBtn a");r.each(function(){if($(this).is(":checked")){var t=parseFloat($(this).parents(".order_lists").find(".sum_price").html().substring(1)),e=parseFloat($(this).parents(".order_lists").find(".sum").val());a+=t,s+=e}}),59<=1*a?($(".shop_name>a").html("0.00"),$(".total_text2").html("￥0.00"),$(".total_text1").html("￥"+1*a.toFixed(2)),$(".delte>a").css("color","#333")):0==a?($(".total_text2").html("￥0.00"),$(".total_text1").html("￥0.00"),$(".delte>a").css("color","#ccc")):($(".shop_name>a").html("5.00"),$(".total_text2").html("￥5.00"),$(".total_text1").html("￥"+1*(1*a+5).toFixed(2)),$(".delte>a").css("color","#333")),$("#all").next("label").hasClass("mark")?($("#all1").next("label").addClass("mark"),$("#shop_a").next("label").addClass("mark")):$("#all1").next("label").removeClass("mark"),$(".total_text").html("￥"+1*a.toFixed(2)),$(".piece_num").html(s),0!=a&&0!=s?t.hasClass("btn_sty")||t.addClass("btn_sty"):t.hasClass("btn_sty")&&t.removeClass("btn_sty")}$(".delBtn").click(function(){$(".del_massage").html("您确认要删除该宝贝吗？"),d=$(this).parents(".order_lists"),h()}),$(".delte").click(function(){"rgb(204, 204, 204)"!=$(".delte>a").css("color")&&($(".del_massage").html("您确认要删除所有选中的宝贝吗？"),d=$(".order_content").find('label[class="mark"]').parents(".order_lists"),h())}),$(".dialog-sure").click(function(){var t=[];for($i=0;$i<d.length;$i++)t[$i]=d.eq($i).data("cid");$cidss=JSON.stringify(t),$.ajax({url:"../api/car.php",type:"get",data:{cids:$cidss,status:"del"},success:function(t){console.log(t)}}),d.remove(),null!=p.html().trim()&&0!=p.html().trim().length||($(".cartMain").remove(),$(".empty").css("display","block")),m(),r=$(".son_check"),u()}),cookie.get("username")&&($(".header_a1").html("欢迎您,"+cookie.get("username")),$(".header_a2").html("退出登录"),$(".header_a2").attr("href","../index.html"),$(".header_a1").css("margin-top","5px"),$(".header_a1").css("padding-right","15px"),$(".header_a1").css("border-right","1px solid #ccc"),$(".header_a2").click(function(){confirm("您确定退出登录？")&&cookie.remove("username")}))}})});