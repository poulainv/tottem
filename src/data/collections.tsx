import { Book, ICollection, Album, Movie } from '../types'

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
        title: `L'égole du carburateur`,
        imageColor: '#555146',
    },
]

const movies: Movie[] = [
    {
        author: 'Stanley Kubrick',
        imageUrl: require('../static/images/movies/pathsofglory.jpg'),
        amazonUrl:
            'https://www.amazon.fr/Let-People-Surfing-Education-Businessman-Including/dp/0143109677',
        title: 'Les sentiers de la gloire',
        imageColor: '#000302',
    },
    {
        author: 'Sergio Leone',
        imageUrl: require('../static/images/movies/goodbadugly.jpg'),
        amazonUrl: '',
        title: 'Le bon, la brute et le truand',
        imageColor: '#D1D21B',
    },
    {
        author: 'Peter Jackson',
        imageUrl: require('../static/images/movies/seigneur.jpg'),
        amazonUrl: '',
        title: 'Le seigneur des anneaux : Le retour du roi',
        imageColor: '#BEBE91',
    },
    {
        author: 'Christopher Nolan',
        imageUrl: require('../static/images/movies/interstellar.jpg'),
        amazonUrl: '',
        title: 'Interstellar',
        imageColor: '#DAE5E8',
    },
]

export const collections: ICollection[] = [
    {
        type: 'books',
        name: '**Books,** that get me inspired',
        items: books,
    },
    {
        type: 'albums',
        name: '**Albums,** on repeat',
        items: albums,
    },
    {
        type: 'movies',
        name: '**Films,** that matter',
        items: movies,
    },
]

export default collections
