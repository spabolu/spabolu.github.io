/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */

	siteMetadata: {
		title: `Saketh Pabolu`,
		author: `Saketh Pabolu`,
		siteURL: `https://www.sakethpabolu.com`,
		description: `Hey! I am Saketh, and I'm a high school senior`,
	},

	plugins: [
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/src/posts/`
			}
		},
		`gatsby-transformer-remark`
	]
}
