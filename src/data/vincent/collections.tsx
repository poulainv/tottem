import { Book, ICollection, Album, Movie } from '../../types'

const albums: Album[] = [
    {
        collectionId: '10',
        type: 'album',
        author: 'Jon Hopkins',
        imageUrl: require('../../static/images/albums/hopkins.jpg'),
        title: 'Immunity',
        imageColor: '#1A1728',
        productUrl: '',
    },
    {
        collectionId: '10',
        type: 'album',
        author: 'Moderat',
        imageUrl: require('../../static/images/albums/moderat.jpg'),
        title: 'II',
        imageColor: '#CFE3E2',
        productUrl: '',
    },
    {
        collectionId: '10',
        type: 'album',
        author: 'Nils Frahm',
        imageUrl: require('../../static/images/albums/spaces.jpg'),
        title: 'Spaces',
        imageColor: 'white',
        productUrl: '',
    },
    {
        collectionId: '10',
        type: 'album',
        author: 'Nils Frahm',
        imageUrl: require('../../static/images/albums/melody.jpg'),
        title: 'All Melody',
        imageColor: '#4A1514',
        productUrl: '',
    },
]

const books: Book[] = [
    {
        collectionId: '11',
        type: 'book',
        author: 'Yvon Chouinard',
        imageUrl: require('../../static/images/books/patagonia.jpg'),
        productUrl:
            'https://www.amazon.fr/Let-People-Surfing-Education-Businessman-Including/dp/0143109677',
        title: 'Let my people go Surfing',
        imageColor: '#6DA03B',
    },
    {
        collectionId: '11',
        type: 'book',
        author: 'Frederic Laloux',
        imageUrl: require('../../static/images/books/reinventing.jpg'),
        productUrl: '',
        title: 'Reinventing Organizations',
        imageColor: '#D6D6D6',
    },
    {
        collectionId: '11',
        type: 'book',
        author: 'Barry Schwartz',
        imageUrl: require('../../static/images/books/paradox.jpg'),
        productUrl: '',
        title: 'The Paradox of Choice',
        imageColor: '#FBDF50',
    },
    {
        collectionId: '11',
        type: 'book',
        author: 'Matthiew Crawford',
        imageUrl: require('../../static/images/books/eloge.jpg'),
        productUrl: '',
        title: `L'égole du carburateur`,
        imageColor: '#555146',
    },
]

const movies: Movie[] = [
    {
        collectionId: '12',
        type: 'movie',
        author: 'Stanley Kubrick',
        imageUrl: require('../../static/images/movies/pathsofglory.jpg'),
        productUrl:
            'https://www.amazon.fr/Let-People-Surfing-Education-Businessman-Including/dp/0143109677',
        title: 'Les sentiers de la gloire',
        imageColor: '#000302',
    },
    {
        collectionId: '12',
        type: 'movie',
        author: 'Sergio Leone',
        imageUrl: require('../../static/images/movies/goodbadugly.jpg'),
        productUrl: '',
        title: 'Le bon, la brute et le truand',
        imageColor: '#D1D21B',
    },
    {
        collectionId: '12',
        type: 'movie',
        author: 'Peter Jackson',
        imageUrl: require('../../static/images/movies/seigneur.jpg'),
        productUrl: '',
        title: 'Le seigneur des anneaux : Le retour du roi',
        imageColor: '#BEBE91',
    },
    {
        collectionId: '12',
        type: 'movie',
        author: 'Christopher Nolan',
        imageUrl: require('../../static/images/movies/interstellar.jpg'),
        productUrl: '',
        title: 'Interstellar',
        imageColor: '#DAE5E8',
    },
]

export const collections: ICollection[] = [
    {
        id: '10',
        sectionId: '1',
        name: '**Books,** that get me inspired',
        items: books,
    },
    {
        id: '11',
        sectionId: '1',
        name: '**Albums,** on repeat',
        items: albums,
    },
    {
        id: '12',
        sectionId: '1',
        name: '**Films,** that matter',
        items: movies,
    },
]

export default collections
