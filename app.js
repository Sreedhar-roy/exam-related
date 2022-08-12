function isJavaScriptFile(string){

    ar= string.split(".");

    if(ar[1] == "js"){
        console.log("True");
    }
    else{
        console.log("False");
    }

}
// x= isJavaScriptFile("this.pg");
console.log(isJavaScriptFile("this.js"));
