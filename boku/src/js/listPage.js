"use strict";$(function(){var n=0;$.ajax({url:"../api/listPage.php",type:"get",async:!0,data:{page:n,qty:24},success:function(a){var i=JSON.parse(a),t=i.totality,e=i.row.map(function(a){return"<li data_id="+a.cid+'>\n                        <a href="#">\n                        <img src='+a.img+' alt="" /> \n                        <p>'+a.title+"</p>\n                        <span>￥"+a.sellingPrice+"</span>|\n                        <del>￥"+a.pricing+"</del></a>\n                        </li>"});$("#goodslist").html(e),$("#goodslist>li").click(function(){location.href="../html/detailPage.html?cid="+$(this).attr("data_id")}),$("#more").click(function(){t<=n+24?($("#more").html("我是有底线的"),$("#more").css("background","#ccc")):($("#more").css("display","none"),$(".loading").css("display","block"),n+=24,setTimeout(function(){$("#more").css("display","block"),$(".loading").css("display","none"),$.ajax({url:"../api/listPage.php",type:"get",async:!0,data:{page:n,qty:24},success:function(a){var i=JSON.parse(a);e+=i.row.map(function(a){return"<li data_id="+a.cid+'>\n                                <a href="#">\n                                <img src='+a.img+' alt="" /> \n                                <p>'+a.title+"</p>\n                                <span>￥"+a.sellingPrice+"</span>|\n                                <del>￥"+a.pricing+"</del></a>\n                                </li>"}),$("#goodslist").html(e),$("#goodslist>li").click(function(){location.href="../html/detailPage.html?cid="+$(this).attr("data_id")})}})},1e3))})}}),cookie.get("username")&&($(".header_a1").html("欢迎您,"+cookie.get("username")),$(".header_a2").html("退出登录"),$(".header_a2").attr("href","../index.html"),$(".header_a1").css("margin-top","5px"),$(".header_a1").css("padding-right","15px"),$(".header_a1").css("border-right","1px solid #ccc"),$(".header_a2").click(function(){confirm("您确定退出登录？")}))});