import {
    Record as Record_,
    Array as Array_,
    String as String_,
    Static
} from 'runtypes'

import type { AlbumSearcher, UnidentifiedNamedAlbum } from './types.js'


const LastFMAlbum = Record_({
    name: String_,
    artist: String_,
    image: Array_(
        Record_({
            '#text': String_
        })
    )
})

const LastFMResult = Record_({
    results: Record_({
        albummatches: Record_({
            album: Array_(LastFMAlbum)
        })
    })
})


export type LastFMAlbum = Static<typeof LastFMAlbum>
export type LastFMResult = Static<typeof LastFMResult>


function isLastFMNullString(value: string): boolean {
    // Although Last.fm offers a JSON API, it doesn't make use of any JSON
    // types other than strings. Null values are represented by the string
    // '(null)' or just an empty string. Why even bother with JSON then...?
    return value === '' || value === '(null)'
}


function formatLastFMResult(result: LastFMResult): UnidentifiedNamedAlbum[] {
    const albums: UnidentifiedNamedAlbum[] = []
    for (const album of result.results.albummatches.album) {
        if (isLastFMNullString(album.artist)
                || isLastFMNullString(album.name)
                || album.image.length === 0
                || album.image.some(image => isLastFMNullString(image['#text']))) {
            continue
        }
        const url = album.image[album.image.length - 1]?.['#text']
        if (url === undefined) {
            continue
        }
        albums.push({
            name: `${album.artist} - ${album.name}`,
            url: /\/([0-9a-f]{32})\.png$/.exec(url)?.[1] ?? url
        })
    }
    return albums
}


export const searchLastFM: AlbumSearcher = async ({ key, query, signal }) => {
    const params = new URLSearchParams({
        method: 'album.search',
        format: 'json',
        api_key: key,
        album: query
    })
    const url = `https://ws.audioscrobbler.com/2.0/?${params}`

    let response: Response
    try {
        response = await fetch(url, { signal, credentials: 'omit' })
    }
    catch {
        return signal.aborted
            ? { tag: 'Aborted' }
            : { tag: 'Error', message: 'Network error sending request to Last.fm' }
    }
    if (!response.ok) {
        return { tag: 'Error', message: `Last.fm responded with ${response.status}` }
    }

    let result: unknown
    try {
        result = await response.json()
    }
    catch {
        return { tag: 'Error', message: 'Invalid data returned from Last.fm' }
    }

    if (!LastFMResult.guard(result)) {
        return { tag: 'Error', message: 'Invalid data returned from Last.fm' }
    }

    return {
        tag: 'Ok',
        albums: formatLastFMResult(result)
    }
}
