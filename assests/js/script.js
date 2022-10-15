$(document).ready(()=>{
    // DOM is Ready
    function closePopUp(){
        $('.headerUl').removeClass('active');
        $('#popUp').removeClass('blocker');
    }
// NAVIGATION --> HAMBURGER-BUTTON-EVENTS
    $('#hamburgerOpenBtn').click(()=>{
        $('.headerUl').addClass('active');
        $('#popUp').addClass('blocker');
    })
    $('#hamburgerCloseBtn').click(closePopUp);
    $('#popUp').click(closePopUp);
    
// NavBar
    $(".navListAnchor").click(closePopUp);
// STICKY AND NAV-Bar scroll 

    $(window).scroll(()=>{
        // Sticky 
        if(window.scrollY >= 300){
            $('.go-top').addClass('active');
        }else{
            $('.go-top').removeClass('active');
        }

        // navbar scroll 
        let headerHeight = $('.header').height();
        if(window.scrollY >=( headerHeight/3)){
            $('.headerNav').addClass('backgroundColor');
        }else{
            $('.headerNav').removeClass('backgroundColor');
        }
    })

})