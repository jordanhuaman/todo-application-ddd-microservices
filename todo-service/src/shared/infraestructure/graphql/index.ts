const typedefs = `#graphql
  type book{
    title: String,
    author: String
  }

  type Query {
    testBooks: [book]
  }
`
const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    testBooks: ()=> books,
  }
}

export { typedefs, resolvers }