var defdict = new Array();
var wordict = new Array();
var tags=document.getElementsByTagName("span");
var index = 0;
for(var i in tags){  
    if(tags[i].nodeType==1){  
        if(tags[i].getAttribute("class") == "qDef lang-en TermText"){
            var def=tags[i].innerHTML;
        }; 
        if(tags[i].getAttribute("class") == "qWord lang-en TermText"){
            var word=tags[i].innerHTML;
            defdict[def] = word;
            wordict[word] = def;
            index++;
        };   
    }; 
};

function parsedict(dict){
    var str = "";
    for (var key in dict){
        if (key == "each")
            break
        str = str + "\""+key+"\""+":"+"\""+dict[key]+"\""+",";
    };
    str = "{"+ str.substr(0,str.length-1) + "}";
    return str
};

function printdict(dict,dictname){
    document.write("var " + dictname + "=" + parsedict(dict) + ";");
};