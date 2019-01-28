const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo 
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let nav = document.querySelector('nav');

let navA = document.querySelectorAll('a');
navA[0].textContent= siteContent["nav"]["nav-item-1"];
navA[1].textContent= siteContent["nav"]["nav-item-2"];
navA[2].textContent= siteContent["nav"]["nav-item-3"];
navA[3].textContent= siteContent["nav"]["nav-item-4"];
navA[4].textContent= siteContent["nav"]["nav-item-5"];
navA[5].textContent= siteContent["nav"]["nav-item-6"];

navA[0].style.color= 'green';
navA[1].style.color= 'green';
navA[2].style.color= 'green';
navA[3].style.color= 'green';
navA[4].style.color= 'green';
navA[5].style.color= 'green';

var home = document.createElement("a");
home.innerText = "Home"
home.href = '#';
home.style.color='green';
var blog = document.createElement("a");
blog.innerText = "Blog";
blog.href='#';
blog.style.color = 'green';

nav.prepend(home);
nav.appendChild(blog);

let h1Selector = document.querySelector('.cta h1');
h1Selector.textContent = siteContent ["cta"]["h1"];

let buttonSelector = document.querySelector('.cta button');
buttonSelector.textContent = siteContent["cta"]["button"];

const img1 = document.getElementById('cta-img');
img1.setAttribute('src', siteContent["cta"]["img-src"]);

//Main
const headingFourMain = document.querySelectorAll('div.text-content > h4')
headingFourMain[0].textContent= siteContent["main-content"]["features-h4"];
headingFourMain[1].textContent= siteContent["main-content"]["about-h4"];
headingFourMain[2].textContent= siteContent["main-content"]["services-h4"];
headingFourMain[3].textContent= siteContent["main-content"]["product-h4"];
headingFourMain[4].textContent= siteContent["main-content"]["vision-h4"];

const mainImage = document.getElementById('middle-img');
mainImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const pMain = document.querySelectorAll('div.text-content > p');
console.log(pMain);
pMain[0].textContent= siteContent["main-content"]["features-content"];
pMain[1].textContent= siteContent["main-content"]["about-content"];
pMain[2].textContent= siteContent["main-content"]["services-content"];
pMain[3].textContent= siteContent["main-content"]["product-content"];
pMain[4].textContent= siteContent["main-content"]["vision-content"];

//contact section

// let footer = document.querySelector('section.contact h4');

// footer.innerHTML = siteContent.contact['contact-h4']

// let contactInfo = document.querySelectorAll('section.contact > p')

// contactInfo[0].innerHTML = siteContent.contact.address;
// contactInfo[1].innerHTML = siteContent.contact.phone;
// contactInfo[2].innerHTML = siteContent.contact.email;


// Footer section

document.querySelector("footer p").innerHTML = siteContent.footer.copyright;

//Contact Section
let contactHeading = document.querySelector('section.contact h4');
contactHeading.textContent = siteContent.contact['contact-h4'];

let contactInfo = document.querySelectorAll('section.contact > p');
contactInfo[0].innerHTML = siteContent.contact.address;
contactInfo[1].innerHTML = siteContent.contact.phone;
contactInfo[2].innerHTML = siteContent.contact.email;





// let footerNav = document.querySelector("footer");
// footerNav.textContent = siteContent["footer"]["copyright"];








