var push = $("div.push");
var pushID = $("div.push > .push-userid");
if(push.length==0){
	chrome.runtime.sendMessage({type:"push-information", error:"沒人推文 幫QQ"});
}
else{
	push.each(function(i, dom) {
		$(this ).prepend("<span id='floor'>#"+ (i+1) + '</span>  ')
	})
}