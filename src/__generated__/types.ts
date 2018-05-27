/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface searchBlogPostQuery {
  searchBlogPost:  {
    __typename: "Page_BlogPost",
    content:  Array< {
      __typename: "BlogPost",
      id: string | null,
    } | null > | null,
  } | null,
};

export interface createBlogMutationVariables {
  user?: string | null,
  name?: string | null,
};

export interface createBlogMutation {
  createBlog:  {
    __typename: "Blog",
    user: string | null,
    name: string | null,
    tipAmount: number | null,
  } | null,
};
