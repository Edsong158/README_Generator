// generateMarkdown.js

const generateMarkdown = (data) => {
  const markdownContent = `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions or concerns, please contact ${data.username} via [GitHub](https://github.com/${data.username}) or email at ${data.email}.
`;

  return markdownContent;
};

export default generateMarkdown;
