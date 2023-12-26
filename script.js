// Nav Bar Current Location Indicator
$(document).ready(function() {
    var currentLocation = window.location.href;
    $(".menu ul li a").each(function() {
        if (this.href == currentLocation) {
            $(this).addClass("active");
        }
    });
});
//contact navigation
function contactLocation() {
    window.location.href = "contact.html#contact"

}
//Hamburger Menu Toggler Function
$(document).ready(function() {
    $(".hamburger-icon").click(function() {
        $(".menu-items").slideToggle();
    });
});

//Services Toggler
document.addEventListener('DOMContentLoaded', function() {
    // Set the interval for auto-sliding (adjust the duration as needed)
    setInterval(function() {
        // Trigger the next slide
        $('.carousel').carousel('next');
    }, 8000); // 5000 milliseconds (5 seconds) interval, change as needed
});


// render to about us page

function renderToAnotherPage() {
    window.location.href = "about.html";
}
//Scroll button
//contact page
function contactLocation() {
    window.location.href = "contact.html#contact"
}
// Show/hide the scroll button based on scroll position
window.onscroll = function() {
    showScrollButton();
};

function showScrollButton() {
    var scrollButton = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

// Scroll to top function
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
//hidden button toggler
document.getElementById('showHiddenBoxes').addEventListener('click', function() {
    // Toggle visibility of hidden boxes
    toggleVisibility('box-5');
    toggleVisibility('box-6');
    toggleVisibility('box-7');

    // Hide the button after the 4th box when all boxes are visible
    hideButtonAfterBox4();

    // Show a new button after the 7th box to close the visible boxes
    showCloseBoxesButton();
});

function toggleVisibility(className) {
    var element = document.querySelector('.service-items-2.' + className);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }

    // Check the visibility of all boxes and show/hide the button after the 4th box accordingly
    checkVisibilityAndUpdateButton();
}

function hideButtonAfterBox4() {
    var button = document.getElementById('showHiddenBoxes');
    var box4 = document.querySelector('.service-items-2.box-4');

    // Check if the button is before the 4th box
    if (button.nextElementSibling === box4) {
        button.style.display = 'none';
    }
}

function showCloseBoxesButton() {
    // Create a new button
    var closeButton = document.createElement('button');
    closeButton.textContent = 'VIEW LESS';
    closeButton.id = 'closeHiddenBoxes';
    closeButton.className = 'view-btn'; // Apply the same class as the "VIEW MORE" button

    // Append the new button after the 7th box
    var box7 = document.querySelector('.service-items-2.box-7');
    box7.insertAdjacentElement('afterend', closeButton);

    // Add an event listener to close the boxes when the new button is clicked
    closeButton.addEventListener('click', function() {
        hideBoxes();
        // Remove the close button after hiding the boxes
        closeButton.parentNode.removeChild(closeButton);
        // Show the original button after the 4th box
        document.getElementById('showHiddenBoxes').style.display = 'block';
    });
}

function hideBoxes() {
    // Hide the boxes
    document.querySelector('.service-items-2.box-5').style.display = 'none';
    document.querySelector('.service-items-2.box-6').style.display = 'none';
    document.querySelector('.service-items-2.box-7').style.display = 'none';

    // Check the visibility of all boxes and show/hide the button after the 4th box accordingly
    checkVisibilityAndUpdateButton();
}

function checkVisibilityAndUpdateButton() {
    var button = document.getElementById('showHiddenBoxes');
    var box4 = document.querySelector('.service-items-2.box-4');
    var box5 = document.querySelector('.service-items-2.box-5');
    var box6 = document.querySelector('.service-items-2.box-6');
    var box7 = document.querySelector('.service-items-2.box-7');

    // Check the visibility of all boxes
    var allBoxesVisible = box5.style.display === 'block' &&
        box6.style.display === 'block' &&
        box7.style.display === 'block';

    // Show/hide the button after the 4th box based on the visibility of all boxes
    button.style.display = allBoxesVisible ? 'none' : 'block';
}

// Initialize Slick Slider
let slideIndex = 0;

function moveSlider(n) {
    const cards = document.querySelector('.cards');
    const cardWidth = document.querySelector('.card').offsetWidth;

    slideIndex += n;
    cards.style.transform = `translateX(${-slideIndex * cardWidth}px)`;
}
//service content