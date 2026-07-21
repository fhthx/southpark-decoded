// Real-world inspiration behind South Park episodes, keyed by the episode's
// spapi.dev `id`. This is authored content, not sourced from the API - most
// episodes don't have an entry yet. Add more over time.
//
// Optional `parodyOf` field: a short list of specific films/shows/people an
// episode is directly spoofing (e.g. `parodyOf: ['300 (2006 film)']`). This
// is separate from `summary`/`sources`, which cover real-world social or
// political commentary - some episodes have one, some have the other, some
// have both (e.g. Stunning and Brave parodies Tom Brady while also
// commenting on Caitlyn Jenner's Vanity Fair cover). Keep it short - a
// label or two, not a paragraph.

// Shared by the S17 console-war trilogy (Black Friday, A Song of Ass and
// Fire, Titties and Dragons) - same real-world sources apply to all three.
// Two orderings are kept so each episode's numbered list matches the order
// its own summary cites them in.
const CONSOLE_WAR_SOURCE_GUARDIAN = { label: 'The Guardian: PlayStation 4 vs Xbox One', url: 'https://www.theguardian.com/technology/2013/nov/16/playstation-4-xbox-one' }
const CONSOLE_WAR_SOURCE_FORBES = {
  label: 'Forbes: Xbox One vs PS4 - The Console Wars Are Just Getting Started',
  url: 'https://www.forbes.com/sites/erikkain/2013/11/16/xbox-one-vs-ps4-the-console-wars-are-just-getting-started/',
}
const CONSOLE_WAR_SOURCES = [CONSOLE_WAR_SOURCE_GUARDIAN, CONSOLE_WAR_SOURCE_FORBES]

// Shared by the S19 season-finale advertising arc (Sponsored Content, Truth
// and Advertising, PC Principal Final Justice) - same real-world sources
// apply across the three episodes, continuing the season's political
// correctness satire.
const AD_ARC_SOURCE_BBC = { label: 'BBC News: Clickbait - the changing face of online journalism', url: 'https://www.bbc.co.uk/news/uk-wales-34213693' }
const AD_ARC_SOURCE_ATLANTIC = { label: 'The Atlantic: What Is Clickbait?', url: 'https://www.theatlantic.com/entertainment/archive/2014/11/clickbait-what-is/382545/' }
const AD_ARC_SOURCE_NYFA = {
  label: 'NYFA: What Is Native Advertising, Explained',
  url: 'https://www.nyfa.edu/student-resources/what-is-native-advertising-explained/',
}
const AD_ARC_SOURCE_GUARDIAN_AI = {
  label: 'The Guardian: the future of advertising and artificial intelligence',
  url: 'https://www.theguardian.com/media-network/2015/jul/27/artificial-intelligence-future-advertising-saatchi-clearchannel',
}
const AD_ARC_SOURCE_GUN_POLITICS = { label: 'Wikipedia: Gun politics in the United States', url: 'https://en.wikipedia.org/wiki/Gun_politics_in_the_United_States' }

export const explanations = {
  // Chinpokomon (S3E11)
  42: {
    summary:
      "A Japanese toy company's pocket-monster craze sweeps South Park's kids while secretly indoctrinating them to rebuild a WWII-era war machine. It's a broad parody of Pokemon-mania[1] and the wider anxiety, in the late '90s, about how much control foreign entertainment franchises had over American children's attention (and wallets)[2].",
    sources: [
      { label: 'Time: Beware of the Poke-Mania!', url: 'https://time.com/archive/6737018/beware-of-the-poke-mania/' },
      { label: 'The New York Times: Pokemon Mania Takes on Criminal Proportions', url: 'https://www.nytimes.com/1999/12/04/nyregion/pokemon-mania-takes-on-criminal-proportions.html' },
    ],
    parodyOf: [{ name: 'Pokémon', url: 'https://en.wikipedia.org/wiki/Pok%C3%A9mon' }],
  },
  // Are You There God? It's Me, Jesus (S3E17)
  47: {
    summary:
      "The town spends the last days of 1999 in escalating panic that computers - and civilization - will collapse the moment the year rolls over. This is a direct parody of the real Y2K scare[1], when genuine fears about date-formatted software bugs curdled into full-blown doomsday hysteria[2].",
    sources: [
      { label: 'Wikipedia: Year 2000 problem', url: 'https://en.wikipedia.org/wiki/Year_2000_problem' },
      { label: 'The New York Times: Fear of the Year 2000 Bug Is a Problem, Too', url: 'https://www.nytimes.com/1999/02/09/business/fear-of-the-year-2000-bug-is-a-problem-too.html' },
    ],
    parodyOf: [{ name: "Are You There God? It's Me, Margaret (Judy Blume novel)", url: 'https://en.wikipedia.org/wiki/Are_You_There_God%3F_It%27s_Me,_Margaret.' }],
  },
  // Timmy 2000 (S4E3)
  51: {
    summary:
      "Every kid in school suddenly gets diagnosed with 'Attention Deficit Disorder' and put on Ritalin so they'll sit still[1]. It's a pointed jab at the explosion of ADHD diagnoses and child stimulant prescriptions in the late '90s[2], and the suspicion that medication was being used to paper over ordinary rowdiness.",
    sources: [
      { label: 'The Guardian: Q&A on Ritalin and ADHD', url: 'https://www.theguardian.com/world/2000/oct/31/qanda' },
      { label: 'APA Monitor: Ritalin', url: 'https://www.apa.org/monitor/jun01/ritalin' },
    ],
  },
  // It Hits the Fan (S5E1)
  66: {
    summary:
      "A TV show says the word 'shit' uncensored, and it becomes a media sensation with an on-screen counter tallying every use. It's a direct parody of real fights over broadcast decency standards and the FCC[1] - like the real radio station fined for playing Eminem's 'The Real Slim Shady'[2] - and, cheekily, of South Park itself testing what Comedy Central would let it get away with.",
    sources: [
      { label: 'FCC: indecency enforcement order (PDF)', url: 'https://docs.fcc.gov/public/attachments/DA-99-1099A2.pdf' },
      { label: 'The Washington Post: station fined for playing "The Real Slim Shady"', url: 'https://www.washingtonpost.com/archive/lifestyle/2001/01/20/station-fined-for-playing-the-whole-slim-shady/6bf0d192-4e57-4341-96cd-ae4c5534f86c/' },
    ],
  },
  // Osama bin Laden Has Farty Pants (S5E9)
  74: {
    summary:
      "Cartman gets an Afghan pen pal and the boys go looking for Osama bin Laden themselves. Made and aired within weeks of the September 11 attacks[1], it's the show's raw first attempt to process 9/11, the start of the war in Afghanistan[2], and the wave of American patriotism (and jingoism) that followed.",
    sources: [
      { label: '9/11 Memorial: the events of the day', url: 'https://www.911memorial.org/learn/resources/911-primer/module-1-events-day' },
      { label: 'Watchlist on Children and Armed Conflict: Afghanistan report (PDF)', url: 'https://watchlist.org/wp-content/uploads/WL-Report-Afghanistan-2001.pdf' },
    ],
  },
  // Jared Has Aides (S6E1)
  80: {
    summary:
      "A weight-loss pitchman becomes a local celebrity and surrounds himself with 'aides.' It's a parody of Subway's real Jared Fogle ad campaign[1], which built an entire marketing empire around one man's sandwich-diet weight loss story[2].",
    sources: [
      { label: 'The Wall Street Journal: Subway\'s Jared Fogle ad campaign', url: 'https://www.wsj.com/articles/SB106141954065633000' },
      { label: 'Subway "Jared" commercial (YouTube)', url: 'https://www.youtube.com/watch?v=w2TR8QssCbA' },
    ],
    parodyOf: [{ name: 'Subway "Jared" ad campaign', url: 'https://en.wikipedia.org/wiki/Jared_Fogle' }],
  },
  // Red Hot Catholic Love (S6E8)
  87: {
    summary:
      "Parents in South Park are outraged to learn Catholic priests have been abusing children for years[1][2] - and that the Church hierarchy in Rome already knew. This is a direct response to the Catholic Church sex-abuse scandal that broke wide open in the US press in 2002[3], including the cover-ups by bishops.",
    sources: [
      { label: 'The Boston Globe: church allowed abuse by priest for years', url: 'https://www.bostonglobe.com/news/special-reports/2002/01/06/church-allowed-abuse-priest-for-years/cSHfGkTIrAT25qKGvBuDNM/story.html' },
      { label: 'The Boston Globe: scores of priests involved in sex abuse cases', url: 'https://www.bostonglobe.com/news/special-reports/2002/01/31/scores-priests-involved-sex-abuse-cases/kmRm7JtqBdEZ8UF0ucR16L/story.html' },
      { label: 'The Guardian (2002)', url: 'https://www.theguardian.com/world/2002/feb/23/usa.matthewengel' },
    ],
  },
  // The Biggest Douche in the Universe (S6E15)
  94: {
    summary:
      "Cartman channels the spirit of a TV psychic who claims to talk to dead relatives. It's a direct takedown of real 'medium' John Edward and shows like Crossing Over, accused of cold-reading grieving audiences for ratings rather than genuinely communicating with the dead.",
    parodyOf: [{ name: 'John Edward / Crossing Over (TV series)', url: 'https://en.wikipedia.org/wiki/John_Edward' }],
  },
  // My Future Self n' Me (S6E16)
  95: {
    summary:
      "Stan's parents hire an actor to play his drug-addicted future self as a scare tactic. It's a jab at D.A.R.E.-style anti-drug programs and scared-straight PSAs[1], which the show suggests are so heavy-handed and dishonest that kids see right through them.",
    sources: [
      { label: 'White House (George W. Bush archives): anti-drug initiative', url: 'https://georgewbush-whitehouse.archives.gov/news/releases/2002/04/20020410-7.html' },
    ],
  },
  // I'm a Little Bit Country (S7E4)
  100: {
    summary:
      "The kids stage dueling school reports on whether protest is patriotic[1], while flashbacks revisit the Revolutionary War. It aired just as the US invaded Iraq in March 2003, landing squarely in the national argument over whether opposing the war was principled dissent or unpatriotic[2].",
    sources: [
      { label: '"I\'m a Little Bit Country" clip (YouTube)', url: 'https://www.youtube.com/watch?v=sZvia527dN0' },
      {
        label: 'Pew Research: how fear and false beliefs bolstered US public support for war in Iraq',
        url: 'https://www.pewresearch.org/politics/2023/03/14/a-look-back-at-how-fear-and-false-beliefs-bolstered-u-s-public-support-for-war-in-iraq/',
      },
    ],
  },
  // Red Man's Greed (S7E7)
  103: {
    summary:
      "A local Native American tribe uses its casino fortune to buy up South Park and build a highway through downtown, evicting the townspeople. It's a sharp, ironic inversion of European colonization of the Americas[1] - down to a subplot where the tribe hands out blankets that make the townspeople sick, mirroring the historically disputed but culturally potent story of colonizers deliberately giving Native Americans disease-ridden blankets[2].",
    sources: [
      { label: 'Wikipedia: European colonization of the Americas', url: 'https://en.wikipedia.org/wiki/European_colonization_of_the_Americas' },
      { label: 'History Reclaimed: the myth of New World genocide', url: 'https://historyreclaimed.co.uk/the-myth-of-new-world-genocide/' },
    ],
  },
  // South Park is Gay! (S7E8)
  104: {
    summary:
      "The men of South Park get swept up in the early-2000s 'metrosexual' craze - manscaping, product, and all - while the boys struggle to figure out what still makes them look normal. It's a direct parody of the metrosexual trend that exploded in UK and US style coverage in the early 2000s[1], a movement so of-its-moment that entertainment writers were already declaring it dead within a couple of years[2].",
    sources: [
      { label: 'The Guardian/Observer: travel and style coverage (2005)', url: 'https://www.theguardian.com/travel/2005/mar/27/observerescapesection2' },
      { label: 'The Times: metrosexual, RIP', url: 'https://www.thetimes.com/travel/destinations/uk-travel/england/london-travel/metrosexual-rip-nls8dw78cds' },
    ],
  },
  // All About Mormons (S7E12)
  108: {
    summary:
      "A cheerful new Mormon family moves to town, and the show intercuts their story with a musical-comedy recap of Joseph Smith[1] and the founding of the LDS Church. It's a direct, detailed satire of Mormon history and doctrine[2] - while ultimately being surprisingly gentle about the family's actual character.",
    sources: [
      { label: 'Church of Jesus Christ of Latter-day Saints: the life of the prophet Joseph Smith', url: 'https://uk.churchofjesuschrist.org/the-life-of-the-prophet-joseph-smith:-his-childhood' },
      { label: 'Wikipedia: Mormonism', url: 'https://en.wikipedia.org/wiki/Mormonism' },
    ],
  },
  // Butt Out (S7E13)
  109: {
    summary:
      "A washed-up anti-smoking activist tries to recruit the boys for his campaign, which turns out to be more about his own ego and grudge against tobacco companies than public health. It's a direct parody of real celebrity-fronted anti-smoking ad campaigns of the early 2000s[1], set against the backdrop of a genuine global tobacco-control push, like the WHO's Framework Convention on Tobacco Control[2].",
    sources: [
      { label: 'BBC News: UK anti-smoking campaign', url: 'http://news.bbc.co.uk/1/hi/uk/4732047.stm' },
      { label: 'WHO: Framework Convention on Tobacco Control', url: 'https://www.who.int/news/item/29-05-2003-4f353791-ab92-4d1b-85cd-63b81fa88ff6' },
    ],
  },
  // The Passion of the Jew (S8E3)
  114: {
    summary:
      "Cartman becomes obsessed with a gruesome new religious film and starts a Mel Gibson fan club. This is a direct response to Mel Gibson's 2004 film The Passion of the Christ, both its extreme violence[1] and the controversy over whether it played into antisemitic stereotypes[2].",
    sources: [
      { label: 'The Guardian: Mel Gibson and The Passion of the Christ', url: 'https://www.theguardian.com/film/2005/mar/16/news.melgibson' },
      { label: 'ADL: The Passion relies on theme of antisemitism', url: 'https://www.adl.org/resources/news/passion-relies-theme-anti-semitism' },
    ],
    parodyOf: [{ name: 'The Passion of the Christ (2004 film)', url: 'https://en.wikipedia.org/wiki/The_Passion_of_the_Christ' }],
  },
  // Goobacks (S8E7)
  118: {
    summary:
      "People from thousands of years in the future start time-traveling to the present to take low-wage jobs, and South Park's residents panic about immigrants 'coming down here' and taking work. It's a fairly unsubtle stand-in for real debates over immigration reform[1] and low-wage labor[2], mocking xenophobic rhetoric on all sides[3].",
    sources: [
      { label: 'Migration Policy Institute: US immigration reform', url: 'https://www.migrationpolicy.org/article/us-immigration-reform-better-luck-next-year' },
      { label: 'LA Times archives: immigrant labor and jobs', url: 'https://www.latimes.com/archives/la-xpm-2004-jun-16-na-jobs16-story.html' },
      { label: 'SPLC: xenophobic hatred grows with Latino population in Georgia', url: 'https://www.splcenter.org/resources/reports/xenophobic-hatred-grows-latino-population-georgia/' },
    ],
  },
  // Douche and Turd (S8E8)
  119: {
    summary:
      "The school mascot election comes down to a literal giant douche versus a turd sandwich[1], and Stan refuses to vote for either. It's a direct commentary on the 2004 Bush-vs-Kerry presidential election[2] and the feeling that both major-party choices were equally unappealing.",
    sources: [
      { label: '"Douche and Turd" clip (YouTube)', url: 'https://www.youtube.com/watch?v=WYpP-T0IcyA' },
      { label: 'Wikipedia: 2004 United States presidential election', url: 'https://en.wikipedia.org/wiki/2004_United_States_presidential_election' },
    ],
  },
  // Something Wall-Mart This Way Comes (S8E9)
  120: {
    summary:
      "A giant discount superstore moves in and slowly destroys every small business in town, even as the townspeople keep shopping there anyway - drawn back in part by how precisely the real Walmart's data collection lets it predict and cater to customer spending habits[1][2]. It's a direct parable about Walmart's real-world reputation for undercutting and closing local Main Street businesses[3].",
    sources: [
      { label: 'The New York Times: What Walmart Knows About Customers’ Habits', url: 'https://www.nytimes.com/2004/11/14/business/yourmoney/what-walmart-knows-about-customers-habits.html' },
      { label: 'Forbes: Walmart coverage', url: 'https://www.forbes.com/?swb_redirect=true' },
      { label: 'PBS Frontline: Is Walmart Good for America?', url: 'https://www.pbs.org/video/frontline-wal-mart-good-america/' },
    ],
    parodyOf: [{ name: 'Something Wicked This Way Comes (Ray Bradbury novel / 1983 film)', url: 'https://en.wikipedia.org/wiki/Something_Wicked_This_Way_Comes_(novel)' }],
  },
  // Stupid Spoiled Whore Video Playset (S8E12)
  123: {
    summary:
      "Girls in South Park become obsessed with a vapid, famous-for-being-famous heiress and get a toy playset that rewards acting just like her. It's a direct parody of Paris Hilton and the mid-2000s tabloid/reality-TV machine that made fame itself the product - fueled in part by the leaked 1 Night in Paris sex tape with Rick Salomon that had made her a household name just before this aired[1].",
    sources: [{ label: 'Wikipedia: 1 Night in Paris', url: 'https://en.wikipedia.org/wiki/1_Night_in_Paris' }],
    parodyOf: [{ name: 'Paris Hilton', url: 'https://en.wikipedia.org/wiki/Paris_Hilton' }],
  },
  // Mr. Garrison's Fancy New Vagina (S9E1)
  126: {
    summary:
      "Mr. Garrison gets sex-reassignment surgery, while Kyle's dad decides he wants to become a dolphin and Kyle tries to become Black to make the basketball team. The episode plays off real hot-button topics of the time: the science and legal recognition around transgender identity and sex-change surgery[1][2], and the era's genuine, controversial debates over blurring species and racial lines in biomedical and social science[3].",
    sources: [
      { label: 'ScienceDirect: gender identity research article', url: 'https://www.sciencedirect.com/science/article/pii/S0960982204007973' },
      { label: 'Stonewall: Gender Recognition Act 2004', url: 'https://www.stonewall.org.uk/resources/lgbtq-hubs/trans-hub/gender-recognition-act-2004' },
      { label: 'Nature News (Dec 2005)', url: 'https://www.nature.com/news/2005/051219/full/news051219-3.html' },
    ],
  },
  // Best Friends Forever (S9E4)
  129: {
    summary:
      "Kenny is left brain-dead after getting run over while rushing to be first in line for the newly released PlayStation Portable[1], and his family fights in court over whether to remove his feeding tube while protesters gather outside the hospital. This is a direct, fast-turnaround response to the Terri Schiavo case, the 2005 right-to-die legal battle that dominated American news for weeks[2].",
    sources: [
      { label: 'Wikipedia: PlayStation Portable', url: 'https://en.wikipedia.org/wiki/PlayStation_Portable' },
      { label: 'Wikipedia: Terri Schiavo case', url: 'https://en.wikipedia.org/wiki/Terri_Schiavo_case' },
    ],
  },
  // Two Days Before the Day After Tomorrow (S9E8)
  133: {
    summary:
      "A dam breaks and the ensuing disaster gets treated like a preview of climate catastrophe, complete with a Al Gore-style scientist explaining the science badly. It's a parody of disaster films like The Day After Tomorrow and the sometimes-overheated way climate change was dramatized in pop culture.",
    parodyOf: [{ name: 'The Day After Tomorrow (2004 film)', url: 'https://en.wikipedia.org/wiki/The_Day_After_Tomorrow' }],
  },
  // Trapped in the Closet (S9E12)
  137: {
    summary:
      "Stan is declared the reincarnation of Scientology's founder, and the episode lays out the religion's confidential origin story (Xenu, thetans, and all) on screen[1][2][3]. It's a direct, detailed satire of Scientology and of Tom Cruise and John Travolta's outspoken celebrity advocacy for it - the real-world backlash was swift too, with Chef voice actor and Scientologist Isaac Hayes quitting the show over the episode, citing religious intolerance[4][5].",
    sources: [
      { label: 'LA Times: inside the Church of Scientology', url: 'https://www.latimes.com/news/la-fi-scientology18dec18-story.html' },
      { label: '"Trapped in the Closet" clip (YouTube)', url: 'https://www.youtube.com/watch?v=8XwWntSvNLE' },
      { label: '"Trapped in the Closet" clip #2 (YouTube)', url: 'https://www.youtube.com/watch?v=vGl907oeoeQ' },
      { label: 'LA Times: Isaac Hayes leaves South Park', url: 'https://www.latimes.com/archives/la-xpm-2006-mar-18-et-channel18-story.html' },
      { label: 'The Guardian: Isaac Hayes and South Park', url: 'https://www.theguardian.com/world/2006/mar/14/media.arts' },
    ],
    parodyOf: [
      { name: 'R. Kelly - Trapped in the Closet (hip-hopera)', url: 'https://en.wikipedia.org/wiki/Trapped_in_the_Closet' },
      { name: 'Tom Cruise and John Travolta (Scientology advocacy)', url: 'https://en.wikipedia.org/wiki/Tom_Cruise' },
    ],
  },
  // Smug Alert! (S10E2)
  141: {
    summary:
      "Kyle's dad buys a hybrid car and becomes insufferably self-satisfied about it, and San Francisco is eventually engulfed by a cloud of pure smugness. It's a jab at hybrid-car owners' reputation for conspicuous, holier-than-thou environmentalism in the mid-2000s[1], right down to a mock awards-show acceptance speech that echoes real Hollywood moments like George Clooney's self-aware 2006 Oscar speech praising the industry for being 'out of touch.'[2]",
    sources: [
      { label: 'Toyota: our journey in Europe, the 2000s', url: 'https://www.toyota-europe.com/about-us/toyota-in-europe/our-journey-in-europe/the-2000s' },
      { label: "George Clooney's 2006 Oscar speech (Academy speech database)", url: 'https://aaspeechesdb.oscars.org/link/078-2/' },
    ],
  },
  // Cartoon Wars Part I (S10E3)
  142: {
    summary:
      "A cartoon show plans to depict the Prophet Muhammad, and the town has to decide whether airing it is worth the risk. This directly dramatizes the 2005-06 Danish Muhammad cartoons controversy[1][2] and the real censorship fight Comedy Central had with South Park's own creators over depicting Muhammad[3] - a fight that would resurface even more directly a few years later in the 200/201 two-parter.",
    sources: [
      { label: 'Wikipedia: Jyllands-Posten Muhammad cartoons controversy', url: 'https://en.wikipedia.org/wiki/Jyllands-Posten_Muhammad_cartoons_controversy' },
      { label: 'The Guardian: Danish cartoonist axe attack', url: 'https://www.theguardian.com/world/2010/jan/04/danish-cartoonist-axe-attack' },
      { label: 'The Guardian: South Park censored over Muhammad fatwa fears', url: 'https://www.theguardian.com/tv-and-radio/2010/apr/22/south-park-censored-fatwa-muhammad' },
    ],
    parodyOf: [{ name: 'Family Guy', url: 'https://en.wikipedia.org/wiki/Family_Guy' }],
  },
  // Cartoon Wars Part II (S10E4)
  143: {
    summary:
      "The showdown over airing an image of Muhammad continues, ending with Comedy Central itself depicted censoring the image with a black bar - which is exactly what the network did to this real episode[1]. It's a direct, meta commentary on the network's own censorship of the Muhammad cartoon controversy[2][3], and the same fight would flare up again, even more publicly, in the 200/201 two-parter.",
    sources: [
      { label: 'The Guardian: South Park censored over Muhammad fatwa fears', url: 'https://www.theguardian.com/tv-and-radio/2010/apr/22/south-park-censored-fatwa-muhammad' },
      { label: 'Wikipedia: Jyllands-Posten Muhammad cartoons controversy', url: 'https://en.wikipedia.org/wiki/Jyllands-Posten_Muhammad_cartoons_controversy' },
      { label: 'The Guardian: Danish cartoonist axe attack', url: 'https://www.theguardian.com/world/2010/jan/04/danish-cartoonist-axe-attack' },
    ],
    parodyOf: [{ name: 'Family Guy', url: 'https://en.wikipedia.org/wiki/Family_Guy' }],
  },
  // ManBearPig (S10E6)
  145: {
    summary:
      "A washed-up celebrity turns up warning everyone about a creature called ManBearPig[1] that's 'half man, half bear, half pig,' and gets furious that no one takes him seriously. It's a direct, pointed parody of Al Gore and his climate-change advocacy following An Inconvenient Truth - the joke here lands on Gore's perceived grandiosity and crying-wolf theatrics, not on the underlying science. Twelve years later, South Park would explicitly walk this back in Time to Get Cereal and Nobody Got Cereal?, in which ManBearPig turns out to have been real all along.",
    sources: [{ label: 'ManBearPig (IMDb)', url: 'https://www.imdb.com/title/tt0497116/' }],
    parodyOf: [{ name: 'Al Gore (An Inconvenient Truth)', url: 'https://en.wikipedia.org/wiki/Al_Gore' }],
  },
  // Mystery of the Urinal Deuce (S10E9)
  148: {
    summary:
      "Cartman becomes convinced the government is covering up who really left a mess in a urinal, echoing 9/11 'truther' conspiracy logic point for point[1] - and, true to the ugliest strain of real 9/11 trutherism, Cartman's 'investigation' keeps circling back to accusing Kyle, playing his antisemitism as part of the conspiracy-theory logic itself[2]. It's a direct parody of 9/11 conspiracy theories and the War on Terror-era habit of distrusting official explanations for anything.",
    sources: [
      { label: 'BBC News', url: 'https://www.bbc.co.uk/news/58469600' },
      { label: 'ADL: Antisemitic conspiracies about 9/11 endure 20 years later', url: 'https://www.adl.org/resources/report/antisemitic-conspiracies-about-911-endure-20-years-later' },
    ],
  },
  // Go God Go (S10E12)
  151: {
    summary:
      "Cartman freezes himself to skip ahead to the Wii's release date, landing in a future run by warring atheist factions[1], while Mrs. Garrison teaches evolution against parents' objections. It's a direct engagement with Richard Dawkins-style atheism and the evolution-vs-creationism fights in American schools[2].",
    sources: [
      { label: '"Go God Go" clip (YouTube)', url: 'https://www.youtube.com/watch?v=yQUN_6XKKVs&t=194s' },
      { label: 'The Guardian: evolution and schools', url: 'https://www.theguardian.com/education/2006/nov/27/schools.religion' },
    ],
    parodyOf: [{ name: 'Richard Dawkins', url: 'https://en.wikipedia.org/wiki/Richard_Dawkins' }],
  },
  // Go God Go XII (S10E13)
  152: {
    summary:
      "The future-set atheist war concludes[1], with the various atheist factions bickering over the most trivial doctrinal differences. It continues the episode's satire of Richard Dawkins and organized atheism[2], suggesting that removing religion doesn't remove humanity's tendency to fight over ideology.",
    sources: [
      { label: '"Go God Go" clip (YouTube)', url: 'https://www.youtube.com/watch?v=yQUN_6XKKVs&t=194s' },
      { label: 'The Guardian: evolution and schools', url: 'https://www.theguardian.com/education/2006/nov/27/schools.religion' },
    ],
    parodyOf: [{ name: 'Richard Dawkins', url: 'https://en.wikipedia.org/wiki/Richard_Dawkins' }],
  },
  // Night of the Living Homeless (S11E7)
  160: {
    summary:
      "South Park's homeless population suddenly swells, and the townsfolk respond with rising panic and open discrimination, treating the homeless as a faceless, almost zombie-like threat to be feared and driven out rather than people to help[1]. It's a pointed jab at the stigma, dehumanization, and NIMBY-style hostility real communities direct at homeless people, wrapped in a straight zombie-movie parody.",
    sources: [
      { label: 'Petite Adventure Films: Night of the Living Homeless', url: 'https://www.petiteadventurefilms.com/media/5266/' },
    ],
    parodyOf: [{ name: 'Night of the Living Dead (zombie films)', url: 'https://en.wikipedia.org/wiki/Night_of_the_Living_Dead' }],
  },
  // Tonsil Trouble (S12E1)
  168: {
    summary:
      "Cartman deliberately infects himself with Kyle's HIV-positive blood to milk sympathy and get out of gym class, only to actually contract the virus, while Kyle's own diagnosis briefly opens doors that money and fame usually open faster than public health systems do. Magic Johnson - real NBA legend and long-term HIV survivor - ends up personally funding a literal cure, a satire on how effective HIV/AIDS treatment in the real world was, and still is, far more accessible to the wealthy and well-connected than to the general population living with the disease[1][2].",
    sources: [
      { label: 'The Guardian: Aids - the story of a disease that changed the world', url: 'https://www.theguardian.com/world/2007/may/09/aids.comment' },
      { label: 'VOA: South Africa AIDS', url: 'https://www.voanews.com/a/south-africa-aids-pt1-taylor-16nov09-69963137/415664.html' },
    ],
  },
  // Britney's New Look (S12E2)
  169: {
    summary:
      "A pop star is relentlessly hounded by paparazzi and the public even as her life visibly falls apart[1]. It's a direct response to the media circus around Britney Spears's 2007 breakdown, arguing the press and public were complicit in destroying her[2].",
    sources: [
      { label: "Ranker: Britney Spears's breakdown and comeback", url: 'https://www.ranker.com/list/britney-spears-breakdown-and-comeback/donn-saylor' },
      { label: 'Newsweek: I interviewed Britney Spears in 2007 - how she was treated horrified me', url: 'https://www.newsweek.com/i-interviewed-britney-spears-2007how-she-was-treated-horrified-me-1604018' },
    ],
  },
  // Major Boobage (S12E3)
  170: {
    summary:
      "Kenny gets hooked on 'cheesing' - huffing fumes off cats exposed to a mysterious toxin - and his trips are drawn as a full parody of the 1981 animated cult film Heavy Metal, chasing a buxom fantasy woman through a breast-shaped dreamscape[1]. The episode also folds in Jenkem, the real 2007-08 media panic over a supposed fermented-sewage inhalant that authorities feared (wrongly) was about to spread from Zambian street kids to American teenagers[2].",
    sources: [
      { label: 'Fox News: drug made from human waste causing stink on web, in law enforcement', url: 'https://www.foxnews.com/story/drug-made-from-human-waste-causing-stink-on-web-in-law-enforcement' },
      { label: 'ABC News: Jenkem drug scare', url: 'https://abcnews.com/Health/Drugs/story?id=3834092&page=1' },
    ],
    parodyOf: [{ name: 'Heavy Metal (1981 animated film)', url: 'https://en.wikipedia.org/wiki/Heavy_Metal_(film)' }],
  },
  // Canada on Strike (S12E4)
  171: {
    summary:
      "All of Canada goes on strike demanding a cut of internet money that doesn't really exist. It's a satire of the 2007-08 Writers Guild of America strike[1], poking fun at how hard it was for the public (and even some strikers) to understand what 'internet money' entertainment workers were fighting over[2].",
    sources: [
      { label: 'Wikipedia: 2007-08 Writers Guild of America strike', url: 'https://en.wikipedia.org/wiki/2007%E2%80%9308_Writers_Guild_of_America_strike' },
      { label: 'The Guardian: how the 2007 writers strike gave us Bond movie heroes', url: 'https://www.theguardian.com/culture/2023/may/04/2007-writers-strike-bond-movie-heroes' },
    ],
  },
  // About Last Night... (S12E12)
  179: {
    summary:
      "The night of the 2008 election plays out as pure partisan hysteria - South Park's Democrats drunkenly riot in celebration of Obama's win while its Republicans build a doomsday ark, convinced the country is over[1]. Underneath the parody, Obama and McCain turn out to be old friends running a joint Ocean's Eleven-style jewel heist, using the frenzy of election night as cover to rob the Smithsonian - a plot Trey Parker built explicitly as a spoof of Ocean's Eleven so the episode wouldn't have to be about the actual politics[2].",
    sources: [
      { label: 'The Guardian: Barack Obama, Hillary Clinton', url: 'https://www.theguardian.com/world/2008/jun/04/barackobama.hillaryclinton' },
      { label: 'New York Times: New York crowds celebrate Obama', url: 'https://archive.nytimes.com/cityroom.blogs.nytimes.com/2008/11/04/new-york-crowds-celebrate-obama/' },
    ],
    parodyOf: [{ name: "Ocean's Eleven (2001 film)", url: 'https://en.wikipedia.org/wiki/Ocean%27s_Eleven' }],
  },
  // The Ungroundable (S12E14)
  181: {
    summary:
      "Butters becomes convinced he's a vampire after falling in with a group of goth kids who insist they're the real thing, brooding, pale, and obsessed with the aesthetic - a direct spoof of the late-2000s vampire boom kicked off by Twilight, whose sudden mainstream, tween-girl-driven popularity critics described at the time as spreading like a virus[1][2].",
    sources: [
      { label: 'New York Times: Are you a Twilight convert?', url: 'https://archive.nytimes.com/artsbeat.blogs.nytimes.com/2009/11/19/are-you-a-twilight-convert/' },
      { label: 'The Telegraph: Robert Pattinson describes spreading Twilight craze as a virus', url: 'https://www.telegraph.co.uk/news/uknews/6548251/Robert-Pattinson-describes-spreading-Twilight-craze-as-a-virus.html' },
    ],
    parodyOf: [{ name: 'Twilight (film series)', url: 'https://en.wikipedia.org/wiki/The_Twilight_Saga_(film_series)' }],
  },
  // The Ring (S13E1)
  182: {
    summary:
      "Kenny's new girlfriend gets swept up in a Jonas Brothers-endorsed 'purity ring' pledge, which turns out to be a scheme by their real boss - a foul-mouthed, sadistic Mickey Mouse - to market abstinence as a way of selling sexual titillation to young girls. It's a direct, unusually sharp satire of the Jonas Brothers' 2009 concert film and their band's real purity-ring campaign[1], reframed as a broader indictment of Disney's whole family-friendly-brand-as-marketing-machine business model.",
    sources: [
      { label: 'TODAY: purity rings are the hot accessory in pop music', url: 'https://www.today.com/popculture/purity-rings-are-hot-accessory-pop-music-wbna26680718' },
    ],
    parodyOf: [{ name: 'Jonas Brothers: The 3D Concert Experience (2009 film)', url: 'https://en.wikipedia.org/wiki/Jonas_Brothers:_The_3D_Concert_Experience' }],
  },
  // Fishsticks (S13E5)
  186: {
    summary:
      "Cartman claims co-writing credit for a joke he barely contributed to and can't handle that Kanye West won't admit he isn't a genius[1]. It's a direct jab at Kanye West's public persona and ego at the time, built around the era's viral 'I am rich, biatch' meme - and Cartman's shameless credit-grab for someone else's joke echoes comedian Carlos Mencia's real reputation for allegedly stealing other comics' material[2].",
    sources: [
      { label: '"Fishsticks" clip (YouTube)', url: 'https://www.youtube.com/watch?v=G5iEniUb33w' },
      { label: 'Ranker: Carlos Mencia facts', url: 'https://www.ranker.com/list/carlos-mencia-facts/chase-mcneill' },
    ],
  },
  // Fatbeard (S13E7)
  188: {
    summary:
      "Cartman mistakes real news coverage of Somali piracy for a return of swashbuckling Golden Age piracy and drags a few of the boys to Mogadishu to join a crew, only to find genuine poverty and desperation instead of adventure. It's a direct response to the surge of international media attention on piracy in the Indian Ocean in 2008-09[1][2], written and animated around the real-time hijacking of the MV Maersk Alabama - and notably sympathetic to the pirates themselves, whom the episode frames as driven by poverty rather than any romantic outlaw streak.",
    sources: [
      { label: 'BBC News: pirates of the 21st century', url: 'http://news.bbc.co.uk/1/hi/world/africa/7734985.stm' },
      { label: 'The Atlantic: the truth about the Somali pirates', url: 'https://www.theatlantic.com/magazine/archive/2009/04/the-truth-about-the-somali-pirates/307418/' },
    ],
  },
  // Dead Celebrities (S13E8)
  189: {
    summary:
      "Ike is haunted by the ghosts of celebrities who died over the summer while South Park was on hiatus, most of whom have moved on peacefully - except Michael Jackson, who refuses to accept he's dead and ends up possessing Ike as a result. It's a rapid-fire roll call of the real, unusually large wave of celebrity deaths that summer (Jackson, Billy Mays, Farrah Fawcett, Patrick Swayze, Ed McMahon, and more), staged as a broad parody of The Sixth Sense and the medium subplot of Poltergeist.",
    parodyOf: [
      { name: 'The Sixth Sense (1999 film)', url: 'https://en.wikipedia.org/wiki/The_Sixth_Sense' },
      { name: 'Poltergeist (1982 film)', url: 'https://en.wikipedia.org/wiki/Poltergeist_(1982_film)' },
    ],
  },
  // Butters' Bottom Bitch (S13E9)
  190: {
    summary:
      "Butters accidentally becomes South Park's most successful, oddly principled pimp after monetizing his classmates' first kisses, and the episode's most talked-about scene has him visiting a local ACORN office to apply for low-income housing and tax benefits on behalf of his prostitutes. It's a direct, fast-turnaround response to the real 2009 ACORN sting videos[1][2], in which conservative activist James O'Keefe secretly filmed ACORN employees appearing to offer advice to a man posing as a pimp.",
    sources: [
      { label: "CNN: O'Keefe pleads guilty in ACORN prank case", url: 'https://edition.cnn.com/2010/US/09/29/okeefe.cnn.prank/index.html' },
      { label: 'NPR: ACORN grapples with fallout of damaging videos', url: 'https://www.npr.org/2009/09/16/112904370/acorn-grapples-with-fallout-of-damaging-videos' },
    ],
  },
  // Whale Whores (S13E11)
  192: {
    summary:
      "Stan joins an anti-whaling crew to fight back after Japanese whalers massacre dolphins and whales across South Park, and the episode saves as much scorn for the activists as for the whalers themselves. It's a pointed satire of Japanese whaling practices[1], and, more specifically, of the Animal Planet reality series Whale Wars and its self-mythologizing captain Paul Watson, accused of chasing ratings and media attention as much as any real conservation outcome[2].",
    sources: [
      { label: 'This Magazine: whaling culture war', url: 'https://this.org/2009/05/05/whaling-culture-war/' },
      { label: 'CBS News: activists hurl acid at Japanese whalers', url: 'https://www.cbsnews.com/news/activists-hurl-acid-at-japanese-whalers/' },
    ],
    parodyOf: [{ name: 'Whale Wars (Animal Planet series)', url: 'https://en.wikipedia.org/wiki/Whale_Wars' }],
  },
  // Dances with Smurfs (S13E13)
  194: {
    summary:
      "Cartman takes over the school's morning announcements and turns them into a Glenn Beck-style program, complete with chalkboard conspiracy diagrams accusing student body president Wendy Testaburger of plotting genocide against the Smurfs. It's a close parody of Glenn Beck's on-air style and persona[1], tangled up with a pre-emptive dig at the then-unreleased James Cameron film Avatar - the episode argues its Na'vi are just Dances with Wolves crossed with ten-foot-tall blue Smurfs - plus a nod to Sarah Palin's real, just-published memoir Going Rogue, which Wendy adopts as the title of her own tell-all.",
    sources: [
      { label: 'The Guardian: Glenn Beck, prophet of Fox News', url: 'https://www.theguardian.com/commentisfree/2009/sep/16/hadley-freeman-glenn-beck' },
    ],
    parodyOf: [
      { name: 'Glenn Beck', url: 'https://en.wikipedia.org/wiki/Glenn_Beck' },
      { name: 'Avatar (2009 film)', url: 'https://en.wikipedia.org/wiki/Avatar_(2009_film)' },
      { name: 'Dances with Wolves (1990 film)', url: 'https://en.wikipedia.org/wiki/Dances_With_Wolves' },
    ],
  },
  // Sexual Healing (S14E1)
  196: {
    summary:
      "A string of male celebrities are revealed as sex addicts and shipped off to rehab, while the boys try to profit by inventing a fake sex-addiction test. It's a direct response to the wave of celebrity sex scandals and 'sex addiction' rehab stays in the news, most notably Tiger Woods's, right before this episode aired[1], echoing a run of earlier celebrity sex scandals from Bill Clinton[2] to Kobe Bryant[3] to Ben Roethlisberger[4].",
    sources: [
      { label: 'The Guardian: Tiger Woods and sex addiction', url: 'https://www.theguardian.com/global/blog/2010/jan/16/golf-tiger-woods-sex-addiction' },
      { label: 'Wikipedia: Clinton-Lewinsky scandal', url: 'https://en.wikipedia.org/wiki/Clinton%E2%80%93Lewinsky_scandal' },
      { label: 'ESPN (2003 NBA news)', url: 'https://www.espn.com/nba/news/2003/0718/1582701.html' },
      { label: 'ESPN: Roethlisberger civil lawsuit settlement', url: 'https://www.espn.co.uk/nfl/story/_/id/7485346/settlement-reached-ben-roethlisberger-civil-lawsuit' },
    ],
  },
  // The Tale of Scrotie McBoogerballs (S14E2)
  197: {
    summary:
      "Unimpressed that The Catcher in the Rye isn't as scandalous as its reputation suggests, the boys write their own deliberately vile prank novel - only to watch adults, critics, and ideologues of every stripe insist it's secretly a profound allegory for whatever they already believe. It's a sharp satire of pop-culture over-analysis and the impulse to find hidden meaning in works that were never trying to say anything, built around a direct engagement with The Catcher in the Rye's own real, controversial legacy, including its link to the assassination of John Lennon and the attempt on Ronald Reagan's life.\n\nThe boys pad the book out with 465 mentions of Sarah Jessica Parker's looks, dubbing her a 'transvestite donkey witch' purely because insulting her makes readers vomit - and Matthew Broderick gets ambushed about it in a mock Oscars interview while his wife stands right behind him[1].",
    sources: [{ label: 'AV Club: South Park - The Tale of Scrotie McBoogerballs', url: 'https://www.avclub.com/south-park-the-tale-of-scrotie-mcboogerballs-1798164587' }],
    parodyOf: [
      { name: 'The Catcher in the Rye (J.D. Salinger novel)', url: 'https://en.wikipedia.org/wiki/The_Catcher_in_the_Rye' },
      { name: 'Sarah Jessica Parker (persona parody)', url: 'https://en.wikipedia.org/wiki/Sarah_Jessica_Parker' },
    ],
  },
  // Medicinal Fried Chicken (S14E3)
  198: {
    summary:
      "New Colorado laws shut down every KFC in the state while medical-marijuana dispensaries boom - echoing a real Kentucky Fried Chicken location in Los Angeles that had just become a marijuana dispensary of its own[1] - so Cartman starts running an illegal fried-chicken cartel while Randy gives himself testicular cancer just to get a weed referral. Airing amid real Colorado fights over medical-marijuana access and fast-food zoning restrictions[2][3], the episode argues that legislating lifestyle choices just breeds black markets, telling Cartman's rise-and-fall as a broad Scarface parody with Colonel Sanders standing in for drug lord Alejandro Sosa - while also working in a string of jokes about Pope Benedict XVI's handling of the Catholic Church's child sex-abuse scandals[4].",
    sources: [
      {
        label: "Fast Company: sign of the times - abandoned KFC transformed into marijuana dispensary",
        url: 'https://www.fastcompany.com/1342963/sign-times-abandoned-kfc-transformed-marijuana-dispensary',
      },
      { label: 'The New York Times: fast-food zoning enforcement', url: 'https://www.nytimes.com/2009/10/18/us/18enforce.html' },
      { label: 'The New York Times: cities target fast food in poor areas', url: 'https://www.nytimes.com/2011/01/16/us/16fastfood.html' },
      { label: 'BBC News', url: 'https://www.bbc.co.uk/news/10407559' },
    ],
    parodyOf: [{ name: 'Scarface (1983 film)', url: 'https://en.wikipedia.org/wiki/Scarface_(1983_film)' }],
  },
  // You Have 0 Friends (S14E4)
  199: {
    summary:
      "Stan gets forcibly sucked into a monstrous virtual-reality version of his own bloated Facebook account, in a plot styled as a direct parody of Tron, while Kyle nearly loses his real friends chasing Facebook popularity instead. It's a pointed, fairly early satire of social networking's redefinition of 'friendship' as a quantifiable status symbol[1], written right as Facebook was becoming a genuinely inescapable part of adult social life.",
    sources: [
      { label: 'Forbes: are all Facebook friends created equal?', url: 'https://www.forbes.com/sites/danschawbel/2011/11/28/are-all-facebook-friends-created-equal/' },
    ],
    parodyOf: [{ name: 'Tron (film franchise)', url: 'https://en.wikipedia.org/wiki/Tron_(franchise)' }],
  },
  // 200 (S14E5)
  200: {
    summary:
      "Every celebrity South Park has ever mocked bands together to sue the town unless Muhammad is handed over to them, unmasking a years-long argument about who gets mocked and who doesn't[1]. It's the start of a landmark two-parter[2] revisiting the Muhammad-depiction fight[3][4] from Cartoon Wars.",
    sources: [
      { label: "NPR: op-ed, you can't portray Muhammad on TV", url: 'https://www.npr.org/2010/04/26/126283217/op-ed-you-cant-portray-muhammad-on-tv' },
      { label: 'The Guardian: South Park 200th episode', url: 'https://www.theguardian.com/tv-and-radio/tvandradioblog/2010/apr/16/south-park-200th-episode' },
      { label: 'The Guardian: South Park censored over Muhammad fatwa fears', url: 'https://www.theguardian.com/tv-and-radio/2010/apr/22/south-park-censored-fatwa-muhammad' },
      { label: 'BBC News', url: 'https://www.bbc.co.uk/news/world-europe-30813742' },
    ],
  },
  // 201 (S14E6)
  201: {
    summary:
      "The Muhammad standoff concludes with Comedy Central bleeping out an entire speech about intimidation and censorship - which is exactly what the network really did to this episode[1][2]. It's the show's most direct, self-referential statement on being censored over depicting Muhammad[3].",
    sources: [
      { label: 'The Guardian: South Park censored over Muhammad fatwa fears', url: 'https://www.theguardian.com/tv-and-radio/2010/apr/22/south-park-censored-fatwa-muhammad' },
      { label: 'BBC News', url: 'https://www.bbc.co.uk/news/world-europe-30813742' },
      { label: "NPR: op-ed, you can't portray Muhammad on TV", url: 'https://www.npr.org/2010/04/26/126283217/op-ed-you-cant-portray-muhammad-on-tv' },
    ],
  },
  // Crippled Summer (S14E7)
  202: {
    summary:
      "The boys stage an Intervention-style rescue mission for Towelie's spiraling drug addiction while, in a parallel plot at a summer camp for disabled kids, a scheming bully's sabotage attempts keep backfiring on him instead. It's a direct, format-accurate parody of A&E's Intervention - down to the black title cards and tearful confrontation - closing with a joke that compares Towelie's fictional rehab to the real 'Restore Stephen Baldwin' fundraising campaign for the actor's own history of addiction.",
    parodyOf: [{ name: 'Intervention (A&E series)', url: 'https://en.wikipedia.org/wiki/Intervention_(TV_series)' }],
  },
  // Insheeption (S14E10)
  205: {
    summary:
      "Stan and Mr. Mackey are both diagnosed as compulsive hoarders, and a team of specialists sends them into Mackey's subconscious to find the trauma behind it, pulling in a second team modeled directly on the cast of Inception to rescue the rescuers. It's a dense, structurally faithful spoof of Inception's dream-within-a-dream mechanics, grafted onto a parody of reality shows like Hoarders and Hoarding: Buried Alive, which built entire seasons out of exactly this kind of intervention.",
    parodyOf: [
      { name: 'Inception (2010 film)', url: 'https://en.wikipedia.org/wiki/Inception' },
      { name: 'Hoarders / Hoarding: Buried Alive (TV series)', url: 'https://en.wikipedia.org/wiki/Hoarders_(TV_series)' },
    ],
  },
  // HUMANCENTiPAD (S15E1)
  210: {
    summary:
      "Kyle skips reading Apple's iTunes terms and conditions[1] and ends up unknowingly consenting to something horrific. It's a jab at how nobody reads the fine print on tech companies' sprawling terms-of-service agreements, wrapped in a parody of the film The Human Centipede.",
    sources: [
      { label: 'Business Insider: Apple terms and conditions', url: 'https://www.businessinsider.com/apple-terms-and-conditions' },
    ],
    parodyOf: [{ name: 'The Human Centipede (2009 film)', url: 'https://en.wikipedia.org/wiki/The_Human_Centipede_(First_Sequence)' }],
  },
  // Funnybot (S15E2)
  211: {
    summary:
      "Jimmy's school comedy-awards show gets hijacked by a German-built robot comedian that starts telling jokes so relentlessly it becomes a genuine cultural phenomenon, terrifying Jimmy that machines are about to make human comedians obsolete. A parallel plot has real comedian Tyler Perry turn up in character as his own drag alter ego Madea, sticking around school largely because Token keeps paying him to - a dig at Perry's habit of playing the character across an entire industry of Madea films[1].",
    sources: [{ label: 'TV Fanatic: South Park review - Funnybot', url: 'https://www.tvfanatic.com/2011/05/south-park-review-funnybot/' }],
    parodyOf: [{ name: 'Tyler Perry (Madea persona parody)', url: 'https://en.wikipedia.org/wiki/Tyler_Perry' }],
  },
  // Royal Pudding (S15E3)
  212: {
    summary:
      "A Canadian princess is abducted at the altar mid-wedding, sending Ike Broflovski on a quest across the Canadian Arctic to rescue her from the monster Tooth Decay. Airing twelve days after the real thing, it's a deliberately loopy parody of the 2011 wedding of Prince William and Catherine Middleton[1][2], filtered - per the show's habit of routing anything it finds bewildering through Canada - into the show's long-running Canadian mythology rather than a direct royal-family satire.",
    sources: [
      { label: 'The Guardian: South Park takes on the royal wedding', url: 'https://www.theguardian.com/tv-and-radio/2011/may/11/south-park-royal-wedding' },
      { label: 'Royal wedding of Prince William and Catherine Middleton (YouTube)', url: 'https://www.youtube.com/watch?v=schQZY3QjCw' },
    ],
  },
  // Crack Baby Athletic Association (S15E5)
  214: {
    summary:
      "Cartman turns crack-addicted infants into a bare-knuckle fighting league streamed online, and the plot turns on his outrage that EA Sports can profit off his 'athletes' likenesses without paying them a cent - a pointed jab at the real, then-heated debate over whether the NCAA should compensate college athletes for the use of their names and images[1][2], with the crack babies standing in for unpaid student-athletes throughout. Cartman's attempt to justify it by comparing his 'athletes' to plantation-era slave labor makes the metaphor about as blunt as South Park gets.",
    sources: [
      { label: 'ESPN: do college athletes deserve to be paid?', url: 'https://www.espn.com/college-sports/story/_/id/6778847/college-athletes-deserve-paid' },
      { label: "The New York Times: let's start paying college athletes", url: 'https://www.nytimes.com/2012/01/01/magazine/lets-start-paying-college-athletes.html' },
    ],
    parodyOf: [{ name: 'Peter Moore (persona parody)', url: 'https://en.wikipedia.org/wiki/Peter_Moore_(businessman)' }],
  },
  // City Sushi (S15E6)
  215: {
    summary:
      "A Japanese sushi restaurant opens next door to City Wok, and its owner Tuong Lu Kim spirals into a full ethnic-rivalry meltdown that ends with him locked in a psychiatric cell. The episode closes out with a shot-for-shot recreation of the famous ending of Psycho - blanket, fly, and Norman Bates's interior monologue repeated almost word for word - swapping in Lu Kim's fractured 'Japanese vs. Chinese' persona for Bates's split personality[1].",
    sources: [{ label: 'Wikipedia: City Sushi', url: 'https://en.wikipedia.org/wiki/City_Sushi' }],
    parodyOf: [{ name: 'Psycho (1960 film)', url: 'https://en.wikipedia.org/wiki/Psycho_(1960_film)' }],
  },
  // The Last of the Meheecans (S15E9)
  218: {
    summary:
      "A backyard game of 'Texans vs. Mexicans' spirals into a real immigration crisis once Cartman joins the actual US Border Patrol and Butters, mistaken for a Mexican immigrant, accidentally triggers a mass emigration back to Mexico that tanks the American economy overnight. It's a direct, deliberately absurd parody of illegal immigration debates and reality shows like Border Wars[1], turning the usual argument on its head by showing how dependent the US economy actually is on immigrant labor once it's gone.",
    sources: [{ label: 'UNODC: migrant smuggling', url: 'https://www.unodc.org/toc/en/crimes/migrant-smuggling.html' }],
    parodyOf: [
      { name: 'The Last of the Mohicans (1992 film)', url: 'https://en.wikipedia.org/wiki/The_Last_of_the_Mohicans_(1992_film)' },
      { name: 'Border Wars (National Geographic series)', url: 'https://en.wikipedia.org/wiki/Border_Wars_(TV_series)' },
    ],
  },
  // Bass to Mouth (S15E10)
  219: {
    summary:
      "An anonymous gossip site called Eavesdropper starts posting embarrassing private information hacked from students' phones and emails, and the ensuing hunt for its source - a rat literally named Wikileaks - plays out as a direct, none-too-subtle allegory for the real WikiLeaks[1] and the fraught debate over anonymous mass-leaking of private and confidential material that dominated headlines in 2010-11.",
    sources: [{ label: 'WikiLeaks: About', url: 'https://wikileaks.org/About.html' }],
  },
  // Broadway Bro Down (S15E11)
  220: {
    summary:
      "Randy takes Sharon to see Wicked and becomes convinced Broadway musicals hide subliminal messages that trick women into performing oral sex, so he writes his own show that drops the subtext and says it outright - drawing the ire of Broadway's real biggest songwriters. Stephen Sondheim, Stephen Schwartz, Andrew Lloyd Webber, and Elton John all appear as themselves, reimagined as beer-chugging, wing-eating, football-watching bros secretly running the whole con[1], before Randy and Sondheim eventually bro down and earn each other's respect.",
    sources: [{ label: 'The Washington Post: Stephen Sondheim, Elton John featured in South Park love letter to Broadway', url: 'https://www.washingtonpost.com/blogs/arts-post/post/stephen-sondheim-elton-john-featured-in-south-park-love-letter-to-broadway/2011/10/27/gIQAAsYQMM_blog.html' }],
    parodyOf: [
      { name: 'Stephen Sondheim (persona parody)', url: 'https://en.wikipedia.org/wiki/Stephen_Sondheim' },
      { name: 'Stephen Schwartz (persona parody)', url: 'https://en.wikipedia.org/wiki/Stephen_Schwartz_(composer)' },
      { name: 'Andrew Lloyd Webber (persona parody)', url: 'https://en.wikipedia.org/wiki/Andrew_Lloyd_Webber' },
      { name: 'Elton John (persona parody)', url: 'https://en.wikipedia.org/wiki/Elton_John' },
    ],
  },
  // 1% (S15E12)
  221: {
    summary:
      "Cartman insists he must be a genetic 'one percenter' rather than admit he's just overweight and out of shape. It plays on the language of the Occupy Wall Street movement[1] and its '99% vs 1%' framing of wealth inequality, which was dominating headlines when this episode aired in late 2011[2].",
    sources: [
      { label: 'Seton Hall: Occupy Wall Street history tour', url: 'https://blogs.shu.edu/nyc-history/tours/occupy-wall-street/' },
      { label: 'The Guardian: Occupy Wall Street, 10 years on', url: 'https://www.theguardian.com/us-news/2021/sep/12/occupy-wall-street-10-years-on' },
    ],
  },
  // A History Channel Thanksgiving (S15E13)
  222: {
    summary:
      "The boys' school report on Thanksgiving spirals into an actual alien-Pilgrim conflict after they lazily source it from a History Channel special claiming extraterrestrials attended the first Thanksgiving. It's a direct parody of Ancient Aliens[1] and the History Channel's real drift from documentary programming into pseudo-historical conspiracy content, wrapped in a broad Thor pastiche complete with its own Asgard-style alien world and a very confused Natalie Portman.",
    sources: [
      {
        label: 'Smithsonian Magazine: the idiocy, fabrications, and lies of Ancient Aliens',
        url: 'https://www.smithsonianmag.com/science-nature/the-idiocy-fabrications-and-lies-of-ancient-aliens-86294030/',
      },
    ],
    parodyOf: [
      { name: 'Ancient Aliens (History Channel series)', url: 'https://en.wikipedia.org/wiki/Ancient_Aliens' },
      { name: 'Thor (2011 film)', url: 'https://en.wikipedia.org/wiki/Thor_(film)' },
    ],
  },
  // Cash For Gold (S16E2)
  225: {
    summary:
      "Stan's grandfather signs away his prized possessions to shady door-to-door and mail-in 'cash for gold' schemes[1]. It's a direct satire of the wave of cash-for-gold TV and radio ads that proliferated after the 2008 financial crisis, targeting older people trying to cash in on high gold prices[2][3].",
    sources: [
      { label: 'Wikipedia: Cash4Gold', url: 'https://en.wikipedia.org/wiki/Cash4Gold' },
      {
        label: 'Forbes: The Cash4Gold Bankruptcy',
        url: 'https://www.forbes.com/sites/timworstall/2012/10/30/the-cash4gold-bankruptcy-this-is-the-basic-problem-with-recycling/',
      },
      { label: 'Fortune: Pennies for Cash4Gold', url: 'https://fortune.com/2012/10/26/pennies-for-cash4gold/' },
    ],
  },
  // Butterballs (S16E5)
  228: {
    summary:
      "Butters' schoolmates rally around him after spotting a black eye, not realizing his own grandmother is the one actually bullying him, while an anti-bullying counselor turns the fallout into a school-wide 'awareness' campaign that ends up glorifying Stan's own heroics more than addressing any real bullying. It's a direct, unusually blunt spoof of the 2011 documentary Bully and its most visible advocate, Kony 2012 director Jason Russell, skewering the era's anti-bullying movement for chasing viral moments and merchandising deals over real solutions - right down to Stan's own breakdown, stripping naked and dancing in public in San Diego, just as Russell infamously did during his own real, widely covered breakdown.",
    parodyOf: [
      { name: 'Bully (2011 documentary)', url: 'https://en.wikipedia.org/wiki/Bully_(2011_film)' },
      { name: 'Jason Russell (Kony 2012, persona parody)', url: 'https://en.wikipedia.org/wiki/Jason_Russell' },
    ],
  },
  // Raising the Bar (S16E9)
  232: {
    summary:
      "Cartman refuses to diet and instead claims a disability right to a motorized scooter, kicking off a nationwide movement of unashamed obesity that eventually pits him against Here Comes Honey Boo Boo's Alana Thompson in a spaghetti-wrestling match on the White House lawn. It's a broad satire of Here Comes Honey Boo Boo[1] and reality TV's embrace of parading working-class excess for ratings, tangled up with genuine anxiety over rising obesity rates and the accommodations - like extra-wide amusement-park queue lines for mobility scooters - businesses were being asked to make. A parallel subplot has James Cameron diving to the ocean floor to literally locate and raise a societal 'bar' of decency, a nod to Cameron's real record-setting solo dive to the bottom of the Mariana Trench that same year[2].",
    sources: [
      {
        label: 'The Hollywood Reporter: Here Comes Honey Boo Boo\'s Alana "Honey Boo Boo" Thompson',
        url: 'https://www.hollywoodreporter.com/tv/tv-news/here-comes-honey-boo-boo-alana-mama-364933/',
      },
      { label: "Deepsea Challenge: James Cameron's Mariana Trench expedition", url: 'https://deepseachallenge.com/' },
    ],
    parodyOf: [
      { name: 'Here Comes Honey Boo Boo (TLC series)', url: 'https://en.wikipedia.org/wiki/Here_Comes_Honey_Boo_Boo' },
      { name: 'James Cameron (persona parody)', url: 'https://en.wikipedia.org/wiki/James_Cameron' },
    ],
  },
  // Insecurity (S16E10)
  233: {
    summary:
      "Kyle convinces himself his mom is having an affair with the UPS delivery man, and the resulting neighborhood panic turns into a home-security buying spree once Cartman signs up with 'Wolf Home Security' - rebranded, ominously, as 'INsecurity.' It's a pointed jab at real home-alarm companies like ADT and Broadview Security, whose entire pitch runs on manufacturing anxiety about break-ins that statistically almost never happen[1] - all while the vigilante mob hunting the UPS driver dresses and talks exactly like Bane from The Dark Knight Rises, Hans Zimmer-style score and all, for no reason the show ever bothers to explain[2].",
    sources: [
      { label: 'TV Fanatic: South Park review - Banes on the Loose', url: 'https://www.tvfanatic.com/south-park-review-banes-on-the-loose/' },
    ],
    parodyOf: [{ name: 'Bane / The Dark Knight Rises (2012 film)', url: 'https://en.wikipedia.org/wiki/The_Dark_Knight_Rises' }],
  },
  // A Nightmare on Face Time (S16E12)
  235: {
    summary:
      "Randy sinks the family's savings into a Blockbuster Video store just as brick-and-mortar rental is collapsing, and slowly loses his mind in a fairly faithful The Shining pastiche - an eerie, empty store standing in for the Overlook Hotel. It's both a pointed eulogy for Blockbuster, whose real rental business had already been gutted by streaming and Redbox kiosks by 2012[1], and a jab at how casually FaceTime and iPads were starting to mediate real-world experiences like trick-or-treating.",
    sources: [{ label: 'BBC News: Blockbuster to close remaining outlets', url: 'https://www.bbc.co.uk/news/business-11397020' }],
    parodyOf: [{ name: 'The Shining (1980 film)', url: 'https://en.wikipedia.org/wiki/The_Shining_(film)' }],
  },
  // A Scause For Applause (S16E13)
  236: {
    summary:
      "After trace performance-enhancing drugs turn up on the Shroud of Turin, South Park concludes Jesus's miracles were doping all along and ditches its 'What Would Jesus Do?' bracelets - except Stan, who refuses out of pure stubbornness and accidentally becomes a symbol of authenticity, only to be accused (accurately) of gluing his own bracelet back together. It's a direct, thinly veiled parody of the Lance Armstrong doping scandal[1][2] and the mass abandonment of Livestrong wristbands after he was stripped of his Tour de France titles, extended into a broader satire of how quickly the public migrates from one wristband 'cause' to the next without much thought for the underlying issue.\n\nA visit to the bracelet factory switches the whole show over into a full Dr. Seuss pastiche - rhyming narration, primary-color linework, and all - to walk through just how easily a feel-good wristband cause turns into a mass-produced business model[3].",
    sources: [
      {
        label: 'ABC News: Lance Armstrong stripped of Tour de France titles, banned',
        url: 'https://abcnews.com/US/lance-armstrong-stripped-tour-de-france-titles-banned/story?id=17535635',
      },
      {
        label: 'The Conversation: Lance Armstrong, doping, and the illusion of control',
        url: 'https://theconversation.com/lance-armstrong-doping-and-the-illusion-of-control-11680',
      },
      {
        label: 'Seussblog: South Park references Dr. Seuss in Scause for Applause',
        url: 'https://seussblog.wordpress.com/2013/03/28/south-park-references-dr-seuss-in-scause-for-applause/',
      },
    ],
    parodyOf: [{ name: 'Dr. Seuss (rhyming verse style)', url: 'https://en.wikipedia.org/wiki/Dr._Seuss' }],
  },
  // Obama Wins! (S16E14)
  237: {
    summary:
      "The boys' fantasy-football-style bet on the presidential election collides with a real election night. It's the show's real-time response to the 2012 US presidential election, in which Barack Obama won a second term[1].\n\nA subplot has Cartman brokering a deal with the Chinese government, who are trying to buy the Star Wars franchise away from a Mickey Mouse-piloted Disney to keep it out of the studio's hands - a direct, fast-turnaround parody of Disney's real, just-announced $4 billion purchase of Lucasfilm that same month[2]. Morgan Freeman turns up just to narrate the whole convoluted mess in his familiar authoritative voice, earning a fresh freckle every time someone asks why he's the one explaining it - a running gag about how often real documentaries, ads, and films lean on Freeman's narration to sound instantly credible.",
    sources: [
      { label: 'Obama Foundation: The Administration (2012-2017)', url: 'https://www.obama.org/about/administration/2012-2017/' },
      { label: 'The New York Times: Disney Buying Lucasfilm for $4 Billion', url: 'https://archive.nytimes.com/mediadecoder.blogs.nytimes.com/2012/10/30/disney-buying-lucas-films-for-4-billion/' },
      { label: 'AV Club: South Park - Obama Wins!', url: 'https://www.avclub.com/south-park-obama-wins-1798174891' },
    ],
    parodyOf: [
      { name: 'Star Wars (Lucasfilm/Disney franchise)', url: 'https://en.wikipedia.org/wiki/Star_Wars' },
      { name: 'Morgan Freeman (narrator persona parody)', url: 'https://en.wikipedia.org/wiki/Morgan_Freeman' },
    ],
  },
  // Let Go, Let Gov (S17E1)
  238: {
    summary:
      "Cartman starts an NSA-style surveillance operation to spy on his classmates, right as the real US government's mass-surveillance programs are exposed[1]. This aired mere months after Edward Snowden's 2013 leaks[2][3][4] revealed the scope of NSA data collection, and directly engages with that fallout.\n\nA running gag has Alec Baldwin (voiced by Bill Hader) shill a new social network called Shitter, promising to chop off his own thumbs after yet another homophobic outburst - a pointed jab at Baldwin's real, repeated history of losing his temper in public and on social media[5].",
    sources: [
      {
        label: 'Wikipedia: Snowden disclosures',
        url: 'https://en.wikipedia.org/wiki/Snowden_disclosures',
      },
      {
        label: 'The Guardian: Edward Snowden, the whistleblower behind the NSA surveillance revelations',
        url: 'https://www.theguardian.com/world/2013/jun/09/edward-snowden-nsa-whistleblower-surveillance',
      },
      {
        label: 'Citizenfour (documentary)',
        url: 'https://www.youtube.com/watch?v=IEtEFGfCwi4',
      },
      {
        label: 'Permanent Record by Edward Snowden (Goodreads)',
        url: 'https://www.goodreads.com/en/book/show/46223297-permanent-record',
      },
      {
        label: 'ABC News: Alec Baldwin - his most memorable rants, altercations',
        url: 'https://abcnews.com/Entertainment/alec-baldwin-memorable-rants-altercations/story?id=19566165',
      },
    ],
    parodyOf: [{ name: 'Alec Baldwin (persona parody)', url: 'https://en.wikipedia.org/wiki/Alec_Baldwin' }],
  },
  // World War Zimmerman (S17E3)
  240: {
    summary:
      "Cartman falls asleep and dreams of a nationwide race war triggered by a controversial self-defense shooting. It's a direct response to the 2013 George Zimmerman trial over the killing of Trayvon Martin[1], and the anxious national conversation about race that followed the verdict. Cartman's nightmare doubles as a fairly direct parody of the zombie-apocalypse film World War Z, released just months earlier, while the shooting itself turns on the same self-defense reasoning behind Florida's real 'stand your ground' law[2].",
    sources: [
      { label: 'Wikipedia: Killing of Trayvon Martin', url: 'https://en.wikipedia.org/wiki/Killing_of_Trayvon_Martin' },
      { label: 'Wikipedia: Stand-your-ground law', url: 'https://en.wikipedia.org/wiki/Stand-your-ground_law' },
    ],
    parodyOf: [{ name: 'World War Z (2013 film)', url: 'https://en.wikipedia.org/wiki/World_War_Z_(film)' }],
  },
  // Goth Kids 3: Dawn of the Posers (S17E4)
  241: {
    summary:
      "Henrietta comes back from a summer camp transformed into a peppy 'emo,' and Michael realizes an entire pod-people-style invasion is quietly converting South Park's goths one camper at a time. It's a loving pastiche of body-snatcher horror - Invasion of the Body Snatchers most directly, with nods to Day of the Triffids, The Stepford Wives, and Halloween III[1] - repurposed as a joke about subculture gatekeeping and the constant, low-stakes turf war over who counts as authentically alternative.",
    sources: [
      { label: 'AV Club: South Park - Goth Kids 3: Dawn of the Posers', url: 'https://www.avclub.com/south-park-goth-kids-3-dawn-of-the-posers-1798178421' },
    ],
    parodyOf: [{ name: 'Invasion of the Body Snatchers (1956 film)', url: 'https://en.wikipedia.org/wiki/Invasion_of_the_Body_Snatchers_(1956_film)' }],
  },
  // Taming Strange (S17E5)
  242: {
    summary:
      "Kyle struggles to bond with his little brother Ike, who is going through early-onset puberty, while Ike ends up managing a Yo Gabba Gabba! character through a sudden, raunchy image overhaul en route to a Video Music Awards performance - a fairly direct parody of Miley Cyrus's much-discussed twerking performance at the 2013 MTV Video Music Awards[1]. In a separate plot, South Park Elementary's new computer system collapses under one 'upgrade' after another, mirroring the real, well-publicized meltdown of the HealthCare.gov website at its October 2013 launch[2].",
    sources: [
      {
        label: 'The Guardian: Miley Cyrus and the backlash over her MTV Video Music Awards performance',
        url: 'https://www.theguardian.com/music/2013/aug/27/miley-cyrus-mtv-video-music-awards-criticism',
      },
      {
        label: "The Guardian: Obamacare website's computer meltdown",
        url: 'https://www.theguardian.com/technology/2013/nov/03/obamacare-website-barack-obama-healthcare-computer-meltdown',
      },
    ],
    parodyOf: [
      { name: "Miley Cyrus's 2013 VMA performance", url: 'https://en.wikipedia.org/wiki/2013_MTV_Video_Music_Awards' },
      { name: 'Yo Gabba Gabba! (Nick Jr. series)', url: 'https://en.wikipedia.org/wiki/Yo_Gabba_Gabba!' },
    ],
  },
  // Black Friday (S17E7)
  244: {
    summary:
      "The kids' friendships fracture over which new game console to buy, splitting the town into Thrones-style warring camps, while adults literally go to war over Black Friday doorbusters. It's a direct parody of the Xbox One vs. PS4 launch rivalry[1][2] and the real chaos around Black Friday shopping stampedes.",
    sources: CONSOLE_WAR_SOURCES,
    parodyOf: [{ name: 'A Song of Ice and Fire / Game of Thrones', url: 'https://en.wikipedia.org/wiki/Game_of_Thrones' }],
  },
  // A Song of Ass and Fire (S17E8)
  245: {
    summary:
      "The console-war standoff continues as a sprawling Game of Thrones-style fantasy parody, with the kids' console loyalties turned into warring kingdoms. It keeps skewering the Xbox One/PS4 launch rivalry[1][2] while spoofing Game of Thrones, then near its cultural peak.",
    sources: CONSOLE_WAR_SOURCES,
    parodyOf: [{ name: 'A Song of Ice and Fire / Game of Thrones', url: 'https://en.wikipedia.org/wiki/Game_of_Thrones' }],
  },
  // Titties and Dragons (S17E9)
  246: {
    summary:
      "The Game-of-Thrones-style console war saga wraps up. It's the third part of the trilogy mocking the Xbox One vs. PS4 launch hype cycle[1][2], wrapped in Thrones-style fantasy-political parody.",
    sources: CONSOLE_WAR_SOURCES,
    parodyOf: [{ name: 'A Song of Ice and Fire / Game of Thrones', url: 'https://en.wikipedia.org/wiki/Game_of_Thrones' }],
  },
  // The Hobbit (S17E10)
  247: {
    summary:
      "Wendy tries to explain how Photoshop distorts the public's idea of female beauty, using Kim Kardashian as her example, but the lesson backfires into a viral craze once photo-edited images of a classmate go around school - with Kanye West storming in more than once to defend Kardashian's honor. It's a sharp, if scattershot, satire of airbrushed celebrity photos and the media's outsized impact on body image[1][2], undercut by its own bittersweet ending in which Wendy gives up the fight and photoshops herself too.",
    sources: [
      { label: 'BBC News: media and body image', url: 'https://www.bbc.co.uk/news/uk-england-tyne-20251825' },
      { label: 'BBC News: media and body image', url: 'https://www.bbc.co.uk/news/health-29569473' },
    ],
    parodyOf: [
      { name: 'Kim Kardashian (persona parody)', url: 'https://en.wikipedia.org/wiki/Kim_Kardashian' },
      { name: 'Kanye West (persona parody)', url: 'https://en.wikipedia.org/wiki/Kanye_West' },
    ],
  },
  // Go Fund Yourself (S18E1)
  248: {
    summary:
      "The boys try to trademark a Redskins-style team name specifically because it's offensive, betting that controversy is impossible to legally shut down. It's a direct response to the real fight over the Washington Redskins' trademark[1] and name[2], tangled up with a parody of Kickstarter-style crowdfunding culture.",
    sources: [
      {
        label: 'Wikipedia: Washington Redskins trademark dispute',
        url: 'https://en.wikipedia.org/wiki/Washington_Redskins_trademark_dispute',
      },
      {
        label: 'Wikipedia: Washington Redskins name controversy',
        url: 'https://en.wikipedia.org/wiki/Washington_Redskins_name_controversy',
      },
    ],
  },
  // Gluten Free Ebola (S18E2)
  249: {
    summary:
      "A gluten-related epidemic panics the town just as a real disease outbreak looms in the background. It plays the mid-2010s gluten-free diet fad[1] against real fears about the 2014 West African Ebola outbreak reaching the US[2], mocking which health scares actually got proportionate attention.",
    sources: [
      { label: 'The Gluten-Free Diet: Fad or Necessity? (PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5439366/' },
      { label: 'The Times: Ebola outbreak (DRC/Uganda)', url: 'https://www.thetimes.com/world/africa/article/ebola-outbreak-drc-uganda-virus-what-is-f2qz5c880' },
    ],
  },
  // The Cissy (S18E3)
  250: {
    summary:
      "Cartman fakes being 'transginger' to get out of using the crowded boys' room, kicking off a school fight over bathroom access that ends with dueling 'transgender' and 'cissy' facilities. It's a surprisingly earnest entry into the mid-2010s surge of mainstream visibility and debate around transgender identity[1][2] - the same year Time magazine declared a transgender 'tipping point' - anchored by a sincere parallel plot revealing that Randy has secretly been pop star Lorde all along, quietly grappling with an identity he isn't ready to share publicly.",
    sources: [
      { label: 'Time: The Transgender Tipping Point', url: 'https://time.com/135480/transgender-tipping-point/' },
      { label: 'Time: What the Fight Over Bathrooms and Transgender Rights Is Really About', url: 'https://time.com/3974186/transgender-bathroom-debate/' },
    ],
    parodyOf: [{ name: 'Lorde (persona parody)', url: 'https://en.wikipedia.org/wiki/Lorde' }],
  },
  // The Magic Bush (S18E5)
  252: {
    summary:
      "Cartman talks Butters and Kenny into flying a stolen drone around town to spy on the neighbors, and the resulting privacy panic escalates into police and National Guard drones patrolling South Park after one 'shoots down' a civilian's drone - a plot beat that pointedly echoes the real 2014 shooting of Michael Brown and the Ferguson unrest that followed[1]. It's also a broader jab at the sudden, unregulated boom in recreational drones[2], and, via the footage Cartman uploads of a neighbor caught undressing, at the wave of leaked nude celebrity photos that had gone viral just months earlier.",
    sources: [
      { label: 'Wikipedia: Shooting of Michael Brown', url: 'https://en.wikipedia.org/wiki/Shooting_of_Michael_Brown' },
      { label: 'BBC Future: I use a drone to spy on people', url: 'https://www.bbc.com/future/article/20150318-i-use-a-drone-to-spy-on-people' },
    ],
  },
  // Freemium Isn't Free (S18E6)
  253: {
    summary:
      "Stan gets hooked on a Terrance and Phillip mobile game that nickel-and-dimes him for virtual currency at every turn, eventually blowing through tens of thousands of dollars on microtransactions. It's a direct satire of freemium mobile games and their real-world microtransaction and loot-box monetization tactics[1][2][3] - the same model behind real games like Candy Crush Saga, Clash of Clans, EA Sports FC's Ultimate Team packs, and Genshin Impact's gacha banners - and, more specifically, a jab at other adult animated shows' own freemium cash-ins, namely The Simpsons: Tapped Out and Family Guy: The Quest for Stuff.\n\nThe episode also draws an explicit parallel between Stan's freemium addiction and his family's other compulsions - Grandpa Marvin's gambling and Randy's drinking - floating the idea that a predisposition to addiction, whether to slot machines, alcohol, or in-app purchases, might run in families and simply find a different outlet in each generation[4].",
    sources: [
      {
        label: 'Investopedia: How Microtransactions Are Evolving the Economics of Gaming',
        url: 'https://www.investopedia.com/articles/investing/022216/how-microtransactions-are-evolving-economics-gaming.asp',
      },
      {
        label: 'ScienceDirect: microtransactions/gaming research article',
        url: 'https://www.sciencedirect.com/science/article/pii/S1875952124000612',
      },
      { label: 'Harvard Business Review: Making Freemium Work', url: 'https://hbr.org/2014/05/making-freemium-work' },
      { label: 'University of Iowa: pathological gambling runs in families', url: 'https://now.uiowa.edu/news/2014/06/pathological-gambling-runs-families' },
    ],
    parodyOf: [
      { name: 'The Simpsons: Tapped Out (mobile game)', url: 'https://en.wikipedia.org/wiki/The_Simpsons:_Tapped_Out' },
      { name: 'Family Guy: The Quest for Stuff (mobile game)', url: 'https://en.wikipedia.org/wiki/Family_Guy:_The_Quest_for_Stuff' },
    ],
  },
  // Grounded Vindaloop (S18E7)
  254: {
    summary:
      "Cartman convinces Butters he's trapped in a virtual-reality simulation of his own life, and the prank spirals into a nested, increasingly confusing series of fake VR realities involving the whole group - all while a Bill Hader-voiced call-center rep patiently, uselessly tries to walk them through tech support. It's a direct spoof of the Oculus Rift[1], the VR headset that had just relaunched the format's popularity through a high-profile Kickstarter and prototype buzz, paired with a dead-on parody of the maddening, script-bound loops of outsourced customer service call centers[2].",
    sources: [
      { label: 'Wired: hands-on with the Oculus Rift', url: 'https://www.wired.com/2014/05/oculus-rift-4/' },
      { label: 'Talkdesk: a guide to call center agent feedback loops', url: 'https://www.talkdesk.com/blog/guide-to-call-center-agent-feedback-loops/' },
    ],
    parodyOf: [{ name: 'Oculus Rift (VR headset)', url: 'https://en.wikipedia.org/wiki/Oculus_Rift' }],
  },
  // #REHASH (S18E9)
  256: {
    summary:
      "Ike ditches the video games Kyle bought to bond with him in favor of watching PewDiePie's Let's Play commentary, and Cartman - noticing how much traction reaction videos get - starts filming his own commentary on his classmates. It's a direct engagement with the mid-2010s explosion of Let's Play and reaction-video YouTube celebrities like PewDiePie, who voices himself in the episode[1], and a broader jab at how much online attention had shifted to watching other people react to things rather than the things themselves - fittingly, the title itself mocks the empty churn of trending hashtags that dominate news cycles without carrying much actual substance.",
    sources: [
      { label: 'PewDiePie in South Park "#REHASH" (YouTube)', url: 'https://www.youtube.com/watch?v=h4XifO5eWIo' },
      { label: 'Wikipedia: Rehash (South Park)', url: 'https://en.wikipedia.org/wiki/Rehash_(South_Park)' },
    ],
    parodyOf: [
      { name: 'PewDiePie (YouTube personality)', url: 'https://en.wikipedia.org/wiki/PewDiePie' },
      { name: 'Lorde (persona parody)', url: 'https://en.wikipedia.org/wiki/Lorde' },
    ],
  },
  // #HappyHolograms (S18E10)
  257: {
    summary:
      "The Lorde reveal seeded in #REHASH pays off: Stan grows convinced his father Randy is secretly performing again as pop star Lorde, and when Randy and Sharon try to report the ensuing hologram chaos to the police, no one takes them seriously. It's a broad parody of the mid-2010s deceased-celebrity hologram trend - Tupac Shakur's posthumous Coachella hologram chief among them[1] - stretched into a joke about how quickly Twitter trending topics get treated as real news despite carrying no actual substance.",
    sources: [
      {
        label: 'Consequence: South Park mocks music industry with Lorde and Tupac holograms',
        url: 'https://consequence.net/2014/12/south-park-mocks-music-industry-with-lorde-and-tupac-holograms-watch/',
      },
    ],
    parodyOf: [{ name: 'Lorde (persona parody)', url: 'https://en.wikipedia.org/wiki/Lorde' }],
  },
  // Stunning and Brave (S19E1)
  258: {
    summary:
      "PC Principal arrives to police the school's language[1], and the show's discussion of a public gender transition draws directly on Caitlyn Jenner's widely covered 2015 announcement and Vanity Fair cover[2][3]. It kicks off a season-long thread about campus-style political correctness culture.",
    sources: [
      {
        label: 'The Guardian: PC culture, freedom of speech, freedom to be offended',
        url: 'https://www.theguardian.com/commentisfree/2015/jan/28/pc-culture-freedom-of-speech-freedom-to-be-offended',
      },
      { label: 'Vanity Fair: Caitlyn Jenner cover story (June 2015)', url: 'https://www.vanityfair.com/hollywood/2015/06/caitlyn-jenner-bruce-cover-annie-leibovitz' },
      { label: 'Vanity Fair: Call Me Caitlyn (documentary video)', url: 'https://www.vanityfair.com/video/watch/call-me-caitlyn-documentary' },
    ],
    parodyOf: [{ name: 'Caitlyn Jenner (persona parody)', url: 'https://en.wikipedia.org/wiki/Caitlyn_Jenner' }],
  },
  // Where My Country Gone? (S19E2)
  259: {
    summary:
      "A wall goes up around South Park and Canadian immigrants are demonized as job-stealing outsiders. It's a direct parody of Donald Trump's early 2016 campaign rhetoric on immigration[1][2] and border walls[3], with Mr. Garrison standing in for Trump himself.\n\nCaitlyn Jenner debuts alongside him as a recurring sight gag - a wide-eyed, motormouthed driver who runs over pedestrians every time she gets behind the wheel while cheerfully saying 'Buckle up, buckaroo' - a dark callback to the fatal Pacific Coast Highway crash Jenner was involved in earlier that year[4], and she ends the episode as Garrison's running mate.",
    sources: [
      {
        label: 'Wikipedia: Immigration policy of the first Trump administration',
        url: 'https://en.wikipedia.org/wiki/Immigration_policy_of_the_first_Trump_administration',
      },
      {
        label: 'Trump Outlines Immigration, Trade Policies | USA Election News 2016 (YouTube)',
        url: 'https://www.youtube.com/watch?v=A21IvnW3WZ0',
      },
      { label: 'Trump pledges to build a wall (YouTube)', url: 'https://www.youtube.com/watch?v=cBW8mTHDgvk' },
      {
        label: "Billboard: South Park takes on Caitlyn Jenner's car crash and Donald Trump",
        url: 'https://www.billboard.com/music/music-news/south-park-caitlyn-jenner-donald-trump-6707835/',
      },
    ],
    parodyOf: [
      { name: 'Donald Trump (persona parody)', url: 'https://en.wikipedia.org/wiki/Donald_Trump' },
      { name: 'Caitlyn Jenner (persona parody)', url: 'https://en.wikipedia.org/wiki/Caitlyn_Jenner' },
    ],
  },
  // The City Part of Town (S19E3)
  260: {
    summary:
      "After Mr. Garrison's anti-immigration campaigning gets South Park mocked on national TV, the town builds a shiny 'gentrified' district, SoDoSoPa, around Kenny's dilapidated home to win over a Whole Foods scout - all while running ads claiming, falsely, that the new shops and condos are 'supporting' the poor residents they've quietly priced out. It's a direct, unusually pointed satire of urban gentrification[1][2] and the marketing language that dresses displacement up as revitalization, sharpened by a rival subplot in which City Wok's owner builds his own exploitative gentrified district staffed with child labor.",
    sources: [
      {
        label: 'Scholars Strategy Network: how gentrification in American cities maintains inequality',
        url: 'https://scholars.org/contribution/how-gentrification-american-cities-maintains',
      },
      { label: 'Forbes: understanding gentrification', url: 'https://www.forbes.com/sites/petesaunders1/2016/08/29/understanding-gentrification/' },
    ],
  },
  // You're Not Yelping (S19E4)
  261: {
    summary:
      "Cartman starts extorting free meals from restaurants by threatening bad Yelp reviews, and the practice spreads until South Park's Yelp reviewers form an unruly mob that 'beheads' a restaurant mascot in a scene deliberately staged like an ISIS execution video[1]. It's a pointed, deliberately uncomfortable satire of Yelp reviewer entitlement and the real, well-documented trend of restaurant owners publicly fighting back against bad-faith reviewers[2][3], resolved when the town quietly starts spiking elite reviewers' food with bodily fluids instead of confronting them directly.",
    sources: [
      {
        label: 'Wikipedia: Islamic State of Iraq and the Levant - beheadings and mass executions',
        url: 'https://en.wikipedia.org/wiki/Islamic_State_of_Iraq_and_the_Levant#Beheadings_and_mass_executions',
      },
      {
        label: 'Thrillist: restaurant owner vs. Yelpers - fighting back at Yelp',
        url: 'https://www.thrillist.com/eat/nation/restaurant-owner-vs-yelpers-fighting-back-at-yelp-we-talk-to-a-restaurant-owner-who-is-hilariously-destroying-yelp-reviewers',
      },
      { label: 'Eater: South Park takes down Yelpers', url: 'https://www.eater.com/2015/10/15/9538845/south-park-takes-down-yelpers-restaurant-critics' },
    ],
  },
  // Safe Space (S19E5)
  262: {
    summary:
      "Cartman demands everyone only post positive comments on his Instagram, weaponizing 'safe space' language to shut down any criticism. It's a satire of both campus safe-space culture debates[1] and the curated, filtered unreality of social media image culture.\n\nA visiting Steven Seagal - drawn noticeably heavier and sobbing about being fat-shamed online - demands the same protection from criticism, a jab at the real action star's much-mocked weight gain and an uncomfortable parallel to Cartman's own thin skin[2].",
    sources: [
      { label: "Flexa: How safe are 'safe spaces' really?", url: 'https://flexa.careers/blog/how-safe-are-safe-spaces-really' },
      { label: 'South Park Studios: Safe Space', url: 'https://southpark.cc.com/wiki/Safe_Space' },
    ],
    parodyOf: [{ name: 'Steven Seagal (persona parody)', url: 'https://en.wikipedia.org/wiki/Steven_Seagal' }],
  },
  // Naughty Ninjas (S19E7)
  264: {
    summary:
      "PC Principal calls in a full riot-gear police response to silence a student for allegedly talking during an assembly, and the ensuing chaos - including an officer accidentally shooting a bystander - turns the town hostile toward its own police force. It's a direct, unusually blunt engagement with the mid-2010s national reckoning over police militarization and the use of lethal force in low-stakes encounters[1], continuing the season's satire of campus-style political correctness. A subplot in which kids' harmless ninja play gets breathlessly mistaken by local news for ISIS recruitment adds a jab at that era's overheated media coverage of the group[2].",
    sources: [
      { label: 'BBC News', url: 'https://www.bbc.co.uk/news/world-us-canada-32740523' },
      { label: 'The Guardian: Isis - the inside story', url: 'https://www.theguardian.com/world/2014/dec/11/-sp-isis-the-inside-story' },
    ],
  },
  // Sponsored Content (S19E8)
  265: {
    summary:
      "Jimmy turns out to have a freakish knack for spotting real news stories buried among disguised ads, and gets partnered with a new classmate, Leslie, who's suspiciously good at holding everyone's attention. It kicks off the season finale arc's takedown of online publishing's slide into clickbait headlines[1] and 'native' advertising dressed up to look like real editorial content[2], continuing the season's parallel satire of political correctness.\n\nA parallel plot has Mr. Garrison, flanked by running mate Caitlyn Jenner, use a televised presidential debate to talk over Hillary Clinton and brand Syrian refugees as terrorists - a blunt, months-early preview of the real tenor the 2016 campaign trail would take[3].",
    sources: [
      AD_ARC_SOURCE_BBC,
      AD_ARC_SOURCE_NYFA,
      { label: 'Wikipedia: Sponsored Content (South Park)', url: 'https://en.wikipedia.org/wiki/Sponsored_Content_(South_Park)' },
    ],
    parodyOf: [{ name: 'Caitlyn Jenner (persona parody)', url: 'https://en.wikipedia.org/wiki/Caitlyn_Jenner' }],
  },
  // Truth and Advertising (S19E9)
  266: {
    summary:
      "As PC Principal mysteriously vanishes with two students, Jimmy keeps digging into what makes Leslie tick - inching toward the reveal that she isn't a person at all, but a piece of advertising made unsettlingly lifelike. It continues the arc's satire of how indistinguishable native advertising and real editorial content had become[1], while gesturing at the era's growing use of artificial intelligence to target and personalize ads[2].\n\nLeslie's escape attempt is staged as a close homage to Ex Machina - she manipulates Jimmy into freeing her by making him think she's fallen for him, down to a red-lit, surveillance-dodging seduction scene lifted almost beat for beat from the film[3].",
    sources: [
      AD_ARC_SOURCE_ATLANTIC,
      AD_ARC_SOURCE_GUARDIAN_AI,
      { label: 'TV Overmind: South Park season 19 episode 9 review - Truth and Advertising', url: 'https://tvovermind.com/south-park-season-19-episode-9-review-truth-and-advertising/' },
    ],
    parodyOf: [{ name: 'Ex Machina (2014 film)', url: 'https://en.wikipedia.org/wiki/Ex_Machina_(film)' }],
  },
  // PC Principal Final Justice (S19E10)
  267: {
    summary:
      "The season finale reveals Leslie as a self-aware, seemingly unkillable advertisement, and half the town arms itself out of pure paranoia - a jab at America's gun politics and self-defense debates[1]. PC Principal finally 'expels' her by literally punching her to pieces, a violent, on-the-nose punchline to the arc's running satire of clickbait[2] and native advertising[3], and to the season-long fight over political correctness.",
    sources: [AD_ARC_SOURCE_GUN_POLITICS, AD_ARC_SOURCE_BBC, AD_ARC_SOURCE_NYFA],
  },
  // Skank Hunt (S20E2)
  269: {
    summary:
      "An anonymous account starts viciously trolling people online for fun, and no one can figure out who's behind it[1][2]. It's a direct engagement with the mid-2010s rise of anonymous internet trolling and harassment as a recognized, damaging cultural phenomenon[3].",
    sources: [
      { label: 'BBC Bitesize: online trolling', url: 'https://www.bbc.co.uk/bitesize/articles/zfmkrj6' },
      {
        label: 'Anyone Can Become a Troll: Causes of Trolling Behavior in Online Discussions (PMC)',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5791909/',
      },
      {
        label: 'The Guardian: Internet trolls are also real-life trolls',
        url: 'https://www.theguardian.com/science/head-quarters/2014/feb/25/internet-trolls-are-also-real-life-trolls',
      },
    ],
  },
  // The Damned (S20E3)
  270: {
    summary:
      "Aired just two days after the real thing, the episode has Mr. Garrison - campaigning as 'the Giant Douche' - gain ground purely by admitting on stage that he's a dishonest, unqualified candidate, while Randy switches to backing 'the Turd Sandwich,' a stand-in for Hillary Clinton. It's a direct parody of the first Clinton-Trump presidential debate[1], looping back to South Park's own 2004 'douche vs. turd sandwich' joke from Douche and Turd. Meanwhile the season's trolling arc tightens around Gerald Broflovski, the still-anonymous troll Skankhunt42, as a grieving Denmark vows to hunt him down after his harassment campaign drives a cancer-charity founder to suicide.",
    sources: [
      { label: 'South Park spoofs the first Clinton-Trump presidential debate (YouTube)', url: 'https://www.youtube.com/watch?v=855Am6ovK7s' },
    ],
  },
  // Douche and a Danish (S20E5)
  272: {
    summary:
      "Garrison starts firing off sexually explicit comments about women at his own rallies, hoping to tank his numbers and lose the election on purpose - only for his crowds to riot in support anyway. It's a direct response to the wave of stories about Donald Trump's lewd comments and sexual-misconduct allegations that broke just before this aired[1][2]. In parallel, Gerald Broflovski and his fellow trolls scramble to sabotage Denmark's Troll Trace identity-tracing site before it can expose them, while Cartman and Heidi run a school fundraiser selling Danish pastries to help fund it.",
    sources: [
      {
        label: 'The Guardian: list of Donald Trump sexual misconduct allegations',
        url: 'https://www.theguardian.com/us-news/2016/oct/13/list-of-donald-trump-sexual-misconduct-allegations',
      },
      {
        label: 'PBS NewsHour: sexual misconduct allegations against Trump, recapped',
        url: 'https://www.pbs.org/newshour/politics/sexual-misconduct-allegations-trump-recapped',
      },
    ],
    parodyOf: [{ name: 'Donald Trump (persona parody)', url: 'https://en.wikipedia.org/wiki/Donald_Trump' }],
  },
  // Fort Collins (S20E6)
  273: {
    summary:
      "The Danes turn Heidi's emoji-based detective work into an actual tool, using their Troll Trace program to publicly dox an entire town's internet history and expose a member of Gerald's trolling crew - who is then burned alive by a victim's father as Fort Collins descends into chaos. It's a direct parody of the real DDoS cyberattack that knocked major sites offline across the US East Coast just five days before this aired[1], here reimagined as a mass, town-levelling privacy breach. The episode also escalates the season's Member Berries plot, revealing the nostalgia-berries are sentient and actively working to keep Garrison in the race against Hillary Clinton.",
    sources: [
      {
        label: 'The Guardian: DDoS attack that disrupted internet was largest of its kind in history, say experts',
        url: 'https://www.theguardian.com/technology/2016/oct/26/ddos-attack-dyn-mirai-botnet',
      },
    ],
  },
  // Oh, Jeez (S20E7)
  274: {
    summary:
      "Mr. Garrison, having accidentally become President-elect, privately admits to Caitlyn Jenner that he never actually wanted to win and has no real plan for governing. Made and aired the night after the real 2016 US election[1], it's the show's raw, same-week reaction to Donald Trump's shock victory over Hillary Clinton.",
    sources: [
      { label: 'The Guardian: Donald Trump wins US election', url: 'https://www.theguardian.com/us-news/2016/nov/09/donald-trump-wins-us-election-news' },
    ],
    parodyOf: [{ name: 'Donald Trump (persona parody)', url: 'https://en.wikipedia.org/wiki/Donald_Trump' }],
  },
  // Members Only (S20E8)
  275: {
    summary:
      "The newly 'elected' President Garrison starts abusing his authority and gets himself a Trump-style toupee, while Cartman, Heidi, and Butters try to hitch a literal ride off Earth with SpaceX - only to get a factory tour from Elon Musk himself, who explains that a Mars rocket is still years away. It's a cameo built around Musk's real, well-publicized SpaceX Mars-colonization ambitions[1], dropped into an episode otherwise dramatizing a worst-case Trump-style presidency and closing in on Gerald Broflovski's unmasking as the troll Skankhunt42.",
    sources: [
      { label: 'The Guardian: Elon Musk unveils his interplanetary spaceship to take humans to Mars', url: 'https://www.theguardian.com/technology/2016/sep/27/elon-musk-spacex-mars-colony' },
    ],
    parodyOf: [
      { name: 'Elon Musk (playing himself)', url: 'https://en.wikipedia.org/wiki/Elon_Musk' },
      { name: 'Donald Trump (persona parody)', url: 'https://en.wikipedia.org/wiki/Donald_Trump' },
    ],
  },
  // Not Funny (S20E9)
  276: {
    summary:
      "Amid global panic over the Troll Trace leak site, a crowd lays siege to a barricaded SpaceX facility - giving Elon Musk a cameo playing himself amid the chaos[1], continuing the season's trolling-arc satire - while Cartman spirals over whether Heidi Turner is actually funny, a small, personal echo of the season's bigger argument about who gets to say what without facing consequences.",
    sources: [{ label: 'South Park Public Library: Elon Musk', url: 'https://southpark.fandom.com/wiki/Elon_Musk' }],
    parodyOf: [{ name: 'Elon Musk (playing himself)', url: 'https://en.wikipedia.org/wiki/Elon_Musk' }],
  },
  // White People Renovating Houses (S21E1)
  278: {
    summary:
      "A wholesome couple's home-renovation show becomes a local obsession, echoing HGTV hits like Fixer Upper. It's a satire of the home-renovation TV boom[1] and the gentrification that so often follows in its wake.\n\nCartman spends the episode barking commands and profanity at an Amazon Echo-style smart speaker, mocking the sudden mid-2010s rush of Alexa, Google Home, and Siri devices into American living rooms[2] - a bit that famously backfired in real life, setting off actual Echoes and Google Homes in viewers' houses. Meanwhile, a group of men waving torches and Confederate flags march through the background protesting that the devices have taken their jobs, a direct visual echo of the torch-lit white nationalist march at the deadly August 2017 'Unite the Right' rally in Charlottesville, Virginia[3].",
    sources: [
      {
        label: 'Wikipedia: Category - Home renovation television series',
        url: 'https://en.wikipedia.org/wiki/Category:Home_renovation_television_series',
      },
      {
        label: 'The Guardian: Amazon Echo, Google Home, Sonos One - which smart speaker should you buy?',
        url: 'https://www.theguardian.com/technology/2017/dec/01/amazon-echo-google-home-sonos-one-which-smart-speaker-buy',
      },
      {
        label: 'SPLC: flags and other symbols used by far-right groups in Charlottesville',
        url: 'https://www.splcenter.org/resources/hatewatch/flags-and-other-symbols-used-far-right-groups-charlottesville/',
      },
    ],
    parodyOf: [{ name: 'Fixer Upper (HGTV series)', url: 'https://en.wikipedia.org/wiki/Fixer_Upper_(TV_series)' }],
  },
  // Put It Down (S21E2)
  279: {
    summary:
      "Craig tries to talk Tweek down from a spiral of stress over real-world headlines - North Korea's escalating nuclear tests and tension with the US[1][2], and Donald Trump's habit of picking fights on Twitter[3] - even as their own on-again-off-again 'relationship' becomes the actual town-wide obsession.",
    sources: [
      { label: 'BBC News: North Korea profile', url: 'https://www.bbc.co.uk/news/world-asia-17823706' },
      { label: 'CBS News: North Korea\'s nuclear tests timeline', url: 'https://www.cbsnews.com/news/north-koreas-nuclear-tests-timeline/' },
      { label: 'BBC News', url: 'https://www.bbc.co.uk/news/world-us-canada-38245530' },
    ],
  },
  // Holiday Special (S21E3)
  280: {
    summary:
      "A forbidden romance between a white townsperson and a Native American man plays out against the town's fight over celebrating Columbus Day. It's a direct engagement with the real, then-growing movement to replace Columbus Day with Indigenous Peoples' Day[1], and the protests and city-by-city fights that came with it[2].",
    sources: [
      { label: 'Time: the history of Columbus Day and Indigenous Peoples\' Day', url: 'https://time.com/4971178/indigenous-peoples-day-history-columbus-day/' },
      { label: 'The New York Times: Columbus Day protest', url: 'https://www.nytimes.com/2017/10/09/us/columbus-day-protest.html' },
    ],
  },
  // Franchise Prequel (S21E4)
  281: {
    summary:
      "Professor Chaos weaponizes Facebook itself as his latest evil scheme, exploiting how easily fake news and misinformation spread across the platform. It's a direct satire of the real 2016-17 uproar over Facebook's role in spreading fake news, and the company's own scramble to start fact-checking and flagging it[1].\n\nThe town also summons Mark Zuckerberg himself to explain the mess - rendered as a wide-eyed, robotically dubbed martial artist who fights the townspeople and invites himself into their homes, one of the show's most memorably bizarre celebrity caricatures[2].",
    sources: [
      { label: 'The Guardian: Facebook to "flag" fake news', url: 'https://www.theguardian.com/technology/2016/dec/15/facebook-flag-fake-news-fact-check' },
      {
        label: 'Forbes: Franchise Prequel swipes at Mark Zuckerberg, misses',
        url: 'https://www.forbes.com/sites/danidiplacido/2017/10/13/south-park-review-franchise-prequel-swipes-at-mark-zuckerberg-misses/',
      },
    ],
    parodyOf: [{ name: 'Mark Zuckerberg (persona parody)', url: 'https://en.wikipedia.org/wiki/Mark_Zuckerberg' }],
  },
  // Hummels & Heroin (S21E5)
  282: {
    summary:
      "Randy accidentally gets the whole town hooked on painkillers while running a shady side hustle. It's a direct response to the US opioid crisis[1][2][3], satirizing both addiction and the profiteering (from doctors to dealers) that fed it.\n\nA parallel plot follows Stan's grandfather scheming for control of his retirement home, which the episode plays as a straight prison-yard power struggle complete with a reigning 'top bitch,' smuggled contraband, and a stint in 'solitaire confinement' - a broad joke that daily life in assisted living can look a lot like life behind bars, just with shuffleboard instead of a yard.",
    sources: [
      {
        label: 'CDC: Understanding the Opioid Overdose Epidemic',
        url: 'https://www.cdc.gov/overdose-prevention/about/understanding-the-opioid-overdose-epidemic.html',
      },
      { label: 'SHADAC: The Opioid Epidemic in the United States', url: 'https://www.shadac.org/opioid-epidemic-united-states' },
      { label: 'Painkiller (Netflix)', url: 'https://www.netflix.com/gb/title/81095069' },
    ],
  },
  // Sons A Witches (S21E6)
  283: {
    summary:
      "At the annual grown-ups-only Halloween party, one of the dads reads from a real spellbook and becomes an actual witch - and the other men scramble to brand him uniquely monstrous while brushing past their own reckless behavior. It's a Halloween allegory for the Harvey Weinstein revelations that had broken weeks earlier[1], skewering the industry figures who publicly denounced Weinstein while having their own history in the same 'poisonous environment'[2][3].",
    sources: [
      { label: 'BBC News: entertainment and arts', url: 'https://www.bbc.co.uk/news/entertainment-arts-41551656' },
      {
        label: 'The Telegraph: Hollywood accused of hypocrisy over Harvey Weinstein sexual harassment',
        url: 'https://www.telegraph.co.uk/news/2017/10/07/hollywood-accused-hypocrisy-harvey-weinstein-sexual-harrassment/',
      },
      { label: 'People: Ben Affleck statement on Harvey Weinstein allegations', url: 'https://people.com/movies/ben-affleck-statement-harvey-weinstein-allegations/' },
    ],
  },
  // Doubling Down (S21E7)
  284: {
    summary:
      "A local news station gets bought up and forced to read identical, oddly slanted scripts from corporate. It's a jab at real local-news consolidation by conglomerates like Sinclair Broadcast Group, later notorious for making anchors nationwide recite the same promotional scripts verbatim[1].\n\nA parallel White House subplot has President Garrison sexually and psychologically abusing Mitch McConnell, Paul Ryan, and Mike Pence, who keep making excuses for him and staying loyal anyway. It's a pointed dramatization of the real commentary, common by late 2017, that accused the GOP establishment of a kind of Stockholm syndrome with Trump - defending and normalizing behavior from their own leader that they'd never tolerate from anyone else[2].",
    sources: [
      {
        label: "Sinclair requires anchors to read script bashing 'fake' news (YouTube)",
        url: 'https://www.youtube.com/watch?v=aGIYU2Xznb4',
      },
      {
        label: "Vanity Fair: The Trump White House's Stockholm Syndrome",
        url: 'https://www.vanityfair.com/news/2017/12/trump-white-house-stockholm-syndrome-ed-letter',
      },
    ],
    parodyOf: [{ name: 'Donald Trump (persona parody)', url: 'https://en.wikipedia.org/wiki/Donald_Trump' }],
  },
  // Moss Piglets (S21E8)
  285: {
    summary:
      "Heidi Turner refuses to play until the school addresses her thin, self-serving 'protest,' and volleyball attendance craters as a result - a direct parody of the real ratings and attendance drop the NFL saw amid the national anthem protests[1][2].",
    sources: [
      {
        label: 'Forbes: confirmed - NFL losing millions of TV viewers because of national anthem protests',
        url: 'https://www.forbes.com/sites/mikeozanian/2016/10/05/confirmed-nfl-losing-millions-of-tv-viewers-because-of-national-anthem-protests/',
      },
      { label: 'BBC News', url: 'https://www.bbc.co.uk/news/world-us-canada-44230772' },
    ],
  },
  // Splatty Tomato (S21E10)
  287: {
    summary:
      "A supernatural, Stranger Things/It-style horror plot unfolds around Mr. Garrison's return to town, centered on the aggrieved, anxious White family - a pointed stand-in for the white, middle-class voters whose anger and resentment fueled real support for Donald Trump[1].",
    sources: [
      { label: 'The New York Times: who are the angriest Republicans?', url: 'https://www.nytimes.com/2016/03/30/opinion/campaign-stops/who-are-the-angriest-republicans.html' },
    ],
    parodyOf: [
      { name: 'Stranger Things (Netflix series)', url: 'https://en.wikipedia.org/wiki/Stranger_Things' },
      { name: 'It (Stephen King novel/film)', url: 'https://en.wikipedia.org/wiki/It_(novel)' },
    ],
  },
  // Dead Kids (S22E1)
  288: {
    summary:
      "A student is killed at school and the adults' reaction is to treat it as a mundane inconvenience rather than a tragedy. It's a bleak, direct commentary on how routine school shootings had become in American life[1], and how numb institutional responses to them felt by 2018[2].",
    sources: [
      { label: 'Brady: School Shootings', url: 'https://www.bradyunited.org/resources/issues/school-shootings' },
      { label: 'BBC News (business-46507514)', url: 'https://www.bbc.co.uk/news/business-46507514' },
    ],
  },
  // A Boy And A Priest (S22E2)
  289: {
    summary:
      "Butters strikes up a suspiciously close bond with the new parish priest, and the town's panic points straight back at the Catholic Church's real, ongoing reckoning with clergy sex abuse and cover-ups[1][2][3] - the same scandal Red Hot Catholic Love tackled years earlier.",
    sources: [
      { label: 'The Boston Globe: church allowed abuse by priest for years', url: 'https://www.bostonglobe.com/news/special-reports/2002/01/06/church-allowed-abuse-priest-for-years/cSHfGkTIrAT25qKGvBuDNM/story.html' },
      { label: 'The Boston Globe: scores of priests involved in sex abuse cases', url: 'https://www.bostonglobe.com/news/special-reports/2002/01/31/scores-priests-involved-sex-abuse-cases/kmRm7JtqBdEZ8UF0ucR16L/story.html' },
      { label: 'The Guardian (2002)', url: 'https://www.theguardian.com/world/2002/feb/23/usa.matthewengel' },
    ],
  },
  // The Problem with a Poo (S22E3)
  290: {
    summary:
      "Mr. Hankey's un-PC old jokes threaten to get him fired as director of the Christmas pageant, in an episode whose title riffs directly on 'The Problem with Apu' documentary about outdated ethnic stereotypes on TV - and, per the show's own framing, on Roseanne Barr's real racist-tweet scandal that got her sitcom cancelled just months earlier[1][2]. It aired in the thick of the Brett Kavanaugh confirmation fight[3][4], another public reckoning over old behavior catching up with someone in real time.",
    sources: [
      {
        label: 'The Hollywood Reporter: South Park goes after Roseanne Barr, Simpsons\' Apu character',
        url: 'https://www.hollywoodreporter.com/tv/tv-news/south-park-goes-roseanne-barr-simpsons-apu-character-1151462/',
      },
      { label: 'BBC News', url: 'https://www.bbc.co.uk/news/world-us-canada-44294632' },
      { label: 'BBC News', url: 'https://www.bbc.co.uk/news/world-us-canada-45774174' },
      { label: 'Axios: Brett Kavanaugh timeline', url: 'https://www.axios.com/2018/10/02/brett-kavanaugh-timeline-allegations-vote' },
    ],
    parodyOf: [
      { name: 'The Problem with Apu (2017 documentary)', url: 'https://en.wikipedia.org/wiki/The_Problem_with_Apu' },
      { name: 'Roseanne Barr (2018 Twitter scandal)', url: 'https://en.wikipedia.org/wiki/Roseanne_Barr' },
    ],
  },
  // Tegridy Farms (S22E4)
  291: {
    summary:
      "Randy moves the family to a farm to grow marijuana now that it's legal, marketing it with a folksy 'integrity' pitch[1]. It kicks off a long-running satire of the newly legal cannabis industry and the wave of opportunists rebranding themselves as wholesome small-farm entrepreneurs.\n\nThe saga later spins off into Tegridy-branded vapes, with the show taking aim at the real, explosive rise of teen vaping in the US - a public-health scare serious enough that commentators worried it would cross the Atlantic and take hold in Britain too[2], where youth vaping rates were already climbing fast[3][4].",
    sources: [
      {
        label: 'From Facing Jail Time to Growing Craft Cannabis in New Jersey | Hamilton Farms (YouTube)',
        url: 'https://www.youtube.com/watch?v=N-uXbDVy9uA',
      },
      {
        label: "The Guardian: can we stop America's teen vaping epidemic arriving in Britain?",
        url: 'https://www.theguardian.com/society/2019/aug/11/can-we-stop-americas-teen-vaping-epidemic-arriving-in-britain-',
      },
      { label: 'The Guardian: disposable vapes (UK)', url: 'https://www.theguardian.com/society/2026/may/17/disposable-vapes-suez-uk' },
      {
        label: 'ASH: Use of vapes among young people in Great Britain (2023, PDF)',
        url: 'https://ash.org.uk/uploads/Use-of-vapes-among-young-people-GB-2023-v2.pdf',
      },
    ],
  },
  // The Scoots (S22E5)
  292: {
    summary:
      "The kids discover electric scooters left scattered around town and start riding them everywhere to haul in more Halloween candy than ever, while the adults grumble about reckless riders clogging up the sidewalks. It's a direct parody of the sudden 2018 rise of dockless e-scooter rental apps like Bird and Lime[1], which dropped scooters on city streets almost overnight and set off a real backlash over sidewalk clutter and reckless riding[2].",
    sources: [
      { label: 'TechCrunch: the electric scooter wars of 2018', url: 'https://techcrunch.com/2018/12/23/the-electric-scooter-wars-of-2018/' },
      { label: 'BBC News', url: 'https://www.bbc.co.uk/news/uk-53219331' },
    ],
  },
  // Time To Get Cereal (S22E6)
  293: {
    summary:
      "Twelve years after ManBearPig was laughed out of town, the creature turns out to have been real all along - and is now devastating South Park while Al Gore, still trying to warn everyone, becomes the only person who's actually been right the whole time. It's South Park doing something it rarely does: explicitly retracting its own earlier punchline, reframing the 2006 original as satirizing the messenger's grandiosity rather than the message itself.",
    parodyOf: [{ name: 'Al Gore (An Inconvenient Truth)', url: 'https://en.wikipedia.org/wiki/Al_Gore' }],
  },
  // Nobody Got Cereal? (S22E7)
  294: {
    summary:
      "The fallout from ManBearPig's return escalates as the boys go on the run from the police and the creature itself, while the town scrambles to cover up the damage rather than face what's actually happening.\n\nThe reveal driving it all is a sharp climate-change allegory in its own right[1]: decades ago, Stan's Grandpa and the town's other elderly residents struck a deal with the demonic ManBearPig, trading a future of mass death for a present full of cool stuff - gas-guzzling cars, boutique ice cream - handing the consequences down to their kids and grandkids to deal with.\n\nBy the end, South Park itself doesn't break the cycle so much as continue it: the townspeople cut their own new deal with ManBearPig, buying another five years of comfort at the cost of a murder rampage that will fall on children in the Third World instead of them - a pointed dig at how wealthy nations keep offloading climate change's worst consequences onto the developing world. Together with Time To Get Cereal, it completes South Park's rare self-corrective two-parter - Trey Parker and Matt Stone have both described the arc in interviews as an explicit apology for playing climate change for a punchline back in 2006.",
    sources: [
      { label: 'Salon: South Park, climate change, and ManBearPig', url: 'https://www.salon.com/2018/11/15/south-park-climate-change-manbearpig/' },
    ],
    parodyOf: [{ name: 'Al Gore (An Inconvenient Truth)', url: 'https://en.wikipedia.org/wiki/Al_Gore' }],
  },
  // Unfulfilled (S22E9)
  296: {
    summary:
      "The town gets a company-town glow-up when an Amazon Fulfillment Center moves in, until the contradictions of underpaid warehouse labor start to show. It's a direct satire of Amazon's real fulfillment-center boom and its warehouse workers' brutal conditions[1], amid the company's rapid nationwide expansion[2] - including the 2018 spectacle of cities across the US publicly competing to host its second headquarters.",
    sources: [
      {
        label: 'The Guardian: Amazon fulfillment center warehouse employees union',
        url: 'https://www.theguardian.com/technology/2019/jan/01/amazon-fulfillment-center-warehouse-employees-union-new-york-minnesota',
      },
      { label: 'Business Insider: Amazon warehouse locations in the US (2017)', url: 'https://www.businessinsider.com/amazon-warehouse-locations-in-us-2017-9' },
    ],
  },
  // Bike Parade (S22E10)
  297: {
    summary:
      "The chaos at the Amazon Fulfillment Center from Unfulfilled boils over into the town's Bike Parade, as Kenny refuses to take corporate sponsorship money in solidarity with the striking warehouse workers[1][2]. It's a direct continuation of the show's satire of Amazon's real fulfillment-center labor conditions and rapid expansion.\n\nJeff Bezos himself shows up as a direct, unflattering persona parody - drawn as a bulbous-headed Talosian alien straight out of Star Trek's original 1965 pilot 'The Cage' - ruthless enough to have his own Alexa unit ordered to kill Kenny for organizing the strike[3].",
    sources: [
      {
        label: 'The Guardian: Amazon fulfillment center warehouse employees union',
        url: 'https://www.theguardian.com/technology/2019/jan/01/amazon-fulfillment-center-warehouse-employees-union-new-york-minnesota',
      },
      { label: 'Business Insider: Amazon warehouse locations in the US (2017)', url: 'https://www.businessinsider.com/amazon-warehouse-locations-in-us-2017-9' },
      {
        label: 'World Socialist Web Site: South Park episodes dramatize plight of Amazon workers, ridicule Jeff Bezos',
        url: 'https://www.wsws.org/en/articles/2019/01/09/park-j09.html',
      },
    ],
    parodyOf: [{ name: 'Jeff Bezos (persona parody)', url: 'https://en.wikipedia.org/wiki/Jeff_Bezos' }],
  },
  // Mexican Joker (S23E1)
  298: {
    summary:
      "Kyle gets sent off to a summer camp that turns out to be a parody of the real US immigrant child-detention centers making headlines[1][2][3].\n\nThe episode's dark joke - explicitly modeled on the year's other big pop-culture villain-origin story, Joker - is that locking traumatized kids in cages risks manufacturing the very threat the policy claims to guard against: a 'Mexican Joker' born from the exact system meant to prevent him. Its satire cuts at how both sides of the immigration debate flattened a genuinely complicated issue into slogans, without either fully owning a workable fix.",
    sources: [
      { label: 'CNN: ICE kids in detention', url: 'https://edition.cnn.com/2019/10/24/us/ice-kids-detention-invs' },
      { label: 'Freedom for Immigrants: child detention stories', url: 'https://www.freedomforimmigrants.org/child-detention-stories' },
      { label: "The Guardian: 'detained' - inside the US's largest immigrant detention system under Trump", url: 'https://www.theguardian.com/us-news/2019/sep/24/detained-us-largest-immigrant-detention-trump' },
    ],
    parodyOf: [{ name: 'Joker (2019 film)', url: 'https://en.wikipedia.org/wiki/Joker_(2019_film)' }],
  },
  // Band in China (S23E2)
  299: {
    summary:
      "A kids' band tours China and discovers Hollywood self-censors to keep access to the Chinese market, while the NBA gets caught in a similar bind. This aired right as the real NBA faced Chinese backlash over a pro-Hong-Kong tweet[1], and the episode's blunt satire of Chinese censorship - echoing China's real ban on Winnie the Pooh imagery over comparisons to President Xi Jinping[2] - got South Park itself scrubbed from the Chinese internet and banned in China within days of airing[3].\n\nRandy's own subplot supplies the episode's sharpest sight gag: to seal a marijuana deal with Chinese officials, he lures Winnie the Pooh into an alley with honey and strangles him to death - a shot-for-shot recreation of Anton Chigurh's opening kill of a sheriff's deputy in No Country for Old Men[4].",
    sources: [
      {
        label: "ESPN: James Harden apologizes as controversy grows: 'We love China'",
        url: 'https://www.espn.com/nba/story/_/id/27787634/james-harden-apologizes-controversy-grows-love-china',
      },
      {
        label: 'The Guardian: China bans Winnie the Pooh film to stop comparisons to President Xi',
        url: 'https://www.theguardian.com/world/2018/aug/07/china-bans-winnie-the-pooh-film-to-stop-comparisons-to-president-xi',
      },
      { label: 'BBC News: China scrubs South Park after episode mocks censorship', url: 'https://www.bbc.co.uk/news/world-asia-china-49968867' },
      { label: 'Wikipedia: Band in China', url: 'https://en.wikipedia.org/wiki/Band_in_China' },
    ],
    parodyOf: [{ name: 'No Country for Old Men (2007 film)', url: 'https://en.wikipedia.org/wiki/No_Country_for_Old_Men_(film)' }],
  },
  // Shots!!! (S23E3)
  300: {
    summary:
      "Parents panic over how many vaccines their kids are getting, echoing real anti-vaccine sentiment[1][2]. It's a continued satire of the anti-vaccine movement, mocking both paranoid parents and the profit motives of the healthcare system around them.",
    sources: [
      { label: 'Wikipedia: Anti-vaccine activism', url: 'https://en.wikipedia.org/wiki/Anti-vaccine_activism' },
      {
        label: 'BBC Future: the strange history of the anti-vaccine movement',
        url: 'https://www.bbc.co.uk/future/article/20250905-the-strange-history-of-the-anti-vaccine-movement',
      },
    ],
  },
  // Let Them Eat Goo (S23E4)
  301: {
    summary:
      "Told almost entirely in Dr. Seuss-style rhyme, the kids switch the whole school over to a mysterious plant-based 'goo' as South Park's cafeteria - and then the country - abandons meat overnight. It's a direct satire of the sudden early rise of alternative proteins like Beyond Meat, and the real backlash from cattle ranchers[1] and farmers[2] who saw plant-based meat substitutes as an existential threat to their industry.",
    sources: [
      {
        label: "The Wall Street Journal: America's cattle ranchers are fighting back against fake meat",
        url: 'https://www.wsj.com/articles/americas-cattle-ranchers-are-fighting-back-against-fake-meat-11574850603',
      },
      {
        label: 'Big Issue: farmers are fighting back against the fake-meat supermarket invasion',
        url: 'https://www.bigissue.com/news/environment/farmers-are-fighting-back-against-the-fake-meat-supermarket-invasion/',
      },
    ],
    parodyOf: [{ name: 'Dr. Seuss (rhyming verse style)', url: 'https://en.wikipedia.org/wiki/Dr._Seuss' }],
  },
  // Season Finale (S23E6)
  303: {
    summary:
      "Randy gets caught red-handed vandalizing his neighbors' yards over homegrown-weed paranoia, then tries to pin the blame on a fabricated 'Mexican Joker' rather than own up to it - a pointed jab at Donald Trump's real habit of casting himself as the victim rather than admit fault[1]. The invented scapegoat leans on both the year's ICE detention-center controversy[2] and the 2019 film Joker[3], tying Randy's blame-shifting theatrics to the same news cycle Mexican Joker had just satirized.",
    sources: [
      { label: 'The Washington Post: Trump doubles down on male victimhood', url: 'https://www.washingtonpost.com/news/opinions/wp/2018/10/03/trump-doubles-down-on-male-victimhood/' },
      { label: "The Guardian: 'detained' - inside the US's largest immigrant detention system under Trump", url: 'https://www.theguardian.com/us-news/2019/sep/24/detained-us-largest-immigrant-detention-trump' },
    ],
    parodyOf: [{ name: 'Joker (2019 film)', url: 'https://en.wikipedia.org/wiki/Joker_(2019_film)' }],
  },
  // Board Girls (S23E7)
  304: {
    summary:
      "Strong Woman, an even stronger new competitor, causes a stir by dominating a women's competition, echoing the real, still-unresolved debate over transgender women's inclusion in women's sports - the same debate later crystallized by swimmer Lia Thomas[1] and weightlifter Laurel Hubbard[2] becoming lightning rods for the issue.",
    sources: [
      { label: 'Wikipedia: Lia Thomas', url: 'https://en.wikipedia.org/wiki/Lia_Thomas' },
      { label: 'Wikipedia: Laurel Hubbard', url: 'https://en.wikipedia.org/wiki/Laurel_Hubbard' },
    ],
  },
  // Turd Burglars (S23E8)
  305: {
    summary:
      "Kyle's mom looks amazing after a fecal transplant, and soon everyone in town is desperate to get their hands on primo microbiome material. It's a direct satire of the real, rapid rise of fecal microbiota transplantation (FMT)[1], a once-fringe treatment that had become standard of care for recurrent C. diff infections by the time this aired[2].\n\nKyle's doctor even name-drops Tom Brady's microbiome as the ultimate score - dubbing it 'The Spice Melange,' after Dune's most coveted resource, in a running gag that visualizes Brady's own bowel movements like Dune's sandworms - a direct jab at Brady's real TB12 wellness brand and its claims that diet and gut health were the secret to his late-career athletic longevity[3].",
    sources: [
      { label: 'The New York Times: what is a fecal transplant, and why would I want one?', url: 'https://www.nytimes.com/2019/01/18/well/live/what-is-a-fecal-transplant-and-why-would-i-want-one.html' },
      {
        label: 'Harvard Health: stool transplants are now standard of care for recurrent C. diff infections',
        url: 'https://www.health.harvard.edu/blog/stool-transplants-are-now-standard-of-care-for-recurrent-c-difficile-infections-2019050916576',
      },
      { label: 'Forbes Health: What Is the Tom Brady (TB12) Diet?', url: 'https://www.forbes.com/health/nutrition/diet/tom-brady-tb12-diet/' },
    ],
    parodyOf: [
      { name: 'Dune (1965 novel) / Dune (1984 film)', url: 'https://en.wikipedia.org/wiki/Dune_(novel)' },
      { name: 'Tom Brady (TB12 Method)', url: 'https://en.wikipedia.org/wiki/Tom_Brady' },
    ],
  },
  // Basic Cable (S23E9)
  306: {
    summary:
      "Scott Malkinson's chances with a girl hinge on getting the hot new streaming platform, while his dad clings to basic cable out of stubborn loyalty to the local cable company. It's a direct satire of streaming's takeover of TV - real surveys already showed viewers found it cheaper, more convenient, and more enjoyable than cable[1], part of an economic shift that only accelerated in the years after[2], culminating in streaming outright overtaking combined broadcast and cable viewership for the first time[3].\n\nScott specifically lures the new girl over to watch Disney+'s The Mandalorian[4] - and in a neat bit of real-world irony, South Park itself would go on to land an exclusive streaming deal with HBO Max[5].",
    sources: [
      {
        label: 'PCMag: survey - streaming saves money and time, and is more entertaining than cable',
        url: 'https://uk.pcmag.com/news/124151/survey-streaming-saves-money-and-time-and-is-more-entertaining-than-cable-which-sucks',
      },
      { label: 'Boardroom: streaming vs. cable economics (2025)', url: 'https://boardroom.tv/streaming-cable-economics-2025/' },
      {
        label: 'Nielsen: streaming eclipses combined broadcast and cable viewing for the first time',
        url: 'https://www.nielsen.com/news-center/2025/streaming-reaches-historic-tv-milestone-eclipses-combined-broadcast-and-cable-viewing-for-first-time/',
      },
      { label: 'Variety: South Park to stream exclusively on HBO Max', url: 'https://variety.com/2019/tv/news/south-park-stream-exclusively-hbo-max-1203387212/' },
    ],
    parodyOf: [{ name: 'The Mandalorian (Disney+ series)', url: 'https://en.wikipedia.org/wiki/The_Mandalorian' }],
  },
  // The Pandemic Special (S24E1)
  308: {
    summary:
      "The boys navigate a South Park frozen mid-lockdown, mask mandates, and a virus with no cure in sight. It's the show's direct, real-time response to the COVID-19 pandemic[1], made and set during the actual 2020 lockdowns[2].",
    sources: [
      { label: 'Wikipedia: COVID-19', url: 'https://en.wikipedia.org/wiki/COVID-19' },
      { label: 'Gladstone Institutes: Milestones in the COVID-19 Pandemic', url: 'https://gladstone.org/news/milestones-covid-19-pandemic' },
    ],
  },
  // South ParQ Vaccination Special (S24E2)
  309: {
    summary:
      "The town fights over who gets the new vaccine first and whether to trust it at all[1]. It's a direct response to the real COVID-19 vaccine rollout in late 2020/early 2021[2][3] and the hesitancy, hoarding, and politicization that surrounded it.\n\nA parallel plot skewers QAnon directly: Bob White mistakes an offhand remark from former President Garrison for a coded message and starts indoctrinating the town's kids into the conspiracy movement, arming his shirtless, fur-and-facepaint followers - one modeled directly on Capitol rioter Jake Angeli - for a showdown against the kids trying to deliver vaccines, a pointed parody of QAnon and the January 6, 2021 Capitol attack[4][5].",
    sources: [
      { label: 'ScienceDirect: vaccine research article', url: 'https://www.sciencedirect.com/science/article/pii/S0264410X24000653' },
      { label: 'Gladstone Institutes: Milestones in the COVID-19 Pandemic', url: 'https://gladstone.org/news/milestones-covid-19-pandemic' },
      { label: 'Wikipedia: COVID-19', url: 'https://en.wikipedia.org/wiki/COVID-19' },
      {
        label: 'The Daily Beast: South Park brutally mocks wacky QAnon supporters in Vaccination Special',
        url: 'https://www.thedailybeast.com/south-park-brutally-mocks-wacky-qanon-supporters-in-vaccination-special/',
      },
      { label: 'Wikipedia: January 6 United States Capitol attack', url: 'https://en.wikipedia.org/wiki/January_6_United_States_Capitol_attack' },
    ],
    parodyOf: [{ name: 'QAnon', url: 'https://en.wikipedia.org/wiki/QAnon' }],
  },
  // Back To The Cold War (S25E4)
  313: {
    summary:
      "Randy panics that a new global conflict is dragging the world back into Cold War-style nuclear brinkmanship. It aired as Russia's invasion of Ukraine began in 2022[1], tapping into real anxiety about a return to Cold War-era great-power confrontation.",
    sources: [
      {
        label: 'Council on Foreign Relations: War in Ukraine',
        url: 'https://www.cfr.org/global-conflict-tracker/conflict/conflict-ukraine',
      },
    ],
    parodyOf: [
      { name: 'WarGames (1983 film)', url: 'https://en.wikipedia.org/wiki/WarGames' },
      { name: 'Red Dawn (1984 film)', url: 'https://en.wikipedia.org/wiki/Red_Dawn' },
      { name: 'Rocky IV (1985 film)', url: 'https://en.wikipedia.org/wiki/Rocky_IV' },
    ],
  },
  // Margaritaville (S13E3)
  184: {
    summary:
      "Randy's margarita-machine bender wrecks the town's finances, and South Park starts worshipping 'The Economy' as an angry god demanding sacrifice. It's a direct satire of the 2008-09 financial crisis[1]: banks handing out credit for things people can't afford, a bailout that asks ordinary borrowers to eat the loss, and a culture that blamed an abstract, unaccountable 'market' rather than the institutions that made the loans.\n\nStan and Kyle's plot even restages the Last Supper, with Kyle as a money-changer-expelling Jesus and Cartman as a scheming Judas selling out the town's debtors.",
    sources: [{ label: 'Wikipedia: Subprime mortgage crisis', url: 'https://en.wikipedia.org/wiki/Subprime_mortgage_crisis' }],
    parodyOf: [{ name: 'The Last Supper (biblical scene)', url: 'https://en.wikipedia.org/wiki/Last_Supper' }],
  },
  // Handicar (S18E4)
  251: {
    summary:
      "Cartman launches an unlicensed car service using disabled people's motorized wheelchairs to dodge taxi regulations - a broad swipe at Uber and the ride-sharing boom of the mid-2010s[1][2], and the wider debate over 'gig economy' apps undercutting regulated labor and treating workers as disposable.\n\nThe episode resolves in a full Wacky Races pastiche, pitting Handicar and its ride-share rivals against each other in a slapstick cross-country marathon complete with Dick Dastardly and Muttley[3] - and Matthew McConaughey shows up in character as himself, casually plugging Handicar and Zipcar the same easy-going way he plugged Lincolns in his real, much-parodied car commercials.",
    sources: [
      { label: 'The Guardian: How Uber conquered London', url: 'https://www.theguardian.com/technology/2016/apr/27/how-uber-conquered-london' },
      { label: 'BBC News: Uber technology article', url: 'https://www.bbc.co.uk/news/technology-27733971' },
      { label: 'Den of Geek: South Park - Handicar review', url: 'https://www.denofgeek.com/tv/south-park-handicar-review/' },
    ],
    parodyOf: [
      { name: 'Wacky Races (1968 cartoon)', url: 'https://en.wikipedia.org/wiki/Wacky_Races' },
      { name: 'Matthew McConaughey (Lincoln ad parody)', url: 'https://en.wikipedia.org/wiki/Matthew_McConaughey' },
    ],
  },
  // With Apologies to Jesse Jackson (S11E1)
  154: {
    summary:
      "Randy blurts a racial slur on live TV and becomes a national pariah, while a parallel plot mocks how the word 'the n-word' gets used as a stand-in slur for little people. The episode aired a few months after comedian Michael Richards's real-life racist tirade went viral[1], and it's built directly around that era's raw, unresolved argument over slurs, intent, and who gets to say what.",
    sources: [
      { label: 'The Guardian: Michael Richards racist tirade fallout', url: 'https://www.theguardian.com/world/2006/nov/22/usa.danglaister' },
    ],
  },
  // It's a Jersey Thing (S14E9)
  204: {
    summary:
      "The town is 'infected' by loud, spray-tanned, fist-pumping Jersey culture spreading like a disease, with the possessed townspeople modeled directly on cast members from both MTV's Jersey Shore and Bravo's The Real Housewives of New Jersey. It's a direct parody of Jersey Shore (which had just become a phenomenon)[1][2] and the reality-TV era's habit of turning a regional/ethnic identity into a mockable stereotype for entertainment.",
    sources: [
      { label: 'The Guardian: Charlie Brooker on Jersey Shore', url: 'https://www.theguardian.com/tv-and-radio/2010/mar/20/charlie-brooker-jersey-shore' },
      { label: 'Vice: the Jersey Shore scene that made Snooki a star', url: 'https://www.vice.com/en/article/17-years-ago-one-shocking-jersey-shore-scene-turned-snooki-into-a-reality-tv-star-overnight/' },
    ],
    parodyOf: [
      { name: 'Jersey Shore (MTV series)', url: 'https://en.wikipedia.org/wiki/Jersey_Shore_(TV_series)' },
      { name: 'The Real Housewives of New Jersey (Bravo series)', url: 'https://en.wikipedia.org/wiki/The_Real_Housewives_of_New_Jersey' },
    ],
  },
  // Member Berries (S20E1)
  268: {
    summary:
      "Talking berries flood South Park with warm nostalgia ('member Chewbacca? Member the Password Sing-Along?') while quietly making people receptive to xenophobic, wall-building rhetoric. Season 20 aired during the 2016 US election[1] and this episode is a pointed critique of how nostalgia - 'make it like it used to be' - was being used as a political weapon on both sides of the Atlantic that year.",
    sources: [
      { label: 'CNN: 2016 Election Results (President)', url: 'https://edition.cnn.com/election/2016/results/president' },
    ],
    parodyOf: [{ name: 'Star Wars (Chewbacca nostalgia callback)', url: 'https://en.wikipedia.org/wiki/Star_Wars' }],
  },
}
