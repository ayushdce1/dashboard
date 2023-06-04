document.getElementsByClassName("notification")[0].addEventListener("click", (event)=>{
    
    if (event.target.offsetParent.id !== 'notification_list_id'){
        document.getElementsByClassName("notification")[0].getElementsByClassName("notification_list")[0].classList.toggle("display_none");
    }

    
    
});


