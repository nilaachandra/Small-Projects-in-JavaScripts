const isFriend = document.querySelector(".is-friend");
const addFriend = document.querySelector(".btn");
let check = false;



addFriend.addEventListener("click", function(){
    if (check == false){
        isFriend.innerHTML = "Friends";
        isFriend.style.color = "Green";
        addFriend.innerHTML = "Remove Friend"
        check = true;
    } else {
        isFriend.innerHTML = "Stranger";
        isFriend.style.color = "Red";
        addFriend.innerHTML = "Add Friend"
        check = false;
    }
})