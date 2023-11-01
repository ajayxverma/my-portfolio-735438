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
const sideBarContainerOl = document.querySelector(".nav-menu-container-mv ol");
const sideBarContainerContent = document.querySelector(
  ".nav-mobile-content-container"
);
const mainContent = document.getElementsByClassName("main-content-blur");
console.log(`maincontent`, mainContent);
/* Mobile Hanburger Menu toggle */
const hamburger = document.querySelector(".hamburger");
sideBarContainerContent.style.display = "none";
sideBarContainer.style.transition = "all 0.4s ease 0s;";
// Function to toggle the "active" class
function toggleHamburger() {
  hamburger.classList.toggle("active");
  if (
    sideBarContainer.style.width === "0px" ||
    sideBarContainer.style.width === ""
  ) {
    sideBarContainer.style.width = "min(85vw, 400px)";
    sideBarContainer.style.transition =
      "all 0.5s cubic-bezier(0.47, 0, 0.74, 0.71) 0s";
    setTimeout(() => {
      if (hamburger.classList.contains("active")) {
        sideBarContainerContent.style.display = "flex";
      }
    }, 300);
  } else {
    setTimeout(() => {
      sideBarContainerContent.style.display = "none";
    }, 300);
    sideBarContainer.style.width = "0px";
  }
}
document.addEventListener("click", (event) => {
  if (
    sideBarContainer.style.width === "min(85vw, 400px)" &&
    sideBarContainerContent.style.display === "flex" &&
    event.target !== sideBarContainer &&
    event.target !== hamburger &&
    event.target !== mainContent &&
    event.target !== sideBarContainerContent &&
    event.target !== sideBarContainerOl
  ) {
    sideBarContainerContent.style.display = "none";
    sideBarContainer.style.width = "0px";
    sideBarContainerContent.style.display === "none";
    hamburger.classList.remove("active");
  }
});
// Add a click event listener to toggle the icon
hamburger.addEventListener("click", toggleHamburger);
