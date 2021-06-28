import { Record as Record_, Array as Array_, String as String_, Static } from 'runtypes';
import type { Searcher } from './types.js';
declare const LastFMAlbum: Record_<{
    name: String_;
    artist: String_;
    image: Array_<Record_<{
        '#text': String_;
    }, false>, false>;
}, false>;
declare const LastFMResult: Record_<{
    results: Record_<{
        albummatches: Record_<{
            album: Array_<Record_<{
                name: String_;
                artist: String_;
                image: Array_<Record_<{
                    '#text': String_;
                }, false>, false>;
            }, false>, false>;
        }, false>;
    }, false>;
}, false>;
export declare type LastFMAlbum = Static<typeof LastFMAlbum>;
export declare type LastFMResult = Static<typeof LastFMResult>;
export declare const searchLastFM: Searcher;
export {};
