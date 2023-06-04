document.getElementById("toggle_sidebar_width").addEventListener("click", ()=>{
    document.getElementsByClassName("structure_200_1fr")[0].classList.toggle("structure_60_1fr");
    document.getElementsByClassName("structure_200_1fr")[0].classList.toggle("mouseover_enabled");
    
    toggle_sidebar_elements();
    toggle_sidebar_menu_arrow();

});


document.getElementById("sidebar").addEventListener("mouseover", ()=>{


    if(document.getElementsByClassName("structure_200_1fr")[0].classList.contains("structure_60_1fr")){
        document.getElementsByClassName("structure_200_1fr")[0].classList.toggle("structure_60_1fr");
        

        toggle_sidebar_elements();
        toggle_sidebar_menu_arrow();

    }

});




document.getElementById("sidebar").addEventListener("mouseout", ()=>{

    if(document.getElementsByClassName("structure_200_1fr")[0].classList.contains("mouseover_enabled")){
        document.getElementsByClassName("structure_200_1fr")[0].classList.toggle("structure_60_1fr");

        toggle_sidebar_elements();
        toggle_sidebar_menu_arrow();
    }
    
});

function toggle_sidebar_elements(){
    var i=0;
    var length_a = document.getElementById("sidebar").getElementsByClassName("hide_on_toggle").length;
    
    while(i<length_a){
        document.getElementById("sidebar").getElementsByClassName("hide_on_toggle")[i].classList.toggle("display_none");
        i++;
    }
}

function toggle_sidebar_menu_arrow(){
    var i=0;
    var length_a = document.getElementById("sidebar").getElementsByClassName("sub_menu").length;
    
    while(i<length_a){
        document.getElementById("sidebar").getElementsByClassName("sub_menu")[i].classList.toggle("arrow_rotate");
        
        if(document.getElementsByClassName("sub_menu")[i].classList.contains("arrow_rotate_new")){
            document.getElementById("sidebar").getElementsByClassName("sub_menu")[i].classList.toggle("opacity");
        }
        
        i++;
    }
}


