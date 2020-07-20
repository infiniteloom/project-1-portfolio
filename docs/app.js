
// Importing data from google spreadsheets for projects section
const url = `https://spreadsheets.google.com/feeds/list/1cPPgvKuA_8-PHICX1skEGzDlnZQLqOFcqlOzKEIEoSg/od6/public/values?alt=json`

fetch(url) 
    .then(response => response.json())
    .then(data => {
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
    const createProjectElement = (project) => {
        const $div = $('<div>');
        $div.css('background-image', `url(${project.image})`);
        let $div2 = $('<div>');
        $div.append($('<a>').attr('href', project.url).text(`${project.title} - ${project.description}`));
        return $div
    }
        data.forEach(project => {
            const $projectDiv = createProjectElement(project)
            $('#projects-code').append($projectDiv);
        })
}



///// MENU TOGGLING FOR WEB /MOBILE
// global variables for burger hide /show actions
const $burger = $('.burger');
const $links = $('.item_menu'); 
const $mobileLinks = $('.mobile-menu-links');
const $close = $('.close');
let show = false;

// function to handle the click event for burger menu hide/show
const showMenu =(event) =>{
    // detects if this is a small screen/mobile, confirms the need for a burger menu
    let width = window.innerWidth;
    if(width < 400){
        // show does not need to be written as show === true because it will essentially be read as truthy if it has any data passing through that is not a distinctly falsy value (0, null, undefined)
        if(show){
            // if this element is the burger menu icon or a web link, the mobile menu will not be show (it should be hidden when the burger icon is clickable).
            if($(this)=== $burger || $(this) === $links ){
                show = false;
            }else{
                // if anything other than the burger or a web link is clicked, then do these things:
                $burger.css('display', 'block');    
                $('.inline-menu').css('display', 'block');
                // this is part of the slide-in animation- sending the mobile menu from way off screen to the left to hide it and bringing margin-left back to 0 to show it. 
                $('.mobile-menu-back').css('margin-left','-1000px');
                $('.title-name').css('display','block');
                $links.each(function(index){
                    $(this).css('display', 'none');
                });
            }
             show = false;
        
        // If the status of show is false, meaning the menu is not visible when the element passed through is clicked, then do these things:
        }else{
            $('.inline-menu').css('display', 'none');
            $('.mobile-menu-back').css('margin-left','0');
            $('.title-name').css('display','none');
            $burger.css('display', 'none');
            show = true;       
            }
    }else{
        return
    }
}

// for mobile links
$burger.on('click', showMenu);
$close.on('click', showMenu);
$mobileLinks.on('click', showMenu);







// Derived from a helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
// if (typeof jQuery === "function" && el instanceof jQuery) {
//     el = el[0];
// }
//The Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport. (MDN)
var rect = el.getBoundingClientRect();

return (
    (rect.top <= 0
        && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight  || document.documentElement.clientHeight ) &&
        rect.top <= (window.innerHeight  || document.documentElement.clientHeight ))
    ||
    (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight  || document.documentElement.clientHeight ))
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
