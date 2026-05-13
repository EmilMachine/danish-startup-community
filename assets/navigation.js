// Left sidebar navigation - loaded on all pages
(function() {
  const navHTML = `
    <nav class="left-nav">
      <div class="nav-header">
        <a href="index.html" class="nav-home-link">Danish Startup Community</a>
      </div>

      <div class="nav-section">
        <a href="before-company.html" class="nav-main-link">Before Company</a>
        <div class="nav-subsections">
          <a href="before-company.html#b-skat" class="nav-sub-link">B-Skat</a>
          <a href="before-company.html#sole-proprietorship" class="nav-sub-link">Sole Proprietorship</a>
          <a href="before-company.html#thresholds" class="nav-sub-link">Thresholds</a>
          <a href="before-company.html#when-to-incorporate" class="nav-sub-link">When to Incorporate</a>
        </div>
      </div>

      <div class="nav-section">
        <a href="legal-setup.html" class="nav-main-link">Legal Setup</a>
        <div class="nav-subsections">
          <a href="legal-setup.html#company-types" class="nav-sub-link">Company Types</a>
          <a href="legal-setup.html#registration" class="nav-sub-link">Registration</a>
          <a href="legal-setup.html#foreign-founders" class="nav-sub-link">Foreign Founders</a>
        </div>
      </div>

      <div class="nav-section">
        <a href="funding.html" class="nav-main-link">Funding</a>
        <div class="nav-subsections">
          <a href="funding.html#public-grants" class="nav-sub-link">Public Grants</a>
          <a href="funding.html#vcs" class="nav-sub-link">Venture Capital</a>
          <a href="funding.html#angels" class="nav-sub-link">Angel Investors</a>
          <a href="funding.html#accelerators" class="nav-sub-link">Accelerators</a>
        </div>
      </div>

      <div class="nav-section">
        <a href="hiring.html" class="nav-main-link">Hiring</a>
        <div class="nav-subsections">
          <a href="hiring.html#employment-types" class="nav-sub-link">Employment Types</a>
          <a href="hiring.html#employment-law" class="nav-sub-link">Employment Law</a>
          <a href="hiring.html#equity" class="nav-sub-link">Equity & Options</a>
          <a href="hiring.html#foreign-hires" class="nav-sub-link">Visas</a>
        </div>
      </div>

      <div class="nav-section">
        <a href="operations.html" class="nav-main-link">Operations</a>
        <div class="nav-subsections">
          <a href="operations.html#tax-skat" class="nav-sub-link">Tax & SKAT</a>
          <a href="operations.html#accounting" class="nav-sub-link">Accounting</a>
          <a href="operations.html#vat" class="nav-sub-link">VAT (Moms)</a>
          <a href="operations.html#payroll" class="nav-sub-link">Payroll</a>
        </div>
      </div>

      <div class="nav-section">
        <a href="providers.html" class="nav-main-link">Service Providers</a>
        <div class="nav-subsections">
          <a href="providers.html#lawyers" class="nav-sub-link">Lawyers</a>
          <a href="providers.html#accountants" class="nav-sub-link">Accountants</a>
          <a href="providers.html#banking" class="nav-sub-link">Banking</a>
          <a href="providers.html#other-services" class="nav-sub-link">Other Services</a>
        </div>
      </div>

      <div class="nav-section">
        <a href="community.html" class="nav-main-link">Community</a>
        <div class="nav-subsections">
          <a href="community.html#events" class="nav-sub-link">Events</a>
          <a href="community.html#meetups" class="nav-sub-link">Meetups</a>
          <a href="community.html#online" class="nav-sub-link">Online Communities</a>
        </div>
      </div>

      <div class="nav-section">
        <a href="faq.html" class="nav-main-link">FAQ</a>
      </div>
    </nav>
  `;

  document.addEventListener('DOMContentLoaded', function() {
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Add click handlers for collapsible sections
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navSections = document.querySelectorAll('.nav-section');

    navSections.forEach(section => {
      const mainLink = section.querySelector('.nav-main-link');
      const subsections = section.querySelector('.nav-subsections');

      if (subsections) {
        mainLink.addEventListener('click', function(e) {
          // Only prevent default if clicking to toggle, not if navigating
          const isCurrentPage = currentPage === mainLink.getAttribute('href');
          if (isCurrentPage) {
            e.preventDefault();
          }
          section.classList.toggle('expanded');
        });

        // Auto-expand and highlight if on current page
        if (mainLink.getAttribute('href') === currentPage) {
          section.classList.add('expanded');
          mainLink.classList.add('active');
        }
      } else {
        // For sections without subsections (like FAQ)
        if (mainLink.getAttribute('href') === currentPage) {
          mainLink.classList.add('active');
        }
      }
    });
  });
})();
