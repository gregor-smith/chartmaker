import { String as String_, Number as Number_, Array as Array_, Record as Record_, Static, Union, Literal, Tuple, Boolean as Boolean_ } from 'runtypes';
export declare const CollageDimension: Union<[Literal<1>, Literal<2>, Literal<3>, Literal<4>, Literal<5>, Literal<6>, Literal<7>, Literal<8>, Literal<9>, Literal<10>]>;
declare const CollageSize: Tuple<[Union<[Literal<1>, Literal<2>, Literal<3>, Literal<4>, Literal<5>, Literal<6>, Literal<7>, Literal<8>, Literal<9>, Literal<10>]>, Union<[Literal<1>, Literal<2>, Literal<3>, Literal<4>, Literal<5>, Literal<6>, Literal<7>, Literal<8>, Literal<9>, Literal<10>]>]>;
declare const TopSize: Union<[Literal<40>, Literal<42>, Literal<100>]>;
declare const UnidentifiedNamedAlbum: Record_<{
    name: import("runtypes").Constraint<String_, string, unknown>;
    url: import("runtypes").Constraint<String_, string, unknown>;
}, false>;
declare const UnidentifiedAlbum: Union<[Record_<{
    name: import("runtypes").Constraint<String_, string, unknown>;
    url: import("runtypes").Constraint<String_, string, unknown>;
}, false>, Literal<null>]>;
declare const NamedAlbum: import("runtypes").Intersect<[Record_<{
    name: import("runtypes").Constraint<String_, string, unknown>;
    url: import("runtypes").Constraint<String_, string, unknown>;
}, false>, Record_<{
    id: import("runtypes").Constraint<Number_, number, unknown>;
}, false>]>;
declare const Album: Union<[import("runtypes").Intersect<[Record_<{
    name: import("runtypes").Constraint<String_, string, unknown>;
    url: import("runtypes").Constraint<String_, string, unknown>;
}, false>, Record_<{
    id: import("runtypes").Constraint<Number_, number, unknown>;
}, false>]>, import("runtypes").Constraint<Number_, number, unknown>]>;
declare const Chart: Record_<{
    name: import("runtypes").Constraint<String_, string, unknown>;
    shape: Tuple<[Union<[Literal<1>, Literal<2>, Literal<3>, Literal<4>, Literal<5>, Literal<6>, Literal<7>, Literal<8>, Literal<9>, Literal<10>]>, Union<[Literal<1>, Literal<2>, Literal<3>, Literal<4>, Literal<5>, Literal<6>, Literal<7>, Literal<8>, Literal<9>, Literal<10>]>]>;
    size: Union<[Union<[Literal<40>, Literal<42>, Literal<100>]>, Literal<null>]>;
    albums: import("runtypes").Constraint<Array_<Union<[import("runtypes").Intersect<[Record_<{
        name: import("runtypes").Constraint<String_, string, unknown>;
        url: import("runtypes").Constraint<String_, string, unknown>;
    }, false>, Record_<{
        id: import("runtypes").Constraint<Number_, number, unknown>;
    }, false>]>, import("runtypes").Constraint<Number_, number, unknown>]>, false>, (number | ({
        url: string;
        name: string;
    } & {
        id: number;
    }))[], unknown>;
}, false>;
export declare const ViewerChart: Record_<{
    name: import("runtypes").Constraint<String_, string, unknown>;
    albums: Array_<Union<[Record_<{
        name: import("runtypes").Constraint<String_, string, unknown>;
        url: import("runtypes").Constraint<String_, string, unknown>;
    }, false>, Literal<null>]>, false>;
    size: Union<[Tuple<[Union<[Literal<1>, Literal<2>, Literal<3>, Literal<4>, Literal<5>, Literal<6>, Literal<7>, Literal<8>, Literal<9>, Literal<10>]>, Union<[Literal<1>, Literal<2>, Literal<3>, Literal<4>, Literal<5>, Literal<6>, Literal<7>, Literal<8>, Literal<9>, Literal<10>]>]>, Union<[Literal<40>, Literal<42>, Literal<100>]>]>;
}, false>;
export declare const ScreenshotScale: Union<[Literal<1>, Literal<2>, Literal<3>]>;
declare const ScreenshotState: Record_<{
    loading: Boolean_;
    scale: Union<[Literal<1>, Literal<2>, Literal<3>]>;
}, false>;
export declare const V1State: Record_<{
    apiKey: String_;
    activeChartIndex: import("runtypes").Constraint<Number_, number, unknown>;
    search: Record_<{
        tag: Literal<"Waiting">;
        query: String_;
    }, false>;
    screenshot: Record_<{
        loading: Boolean_;
        scale: Union<[Literal<1>, Literal<2>, Literal<3>]>;
    }, false>;
    charts: import("runtypes").Constraint<Array_<Record_<{
        name: import("runtypes").Constraint<String_, string, unknown>;
        rowsX: Union<[Literal<1>, Literal<2>, Literal<3>, Literal<4>, Literal<5>, Literal<6>, Literal<7>, Literal<8>, Literal<9>, Literal<10>]>;
        rowsY: Union<[Literal<1>, Literal<2>, Literal<3>, Literal<4>, Literal<5>, Literal<6>, Literal<7>, Literal<8>, Literal<9>, Literal<10>]>;
        shape: Union<[Record_<{
            tag: Literal<"Top">;
            size: Union<[Literal<40>, Literal<42>, Literal<100>]>;
        }, false>, Record_<{
            tag: Literal<"Collage">;
        }, false>]>;
        albums: import("runtypes").Constraint<Array_<Union<[import("runtypes").Intersect<[Record_<{
            name: import("runtypes").Constraint<String_, string, unknown>;
            url: import("runtypes").Constraint<String_, string, unknown>;
        }, false>, Record_<{
            placeholder: Literal<false>;
            id: import("runtypes").Constraint<Number_, number, unknown>;
        }, false>]>, Record_<{
            placeholder: Literal<true>;
            id: import("runtypes").Constraint<Number_, number, unknown>;
        }, false>]>, false>, (({
            url: string;
            name: string;
        } & {
            id: number;
            placeholder: false;
        }) | {
            id: number;
            placeholder: true;
        })[], unknown>;
    }, false>, false>, {
        name: string;
        rowsX: 2 | 1 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3;
        rowsY: 2 | 1 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3;
        shape: {
            size: 40 | 42 | 100;
            tag: "Top";
        } | {
            tag: "Collage";
        };
        albums: (({
            url: string;
            name: string;
        } & {
            id: number;
            placeholder: false;
        }) | {
            id: number;
            placeholder: true;
        })[];
    }[], unknown>;
}, false>;
export declare const V2State: Record_<{
    version: Literal<2>;
    charts: import("runtypes").Constraint<Array_<Record_<{
        albums: import("runtypes").Constraint<Array_<Union<[import("runtypes").Intersect<[Record_<{
            name: import("runtypes").Constraint<String_, string, unknown>;
            url: import("runtypes").Constraint<String_, string, unknown>;
        }, false>, Record_<{
            id: import("runtypes").Constraint<Number_, number, unknown>;
        }, false>]>, import("runtypes").Constraint<Number_, number, unknown>]>, false>, (number | ({
            url: string;
            name: string;
        } & {
            id: number;
        }))[], unknown>;
        name: import("runtypes").Constraint<String_, string, unknown>;
        rowsX: Union<[Literal<1>, Literal<2>, Literal<3>, Literal<4>, Literal<5>, Literal<6>, Literal<7>, Literal<8>, Literal<9>, Literal<10>]>;
        rowsY: Union<[Literal<1>, Literal<2>, Literal<3>, Literal<4>, Literal<5>, Literal<6>, Literal<7>, Literal<8>, Literal<9>, Literal<10>]>;
        shape: Union<[Record_<{
            tag: Literal<"Top">;
            size: Union<[Literal<40>, Literal<42>, Literal<100>]>;
        }, false>, Record_<{
            tag: Literal<"Collage">;
        }, false>]>;
    }, false>, false>, {
        name: string;
        rowsX: 2 | 1 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3;
        rowsY: 2 | 1 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3;
        shape: {
            size: 40 | 42 | 100;
            tag: "Top";
        } | {
            tag: "Collage";
        };
        albums: (number | ({
            url: string;
            name: string;
        } & {
            id: number;
        }))[];
    }[], unknown>;
    apiKey: String_;
    activeChartIndex: import("runtypes").Constraint<Number_, number, unknown>;
    search: Record_<{
        tag: Literal<"Waiting">;
        query: String_;
    }, false>;
    screenshot: Record_<{
        loading: Boolean_;
        scale: Union<[Literal<1>, Literal<2>, Literal<3>]>;
    }, false>;
}, false>;
export declare const ExportState: Record_<{
    version: Literal<3>;
    activeChartIndex: import("runtypes").Constraint<Number_, number, unknown>;
    apiKey: String_;
    search: String_;
    charts: import("runtypes").Constraint<Array_<Record_<{
        albums: Array_<Union<[Record_<{
            name: import("runtypes").Constraint<String_, string, unknown>;
            url: import("runtypes").Constraint<String_, string, unknown>;
        }, false>, Literal<null>]>, false>;
        name: import("runtypes").Constraint<String_, string, unknown>;
        shape: Tuple<[Union<[Literal<1>, Literal<2>, Literal<3>, Literal<4>, Literal<5>, Literal<6>, Literal<7>, Literal<8>, Literal<9>, Literal<10>]>, Union<[Literal<1>, Literal<2>, Literal<3>, Literal<4>, Literal<5>, Literal<6>, Literal<7>, Literal<8>, Literal<9>, Literal<10>]>]>;
        size: Union<[Union<[Literal<40>, Literal<42>, Literal<100>]>, Literal<null>]>;
    }, false>, false>, {
        size: 40 | 42 | 100 | null;
        name: string;
        shape: [2 | 1 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3, 2 | 1 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3];
        albums: ({
            url: string;
            name: string;
        } | null)[];
    }[], unknown>;
}, false>;
export declare type State = {
    apiKey: string;
    charts: Chart[];
    activeChartIndex: number;
    searchState: SearchState;
    screenshotState: ScreenshotState;
    route: Route | null;
    highlightedID: number | null;
};
export declare type SearchResult = {
    tag: 'Ok';
    albums: UnidentifiedNamedAlbum[];
} | {
    tag: 'Error';
    message: string;
} | {
    tag: 'Aborted';
};
export declare type SearcherArguments = {
    key: string;
    query: string;
    signal: AbortSignal;
};
export declare type AlbumSearcher = (args: SearcherArguments) => PromiseLike<SearchResult> | SearchResult;
export declare type AlertShower = (message: string) => PromiseLike<void> | void;
export declare type ChoiceConfirmer = (message: string) => PromiseLike<boolean> | boolean;
export declare type InputPrompter = (message: string, _default: string) => PromiseLike<string | null> | string | null;
export declare type FileURIGetter = (file: File & {
    path?: string;
}) => PromiseLike<string> | string;
export declare type SearchState = ({
    tag: 'Waiting';
} | {
    tag: 'Loading';
    controller: AbortController;
} | {
    tag: 'Complete';
    albums: UnidentifiedNamedAlbum[];
} | {
    tag: 'Error';
    message: string;
}) & {
    query: string;
};
export declare type Route = {
    tag: 'Editor';
} | {
    tag: 'Viewer';
    chart: Chart | null;
};
export declare type UnidentifiedNamedAlbum = Static<typeof UnidentifiedNamedAlbum>;
export declare type ScreenshotState = Static<typeof ScreenshotState>;
export declare type ScreenshotScale = Static<typeof ScreenshotScale>;
export declare type UnidentifiedAlbum = Static<typeof UnidentifiedAlbum>;
export declare type NamedAlbum = Static<typeof NamedAlbum>;
export declare type Album = Static<typeof Album>;
export declare type Chart = Static<typeof Chart>;
export declare type ViewerChart = Static<typeof ViewerChart>;
export declare type V1State = Static<typeof V1State>;
export declare type V2State = Static<typeof V2State>;
export declare type ExportState = Static<typeof ExportState>;
export declare type CollageSize = Static<typeof CollageSize>;
export declare type CollageDimension = Static<typeof CollageDimension>;
export declare type TopSize = Static<typeof TopSize>;
export {};
