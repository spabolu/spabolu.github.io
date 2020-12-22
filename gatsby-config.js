module.exports = {
	/* Your site config here */

	siteMetadata: {
		title: `Saketh Pabolu`,
		author: `Saketh`,
		siteUrl: `https://www.sakethpabolu.com`,
		description: `Hello! I am Saketh 👋🏼 I’m a high school senior, and currently the founder of @CodeBetas. I’ve previously interned @ChandlerPD, created @YACU website, and won Best-in-Show at @CodeDay hackathon twice! I am the co-founder of @AzYACU to engage in politics and promote bipartisanship. Lover of 🚘, 🐕, 📷, 💾, 🍕 and 🍟. Lifelong personal finance nerd 💵 and early investor in the S&P 500 📈. I depend on the Internet. I strive to live with intention & act with compassion. I can juggle 🤹🏽‍♂️! My career goal is to attain @FIRE. Until then, in my free time, I enjoy 🚴‍♂‍, playing 🎸 or 🎹, and exploring exciting technology.`
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