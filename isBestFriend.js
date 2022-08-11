function isBestFriend (abul, babul){
    if(abul==babul && babul==abul){
        return "true";
    }
    else{
        return "false";
    }
}

const BestFriend = isBestFriend(abul, babul);
console.log(BestFriend);