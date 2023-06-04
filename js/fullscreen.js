document.getElementById("fullscreen_window").addEventListener("click", ()=>{

   var main_wrap_container =  document.getElementById("main_wrap_container");
   
   main_wrap_container.toggleAttribute("fullscreen_mode_in");
   
   if(main_wrap_container.hasAttribute('fullscreen_mode_in')){
   
        main_wrap_container.requestFullscreen();
   
    }else{
        document.exitFullscreen();
    }


});

