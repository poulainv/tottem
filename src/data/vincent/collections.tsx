import { Book, ICollection, Album, Movie, Item } from '../../types'

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

const papers: Item[] = [
    {
        collectionId: '13',
        type: 'paper',
        author: 'Joe Edelman',
        imageUrl: require('../../static/images/articles/humantec.jpg'),
        title: 'Is Anything worth Maximizing',
        imageColor: '#0F1F1E',
        productUrl:
            'https://medium.com/what-to-build/is-anything-worth-maximizing-d11e648eb56f',
    },
    {
        collectionId: '13',
        type: 'paper',
        author: 'Maxime Beauchemin',
        imageUrl: require('../../static/images/articles/data-func.jpg'),
        title:
            'Functional Data Engineering — a modern paradigm for batch data processing',
        imageColor: '#3F78A6',
        productUrl:
            'https://medium.com/@maximebeauchemin/functional-data-engineering-a-modern-paradigm-for-batch-data-processing-2327ec32c42a',
    },
    {
        collectionId: '13',
        type: 'paper',
        author: 'Tristan Harris',
        imageUrl: require('../../static/images/articles/clickgoal.jpg'),
        title: 'Downgrading technology should be more challenged',
        imageColor: '#D30229',
        productUrl:
            'https://www.wired.com/story/tristan-harris-tech-is-downgrading-humans-time-to-fight-back/',
    },
    {
        collectionId: '13',
        type: 'paper',
        author: 'The Syndicate Post',
        imageUrl: require('../../static/images/articles/introvert.jpg'),
        title: 'Introverts: Inside The Mind of An Introverted Personality',
        imageColor: '#0F1F1E',
        productUrl:
            'https://medium.com/syndicate-post/introverts-your-guide-into-the-world-of-an-introverted-personality-98ff89703a1e',
    },
]

const people: Item[] = [
    {
        collectionId: '14',
        type: 'people',
        author: 'Center for Humane Technology',
        imageUrl: require('../../static/images/people/tristan.jpg'),
        title: 'Tristan Harris',
        imageColor: '#2A4034',
        productUrl: '',
    },
    {
        collectionId: '14',
        type: 'people',
        author: 'Ars Industrialis',
        imageUrl: require('../../static/images/people/stiegler.jpg'),
        title: 'Bernard Stiegler',
        imageColor: '#0D0D1A',
        productUrl: '',
    },
    {
        collectionId: '14',
        type: 'people',
        author: '',
        imageUrl: require('../../static/images/people/damasio.jpg'),
        title: 'Alain Damasio',
        imageColor: '#87160D',
        productUrl: '',
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
        id: '13',
        sectionId: '1',
        name: '**Papers,** worth reading',
        items: papers,
    },
    {
        id: '11',
        sectionId: '1',
        name: '**Albums,** on repeat',
        items: albums,
    },
    {
        id: '14',
        sectionId: '1',
        name: '**Influencers,** that get me inspired',
        items: people,
    },
    {
        id: '12',
        sectionId: '1',
        name: '**Films,** that matter',
        items: movies,
    },
]

export default collections
