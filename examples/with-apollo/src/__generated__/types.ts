/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface AllFilmsQuery {
  allFilms:  {
    __typename: "FilmsConnection",
    // A list of all of the objects returned in the connection. This is a convenience
    // field provided for quickly exploring the API; rather than querying for
    // "{ edges { node } }" when no edge data is needed, this field can be be used
    // instead. Note that when clients like Relay need to fetch the "cursor" field on
    // the edge to enable efficient pagination, this shortcut cannot be used, and the
    // full "{ edges { node } }" version should be used instead.
    films:  Array< {
      __typename: "Film",
      // The ID of an object
      id: string,
      // The title of this film.
      title: string | null,
    } | null > | null,
  } | null,
};
