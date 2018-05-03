function autodotest(){
    var testsectionum=new Array()
    var titles = document.getElementsByTagName("h4");
    var index = 0;
    for (var i in titles){
        if (isNaN(parseInt(titles[i].innerText)))
            break;
        testsectionum[index] = parseInt(titles[i].innerText);
        index++;
    };

    index = 0;
    var spantags=document.getElementsByTagName("span");
    var questext = new Array();
    for(var i in spantags){  
        if(spantags[i].nodeType==1){  
            if(spantags[i].getAttribute("class") == "TermText notranslate lang-en"){
                questext.push(spantags[i])
            }; 
        };
    };

    var testsection=new Array()
    var textareatags = document.getElementsByTagName("textarea");
    for (var i in textareatags){
        if(textareatags[i].nodeType==1){  
            if(textareatags[i].getAttribute("class") == "AutoExpandTextarea-textarea"){
                testsection.push(textareatags[i]);
                continue;
            };
        }; 
    };

    while (index <testsectionum[0]) {
        questext[index].innerText = defdict[questext[index].innerText];
        index++;
    };

    var index = index + testsectionum[1];
    var numofq = index + testsectionum[1];
    while (index < numofq){
        questext[index].innerText = defdict[questext[index].innerText];
        index++;
    };

    var numofq = index + testsectionum[2]*5;
    while (index < numofq){
        questext[index].innerText = defdict[questext[index].innerText];
        index = index + 5;
    };

    var numofq = index + testsectionum[3]*2;
    while (index < numofq){
        if (defdict[questext[index].innerText] == questext[index+1].innerText)
            questext[index].innerText = "True";// + defdict[questext[index].innerText];
        else
            questext[index].innerText = "False";// + defdict[questext[index].innerText];
        index = index + 2;
    };
};