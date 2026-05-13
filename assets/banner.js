// Community banner - loaded on all pages
(function() {
  const bannerHTML = `
    <div class="community-banner">
      <img src="assets/logo.jpeg" alt="Logo" class="banner-logo-left">
      <div class="banner-content">
        Join our community: <a href="https://join.slack.com/t/danishstartup-n7q9077/shared_invite/zt-3xeix9gde-GC7hTt8S_JAzOZi0wXwfEQ" target="_blank">
          <img src="assets/slack-icon.png" alt="Slack" class="slack-icon">
          Danish Startup Community Slack
        </a>
      </div>
      <img src="assets/logo.jpeg" alt="Logo" class="banner-logo-right">
    </div>
  `;

  // Insert banner at the beginning of body
  document.addEventListener('DOMContentLoaded', function() {
    document.body.insertAdjacentHTML('afterbegin', bannerHTML);
  });
})();
