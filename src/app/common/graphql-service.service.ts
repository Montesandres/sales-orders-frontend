import { Injectable } from '@angular/core';
import {
  MutationOptions,
  OperationVariables,
  QueryOptions,
  WatchQueryOptions,
} from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  constructor(private apollo: Apollo) {}
  query<TResult extends Object = any, TArguments = any>(
    queryOptions: QueryOptions<TArguments, TResult>  ) {
    return this.apollo
      .query(queryOptions)
      .pipe<TResult>(map((res) => Object.values(res.data).pop()));
  }
  mutation<TResult extends Object = any, TArguments = any>(
    mutationOptions: MutationOptions<TResult, TArguments>  ) {
    return this.apollo
      .mutate(mutationOptions)
      .pipe<TResult>(map((res) => Object.values(res.data ?? {}).pop()));
  }
  watchQuery<    TResult extends Object = any,
    TArguments extends OperationVariables = any
  >(queryOptions: WatchQueryOptions<TArguments, TResult>) {
    return this.apollo.watchQuery(queryOptions);
  }
}