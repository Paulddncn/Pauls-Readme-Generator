
function renderLicenseBadge(license) {
  if (answers === 'MIT' || 'Node' || 'Mozilla public license' || 'Apache'|| 'GNU') {
    license = answer
    renderLicenseLink(license)
  } else  {
    return '';
  };
}   

function renderLicenseLink(license) {
  if (license !== null) {
    const link = ('');
    return link;
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
