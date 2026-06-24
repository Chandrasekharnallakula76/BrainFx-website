(function () {
  function getCurrentPage() {
    return (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  }

  function getActiveClass(currentPage, pages) {
    return pages.indexOf(currentPage) !== -1 ? " active" : "";
  }

  function renderSharedDesktopNav() {
    const navPagesLinks = document.querySelector(".nav-pages-links");

    if (!navPagesLinks || navPagesLinks.dataset.sharedNavRendered === "true") {
      return;
    }

    const currentPage = getCurrentPage();
    const scienceActive = getActiveClass(currentPage, [
      "index.html",
      "science-of-neurofunction.html",
      "scientific-validation.html",
    ]);
    const providerActive = getActiveClass(currentPage, [
      "providers.html",
      "physicians.html",
      "rehabilitation-acute.html",
      "senior-care.html",
      "employers.html",
      "athletics.html",
    ]);
    const assessmentActive = getActiveClass(currentPage, [
      "assessments-training.html",
      "comprehensive.html",
      "screen-track.html",
      "telehealth.html",
      "brainfx-training.html",
      "brainfx-philosophy.html",
      "assessmentbundle.html",
      "assessmentbundlenew.html",
    ]);
    const pricingActive = getActiveClass(currentPage, [
      "pricing.html",
      "pricing-contct.html",
    ]);

    navPagesLinks.innerHTML = `
      <div class="nav-links">
        <div class="nav-link-wrapper">
          <a href="#">
            <span class="nav-link science${scienceActive}">
              <i class="fa-solid fa-flask"></i> Science
            </span>
          </a>
          <div class="dropdown science-dropdown">
            <div class="arrow"></div>
            <div class="science-cards">
              <a href="science-of-neurofunction.html">
                <div class="science-card">
                  <div class="image-container">
                    <i class="fa-solid fa-brain"></i>
                  </div>
                  <div class="card-text-main">
                    <h3>The Science Behind BrainFx</h3>
                    <p>Explore the research foundation behind the BrainFx approach to brain health and function.</p>
                  </div>
                </div>
              </a>
              <a href="scientific-validation.html">
                <div class="science-card">
                  <div class="image-container">
                    <i class="fa-solid fa-vials"></i>
                  </div>
                  <div class="card-text-main">
                    <h3>Scientific Validation</h3>
                    <p>Review the evidence supporting BrainFx accuracy, reliability, and clinical value.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="nav-link-wrapper">
          <a href="providers.html">
            <span class="nav-link provider${providerActive}">
              <i class="fa-brands fa-product-hunt"></i> Provider
            </span>
          </a>
          <div class="dropdown provider-dropdown">
            <div class="arrow"></div>
            <div class="provider-cards">
              <a href="physicians.html">
                <div class="provider-card">
                  <div class="image-container">
                    <i class="fa-solid fa-user-doctor"></i>
                  </div>
                  <div class="card-text-main">
                    <h3>Physicians</h3>
                    <p>Physicians carefully diagnose and effectively treat health conditions.</p>
                  </div>
                </div>
              </a>
              <a href="rehabilitation-acute.html">
                <div class="provider-card">
                  <div class="image-container">
                    <i class="fa-solid fa-house-medical"></i>
                  </div>
                  <div class="card-text-main">
                    <h3>Rehabilitation & Acute</h3>
                    <p>Rehabilitation and acute care focus on enhancing patient recovery.</p>
                  </div>
                </div>
              </a>
              <a href="senior-care.html">
                <div class="provider-card">
                  <div class="image-container">
                    <i class="fa-solid fa-hand-holding-heart"></i>
                  </div>
                  <div class="card-text-main">
                    <h3>Senior Care</h3>
                    <p>Senior care supports comfort, safety, and well-being for older adults.</p>
                  </div>
                </div>
              </a>
              <a href="employers.html">
                <div class="provider-card">
                  <div class="image-container">
                    <i class="fa-solid fa-user-tie"></i>
                  </div>
                  <div class="card-text-main">
                    <h3>Employers</h3>
                    <p>Employers benefit from practical cognitive insights that support workforce health.</p>
                  </div>
                </div>
              </a>
              <a href="athletics.html">
                <div class="provider-card">
                  <div class="image-container">
                    <i class="fa-solid fa-person-running"></i>
                  </div>
                  <div class="card-text-main">
                    <h3>Athletics</h3>
                    <p>Athletics programs can use BrainFx to support performance and recovery decisions.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="nav-link-wrapper">
          <a href="assessments-training.html">
            <span class="nav-link assessment${assessmentActive}">
              <i class="fas fa-chalkboard-teacher"></i> Assessments
            </span>
          </a>
          <div class="dropdown assessment-dropdown">
            <div class="arrow"></div>
            <div class="assessment-cards">
              <a href="comprehensive.html">
                <div class="assessment-card">
                  <div class="image-container">
                    <i class="fa-solid fa-globe"></i>
                  </div>
                  <div class="card-text-main">
                    <h3>360</h3>
                    <p>BrainFx 360 offers a broader connected view of neurofunction and performance.</p>
                  </div>
                </div>
              </a>
              <a href="screen-track.html">
                <div class="assessment-card">
                  <div class="image-container">
                    <i class="fa-solid fa-desktop"></i>
                  </div>
                  <div class="card-text-main">
                    <h3>Screen</h3>
                    <p>BrainFx SCREEN supports fast cognitive screening for focused clinical review.</p>
                  </div>
                </div>
              </a>
              <a href="telehealth.html">
                <div class="assessment-card">
                  <div class="image-container">
                    <i class="fa-solid fa-chart-column"></i>
                  </div>
                  <div class="card-text-main">
                    <h3>VCA</h3>
                    <p>BrainFx VCA presents visual cognitive insights in a compact and practical format.</p>
                  </div>
                </div>
              </a>
              <a href="brainfx-training.html">
                <div class="assessment-card">
                  <div class="image-container">
                    <i class="fa-solid fa-graduation-cap"></i>
                  </div>
                  <div class="card-text-main">
                    <h3>Training</h3>
                    <p>BrainFx training supports learning, certification, and confident assessment delivery.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <a href="pricing.html">
          <span class="nav-link${pricingActive}">
            <i class="fas fa-tags"></i> Pricing
          </span>
        </a>
      </div>
      <div class="nav-cta-group">
        <div class="btn-nav-wrap btn-nav-demo">
          <div aria-hidden="true" class="btn-label">
            <div class="btn-label-txt">Request a Demo</div>
          </div>
          <div class="btn-clickabe">
            <a href="request-a-demo.html" class="btn-link w-inline-block">
              <span class="screen-reader-only">Request a Demo</span>
            </a>
          </div>
        </div>
        <div class="btn-nav-wrap">
          <div aria-hidden="true" class="btn-label">
            <div class="btn-label-txt">Login</div>
          </div>
          <div class="btn-clickabe">
            <a href="login.html" class="btn-link w-inline-block">
              <span class="screen-reader-only">Login</span>
            </a>
          </div>
        </div>
      </div>
    `;

    navPagesLinks.dataset.sharedNavRendered = "true";
  }

  function closeAllDropdowns(exceptWrapper) {
    document.querySelectorAll(".nav-link-wrapper").forEach(function (wrapper) {
      if (exceptWrapper && wrapper === exceptWrapper) {
        return;
      }

      const link = wrapper.querySelector(".nav-link");
      const dropdown = wrapper.querySelector(".dropdown");

      if (!link || !dropdown) {
        return;
      }

      link.style.backgroundColor = "";
      link.style.borderBottom = "2px solid transparent";
      link.style.color = "";
      link.style.borderRadius = "";
      dropdown.style.display = "none";
    });
  }

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

      closeAllDropdowns(wrapper);
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
      }, 90);
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
    const currentPage = getCurrentPage();
    const navPagesLinks = document.querySelector(".nav-pages-links");

    if (navPagesLinks && navPagesLinks.dataset.sharedNavRendered === "true") {
      return;
    }

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

  renderSharedDesktopNav();
  setupDropdownHover(".nav-link.provider", ".provider-dropdown");
  setupDropdownHover(".nav-link.assessment", ".assessment-dropdown");
  setupDropdownHover(".nav-link.research", ".research-dropdown");
  setupDropdownHover(".nav-link.science", ".science-dropdown");
  setupMobileMenu();
  setActiveNavLink();
})();
