import type { searchLastFM as _search } from './api.js'
export type { SearchResult, SearchArguments } from './api.js'


export const search = jest.fn<ReturnType<typeof _search>, Parameters<typeof _search>>()
