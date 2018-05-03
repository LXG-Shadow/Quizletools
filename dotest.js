function dotest_getanswer_1(){
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


function dotest_getanswer_2(){
    var testsectionum=new Array()
    var titles = document.getElementsByTagName("h4");
    var index = 0;
    for (var i in titles){
        if (isNaN(parseInt(titles[i].innerText)))
            break;
        testsectionum[index] = parseInt(titles[i].innerText);
        index++;
    };

    var index = 0;
    var spantags=document.getElementsByTagName("span");
    var questext = new Array();
    var spanlabel = new Array();
    for(var i in spantags){  
        if(spantags[i].nodeType==1){  
            if(spantags[i].getAttribute("class") == "TermText notranslate lang-en"){
                questext.push(spantags[i])
            }; 
            if(spantags[i].getAttribute("class") == "UIRadio-label"){
                spanlabel.push(spantags[i]);
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

    var index = 0;
    while (index <testsectionum[0]) {
        questext[index].innerText = defdict[questext[index].innerText];
        index++;
    };

    var color = {0:"#000000",1:"#FF00FF",2:"#00FF00",3:"#0000FF",4:"#CC6600",5:"#00FFFF"};
    var colorindex = 0;
    var index = index + testsectionum[1];
    var numofq = index + testsectionum[1];
    while (index < numofq){
        var answer = defdict[questext[index].innerText];
        for (var i = 0;i<testsectionum[1];i++){
            if(questext[testsectionum[0]+i].innerText == answer){
                questext[testsectionum[0]+i].style.color = color[colorindex];
                questext[index].style.color = color[colorindex];
                colorindex++;
                break;
            };
        };
        index++;
    };

    var labelindex = 0;
    var numofq = index + testsectionum[2]*5;
    while (index < numofq){
        var answer = defdict[questext[index].innerText];
        for (var i = 0;i<4;i++){
            if(spanlabel[labelindex+i].innerText == answer){
                spanlabel[labelindex+i].style.color = "#FF6600";
                break;
            };
        };
        index = index + 5;
        labelindex = labelindex +4;
    };

    var numofq = index + testsectionum[3]*2;
    while (index < numofq){
        if (defdict[questext[index].innerText] == questext[index+1].innerText)
            spanlabel[labelindex].style.color = "#FF6600";
        else
            spanlabel[labelindex+1].style.color = "#FF6600";
        index = index + 2;
        labelindex = labelindex + 2;
    };
};