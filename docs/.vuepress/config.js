module.exports = {
  base: "/vue4noobs/",
  title: "Vue4noobs pela He4rt Developers",
  theme: "yuu",
  description: "Vue.js",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: 'google-site-verification', content: 'bmr3QFy052qbYVYRSuLrZrIpJPgIoLv2kIOXfdkwtkk' }],
  ],
  themeConfig: {
    yuu: {
      defaultDarkTheme: true,
      defaultColorTheme: "purple",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Tutorial", link: "/tutorial/1-Iniciando%20com%20Vue/0-Antes%20de%20começar.html" },
      { text: "He4rt", link: "https://twitter.com/He4rtDevs" }
    ],
  }
};
