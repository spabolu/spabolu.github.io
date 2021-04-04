module.exports = {
  siteMetadata: {
    title: `Saketh Pabolu`,
    author: `Saketh`,
    siteUrl: `https://sakethpabolu.com`,
    description: ` Hello! I am Saketh 🙋🏽‍♂️. I am a high school senior, and currently the founder of CodeBetas. I’ve previously interned at Chandler PD, created the website for YACU.org, and won Best-in-Show at CodeDay hackathon twice! I'm the co-founder of Arizona YACU chapter, engaging in politics and promoting bipartisanship. Lover of 🚘, 🐕, 📸, 👨🏽‍💻, 🍣 and 🥗. Lifelong personal finance nerd 💵 and an early investor in the S&amp;P 500 📈. I <i>depend</i> on the Internet. I strive to live with intention &amp; act with solicitude. I can juggle 🤹🏽‍♂️! My career goal is to attain the '4-Hour Workweek.' Until then, in my free time, I enjoy 🚵🏽‍♂️, 🧗🏽‍♂️, reading 📖, and exploring <i>exciting</i> technologies. `,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Saketh Pabolu`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/assets/images/favicon.png`,
      },
    },
  ],
};