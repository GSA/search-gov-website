//= require js/uswds.min.js

// Add your custom javascript here

// update sidenav styling (TODO: figure out how to do this without needing JS)
// find all submenu items that are marked as "current"
var subNavItems = document.querySelectorAll(".is-current a");

for (i in subNavItems) {
    // determine the parent folder of the current page URL
    var subfolder = window.location.href.split('/').slice(0,-1).join('/')+"/";
    console.log(subfolder);

    // add styling if the current page matches a page listed in the submenu
    if (subNavItems[i].href == window.location.href) {
        subNavItems[i].classList.add("usa-current");
    }

    // add styling if the current page belongs to a parent folder in the submenu
    else if (subNavItems[i].href == subfolder) {
        subNavItems[i].classList.add("usa-current");
    }
   
}