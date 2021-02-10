$(function(){
     
    $(".navbar a, footer #up a").on('click', function(event){
    
        event.preventDefault();
        let hash = this.hash;
        
        $('html,body').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;});
        
    });
 
});