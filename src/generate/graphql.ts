/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddCocktailInput = {
  favorite: Scalars['Boolean'];
  howTo: Scalars['String'];
  image: Scalars['String'];
  ingredients: Scalars['String'];
  name: Scalars['String'];
};

export type AddLandingSlideInput = {
  text: Scalars['String'];
  title: Scalars['String'];
};

export type AddReviewInput = {
  postedAbout: Scalars['ID'];
  postedBy: Scalars['ID'];
  text: Scalars['String'];
  title: Scalars['String'];
};

export type AddUserInput = {
  age: Scalars['Int'];
  email: Scalars['String'];
  name: Scalars['String'];
};

export type Cocktail = {
  __typename?: 'Cocktail';
  favorite: Scalars['Boolean'];
  howTo: Scalars['String'];
  id: Scalars['Int'];
  image: Scalars['String'];
  ingredients: Scalars['String'];
  name: Scalars['String'];
  reviews?: Maybe<Array<Review>>;
  users?: Maybe<Array<User>>;
};


export type CocktailUsersArgs = {
  filter?: InputMaybe<UsersFilterInput>;
};

export type CocktailUserConnectionInput = {
  cocktailID: Scalars['Int'];
  userID: Scalars['Int'];
};

export type CocktailsFilterInput = {
  name: Scalars['String'];
};

export type LandingSlide = {
  __typename?: 'LandingSlide';
  id: Scalars['Int'];
  text: Scalars['String'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCocktail: Cocktail;
  addLandingSlide: LandingSlide;
  addReview: Review;
  addUser: User;
  connectUser: Cocktail;
  deleteCocktail: Scalars['Boolean'];
  deleteLandingSlide: Scalars['Boolean'];
  deleteReview: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  disconnectUser: Cocktail;
  updateCocktail: Cocktail;
  updateLandingSlide: LandingSlide;
  updateReview: Review;
  updateUser: User;
};


export type MutationAddCocktailArgs = {
  input: AddCocktailInput;
};


export type MutationAddLandingSlideArgs = {
  input: AddLandingSlideInput;
};


export type MutationAddReviewArgs = {
  input: AddReviewInput;
};


export type MutationAddUserArgs = {
  input: AddUserInput;
};


export type MutationConnectUserArgs = {
  input: CocktailUserConnectionInput;
};


export type MutationDeleteCocktailArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLandingSlideArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteReviewArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDisconnectUserArgs = {
  input: CocktailUserConnectionInput;
};


export type MutationUpdateCocktailArgs = {
  id: Scalars['ID'];
  input: UpdateCocktailInput;
};


export type MutationUpdateLandingSlideArgs = {
  id: Scalars['ID'];
  input: UpdateLandingSlideInput;
};


export type MutationUpdateReviewArgs = {
  id: Scalars['ID'];
  input: UpdateReviewInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  input: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  cocktail?: Maybe<Cocktail>;
  cocktails?: Maybe<Array<Cocktail>>;
  landingSlide?: Maybe<LandingSlide>;
  landingSlides?: Maybe<Array<LandingSlide>>;
  review?: Maybe<Review>;
  reviews?: Maybe<Array<Review>>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type QueryCocktailArgs = {
  id: Scalars['ID'];
};


export type QueryCocktailsArgs = {
  filter?: InputMaybe<CocktailsFilterInput>;
};


export type QueryLandingSlideArgs = {
  id: Scalars['ID'];
};


export type QueryReviewArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  filter?: InputMaybe<UsersFilterInput>;
};

export type Review = {
  __typename?: 'Review';
  cocktail?: Maybe<Cocktail>;
  cocktailID: Scalars['Int'];
  id: Scalars['Int'];
  text: Scalars['String'];
  title: Scalars['String'];
  user?: Maybe<User>;
  userID: Scalars['Int'];
};

export type UpdateCocktailInput = {
  favorite: Scalars['Boolean'];
  howTo: Scalars['String'];
  image: Scalars['String'];
  ingredients: Scalars['String'];
  name: Scalars['String'];
};

export type UpdateLandingSlideInput = {
  text: Scalars['String'];
  title: Scalars['String'];
};

export type UpdateReviewInput = {
  postedAbout: Scalars['ID'];
  postedBy: Scalars['ID'];
  text: Scalars['String'];
  title: Scalars['String'];
};

export type UpdateUserInput = {
  age: Scalars['Int'];
  email: Scalars['String'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  age: Scalars['Int'];
  cocktails?: Maybe<Array<Cocktail>>;
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  reviews?: Maybe<Array<Review>>;
};


export type UserCocktailsArgs = {
  filter?: InputMaybe<CocktailsFilterInput>;
};

export type UsersFilterInput = {
  age: Scalars['Int'];
};

export type AddCocktailMutationVariables = Exact<{
  input: AddCocktailInput;
}>;


export type AddCocktailMutation = { __typename?: 'Mutation', addCocktail: { __typename?: 'Cocktail', id: number, name: string, howTo: string, ingredients: string, image: string, favorite: boolean } };

export type AddReviewMutationVariables = Exact<{
  input: AddReviewInput;
}>;


export type AddReviewMutation = { __typename?: 'Mutation', addReview: { __typename?: 'Review', id: number, title: string, text: string } };

export type AddUserMutationVariables = Exact<{
  input: AddUserInput;
}>;


export type AddUserMutation = { __typename?: 'Mutation', addUser: { __typename?: 'User', id: number, name: string, email: string, age: number } };

export type CocktailsQueryVariables = Exact<{ [key: string]: never; }>;


export type CocktailsQuery = { __typename?: 'Query', cocktails?: Array<{ __typename?: 'Cocktail', id: number, name: string, howTo: string, ingredients: string, image: string, favorite: boolean, users?: Array<{ __typename?: 'User', id: number, name: string, email: string, age: number }> | null }> | null };

export type LandingSlidesQueryVariables = Exact<{ [key: string]: never; }>;


export type LandingSlidesQuery = { __typename?: 'Query', landingSlides?: Array<{ __typename?: 'LandingSlide', id: number, title: string, text: string }> | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id: number, name: string, email: string }> | null };

export type CocktailQueryVariables = Exact<{
  cocktailId: Scalars['ID'];
}>;


export type CocktailQuery = { __typename?: 'Query', cocktail?: { __typename?: 'Cocktail', id: number, name: string, reviews?: Array<{ __typename?: 'Review', id: number, title: string, text: string, user?: { __typename?: 'User', id: number, name: string } | null }> | null } | null };

export type ConnectUserMutationVariables = Exact<{
  input: CocktailUserConnectionInput;
}>;


export type ConnectUserMutation = { __typename?: 'Mutation', connectUser: { __typename?: 'Cocktail', id: number, name: string, howTo: string, ingredients: string, image: string, favorite: boolean, users?: Array<{ __typename?: 'User', id: number, name: string, email: string, age: number }> | null } };

export type DeleteCocktailMutationVariables = Exact<{
  deleteCocktailId: Scalars['ID'];
}>;


export type DeleteCocktailMutation = { __typename?: 'Mutation', deleteCocktail: boolean };

export type DeleteReviewMutationVariables = Exact<{
  deleteReviewId: Scalars['ID'];
}>;


export type DeleteReviewMutation = { __typename?: 'Mutation', deleteReview: boolean };

export type DisconnectUserMutationVariables = Exact<{
  input: CocktailUserConnectionInput;
}>;


export type DisconnectUserMutation = { __typename?: 'Mutation', disconnectUser: { __typename?: 'Cocktail', id: number, name: string, howTo: string, ingredients: string, image: string, favorite: boolean, users?: Array<{ __typename?: 'User', id: number, name: string, email: string, age: number }> | null } };

export type UpdateCocktailMutationVariables = Exact<{
  updateCocktailId: Scalars['ID'];
  input: UpdateCocktailInput;
}>;


export type UpdateCocktailMutation = { __typename?: 'Mutation', updateCocktail: { __typename?: 'Cocktail', id: number, name: string, howTo: string, ingredients: string, image: string, favorite: boolean } };

export type UpdateReviewMutationVariables = Exact<{
  updateReviewId: Scalars['ID'];
  input: UpdateReviewInput;
}>;


export type UpdateReviewMutation = { __typename?: 'Mutation', updateReview: { __typename?: 'Review', id: number, title: string, text: string } };

export type UserQueryVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: number, cocktails?: Array<{ __typename?: 'Cocktail', name: string, id: number, howTo: string, ingredients: string, image: string, favorite: boolean }> | null } | null };


export const AddCocktailDocument = gql`
    mutation AddCocktail($input: AddCocktailInput!) {
  addCocktail(input: $input) {
    id
    name
    howTo
    ingredients
    image
    favorite
  }
}
    `;
export type AddCocktailMutationFn = Apollo.MutationFunction<AddCocktailMutation, AddCocktailMutationVariables>;

/**
 * __useAddCocktailMutation__
 *
 * To run a mutation, you first call `useAddCocktailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCocktailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCocktailMutation, { data, loading, error }] = useAddCocktailMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddCocktailMutation(baseOptions?: Apollo.MutationHookOptions<AddCocktailMutation, AddCocktailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCocktailMutation, AddCocktailMutationVariables>(AddCocktailDocument, options);
      }
export type AddCocktailMutationHookResult = ReturnType<typeof useAddCocktailMutation>;
export type AddCocktailMutationResult = Apollo.MutationResult<AddCocktailMutation>;
export type AddCocktailMutationOptions = Apollo.BaseMutationOptions<AddCocktailMutation, AddCocktailMutationVariables>;
export const AddReviewDocument = gql`
    mutation AddReview($input: AddReviewInput!) {
  addReview(input: $input) {
    id
    title
    text
  }
}
    `;
export type AddReviewMutationFn = Apollo.MutationFunction<AddReviewMutation, AddReviewMutationVariables>;

/**
 * __useAddReviewMutation__
 *
 * To run a mutation, you first call `useAddReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addReviewMutation, { data, loading, error }] = useAddReviewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddReviewMutation(baseOptions?: Apollo.MutationHookOptions<AddReviewMutation, AddReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddReviewMutation, AddReviewMutationVariables>(AddReviewDocument, options);
      }
export type AddReviewMutationHookResult = ReturnType<typeof useAddReviewMutation>;
export type AddReviewMutationResult = Apollo.MutationResult<AddReviewMutation>;
export type AddReviewMutationOptions = Apollo.BaseMutationOptions<AddReviewMutation, AddReviewMutationVariables>;
export const AddUserDocument = gql`
    mutation AddUser($input: AddUserInput!) {
  addUser(input: $input) {
    id
    name
    email
    age
  }
}
    `;
export type AddUserMutationFn = Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddUserMutation(baseOptions?: Apollo.MutationHookOptions<AddUserMutation, AddUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, options);
      }
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<AddUserMutation, AddUserMutationVariables>;
export const CocktailsDocument = gql`
    query Cocktails {
  cocktails {
    id
    name
    howTo
    ingredients
    image
    favorite
    users {
      id
      name
      email
      age
    }
  }
}
    `;

/**
 * __useCocktailsQuery__
 *
 * To run a query within a React component, call `useCocktailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCocktailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCocktailsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCocktailsQuery(baseOptions?: Apollo.QueryHookOptions<CocktailsQuery, CocktailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CocktailsQuery, CocktailsQueryVariables>(CocktailsDocument, options);
      }
export function useCocktailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CocktailsQuery, CocktailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CocktailsQuery, CocktailsQueryVariables>(CocktailsDocument, options);
        }
export type CocktailsQueryHookResult = ReturnType<typeof useCocktailsQuery>;
export type CocktailsLazyQueryHookResult = ReturnType<typeof useCocktailsLazyQuery>;
export type CocktailsQueryResult = Apollo.QueryResult<CocktailsQuery, CocktailsQueryVariables>;
export const LandingSlidesDocument = gql`
    query LandingSlides {
  landingSlides {
    id
    title
    text
  }
}
    `;

/**
 * __useLandingSlidesQuery__
 *
 * To run a query within a React component, call `useLandingSlidesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLandingSlidesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLandingSlidesQuery({
 *   variables: {
 *   },
 * });
 */
export function useLandingSlidesQuery(baseOptions?: Apollo.QueryHookOptions<LandingSlidesQuery, LandingSlidesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LandingSlidesQuery, LandingSlidesQueryVariables>(LandingSlidesDocument, options);
      }
export function useLandingSlidesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LandingSlidesQuery, LandingSlidesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LandingSlidesQuery, LandingSlidesQueryVariables>(LandingSlidesDocument, options);
        }
export type LandingSlidesQueryHookResult = ReturnType<typeof useLandingSlidesQuery>;
export type LandingSlidesLazyQueryHookResult = ReturnType<typeof useLandingSlidesLazyQuery>;
export type LandingSlidesQueryResult = Apollo.QueryResult<LandingSlidesQuery, LandingSlidesQueryVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    id
    name
    email
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const CocktailDocument = gql`
    query Cocktail($cocktailId: ID!) {
  cocktail(id: $cocktailId) {
    id
    name
    reviews {
      id
      title
      text
      user {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useCocktailQuery__
 *
 * To run a query within a React component, call `useCocktailQuery` and pass it any options that fit your needs.
 * When your component renders, `useCocktailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCocktailQuery({
 *   variables: {
 *      cocktailId: // value for 'cocktailId'
 *   },
 * });
 */
export function useCocktailQuery(baseOptions: Apollo.QueryHookOptions<CocktailQuery, CocktailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CocktailQuery, CocktailQueryVariables>(CocktailDocument, options);
      }
export function useCocktailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CocktailQuery, CocktailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CocktailQuery, CocktailQueryVariables>(CocktailDocument, options);
        }
export type CocktailQueryHookResult = ReturnType<typeof useCocktailQuery>;
export type CocktailLazyQueryHookResult = ReturnType<typeof useCocktailLazyQuery>;
export type CocktailQueryResult = Apollo.QueryResult<CocktailQuery, CocktailQueryVariables>;
export const ConnectUserDocument = gql`
    mutation ConnectUser($input: CocktailUserConnectionInput!) {
  connectUser(input: $input) {
    id
    name
    howTo
    ingredients
    image
    favorite
    users {
      id
      name
      email
      age
    }
  }
}
    `;
export type ConnectUserMutationFn = Apollo.MutationFunction<ConnectUserMutation, ConnectUserMutationVariables>;

/**
 * __useConnectUserMutation__
 *
 * To run a mutation, you first call `useConnectUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConnectUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [connectUserMutation, { data, loading, error }] = useConnectUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useConnectUserMutation(baseOptions?: Apollo.MutationHookOptions<ConnectUserMutation, ConnectUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConnectUserMutation, ConnectUserMutationVariables>(ConnectUserDocument, options);
      }
export type ConnectUserMutationHookResult = ReturnType<typeof useConnectUserMutation>;
export type ConnectUserMutationResult = Apollo.MutationResult<ConnectUserMutation>;
export type ConnectUserMutationOptions = Apollo.BaseMutationOptions<ConnectUserMutation, ConnectUserMutationVariables>;
export const DeleteCocktailDocument = gql`
    mutation DeleteCocktail($deleteCocktailId: ID!) {
  deleteCocktail(id: $deleteCocktailId)
}
    `;
export type DeleteCocktailMutationFn = Apollo.MutationFunction<DeleteCocktailMutation, DeleteCocktailMutationVariables>;

/**
 * __useDeleteCocktailMutation__
 *
 * To run a mutation, you first call `useDeleteCocktailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCocktailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCocktailMutation, { data, loading, error }] = useDeleteCocktailMutation({
 *   variables: {
 *      deleteCocktailId: // value for 'deleteCocktailId'
 *   },
 * });
 */
export function useDeleteCocktailMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCocktailMutation, DeleteCocktailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCocktailMutation, DeleteCocktailMutationVariables>(DeleteCocktailDocument, options);
      }
export type DeleteCocktailMutationHookResult = ReturnType<typeof useDeleteCocktailMutation>;
export type DeleteCocktailMutationResult = Apollo.MutationResult<DeleteCocktailMutation>;
export type DeleteCocktailMutationOptions = Apollo.BaseMutationOptions<DeleteCocktailMutation, DeleteCocktailMutationVariables>;
export const DeleteReviewDocument = gql`
    mutation DeleteReview($deleteReviewId: ID!) {
  deleteReview(id: $deleteReviewId)
}
    `;
export type DeleteReviewMutationFn = Apollo.MutationFunction<DeleteReviewMutation, DeleteReviewMutationVariables>;

/**
 * __useDeleteReviewMutation__
 *
 * To run a mutation, you first call `useDeleteReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteReviewMutation, { data, loading, error }] = useDeleteReviewMutation({
 *   variables: {
 *      deleteReviewId: // value for 'deleteReviewId'
 *   },
 * });
 */
export function useDeleteReviewMutation(baseOptions?: Apollo.MutationHookOptions<DeleteReviewMutation, DeleteReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteReviewMutation, DeleteReviewMutationVariables>(DeleteReviewDocument, options);
      }
export type DeleteReviewMutationHookResult = ReturnType<typeof useDeleteReviewMutation>;
export type DeleteReviewMutationResult = Apollo.MutationResult<DeleteReviewMutation>;
export type DeleteReviewMutationOptions = Apollo.BaseMutationOptions<DeleteReviewMutation, DeleteReviewMutationVariables>;
export const DisconnectUserDocument = gql`
    mutation DisconnectUser($input: CocktailUserConnectionInput!) {
  disconnectUser(input: $input) {
    id
    name
    howTo
    ingredients
    image
    favorite
    users {
      id
      name
      email
      age
    }
  }
}
    `;
export type DisconnectUserMutationFn = Apollo.MutationFunction<DisconnectUserMutation, DisconnectUserMutationVariables>;

/**
 * __useDisconnectUserMutation__
 *
 * To run a mutation, you first call `useDisconnectUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDisconnectUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [disconnectUserMutation, { data, loading, error }] = useDisconnectUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDisconnectUserMutation(baseOptions?: Apollo.MutationHookOptions<DisconnectUserMutation, DisconnectUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DisconnectUserMutation, DisconnectUserMutationVariables>(DisconnectUserDocument, options);
      }
export type DisconnectUserMutationHookResult = ReturnType<typeof useDisconnectUserMutation>;
export type DisconnectUserMutationResult = Apollo.MutationResult<DisconnectUserMutation>;
export type DisconnectUserMutationOptions = Apollo.BaseMutationOptions<DisconnectUserMutation, DisconnectUserMutationVariables>;
export const UpdateCocktailDocument = gql`
    mutation UpdateCocktail($updateCocktailId: ID!, $input: UpdateCocktailInput!) {
  updateCocktail(id: $updateCocktailId, input: $input) {
    id
    name
    howTo
    ingredients
    image
    favorite
  }
}
    `;
export type UpdateCocktailMutationFn = Apollo.MutationFunction<UpdateCocktailMutation, UpdateCocktailMutationVariables>;

/**
 * __useUpdateCocktailMutation__
 *
 * To run a mutation, you first call `useUpdateCocktailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCocktailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCocktailMutation, { data, loading, error }] = useUpdateCocktailMutation({
 *   variables: {
 *      updateCocktailId: // value for 'updateCocktailId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCocktailMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCocktailMutation, UpdateCocktailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCocktailMutation, UpdateCocktailMutationVariables>(UpdateCocktailDocument, options);
      }
export type UpdateCocktailMutationHookResult = ReturnType<typeof useUpdateCocktailMutation>;
export type UpdateCocktailMutationResult = Apollo.MutationResult<UpdateCocktailMutation>;
export type UpdateCocktailMutationOptions = Apollo.BaseMutationOptions<UpdateCocktailMutation, UpdateCocktailMutationVariables>;
export const UpdateReviewDocument = gql`
    mutation UpdateReview($updateReviewId: ID!, $input: UpdateReviewInput!) {
  updateReview(id: $updateReviewId, input: $input) {
    id
    title
    text
  }
}
    `;
export type UpdateReviewMutationFn = Apollo.MutationFunction<UpdateReviewMutation, UpdateReviewMutationVariables>;

/**
 * __useUpdateReviewMutation__
 *
 * To run a mutation, you first call `useUpdateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReviewMutation, { data, loading, error }] = useUpdateReviewMutation({
 *   variables: {
 *      updateReviewId: // value for 'updateReviewId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateReviewMutation(baseOptions?: Apollo.MutationHookOptions<UpdateReviewMutation, UpdateReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateReviewMutation, UpdateReviewMutationVariables>(UpdateReviewDocument, options);
      }
export type UpdateReviewMutationHookResult = ReturnType<typeof useUpdateReviewMutation>;
export type UpdateReviewMutationResult = Apollo.MutationResult<UpdateReviewMutation>;
export type UpdateReviewMutationOptions = Apollo.BaseMutationOptions<UpdateReviewMutation, UpdateReviewMutationVariables>;
export const UserDocument = gql`
    query User($userId: ID!) {
  user(id: $userId) {
    id
    cocktails {
      name
      id
      howTo
      ingredients
      image
      favorite
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;