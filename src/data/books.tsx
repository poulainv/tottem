import { Book } from '../types'

const books: Book[] = [
    {
        author: 'Yvon Chouinard',
        imageUrl: require('../static/images/books/patagonia.jpg'),
        productUrl:
            'https://www.amazon.fr/Let-People-Surfing-Education-Businessman-Including/dp/0143109677',
        title: 'Let my people go Surfing',
    },
    {
        author: 'Frederic Laloux',
        imageUrl: require('../static/images/books/reinventing.jpg'),
        productUrl: '',
        title: 'Reinventing Organizations',
    },
    {
        author: 'Barry Schwartz',
        imageUrl: require('../static/images/books/paradox.jpg'),
        productUrl: '',
        title: 'The Paradox of Choice',
    },
    {
        author: 'Matthiew Crawford',
        imageUrl: require('../static/images/books/eloge.jpg'),
        productUrl: '',
        title: "L'égole du carburateur",
    },
]

export default books
