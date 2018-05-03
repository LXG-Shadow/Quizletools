var currentanswer = "init";
function dowrite_autofill(){
    var spantags=document.getElementsByTagName("span");
    var textareatags = document.getElementsByTagName("textarea");
    if (textareatags.length != 1){
        console.log("didn't find the proper textarea");
        var a = setTimeout(dowrite_autofill,2000);
        return;
    }
    else{
        if (textareatags[0].getAttribute("class") == "UITextarea-textarea lang-en"){
            console.log("found textarea");
            var textarea = textareatags[0];
        }
        else{
            console.log("didn't find the proper textarea");
            var a = setTimeout(dowrite_autofill,2000);
            return;
        };
    }
    for(var i in spantags){  
        if(spantags[i].nodeType==1){  
            if(spantags[i].getAttribute("class") == "qDef lang-en TermText"){
                if (currentanswer == textarea.value){
                    console.log("wait for next word.");
                    var a =setTimeout(dowrite_autofill,1000);
                    return;
                }
                else{
                    event = document.createEvent("KeyboardEvent");
                    //初始化事件对象
                    event.initKeyboardEvent("keydown", true, true, document.defaultView, "a",0, "Shift", 0);
                    currentanswer = defdict[spantags[i].innerHTML]
                    console.log("enter the word to the textarea.",currentanswer);
                    textarea.value = currentanswer;
                    textarea.dispatchEvent(event);
                    var a =setTimeout(dowrite_autofill,1000);
                    return;
                };
            }; 
        };
    };
};