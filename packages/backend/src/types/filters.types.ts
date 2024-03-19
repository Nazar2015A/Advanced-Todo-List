export enum Status {
  All = 'all',
  Public = 'public',
  Private = 'private',
  Completed = 'completed'
}

export interface FilteredQuery {
  search: string;
  status: Status;
  skip: string;
  take: string;
}
