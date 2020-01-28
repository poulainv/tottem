import { UserProfile } from '../types'
import sections from './sections'

const profile: UserProfile = {
    firstname: 'Thinkerview',
    pictureUrl: '/images/profiles/thinkerview.jpg',
    biography: `Non officiel. ThinkerView est un laboratoire d'idées français indépendant. Il diffuse de longues entrevues sans montage, 
    avec des personnalités d'horizons différents. https://thinkerview.com 
    Chaque invité est convié à recommander une série de livres, les voici.`,
    label: 'non officiel',
    social: {
        website: 'https://thinkerview.com',
        youtube: 'https://www.youtube.com/channel/UCQgWpmt02UtJkyO32HGUASQ',
    },
    slug: 'thinkerview',
}

export default profile
