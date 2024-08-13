// 12=> Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

// If There's Color Item In Local Storage
if (mainColors !== null) {
    // console.log('Local Storage Is Not Empty You Can Set It On Root Now')

    document.documentElement.style.setProperty('--main-color', mainColors);

        // 15 => Remove Active Class From All Colors List Item
        document.querySelectorAll(".colors-list li").forEach(element => {

            element.classList.remove("active");
            
    // 16 =>  Add Active Class On Element With Data-Color === Local Storage Item
    if (element.dataset.color === mainColors) {

        // 17 =>  Add Active Class
        element.classList.add("active");
        
        }

    });
};

// 22 => Random Background Option
    let backgroundOption = true;

// 24 => Variable To Control The Background Interval
    
    let backgroundInterval;

// 25 => Check If There's Local Storage Random Background Item
    let backgroundLocalItem = localStorage.getItem("background_option");

// 26 => Check If Random Background Local Storage Is Not Empty
if (backgroundLocalItem !== null) {
    if (backgroundLocalItem === 'true') {
        backgroundOption = true;

    } else {
    
        backgroundOption = false;
    
    }

    // 29 => Remove Active Class From All Span
    document.querySelectorAll(".random-backgrounds span").forEach(element => {

        element.classList.remove("active");

    });

    if (backgroundLocalItem === 'true') {

        document.querySelector(".random-backgrounds .yes").classList.add("active");

    } else {

        document.querySelector(".random-backgrounds .no").classList.add("active");

    }

}

// 5 => Click On Toggle Settings Gear
document.querySelector(".toggle-settings .fa-gear").onclick = function () {

    // 6 => Toggle Class Fa-spin For Rotation on Self
    this.classList.toggle("fa-spin");

    // 7 => Toggle Class Open On Main Settings Box
    document.querySelector(".settings-box").classList.toggle("open");
    
};

// 8 => Switch Colors
const colorLi = document.querySelectorAll(".colors-list li");

// 9 => Loop On All List Items
colorLi.forEach(li => {

    // 10 => Click On Every List Items
    li.addEventListener("click", (e) => {
        
        // 11 => Set Color On Root
        
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        // 13 => Set Color On Local Storage
        localStorage.setItem("color_option", e.target.dataset.color);
        
        // 62 => Add HandelActive
        handleActive(e);
    });

});
// 18 => Switch Colors
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// 19 => Loop On All List Items
randomBackEl.forEach(span => {

    // 20 => Click On Every List Items
    span.addEventListener("click", (e) => {

    // 63 => Add HandelActive
    handleActive(e);

        if (e.target.dataset.background === "yes") {

            backgroundOption = true;
            randomizeImgs();
            // 27 =>
            localStorage.setItem("background_option", true);

        } else {

            backgroundOption = false;
            clearInterval(backgroundInterval);
            // 28 =>
            localStorage.setItem("background_option", false);
        }
    });

});




// 1 => Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// 2 => Get Array Of Imgs
let imgsArray = ["1.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"]


// 23 => Function To Randomize Image
function randomizeImgs() {
    if (backgroundOption === true) {

        backgroundInterval = setInterval(() => {

            // 3 => Get Random Number
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            
            // 4=> Change Background Image Url
            landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
        
        }, 10000);

    };
};

randomizeImgs();

// 30 => Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

  // 31 => Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;

  // 32 => Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;

  // 33 => Window Height
    let windowHeight = this.innerHeight;

  // 34 => Window ScrollTop
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach(skill => {

        skill.style.width = skill.dataset.progress;

    });

    }

};

// 35 => Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {

        // 36 => Create Overlay Element
        let overlay = document.createElement("div");

        // 37 => Add Class To Overlay
        overlay.className = 'popup-overlay';

        // 38 => Append Overlay To The Body
        document.body.appendChild(overlay);

        // 39 => Create The Popup Box 
        let popupBox = document.createElement("div");

        // 40 => Add Class To The Popup Box
        popupBox.className = 'popup-box';

        if (img.alt !== null) {

            // 45 => Create Heading
            let imgHeading = document.createElement("h3");

            // 46 => Create Text For Heading
            let imgText = document.createTextNode(img.alt);

            // 47 => Append The Text To The Heading
            imgHeading.appendChild(imgText);

            //48 => Append The Heading To The Popup Box
            popupBox.appendChild(imgHeading);

        }

        // 41 => Create The Image
        let popupImage = document.createElement("img");

        // 42 => Set Image Source 
        popupImage.src = img.src;

        // 43 => Add Image To Popup Box 
        popupBox.appendChild(popupImage);

        // 44 => Add Image To Popup Box To Body

        document.body.appendChild(popupBox);

        // 49 => Create The Close Span
        let closeButton = document.createElement("span");

        // 50 => Create The Close Button Text
        let closeButtonText = document.createTextNode("X");

        // 51 => Append Text To Close Button
        closeButton.appendChild(closeButtonText);

        // 52 => Add Class To Close Button
        closeButton.className = 'close-button';

        // 53 => Add Close Button To The Popup Box
        popupBox.appendChild(closeButton);

    });
});

// 54 => Close Popup
document.addEventListener("click", function (e) {

    if (e.target.className == 'close-button') {

        // 55 => Remove The Current Popup
        e.target.parentNode.remove();

        // 56 => Remove Overlay
        document.querySelector(".popup-overlay").remove();

    }

});

// 57 => Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// 58 => Select All Links
const allLinks = document.querySelectorAll(".links a");

function scrollToSomewhere(elements) {

    elements.forEach(ele => {

        ele.addEventListener("click", (e) => {

        e.preventDefault();

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: 'smooth'

        });

        });

    });

};

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);

// 59 => Handle Active State
function handleActive(ev) {

    // 60 => Remove Active Class From All Childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {

    element.classList.remove("active");

    });

    // 61 => Add Active Class On Self
    ev.target.classList.add("active");

};

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {

    bulletsSpan.forEach(span => {

    span.classList.remove("active");

});

    if (bulletLocalItem === 'block') {

    bulletsContainer.style.display = 'block';

    document.querySelector(".bullets-option .yes").classList.add("active");

    } else {

    bulletsContainer.style.display = 'none';

    document.querySelector(".bullets-option .no").classList.add("active");

    }

}

bulletsSpan.forEach(span => {

    span.addEventListener("click", (e) => {

        if (span.dataset.display === 'show') {

        bulletsContainer.style.display = 'block';

        localStorage.setItem("bullets_option", 'block');

        } else {

        bulletsContainer.style.display = 'none';

        localStorage.setItem("bullets_option", 'none');

    }

    handleActive(e);

    });

});

// Reset Button
document.querySelector(".reset-options").onclick = function () {

  // localStorage.clear();
    localStorage.removeItem("color_option");
    localStorage.removeItem("background_option");
    localStorage.removeItem("bullets_option");

    // Reload Window
    window.location.reload();

};

// Toggle Menu 
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

    // Stop Propagation
    e.stopPropagation();

  // Toggle Class "menu-active" On Button
    this.classList.toggle("menu-active");

  // Toggle Class "open" On Links
    tLinks.classList.toggle("open");

};

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {

    if (e.target !== toggleBtn && e.target !== tLinks) {

        // Check If Menu Is Open
        if (tLinks.classList.contains("open")) {

        // Toggle Class "menu-active" On Button
        toggleBtn.classList.toggle("menu-active");

        // Toggle Class "open" On Links
        tLinks.classList.toggle("open");

        }

    }

});

// Stop Propagation On Menu 
tLinks.onclick = function (e) {
    e.stopPropagation();
}






