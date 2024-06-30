// Function to toggle the "active" class on an element
export const toggleClass = (elem: HTMLElement) => {
  elem.classList.toggle("active");
};

// Function to initialize custom select dropdowns
export const initializeCustomSelect = (filterFunc: (selectedValue: string) => void) => {
  const select: HTMLElement | null = document.querySelector("[data-select]");
  const selectItems: NodeListOf<HTMLElement> = document.querySelectorAll("[data-select-item]");
  const selectValue: HTMLElement | null = document.querySelector("[data-select-value]");

  if (select) {
    select.addEventListener("click", function () {
      toggleClass(this);
    });
  }

  // Add event in all select items
  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {
      const selectedValue: string = this.innerText.toLowerCase();
      if (selectValue) {
        selectValue.innerText = this.innerText;
      }
      if (select) {
        toggleClass(select);
      }
      filterFunc(selectedValue);
    });
  }
};

// Function to filter items based on the selected category
export const filterItemsByCategory = (selectedValue: string) => {
  const filterItems: NodeListOf<HTMLElement> = document.querySelectorAll("[data-filter-item]");
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};
