import { GraphQLClient, gql } from "graphql-request";

export const options = { year: "numeric", month: "long", day: "numeric" };

export const graphcms = new GraphQLClient(process.env.REACT_APP_API);

const comment = `
  id,
  name,
  comment
`;

const post = `
  id,
  title,
  slug,
  coverPhoto { url },
  content { html },
  datePublished,
  artist,
  label,
  rating,
  year,
  genre,
  category {
    name
    slug
  }
`;

// unused
export const QUERY_SLUG_CATEGORIES = gql`
{
  categories() {
    name,
    slug
  }
}
`;

export const ALBUM_POSTS = gql`
  {
    posts(where: {category: {name: "Albums"}}, orderBy: datePublished_DESC, first: 4) {
      ${post}
    }
  }
`;

export const TRACK_POSTS = gql`
  {
    posts(where: {category: {name: "Tracks"}}, orderBy: datePublished_DESC, first: 4) {
      ${post}
    }
  }
`;

export const CATEGORY_POSTS_ALL = gql`
  query GetPostsByCategory($slug: String!, $limit: Int!, $skip: Int!){
    posts(
      where: {category: {slug: $slug}}, 
      orderBy: datePublished_DESC,
      first: $limit,
      skip: $skip,
    ){
      ${post}
    }

    countConnection: postsConnection(
      where: {category: {slug: $slug}}
      stage: PUBLISHED) 
    {
      aggregate {
        count
      }
    }
  }
`;

export const QUERY_SEARCH = gql`
  query GetPostsByCategory($slug: String!, $limit: Int!, $skip: Int!) {
    posts(
      orderBy: updatedAt_DESC,
      first: $limit,
      skip: $skip,
      where: {_search: $slug, AND: {slug_contains: $slug}},
    ) {
      ${post}
    }

    countConnection: postsConnection(
      where: {_search: $slug, AND: {slug_contains: $slug}},
      stage: PUBLISHED),
    {
      aggregate {
        count
      }
    }
  }
`;

export const QUERY_ONE_POST = gql`
  query GetOnePost($slug: String!, $limit: Int!, $skip: Int!) {
    posts(where: {slug: $slug}) {
      ${post}
      comments(
        orderBy: publishedAt_DESC,
        first: $limit,
        skip: $skip,
        ) {
        ${comment}
      }
    }

    countConnection: commentsConnection(
      stage: PUBLISHED,
      where: {post: {slug: $slug}}
    ) {
      aggregate {
        count
      }
    }
  }
`;
