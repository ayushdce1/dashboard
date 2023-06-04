document.getElementsByClassName("messages")[0].addEventListener("click", (event)=>{
    
    if (event.target.offsetParent.id !== 'messages_list_id'){
        document.getElementsByClassName("messages")[0].getElementsByClassName("messages_list")[0].classList.toggle("display_none");
    }

    
    
});


