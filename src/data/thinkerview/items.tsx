import { Item } from '../../types'

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
        detail: 'https://youtu.be/mx5QlspmmE8',
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
        detail: 'https://youtu.be/mx5QlspmmE8',
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
        detail: 'https://youtu.be/mx5QlspmmE8',
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
        detail: 'https://youtu.be/_EFDjsMDlXU',
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
        detail: 'https://youtu.be/_EFDjsMDlXU',
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
        detail: 'https://youtu.be/_EFDjsMDlXU',
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
        detail: 'https://youtu.be/_EFDjsMDlXU',
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
        detail: 'https://youtu.be/Uj83ZmfT4Dw',
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
        detail: 'https://youtu.be/Uj83ZmfT4Dw',
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
        detail: 'https://youtu.be/Uj83ZmfT4Dw',
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
        detail: 'https://youtu.be/Uj83ZmfT4Dw',
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
        detail: 'https://www.youtube.com/watch?v=dejeVuL9-7c',
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
        detail: 'https://www.youtube.com/watch?v=dejeVuL9-7c',
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
        detail: 'https://www.youtube.com/watch?v=dejeVuL9-7c',
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
        detail: 'https://www.youtube.com/watch?v=dejeVuL9-7c',
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
        detail: 'https://www.youtube.com/watch?v=5TbbV06LlP0',
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
        detail: 'https://www.youtube.com/watch?v=5TbbV06LlP0',
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
        detail: 'https://www.youtube.com/watch?v=9iuBVin9oOk',
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
        detail: 'https://www.youtube.com/watch?v=9iuBVin9oOk',
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
        detail: 'https://www.youtube.com/watch?v=9iuBVin9oOk',
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
        detail: 'https://www.youtube.com/watch?v=9iuBVin9oOk',
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
        detail: 'https://www.youtube.com/watch?v=9iuBVin9oOk',
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
        detail: 'https://www.youtube.com/watch?v=9iuBVin9oOk',
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
        detail: 'https://www.youtube.com/watch?v=sIJd1kuR2Ps',
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
        detail: 'https://www.youtube.com/watch?v=sIJd1kuR2Ps',
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
        detail: 'https://www.youtube.com/watch?v=sIJd1kuR2Ps',
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
        detail: 'https://www.youtube.com/watch?v=DnHUyRfY3Wc',
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
        detail: 'https://www.youtube.com/watch?v=DnHUyRfY3Wc',
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
        detail: 'https://www.youtube.com/watch?v=DnHUyRfY3Wc',
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
        detail: 'https://www.youtube.com/watch?v=DnHUyRfY3Wc',
    },
    {
        collectionId: '9',
        title: 'Naissance de la biopolitique : cours au Collège de France',
        author: 'Michel Foucault',
        note: 'Playlist Youtube mais un bouquin est aussi disponible',
        imageUrl: require('../../static/images/artworks/video-placeholder.svg'),
        productUrl:
            'https://www.youtube.com/playlist?list=PLw4-Fp0S2dJakQHXcXxTSjISLCAuT0Qiv',
        type: 'video',
        detail: 'https://www.youtube.com/watch?v=uSSFmNHgJQQ',
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
        detail: 'https://www.youtube.com/watch?v=uSSFmNHgJQQ',
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
        detail: 'https://www.youtube.com/watch?v=uSSFmNHgJQQ',
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
        detail: 'https://www.youtube.com/watch?v=uSSFmNHgJQQ',
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
        detail: 'https://www.youtube.com/watch?v=M5_v9ld_LVc',
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
        detail: 'https://www.youtube.com/watch?v=M5_v9ld_LVc',
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
        detail: 'https://www.youtube.com/watch?v=9y3aC0LruiQ',
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
        detail: 'https://www.youtube.com/watch?v=9y3aC0LruiQ',
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
        detail: 'https://www.youtube.com/watch?v=9y3aC0LruiQ',
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
        detail: 'https://www.youtube.com/watch?v=9y3aC0LruiQ',
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
        detail: 'https://www.youtube.com/watch?v=9y3aC0LruiQ',
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
        detail: 'https://www.youtube.com/watch?v=9y3aC0LruiQ',
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
        detail: 'https://www.youtube.com/watch?v=9y3aC0LruiQ',
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
        detail: 'https://www.youtube.com/watch?v=9y3aC0LruiQ',
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
        detail: 'https://www.youtube.com/watch?v=9y3aC0LruiQ',
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
        detail: 'https://www.youtube.com/watch?v=9y3aC0LruiQ',
    },
    {
        collectionId: '12',
        title: 'Friedrich Nietzsche',
        author: '',
        note: "Toute l'oeuvre de Friedrich Nietzsche",
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/f/f4/Nietzsche187c.jpg',
        productUrl:
            'https://fr.wikipedia.org/wiki/Biographie_de_Friedrich_Nietzsche',
        type: 'people',
        detail: 'https://www.youtube.com/watch?v=qYCfx2xFMjE',
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
        detail: 'https://www.youtube.com/watch?v=qYCfx2xFMjE',
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
        detail: 'https://www.youtube.com/watch?v=XK2dsgJWqgk',
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
        detail: 'https://www.youtube.com/watch?v=XK2dsgJWqgk',
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
        detail: 'https://www.youtube.com/watch?v=XK2dsgJWqgk',
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
        detail: 'https://www.youtube.com/watch?v=a7KapmsJQOE',
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
        detail: 'https://www.youtube.com/watch?v=a7KapmsJQOE',
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
        detail: 'https://www.youtube.com/watch?v=a7KapmsJQOE',
    },
]

export default items
