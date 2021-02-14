$(function(){

    $(".slide >img:first-child").css("display","block")

    var count=0;
    setInterval(function(){
        count++;
        if(count>5) count=0;

        $(".slide > img").css("display","none");
        $(".slide > img").eq(count).css("display","block");
    },3000);


    $(".direction a:last-child").click(function(){
        count++;
        if(count >5) count=0;
        $(".slide > img").css("display","none");
        $(".slide > img").eq(count).css("display","block");
        

    });
    $(".direction a:first-child").click(function(){
        count--;
        if(count < -5) count=0;
        $(".slide > img").css("display","none");
        $(".slide > img").eq(count).css("display","block");
        

    });

    $(".direction a:nth-child(2)").click(function(){
        $(this).css("background-position","-80px 0px")
    });

 

    $(".direction a:nth-child(2)").mouseout(function(){
        $(this).css("background-position","-80px -40px")
    });

   
    

   

    
});