import { UserProfile } from '../../types'

const profile: UserProfile = {
    firstname: 'Thinkerview',
    pictureUrl: require('../../static/images/profiles/thinkerview.jpg'),
    biography: `ThinkerView est un laboratoire d'idées français indépendant. Il diffuse de longues entrevues sans montage, 
    avec des personnalités d'horizons différents. 
    Chaque invité est convié à recommander une série de livres, les voici.`,
    label: 'non officiel',
    social: {
        website: 'https://thinkerview.com',
        youtube: 'https://www.youtube.com/channel/UCQgWpmt02UtJkyO32HGUASQ',
    },
}

export default profile
