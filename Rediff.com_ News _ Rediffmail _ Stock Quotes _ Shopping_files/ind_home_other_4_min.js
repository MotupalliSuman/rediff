var Imgs=[];function ImgLoad(a){a=zxcByClassName(a);for(var b=0;b<a.length;b++)a[b].getAttribute("data-relsrc")&&a[b].getElementsByTagName("IMG")[0]&&(oop=new Fade(a[b].getElementsByTagName("IMG")[0],a[b].getAttribute("data-relsrc")),Imgs.push(oop));CkTop(250)}function Fade(a,b){this.img=a;this.src=b.replace("http:","");this.opc=90;zxcOpacity(this.img,0)}
Fade.prototype.fade=function(){90==this.opc&&(this.img.src=this.src.replace("http:",""));zxcOpacity(this.img,this.opc++);var a=this;101>this.opc&&setTimeout(function(){a.fade()},2)};function zxcOpacity(a,b){0>b||100<b||(a.style.filter="alpha(opacity="+b+")",a.style.opacity=a.style.MozOpacity=a.style.KhtmlOpacity=b/100-.001)}
function zxcWWHS(){return window.innerHeight?[window.innerWidth-10,window.innerHeight-10,window.pageXOffset,window.pageYOffset]:document.documentElement.clientHeight?[document.documentElement.clientWidth-10,document.documentElement.clientHeight-10,document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.clientWidth,document.body.clientHeight,document.body.scrollLeft,document.body.scrollTop]}
function zxcPos(a){for(var b=[0,0];a;)b[0]+=a.offsetLeft,b[1]+=a.offsetTop,a=a.offsetParent;return b}function zxcByClassName(a,b,c){"string"==typeof b&&(b=document.getElementById(b));b=b||document;a=new RegExp("\\b"+a+"\\b");b=b.getElementsByTagName(c||"*");c=[];for(var h=0;h<b.length;h++)a.test(b[h].className)&&c.push(b[h]);return c}function CkTop(a){for(var b=0;b<Imgs.length;b++)zxcPos(Imgs[b].img)[1]<zxcWWHS()[1]+zxcWWHS()[3]+a&&90==Imgs[b].opc&&(Imgs[b].fade(),Imgs.splice(b,1),b--)}
function showDiv(a){document.getElementById(a)&&(document.getElementById(a).style.display="block")}function hideDiv(a){document.getElementById(a)&&(document.getElementById(a).style.display="none")}function trim(a){return a=a.replace(/^\s*/,"").replace(/\s*$/,"")}function isViewportVisible(a){a=a.getBoundingClientRect();var b=a.height||a.bottom-a.top,c=a.width||a.right-a.left,h=getViewportSize();return!b||!c||a.top>h.h||0>a.bottom||0>a.right||a.left>h.w?!1:!0}ImgLoad("img");var topkeywords="google;rediffmail;live score;rediffmail.com;facebook;google.com;gmail;live cricket score;cricket score;gmail.com;www.google.com;mail;yahoo;inbox;yahoo.com;cricket live score;login;www.gmail.com;live cricket;facebook.com;www.facebook.com;fb;irctc;youtube;www.rediffmail.com;cricket live;rediffmail login".split(";");
function submitSearch(a,b,c,h){a=trim(document.getElementById("srchword").value);var q=topkeywords.length;if(""==a)return document.getElementById("srchword").focus(),alert("Please enter search keyword"),!1;for(var w=0;w<q;w++)if(a.toLowerCase()==topkeywords[w])return document.location.href=track_domain+"/click?url=___"+realtime_domain+"/news/"+escape(a.replace(/\//g," "))+"?sc_cid=rt_srch___&position=blurb&label=search&c_type=realtime&property=hp_in_pc&prefix="+escape(a.replace(/\//g," "))+"&sug="+
escape(a.replace(/\//g," "))+"&service=realtime",!1;a=escape(a.replace(/\//g," "));b=""!=b&&"undefined"!=b&&void 0!=b?b:document.getElementById("srchurl").value==shopping_domain+"/product/"?"":document.getElementById("srchurl").value+"?sc_cid="+services_lnk_track[srch_tab_sel];c=""!=c&&"undefined"!=c&&void 0!=c?c:document.getElementById("srchservice").value;h=""!=h&&"undefined"!=h&&void 0!=h?h:document.getElementById("srchsugtrack").value;""==c&&(c="shopping");""==b&&(b=shopping_domain+"/product/"+
a+"?sc_cid=shopping_inhomesrch");document.location.href="undefined"==typeof services_lnk_track?shopping_domain+"/product/"+a+"?sc_cid=shopping_inhomesrch":track_domain+"/click?url=___"+b+"___&position=blurb&label=search&c_type=shopping&property=hp_in_pc&prefix="+h+"&sug="+a+"&service="+c;return!1}document.getElementById("queryTop")&&(document.getElementById("queryTop").onsubmit=function(){return submitSearch()});
function getViewportSize(a){a=a||window;if(null!=a.innerWidth)return{w:a.innerWidth,h:a.innerHeight};a=a.document;return"CSS1Compat"==document.compatMode?{w:a.documentElement.clientWidth,h:a.documentElement.clientHeight}:{w:a.body.clientWidth,h:a.body.clientWidth}}
function submitNewsSearch(){var a=trim(document.getElementById("srchquery_tbox").value);a=a.replace(/\//g," ");if(""==a)return document.getElementById("srchquery_tbox").focus(),alert("Please enter search keywords"),!1;a=cdn_domain+"/search/"+encodeURIComponent(a).replace(".","%2E")+"?src=hp_in_pc";document.newsrchform.action=a;document.newsrchform.submit();return!1}
function trackInView(){var a=document.getElementById("red_container_main"),b=a.getElementsByTagName("div"),c=a.getElementsByTagName("h2"),h=c.length;a=b.length;for(var q=0;q<h;q++)isViewportVisible(c[q])&&c[q].getAttribute("data-track")&&((new Image).src="//indmetric.rediff.com/www.rediff.com/dynimpression?rkey="+Math.floor(1E6*Math.random())+"&position="+c[q].getAttribute("data-boxno")+"&"+c[q].getAttribute("data-track"),c[q].setAttribute("data-track",""));for(c=0;c<a;c++)isViewportVisible(b[c])&&
b[c].getAttribute("data-track")&&((new Image).src="//indmetric.rediff.com/www.rediff.com/dynimpression?rkey="+Math.floor(1E6*Math.random())+"&position="+b[c].getAttribute("data-boxno")+"&"+b[c].getAttribute("data-track").replace(/&amp;/g,"&"),b[c].setAttribute("data-track",""))}function showTrending(){for(var a=0;a<totsmartTrnd;a++)showDiv("trend_"+a)}function showBestDeals(){for(var a=0;a<totsmartBest;a++)showDiv("bdeal_"+a)}
function showHourlyDeal(){var a=bkbannerArr.length;if(document.getElementById("bkbox_banner")){var b=document.getElementById("bkbox_banner").getAttribute("data-boxno");if(0==a){var c="<p class=more><a class=backshop href='"+shopping_domain+"/hourlydeals' onclick=\"trackURL('"+track_domain+"/click?url=___"+shopping_domain+"/hourlydeals?sc_cid=inhome_hourlydeal_generic_"+b+"_L___&position="+b+"_L&label=hourlydeal&c_type=shopping&property=hp_in_pc');return false;\">Hourly Deal</a></p>";c+="<h5><a href='"+
shopping_domain+"/hourlydeals' aria-label='Hourly Deals' onclick=\"trackURL('"+track_domain+"/click?url=___"+shopping_domain+"/hourlydeals?sc_cid=inhome_hourlydeal_generic_"+b+"_I___&position="+b+"_I&label=hourlydeal&c_type=shopping&property=hp_in_pc');return false;\"><img src='//imshopping.rediff.com/shopping/homepix/hourly_tile_default.jpg' alt='' /></a></h5>";c+="<h2 class='hdtitle'><a href='"+shopping_domain+"/hourlydeals' onclick=\"trackURL('"+track_domain+"/click?url=___"+shopping_domain+"/hourlydeals?sc_cid=inhome_hourlydeal_generic_"+
b+"_T___&position="+b+"_T&label=hourlydeal&c_type=shopping&property=hp_in_pc');return false;\">Amazing Discounts For You. New Offer Every Hour</a></h2>";document.getElementById("bkbox_banner").innerHTML=c;document.getElementById("bkbox_banner").setAttribute("data-track","label=hourlydeal&c_type=shopping");showDiv("bkbox_banner");return!1}a=Math.floor(Math.random()*a);""!=bkbannerArr[a][1]?(c='<p class=more><a href="'+bkbannerArr[a][1]+'" onclick="trackURL(\''+track_domain+"/click?url=___"+bkbannerArr[a][1]+
"_"+b+"_L___&position="+b+"_L&label=hourlydeal&c_type=shopping&property=hp_in_pc');return false;\" class='backshop'>"+bkbannerArr[a][3]+"</a></p>",c+='<h5><a href="'+bkbannerArr[a][1]+'" onclick="trackURL(\''+track_domain+"/click?url=___"+bkbannerArr[a][1]+"_"+b+"_I___&position="+b+"_I&label=hourlydeal&c_type=shopping&property=hp_in_pc');return false;\" alt='' aria-label=\""+bkbannerArr[a][2]+'" ><img src="'+bkbannerArr[a][0].replace("http:","")+"\" alt='' /></a></h5>",c+="<h2 class='hdtitle'><a href=\""+
bkbannerArr[a][1]+'" onclick="trackURL(\''+track_domain+"/click?url=___"+bkbannerArr[a][1]+"_"+b+"_T___&position="+b+"_T&label=hourlydeal&c_type=shopping&property=hp_in_pc');return false;\">"+bkbannerArr[a][2]+"</a></h2>",document.getElementById("bkbox_banner")&&(document.getElementById("bkbox_banner").innerHTML=c,document.getElementById("bkbox_banner").setAttribute("data-track","label=hourlydeal&c_type=shopping"),showDiv("bkbox_banner"))):document.getElementById("bkbox_banner").innerHTML=""}}
function showLoginInfo(){""==Rlo&&""==Rl||""==tmp_rsc1?(document.getElementById("signin_info")&&(document.getElementById("signin_info").innerHTML=" <a href='https://mail.rediff.com/cgi-bin/login.cgi' title='Already a user? Sign in' class='signin'>Sign in</a><br /><a href='http://register.rediff.com/register/register.php?FormName=user_details' title='Create Rediffmail Account'>Create Account</a>"),""!=Rlo&&""!=Rl&&document.getElementById("signin_info")&&(document.getElementById("signin_info").innerHTML+=
"")):(""!=Rlo?document.getElementById("username").innerHTML="<a href='"+org_domain+"/profile/myprofile' class='proper' onclick=\"trackURL('"+track_domain+"/click?url=___"+org_domain+"/profile/myprofile___&position=nav1&label=user_profile&c_type=mypage&property=hp_in_pc');return false;\">"+Rlo+"</a>":(Rl=Rl.substring(0,Rl.lastIndexOf("@")),document.getElementById("username").innerHTML="<a href='"+org_domain+"/profile/myprofile' onclick=\"trackURL('"+track_domain+"/click?url=___"+org_domain+"/profile/myprofile___&position=nav1&label=user_profile&c_type=mypage&property=hp_in_pc');return false;\">"+
Rl+"</a>"),document.getElementById("username").style.display="block",document.getElementById("signin_info")&&(document.getElementById("signin_info").innerHTML=""));""!=Rl&&document.getElementById("signin_info")&&(document.getElementById("signin_info").innerHTML+="<a href='"+org_domain.replace("http://","//")+"/signout' title='Sign out'>Sign out</a>")}showHourlyDeal();showLoginInfo();var glb_scrll_met=0,glb_foot=0;
window.addEventListener("scroll",function(){CkTop(250);trackInView();0==glb_scrll_met&&(glb_scrll_met=1,(new Image).src="//indmetric.rediff.com/www.rediff.com/newhomescroll?rkey="+Math.floor(1E6*Math.random()));document.getElementById("footertrack")&&isViewportVisible(document.getElementById("footertrack"))&&0==glb_foot&&(glb_foot=1,(new Image).src="//indmetric.rediff.com/www.rediff.com/dynimpression?rkey="+Math.floor(1E6*Math.random())+"&position=footer")});window.setTimeout("trackInView()",2E3);
document.getElementById("moneyiframe")&&(document.getElementById("moneyiframe").src=money_domain.replace("http:","")+"/widget/moneywizwidget/rhome?src=rhome1");var totaltabs=document.getElementsByClassName("tabs").length;
function showTopTabs(){for(var a=document.getElementsByClassName("tabs"),b=function(){for(var h=this.getAttribute("data-tabno"),q=0;q<a.length;q++)a[q].className="tabs",document.getElementById("topdiv_"+q)&&(document.getElementById("topdiv_"+q).style.display="none",""==document.getElementById("topdiv_"+q).innerHTML&&(a[q].className="tabs hide"));document.getElementById("topdiv_"+h)&&(document.getElementById("topdiv_"+h).style.display="block");this.className="tabs active";trackInView()},c=0;c<a.length;c++)a[c].addEventListener("click",
b,!1)}showTopTabs();
function showRecoTrending(a){glb_reco_trending=1;var b=0,c=0,h=0,q=0,w=0,G=0,t=0,k=0;if(a.recent_list)var D=a.recent_list.CAT_DATA[0].PRODUCTS;if(a.product_list)var e=a.product_list.CAT_DATA[0].PRODUCTS;if(a.trending_list)var u=a.trending_list.CAT_DATA[0].PRODUCTS;if(a.best_list)var y=a.best_list.CAT_DATA[0].PRODUCTS;if(a.trending_news_list)var v=a.trending_news_list.CAT_DATA[0].NEWS;if(a["native"]){G=a["native"].length;var E=a["native"][0]}D&&(b=D.length);e&&(c=e.length);u&&(h=u.length);y&&(q=y.length);
v&&(w=v.length);if(0<q){2<q&&(q=2);for(var r=0;r<q;r++){var z="",H=a="",C=y[r].CAT_ID,d=y[r].CATEGORY_NAME;d=d.replace("&amp;","&");d=shopping_domain+"/categories/"+d+"/cat-"+C;d.replace(/[ '&(),]/g,"-");var l=y[r].URL.replace("http:","https:"),n=y[r].BIG_IMAGE,x=y[r].NAME,F=y[r].DISPLAY_OFFER_PRICE;x=x.replace("&amp;","&");var B=y[r].ID;y[r].PARTNER_NAME&&(H=y[r].PARTNER_NAME);n=n.replace("http:","").replace("/200-200/","/250-250/");d=y[r].segmentLandingPage;d.replace(/[ '&(),]/g,"-");var p=encodeURIComponent(y[r].C_ID),
g=encodeURIComponent(y[r].C_TYPE),m=encodeURIComponent(y[r].META),f=y[r].LABEL_LINK.replace("http:","https:");if(""==f||-1==f.indexOf("http"))f=shopping_domain;var A=y[r].LABEL;document.getElementById("bdeal_"+r)&&(a=document.getElementById("bdeal_"+r).getAttribute("data-boxno"));d=encodeURIComponent(A);z+="<p class='more'>";z+='<a href="'+f+"\" class='backshop' onclick=\"trackURL('"+track_domain+"/click?url=___"+f+"?sc_cid=inhome_best_"+a+"_L_"+B+"___&position="+a+"_L&label="+d+"&c_type="+g+"&meta="+
m+"&property=hp_in_pc');return false;\">"+A+"</a>";z+="</p>";z+="<h5>";z=""!=H&&""==C?z+("<a class='img' data-relsrc='"+n+"' href=\""+track_domain+"/click?url=___"+l+"___&position="+a+"_I&label="+d+"&c_type="+g+"&c_id="+p+"&meta="+m+"&property=hp_in_pc\" target=_blank class='img'>"):z+("<a class='img' data-relsrc='"+n+"' onclick=\"trackURL('"+track_domain+"/click?url=___"+l+"?sc_cid=inhome_best_"+a+"_I_"+B+"___&position="+a+"_I&label="+d+"&c_type="+g+"&c_id="+p+"&meta="+m+'&property=hp_in_pc\');return false;" href="'+
l+'" aria-label="'+x+"\"  class='img'>");z+="<img src='"+imgpath+"/blank.gif' alt='' /></a>";z+="</h5>";z+="<h2 class='hdtitle'>";z=""!=H&&""==C?z+("<a class='black' href=\""+track_domain+"/click?url=___"+l+"?sc_cid=inhome_best_"+a+"_T_"+B+"___&position="+a+"_T&label="+d+"&c_type="+g+"&meta="+m+'&property=hp_in_pc" target=_blank>'):z+("<a class='black' onclick=\"trackURL('"+track_domain+"/click?url=___"+l+"?sc_cid=inhome_best_"+a+"_T_"+B+"___&position="+a+"_T&label="+d+"&c_type="+g+"&c_id="+p+"meta="+
m+'&property=hp_in_pc\');return false;" href="'+l+'">');z+=x.replace(/^(.{40}[^\s]*).*/,"$1");0<parseInt(F)&&(z+=" - Rs."+F+" onwards");z+="</a></h2>";document.getElementById("bdeal_"+r)&&(document.getElementById("bdeal_"+r).setAttribute("data-track","label="+d+"&c_type="+g+"&c_id="+p+"&meta="+m),document.getElementById("bdeal_"+r).innerHTML=z,document.getElementById("bdeal_"+r).style.display="block")}}else showBestDeals();if(0<b){a=Math.floor(Math.random()*b);a==b-1&&(a=0);f=a;a=C="";l=D[f].URL.replace("http:",
"https:");n=D[f].BIG_IMAGE;F=D[f].DISPLAY_OFFER_PRICE;p=encodeURIComponent(D[f].C_ID);g=encodeURIComponent(D[f].C_TYPE);m=encodeURIComponent(D[f].META);A=D[f].LABEL;x=D[f].NAME;x=x.replace("&amp;","&");B=D[f].ID;n=n.replace("http:","").replace("/200-200/","/250-250/");d=encodeURIComponent(A);f=D[f].LABEL_LINK.replace("http:","https:");if(""==f||-1==f.indexOf("http"))f=shopping_domain;document.getElementById("trend_0")&&(a=document.getElementById("trend_0").getAttribute("data-boxno"));C=C+"<p class='more'><a href='"+
(f+"' onclick=\"trackURL('"+track_domain+"/click?url=___"+f+"/?sc_cid=inhome_recent_"+a+"_L_"+B+"___&positon="+a+"_L&label="+d+"&c_type="+g+"&meta="+m+"&property=hp_in_pc');return false;\" class='backshop'>"+A+"</a>");C=C+"</p><h5><a onclick=\"trackURL('"+(track_domain+"/click?url=___"+l+"?sc_cid=inhome_recent_"+a+"_I_"+B+"___&position="+a+"_I&label="+d+"&c_type="+g+"&c_id="+p+"&meta="+m+'&property=hp_in_pc\');return false;" href="'+l+'" aria-label="'+x+'" ><img src="'+n+"\" alt='' /></a></h5>");
C+="<h2 class='hdtitle'><a onclick=\"trackURL('"+track_domain+"/click?url=___"+l+"?sc_cid=inhome_recent_"+a+"_T_"+B+"___&position="+a+"_T&label="+d+"&c_type="+g+"&c_id="+p+"&meta="+m+'&property=hp_in_pc\');return false;" href="'+l+'"  title="'+x+'">'+x.replace(/^(.{40}[^\s]*).*/,"$1");0<parseInt(F)&&(C+=" - Rs."+F+" onwards");C+="</a></h2>";document.getElementById("trend_0")&&(document.getElementById("trend_0").setAttribute("data-track","label="+d+"&c_type="+g+"&c_id="+p),document.getElementById("trend_0").innerHTML=
C);showDiv("trend_0");t++}else showDiv("trend_0");k++;if(0<c){a=c="";l=e[0].URL.replace("http:","https:");n=e[0].BIG_IMAGE;F=e[0].DISPLAY_OFFER_PRICE;p=encodeURIComponent(e[0].C_ID);g=encodeURIComponent(e[0].C_TYPE);m=encodeURIComponent(e[0].META);A=e[0].LABEL;x=e[0].NAME;x=x.replace("&amp;","&");B=e[0].ID;n=n.replace("http:","").replace("/200-200/","/250-250/");d=encodeURIComponent(A);f=e[0].LABEL_LINK.replace("http:","https:");if(""==f||-1==f.indexOf("http"))f=shopping_domain;document.getElementById("trend_1")&&
(a=document.getElementById("trend_1").getAttribute("data-boxno"));c+="<p class='more'><a onclick=\"trackURL('"+track_domain+"/click?url=___"+f+"/?sc_cid=inhome_recommended_"+a+"_L_"+B+"___&positon="+a+"_L&label="+d+"&c_type="+g+"&meta="+m+"&property=hp_in_pc');return false;\" href='"+f+"' class='backshop'>"+A+"</a></p>";c+="<h5><a onclick=\"trackURL('"+track_domain+"/click?url=___"+l+"?sc_cid=inhome_recommended_"+a+"_I_"+B+"___&position="+a+"_I&label="+d+"&c_type="+g+"&c_id="+p+"&meta="+m+'&property=hp_in_pc\');return false;" href="'+
l+'" aria-label="'+x+"\" class='img' data-relsrc=\""+n+"\" ><img src='"+imgpath+"/blank.gif' alt='' /></a></h5>";c+="<h2 class='hdtitle'><a onclick=\"trackURL('"+track_domain+"/click?url=___"+l+"?sc_cid=inhome_recommended_"+a+"_T_"+B+"___&position="+a+"_T&label="+d+"&c_type="+g+"&c_id="+p+"&meta="+m+'&property=hp_in_pc\');return false;" href="'+l+'">'+x.replace(/^(.{40}[^\s]*).*/,"$1");0<parseInt(F)&&(c+=" - Rs."+F+" onwards");c+="</a></h2>";document.getElementById("trend_1")&&(document.getElementById("trend_1").setAttribute("data-track",
"label="+d+"&c_type="+g+"&c_id="+p+"&meta="+m),document.getElementById("trend_1").innerHTML=c,t++,k++);showDiv("trend_1")}else showDiv("trend_1"),k++;if(2<h)for(22<h&&(h=22);t<h;t++,k++){a=e="";C=u[t].CAT_ID;d=u[t].CATEGORY_NAME;d=d.replace("&amp;","&");d=shopping_domain+"/categories/"+d+"/cat-"+C;d.replace(/[ '&(),]/g,"-");F=u[t].DISPLAY_OFFER_PRICE;l=u[t].URL.replace("http:","https:");n=u[t].BIG_IMAGE;p=encodeURIComponent(u[t].C_ID);g=encodeURIComponent(u[t].C_TYPE);m=encodeURIComponent(u[t].META);
A=u[t].LABEL;x=u[t].NAME;x=x.replace("&amp;","&");B=u[t].ID;n=n.replace("http:","").replace("/200-200/","/250-250/");d=u[t].segmentLandingPage;f=u[t].LABEL_LINK.replace("http:","https:");if(""==f||-1==f.indexOf("http"))f=shopping_domain;d.replace(/[ '&(),]/g,"-");c=0<l.indexOf("?")?"&sc_cid=inhome_trend_":"?sc_cid=inhome_trend_";document.getElementById("trend_"+k)&&(a=document.getElementById("trend_"+k).getAttribute("data-boxno"));d=encodeURIComponent(A);e+="<p class='more'>";e+='<a href="'+f+"\" class='backshop' onclick=\"trackURL('"+
track_domain+"/click?url=___"+f+c+a+"_L_"+B+"___&position="+a+"_L&label="+d+"&c_type="+g+"&meta="+m+"&property=hp_in_pc');return false;\">"+A+"</a></p>";e+="<h5><a class='img' data-relsrc='"+n+"' onclick=\"trackURL('"+track_domain+"/click?url=___"+l+c+a+"_I_"+B+"___&position="+a+"_I&label="+d+"&c_type="+g+"&c_id="+p+"&meta="+m+'&property=hp_in_pc\');return false;" href="'+l+'" aria-label="'+x+"\"><img src='"+imgpath+"/blank.gif' alt='' /></a></h5>";e+="<h2 class='hdtitle'><a onclick=\"trackURL('"+
track_domain+"/click?url=___"+l+c+a+"_T_"+B+"___&position="+a+"_T&label="+d+"&c_type="+g+"&c_id="+p+"&meta="+m+'&property=hp_in_pc\');return false;" href="'+l+'">'+x.replace(/^(.{40}[^\s]*).*/,"$1");0<parseInt(F)&&(e+=" - Rs."+F+" onwards");e+="</a></h2>";document.getElementById("trend_"+k)&&(document.getElementById("trend_"+k).setAttribute("data-track","label="+d+"&c_type="+g+"&c_id="+p+"&meta="+m),document.getElementById("trend_"+k).innerHTML=e,document.getElementById("trend_"+k).style.display=
"block");showDiv("trend_"+k)}else showTrending();if(0<w){if(document.getElementById("div_trndnews_container")){t=document.getElementById("div_trndnews_container").getAttribute("data-rowno");e=1;l="";for(n=0;5>n;n++){a=t+"_"+e;h=v[n].title;w=v[n].link;u=v[n].image;p=encodeURIComponent(v[n].c_id);g=encodeURIComponent(v[n].c_type);m=encodeURIComponent(v[n].meta);A=v[n].label;k=v[n].section;if(""==k||"undefined"==k||void 0==k)k="news";"money"==k&&(k="business");u=u.replace("http://","//");w=w.replace("http://",
"https://");d=encodeURIComponent(A);l+="<div class=nbox data-boxno='"+a+"' data-track='label="+d+"&c_type="+g+"&meta="+m+"&c_id="+p+"&news="+encodeURIComponent(w)+"'>";l+="<p class=more><a class='back"+k+"' href='"+cdn_domain+"/"+k+"' onclick=\"trackURL('"+track_domain+"/click?url=___"+cdn_domain+"/"+k+"___&position="+a+"_L&label="+d+"&c_type="+g+"&meta="+m+"&c_id="+p+"&property=hp_in_pc');return false;\">"+k.replace("getahead","get ahead")+"</a></p>";l+='<h5><a href="'+w+"\" class='img' data-relsrc='"+
u.replace("/300-300/","/250-250/")+"' onclick=\"trackURL('"+track_domain+"/click?url=___"+encodeURIComponent(w)+"___&position="+a+"_I&label="+d+"&c_type="+g+"&meta="+m+"&c_id="+p+'&property=hp_in_pc\');return false;"><img alt="'+h.replace(/"/g,"")+"\" src='"+imgpath+"/blank.gif' /></a></h5>";l+='<h2 class=hdtitle><a href="'+w+'" onclick="trackURL(\''+track_domain+"/click?url=___"+encodeURIComponent(w)+"___&position="+a+"_T&label="+d+"&c_type="+g+"&meta="+m+"&c_id="+p+"&property=hp_in_pc');return false;\">"+
h+"</a></h2>";l+="</div>";e++}l+="<i class='clear'></i>";document.getElementById("div_trndnews_container").innerHTML=l}if(document.getElementById("lasttab")&&(document.getElementById("lasttab").style.display="block",A="topdiv_2",2==totaltabs&&(A="topdiv_1"),document.getElementById(A))){t="";for(e=0;6>e;e++){a="1_1-2_"+(e+1);h=v[e].title;w=v[e].link;u=v[e].image;p=encodeURIComponent(v[e].c_id);g=encodeURIComponent(v[e].c_type);m=encodeURIComponent(v[e].meta);k=v[e].section;if(""==k||"undefined"==k||
void 0==k)k="news";"money"==k&&(k="business");u.replace("http://","//");w=w.replace("http://","https://");d="edit_foryou";t+="<h2 class='"+k+"' data-boxno="+a+" data-track='label="+d+"&c_type="+g+"&meta="+m+"&c_id="+p+"&news="+encodeURIComponent(w)+"'><a href=\""+w+'" onclick="trackURL(\''+track_domain+"/click?url=___"+w+"___&position="+a+"&label="+d+"&c_type="+g+"&meta="+m+"&property=hp_in_pc');return false;\">"+h+"</a></h2>"}document.getElementById(A).innerHTML=t}}0<G?document.getElementById("native_0")&&
(G="",v=E.NAME,p=E.IMAGE,g=E.TITLE,E=E.URL.replace("http:","https:"),a=document.getElementById("native_0").getAttribute("data-boxno"),d=v.replace(/[ '&(),]/g,"-").toLowerCase(),d=encodeURIComponent(d),document.getElementById("native_0").setAttribute("data-track","label="+d+"&c_type=shopping"),G+="<p class=more><a href='"+E+"' class='backshop' onclick=\"trackURL('"+track_domain+"/click?url=___"+E+"?sc_cid=inhome_cls_"+d+"_"+a+"_L___&position="+a+"_L&label="+d+"&c_type=shopping&c_id=&meta=&property=hp_in_pc');return false;\">"+
v+"</a></p>",G+="<h5><a href='"+E+"' class='img' data-relsrc='"+p+"' onclick=\"trackURL('"+track_domain+"/click?url=___"+E+"?sc_cid=inhome_cls_"+d+"_"+a+"_I___&position="+a+"_I&label="+d+"&c_type=shopping&c_id=&meta=&property=hp_in_pc');return false;\"><img alt='"+v+"' src='"+imgpath+"/blank.gif' style='max-width:210px' /></a></h5>",G+="<h2 class=hdtitle><a href='"+E+"' onclick=\"trackURL('"+track_domain+"/click?url=___"+E+"?sc_cid=inhome_cls_"+d+"_"+a+"_T___&position="+a+"_T&label="+d+"&c_type=shopping&c_id=&meta=&property=hp_in_pc');return false;\">"+
g+"</a></h2>",document.getElementById("native_0").innerHTML=G,document.getElementById("native_0").style.display="block"):document.getElementById("native_0")&&(document.getElementById("native_0").style.display="block");ImgLoad("img")}
function show_recommendation(a){glb_script_load=1;try{0<a.trending_list.CAT_DATA[0].NUMFOUND||0<a.recent_list.CAT_DATA[0].NUMFOUND||0<a.best_list.CAT_DATA[0].NUMFOUND||0<a.product_list.CAT_DATA[0].NUMFOUND||0<a.trending_news_list.CAT_DATA[0].NUMFOUND?showRecoTrending(a):(showTrending(),showBestDeals(),document.getElementById("native_0")&&(document.getElementById("native_0").style.display="block"))}catch(b){showTrending(),showBestDeals(),document.getElementById("native_0")&&(document.getElementById("native_0").style.display=
"block")}}var recoscript=document.createElement("script");recoscript.src="https://recoprofile.rediff.com/shopping_recommendation/get_recommendation_new.php/?function=show_recommendation&frompage=rediffhome";document.body.appendChild(recoscript);window.setTimeout(function(){0==glb_script_load&&(showTrending(),showBestDeals())},5E3);