# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 2| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete


## Project Description

My website will have a landing page with a semi-transparent white background header- title to the left and menu to the top right (lea thomas    'projects', 'about', 'contact').
This intro section will have a 100% wide image of myself with weavings. 

The website is an infinite scroll display that jumps to sections when links are clicked. There will be additional unlinked sections that showcase my artistic projects. 

Emphasis on creative displays, i.e. implementing on:hover darkening, slow show and grow effects (darkening would be on click for mobile) to create a sense of transition while the endless scroll projects page spans different sections/project thumbnails/divs.

Continuing to scroll down will lead to the about page, some creative sections to showcase my artistic work and the contact form. 

Bonus if I can figure out how to click on the menu item and have the browser jump down to a section of the page. (Nailed it!)


Inspiration:

- Parallax scrolling styles:
https://www.crema.us/contact

- Three column project thumbnail with slow-show text when div is centered on page. 
https://yardnyc.com/

- Color scheme:
https://loamlove.com



## Google Sheet

Include link to your google sheet here.  Here is the sample [Suresh had used in class](https://docs.google.com/spreadsheets/d/1V1M3Eq1NXH2PNmeTlVviRhEjX9kenq769Vo2P5mMtro/edit#gid=0) 



## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  

- [Mobile](https://cloudinary.com/console/c-484e30e1d7e8f448a6d118584bab29/media_library/folders/ff9843dc6308db13b078ac873f943679)
- [Tablet](https://cloudinary.com/console/c-484e30e1d7e8f448a6d118584bab29/media_library/folders/ff9843dc6308db13b078ac873f943679)
- [Desktop](https://cloudinary.com/console/c-484e30e1d7e8f448a6d118584bab29/media_library/folders/4da929d78fa140dd51b8895684203c69)

Wireframing Resources Used:

- [Mockflow](https://support.mockflow.com/article/108-how-to-share-projects-in-mockflow)





## Time/Priority Matrix 

Pulling Data from JSON (total 3-5hrs?):
- Pull data using google json api 
- Render data on page 
- Allow user to choose favorite
- Save their choices in firebase

General CSS (total 7hr): 
- Black background / white text with some color/ dark theme implementation (1hr)
- Creating CSS grid, triple column thumbnails for projects (1hr)
- Thumbnails styling: centering, brightness down, subtle grow on:hover (2hr)
- Thumbnails copy for captions and styling (2hr)
- Import and implement fonts (1hr)

Features (total 4-5hrs):
- Importing p5.js project for intro page animation (1hr)
- Menu bar with flex for browser, styling (1-2hrs)
- Sandwich bar for both mobile (1hr)

Low-priority features (priority level indicated from top to bottom) (total 17-19hrs, with research):
- Contact form design research (4hr) - how to capture the data? what happens to the information? Color, size, copy?
- Parallax effects, need research (3-4hrs) (darken other sections when not centered)
- Projects/intro page: Slow show text when div is centered in the downward scroll (1hr)
- Add a slow show display style to dropdown menu for mobile onclick of sandwich bar and an option to close the menu with an X at the top right. (ref: https://www.herdl.com/) - 2-4hrs with research.
- Further font research (1hr)
- Creating or placing arrow graphics from about to contact form (1hr)
- Creative loading page, if necessary? (2hr)




#### MVP (examples)

JSON:
- Pull data using google json api
- Render data on page 
- Allow user to choose favorite
- Save their choices in firebase

Menu:
- Menu bar with flex for browser, styling (1-2hrs)
- Sandwich bar for both mobile (1hr)

General CSS: 
- Black background / white text with some color/ dark theme implementation (1hr)
- Creating CSS grid, triple column thumbnails for projects (1hr)
- Thumbnails styling: centering, brightness down, subtle grow on:hover (2hr)
- Thumbnails copy for captions and styling (2hr)
- Import and implement fonts
	Font options: 
		< p >: Source Code Pro; 
		< h > SignalNo1D; ArnoPro Regular;  
		< title > Anton?

Features:
- Importing p5.js project for intro page animation
- Contact Form
- Grid layout for two different categories of projects 



####Post MVP:
- Projects/intro page: Slow show text when div is centered in the downward scroll (1hr)
- Parallax effects, need research (3-4hrs) (darken other sections when not centered)
- Contact form design research (4hr) - how to capture the data? what happens to the information? Color, size, copy?
- Creative loading page, if necessary? (2hr)
- Further font research (1hr)
- Creating or placing arrow graphics from about section to contact form
- Add a slow show display style to dropdown menu for mobile onclick of sandwich bar and an option to close the menu with an X at the top right. (ref: https://www.herdl.com/) - 2-4hrs with research.





## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.



#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Hamburger | H | 1hr | 1.5hr | -hr|
| Project Previews | H | 3hr | -hr | -hr|
| Regular Nav | H | H | -hr | -hr|
| Adding Form | H | 1.5hr| -hr | -hr |
| Other sections and flex| M | 4hr | 2hr | -hr|
| Working with API | H | 3hrs| 2hr | -hr |
| Responsive | H | 3hr | -hr | -hr|
| Social Media Icons | L | 1hr | -hr | -hr|
| Total | H | 15.5hrs| -hrs | -hrs |



#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Project Hover | L | 3hr | -hr | -hr|
| Banner letters wiggle | L | 1hr | -hr | -hr|
| Interactive Banner | M | 4hr | -hr | -hr|
| Materialize | H | 4hr | -hr | -hr|
| Bootstrap | H | 4hr | -hr | -hr|
| Make own icon | L | 4hr | -hr | -hr|
| Total | H | 20hrs| -hrs | -hrs |



## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 



## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object

## Previous Project Worksheet
 - [Readme's](https://github.com/jkeohan/fewd-class-repo/tree/master/final-project-worksheet/project-worksheet-examples)
 - [Best of class readme](https://github.com/jkeohan/fewd-class-repo/blob/master/final-project-worksheet/project-worksheet-examples/portfolio-gracie.md)
