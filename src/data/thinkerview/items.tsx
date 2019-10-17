import { Item } from '../../types'

// A lot of items have been retrieved thanks to
// https://github.com/Killkitten/Thinkerview-Recommandations-lecture

const items: Item[] = [
    {
        collectionId: '1',
        title: "Le secret de l'occident",
        author: 'David Cosandey',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/5144kZ61XCL._SX294_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/secret-lOccident-th%C3%A9orie-g%C3%A9n%C3%A9rale-scientifique/dp/2081218712',
        type: 'book',
    },
    {
        collectionId: '1',
        title: 'Les nourritures terrestres',
        author: 'André Gide',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/91gK2w-BCLL.jpg',
        productUrl:
            'https://livre.fnac.com/a169499/Andre-Gide-Les-Nourritures-terrestres-Les-Nouvelles-nourritures',
        type: 'book',
    },
    {
        collectionId: '1',
        title: "Ode à l'homme qui fut la France",
        author: 'Romain Gary',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/812d3QDeFzL.jpg',
        productUrl:
            'https://livre.fnac.com/a1089211/Charles-de-Gaulle-Ode-a-l-homme-qui-fut-la-France-et-autres-textes-autour-du-general-de-Gaulle',
        type: 'book',
    },
    {
        collectionId: '2',
        title: 'Comme ses pieds',
        author: 'Vikash Dhorasoo',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41EM%2BJgmbRL._SX327_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Comme-ses-pieds-Vikash-Dhorasoo/dp/2021378780',
        type: 'book',
    },
    {
        collectionId: '2',
        title: 'Kahawa',
        author: 'Donald E. Westlake',
        note: '',
        imageUrl:
            'https://static.fnac-static.com/multimedia/Images/FR/NR/15/00/04/262165/1507-1/tsp20190515173107/Kahawa.jpg',
        productUrl:
            'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwia-cSd9dnkAhWlyYUKHb0RDSEQjRx6BAgBEAQ&url=https%3A%2F%2Flivre.fnac.com%2Fa13206872%2FWestlake-donald-Kahawa&psig=AOvVaw0SIBBltJ03s_hJufQI2Chv&ust=1568880440044714',
        type: 'book',
    },
    {
        collectionId: '2',
        title: 'La Perle',
        author: 'John Steinbeck',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/91UrIyhLUZL.jpg',
        productUrl:
            'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjzoqbF9dnkAhWryIUKHceSAU0QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.amazon.fr%2Fperle-John-Steinbeck%2Fdp%2F2070364283&psig=AOvVaw1rl2m30iacMCCYnP4fXP8m&ust=1568880525536997',
        type: 'book',
    },
    {
        collectionId: '2',
        title: 'Daniel Pennac',
        author: '',
        note: "Toute l'oeuvre de Daniel Pennac",
        imageUrl:
            'https://commons.wikimedia.org/wiki/File:Daniel_Pennac.jpg?uselang=fr',
        productUrl: 'https://fr.wikipedia.org/wiki/Daniel_Pennac',
        type: 'people',
    },
    {
        collectionId: '3',
        title: 'Au nom de tous les miens',
        author: 'Martin Gray',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/61TENjwVY8L.jpg',
        productUrl:
            'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj0sKHe_NnkAhXPAWMBHasmCT0QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.amazon.fr%2Fnom-tous-miens-Martin-GRAY%2Fdp%2F2266122215&psig=AOvVaw2YCcq4-lLNls1yKzbKyBTM&ust=1568882457045463',
        type: 'book',
    },
    {
        collectionId: '3',
        title: 'Un sac de billes',
        author: 'Joseph Joffo',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51LX032xQUL._SX307_BO1,204,203,200_.jpg',
        productUrl: '',
        type: 'book',
    },
    {
        collectionId: '3',
        title: 'Monique Pinçon-Charlot',
        author: '',
        note: "Toute l'oeuvre de Monique Pinçon-Charlot",
        imageUrl:
            'https://i1.wp.com/journal.ccas.fr/wp-content/uploads/sites/6/2018/11/63576_-_Monique-Pinc%CC%A7on-Charlot.jpg?resize=1024%2C678&ssl=1',
        productUrl: 'https://fr.wikipedia.org/wiki/Monique_Pin%C3%A7on-Charlot',
        type: 'people',
    },
    {
        collectionId: '3',
        title: "Là où est l'argent",
        author: 'Maxime Renahy',
        note: "Livre de l'invité",
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41oq2ePj9JL._SX318_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/LHomme-qui-sait-Maxime-Renahy/dp/235204751X',
        type: 'book',
    },
    {
        collectionId: '4',
        title: 'Le droit, nouvelle arme de guerre économique',
        author: 'Ali Laïdi',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/4141ACjhSeL._SX312_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/droit-nouvelle-arme-guerre-économique/dp/233011821X',
        type: 'book',
    },
    {
        collectionId: '4',
        title: "La Stratégie du choc : la montée d'un capitalisme du désastre",
        author: 'Naomi Klein',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41xNS52j9KL._SX303_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/stratégie-choc-montée-capitalisme-désastre/dp/2330026609',
        type: 'book',
    },
    {
        collectionId: '4',
        title: 'Vol MH370 : Une vie détournée',
        author: 'Ghislain Wattrelos',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51KhtaxlvjL._SX319_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Vol-MH370-Une-vie-détournée/dp/2081422239/ref=sr_1_1',
        type: 'book',
    },
    {
        collectionId: '4',
        title: 'Le piège américain',
        author: 'Frédéric Pierucci',
        note: "Livre de l'invité",
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/4160XLbg8yL._SX309_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/piège-américain-Frédéric-Pierucci/dp/2709664070/ref=sr_1_1',
        type: 'book',
    },
    {
        collectionId: '5',
        title: 'Hollywar : Hollywood, arme de propagande massive',
        author: 'Pierre Conesa',
        note: '',
        imageUrl:
            'https://images-eu.ssl-images-amazon.com/images/I/41qGPGYScIL.jpg',
        productUrl:
            'https://www.amazon.fr/Hollywar-monde-comme-Pierre-CONESA-ebook/dp/B07BYHJ3CJ',
        type: 'book',
    },
    {
        collectionId: '5',
        title:
            "Une histoire du wahhabisme : Comment l'islam sectaire est devenu l'islam",
        author: 'Hamadi Redissi',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51ZdRY8avLL._SX301_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/histoire-wahhabisme-Comment-lislam-sectai/dp/2757862081',
        type: 'book',
    },
    {
        collectionId: '6',
        title: 'Éloge du carburateur',
        author: 'Matthew Crawford',
        note: 'Livre recommandé par Philippe Bihouix',
        imageUrl:
            'https://images-eu.ssl-images-amazon.com/images/I/51PDX0NCtZL.jpg',
        productUrl: 'amazon.fr/dp/B01FT6H6LU',
        type: 'book',
    },
    {
        collectionId: '6',
        title: 'Technique et civilisation',
        author: 'Lewis Mumford',
        note: 'Livre recommandé par Philippe Bihouix',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51zLWuDXgPL._SX324_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Technique-civilisation-Lewis-Mumford/dp/2863646729',
        type: 'book',
    },
    {
        collectionId: '6',
        title: 'Une question de taille',
        author: 'Olivier Rey',
        note: 'Livre recommandé par Philippe Bihouix',
        imageUrl:
            'https://images-eu.ssl-images-amazon.com/images/I/31l1EXKZGEL.jpg',
        productUrl: 'https://www.amazon.fr/dp/B00N1RPF2M/',
        type: 'book',
    },
    {
        collectionId: '6',
        title:
            'The Case Against Education: Why the Education System Is a Waste of Time and Money',
        author: 'Bryan Caplan',
        note: 'Livre recommandé par Laurent Alexandre',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51sIijOXAKL._SX327_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Case-Against-Education-System-Waste/dp/0691174652',
        type: 'book',
    },
    {
        collectionId: '6',
        title: 'The Neuroscience of Intelligence',
        author: 'Richard J. Haier',
        note: 'Livre recommandé par Laurent Alexandre',
        imageUrl:
            'https://images-eu.ssl-images-amazon.com/images/I/51WuFOGJ8-L._SY346_.jpg',
        productUrl: 'https://www.amazon.fr/dp/B01N2PFJPO',
        type: 'book',
    },
    {
        collectionId: '6',
        title: 'AI Superpowers',
        author: 'Kai-Fu Lee',
        note: 'Livre recommandé par Laurent Alexandre',
        imageUrl:
            'https://images-eu.ssl-images-amazon.com/images/I/41-Ywqbf9DL.jpg',
        productUrl: 'https://www.amazon.fr/dp/B0795DNWCF',
        type: 'book',
    },
    {
        collectionId: '7',
        title:
            "Le Capitalisme expliqué à ma petite-fille (en espérant qu'elle en verra la fin)",
        author: 'Jean Ziegler',
        note: "Livre de l'invité",
        imageUrl:
            'https://images-eu.ssl-images-amazon.com/images/I/51vAqJFdn0L.jpg',
        productUrl:
            'https://www.amazon.fr/Capitalisme-expliqué-petite-fille-espérant-EXPLIQUE-ebook/dp/B07CNCCNHS',
        type: 'book',
    },
    {
        collectionId: '7',
        title: 'Les Misérables',
        author: 'Victor Hugo',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51AAcStShdL._SX322_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/misérables-Victor-Hugo/dp/2211238467',
        type: 'book',
    },
    {
        collectionId: '7',
        title: 'Discours et conférences',
        author: 'Jean Jaurès',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41VTDGFAUzL._SX299_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Discours-conférences-Jean-Jaures/dp/2081307626',
        type: 'book',
    },
    {
        collectionId: '8',
        title: 'Sarkozy-Kadhafi. Des billets et des bombes',
        author:
            'Fabrice Arfi, Benoît Collombat, Thierry Chavant, Geoffrey Le Guilcher, Elodie Gueguen',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51BNJjQT9GL._SX382_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Sarkozy-Kadhafi-billets-bombes-Fabrice-Arfi/dp/2413015612',
        type: 'book',
    },
    {
        collectionId: '8',
        title: 'Les Prédateurs',
        author: 'Catherine Le Gall et Denis Robert',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51W52CSOCcL._SX313_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Prédateurs-Catherine-GALL/dp/2749155932',
        type: 'book',
    },
    {
        collectionId: '8',
        title:
            'La caste: Enquête sur cette haute fonction publique qui a pris le pouvoir',
        author: 'Laurent Mauduit',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/31Yo1n4yTOL._SX305_BO1,204,203,200_.jpg',
        productUrl: 'https://www.amazon.fr/caste-Laurent-MAUDUIT/dp/234803770X',
        type: 'book',
    },
    {
        collectionId: '8',
        title: 'Article 353 du Code pénal',
        author: 'Tanguy Viel',
        note: '',
        imageUrl:
            'https://images-eu.ssl-images-amazon.com/images/I/412ktS81TsL.jpg',
        productUrl: 'https://www.amazon.fr/dp/B07N6HQJBT',
        type: 'book',
    },
    {
        collectionId: '9',
        title: 'Naissance de la biopolitique : cours au Collège de France',
        author: 'Michel Foucault',
        note: 'Playlist Youtube mais un bouquin est aussi disponible',
        imageUrl: '/images/artworks/video-placeholder.svg',
        productUrl:
            'https://www.youtube.com/playlist?list=PLw4-Fp0S2dJakQHXcXxTSjISLCAuT0Qiv',
        type: 'video',
    },
    {
        collectionId: '9',
        title: "Il faut s'adapter : Sur un nouvel impératif politique",
        author: 'Barbara Stiegler',
        note: "Livre de l'invité",
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/31vx8KFGUWL._SX339_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/faut-sadapter»-nouvel-impératif-politique/dp/2072757495',
        type: 'book',
    },
    {
        collectionId: '9',
        title: 'The Good Society',
        author: 'Walter Lippmann',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/31Sz2dCDiQL._SX313_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Good-Society-Walter-Lippmann/dp/1298501865',
        type: 'book',
    },
    {
        collectionId: '9',
        title: 'La nouvelle raison du monde: essai sur la société néolibérale',
        author: 'Christian Laval et Pierre Dardot',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41gXIzj87rL._SX319_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/nouvelle-raison-monde-société-néolibérale/dp/2707156825',
        type: 'book',
    },
    {
        collectionId: '10',
        title: "L'Archipel français",
        author: 'Jérôme Fourquet',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/410Cw0MoOBL._SX317_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Larchipel-français-Jerome-Fourquet/dp/2021406024',
        type: 'book',
    },
    {
        collectionId: '10',
        title: "Où en sommes-nous ? Une esquisse de l'histoire humaine",
        author: 'Emmanuel Todd',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41DJ4mPJEGL._SX317_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Où-sommes-nous-esquisse-lhistoire-humaine/dp/2021319008',
        type: 'book',
    },
    {
        collectionId: '11',
        title: 'Socialisme utopique et socialisme scientifique',
        author: 'Friedrich Engels',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51U74p9iCOL._SX322_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Socialisme-Utopique-Scientifique-Friedrich-Engels/dp/1983116041',
        type: 'book',
    },
    {
        collectionId: '11',
        title: 'Le vieil Homme et la mer',
        author: 'Ernest Hemingway',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51Ma5AxBwpL._SX302_BO1,204,203,200_.jpg',
        productUrl: 'amazon.fr/vieil-homme-mer-Ernest-Hemingway/dp/2072762081/',
        type: 'book',
    },
    {
        collectionId: '11',
        title: "L'ancêtre",
        author: 'Juan José Saer',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/515sYk5qtHL._SX352_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Lancêtre-Juan-jose-Saer/dp/237055147X',
        type: 'book',
    },
    {
        collectionId: '11',
        title: 'Les Fleurs du Mal',
        author: 'Charles Baudelaire',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/61gr3A-NdwL._SX326_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Fleurs-du-Mal-Charles-Baudelaire/dp/229011507X/',
        type: 'book',
    },
    {
        collectionId: '11',
        title: 'Fondation et Empire',
        author: 'Isaac Asimov',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51UrtZ21wZL._SX301_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/cycle-Fondation-II-Fondation-Empire/dp/2070360555',
        type: 'book',
    },
    {
        collectionId: '11',
        title: 'Louis XI',
        author: 'Paul Murray Kendall',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51KdMA%2BJiqL._SX309_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Louis-XI-Paul-Murray-Kendall/dp/2818504287',
        type: 'book',
    },
    {
        collectionId: '11',
        title: 'Quatrevingt-treize',
        author: 'Victor Hugo',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51LznOG%2BeTL._SX302_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Quatrevingt-treize-Victor-Hugo/dp/2253160784',
        type: 'book',
    },
    {
        collectionId: '11',
        title: 'Jules Michelet',
        author: '',
        note: "Toute l'oeuvre de Jules Michelet",
        imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8pnVQllaEJbokjEs-yOLpb4sogIlAmYsyATtfMullLvhnSmr7',
        productUrl: 'https://fr.wikipedia.org/wiki/Jules_Michelet',
        type: 'people',
    },
    {
        collectionId: '11',
        title: 'Coeur de chien',
        author: 'Mikhaïl Boulgakov',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51HrQaz5x9L._SX307_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Coeur-chien-Mikhail-Boulgakov/dp/2253933147/',
        type: 'book',
    },
    {
        collectionId: '11',
        title: 'La route du tabac',
        author: 'Erskine Caldwell',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51-FO1c3bKL._SX339_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Route-au-tabac-Erskine-CALDWELL/dp/2714475051',
        type: 'book',
    },
    {
        collectionId: '12',
        title: 'Friedrich Nietzsche',
        author: '',
        note: "Toute l'oeuvre de Friedrich Nietzsche",
        imageUrl:
            'https://spectator.imgix.net/content/uploads/2016/04/Nietzsche.jpg?auto=compress,enhance,format&crop=faces,entropy,edges&fit=crop&w=620&h=413',
        productUrl:
            'https://fr.wikipedia.org/wiki/Biographie_de_Friedrich_Nietzsche',
        type: 'people',
    },
    {
        collectionId: '12',
        title: "Qu'appelle-t-on Panser",
        author: 'Bernard Stiegler',
        note: "Livre de l'invité",
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/317BmBK7JWL._SX328_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Quappelle-t-panser-lEntropocène-Bernard-Stiegler/dp/B071FQN28V',
        type: 'book',
    },
    {
        collectionId: '13',
        title: 'Le lambeau',
        author: 'Philippe Lançon',
        note: 'Livre recommandé par Jacques Duplessy',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/31BFjq5HquL._SX340_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/lambeau-Philippe-Lançon/dp/2072689074',
        type: 'book',
    },
    {
        collectionId: '13',
        title: 'Les Nouveaux Chiens de garde',
        author: 'Serge Halimi',
        note: 'Livre recommandé par Stéphanie Fontaine',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/419qYddkt1L._SX316_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Nouveaux-chiens-garde-NE/dp/2912107261',
        type: 'book',
    },
    {
        collectionId: '13',
        title: 'Le littératron',
        author: 'Robert Escarpit',
        note: 'Livre recommandé par Antoine Champagne',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51M8LZpYh8L._SX364_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/LITTERATRON-ESCARPIT-ROBERT/dp/B003X81M6W',
        type: 'book',
    },
    {
        collectionId: '14',
        title: 'Les furtifs',
        author: 'Alain Damasio',
        note: "Livre de l'invité",
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51j9x8gyQvL._SX355_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/furtifs-Alain-Damasio/dp/2370490748/',
        type: 'book',
    },
    {
        collectionId: '14',
        title: "L'homme illustré",
        author: 'Ray Bradbury',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41jHbJaQU7L._SX302_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Lhomme-illustré-Ray-Bradbury/dp/2070417794',
        type: 'book',
    },
    {
        collectionId: '14',
        title: 'Chroniques martiennes',
        author: 'Ray Bradbury',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41t87O7yamL._SX301_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Chroniques-martiennes-Ray-Bradbury/dp/2070417743',
        type: 'book',
    },
    {
        collectionId: '15',
        title: 'Fred Vargas',
        author: '',
        note: 'Les romans policiers',
        imageUrl: 'https://www.babelio.com/users/AVT_Fred-Vargas_248.jpg',
        productUrl: 'https://www.babelio.com/auteur/Fred-Vargas/3212',
        type: 'people',
    },

    {
        collectionId: '36',
        title: 'Murray Bookchin',
        author: '',
        note: 'Toute son oeuvre',
        imageUrl:
            'https://www.revue-ballast.fr/wp-content/uploads/2015/09/book2.jpg',
        productUrl:
            'https://www.goodreads.com/author/show/34299.Murray_Bookchin',
        type: 'people',
    },
    {
        collectionId: '36',
        title: "L' an 01",
        author: 'Gébé',
        note: '',
        imageUrl:
            'https://www.bedetheque.com/media/Couvertures/An01La_11032005.jpg',
        productUrl: 'https://livre.fnac.com/a7613375/Gebe-L-an-01',
        type: 'book',
    },
    {
        collectionId: '36',
        title: 'Résilience',
        author: 'Augustin Lebon',
        note: '',
        imageUrl:
            'https://images-eu.ssl-images-amazon.com/images/I/615c2ElsUWL.jpg',
        productUrl: 'https://www.amazon.fr/dp/B0719BV39P',
        type: 'book',
    },
    {
        collectionId: '36',
        title: "L'essai",
        author: 'Nicolas Debon',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41naruLvYaL._SX373_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Essai-LEssai-shot-Debon-Nicolas/dp/2205074393',
        type: 'book',
    },
    {
        collectionId: '35',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41E9A-kOndL._SX323_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Bullshit-Jobs-David-Graeber/dp/B07BSLN78W',
        title: 'Bullshit jobs',
        author: 'David Graeber',
    },
    {
        collectionId: '35',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41VSMZGXkQL._SX319_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Premières-mesures-révolutionnaires-Eric-Hazan/dp/2358720496',
        title: 'Premières mesures révolutionnaires',
        author: 'Éric Hazan',
    },
    {
        collectionId: '35',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41ssBwE7HIL._SX325_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/monde-comme-volonté-représentation/dp/2130627773',
        title: 'Le Monde comme volonté et comme représentation',
        author: 'Arthur Schopenhauer',
    },
    {
        collectionId: '35',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41GmsmdHcPL._SX309_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Lart-davoir-toujours-raison-Dialectique/dp/B012HXNKFE',
        title: 'L’Art d’avoir toujours raison',
        author: 'Arthur Schopenhauer',
    },
    {
        collectionId: '36',
        title: 'Élisée Reclus',
        author: '',
        note: 'Toute son oeuvre',
        imageUrl:
            'http://img.over-blog-kiwi.com/1/17/72/96/20160923/ob_c69999_arton763.jpg',
        productUrl: 'https://fr.wikipedia.org/wiki/%C3%89lis%C3%A9e_Reclus',
        type: 'people',
    },
    {
        collectionId: '35',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/5171wcr88%2BL._SX302_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Moby-Dick-Herman-Melville/dp/2070400662',
        title: 'Moby Dick',
        author: 'Herman Melville',
    },
    {
        collectionId: '35',
        type: 'book',
        note: '',
        imageUrl: '',
        productUrl:
            'https://www.amazon.fr/bord-négrier-histoire-atlantique-traite/dp/2757854534',
        title: 'À bord du négrier',
        author: 'Marcus Rediker',
    },
    {
        collectionId: '27',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41X%2BOjKLkJL._SX307_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Soumission-Michel-Houellebecq/dp/2290113611',
        title: 'Soumission',
        author: 'Michel Houellebecq',
    },
    {
        collectionId: '27',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41BL5QsGpqL._SX313_BO1,204,203,200_.jpg',
        productUrl: 'https://www.amazon.fr/Munich-Robert-HARRIS/dp/2259263992',
        title: 'Munich',
        author: 'Robert Harris',
    },
    {
        collectionId: '27',
        type: 'book',
        note: '',
        imageUrl:
            'http://www.librairiefrancaise.fr/6117-thickbox_default/les-diamants-de-nika-nina-pouchkova.jpg',
        productUrl:
            'http://www.librairiefrancaise.fr/en/romans-contes-nouvelles/7643-les-diamants-de-nika-nina-pouchkova-9782491200008.html',
        title: 'Les diamants de Nika',
        author: 'Nina Pouchkova',
    },
    {
        collectionId: '28',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51QWUzs%2BfdL._SX324_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Pierre-Mendès-France-République-moderne/dp/2200603193',
        title: 'Pierre Mendès France: Pour une République moderne',
        author: 'Alain Chatriot',
    },
    {
        collectionId: '28',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41TXNFQ3KYL._SX281_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Sept-ans-solitude-Eric-Halphen/dp/2070424790',
        title: 'Sept ans de solitude',
        author: 'Éric Halphen',
    },
    {
        collectionId: '28',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/31aOKyQrG%2BL._SX316_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Lesprit-corruption-Eric-Alt/dp/2356871624',
        title: "L'esprit de corruption",
        author: 'Irène Luc et Éric Alt',
    },
    {
        collectionId: '99',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/412aTtda9HL._SX303_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Ebène-Aventures-africaines-Ryszard-Kapuscinski/dp/2266114581',
        title: 'Ébène',
        author: 'Ryszard Kapuściński',
    },
    {
        collectionId: '99',
        type: 'people',
        note: 'Toute son oeuvre',
        imageUrl: '',
        productUrl: '',
        title: 'Élisée Reclus',
        author: '',
    },
    {
        collectionId: '99',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41GmirmMtZL._SX303_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/voyages-avec-Hérodote-Ryszard-KAPUSCINSKI/dp/2266173014',
        title: 'Mes voyages avec Hérodote',
        author: 'Ryszard Kapuściński',
    },
    {
        collectionId: '99',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51rvGO49JFL._SX358_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Manon-Lescaut-anthologie-rencontre-amoureuse/dp/2401028242',
        title: 'Manon Lescaut',
        author: 'Antoine François Prévost',
    },
    {
        collectionId: '29',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/61SJ7ihMx7L._SX384_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Happy-hour-Mossoul-Jeremy-Ferrari/dp/2749931258',
        title: 'Happy hour à Mossoul',
        author: 'Jérémy Ferrari',
    },
    {
        collectionId: '29',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/413%2B4hO5xEL._SX381_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Magic-optimystic-Éric-ANTOINE/dp/2221198999',
        title: 'Magic optimystic',
        author: 'Eric Antoine',
    },
    {
        collectionId: '29',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41pw%2BqjsafL._SX335_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Plus-fort-vie-Emmanuelle-DalSecco/dp/2081396319',
        title: 'Plus fort la vie',
        author: 'Philippe Croizon',
    },
    {
        collectionId: '30',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51Hsk4J2oTL._SX315_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Nations-nègres-culture-lantiquité-daujourdhui/dp/2708706888',
        title: 'Nations nègres et culture',
        author: 'Cheikh Anta Diop',
    },
    {
        collectionId: '30',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/31iOwr9rSyL._SX352_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Malcolm-Une-vie-réinventions-1925-1965/dp/284950436X',
        title: 'Malcolm X: Une vie de réinventions',
        author: 'Manning Marable',
    },
    {
        collectionId: '30',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41DqWYT4t%2BL._SX290_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/consciencisme-Kwame-Nkrumah/dp/2708707930/',
        title: 'Le Consciencisme',
        author: 'Kwame Nkrumah',
    },
    {
        collectionId: '30',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41%2Bhb9OPGIL._SX326_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/damnés-terre-Frantz-Fanon/dp/2707142816/',
        title: 'Les Damnés de la Terre',
        author: 'Frantz Fanon',
    },
    {
        collectionId: '30',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51aEV1PZILL._SX322_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Message-Blackman-America-Elijah-Muhammad/dp/1884855709/',
        title: 'Message to the Blackman in America',
        author: 'Elijah Muhammad',
    },
    {
        collectionId: '30',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/418fzF3rvdL._SX305_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Ainsi-parlait-Zarathoustra-Friedrich-Nietzsche/dp/2253006750',
        title: 'Ainsi parlait Zarathoustra',
        author: 'Friedrich Nietzsche',
    },
    {
        collectionId: '32',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/5167H6JljGL._SX340_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Lintelligence-artificielle-lenjeu-siècle-antihumanisme/dp/2373090503/',
        title:
            'L’Intelligence artificielle ou l’enjeu du siècle : Anatomie d’un antihumanisme radical',
        author: 'Eric Sadin',
    },
    {
        collectionId: '32',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41PtyvZimmL._SX305_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Politics-English-Language-George-Orwell/dp/0141393068',
        title: 'Politics and the English Language',
        author: 'George Orwell',
    },
    {
        collectionId: '32',
        type: 'people',
        note: '',
        imageUrl: '',
        productUrl: '',
        title: 'Hannah Arendt',
        author: '',
    },
    {
        collectionId: '32',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41FL1hqaoIL._SX326_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/technique-Lenjeu-siècle-Jacques-Ellul/dp/2717815635',
        title: "La Technique ou l'Enjeu du siècle",
        author: 'Jacques Ellul',
    },
    {
        collectionId: '33',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51rLbdvjkqL._SX307_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Arsène-Lupin-gentleman-cambrioleur-Maurice-Leblanc/dp/2253002828',
        title: 'Arsène Lupin',
        author: 'Maurice Leblanc',
    },
    {
        collectionId: '33',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41UWuLrHF4L._SX307_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Fort-comme-mort-Guy-Maupassant/dp/2070374505',
        title: 'Fort comme la mort',
        author: 'Guy de Maupassant',
    },
    {
        collectionId: '33',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/412-Ntw-%2BLL._SX307_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Anna-Karénine-Léon-Tolstoï/dp/2253098388',
        title: 'Anna Karénine',
        author: 'Léon Tolstoï',
    },
    {
        collectionId: '34',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/417eNqCIoTL._SX319_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/nos-amis-Comité-invisible/dp/2358720623',
        title: 'À nos amis',
        author: 'Le comité invisible',
    },
    {
        collectionId: '34',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41XI%2BKX%2BB7L._SX325_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Maintenant-Comité-invisible/dp/2358720860',
        title: 'Maintenant',
        author: 'Le comité invisible',
    },
    {
        collectionId: '34',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41dEGP9z6cL._SX314_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Theorie-Generale-Linformation-Communication-Escarpit/dp/B0080CKJZ6',
        title: "L'information et la communication. Théorie générale",
        author: 'Robert Escarpit',
    },
    {
        collectionId: '',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51UHxYSHfOL._SX367_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Une-autre-fin-monde-possible/dp/2021332586',
        title: 'Une autre fin du monde est possible',
        author: 'Pablo Servigne et Raphaël Stevens',
    },
    {
        collectionId: '36',
        type: 'video',
        note: '',
        imageUrl: '',
        productUrl: 'https://www.youtube.com/watch?v=DAKjNgeIM-Q',
        title: 'Howard Zinn, Une histoire populaire américiane',
        author: 'Olivier Azam et Daniel Mermet',
    },
    {
        collectionId: '36',
        type: 'video',
        note: '',
        imageUrl: '',
        productUrl: 'https://www.youtube.com/watch?v=4SAjq4WaLaA',
        title: 'Ni Dieu, ni maîre',
        author: 'Tancrède Ramonet',
    },
    {
        collectionId: '17',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41-3tgBs8IL._SX308_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Comptes-rebours-2013-2018-Hubert-Védrine/dp/2213709416',
        title: 'Comptes à rebours',
        author: 'Hubert Vedrine',
    },
    {
        collectionId: '17',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51ycA9nCaQL._SX307_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/grand-échiquier-Zbigniew-Brzezinski/dp/2818501423',
        title: "Le grand échiquier: l'Amérique et le reste du monde",
        author: 'Zbigniew Brzeziński',
    },
    {
        collectionId: '17',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51BsEs9F5HL._SX322_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Guerre-hors-limites-Liang-Qiao/dp/2743615176',
        title: 'La Guerre hors limites',
        author: 'Qiao Liang et Wang Xiangsui',
    },
    {
        collectionId: '17',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/4133ligEtvL._SX336_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Civilisation-Comment-sommes-devenus-américains/dp/2072732409',
        title: 'Civilisation: Comment nous sommes devenus américains',
        author: 'Régis Debray',
    },
    {
        collectionId: '18',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41JApglwPIL._SX345_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Ecologie-intégrale-Manifeste-Delphine-Batho/dp/2268101312',
        title: 'Ecologie intégrale: Le manifeste',
        author: 'Delphine Batho',
    },
    {
        collectionId: '18',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41cxGgPWuML._SX305_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Illusion-financière-subprimes-transition-écologique/dp/270824258X/',
        title: 'Illusion financière',
        author: 'Gaël Giraud',
    },
    {
        collectionId: '18',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-eu.ssl-images-amazon.com/images/I/51J9QpTemsL.jpg',
        productUrl:
            'https://www.amazon.fr/Laudato-si-Encyclique-sur-lécologie-ebook/dp/B01AY7WDAS/',
        title: "L'encyclique Laudato si",
        author: 'Pape François',
    },
    {
        collectionId: '19',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41iCqfYVZGL._SX307_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Cosmos-ontologie-matérialiste-Michel-Onfray/dp/229012656X',
        title: 'Cosmos',
        author: 'Michel Onfray',
    },
    {
        collectionId: '19',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41BpaUOsCVL._SX302_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Imparfaits-libres-heureux-Pratiques-lestime/dp/2738122299',
        title: "Imparfaits, libres et heureux: pratiques de l'estime de soi",
        author: 'Christophe André',
    },
    {
        collectionId: '19',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/518MDuj0r9L._SX311_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Meursault-contre-enquête-Kamel-Daoud/dp/2330064489',
        title: 'Meursault, contre-enquête',
        author: 'Kamel Daoud',
    },
    {
        collectionId: '20',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/515yoXDW6aL._SX340_BO1,204,203,200_.jpg',
        productUrl: 'https://www.amazon.fr/1984-George-Orwell/dp/2072730031',
        title: '1984',
        author: 'George Orwell',
    },
    {
        collectionId: '20',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41%2BZ0P9CVfL._SX307_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/habitudes-ceux-réalisent-quils-entreprennent/dp/2290206059',
        title:
            "Les 7 habitudes de ceux qui réalisent tout ce qu'ils entreprennent",
        author: 'Stephen Covey',
    },
    {
        collectionId: '20',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51fBMkSP9vL._SX331_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Economix-Premiere-Histoire-lÉconomie-Édition/dp/271120118X',
        title: "Economix : La première histoire de l'économie en BD",
        author: 'Michael Goodwin',
    },
    {
        collectionId: '21',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51H7K14p3PL._SX313_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Comment-non-violence-protège-lEtat-linefficacité/dp/2955678244',
        title:
            "Comment la non-violence protège l'Etat: Essai sur l'inefficacité des mouvements sociaux",
        author: 'Peter Gelderloos',
    },
    {
        collectionId: '21',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51tPlMcTZ7L._SX284_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Lantifascisme-Son-passé-présent-avenir/dp/2895962820',
        title: "L'antifascisme Son passé, son présent et son avenir",
        author: 'Mark Bray',
    },
    {
        collectionId: '21',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51KG2IaOF5L._SX347_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Peau-rouge-masques-blancs-reconnaissance/dp/289596260X',
        title: 'Peau rouge, masques blancs',
        author: 'Glen Sean Coulthard',
    },
    {
        collectionId: '22',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51Gx2aA5T9L._SX326_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Crépuscule-Juan-Branco/dp/B07N3RFXJN/',
        title: 'Crépuscule',
        author: 'Juan Branco',
    },
    {
        collectionId: '22',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41Rqvh8l28L._SX297_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Carnets-sous-sol-Fedor-Mikhaïlovitch-Dostoïevski/dp/2868697992',
        title: 'Les Carnets du sous-sol',
        author: 'Fiodor Dostoïevski',
    },
    {
        collectionId: '22',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41arTJPfgOL._SX302_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Lumière-daoût-William-Faulkner/dp/2070366219/',
        title: "Lumière d'août",
        author: 'William Faulkner',
    },
    {
        collectionId: '22',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51Tx2O6iM2L._SX304_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Attente-Dieu-Simone-Weil/dp/222632643X',
        title: 'Attente de Dieu',
        author: 'Simone Veil',
    },
    {
        collectionId: '23',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51RZiJIYANL._SX367_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/bonheur-était-pour-demain/dp/2021388611',
        title:
            'Le bonheur était pour demain. Les rêveries d’un ingénieur solitaire',
        author: 'Philippe Bihouix',
    },
    {
        collectionId: '23',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41dOy3NpnYL._SX316_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/mythe-machine-Technique-développement-humain/dp/2910386473',
        title: 'Le Mythe de la machine',
        author: 'Lewis Mumford',
    },
    {
        collectionId: '23',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51zLWuDXgPL._SX324_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Technique-civilisation-Lewis-Mumford/dp/2863646729',
        title: 'Techniques et Civilisation',
        author: 'Lewis Mumford',
    },
    {
        collectionId: '23',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41V3T5MPWNL._SX310_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Nouvel-État-industriel-économique-américain/dp/2070715280',
        title: 'Le Nouvel État industriel',
        author: 'John Kenneth Galbraith',
    },
    {
        collectionId: '23',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51N9HD32J9L._SX302_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/démocratie-Amérique-partie-scientifiques-2019-2020/dp/2081451662',
        title: 'De la Démocratie en Amérique',
        author: 'Alexis de Tocqueville',
    },
    {
        collectionId: '23',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41VNfeNmO%2BL._SX287_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/changement-climatique-expliqué-nouvelle-édition/dp/2021365743',
        title: 'Le changement climatique expliqué à ma fille',
        author: 'Jean-Marc Jancovici',
    },
    {
        collectionId: '23',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41z%2BqwAlz%2BL._SX313_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Limites-croissance-dans-monde-fini/dp/2374250741',
        title: 'Les Limites à la croissance (dans un monde fini)',
        author:
            'Donella Meadows, Dennis Meadows, Jørgen Randers et William W. Behrens III',
    },
    {
        collectionId: '24',
        type: 'movie',
        note: '',
        imageUrl:
            'http://fr.web.img2.acsta.net/c_215_290/medias/nmedia/18/35/94/63/18458444.jpg',
        productUrl: 'https://www.imdb.com/title/tt0399295/',
        title: 'Lord of War',
        author: 'Andrew Niccol',
    },
    {
        collectionId: '25',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-eu.ssl-images-amazon.com/images/I/51HD3X8GBAL.jpg',
        productUrl:
            'https://www.amazon.fr/CONTRIBUTION-critique-léconomie-politique-INTRODUCTION-ebook/dp/B016FR5AHE',
        title: "Préface de L'introduction à la critique économique",
        author: 'Karl Marx',
    },
    {
        collectionId: '25',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41xLoClO41L._SX307_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Crime-châtiment-Fedor-M-Dostoievski/dp/2253082503',
        title: 'Crime et Châtiment',
        author: 'Fiodor Dostoïevski',
    },
    {
        collectionId: '100',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41TFrRNzwML._SX301_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Aurore-Pensées-sur-préjugés-moraux/dp/2080712632',
        title: 'Aurore',
        author: 'Friedrich Nietzsche',
    },
    {
        collectionId: '100',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51hXKVKRQOL._SX322_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/DPR-Deep-Green-Resistance-mouvement/dp/2490403036',
        title: 'Deep Green Resistance',
        author: 'Derrick Jensen, Lierre Keith et Aric McBay',
    },
    {
        collectionId: '26',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51W52CSOCcL._SX313_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Prédateurs-Catherine-GALL/dp/2749155932',
        title: 'Les Prédateurs: Des milliardaires contre les États',
        author: 'Denis Robert et Catherine Le Gall',
    },
    {
        collectionId: '101',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41i%2BJXeCyYL._SX338_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/dernière-bataille-France-Français-défendus/dp/2070106918',
        title: 'La dernière bataille de France',
        author: 'Vincent Desportes',
    },
    {
        collectionId: '31',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/411dQ4bPmtL._SX303_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Mémoires-guerre-1940-1942-Charles-Gaulle/dp/2266205994',
        title: 'Mémoires de guerres',
        author: 'Winston Churchill',
    },
    {
        collectionId: '31',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41XinoeVZDL._SX297_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Létrange-défaite-Marc-Bloch/dp/2070325695',
        title: "L'Étrange Défaite",
        author: 'Marc Bloch',
    },
    {
        collectionId: '31',
        type: 'book',
        note: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/3190jlXzQcL._SX302_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Roman-inachevé-Louis-Aragon/dp/2070300110',
        title: 'Le Roman inachevé',
        author: 'Louis Aragon',
    },
    {
        type: 'book',
        note: '',
        collectionId: '105',
        imageUrl:
            'https://images-eu.ssl-images-amazon.com/images/I/51HE2nIEQWL.jpg',
        productUrl: 'https://www.amazon.fr/dp/B077BLF3Y6',
        title: 'Pour éviter le chaos climatique et financier',
        author: 'Jean Jouzel & Pierre Larrouturou',
    },
    {
        type: 'book',
        note: '',
        collectionId: '105',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41BHvpcIVJL._SX367_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Perdre-Terre-Nathaniel-Rich/dp/2021424847',
        title: 'Perdre la Terre',
        author: 'Nathaniel Rich',
    },
    {
        type: 'book',
        note: '',
        collectionId: '105',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41ibCp1G8TL._SX296_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Climat-passons-lacte-Anne-Hessel/dp/2375950704',
        title: 'Finance, Climat, Réveillez-vous !',
        author: 'Anne Hessel & Jean Jouzel & Pierre Larrouturou',
    },
    {
        type: 'book',
        note: '',
        collectionId: '104',
        imageUrl:
            'https://images-eu.ssl-images-amazon.com/images/I/51umgmSykhL.jpg',
        productUrl:
            'https://www.amazon.fr/Democracy-Chains-history-radical-stealth-ebook/dp/B073Q7VMB1/',
        title:
            "Democracy in Chains: The Deep History of the Radical Right's Stealth Plan for America",
        author: 'Nancy MacLean ',
    },
    {
        type: 'book',
        note: '',
        collectionId: '104',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41aBNOJdpXL._SY498_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/How-Democracies-Die-Steven-Levitsky/dp/0525574530',
        title: 'How Democracies Die',
        author: 'Steven Levitsky & Daniel Ziblatt ',
    },
    {
        type: 'book',
        note: '',
        collectionId: '104',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41BP3NuUZxL._SX341_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Fascisme-en-action-Robert-Paxton/dp/2020591928',
        title: 'Le Fascisme en action',
        author: 'Robert O. Paxton',
    },
    {
        type: 'book',
        note: '',
        collectionId: '104',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51S8IitZk4L._SX317_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/People-Power-Profits-Progressive-Capitalism/dp/0241399238',
        title:
            'People, Power, and Profits: Progressive Capitalism for an Age of Discontent',
        author: 'Joseph E. Stiglitz',
    },
    {
        type: 'book',
        note: '',
        collectionId: '',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51Hhc1Eb68L._SX342_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Lespion-traître-Ben-Macintyre/dp/B07NRFGFW6',
        title: "L'espion et le traître",
        author: 'Ben Macintyre',
    },
    {
        type: 'book',
        note: '',
        collectionId: '103',
        imageUrl: '',
        productUrl: '',
        title: 'Les Gens de Smiley',
        author: 'John Le Carré',
    },
    {
        type: 'book',
        note: '',
        collectionId: '103',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41uuTNH3zsL._SX299_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Gens-Smiley-John-Carré/dp/2020479893',
        title: 'La Puissance et la Gloire',
        author: 'Graham Greene',
    },
    {
        type: 'book',
        note: '',
        collectionId: '102',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41tzfecADsL._SX319_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Mémoires-guerre-mémoires-despoir-Charles/dp/2259249361',
        title: "Mémoires d'espoir",
        author: 'Charles de Gaulle',
    },
    {
        type: 'book',
        note: '',
        collectionId: '102',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51TFhpepsLL._SX307_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Histoire-intellectuelle-libéralisme-Pierre-Manent/dp/2818502764',
        title: 'Histoire intellectuelle du libéralisme',
        author: 'Pierre Manent ',
    },
    {
        type: 'book',
        note: '',
        collectionId: '102',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41JGdQfSzZL._SX300_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Chartreuse-Parme-Stendhal-scientifiques-Classiques/dp/2253160687',
        title: 'La Chartreuse de Parme',
        author: 'Stendhal',
    },
    {
        type: 'book',
        note: '',
        collectionId: '106',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41HtOsNN4WL._SX347_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Sapiens-Une-brève-histoire-lhumanité/dp/2226257012',
        title: "Sapiens: Une brève histoire de l'humanité",
        author: 'Yuval Noah Harari',
    },
    {
        type: 'book',
        note: '',
        collectionId: '106',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41tzfecADsL._SX319_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Untold-History-United-States/dp/0091949319',
        title: 'The Untold History of the United States',
        author: 'Olivier Stone',
    },
    {
        type: 'book',
        note: '',
        collectionId: '106',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/31zj4%2BticEL._SX301_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Pour-une-école-publique-émancipatrice/dp/2377290825',
        title: 'Pour une école publique émancipatrice',
        author: 'Véronique Decker',
    },
    {
        type: 'book',
        note: '',
        collectionId: '106',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41q1LkZGk-L._SX302_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Au-coeur-ténèbres-Joseph-Conrad/dp/2081397455',
        title: 'Au coeur des ténèbres',
        author: 'Joseph Conrad',
    },
    {
        type: 'book',
        note: '',
        collectionId: '107',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51ieDUPNDQL._SX351_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/indocile-sciences-sociales-FONDATION-COPERNIC/dp/2348045699',
        title: 'Manuel indociles des sciences sociales',
        author: 'Fondation Copernic',
    },
    {
        type: 'book',
        note: '',
        collectionId: '107',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/512H22tyh3L._SX302_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/lhomme-créa-dieux-Pascal-Boyer/dp/2070426955',
        title: "Et l'homme créa les dieux",
        author: 'Pascal Boyer',
    },
    {
        type: 'book',
        note: '',
        collectionId: '107',
        imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/41JtqNyg6RL._SX349_BO1,204,203,200_.jpg',
        productUrl:
            'https://www.amazon.fr/Qui-tué-père-Edouard-Louis/dp/2021399435',
        title: 'Qui a tué mon père',
        author: 'Edouard Louis',
    },
]

export default items
