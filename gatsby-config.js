module.exports = {
	/* Your site config here */

	siteMetadata: {
		title: `Saketh Pabolu`,
		author: `Saketh`,
		siteUrl: `https://www.sakethpabolu.com`,
		description: `Hello! I am Saketh 👋🏼. I am a high school senior, and currently the founder of CodeBetas. I’ve previously interned at Chandler PD, created the website for YACU.org, and won Best-in-Show at CodeDay hackathon twice! I'm the co-founder of Arizona YACU chapter, engaging in politics and promoting bipartisanship. Lover of 🚘, 🐕, 📷, 👨🏼‍💻, 🌮 and 🥗. Lifelong personal finance nerd 💵 and an early investor in the S&amp;P 500 📈. I depend on the Internet. I strive to live with intention &amp; act with compassion. I can juggle 🤹🏼‍♂️! My career goal is to attain the "4-Hour Workweek." Until then—in my free time—I enjoy 🚵🏼‍♂️, 🧗🏼‍♂️, reading 📚, playing 🎹, and exploring exciting technology.`
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