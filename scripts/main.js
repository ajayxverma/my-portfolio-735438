"use-scrict";
const companyName = document
  .getElementsByClassName("experience-name-container")[0]
  .getElementsByTagName("li");
const companyRAndR = document.getElementsByClassName(
  "roles-responsiblity-container"
);

let activeItem = null;
let intitalCompanyName = companyName[0];
intitalCompanyName.classList.add("company-name-active");
activeItem = intitalCompanyName;

const firstCompanyInfo = intitalCompanyName.dataset.item;
if (firstCompanyInfo) {
  const setCompany = document.getElementById(`${firstCompanyInfo}-details`);
  setCompany.style.display = "block";
}
for (let i = 0; i < companyName.length; i++) {
  const company = companyName[i];
  company.addEventListener("click", () => {
    /* set The Active Item */
    if (activeItem) {
      const x = activeItem.classList.remove("company-name-active");
    }

    /* Hide the Active Element */
    if (activeItem) {
      const activeCompany = activeItem.dataset.item;
      const setActiveCompany = document.getElementById(
        `${activeCompany}-details`
      );
      setActiveCompany.style.display = "none";
      console.log(`activeCompany`, activeCompany);
    }

    /*  */
    const companyNameId = company.dataset.item;
    company.classList.add("company-name-active");
    activeItem = company;

    const setActiveCompany = document.getElementById(
      `${companyNameId}-details`
    );
    if (setActiveCompany) {
      setActiveCompany.style.display = "block";
    }
  });

  const act = company.dataset.activeItem;
}

/* Code for Mobile Nav */

const sideBarContainer = document.querySelector(".nav-menu-container-mv");
const mainContent = document.getElementsByClassName("main-content-blur");
console.log(`maincontent`,mainContent)
/* Mobile Hanburger Menu toggle */
const hamburger = document.querySelector(".hamburger");

// Function to toggle the "active" class
function toggleHamburger() {
  hamburger.classList.toggle("active");
  if (
    sideBarContainer.style.display === "none" ||
    sideBarContainer.style.display === ""
  ) {
    setTimeout(() => {
      sideBarContainer.style.display = "flex";
      mainContent.classList.add("active");
    }, 1);
  } else {
    sideBarContainer.style.display = "none";
  }
}

// Add a click event listener to toggle the icon
hamburger.addEventListener("click", toggleHamburger);
