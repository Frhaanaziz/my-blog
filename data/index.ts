export const navbarData = {
  homeTitle: 'Farhan\'s Blog',
}

export const footerData = {
  author: 'Farhan Aziz Ath Thariq',
  aboutAuthor: 'Hi! I am Farhan, a Tech enthusiast and a problem solver',
  authorInterest: 'I have a fair amount of knowledge of Javascript, Typescript, VueJs, Nuxt, React, and Next.js. If you have an interesting idea, either open source or paid let\'s connect.',
  aboutTheSite: 'This is a personal blog site built with Nuxt3, TailwindCSS, NuxtContent, Nuxt Icon. Currently it\'s deployed in Vercel.',
}

export const homePage = {
  title: 'Welcome To My Blog Site',
  description: 'Get Web Development, Javascript, Typescript, NodeJs, Vue, Nuxt, React, Next.js, Related Articles, Tips, Learning resources and more.',
}

export const blogsPage = {
  title: 'All Blogs',
  description: 'Here you will find all the blog posts I have written & published on this site.',
}

export const categoryPage = {
  title: 'Categories',
  description: 'Blow this category is generated from all the tags are mentioned in the different blog post',
}

export const aboutPage = {
  title: 'Farhan Aziz Ath Thariq',
  description: 'Problem Solver and Web Enthusiast.',
  aboutMe: 'Hello, fellow human! I\'m a software wizard who spends most of his day crafting code spells. When I\'m not crafting code, you can find me summoning solutions to problems on online judges. Just don\'t ask me to cast any love spells, my magic only works on machines!',
}

export const seoData = {
  description: 'Farhan, 2.5+ years experience in software development.',
  ogTitle: 'Farhan codes and helps others learn Javascript, Typescript, Vue, Nuxt, React, Next.js & Problem Solving',
  twitterDescription: 'My blog website, where I play around with Nuxt, Vue, React, Next.js and more and showcase my blog, resources, etc',
  image: 'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp',
  mySite: 'https://blog.aththariq.com',
  twitterHandle: '@frhaanthariq',
  mailAddress: 'farhan@aththariq.com',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
