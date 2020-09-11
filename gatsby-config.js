module.exports = {
	/* Your site config here */

	siteMetadata: {
		title: `Saketh Pabolu`,
		author: `Saketh`,
		siteUrl: `https://www.sakethpabolu.com`,
		description: `Hey! I am Saketh, and I'm a high school senior.`
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
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-remark`,
		`gatsby-plugin-feed`
	]
}
