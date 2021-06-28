import type { FC } from 'react';
import type { DispatchProps } from '../reducer.js';
import type { SearchState } from '../types.js';
export declare const id = "search";
export declare type SearchBoxProps = DispatchProps & {
    searchState: SearchState;
};
export declare const SearchBox: FC<SearchBoxProps>;
