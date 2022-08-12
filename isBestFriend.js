
let bestFrient1= {name:"abul", friend:"babul"};
let bestFrient2= {name:"babul", friend:"abul"};

function isBestFriend (fr1,fr2){
    if(fr1.name==fr2.friend && fr1.friend==fr2.name)
    {
        console.log("true");
    }
    else
    {
        console.log("false");
    }
}
uniqueFriend = isBestFriend(bestFrient1,bestFrient2);
console.log(uniqueFriend);