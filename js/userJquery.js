$(window).on("load",function(){

    $(".addItem").click(function(){
        $(".container-input").css("display","block")
        $(".container-input").css("zIndex","80")
        $("section.options").slideToggle();
    }) 
/*

    $(".options input").blur(function(){
        $("section.options").slideToggle(800,function(){
            $(".container-input").css("zIndex","-80")
        });  
    })*/
})  
