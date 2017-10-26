const fs = require('fs');

function compile(componentName, filePath) {
  const story =
  `import { storiesOf } from '@storybook/react';\nimport ${componentName} from '${filePath}';
  \nstoriesOf('${componentName}', module).add('dev', () => <${componentName}>${componentName}</${componentName}>);`

  const storyPath = `stories/index.js`
  console.log('Generating story...');
  fs.writeFileSync(storyPath, story);
}

module.exports = compile;
