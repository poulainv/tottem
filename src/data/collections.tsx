import { Book, ICollection, Album } from '../types'

const albums: Album[] = [
    {
        author: 'Jon Hopkins',
        imageUrl: require('../static/images/albums/hopkins.jpg'),
        title: 'Immunity',
        imageColor: '#1A1728',
        spotifyUrl: '',
    },
    {
        author: 'Moderat',
        imageUrl: require('../static/images/albums/moderat.jpg'),
        title: 'II',
        imageColor: '#CFE3E2',
        spotifyUrl: '',
    },
    {
        author: 'Nils Frahm',
        imageUrl: require('../static/images/albums/spaces.jpg'),
        title: 'Spaces',
        imageColor: 'white',
        spotifyUrl: '',
    },
    {
        author: 'Nils Frahm',
        imageUrl: require('../static/images/albums/melody.jpg'),
        title: 'All Melody',
        imageColor: '#4A1514',
        spotifyUrl: '',
    },
]

const books: Book[] = [
    {
        author: 'Yvon Chouinard',
        imageUrl: require('../static/images/books/patagonia.jpg'),
        amazonUrl:
            'https://www.amazon.fr/Let-People-Surfing-Education-Businessman-Including/dp/0143109677',
        title: 'Let my people go Surfing',
        imageColor: '#6DA03B',
    },
    {
        author: 'Frederic Laloux',
        imageUrl: require('../static/images/books/reinventing.jpg'),
        amazonUrl: '',
        title: 'Reinventing Organizations',
        imageColor: '#D6D6D6',
    },
    {
        author: 'Barry Schwartz',
        imageUrl: require('../static/images/books/paradox.jpg'),
        amazonUrl: '',
        title: 'The Paradox of Choice',
        imageColor: '#FBDF50',
    },
    {
        author: 'Matthiew Crawford',
        imageUrl: require('../static/images/books/eloge.jpg'),
        amazonUrl: '',
        title: "L'égole du carburateur",
        imageColor: '#555146',
    },
]

export const collections: ICollection[] = [
    {
        name: '**Books,** that get me inspired',
        items: books,
    },
    {
        name: '**Albums,** on repeat',
        items: albums,
    },
]

export default collections
