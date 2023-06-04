// hide popup on clicking outside
document.onclick = function (event) {

    // Notification popup hides on clicking outside

    if (event.target.id !== 'notification_list_id' && event.target.offsetParent.id !== 'notification_id') {

        if (event.target.offsetParent.id !== 'notification_list_id' ){
        document.getElementsByClassName("notification")[0].getElementsByClassName("notification_list")[0].classList.add("display_none");
    }
    }

    // Messages popup hides on clicking outside 

    if (event.target.id !== 'messages_list_id' && event.target.offsetParent.id !== 'messages_id') {

        if (event.target.offsetParent.id !== 'messages_list_id' ){
        document.getElementsByClassName("messages")[0].getElementsByClassName("messages_list")[0].classList.add("display_none");
    }
    }
}