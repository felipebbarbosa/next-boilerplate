const path = require('path')

module.exports = (plop) => {
  // create your generators here
  plop.setGenerator('component', {
    description: 'create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name please?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{ pascalCase name }}/index.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{ pascalCase name }}/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{ pascalCase name }}/test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  })
}
