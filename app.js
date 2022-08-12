function isJavaScriptFile(string){

    ar= string.split(".");

    if(ar[1] == "js"){
        return true;
    }
    else{
        return 'false, "Please enter the correct file name"';
    }
}
const ScriptFile = isJavaScriptFile("app.js");
console.log(ScriptFile);
