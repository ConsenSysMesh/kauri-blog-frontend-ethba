/* tslint:disable */
//  This file was automatically generated and should not be edited.

export enum DirectionInput {
  ASC = "ASC",
  DESC = "DESC",
}


export interface BlogPostFilterInput {
  user_id_eq?: string | null,
  userId?: string | null,
  date_created_gt?: string | null,
  status_in?: Array< StatusInput | null > | null,
  date_updated_lt?: string | null,
  title_ct?: string | null,
  date_created_lt?: string | null,
  full_text?: string | null,
  dateUpdatedGreaterThan?: string | null,
  text_ct?: string | null,
};

export enum StatusInput {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
}


export enum Status {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
}


export interface searchBlogPostQueryVariables {
  page?: number | null,
  size?: number | null,
  dir?: DirectionInput | null,
  filter?: BlogPostFilterInput | null,
};

export interface searchBlogPostQuery {
  searchBlogPost:  {
    __typename: "Page_BlogPost",
    content:  Array< {
      __typename: "BlogPost",
      id: string | null,
      title: string | null,
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

export interface savePostMutationVariables {
  user?: string | null,
  title?: string | null,
  content?: string | null,
};

export interface savePostMutation {
  savePost:  {
    __typename: "BlogPost",
    id: string | null,
    user: string | null,
    title: string | null,
    content: string | null,
    totalTip: number | null,
    status: Status | null,
    contentHash: string | null,
    dateCreated: string | null,
    dateUpdated: string | null,
  } | null,
};
