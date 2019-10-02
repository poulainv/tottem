import { Item } from '../../types'

const items: Item[] = [
    // Musique
    {
        collectionId: '10',
        type: 'album',
        author: 'Jon Hopkins',
        imageUrl: require('../../static/images/albums/hopkins.jpg'),
        title: 'Immunity',
        productUrl: '',
    },
    {
        collectionId: '10',
        type: 'album',
        author: 'Moderat',
        imageUrl: require('../../static/images/albums/moderat.jpg'),
        title: 'II',
        productUrl: '',
    },
    {
        collectionId: '10',
        type: 'album',
        author: 'Nils Frahm',
        imageUrl: require('../../static/images/albums/spaces.jpg'),
        title: 'Spaces',
        productUrl: '',
    },
    {
        collectionId: '10',
        type: 'album',
        author: 'Nils Frahm',
        imageUrl: require('../../static/images/albums/melody.jpg'),
        title: 'All Melody',
        productUrl: '',
    },

    // GENERAL

    {
        collectionId: '11',
        type: 'book',
        author: 'Yvon Chouinard',
        imageUrl: require('../../static/images/books/patagonia.jpg'),
        productUrl:
            'https://www.amazon.fr/Let-People-Surfing-Education-Businessman-Including/dp/0143109677',
        title: 'Let my people go Surfing',
    },
    {
        collectionId: '11',
        type: 'book',
        author: 'Frederic Laloux',
        imageUrl: require('../../static/images/books/reinventing.jpg'),
        productUrl: '',
        title: 'Reinventing Organizations',
    },
    {
        collectionId: '11',
        type: 'book',
        author: 'Barry Schwartz',
        imageUrl: require('../../static/images/books/paradox.jpg'),
        productUrl: '',
        title: 'The Paradox of Choice',
    },
    {
        collectionId: '11',
        type: 'book',
        author: 'Matthiew Crawford',
        imageUrl: require('../../static/images/books/eloge.jpg'),
        productUrl: '',
        title: `L'égole du carburateur`,
    },
    {
        collectionId: '11',
        type: 'book',
        author: 'Cennydd Bowles',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/31W0m1isq%2BL._SX322_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.com/Future-Ethics-Cennydd-Bowles/dp/1999601912',
        title: `Future Ethics`,
    },
    {
        collectionId: '11',
        type: 'book',
        author: 'Jason Fried',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/81nvF-p7odL.jpg',
        productUrl: 'https://www.amazon.fr/dp/B07FQYGWCS',
        title: `It Doesn't Have to Be Crazy at Work`,
    },
    {
        collectionId: '12',
        type: 'movie',
        author: 'Stanley Kubrick',
        imageUrl: require('../../static/images/movies/pathsofglory.jpg'),
        productUrl:
            'https://www.amazon.fr/Let-People-Surfing-Education-Businessman-Including/dp/0143109677',
        title: 'Les sentiers de la gloire',
    },
    {
        collectionId: '12',
        type: 'movie',
        author: 'Sergio Leone',
        imageUrl: require('../../static/images/movies/goodbadugly.jpg'),
        productUrl: '',
        title: 'Le bon, la brute et le truand',
    },
    {
        collectionId: '12',
        type: 'movie',
        author: 'Peter Jackson',
        imageUrl: require('../../static/images/movies/seigneur.jpg'),
        productUrl: '',
        title: 'Le seigneur des anneaux : Le retour du roi',
    },
    {
        collectionId: '12',
        type: 'movie',
        author: 'Christopher Nolan',
        imageUrl: require('../../static/images/movies/interstellar.jpg'),
        productUrl: '',
        title: 'Interstellar',
    },
    {
        collectionId: '16',
        type: 'paper',
        author: 'Tristan Harris',
        imageUrl: require('../../static/images/articles/humantec.jpg'),
        title: 'Downgrading technology should be more challenged',
        productUrl:
            'https://medium.com/thrive-global/how-technology-hijacks-peoples-minds-from-a-magician-and-google-s-design-ethicist-56d62ef5edf3',
    },
    {
        collectionId: '16',
        type: 'video',
        author: 'Tristan Harris',
        imageUrl: require('../../static/images/artworks/video-placeholder.svg'),
        title:
            'How a handful of tech companies control billions of minds every day ',
        productUrl: 'https://www.youtube.com/watch?v=C74amJRp730',
    },
    {
        collectionId: '16',
        type: 'paper',
        author: 'Joe Edelman',
        imageUrl: require('../../static/images/articles/clickgoal.jpg'),
        title: 'Is Anything worth Maximizing',
        productUrl:
            'https://medium.com/what-to-build/is-anything-worth-maximizing-d11e648eb56f',
    },
    {
        collectionId: '16',
        type: 'podcast',
        author: '',
        imageUrl: require('../../static/images/podcasts/undivided.jpg'),
        title: 'Your Individed Attention',
        productUrl: '',
    },
    {
        collectionId: '16',
        type: 'paper',
        author: 'Tristan Harris',
        imageUrl: require('../../static/images/artworks/video-placeholder.svg'),
        title: 'It’s Time to Redesign the Attention Economy',
        productUrl:
            'https://medium.com/thrive-global/its-time-to-redesign-the-attention-economy-f9215a2210be',
    },
    {
        collectionId: '16',
        type: 'movie',
        author: 'Karim Amer & Jehane Noujaim',
        imageUrl:
            'http://fr.web.img6.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/19/07/16/09/30/5358083.jpg',
        title: "The Great Hack : L'Affaire Cambridge Analytica",
        productUrl: 'https://www.youtube.com/watch?v=iX8GxLP1FHo',
    },
    {
        collectionId: '16',
        type: 'book',
        author: 'Cennydd Bowles',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/31W0m1isq%2BL._SX322_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.com/Future-Ethics-Cennydd-Bowles/dp/1999601912',
        title: `Future Ethics`,
    },
    {
        collectionId: '16',
        type: 'movie',
        author: 'Thomas Huchon',
        imageUrl:
            'https://s3-eu-west-1.amazonaws.com/boutiquestorage.arte.tv/prod/15686_vod_thumb_114502.jpg',
        productUrl:
            'https://boutique.arte.tv/detail/Comment_trump_manipule_Amerique',
        title: `Comment Trump a manipulé l'Amérique`,
    },
    {
        collectionId: '16',
        type: 'video',
        author: 'Bernard Stiegler',
        imageUrl: require('../../static/images/artworks/video-placeholder.svg'),
        productUrl: 'https://www.youtube.com/watch?v=nrxR2jmaycY',
        title: `Crise du désir`,
    },
    {
        collectionId: '13',
        type: 'paper',
        author: 'Maxime Beauchemin',
        imageUrl: require('../../static/images/articles/data-func.jpg'),
        title:
            'Functional Data Engineering — a modern paradigm for batch data processing',
        productUrl:
            'https://medium.com/@maximebeauchemin/functional-data-engineering-a-modern-paradigm-for-batch-data-processing-2327ec32c42a',
    },
    {
        collectionId: '13',
        type: 'paper',
        author: 'The Syndicate Post',
        imageUrl: require('../../static/images/articles/introvert.jpg'),
        title: 'Introverts: Inside The Mind of An Introverted Personality',
        productUrl:
            'https://medium.com/syndicate-post/introverts-your-guide-into-the-world-of-an-introverted-personality-98ff89703a1e',
    },
    {
        collectionId: '14',
        type: 'people',
        author: 'Center for Humane Technology',
        imageUrl: require('../../static/images/people/tristan.jpg'),
        title: 'Tristan Harris',
        productUrl: '',
    },
    {
        collectionId: '14',
        type: 'people',
        author: 'Ars Industrialis',
        imageUrl: require('../../static/images/people/stiegler.jpg'),
        title: 'Bernard Stiegler',
        productUrl: '',
    },
    {
        collectionId: '14',
        type: 'people',
        author: 'Patagonia Founder',
        imageUrl:
            'https://www.executivegrapevine.com/uploads/articles/Yvon_Chouinard.jpg',
        title: 'Yvon Chouinard',
        productUrl: 'https://fr.wikipedia.org/wiki/Yvon_Chouinard',
    },
    {
        collectionId: '14',
        type: 'people',
        author: 'Artist',
        imageUrl:
            'https://guitar.com/wp-content/uploads/2019/08/young-mark-knopfler-black-and-white@1400x1050.jpg',
        title: 'Mark Knopfler',
        productUrl:
            'https://open.spotify.com/artist/0FI0kxP0BWurTz8cB8BBug?si=CsfNbe_ZSJmG878dqvAaoA',
    },
    {
        collectionId: '14',
        type: 'people',
        author: 'Author',
        imageUrl: require('../../static/images/people/damasio.jpg'),
        title: 'Alain Damasio',
        productUrl: '',
    },
    {
        collectionId: '14',
        type: 'people',
        author: 'Basecamp Founder',
        imageUrl:
            'https://bridge24.com/wp-content/uploads/2017/06/jason-fried-2017.png',
        title: 'Jason Fried',
        productUrl: '',
    },
]

export default items
