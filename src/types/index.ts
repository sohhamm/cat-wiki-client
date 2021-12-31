export type FetcherType = (
  url: string,
  method: string,
  payload: object,
) => Promise<any>
