import { UserProfile } from '../../types'

const profile: UserProfile = {
    firstname: 'Vincent',
    pictureUrl: require('../../static/images/profiles/vincent.png'),
    biography: `Hi ! My primary job is software engineer. 
    As soon as I am building things, I can't count hours anymore !   
    I try to figure out how technology can better support well-being and global challenges. 
    Here, I share only what get me inspired and give me energy.`,
    social: {
        github: 'https://github.com/poulainv',
        linkedin: 'https://www.linkedin.com/in/vincentpoulain/',
        mail: 'vincent.poulain2@gmail.com',
    },
}

export default profile
