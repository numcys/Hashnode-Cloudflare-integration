const {GraphQLClient} = require('graphql-request');

const client = new GraphQLClient('https://gql.hashnode.com'); 

const query = `
  query {
    feed(first: 10, filter: { type: RECENT }) {
      edges {
        node {
          id
          slug
          title
          author {
            name
            username
          }
          coAuthors {
            username
          }
          content {
            markdown
            text
          }
        }
      }
    }
  }
`;

exports.fetchPostsFromHashnode = async () => {
  try {
    const response = await client.request(query);
    const posts = response.feed.edges.map(edge => edge.node);
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error; 
  }
};
