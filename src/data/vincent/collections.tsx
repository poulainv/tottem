import { Book, ICollection, Album, Movie } from '../../types'

const albums: Album[] = [
    {
        collectionId: '10',
        type: 'album',
        author: 'Jon Hopkins',
        imageUrl: require('../static/images/albums/hopkins.jpg'),
        title: 'Immunity',
        imageColor: '#1A1728',
        productUrl: '',
    },
    {
        collectionId: '10',
        type: 'album',
        author: 'Moderat',
        imageUrl: require('../static/images/albums/moderat.jpg'),
        title: 'II',
        imageColor: '#CFE3E2',
        productUrl: '',
    },
    {
        collectionId: '10',
        type: 'album',
        author: 'Nils Frahm',
        imageUrl: require('../static/images/albums/spaces.jpg'),
        title: 'Spaces',
        imageColor: 'white',
        productUrl: '',
    },
    {
        collectionId: '10',
        type: 'album',
        author: 'Nils Frahm',
        imageUrl: require('../static/images/albums/melody.jpg'),
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
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51LX032xQUL._SX307_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Let-People-Surfing-Education-Businessman-Including/dp/0143109677',
        title: 'Let my people go Surfing',
        imageColor: '#6DA03B',
    },
    {
        collectionId: '11',
        type: 'book',
        author: 'Frederic Laloux',
        imageUrl: require('../static/images/books/reinventing.jpg'),
        productUrl: '',
        title: 'Reinventing Organizations',
        imageColor: '#D6D6D6',
    },
    {
        collectionId: '11',
        type: 'book',
        author: 'Barry Schwartz',
        imageUrl: require('../static/images/books/paradox.jpg'),
        productUrl: '',
        title: 'The Paradox of Choice',
        imageColor: '#FBDF50',
    },
    {
        collectionId: '11',
        type: 'book',
        author: 'Matthiew Crawford',
        imageUrl: require('../static/images/books/eloge.jpg'),
        productUrl: '',
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
        id: '10',
        name:
            '**Eric Dénécé** - La France en danger : où en est le renseignement ? [Vidéo](www.google.com)',
        items: books,
    },
    {
        id: '11',
        name:
            '**Vikash Dhorasoo,** football : du pain, des jeux et des magouilles ?',
        items: albums,
    },
    {
        id: '12',
        name: '**Films,** that matter',
        items: movies,
    },
]

export default collections
