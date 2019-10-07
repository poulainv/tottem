import { ISection } from '../../types'

const sections: ISection[] = [
    {
        id: '1',
        collections: [
            {
                id: '200',
                name: 'To Read',
                date: new Date('2019-10-01T12:00:00'),
                items: [
                    {
                        collectionId: '200',
                        type: 'book',
                        note: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/51ayZYs05ZL._SX324_BO1,204,203,200_.jpg',
                        productUrl:
                            'http://www.amazon.com/Amusing-Ourselves-Death-Discourse-Business/dp/014303653X',
                        title: 'Amusing Ourselves to Death',
                        author: 'Neil Postman',
                    },
                    {
                        collectionId: '200',
                        type: 'book',
                        note: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/51vz4NZuK3L._SX322_BO1,204,203,200_.jpg',
                        productUrl:
                            'http://www.amazon.com/Technopoly-The-Surrender-Culture-Technology/dp/0679745408',
                        title: 'Technopoly',
                        author: 'Neil Postman',
                    },
                    {
                        collectionId: '200',
                        type: 'book',
                        note: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/512-B-1yXuL._SX331_BO1,204,203,200_.jpg',
                        productUrl:
                            'http://www.amazon.com/Influence-Psychology-Persuasion-Revised-Edition/dp/006124189X',
                        title: 'Influence: The Psychology of Persuasion',
                        author: 'Robert B. Cialdini',
                    },
                    {
                        collectionId: '200',
                        type: 'book',
                        note: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/41%2By9pBLcJL._SX327_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/What-Money-Cant-Buy-Markets/dp/0374533652',
                        title: "What Money Can't buy ?",
                        author: 'Michael J. Sandel',
                    },
                    {
                        collectionId: '200',
                        type: 'paper',
                        note: '',
                        imageUrl: '',
                        productUrl:
                            'https://www.cc.gatech.edu/~beki/cs4001/Winner.pdf',
                        title: 'Do Artifacts Have Politics',
                        author: 'Langdon Winner',
                    },
                    {
                        collectionId: '200',
                        type: 'book',
                        note: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/51ZqnqI0bcL._SX306_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.fr/Society-Spectacle-Guy-Debord/dp/0934868077',
                        title: 'Society of the Spectacle',
                        author: 'Guy Debord',
                    },
                ],
            },
            {
                id: '201',
                name: 'To watch / listen',
                date: new Date('2019-10-01T12:00:00'),
                items: [
                    {
                        collectionId: '201',
                        type: 'video',
                        note: '',
                        imageUrl: '',
                        productUrl:
                            'https://www.youtube.com/watch?v=8CrOL-ydFMI',
                        title: 'This is Water',
                        author: 'David Foster Wallace',
                    },
                    {
                        collectionId: '201',
                        type: 'paper',
                        author: 'Joe Edelman',
                        imageUrl: require('../../static/images/articles/clickgoal.jpg'),
                        title: 'Is Anything worth Maximizing',
                        productUrl:
                            'https://medium.com/what-to-build/is-anything-worth-maximizing-d11e648eb56f',
                    },
                    {
                        collectionId: '201',
                        type: 'podcast',
                        note: '',
                        imageUrl:
                            'https://samharris.org/wp-content/uploads/legacy-site/socialmedia.png',
                        productUrl:
                            'https://samharris.org/podcasts/what-is-technology-doing-to-us/',
                        title: 'What is technology doing with us?',
                        author: 'Tristan Harris',
                    },
                    {
                        collectionId: '201',
                        type: 'video',
                        note: '',
                        imageUrl: '',
                        productUrl:
                            'https://www.ted.com/talks/damon_horowitz?language=en',
                        title:
                            'Why Silicon Valley Needs a Moral Operating System',
                        author: 'Damon Horowitz’s',
                    },
                    {
                        collectionId: '201',
                        type: 'video',
                        note: '',
                        imageUrl: '',
                        productUrl:
                            'https://www.youtube.com/watch?v=alasBxZsb40',
                        title: 'Aldous Huxley Interview',
                        author: 'Miek Wallace',
                    },
                    {
                        collectionId: '201',
                        type: 'movie',
                        note: '',
                        imageUrl:
                            'https://i1.wp.com/metro.co.uk/wp-content/uploads/2018/03/sei_3127600.jpg?quality=90&strip=all&zoom=1&resize=540%2C363&ssl=1',
                        productUrl:
                            'https://www.netflix.com/de-en/title/70264888',
                        title: 'Nosedive',
                        author: 'Black Mirror',
                    },
                ],
            },
        ],
        name: 'Minimal Reading List',
        index: 0,
    },
    {
        id: '2',
        collections: [],
        name: 'Extended Reading List',
        index: 1,
    },
]

export default sections
