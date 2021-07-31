// React specific, related to legacy non-hook APIs
export interface QueryDataOptions<TData = any, TVariables = OperationVariables> extends QueryFunctionOptions<TData, TVariables> {
  children?: (result: QueryResult<TData, TVariables>) => ReactNode;
  query: DocumentNode | TypedDocumentNode<TData, TVariables>;
}

// React specific
export interface QueryFunctionOptions<TData = any, TVariables = OperationVariables > extends BaseQueryOptions<TVariables> {
  displayName?: string;
  skip?: boolean;
  onCompleted?: (data: TData) => void;
  onError?: (error: ApolloError) => void;
}

// The actual options passed to the hook???/
export interface QueryHookOptions<TData = any, TVariables = OperationVariables>
  extends QueryFunctionOptions<TData, TVariables> {
  query?: DocumentNode | TypedDocumentNode<TData, TVariables>;
}

// Used by all operation types
export type CommonOptions<TOptions> = TOptions & {
  client?: ApolloClient<object>;
};

// React specific
export interface BaseQueryOptions<TVariables = OperationVariables> extends Omit<WatchQueryOptions<TVariables>, "query"> {
  ssr?: boolean;
  client?: ApolloClient<any>;
  context?: DefaultContext;
}

// ObservableQuery watchQuery specific
export interface WatchQueryOptions<TVariables = OperationVariables, TData = any> extends Omit<QueryOptions<TVariables, TData>, 'fetchPolicy'> {
  fetchPolicy?: WatchQueryFetchPolicy;
  nextFetchPolicy?: WatchQueryFetchPolicy | ((
    this: WatchQueryOptions<TVariables, TData>,
    lastFetchPolicy: WatchQueryFetchPolicy,
  ) => WatchQueryFetchPolicy);
  refetchWritePolicy?: RefetchWritePolicy;
}

// ObservableQuery query AND watchQuery
export interface QueryOptions<TVariables = OperationVariables, TData = any> {
  query: DocumentNode | TypedDocumentNode<TData, TVariables>;
  variables?: TVariables;
  errorPolicy?: ErrorPolicy;
  context?: any;
  fetchPolicy?: FetchPolicy;
  pollInterval?: number;
  notifyOnNetworkStatusChange?: boolean;
  returnPartialData?: boolean;
  partialRefetch?: boolean;
  canonizeResults?: boolean;
}
