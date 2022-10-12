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

const html = document.querySelector('html');
const sections = Array.from(document.querySelectorAll('section'));
const viewportHeight = window.innerHeight;
const navbar = document.querySelector('.navbar__menu');
const navbarList = document.querySelector('#navbar__list');
const numberOfNavItems = Array.from(document.querySelectorAll('[data-nav]')).length;
const scrollTopPageIcon = document.querySelector('.fa-angles-up');

/**
 * End Global Variables
**/


// Build the nav
for(let i = 0; i < numberOfNavItems; i++) {

    const navbarItem = document.createElement('li');
    const navbarLink = document.createElement('a');

    navbarLink.classList.add("menu__link");
    navbarLink.innerText = "Section " + (i + 1);

    // Creates a dataset for each nav item, the dataset holds the section the nav item refers to, to bind that dataset with the section ID for navigation.
    const sectionAssociated = "section" + (i + 1);
    navbarLink.dataset.association = sectionAssociated;

    navbarLink.addEventListener('click', e => {
        document.getElementById(navbarLink.dataset.association).scrollIntoView({behavior: 'smooth'})
    });
    
    navbarList.appendChild(navbarItem);
    navbarItem.appendChild(navbarLink);
}


// Scroll inactivity
let hideNavbar = setTimeout(() => {
    navbar.style.display = 'none';
}, 3000);


//----- Window Scrolling Logics -----//
window.onscroll = () => {

    clearTimeout(hideNavbar);
    navbar.style.display ='block';
    
    // Back to top icon
    if(html.getBoundingClientRect().top !== 0) {
        scrollTopPageIcon.classList.add('active');
    } else {
        scrollTopPageIcon.classList.remove('active');
    }

    scrollTopPageIcon.addEventListener('click', e => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    
    // Checks which section is within the viewport then adds "active" class to it.
    sections.forEach(section => {

        let sectionSpaceFromTop = section.getBoundingClientRect().top;

        if(sectionSpaceFromTop > 0 && sectionSpaceFromTop < viewportHeight) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });

    // Scroll inactivity
    hideNavbar = setTimeout(() => {
        navbar.style.display = 'none';
    }, 3000);
    
};


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


