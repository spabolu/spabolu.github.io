module.exports = {
  siteMetadata: {
    title: `Saketh Pabolu ✨`,
    author: `Saketh Pabolu`,
    siteUrl: `https://sakethpabolu.com`,
    description: ` 👋🏼 Hi, I'm Saketh! I am an undergraduate at ASU studying Computer Science and an incoming intern at SolarSPELL 🌤. Most recently, I worked as a XR Creative Developer for the Learning Futures Collaboratory 🕹. Looking forward to creating an impact in the Python Users Group at ASU as an elected officer 🐍. Recently, I co-created Seemless Authentication app at the AWS Hackathon 👨🏽‍💻. I hustle by always working on side projects and receiving guidance from wonderful mentors. Lover of 🚘, 🐕, 🏓, 📖, 👨🏽‍💻, 🍣 and 🏋🏽‍♂️. Lifelong personal finance nerd and an early investor in the S&P 500 📈. I strive to live with intention & act with ruth. Oh also, I can juggle 🤹🏽‍♂️! `,
  },

  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
