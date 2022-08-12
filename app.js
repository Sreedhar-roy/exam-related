function isJavaScriptFile(string){

    ar= string.split(".");

    if(ar[1] == "js"){
        return true;
    }
    else{
        return '"Please enter the correct file name (.js)"';
    }
}
const ScriptFile = isJavaScriptFile("this.jsw");
console.log(ScriptFile);
