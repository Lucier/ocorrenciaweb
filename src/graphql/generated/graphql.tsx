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

export type CreateOccurrenceInput = {
  age: Scalars['String'];
  classroom: Scalars['String'];
  date: Scalars['String'];
  description: Scalars['String'];
  registration: Scalars['String'];
  school: Scalars['String'];
  sex: Scalars['String'];
  student: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String'];
  user: User;
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOccurrence: Occurrence;
  createUser: User;
  login: LoginResponse;
  signup: User;
};


export type MutationCreateOccurrenceArgs = {
  data: CreateOccurrenceInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationSignupArgs = {
  signupUserInput: CreateUserInput;
};

export type Occurrence = {
  __typename?: 'Occurrence';
  age: Scalars['String'];
  classroom: Scalars['String'];
  date: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  registration: Scalars['String'];
  school: Scalars['String'];
  sex: Scalars['String'];
  student: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  occurrence: Occurrence;
  occurrenceByClassroom: Array<Occurrence>;
  occurrenceByRegistration: Array<Occurrence>;
  occurrenceBySchool: Array<Occurrence>;
  occurrenceByStudent: Array<Occurrence>;
  occurrences: Array<Occurrence>;
  userByEmail: User;
  userById: User;
  users: Array<User>;
};


export type QueryOccurrenceArgs = {
  id: Scalars['String'];
};


export type QueryOccurrenceByClassroomArgs = {
  classroom: Scalars['String'];
};


export type QueryOccurrenceByRegistrationArgs = {
  registration: Scalars['String'];
};


export type QueryOccurrenceBySchoolArgs = {
  school: Scalars['String'];
};


export type QueryOccurrenceByStudentArgs = {
  student: Scalars['String'];
};


export type QueryUserByEmailArgs = {
  email: Scalars['String'];
};


export type QueryUserByIdArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type _Service = {
  __typename?: '_Service';
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']>;
};

export type CreateOccurrenceMutationVariables = Exact<{
  student: Scalars['String'];
  school: Scalars['String'];
  classroom: Scalars['String'];
  sex: Scalars['String'];
  age: Scalars['String'];
  registration: Scalars['String'];
  date: Scalars['String'];
  description: Scalars['String'];
}>;


export type CreateOccurrenceMutation = { __typename?: 'Mutation', createOccurrence: { __typename?: 'Occurrence', student: string, school: string, classroom: string, sex: string, age: string, registration: string, date: string, description: string } };

export type OccurrenceQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type OccurrenceQuery = { __typename?: 'Query', occurrence: { __typename?: 'Occurrence', id: string, student: string, school: string, classroom: string, sex: string, age: string, registration: string, date: string, description: string } };

export type OccurrencesQueryVariables = Exact<{ [key: string]: never; }>;


export type OccurrencesQuery = { __typename?: 'Query', occurrences: Array<{ __typename?: 'Occurrence', id: string, student: string, school: string, classroom: string, sex: string, age: string, registration: string, date: string, description: string }> };


export const CreateOccurrenceDocument = gql`
    mutation CreateOccurrence($student: String!, $school: String!, $classroom: String!, $sex: String!, $age: String!, $registration: String!, $date: String!, $description: String!) {
  createOccurrence(
    data: {student: $student, school: $school, classroom: $classroom, sex: $sex, age: $age, registration: $registration, date: $date, description: $description}
  ) {
    student
    school
    classroom
    sex
    age
    registration
    date
    description
  }
}
    `;
export type CreateOccurrenceMutationFn = Apollo.MutationFunction<CreateOccurrenceMutation, CreateOccurrenceMutationVariables>;

/**
 * __useCreateOccurrenceMutation__
 *
 * To run a mutation, you first call `useCreateOccurrenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOccurrenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOccurrenceMutation, { data, loading, error }] = useCreateOccurrenceMutation({
 *   variables: {
 *      student: // value for 'student'
 *      school: // value for 'school'
 *      classroom: // value for 'classroom'
 *      sex: // value for 'sex'
 *      age: // value for 'age'
 *      registration: // value for 'registration'
 *      date: // value for 'date'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateOccurrenceMutation(baseOptions?: Apollo.MutationHookOptions<CreateOccurrenceMutation, CreateOccurrenceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOccurrenceMutation, CreateOccurrenceMutationVariables>(CreateOccurrenceDocument, options);
      }
export type CreateOccurrenceMutationHookResult = ReturnType<typeof useCreateOccurrenceMutation>;
export type CreateOccurrenceMutationResult = Apollo.MutationResult<CreateOccurrenceMutation>;
export type CreateOccurrenceMutationOptions = Apollo.BaseMutationOptions<CreateOccurrenceMutation, CreateOccurrenceMutationVariables>;
export const OccurrenceDocument = gql`
    query Occurrence($id: String!) {
  occurrence(id: $id) {
    id
    student
    school
    classroom
    sex
    age
    registration
    date
    description
  }
}
    `;

/**
 * __useOccurrenceQuery__
 *
 * To run a query within a React component, call `useOccurrenceQuery` and pass it any options that fit your needs.
 * When your component renders, `useOccurrenceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOccurrenceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOccurrenceQuery(baseOptions: Apollo.QueryHookOptions<OccurrenceQuery, OccurrenceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OccurrenceQuery, OccurrenceQueryVariables>(OccurrenceDocument, options);
      }
export function useOccurrenceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OccurrenceQuery, OccurrenceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OccurrenceQuery, OccurrenceQueryVariables>(OccurrenceDocument, options);
        }
export type OccurrenceQueryHookResult = ReturnType<typeof useOccurrenceQuery>;
export type OccurrenceLazyQueryHookResult = ReturnType<typeof useOccurrenceLazyQuery>;
export type OccurrenceQueryResult = Apollo.QueryResult<OccurrenceQuery, OccurrenceQueryVariables>;
export const OccurrencesDocument = gql`
    query Occurrences {
  occurrences {
    id
    student
    school
    classroom
    sex
    age
    registration
    date
    description
  }
}
    `;

/**
 * __useOccurrencesQuery__
 *
 * To run a query within a React component, call `useOccurrencesQuery` and pass it any options that fit your needs.
 * When your component renders, `useOccurrencesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOccurrencesQuery({
 *   variables: {
 *   },
 * });
 */
export function useOccurrencesQuery(baseOptions?: Apollo.QueryHookOptions<OccurrencesQuery, OccurrencesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OccurrencesQuery, OccurrencesQueryVariables>(OccurrencesDocument, options);
      }
export function useOccurrencesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OccurrencesQuery, OccurrencesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OccurrencesQuery, OccurrencesQueryVariables>(OccurrencesDocument, options);
        }
export type OccurrencesQueryHookResult = ReturnType<typeof useOccurrencesQuery>;
export type OccurrencesLazyQueryHookResult = ReturnType<typeof useOccurrencesLazyQuery>;
export type OccurrencesQueryResult = Apollo.QueryResult<OccurrencesQuery, OccurrencesQueryVariables>;