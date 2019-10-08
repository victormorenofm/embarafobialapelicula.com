function GetCookie(name) {
    var arg=name+"=";
    var alen=arg.length;
    var clen=document.cookie.length;
    var i=0;
    // while (i<clen) {
    //     var j=i+alen;
	// 	console.log(document.cookie.substring(i,j));
	// 	console.log(arg);
    //     if (document.cookie.substring(i,j)==arg)
    //         return "1";
    //     i=document.cookie.indexOf(" ",i)+1;
    //     if (i==0)
    //         break;
    // }
	var elements = document.cookie.split('=');
	if (elements[1] == "aceptada"){
		// console.log("aceptada");
		return "1";
	} else {
		console.log("no aceptada");
		return null;
	}
}
function aceptar_cookies(){
    var expire=new Date();
    expire=new Date(expire.getTime()+7776000000);
    document.cookie="cookies_surestao=aceptada; expires="+expire;

    var visit=GetCookie("cookies_surestao");
    if (visit==1){
        popbox3();
    }
}
jQuery(function() {
    var visit=GetCookie("cookies_surestao");
    if (visit==1){
	    // jQuery('#overbox3').fadeIn("slow");
		console.log("toggleado");
		jQuery('#overbox3').toggle();
    }
});
function popbox3() {
    // jQuery('#overbox3').fadeOut("slow");
	jQuery('#overbox3').toggle();
}




/*function GetCookie(name) {
    var arg=name+"=";
    var alen=arg.length;
    var clen=document.cookie.length;
    var i=0;
    while (i<clen) {
        var j=i+alen;

        if (document.cookie.substring(i,j)==arg)
            return "1";
        i=document.cookie.indexOf(" ",i)+1;
        if (i==0)
            break;
    }

    return null;
}

function aceptar_cookies(){
    var expire=new Date();
    expire=new Date(expire.getTime()+7776000000);
    document.cookie="cookies_surestao=aceptada; expires="+expire;

    var visit=GetCookie("cookies_surestao");
    if (visit==1){
        popbox3();
    }
}

jQuery(function() {
    var visit=GetCookie("cookies_surestao");
    if (visit==1){
	    $('#overbox3').toggle();
    } else {
	    var expire=new Date();
	    expire=new Date(expire.getTime()+7776000000);
	    document.cookie="cookies_surestao=aceptada; expires="+expire;
    }  
});

function popbox3() {
    $('#overbox3').toggle();
}*/