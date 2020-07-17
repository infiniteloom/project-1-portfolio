// $(document).ready(function() {
// 	$("body").on('click', '.top', function() {
// 		$("nav.menu").toggleClass("menu_show");
// 	});
// });




const url = `https://spreadsheets.google.com/feeds/list/1cPPgvKuA_8-PHICX1skEGzDlnZQLqOFcqlOzKEIEoSg/od6/public/values?alt=json`

fetch(url) 
    .then(response => response.json())
    .then(data => {
        // console.log(`data is ${data.feed.entry}`);
        const projects = data.feed.entry.map(entry => {
            return{
                title: entry.gsx$title.$t,
                image: entry.gsx$image.$t,
                description: entry.gsx$description.$t,
                url: entry.gsx$url.$t
            };
        });
        app(projects)
    });



const app = (data) => {
    // console.log(('app is running'))
    // console.log(data)

    const createProjectElement = (project) => {
        const $div = $('<div>');
        $div.css('background-image', `url(${project.image})`);
        // $div.append($('<img>').attr('src', project.image));
        let $div2 = $('<div>');
        $div.append($('<a>').attr('href', project.url).text(`${project.title} - ${project.description}`));
        // $div.append($('<p>').text(project.description));

        return $div
    }

        data.forEach(project => {
            const $projectDiv = createProjectElement(project)
            $('#projects-code').append($projectDiv);
        })
}



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
                $('.close').css('opacity', '0');
                $burger.css('display', 'block');    
                $('.inline-menu').css('display', 'block');
                // $('.mobile-menu-show').css('opacity', '0');
                // $('.mobile-menu-show').css('display','none');
                $('.mobile-menu-show').css('margin-left','-900000px');
                $('.mobile-menu-back').css('margin-left','-900000px');
                $mobileLinks.css('display','none');
                $('.title-name').css('display','block');

                $links.each(function(index){
                    $(this).css('display', 'none');
                });
                // $mobileLinks.each(function(index){
                //     $(this).css('display', 'none');
                // });
             }
             show = false;
            
        }else{
            $('.close').css('opacity', '1');
            $('.inline-menu').css('display', 'none');
            // $('.mobile-menu-show').css('opacity', '1');
            // $('.mobile-menu-show').css('display','block');
            $('.mobile-menu-show').css('margin-left','0');
            $('.mobile-menu-back').css('margin-left','0');
            $mobileLinks.css('display','block');
            $('.title-name').css('display','none');
            $burger.css('display', 'none');
            // $links.each(function(index){
            //     $(this).css('display', 'block');
            // });
            // $mobileLinks.each(function(index){
            //     $(this).css('display', 'block');
            // });
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



// my attempt at fixing the bug where the header on mobile would disappear when placed at fixed position top 0. 
// const loop = () =>{
//     elementsToShow.forEach(element =>{
//         if(element === $('header') || element === $('#about')){
//             console.log('the header is always visible')
//                 element.classList.add('is-visible');
//         }else{
//             if(isElementInViewport(element)){
//                 element.classList.add('is-visible');
//             }else{
//                 element.classList.remove('is-visible');
//             }
//         }

//     });
//     scroll(loop);
// }


loop();
