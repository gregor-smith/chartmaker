/// <reference types="react" />
import { Dispatch as Dispatch_, SideEffectReducer } from 'react-use-side-effect-reducer';
import type { State, SearchState, Route, CollageSize, TopSize, ScreenshotScale, AlbumSearcher, AlertShower, ChoiceConfirmer, FileURIGetter, InputPrompter } from './types.js';
export declare type Action = {
    tag: 'PopRoute';
    route: Route | null;
} | {
    tag: 'PushRoute';
    route: Route;
    replace: boolean;
} | {
    tag: 'UpdateAPIKey';
    apiKey: string;
} | {
    tag: 'UpdateActiveChart';
    index: number;
} | {
    tag: 'PromptForNewChart';
} | {
    tag: 'AddNewChart';
    name: string;
} | {
    tag: 'PromptToRenameActiveChart';
} | {
    tag: 'RenameActiveChart';
    name: string;
} | {
    tag: 'PromptToDeleteActiveChart';
} | {
    tag: 'DeleteActiveChart';
} | {
    tag: 'MoveActiveChart';
    direction: 'Up' | 'Down';
} | {
    tag: 'LoadStateFile';
    file: File;
} | {
    tag: 'LoadState';
    state: State;
} | {
    tag: 'PromptToSaveState';
} | {
    tag: 'CancelSearchRequest';
} | {
    tag: 'SendSearchRequest';
} | {
    tag: 'UpdateSearchState';
    state: SearchState;
} | {
    tag: 'UpdateSearchQuery';
    query: string;
} | {
    tag: 'DragChartAlbum';
    sourceID: number;
    targetID: number;
} | {
    tag: 'DropSearchAlbum';
    sourceIndex: number;
    targetID: number;
} | {
    tag: 'PromptToRenameAlbum';
    id: number;
} | {
    tag: 'RenameAlbum';
    id: number;
    name: string;
} | {
    tag: 'DeleteAlbum';
    id: number;
} | {
    tag: 'UpdateScreenshotLoading';
    loading: boolean;
} | {
    tag: 'UpdateScreenshotScale';
    scale: ScreenshotScale;
} | {
    tag: 'TakeScreenshot';
    element: HTMLElement;
} | {
    tag: 'UpdateChartShape';
    shape: CollageSize;
    size: TopSize | null;
} | {
    tag: 'DropExternalFile';
    file: File;
    targetID: number;
} | {
    tag: 'LoadExternalFile';
    uri: string;
    name: string;
    targetID: number;
} | {
    tag: 'HighlightAlbum';
    targetID: number;
} | {
    tag: 'UnhighlightAlbum';
} | {
    tag: 'ImportViewerChart';
};
export declare type Dispatch = Dispatch_<Action>;
export declare type DispatchProps = {
    dispatch: Dispatch;
};
export declare type CreateReducerOptions = {
    searchForAlbums?: AlbumSearcher;
    showAlert?: AlertShower;
    confirmChoice?: ChoiceConfirmer;
    promptForInput?: InputPrompter;
    getFileURI?: FileURIGetter;
};
export declare function createReducer({ searchForAlbums, showAlert, confirmChoice, promptForInput, getFileURI }?: CreateReducerOptions): SideEffectReducer<State, Action>;
