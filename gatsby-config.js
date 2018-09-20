module.exports = {
  siteMetadata: {
    title: 'MRI Application Platform',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'mri-application-platform',
        short_name: 'MRI',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // icon: 'src/images/mri.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    // 'gatsby-plugin-preact',
    // {
    //   resolve: {
    //     alias: {
    //       react: 'preact-compat',
    //       'react-dom': 'preact-compat',
    //       // Not necessary unless you consume a module using `createClass`
    //       'create-react-class': 'preact-compat/lib/create-react-class',
    //       // Not necessary unless you consume a module requiring `react-dom-factories`
    //       'react-dom-factories': 'preact-compat/lib/react-dom-factories',
    //     },
    //   },
    // },
  ],
}
