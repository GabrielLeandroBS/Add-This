$(window).on("load",function(){

    $(".addItem").click(function(){
        $(".container-input").css("display","block")
        $("section.options").slideToggle("slow");
    })  
    
    $(".adicionarTarefa").click(function(){
        $("section.options").slideToggle("slow");
    })

    $("#group").click(function(){
        console.log("testans")
        $(this).addClass("animate__animated animate__bounce")
    })

})  
