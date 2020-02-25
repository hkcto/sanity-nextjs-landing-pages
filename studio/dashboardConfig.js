export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5e54dc8712530ef3ba8b8674',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-11dkou1i',
                  apiId: '8b73277e-9fca-40c5-aaec-49d5131985c2'
                },
                {
                  buildHookId: '5e54dc88d404c483cb0b7c59',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7n9ifyfe',
                  apiId: '0f1dc720-7e4a-44e6-990f-9ba379e13999'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hkcto/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7n9ifyfe.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
