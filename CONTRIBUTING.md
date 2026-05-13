# Contributing to Danish Startup Community

Thank you for helping improve this resource for startup founders in Denmark. This guide explains how to contribute.

## Quick Start

1. Fork the repository on GitHub
2. Clone your fork locally
3. Create a branch for your changes
4. Make your edits
5. Submit a pull request

## Contribution Guidelines

### What to Contribute

**High Priority:**
- Corrections to outdated information
- New official sources and links
- Updated fees, thresholds, or requirements
- Missing grant programs or funding sources
- Additional service providers with verified links

**Welcome Additions:**
- New sections that fill gaps
- Improved clarity or organization
- Verified community resources
- Common FAQ answers

**Not Needed:**
- Long-form prose or blog content
- Personal opinions or anecdotes
- Unverified information
- Marketing content for specific companies
- Duplicate information already covered

### Content Standards

**Accuracy:**
- Verify all information with official sources
- Include links to primary sources (government sites, official portals)
- Cite specific amounts, dates, and requirements
- Mark information with year when time-sensitive (e.g., "2026 threshold: 552,000 DKK")

**Terseness:**
- Use bullet points over paragraphs
- Use tables for structured data
- Keep sentences short and direct
- Remove unnecessary words
- No marketing language or superlatives

**Structure:**
- Follow existing HTML structure and class names
- Use `<table>` for comparisons and structured data
- Use `<ul>` for lists of related items
- Use `<ol>` for sequential steps
- Add internal navigation links for long pages

**Links:**
- Always use `target="_blank"` for external links
- Link directly to English versions when available
- Use official `.dk` government sources when possible
- Verify all URLs before submitting

## Fork and Pull Request Process

### 1. Fork the Repository

On GitHub:
- Click the "Fork" button in the top-right corner
- This creates a copy in your GitHub account

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/danish-startup-community.git
cd danish-startup-community
```

### 3. Create a Branch

```bash
git checkout -b descriptive-branch-name
```

Use branch names like:
- `update-aps-capital-requirements`
- `add-innovation-fund-links`
- `fix-typo-hiring-page`

### 4. Make Your Changes

Edit the HTML files directly. Common tasks:

**Adding a Link:**
```html
<li><a href="https://example.dk" target="_blank">Organization Name</a> - Brief description</li>
```

**Adding to a Table:**
```html
<tr>
  <td>Item Name</td>
  <td>Description or value</td>
</tr>
```

**Adding a New Section:**
```html
<section id="section-name">
  <h2>Section Title</h2>
  <p>Brief introduction.</p>

  <h3>Subsection</h3>
  <ul>
    <li><strong>Point name:</strong> Details</li>
  </ul>
</section>
```

### 5. Test Your Changes

Open the HTML files in your browser:
```bash
open index.html  # macOS
# or just double-click the file
```

Verify:
- All links work and open in new tabs
- Tables render correctly
- Mobile layout looks good (resize browser)
- No typos or formatting issues
- Internal navigation links work

### 6. Commit Your Changes

```bash
git add .
git commit -m "Brief description of changes"
```

Good commit messages:
- `Update ApS minimum capital to 20,000 DKK`
- `Add Innovationsfonden grant programs with links`
- `Fix broken link to SKAT website`

Bad commit messages:
- `Updates`
- `Fixed stuff`
- `Changes to funding page`

### 7. Push to Your Fork

```bash
git push origin descriptive-branch-name
```

### 8. Create Pull Request

On GitHub:
1. Go to your fork
2. Click "Pull request" next to your branch
3. Fill out the PR description:
   - What changed
   - Why it's needed
   - Sources you verified against
4. Submit the pull request

## Pull Request Template

Use this template when creating a PR:

```
## Summary
Brief description of what this PR changes.

## Changes Made
- Added [specific thing]
- Updated [specific thing]
- Fixed [specific thing]

## Sources Verified
- [Link to official source 1]
- [Link to official source 2]

## Testing
- [ ] Tested all links
- [ ] Verified mobile layout
- [ ] Checked for typos
- [ ] Followed existing structure
```

## Specific Guidelines by Section

### Legal Setup
- Verify company registration fees with Virk.dk
- Confirm capital requirements with Danish Business Authority
- Update visa/permit information from nyidanmark.dk
- Include both English and Danish official source links

### Funding
- Add only active funding programs
- Include application deadlines when known
- Specify grant amounts in DKK
- Link to official application portals
- Note co-financing requirements

### Hiring
- Verify salary thresholds annually (they change yearly)
- Confirm work permit requirements with official sources
- Include links to employment law resources
- Use official government rates for employer contributions

### Operations
- Tax rates and thresholds from SKAT
- VAT registration limits from official sources
- Include deadlines for annual filings
- Link to official forms and portals

### Community
- Add links only to official websites or active Meetup groups
- Remove dead or inactive communities
- Include event frequency (monthly, quarterly, etc.)
- Prefer communities with concrete online presence

### Providers
- Include only services with verified websites
- No affiliate links or promotional content
- Organize by category (legal, accounting, banking, etc.)
- Include brief, factual description only

## Style Guide

### HTML Classes to Use

```html
<p class="warning">Important warning or note</p>
<p class="text-small">Supplementary information</p>
<a href="#section" class="back-link">← Back to home</a>
<nav class="internal-nav">...</nav>
```

### Formatting Numbers

- Currency: `20,000 DKK` or `20,000 DKK (~€2,700)`
- Percentages: `35%` or `25-35%`
- Ranges: `5,000-15,000 DKK`
- Dates: `May 2026` or `January 1, 2025`

### Formatting Links

```html
<!-- External link (always use target="_blank") -->
<a href="https://virk.dk" target="_blank">Virk.dk</a>

<!-- Internal link (no target) -->
<a href="funding.html">Funding</a>

<!-- Internal anchor link -->
<a href="#section-id">Section Name</a>
```

## Review Process

After submitting a PR:
1. Maintainers will review within 1-2 weeks
2. They may request changes or ask questions
3. Address feedback by pushing new commits to your branch
4. Once approved, your PR will be merged
5. Your contribution will be live on the site

## Questions or Issues?

- Check existing issues on GitHub
- Create a new issue for questions
- Tag your issue appropriately (bug, enhancement, question)

## Code of Conduct

- Be respectful and constructive
- Focus on improving the resource for all founders
- Provide evidence for factual claims
- No promotional or self-serving content
- Help maintain a welcoming community

## Need Help?

If you're new to Git/GitHub:
- [GitHub's Fork a Repo Guide](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
- [GitHub's Pull Request Guide](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)

Thank you for contributing to make this a better resource for Danish startup founders!
