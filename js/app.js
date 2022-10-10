/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

/**
//--APPROACH--//
     - The section within the browser view is gonna get its header red INITIALLY ONLY.
     - It's gotta be dynamic because I don't know how many section we are going to have.
     - I will grab every section with querySelectorAll(), and onscroll I will run a function that constantly checks which section is within and view and which is not.
     - The ones in the view I add to them the active class, the ones not i will remove from them the active class, by default all sections have no active class.
**/

const sections = Array.from(document.querySelectorAll('section'));
const viewportHeight = window.innerHeight;

window.onscroll = () => {
    
    // Checks which section is within the viewport and adds "active" class to it.
    sections.forEach(section => {

        let sectionSpaceFromTop = section.getBoundingClientRect().top;

        if(sectionSpaceFromTop > 0 && sectionSpaceFromTop < viewportHeight) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });
};

const navList = document.querySelector('.nav__list');
const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');

// <li class="navbar__item"><a class="navbar__link">Hello</a></li>

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


