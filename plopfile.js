module.exports = plop => {
    plop.setGenerator('component', {
        description: 'create a new component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'new component name',
                default: 'MyComponent'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'packages/{{name}}/src/{{name}}.vue',
                templateFile: 'template/component/src/component.hbs'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/__tests__/{{name}}.test.js',
                templateFile: 'template/component/__tests__/component.test.hbs'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/src/{{name}}.vue',
                templateFile: 'template/component/src/component.hbs'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/index.js',
                templateFile: 'template/component/index.hbs'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/LiCENSE',
                templateFile: 'template/component/LiCENSE'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/src/{{name}}.vue',
                templateFile: 'template/component/src/component.hbs'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/package.js',
                templateFile: 'template/component/package.hbs'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/README.md',
                templateFile: 'template/component/README.hbs'
            }
        ]
    })
}