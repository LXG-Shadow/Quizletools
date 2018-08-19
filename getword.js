var defdict = new Array();
var wordict = new Array();
var terms = window.Quizlet.cardsModeData["terms"];

for(var i=0;i<terms.length-1;i++){
	console.log(terms[i]);
	defdict[terms[i]["definition"]] = terms[i]["word"];
    wordict[terms[i]["word"]] = terms[i]["definition"];
};

function parsedict(dict){
    var str = "";
    for (var key in dict){
        if (key == "each")
            break
        str = str + "\""+key.split("\"").join("\\\"")+"\""+":"+"\""+dict[key].split("\"").join("\\\"")+"\""+",";
        console.log(str);
    };
    str = "{"+ str.substr(0,str.length-1) + "}";
    return str
};

function printdict(dict,dictname){
    document.write("var " + dictname + "=" + parsedict(dict) + ";");
};