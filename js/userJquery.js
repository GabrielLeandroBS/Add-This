$(window).on("load",function(){

    $(".addItem").click(function(){
        $(".container-input").css("display","block")
        $("section.options").slideToggle("slow",function(){
            $('.options input').focus(function(){
                console.log("FOcus ok")
                $("section.option").css("position","relative")
            })
        });
        $(".options").css("display","fixed")
    })  
    
    $(".adicionarTarefa").click(function(){
        $("section.options").slideToggle("slow");
       
    })  
})  
