import { UserProfile } from '../../types'

const profile: UserProfile = {
    firstname: 'Center for Humane Technology',
    pictureUrl: require('../../static/images/profiles/humanetech.png'),
    biography: `The Center for Humane Technology (CHT) is an independent nonprofit 
    organization whose aim is to drive a comprehensive shift toward humane technology by changing the way 
    technologists think about their work and how they build products.
    We’re creating the conditions for a new race to the top to realign technology with humanity.`,
    social: {
        website: 'https://humanetech.com/',
        youtube: 'https://www.youtube.com/channel/UCQgWpmt02UtJkyO32HGUASQ',
    },
}

export default profile
