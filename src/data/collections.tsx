import { Book, ICollection } from '../types'

const books: Book[] = [
    {
        author: 'Yvon Chouinard',
        imageUrl: require('../static/images/books/patagonia.jpg'),
        productUrl:
            'https://www.amazon.fr/Let-People-Surfing-Education-Businessman-Including/dp/0143109677',
        title: 'Let my people go Surfing',
        imageColor: '#6DA03B',
    },
    {
        author: 'Frederic Laloux',
        imageUrl: require('../static/images/books/reinventing.jpg'),
        productUrl: '',
        title: 'Reinventing Organizations',
        imageColor: '#D6D6D6',
    },
    {
        author: 'Barry Schwartz',
        imageUrl: require('../static/images/books/paradox.jpg'),
        productUrl: '',
        title: 'The Paradox of Choice',
        imageColor: '#FBDF50',
    },
    {
        author: 'Matthiew Crawford',
        imageUrl: require('../static/images/books/eloge.jpg'),
        productUrl: '',
        title: "L'égole du carburateur",
        imageColor: '#555146',
    },
]
export const collections: ICollection[] = [
    {
        name: '**Books,** that get me inspired',
        items: books,
    },
]

export default collections
