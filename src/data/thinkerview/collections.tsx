import { Item, ICollection } from '../../types'
import items from './items'

const keyBy = require('lodash.groupby')

const itemsByCollection = keyBy(items, (x: Item) => x.collectionId)

const collections: ICollection[] = [
    {
        id: '1',
        sectionId: '1',
        detail:
            'Thinkerview diffusé en direct le 11 septembre 2019, [lien de la vidéo](https://youtu.be/mx5QlspmmE8)',
        name:
            '**Eric Dénécé** - La France en danger : où en est le renseignement ? ',
        items: itemsByCollection['1'],
    },
    {
        id: '2',
        sectionId: '12',
        detail:
            'Thinkerview diffusé en direct le 5 septembre 2019,  [lien de la vidéo](https://youtu.be/_EFDjsMDlXU)',
        name:
            '**Vikash Dhorasoo** - Football : du pain, des jeux et des magouilles ?',
        items: itemsByCollection['2'],
    },
    {
        id: '3',
        sectionId: '3',
        detail:
            'Interview réalisé le 03/09/2019: [lien de la vidéo](https://youtu.be/Uj83ZmfT4Dw)',
        name: "**Maxime Renahy** - DGSE : l'impuissance de l'état ?",
        items: itemsByCollection['3'],
    },
    {
        id: '4',
        sectionId: '3',
        detail:
            'Interview réalisé le 08/07/2019: [lien de la vidéo](https://youtu.be/dejeVuL9-7c)',
        name:
            '**Frédéric Pierucci** - Alstom : la France vendue à la découpe ? ',
        items: itemsByCollection['4'],
    },
    {
        id: '5',
        sectionId: '3',
        detail:
            'Interview réalisé le 02/07/2019: [lien de la vidéo](https://youtu.be/5TbbV06LlP0)',
        name: '**Pierre Conesa** - Arabie Saoudite, un pays protégé ?',
        items: itemsByCollection['5'],
    },
    {
        id: '6',
        sectionId: '4',
        detail:
            'Interview réalisé le 25/06/2019: [lien de la vidéo](https://youtu.be/9iuBVin9oOk)',
        name:
            "**Laurent Alexandre et Philippe Bihouix** - Débat : L'avenir de l'humanité ?",
        items: itemsByCollection['6'],
    },
    {
        id: '7',
        sectionId: '2',
        detail:
            'Interview réalisé le 14/06/2019: [lien de la vidéo](https://youtu.be/sIJd1kuR2Ps)',
        name: '**Jean Ziegler** - Pourquoi il faut détruire le capitalisme ?',
        items: itemsByCollection['7'],
    },
    {
        id: '8',
        sectionId: '1',
        detail:
            'Interview réalisé le 04/06/2019: [lien de la vidéo](https://youtu.be/DnHUyRfY3Wc)',
        name: '**Monique Pinçon-Charlot** - Casse sociale, le début ?',
        items: itemsByCollection['8'],
    },
    {
        id: '9',
        sectionId: '2',
        detail:
            'Interview réalisé le 17/05/2019: [lien de la vidéo](https://youtu.be/uSSFmNHgJQQ)',
        name: "**Barbara Stiegler** - S'adapter à une société malade ?",
        items: itemsByCollection['9'],
    },
    {
        id: '10',
        sectionId: '2',
        detail:
            'Interview réalisé le 10/05/2019: [lien de la vidéo](https://youtu.be/M5_v9ld_LVc)',
        name: '**Coralie Delaume** - Union Européenne pour ou contre ?',
        items: itemsByCollection['10'],
    },
    {
        id: '11',
        sectionId: '2',
        detail:
            'Interview réalisé le 06/05/2019: [lien de la vidéo](https://youtu.be/9y3aC0LruiQ)',
        name: '**Jean-Luc Mélenchon** - Face à la réalité ?',
        items: itemsByCollection['11'],
    },
    {
        id: '12',
        sectionId: '2',
        detail:
            'Interview réalisé le 17/04/2019: [lien de la vidéo](https://youtu.be/qYCfx2xFMjE)',
        name:
            "**Bernard Stiegler** - Etat d'urgence, géopolitique, Médias, Gilets Jaunes",
        items: itemsByCollection['12'],
    },
    {
        id: '13',
        sectionId: '2',
        detail:
            'Interview réalisé le 12/04/2019: [lien de la vidéo](https://youtu.be/XK2dsgJWqgk)',
        name:
            '**Champagne, Duplessy et Fontaine** - Investigation sans filtre ?',
        items: itemsByCollection['13'],
    },
    {
        id: '14',
        sectionId: '2',
        detail:
            'Interview réalisé le 11/04/2019: [lien de la vidéo](https://youtu.be/a7KapmsJQOE)',
        name: "**Alain Damasio** - L'intuition de la science-fiction ?",
        items: itemsByCollection['14'],
    },
    {
        id: '15',
        sectionId: '4',
        detail:
            'Interview réalisé le 19/09/2018: [lien de la vidéo](https://youtu.be/a7KapmsJQOE)',
        name: '**Yannick Rousselet** - Greenpeace : menaces nucléaire ?',
        items: itemsByCollection['15'],
    },
    {
        id: '16',
        sectionId: '2',
        detail:
            'Interview réalisé le 19/09/2018: [lien de la vidéo](https://www.youtube.com/watch?v=jiyMlZauB8c)',
        name: "**Edgar Morin** - L'effondrement ?",
        items: itemsByCollection['16'],
    },
    {
        id: '17',
        sectionId: '3',
        detail:
            'Interview réalisé le 27/03/2019: [lien de la vidéo](https://youtu.be/9QePE_pAP9I)',
        name:
            '**Caroline Galacteros** - Géopolitique : cynisme et bons sentiments ?',
        items: itemsByCollection['17'],
    },
    {
        id: '18',
        sectionId: '4',
        detail:
            'Interview réalisé le 20/03/2019: [lien de la vidéo](https://youtu.be/2oFARgqG0NA)',
        name: '**Gaël Giraud** - Tsunami financier, désastre humanitaire ?',
        items: itemsByCollection['18'],
    },
    {
        id: '19',
        sectionId: '5',
        detail:
            'Interview réalisé le 20/03/2019: [lien de la vidéo](https://www.youtube.com/watch?v=lNS7tA7Nhkw)',
        name: '**Noam Anouar** - Lucidité face aux terrorismes ?',
        items: itemsByCollection['19'],
    },
    {
        id: '20',
        sectionId: '2',
        detail:
            'Interview réalisé le 25/02/2019: [lien de la vidéo](https://www.youtube.com/watch?v=tRl9_q2ytI8)',
        name: '**François Boulot** - Gilets Jaunes : Avant la révolution',
        items: itemsByCollection['20'],
    },
    {
        id: '21',
        sectionId: '2',
        detail:
            'Interview réalisé le 25/02/2019: [lien de la vidéo](https://youtu.be/a7KapmsJQOE)',
        name:
            '**Francis Dupuis-Déri** - Démocratie : Marketing politique pour les pauvres?',
        items: itemsByCollection['21'],
    },
    {
        id: '22',
        sectionId: '2',
        detail:
            'Interview réalisé le 18/02/2019: [lien de la vidéo](https://www.youtube.com/watch?v=GPfXLUThC6M)',
        name: '**François Bégaudeau** : Gilets Jaunes, Populisme, Bourgeois ?',
        items: itemsByCollection['22'],
    },
    {
        id: '23',
        sectionId: '4',
        detail:
            'Interview réalisé le 12/02/2019: [lien de la vidéo](https://www.youtube.com/watch?v=NQkjhugvekI)',
        name:
            '**Jean-Marc Jancovici et Philippe Bihouix** : Croissance et Effondrement',
        items: itemsByCollection['23'],
    },
    {
        id: '24',
        sectionId: '2',
        detail:
            'Interview réalisé le 18/02/2019: [lien de la vidéo](https://www.youtube.com/watch?v=bWlDm9BuB-s)',
        name: '**Khalid Essa**: Taxi un métier en danger ?',
        items: itemsByCollection['24'],
    },
    {
        id: '25',
        sectionId: '1',
        detail:
            'Interview réalisé le 18/02/2019: [lien de la vidéo](https://www.youtube.com/watch?v=hbnzQtLS4T8)',
        name: "**Yánis Varoufákis**, la fin de l'Europe et de l'Euro ?",
        items: itemsByCollection['25'],
    },
    {
        id: '26',
        sectionId: '2',
        detail:
            'Interview réalisé le 17/01/2019: [lien de la vidéo](https://www.youtube.com/watch?v=e5vAzJpyvCI)',
        name:
            '**Denis Robert** - Les milliardaires gavés au sang des gilets jaunes ?',
        items: itemsByCollection['26'],
    },
    {
        id: '27',
        sectionId: '3',
        detail:
            'Interview réalisé le 18/12/2018: [lien de la vidéo](https://www.youtube.com/watch?v=iVEdbIb1xQw)',
        name:
            "**Alekseï Pouchkov** - Futur de l'ordre mondial, la menace russe ?",
        items: itemsByCollection['27'],
    },
    {
        id: '28',
        sectionId: '2',
        detail:
            'Interview réalisé le 10/12/2018: [lien de la vidéo](youtube.com/watch?v=fz-yQJmmoG8)',
        name:
            '**Jean-Christophe Picard** Corruption : Maladie de la France ? Anticor sans filtre',
        items: itemsByCollection['28'],
    },
    {
        id: '29',
        sectionId: '2',
        detail:
            'Interview réalisé le 27/11/2018: [lien de la vidéo](https://www.youtube.com/watch?v=I6zzV4b3nDU)',
        name: "**Jérémy Ferrari** - La révolte par l'humour ?",
        items: itemsByCollection['29'],
    },
    {
        id: '30',
        sectionId: '3',
        detail:
            'Interview réalisé le 21/11/2018: [lien de la vidéo](https://www.youtube.com/watch?v=TQPjPeeP9dI)',
        name: '**Kémi Séba** : Panafricanisme 2.0 ?',
        items: itemsByCollection['30'],
    },
    {
        id: '31',
        sectionId: '6',
        detail:
            'Interview réalisé le 12/11/2018: [lien de la vidéo](https://www.youtube.com/watch?v=Iy5HMGIFpSI)',
        name:
            '**Daniel Schneidermann** - Autopsie du Journalisme de Hitler à Trump',
        items: itemsByCollection['31'],
    },
    {
        id: '32',
        sectionId: '7',
        detail:
            'Interview réalisé le 08/11/2018: [lien de la vidéo](https://www.youtube.com/watch?v=VzeOnBRzDik)',
        name:
            "**Éric Sadin** — L'asservissement par l'Intelligence Artificielle ?",
        items: itemsByCollection['32'],
    },
    {
        id: '33',
        sectionId: '2',
        detail:
            'Interview réalisé le 07/11/2018: [lien de la vidéo](https://www.youtube.com/watch?v=6adEOQR3ea4)',
        name: '**Emmanuel Todd** - Trahison des élites françaises ?',
        items: itemsByCollection['33'],
    },
    {
        id: '34',
        sectionId: '7',
        detail:
            'Interview réalisé le 18/10/2018: [lien de la vidéo](https://www.youtube.com/watch?v=Xmy3_QIGOe4)',
        name: "**Jérémie Zimmermann** - 1984, un manuel d'instructions ?",
        items: itemsByCollection['34'],
    },
    {
        id: '35',
        sectionId: '2',
        detail:
            'Interview réalisé le 02/10/2018: [lien de la vidéo](https://www.youtube.com/watch?v=E7vscTxD308)',
        name: '**Tancrède Ramonet** - Anarchie VS Capitalisme ?',
        items: itemsByCollection['36'],
    },
    {
        id: '36',
        sectionId: '4',
        detail:
            'Interview réalisé le 21/09/2018: [lien de la vidéo](https://www.youtube.com/watch?v=lMJbD7Yjfuc)',
        name: '**Isabelle Attard** - Ex-députée écolo : sans langue de bois ?',
        items: itemsByCollection['36'],
    },
    {
        id: '99',
        sectionId: '2',
        detail:
            'Interview réalisé le 30/11/2018: [lien de la vidéo](https://www.youtube.com/watch?v=oEG7QQKZ3jQ)',
        name: '**Carbon de Seze** - Une Justice sous Macron ?',
        items: itemsByCollection['99'],
    },
    {
        id: '100',
        sectionId: '2',
        detail: 'Interview réalisé le 22/01/2019',
        name: '**Vincent Cespedes** - Gilets Jaunes : Comprendre la violence ?',
        items: itemsByCollection['100'],
    },
    {
        id: '101',
        sectionId: '3',
        detail: 'Interview réalisé le 18/11/2018',
        name:
            '**Général Vincent Desportes** - Armée française : Quelle stratégie ?',
        items: itemsByCollection['101'],
    },
    {
        id: '102',
        sectionId: '3',
        detail:
            'Interview réalisé le 17/09/2019: [lien de la vidéo](https://youtu.be/2mor2qort4U)',
        name:
            '**Olivier Marleix** - Guerre économique sans pitié pour la France ?',
        items: itemsByCollection['102'],
    },
    {
        id: '103',
        sectionId: '3',
        detail:
            'Interview réalisé le 20/09/2019: [lien de la vidéo](https://youtu.be/_GONFUveBH0)',
        name: '**Inconnu** - DGSE : Face à la réalité ?',
        items: itemsByCollection['103'],
    },
    {
        id: '104',
        sectionId: '1',
        detail:
            'Interview réalisé le 25/09/2019: [lien de la vidéo](https://youtu.be/-J_2tNIA4cI)',
        name: '**Joseph Stiglitz** - Un prix Nobel face au krach à venir ?',
        items: itemsByCollection['104'],
    },
    {
        id: '105',
        sectionId: '4',
        detail:
            'Interview réalisé le 27/09/2019: [lien de la vidéo](https://youtu.be/tUml_4KZKhk)',
        name:
            '**Jouzel & Larrouturou** - Le climat survivra-t-il au capitalisme ?',
        items: itemsByCollection['105'],
    },
]

export default collections
