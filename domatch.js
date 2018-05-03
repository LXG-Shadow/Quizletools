function domatch_block_repldef(){
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

function domatch_block_color(){
    var divtags=document.getElementsByTagName("div");
    var questext = new Array();
    for(var i in divtags){  
        if(divtags[i].nodeType==1){  
            if(divtags[i].getAttribute("style") == "display: block;"){
                questext.push(divtags[i])
            }; 
        };
    };
    var color = {0:"#000000",1:"#FF00FF",2:"#00FF00",3:"#0000FF",4:"#CC6600",5:"#00FFFF"};
    var index = 0;
    for (var i in questext){
        var repl = defdict[questext[i].innerText];
        if (typeof(repl) != "undefined"){
            questext[i].style.color = color[index];
            for (var j in questext){
                if (questext[j].innerText == repl){
                    questext[j].style.color = color[index];
                };
            };
            index++;
        };
    };
};