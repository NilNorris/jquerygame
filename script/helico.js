/* https://www.norrisitefy.vercel.app : Contactez pour la version non minifié de ce code */

$(function(){$(".jouer").click(function(){var t=$(this).attr("id");top.location.href=t+".html"}),$("#demovideo").click(function(){top.location.href="demo.html"}),$("#demoimg").click(function(){top.location.href="images.html"});var n=!0,a=!0,e=0,c=0,t=0,i=0,o=0,r=0,p=5,s=!0,l=!0,f=!0,m=!0,u=!0,g=$("#divpage").offset().left,h=$("#divpage").offset().top;function d(){a&&(t+=15,$(".pa").css("transform","rotate("+t+"deg)"))}function v(t){var e;a&&(3==++c&&(c=1),e="image/arme"+c+".png",$(".arme").attr("src",e))}function x(){i<5?(i++,$("#helico").css("transform","rotate("+i+"deg)")):5<i&&(i--,$("#helico").css("transform","rotate("+i+"deg)"))}function k(t,e){var a=!1,c=parseInt($("#helico").css("left")),o=parseInt($("#helico").css("top"));return c<=t&&t<=c+86&&o+10<=e&&e<=o+34&&(a=!0),a}function I(t){$("#helico").stop(!1,!1);var a=parseInt($("#helico").css("left")),c=t.clientX-g-50,t=t.clientY-h-16,o=(c+a)/2;$("#helico").animate({top:t+"px",left:c+"px"},{duration:1e3,queue:!1,step:function(){var t=$(this).css("top"),e=$(this).css("left");405<parseInt(t)&&($(this).stop(!1,!1),$(this).animate({top:"405px"},100));700<parseInt(e)&&($(this).stop(!1,!1),$(this).animate({left:"700px"},100));i<80&&-80<i&&(a<c?parseInt(e)<o?i+=.5:i-=.5:parseInt(e)>o?i-=.5:i+=.5,$(this).css("transform","rotate("+i+"deg)"))},complete:function(){var t=parseInt($(this).css("top"));parseInt($(this).css("left"))<0&&$("#helico").animate({left:"0px"},500);t<0&&$("#helico").animate({top:"5px"},500)}})}function b(t,e,a){for(var c=-1;e<c||c<t;)c=Math.floor(Math.random()*a);return c}function y(){$("#ici").attr("href","helico.html"),$("#message").animate({opacity:"1"},{duration:1e3,complete:function(){$(".sprite").stop(!1,!1),$(".arme").stop(!1,!1),a=!1}})}setInterval(function(){{var t;n?(5==++e&&(e=1),t="image/helico"+e+".png",$("#helico").attr("src",t)):n||($("#divpage").off("click"),o++,$("#helico").attr("src","image/explose"+o+".png"),8==o&&(n=!(o=0),$("#helico").css("opacity","0"),$("#helico").css({top:"60px",left:"-150px"}),$("#helico").css("opacity","1"),$("#helico").animate({top:"40px",left:"20px"},{duration:1500,queue:!1,complete:function(){$("#divpage").click(I)}})))}},30),$("#ici").click(function(){(function e(a){var t=b(1,10,10);switch(t){case 1:a.attr("src","image/cloud1.png");break;case 2:case 3:a.attr("src","image/cloud2.png");break;case 4:a.attr("src","image/cloud1.png");break;case 5:a.attr("src","image/cloud2.png");break;case 6:a.attr("src","image/cloud3.png");break;case 7:a.attr("src","image/cloud1.png");break;case 8:a.attr("src","image/cloud2.png");break;case 9:a.attr("src","image/cloud3.png");break;case 10:a.attr("src","image/cloud1.png")}var t=b(0,80,100);a.css("top",t+"px");a.animate({left:"-150px"},{duration:4e3,easing:"linear",step:o,complete:c});function c(){a.css("left","820px"),e(a)}function o(){var t=parseInt(a.css("left"));t<400&&s?(s=!1,e($("#nuage2"))):t<100&&l&&(l=!1,e($("#nuage3")))}})($("#nuage1")),$("#ici").off("click"),$("#message").animate({opacity:"0"},{duration:1e3,complete:function(){$("#gameover").text("GAME OVER"),$("#gameover").css("background-color","rgba(250,0,0,0.5)"),$("#c").text("recommencer"),$("#ici").off("click")}}),$("#helico").animate({left:"200px",top:"100px"},{duration:3e3,queue:!1,complete:function(){$("#divpage").click(I),setInterval(v,60),setInterval(d,2),setInterval(x,30),function a(c,o){var t=b(0,400,1e3);var e=b(0,450,1e3);c.css("left","800px");c.css("top",t+"px");c.animate({left:"-400px",top:e+"px"},{duration:3500,easing:"linear",step:s,complete:i});function i(){c.css("opacity","1"),o.css("opacity","1"),a(c,o),1==c.css("opacity")&&(r++,$("#score").text(r))}function s(){var t=parseInt(c.css("left")),e=parseInt(c.css("top"));t<500&&f?(f=!1,a($("#arme2"),$("#pa2"))):t<200&&m?(m=!1,a($("#arme3"),$("#pa3"))):t<-100&&u&&(u=!1,a($("#arme4"),$("#pa4"))),o.css({left:t+90+"px",top:e+4+"px"}),(k(t,e)||k(t+40,e)||k(t,e+40)||k(t+40,e+40))&&1==c.css("opacity")&&1==n&&(p--,$("#vie").text(p),n=!1,c.css("opacity","0"),o.css("opacity","0"),0==p&&y())}}($("#arme1"),$("#pa1"))}})})});