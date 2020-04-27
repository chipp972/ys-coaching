/* eslint-env node */
/* eslint-disable @typescript-eslint/camelcase, fp/no-mutation */

module.exports = {
  siteMetadata: {
    title: 'Ys coaching',
    description: 'Online and in-person strenght and conditioning',
    routes: [
      { name: 'Home', to: '/' },
      { name: 'About', to: '/about' },
      { name: 'Coaching', to: '/products' },
      { name: 'Contact', to: '/contact' }
      // { name: 'FAQ', to: '/contact/examples' },
      // { name: 'Blog', to: '/blog' }
    ],
    instagramUrl: 'https://www.instagram.com/ys_coaching_0929/',
    youtubeUrl: 'https://www.youtube.com/channel/UC4rp5GtHU39mmc_9AMcR2YA/featured'
  },
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Y's coaching",
        short_name: "Y's coaching",
        description: 'Online and in-person strenght and conditioning',
        start_url: '/',
        background_color: '#121212',
        theme_color: '#c0c0c0',
        display: 'standalone',
        icon: 'static/img/favicon-512x512.png'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/cms`,
        name: 'cms'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static'
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      // purges all unused/unreferenced css rules
      // must be after other CSS plugins
      resolve: 'gatsby-plugin-purgecss',
      options: {
        // Activates purging in npm run develop
        develop: true,
        // applies purging only on the bulma css file
        purgeOnly: ['/all.sass']
      }
    },
    {
      resolve: 'gatsby-plugin-react-redux',
      options: {
        pathToCreateStoreModule: './src/store/create-store',
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false
        },
        cleanupOnClient: true,
        windowKey: '__PRELOADED_STATE__'
      }
    },
    // make sure to keep gatby-plugin-netlify last in the array
    'gatsby-plugin-netlify'
  ]
};
