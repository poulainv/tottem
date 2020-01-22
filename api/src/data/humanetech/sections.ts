import { ISection } from '../../types'

const sections: ISection[] = [
    {
        id: '1000',
        collections: [
            {
                id: '200',
                name: 'Must Read 🙏',
                date: new Date('2019-10-01T12:00:00'),
                items: [
                    {
                        collectionId: '200',
                        type: 'book',
                        note: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/51ayZYs05ZL._SX324_BO1,204,203,200_.jpg',
                        productUrl:
                            'http://www.amazon.com/Amusing-Ourselves-Death-Discourse-Business/dp/014303653X',
                        title: 'Amusing Ourselves to Death',
                        author: 'Neil Postman',
                    },
                    {
                        collectionId: '200',
                        type: 'book',
                        note: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/51vz4NZuK3L._SX322_BO1,204,203,200_.jpg',
                        productUrl:
                            'http://www.amazon.com/Technopoly-The-Surrender-Culture-Technology/dp/0679745408',
                        title: 'Technopoly',
                        author: 'Neil Postman',
                    },
                    {
                        collectionId: '200',
                        type: 'book',
                        note: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/512-B-1yXuL._SX331_BO1,204,203,200_.jpg',
                        productUrl:
                            'http://www.amazon.com/Influence-Psychology-Persuasion-Revised-Edition/dp/006124189X',
                        title: 'Influence: The Psychology of Persuasion',
                        author: 'Robert B. Cialdini',
                    },
                    {
                        collectionId: '200',
                        type: 'book',
                        note: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/41%2By9pBLcJL._SX327_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/What-Money-Cant-Buy-Markets/dp/0374533652',
                        title: "What Money Can't buy ?",
                        author: 'Michael J. Sandel',
                    },
                    {
                        collectionId: '200',
                        type: 'article',
                        note: '',
                        imageUrl: '',
                        productUrl:
                            'https://www.cc.gatech.edu/~beki/cs4001/Winner.pdf',
                        title: 'Do Artifacts Have Politics',
                        author: 'Langdon Winner',
                    },
                    {
                        collectionId: '200',
                        type: 'book',
                        note: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/51ZqnqI0bcL._SX306_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.fr/Society-Spectacle-Guy-Debord/dp/0934868077',
                        title: 'Society of the Spectacle',
                        author: 'Guy Debord',
                    },
                ],
            },
            {
                id: '201',
                name: 'To watch / listen',
                date: new Date('2019-10-01T12:00:00'),
                items: [
                    {
                        collectionId: '201',
                        type: 'video',
                        note: '',
                        imageUrl: '',
                        productUrl:
                            'https://www.youtube.com/watch?v=8CrOL-ydFMI',
                        title: 'This is Water',
                        author: 'David Foster Wallace',
                    },
                    {
                        collectionId: '201',
                        type: 'article',
                        author: 'Joe Edelman',
                        imageUrl: '/images/articles/clickgoal.jpg',
                        title: 'Is Anything worth Maximizing',
                        productUrl:
                            'https://medium.com/what-to-build/is-anything-worth-maximizing-d11e648eb56f',
                    },
                    {
                        collectionId: '201',
                        type: 'podcast',
                        note: '',
                        imageUrl:
                            'https://samharris.org/wp-content/uploads/legacy-site/socialmedia.png',
                        productUrl:
                            'https://samharris.org/podcasts/what-is-technology-doing-to-us/',
                        title: 'What is technology doing with us?',
                        author: 'Tristan Harris',
                    },
                    {
                        collectionId: '201',
                        type: 'video',
                        note: '',
                        imageUrl: '',
                        productUrl:
                            'https://www.ted.com/talks/damon_horowitz?language=en',
                        title:
                            'Why Silicon Valley Needs a Moral Operating System',
                        author: 'Damon Horowitz’s',
                    },
                    {
                        collectionId: '201',
                        type: 'video',
                        note: '',
                        imageUrl: '',
                        productUrl:
                            'https://www.youtube.com/watch?v=alasBxZsb40',
                        title: 'Aldous Huxley Interview',
                        author: 'Miek Wallace',
                    },
                    {
                        collectionId: '201',
                        type: 'movie',
                        note: '',
                        imageUrl:
                            'https://i1.wp.com/metro.co.uk/wp-content/uploads/2018/03/sei_3127600.jpg?quality=90&strip=all&zoom=1&resize=540%2C363&ssl=1',
                        productUrl:
                            'https://www.netflix.com/de-en/title/70264888',
                        title: 'Nosedive',
                        author: 'Black Mirror',
                    },
                ],
            },
        ],
        name: 'Minimal Reading List',
        index: 0,
    },
    {
        id: '2000',
        collections: [
            {
                id: '203',
                name:
                    'Background Readings from Time Well Spent thought leaders',
                date: new Date('2019-10-01T12:00:00'),
                items: [
                    {
                        collectionId: '203',
                        type: 'article',
                        note: '',
                        imageUrl: '',
                        productUrl:
                            'http://www.dailygood.org/story/1063/is-technology-amplifying-human-potential-or-amusing-ourselves-to-death-/',
                        title:
                            'Is Technology Amplifying Human Potential, or Amusing Ourselves to Death?',
                        author: 'Tristan Harris',
                    },
                    {
                        collectionId: '203',
                        type: 'article',
                        note: '',
                        imageUrl: '',
                        productUrl: 'http://nxhx.org/Choicemaking/',
                        title: 'Human Values and Choicemaking',
                        author: 'Joe Edelman',
                    },
                    {
                        collectionId: '203',
                        type: 'article',
                        note: '',
                        imageUrl:
                            'https://miro.medium.com/max/2000/0*nvSNIYBweySQ4ofX.jpeg',
                        productUrl:
                            'https://medium.com/what-to-build/every-screenful-of-every-app-either-empowers-us-or-weakens-us-2ef22a472b30',
                        title:
                            'Designers, are you making people strong or weak?',
                        author: 'Joe Edelman',
                    },
                    {
                        collectionId: '203',
                        type: 'article',
                        note: '',
                        imageUrl: '',
                        productUrl:
                            'http://blog.practicalethics.ox.ac.uk/2015/10/why-its-ok-to-block-ads/',
                        title: 'Why It’s OK to Block Ads',
                        author: 'James Williams',
                    },
                ],
            },
            {
                id: '204',
                name:
                    'Vulnerabilities, Limits, Errors, Modes and Persuadability of the Mind',
                date: new Date('2019-10-01T12:00:00'),
                sectionId: '',
                items: [
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/41ojJPyHbIL._SX331_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/The-Willpower-Instinct-Self-Control-Matters/dp/1583335080',
                        type: 'book',
                        title: 'The Willpower Instinct',
                        author: 'Kelly McGonigal',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/41XQCEypmOL._SX324_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Willpower-Rediscovering-Greatest-Human-Strength/dp/0143122231',
                        type: 'book',
                        title:
                            'Willpower: Rediscovering the Greatest Human Strength',
                        author: 'Roy Baumeister',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/512-B-1yXuL._SX331_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Influence-Psychology-Persuasion-Revised-Edition/dp/006124189X',
                        type: 'book',
                        title: 'Influence: The Psychology of Persuasion',
                        author: 'Robert Cialdini',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/41fvoWQfwfL._SX331_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Addiction-Design-Machine-Gambling-Vegas/dp/0691160880',
                        type: 'book',
                        title: 'Addiction Design',
                        author: 'Natasha Schull',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/41mlnszB8%2BL._SX442_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Persuasive-Technology-Computers-Interactive-Technologies/dp/1558606432',
                        type: 'book',
                        title: 'Persuasive Technology',
                        author: 'BJ Fogg',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/41mwaxf1YxL.jpg',
                        productUrl:
                            'https://www.amazon.com/Hooked-How-Build-Habit-Forming-Products-ebook/dp/B00LMGLXTS/',
                        type: 'book',
                        title: 'Hooked',
                        author: 'Nir Eyal',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/31lWUHDG7uL._SX282_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/1984-Signet-Classics-George-Orwell/dp/0451524934',
                        type: 'book',
                        title: '1984',
                        author: 'George Orwell',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/41le8ej-fiL._SX327_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Brave-New-World-Aldous-Huxley/dp/0060850523',
                        type: 'book',
                        title: 'Brave New World',
                        author: 'Aldous Huxley',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://staff.washington.edu/eloftus/Articles/img0.gif',
                        productUrl:
                            'https://staff.washington.edu/eloftus/Articles/sciam.htm',
                        type: 'article',
                        title: 'Made to Stick',
                        author: 'Dan Heath & Chip Heath',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/51v%2BSnpekvL._SX332_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Made-Stick-Ideas-Survive-Others/dp/1400064287',
                        type: 'book',
                        title: 'Predictably Irrational',
                        author: 'Dan Ariely',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/41RtytNpsfL._SX332_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555',
                        type: 'book',
                        title: 'Thinking Fast & Slow',
                        author: 'Daniel Kahneman',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/51MCdTna5LL._SX331_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Bounded-Rationality-The-Adaptive-Toolbox/dp/0262571641',
                        type: 'book',
                        title: 'Bounded Rationality',
                        author: 'Gigarenzer',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/41S6hyKV9uL._SX324_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Nudge-Improving-Decisions-Health-Happiness/dp/014311526X',
                        type: 'book',
                        title: 'Nudge',
                        author: 'Cass Sunstein and Richard Thaler',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/51PbWyw7eiL._SX331_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Cults-Our-Midst-Continuing-Against/dp/0787967416',
                        type: 'book',
                        title: 'Cults in Our Midst',
                        author: 'Margaret Singer',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/51QJ%2BSR-WWL._SX330_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Connected-Surprising-Networks-Friends-Everything/dp/0316036137',
                        type: 'book',
                        title:
                            'Connected: Suprising Power of Social Networks and How They Shape Our Lives',
                        author: 'Nicholas Christakis & James Fowler',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/51wWy6w1kYL._SX322_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/The-Righteous-Mind-Politics-Religion/dp/0307455777',
                        type: 'book',
                        title: 'The Righteous Mind',
                        author: 'Jonathan Haidt',
                    },
                ],
            },
            {
                id: '2041',
                name:
                    'Critical Understanding of Media, Representations, Situations of Choice',
                date: new Date('2019-10-01T12:00:00'),
                sectionId: '',
                items: [
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/51ayZYs05ZL._SX324_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Amusing-Ourselves-Death-Discourse-Business/dp/014303653X',
                        type: 'book',
                        title: 'Amusing Ourselves to Death',
                        author: 'Neil Postman',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/51vz4NZuK3L._SX322_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Technopoly-The-Surrender-Culture-Technology/dp/0679745408',
                        type: 'book',
                        title: 'Technopoly',
                        author: 'Neil Postman',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/21Vi-ySxcrL._SX331_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Moralizing-Technology-Understanding-Designing-Morality/dp/0226852938',
                        type: 'book',
                        title: 'Moralizing Technology',
                        author: 'Paul Verbeek',
                    },
                ],
            },
            {
                id: '2042',
                name:
                    'But Don’t People Make Free Choices? How much do environments control what people choose?',
                date: new Date('2019-10-01T12:00:00'),
                sectionId: '',
                items: [
                    {
                        collectionId: '',
                        imageUrl: '',
                        productUrl:
                            'https://www.jstor.org/stable/20024652?seq=1#page_scan_tab_contents',
                        type: 'book',
                        title: 'Do Artifacts Have Politics',
                        author: 'Langdon Winner',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/41OZINinqtL._SX317_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Illusion-Conscious-Will-Bradford-Books/dp/0262731622',
                        type: 'book',
                        title: 'Illusion of Conscious Will',
                        author: 'Daniel Wegner',
                    },
                ],
            },
            {
                id: '2043',
                name:
                    'Invisible Distortions from Media, Metaphors, Social Constructs, Urban Design that Govern Our Lives',
                date: new Date('2019-10-01T12:00:00'),
                sectionId: '',
                items: [
                    {
                        collectionId: '',
                        imageUrl: '',
                        productUrl: '',
                        type: 'book',
                        title: 'Moralizing Technology',
                        author: 'Paul Verbeek',
                    },
                    {
                        collectionId: '',
                        imageUrl: '',
                        productUrl: '',
                        type: 'video',
                        title: 'This is Water',
                        author: 'David Foster Wallace',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/51YCbEnrsaL._SX311_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Understanding-Media-The-Extensions-Man/dp/0262631598',
                        type: 'book',
                        title: 'Understanding Media',
                        author: 'Marshall McLuhan',
                    },
                    {
                        collectionId: '',
                        imageUrl: '',
                        productUrl:
                            'https://www.jstor.org/stable/20024652?seq=1#page_scan_tab_contents',
                        type: 'book',
                        title: 'Do Artifacts Have Politics',
                        author: 'Langdon Winner',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/51Qx9NdBbYL._SX310_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Reality-Broken-Games-Better-Change/dp/1491592060',
                        type: 'book',
                        title: 'Reality is Broken',
                        author: 'Jane McGonigal',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/51AU-uKwIrL._SX331_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Alone-Together-Expect-Technology-Other/dp/0465031463',
                        type: 'book',
                        title: 'Alone Together',
                        author: 'Sherry Turkle',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/41ixPNQCjeL._SX327_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Reclaiming-Conversation-Power-Talk-Digital/dp/1594205558',
                        type: 'book',
                        title: 'Reclaiming Conversation',
                        author: 'Sherry Turkle',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/41gWTWp93GL._SX322_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Metaphors-We-Live-George-Lakoff/dp/0226468011',
                        type: 'book',
                        title: 'Metaphors We Live By',
                        author: 'George Lakoff',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/41%2By9pBLcJL._SX327_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/What-Money-Cant-Buy-Markets/dp/0374533652',
                        type: 'book',
                        title:
                            'What Money Can’t Buy: The Moral Limits of Markets',
                        author: 'Michael Sandel',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/41czx9OKhpL._SX321_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Death-Life-Great-American-Cities/dp/067974195X',
                        type: 'book',
                        title: 'Death and Life of Great American Cities',
                        author: 'Jane Jacobs',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/41%2BlolL22gL._SX314_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Sapiens-A-Brief-History-Humankind/dp/0062316095',
                        type: 'book',
                        title: 'Sapiens',
                        author: 'Yuval Noah Harari',
                    },
                ],
            },
            {
                id: '2044',
                name:
                    'Deconstructing The Invisible “Inner Mediums” that Govern Our Lives',
                date: new Date('2019-10-01T12:00:00'),
                sectionId: '',
                items: [
                    {
                        collectionId: '',
                        imageUrl:
                            'https://upload.wikimedia.org/wikipedia/commons/a/ab/La_Soci%C3%A9t%C3%A9_du_spectacle_book_cover.jpg',
                        productUrl:
                            'https://en.wikipedia.org/wiki/The_Society_of_the_Spectacle',
                        type: 'book',
                        title: 'Society of the Spectacle',
                        author: 'Guy Debord',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/31dVzO7bsTL._SX290_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Simulacra-Simulation-The-Body-Theory/dp/0472065211',
                        type: 'book',
                        title: 'Simulacra and Simulation',
                        author: 'Jean Baudrillard',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://thework.com/wp-content/uploads/2019/03/byron-katie-founder-thework@2x.jpg',
                        productUrl: 'https://thework.com/',
                        type: 'book',
                        title:
                            'The Work, 4 Questions of Inquiry Loving What Is',
                        author: 'Byron Katie',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/41WIbflfG2L._SX323_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Power-Now-Guide-Spiritual-Enlightenment/dp/1577314808',
                        type: 'book',
                        title: 'Power of Now',
                        author: 'Eckart Tolle',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'http://longnow.org/media/djlongnow_media/seminar_screenshots/salt-020101026-boroditsky-screenshot_1.jpg  ',
                        productUrl:
                            'http://longnow.org/seminars/02010/oct/26/how-language-shapes-thought/',
                        type: 'video',
                        title: 'How Language Shapes Thought',
                        author: 'Lera Boroditsky',
                    },
                ],
            },
            {
                id: '2045',
                name:
                    'Systems Thinking: Seeing Forces That Select & Replicate Certain Constructs Over Others',
                date: new Date('2019-10-01T12:00:00'),
                sectionId: '',
                items: [
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/51V0mRLaiYL._SX327_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/The-Selfish-Gene-Popular-Science/dp/0192860925',
                        type: 'book',
                        title: 'The Selfish Gene',
                        author: 'Richard Dawkins',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/41C5B4b-pGL._SX326_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Structure-Scientific-Revolutions-Thomas-Kuhn/dp/0226458083',
                        type: 'book',
                        title: 'Structure of Scientific Revolutions',
                        author: 'Thomas Kuhn',
                    },
                    {
                        collectionId: '',
                        imageUrl: '',
                        productUrl:
                            'https://en.wikipedia.org/wiki/Wicked_problem',
                        type: 'article',
                        title: 'Wicked Problems',
                        author: 'Horst Rittel',
                    },
                    {
                        collectionId: '',
                        imageUrl: '',
                        productUrl:
                            'https://www.youtube.com/watch?v=pscH_iPhWxk',
                        type: 'video',
                        title: 'B-Corp TED Talk and Systems Thinking',
                        author: 'Jay Coen Gilbert',
                    },
                ],
            },
            {
                id: '2046',
                name: 'The Importance of Coordination: Resources, Attention:',
                date: new Date('2019-10-01T12:00:00'),
                sectionId: '',
                items: [
                    {
                        collectionId: '',
                        imageUrl: '',
                        productUrl:
                            'https://www.yalelawjournal.org/essay/sharing-nicely-on-shareable-goods-and-the-emergence-of-sharing-as-a-modality-of-economic-production',
                        type: 'article',
                        title: 'Sharing Nicely',
                        author: 'Yochai Benkler',
                    },
                    {
                        collectionId: '',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/513v81mSPnL._SX311_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Operating-Manual-Spaceship-Buckminster-Fuller/dp/3037781262',
                        type: 'book',
                        title: 'Operating Manual for Spaceship Earth',
                        author: 'Buckminster Fuller',
                    },
                ],
            },
        ],
        name: 'Extended Reading List',
        index: 1,
    },
]

export default sections
