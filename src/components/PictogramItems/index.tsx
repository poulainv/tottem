import Book from './book.svg'
import Movie from './movie.svg'
import Album from './album.svg'
import Podcast from './podcast.svg'
import Repository from './repository.svg'
import Article from './article.svg'
import Video from './video.svg'
import Website from './website.svg'
import People from './people.svg'

const PictogramItems: { [index: string]: SvgrComponent } = {
    movie: Movie,
    album: Album,
    podcast: Podcast,
    repository: Repository,
    article: Article,
    video: Video,
    website: Website,
    people: People,
    book: Book,
}

export { PictogramItems }
