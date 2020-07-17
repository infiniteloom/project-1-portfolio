


// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    // return (
    //   (rect.top <= 0
    //     && rect.bottom >= 0)
    //   ||
    //   (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
    //     rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    //   ||
    //   (rect.top >= 0 &&
    //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    // );
    return (
        (rect.top <= 30
          && rect.bottom >= 30)
        ||
        (rect.bottom >= (window.innerHeight -30 || document.documentElement.clientHeight -30) &&
          rect.top <= (window.innerHeight -30 || document.documentElement.clientHeight -30))
        ||
        (rect.top >= 30 &&
          rect.bottom <= (window.innerHeight -30 || document.documentElement.clientHeight -30))
      );
  }


let scroll = window.requestAnimationFrame ||
    function(callback){ window.setTimeout(callback, 1000/60)};
let elementsToShow = document.querySelectorAll('.show-on-scroll');


const loop = () =>{
    elementsToShow.forEach(element =>{
        if(isElementInViewport(element)){
            element.classList.add('is-visible');
        }else{
            element.classList.remove('is-visible');
        }
    });
    scroll(loop);
}
loop();



// global variables for burger hide /show actions
const $burger = $('.burger');
const $links = $('.item_menu'); 
const $mobileLinks = $('.mobile-menu-links');
const $close = $('.close');
let show = false;

// function to handle the click event for burger menu hide/show
const showMenu =(event) =>{
    let width = window.innerWidth;
    // console.log(width)
    if(width < 400){
        // console.log('this is smaller than 400')
        if(show){
            if($(this)=== $burger || $(this) === $links ){
                show = false;
             }else{
                // $('.close').css('right', '-900000px').css('position', 'fixed');
                $burger.css('display', 'block');    
                $('.inline-menu').css('display', 'block');
                // $('.mobile-menu-show').css('opacity', '0');
                // $('.mobile-menu-show').css('display','none');
                $('.mobile-menu-back').css('margin-left','-900000px');
                // $('.mobile-menu-back').removeClass('mobile-menu-show');
                // $('.mobile-menu-back').addClass('mobile-menu-hide');
                // $('.mobile-menu-container').removeClass('mobile-menu-show');
                // $('.mobile-menu-container').addClass('mobile-menu-hide');
                // $mobileLinks.css('display','none');
                $('.title-name').css('display','block');

                $links.each(function(index){
                    $(this).css('display', 'none');
                });
             }
             show = false;
            
        }else{
            // $('.close').css('position', 'absolute').css('right', '10%').css('opacity', '1');
            $('.inline-menu').css('display', 'none');
            // $('.mobile-menu-show').css('opacity', '1');
            // $('.mobile-menu-show').css('display','block');
            $('.mobile-menu-back').css('margin-left','0');
            // $('.mobile-menu-back').removeClass('mobile-menu-hide');
            // $('.mobile-menu-back').addClass('mobile-menu-show');
            // $('.mobile-menu-container').removeClass('mobile-menu-hide');
            // $('.mobile-menu-container').addClass('mobile-menu-show');
            // $mobileLinks.css('display','block');
            $('.title-name').css('display','none');
            $burger.css('display', 'none');
            show = true;        
        }
    }else{
        return
    }
}

$burger.on('click', showMenu);
$links.on('click', showMenu);
$close.on('click', showMenu);
$mobileLinks.on('click', showMenu);

