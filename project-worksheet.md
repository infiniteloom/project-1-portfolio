# Project Overview
https://infiniteloom.github.io/project-1-portfolio/

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 1| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 2, 3| MVP & Bug Fixes | Complete
|Day 4, 5| Final Touches | Complete
|Day 6| Present | Incomplete


## Project Description

My website is an infinite scroll layout with a semi-transparent white background header- title to the left and menu to the top right (lea thomas    'projects', 'about', 'contact') and a semi-transparent green-grey footer with social links and a jump to top link.

This intro section will have a 100% wide image of myself with weavings that fades in upon site load, along with the header.

Top menu links jump to page sections with a smooth scroll. There will be additional unlinked sections that showcase my artistic projects for eye candy between linked sections, encouraging a continuous and engaging scroll. 

Emphasis on creative displays, CSS animations (keyframe and transitions) i.e. implementing on:hover/on-click darkening, slow show and grow effects to create a sense of transition and interaction throughout the site.


Inspiration:

- Parallax scrolling styles:
https://www.crema.us/contact

- Slide-in mobile menu:
https://loamlove.com



## Google Sheet

https://docs.google.com/spreadsheets/d/1cPPgvKuA_8-PHICX1skEGzDlnZQLqOFcqlOzKEIEoSg/edit#gid=0



## Wireframe

- [Mobile](https://cloudinary.com/console/c-484e30e1d7e8f448a6d118584bab29/media_library/folders/ff9843dc6308db13b078ac873f943679)
- [Tablet](https://cloudinary.com/console/c-484e30e1d7e8f448a6d118584bab29/media_library/folders/ff9843dc6308db13b078ac873f943679)
- [Desktop](https://cloudinary.com/console/c-484e30e1d7e8f448a6d118584bab29/media_library/folders/4da929d78fa140dd51b8895684203c69)

Wireframing Resources Used:

- [Mockflow] 





## Time/Priority Matrix 

Pulling Data from JSON (total 3-5hrs?):
- Pull data using google json api 
- Render data on page 
- Allow user to choose favorite
- Save their choices in firebase

General HTML/ CSS (total 7-8hr): 
- Creating sections for pages (.5hr)
- Creating the HTML framework for top menu and footer and linking the top menu to each page section (.5-1hr)
- Creating flex layout for project thumbnails/ display block in mobile (1-2hr)
- Thumbnails styling: centering, brightness down, subtle grow on:hover (1hr)
- Import and implement fonts (.5-1hr)
- Color research (1hr)

Features (total 4-5hrs):
- Menu bar with flex for browser, styling (1-2hrs)
- Sandwich bar for both mobile (3hr)

Low-priority features (priority level indicated from top to bottom) (total 17-19hrs, with research):
- Contact form design research (4hr) - how to capture the data? what happens to the information? Color, size, copy?
- Parallax effects, need research (3-4hrs) (darken other sections when not centered)
- Projects/intro page: Slow show text when div is centered in the downward scroll (1hr)
- Add a slow show display style to dropdown menu for mobile onclick of sandwich bar and an option to close the menu with an X at the top right. (ref: https://www.herdl.com/) - 2-4hrs with research.
- Further font research (1hr)
- Creative loading page, if necessary? (2hr)




#### MVP

JSON:
- Pull data using google json api
- Render data on page 

Menu:
- Menu bar with flex for browser, styling (1-2hrs)
- Sandwich bar for both mobile (3hr)

General CSS: 
- Different color backgrounds for various sections 
- Creating flex box for projects divs
- Thumbnails styling: centering, brightness down, subtle grow on:hover (2hr)
- Thumbnails copy for captions and styling (2hr)
- Import and implement fonts

Features:
- Contact Form
- Images for intro section, quote section, about me section
- Creative text layout section
- YouTube video embed section
- Sticky top menu, semi-transparent
- Mobile sandwich dropdown menu



#### Post MVP:
- Sections styling: Slow show text when div is centered in the downward scroll (1hr)
- Parallax effects, need research (3-4hrs) (darken other sections when not centered)
- Contact form design research (4hr) - how to capture the data? what happens to the information? Color, size, copy?
- Creative loading page, if necessary? (2hr)
- Further font research (1hr)
- Add a slow show display style to dropdown menu for mobile onclick of sandwich bar and an option to close the menu with an X at the top right. (ref: https://www.herdl.com/) - 2-4hrs with research.






## Additional Libraries
jQuery was used as a toggle to trigger certain CSS animations when the sections were in range of the screen size and also to toggle menu items from being shown and hidden for different states. 




## Code Snippet

I had a great time with implementing and learning about various CSS animations including changes in opacity, slide-in text animation, moving images and a section featuring animated text that had an infinite opacity/gradient shift. 

All of the sections that were indicated to have animations were attributed with a class of 'show-on-scroll' in addition to possibly another class that was used for the main stylings of the section.


In my JavaScript code, I created a series of functions (with the help of some great code found on a stackoverflow forum) that grabbed all elements with the 'show-on-scroll' class, used a forEach loop on the gathered array to see if any of those elements were within the range of the screen. 

The structure of this code block is fascinating to me because it uses a loop() function that runs perpetually and checks to see if an element is within the view of the screen. The loop() function will add a class of 'is-visible' to any element that is detected within screen and removes the class if it is not detected. The loop() function then sends the result as an argument to another function called scroll that has a set timer on it. Together, these functions trigger the computer to check if an element is visible or not, applly a special class to it that will trigger the specific animation for that element and update the animation/ continue to check if it is in view at a rate of 60 frames per second.  


"The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint." (MDN)


```
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
```


The way the loop function detects if a section is in view or not is a separate function called ifElementInViewport() which is used to return a Boolean value and serves as the two conditional if/else expressions in this function. If ifElementInViewport(element) returns true, the class of is-visible will be added to the element in viewport. 


This codeblock makes use of some built-in JavaScript code such as window.innerHeight (which essentially calls a function on the global object of 'window' that returns the inner height value as a number) that detects a viewport's dimensions so that the code can use that data to determine whether or not an element is within range. 

```

// Derived from a helper function at: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
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

```


## Issues and Resolutions

Issue 1:
I created a mobile menu with a slide-in animation that took two days to debug and I'm still not 100% why it won't work properly all of the time. 

I was inspired by a slide in menu on loamlove.com and have noticed this feature on several websites. I had a feeling something in my code was overriding the transitions as I learned that certain properties like display: block will negate any transition speeds but after several hours of refactoring my code, I still could not locate the trouble area. 

I brought my issue to Alex after many hours of research and he suggested to try just the menu code in a new file and tweak it till it works. I got this to work quickly but still could not successfully implement back into my original program. The menu works but does not have the same smooth quality that I have been hoping for. I resolved to let it rest for some time and come back to it with fresh eyes. 

In the meantime, I did learn a lot more about CSS animations than I would have without all the extra time spent on researching them.

In the function that handles the menu event listeners below, $('.mobile-menu-back').css('margin-left','-900000px'); and $('.mobile-menu-back').css('margin-left','0'); specifically target the slide-in animation effect for the mobile menu items (paired with CSS below this JS code snippet) by setting the margin-left so far off the screen that it is hidden then bringing it back to 0 when it is meant to be shown. I initially used display block and display none which work similarly but, as I learned, override any animation properties from the CSS. 


```
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
                $('.mobile-menu-back').css('margin-left','-900000px');
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

$burger.on('click', showMenu);
$links.on('click', showMenu);
$close.on('click', showMenu);
$mobileLinks.on('click', showMenu);


```
The JS code above triggers this div to toggle between off-screen (margin-left: -9000px) and on-screen(margin-left: 0). This div holds all the divs that the mobile menu is made of so this toggle only needs to be applied to this parent div with the class of mobile-menu-back.

```
.mobile-menu-back{
    position: fixed;
    margin-left: -9000px;
    background-color: rgba(241,216,222, 1);
    transition: margin-left .25s,background-color 500ms cubic-bezier(.55,0,.1,1) 200ms;
    transition-property: margin-left, background-color;
    transition-duration: .25s, 700ms;
    transition-timing-function: ease-out, cubic-bezier(0.55, 0, 0.1, 1);
    transition-timing-function: ease-out, cubic-bezier(0.55, 0, 0.1, 1);
    transition-delay: 0s, 0s;
    top: 0px;
    bottom: 0px;
    width: 100%;
    z-index:1000;
}
```
