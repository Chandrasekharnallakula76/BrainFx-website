(function () {
  function setupDropdownHover(linkSelector, dropdownSelector) {
    const link = document.querySelector(linkSelector);
    const dropdown = document.querySelector(dropdownSelector);
    const wrapper = link ? link.closest(".nav-link-wrapper") : null;

    if (!wrapper || !link || !dropdown || wrapper.dataset.navbarDropdownBound) {
      return;
    }

    wrapper.dataset.navbarDropdownBound = "true";

    const theme = {
      border: "#1182cf",
      bg: "rgba(17, 130, 207, 0.14)",
      color: "#0b5f95",
    };

    let closeTimer = null;

    function openDropdown() {
      if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
      }

      link.style.backgroundColor = theme.bg;
      link.style.borderBottom = `2px solid ${theme.border}`;
      link.style.color = theme.color;
      link.style.borderRadius = "12px 12px 0px 0px";
      dropdown.style.display = "flex";
    }

    function closeDropdown() {
      link.style.backgroundColor = "";
      link.style.borderBottom = "2px solid transparent";
      link.style.color = "";
      link.style.borderRadius = "";
      dropdown.style.display = "none";
    }

    function scheduleClose() {
      if (closeTimer) {
        clearTimeout(closeTimer);
      }

      closeTimer = setTimeout(function () {
        if (!wrapper.matches(":hover") && !dropdown.matches(":hover")) {
          closeDropdown();
        }
      }, 100);
    }

    wrapper.addEventListener("mouseenter", openDropdown);
    wrapper.addEventListener("mouseleave", scheduleClose);
    dropdown.addEventListener("mouseenter", openDropdown);
    dropdown.addEventListener("mouseleave", scheduleClose);
  }

  function setupMobileMenu() {
    const menuButton = document.querySelector(".menu-btn");
    const navLinksWrap = document.querySelector(".nav-links-wrap");

    if (
      !menuButton ||
      !navLinksWrap ||
      menuButton.dataset.navbarMenuBound ||
      menuButton.hasAttribute("aria-expanded")
    ) {
      return;
    }

    menuButton.dataset.navbarMenuBound = "true";
    menuButton.setAttribute("aria-expanded", "false");

    function closeMobileNav() {
      menuButton.classList.remove("is-open");
      navLinksWrap.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }

    menuButton.addEventListener("click", function () {
      const isOpen = navLinksWrap.classList.toggle("is-open");
      menuButton.classList.toggle("is-open", isOpen);
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    navLinksWrap.addEventListener("click", function (event) {
      if (event.target.closest("a") && window.innerWidth <= 990) {
        closeMobileNav();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 990) {
        closeMobileNav();
      }
    });
  }

  function setActiveNavLink() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-link.active").forEach(function (link) {
      link.classList.remove("active");
    });

    document.querySelectorAll(".nav-pages-links a[href]").forEach(function (anchor) {
      const hrefPage = anchor.getAttribute("href").split("/").pop();

      if (hrefPage.toLowerCase() === currentPage.toLowerCase()) {
        const navLink = anchor.querySelector(".nav-link");

        if (navLink) {
          navLink.classList.add("active");
        }
      }
    });
  }

  window.toggleIcon = window.toggleIcon || function (element) {
    const path = element.querySelector("path");

    if (!path) {
      return;
    }

    const currentD = path.getAttribute("d");

    if (currentD === "M7 9V16H9V9H16V7H9V0H7V7H0V9H7Z") {
      path.setAttribute("d", "M0 7H16V9H0V7Z");
    } else {
      path.setAttribute("d", "M7 9V16H9V9H16V7H9V0H7V7H0V9H7Z");
    }
  };

  setupDropdownHover(".nav-link.provider", ".provider-dropdown");
  setupDropdownHover(".nav-link.assessment", ".assessment-dropdown");
  setupDropdownHover(".nav-link.research", ".research-dropdown");
  setupMobileMenu();
  setActiveNavLink();
})();
