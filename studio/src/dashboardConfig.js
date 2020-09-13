export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f5d435a1fc05da1be032b95',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zdeytics',
                  apiId: '88fbaea9-2267-49dc-956c-d003ca56ebc7'
                },
                {
                  buildHookId: '5f5d435ada13e3d703ccc1a4',
                  title: 'Live site',
                  name: 'sanity-gatsby-blog-web-7jgbwkc9',
                  apiId: '218a5cf4-b05e-493f-8de4-144558aeb957'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/NeversSync/Gong-Fu-Tea-Proto',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7jgbwkc9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
