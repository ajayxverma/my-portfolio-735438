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

const sideBarContainer = document.getElementsByClassName(
  "nav-menu-container-mv"
);
const hamButton = document.getElementsByClassName("ham-icon-style");
console.log(sideBarContainer);
console.log(hamButton)

hamButton.addEventListener("click", () => {
  sideBarContainer.style.display = "none";
});
