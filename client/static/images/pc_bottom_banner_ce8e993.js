!function(){var tmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+="";return __p},css=".MD-pc_bottom_banner-img{display:block;vertical-align:middle;border:0;outline:0;border:0}\n.MD-pc_bottom_banner-ad_text{position:absolute;right:15px;bottom:15px}\n.MD-pc_bottom_banner-img_a{display:block}\n.MD-pc_bottom_banner-li{float:left;list-style:none;position:relative}\n.MD-pc_bottom_banner-ul{overflow:hidden;margin:0;padding:0}\nul{padding:0;margin:0}\n#MD-pc_bottom_banner-lunboBox2{margin-left:auto;margin-right:auto;overflow:hidden;position:relative}\n#MD-pc_bottom_banner-dotBox{position:absolute;width:100%;left:0;bottom:10px;text-align:center;z-index:10}\n#MD-pc_bottom_banner-dotBox li{display:inline-block;border-radius:100%;background-color:#666;cursor:pointer;width:7px;height:7px;margin:5px;opacity:.5;filter:alpha(opacity=50);font-size:0}\n#MD-pc_bottom_banner-dotBox li.on{opacity:1;filter:alpha(opacity=100)}",mid="MD-pc_bottom_banner-",init=function(n,t,o,e){var i=n.getAttribute("os"),a=n.getAttribute("page"),r=n.getAttribute("pos"),l=e[i][a][r],d=l[0].tplid,c=window[d]?window[d].length:0;if(c<l.length-1)window[d]?t&&t.adm&&window[d].push(t):(window[d]=[],t&&t.adm&&window[d].push(t));else{var m=function(n){var t=new RegExp("(^|&)"+n+"=([^&]*)(&|$)","i"),o=window.location.search.substr(1).match(t);return null!=o?unescape(o[2]):null},s=function(){if(v>1){var n="<ul>",t=document.createElement("div");t.id="MD-pc_bottom_banner-dotBox";for(var o=0;v>o;o++)n+="<li class='MD-pc_bottom_banner-dot'></li>";n+="</ul>",t.innerHTML=n,b.appendChild(t)}};t&&t.adm&&window[d].push(t);var w=document.createElement("style");w.type="text/css",w.styleSheet?w.styleSheet.cssText=o.css:w.innerHTML=o.css,document.getElementsByTagName("head")[0].appendChild(w);for(var p=0;p<window[d].length;p++)0==window[d][p].adm.length&&(window[d].splice(p,1),p--);if(window[d].length<1)return!1;var u="//c1.xinstatic.com",b=document.createElement("div");b.id="MD-pc_bottom_banner-lunboBox2";for(var g='<ul class="MD-pc_bottom_banner-ul">',_=function(n){g+='<li class="MD-pc_bottom_banner-li">'+function(){return window[d][n].landingurl?'<a  class="MD-pc_bottom_banner-img_a" style="cursor:pointer;" url="'+window[d][n].landingurl+'">':'<a  class="MD-pc_bottom_banner-img_a" style="cursor:default;">'}()+function(){return"object"==typeof window[d][n].adm?'<img src="'+u+window[d][n].adm[0].img+'" class="MD-pc_bottom_banner-img" data-index="'+n+'"/>':'<img src="'+u+JSON.parse(window[d][n].adm).img+'" class="MD-pc_bottom_banner-img" data-index="'+n+'"/>'}()+function(){return 1==window[d][n].ext.show_label?'<img src="//s6.xinstatic.com/www/img/ad_icon.png?v=17052621" class="MD-pc_bottom_banner-ad_text" />':""}()+"</a></li>"},f=0;f<window[d].length;f++)_(f);g+="</ul>",b.innerHTML=g,n.parentNode.insertBefore(b,n),b.style.cssText="position:relative;overflow:hidden;";var h=window[d][0].adm[0].w?window[d][0].adm[0].w:1210,x=window[d][0].adm[0].h?window[d][0].adm[0].h:120;b.style.width=h+"px";var v=window[d].length,y=document.querySelector("."+mid+"ul");y.style.width=h*v+"px";for(var M=document.querySelectorAll("."+mid+"img"),D=document.querySelectorAll("."+mid+"li"),f=0;v>f;f++)D[f].style.cssText="width:"+h+"px;height:"+x+"px;";for(var f=0;f<M.length;f++){var B=window[d][f].monitor_url;if(B&&B.length>0)for(var E=0,T=B.length;T>E;E++){var k=(window[d][f].impurl[E],window[d][f].tagid);commonExposureFun(B[E],"v",k,f+1,window[d][f].adid)}}s(),v>1&&$("#"+mid+"lunboBox2").slide({titCell:"#"+mid+"dotBox ul",mainCell:"."+mid+"ul",effect:"leftLoop",autoPlay:!0,autoPage:!0,trigger:"click"});var A=m("channel"),S=m("from"),N=document.querySelector("#"+mid+"lunboBox2");N.onclick=function(n){var n=n||window.event,t=n.target||n.srcElement;if(t.className==mid+"img"){var o=Number(t.getAttribute("data-index")),e=window[d][o].landingurl,i=window[d][o].monitor_url;if(e){if(A&&(e+=e.indexOf("?")>-1?"&channel="+A:"?channel="+A),S&&(e+=e.indexOf("?")>-1?"&from="+S:"?from="+S),i&&i.length>0)for(var a=0,r=i.length;r>a;a++){var l=window[d][o].tagid;commonExposureFun(i[a],"c",l,o+1,window[d][o].adid)}var c=window.open("about:blank");c.location.href=UrlTool.fixHref(e)}}}}};window.PanDa_pc_bottom_banner={tmpl:tmpl,css:css,init:init}}();