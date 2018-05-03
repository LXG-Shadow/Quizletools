function autodomatch_block(){
    var divtags=document.getElementsByTagName("div");
    var questext = new Array();
    for(var i in divtags){  
        if(divtags[i].nodeType==1){  
            if(divtags[i].getAttribute("style") == "display: block;"){
                questext.push(divtags[i])
            }; 
        };
    };

    for (var i in questext){
        var repl = defdict[questext[i].innerText];
        if (typeof(repl) != "undefined"){
            questext[i].innerText = repl;
        };
    };
};