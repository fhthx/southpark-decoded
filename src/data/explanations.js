// Real-world inspiration behind South Park episodes, keyed by the episode's
// spapi.dev `id`. This is authored content, not sourced from the API - most
// episodes don't have an entry yet. Add more over time.

// Shared by the S17 console-war trilogy (Black Friday, A Song of Ass and
// Fire, Titties and Dragons) - same real-world sources apply to all three.
// Two orderings are kept so each episode's numbered list matches the order
// its own summary cites them in.
const CONSOLE_WAR_SOURCE_GUARDIAN = { label: 'The Guardian: PlayStation 4 vs Xbox One', url: 'https://www.theguardian.com/technology/2013/nov/16/playstation-4-xbox-one' }
const CONSOLE_WAR_SOURCE_FORBES = {
  label: 'Forbes: Xbox One vs PS4 - The Console Wars Are Just Getting Started',
  url: 'https://www.forbes.com/sites/erikkain/2013/11/16/xbox-one-vs-ps4-the-console-wars-are-just-getting-started/',
}
const CONSOLE_WAR_SOURCE_GOT = { label: 'Wikipedia: A Song of Ice and Fire', url: 'https://en.wikipedia.org/wiki/A_Song_of_Ice_and_Fire' }

const CONSOLE_WAR_SOURCES = [CONSOLE_WAR_SOURCE_GUARDIAN, CONSOLE_WAR_SOURCE_FORBES, CONSOLE_WAR_SOURCE_GOT]
const CONSOLE_WAR_SOURCES_GOT_FIRST = [CONSOLE_WAR_SOURCE_GOT, CONSOLE_WAR_SOURCE_GUARDIAN, CONSOLE_WAR_SOURCE_FORBES]

export const explanations = {
  // Chinpokomon (S3E11)
  42: {
    summary:
      "A Japanese toy company's pocket-monster craze sweeps South Park's kids while secretly indoctrinating them to rebuild a WWII-era war machine. It's a broad parody of Pokemon-mania[1] and the wider anxiety, in the late '90s, about how much control foreign entertainment franchises had over American children's attention (and wallets)[2].",
    sources: [
      { label: 'Time: Beware of the Poke-Mania!', url: 'https://time.com/archive/6737018/beware-of-the-poke-mania/' },
      { label: 'The New York Times: Pokemon Mania Takes on Criminal Proportions', url: 'https://www.nytimes.com/1999/12/04/nyregion/pokemon-mania-takes-on-criminal-proportions.html' },
    ],
  },
  // Are You There God? It's Me, Jesus (S3E17)
  47: {
    summary:
      "The town spends the last days of 1999 in escalating panic that computers - and civilization - will collapse the moment the year rolls over. This is a direct parody of the real Y2K scare[1], when genuine fears about date-formatted software bugs curdled into full-blown doomsday hysteria[2].",
    sources: [
      { label: 'Wikipedia: Year 2000 problem', url: 'https://en.wikipedia.org/wiki/Year_2000_problem' },
      { label: 'The New York Times: Fear of the Year 2000 Bug Is a Problem, Too', url: 'https://www.nytimes.com/1999/02/09/business/fear-of-the-year-2000-bug-is-a-problem-too.html' },
    ],
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
      "Cartman channels the spirit of a TV psychic who claims to talk to dead relatives. It's a direct takedown of real 'medium' John Edward[1] and shows like Crossing Over[2], accused of cold-reading grieving audiences for ratings rather than genuinely communicating with the dead.",
    sources: [
      { label: 'Wikipedia: John Edward', url: 'https://en.wikipedia.org/wiki/John_Edward' },
      { label: 'Crossing Over with John Edward (IMDb)', url: 'https://www.imdb.com/title/tt0292776/' },
    ],
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
      "Cartman becomes obsessed with a gruesome new religious film and starts a Mel Gibson fan club. This is a direct response to Mel Gibson's 2004 film The Passion of the Christ[1], both its extreme violence[2] and the controversy over whether it played into antisemitic stereotypes[3].",
    sources: [
      { label: 'The Passion of the Christ (IMDb)', url: 'https://www.imdb.com/title/tt0335345/' },
      { label: 'The Guardian: Mel Gibson and The Passion of the Christ', url: 'https://www.theguardian.com/film/2005/mar/16/news.melgibson' },
      { label: 'ADL: The Passion relies on theme of antisemitism', url: 'https://www.adl.org/resources/news/passion-relies-theme-anti-semitism' },
    ],
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
  },
  // Stupid Spoiled Whore Video Playset (S8E12)
  123: {
    summary:
      "Girls in South Park become obsessed with a vapid, famous-for-being-famous heiress and get a toy playset that rewards acting just like her. It's a direct parody of Paris Hilton[1] and the mid-2000s tabloid/reality-TV machine that made fame itself the product - fueled in part by the leaked 1 Night in Paris sex tape with Rick Salomon that had made her a household name just before this aired[2].",
    sources: [
      { label: 'IMDb: Paris Hilton', url: 'https://www.imdb.com/title/tt0362153/' },
      { label: 'Wikipedia: 1 Night in Paris', url: 'https://en.wikipedia.org/wiki/1_Night_in_Paris' },
    ],
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
      "A dam breaks and the ensuing disaster gets treated like a preview of climate catastrophe, complete with a Al Gore-style scientist explaining the science badly. It's a parody of disaster films like The Day After Tomorrow[1] and the sometimes-overheated way climate change was dramatized in pop culture.",
    sources: [
      { label: 'Wikipedia: The Day After Tomorrow', url: 'https://en.wikipedia.org/wiki/The_Day_After_Tomorrow' },
    ],
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
  },
  // ManBearPig (S10E6)
  145: {
    summary:
      "A washed-up celebrity turns up warning everyone about a creature called ManBearPig[1] that's 'half man, half bear, half pig,' and gets furious that no one takes him seriously. It's a direct, pointed parody of Al Gore and his climate-change advocacy following An Inconvenient Truth[2] - the joke here lands on Gore's perceived grandiosity and crying-wolf theatrics, not on the underlying science. Twelve years later, South Park would explicitly walk this back in Time to Get Cereal and Nobody Got Cereal?, in which ManBearPig turns out to have been real all along.",
    sources: [
      { label: 'ManBearPig (IMDb)', url: 'https://www.imdb.com/title/tt0497116/' },
      { label: 'TED: Al Gore, averting the climate crisis', url: 'https://www.ted.com/talks/al_gore_averting_the_climate_crisis' },
    ],
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
  },
  // Go God Go XII (S10E13)
  152: {
    summary:
      "The future-set atheist war concludes[1], with the various atheist factions bickering over the most trivial doctrinal differences. It continues the episode's satire of Richard Dawkins and organized atheism[2], suggesting that removing religion doesn't remove humanity's tendency to fight over ideology.",
    sources: [
      { label: '"Go God Go" clip (YouTube)', url: 'https://www.youtube.com/watch?v=yQUN_6XKKVs&t=194s' },
      { label: 'The Guardian: evolution and schools', url: 'https://www.theguardian.com/education/2006/nov/27/schools.religion' },
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
  // Canada on Strike (S12E4)
  171: {
    summary:
      "All of Canada goes on strike demanding a cut of internet money that doesn't really exist. It's a satire of the 2007-08 Writers Guild of America strike[1], poking fun at how hard it was for the public (and even some strikers) to understand what 'internet money' entertainment workers were fighting over[2].",
    sources: [
      { label: 'Wikipedia: 2007-08 Writers Guild of America strike', url: 'https://en.wikipedia.org/wiki/2007%E2%80%9308_Writers_Guild_of_America_strike' },
      { label: 'The Guardian: how the 2007 writers strike gave us Bond movie heroes', url: 'https://www.theguardian.com/culture/2023/may/04/2007-writers-strike-bond-movie-heroes' },
    ],
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
  // HUMANCENTiPAD (S15E1)
  210: {
    summary:
      "Kyle skips reading Apple's iTunes terms and conditions[1] and ends up unknowingly consenting to something horrific. It's a jab at how nobody reads the fine print on tech companies' sprawling terms-of-service agreements, wrapped in a parody of the film The Human Centipede[2].",
    sources: [
      { label: 'Business Insider: Apple terms and conditions', url: 'https://www.businessinsider.com/apple-terms-and-conditions' },
      { label: 'The Human Centipede (IMDb)', url: 'https://www.imdb.com/title/tt1467304/' },
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
  // Obama Wins! (S16E14)
  237: {
    summary:
      "The boys' fantasy-football-style bet on the presidential election collides with a real election night. It's the show's real-time response to the 2012 US presidential election, in which Barack Obama won a second term[1].",
    sources: [
      { label: 'Obama Foundation: The Administration (2012-2017)', url: 'https://www.obama.org/about/administration/2012-2017/' },
    ],
  },
  // Let Go, Let Gov (S17E1)
  238: {
    summary:
      "Cartman starts an NSA-style surveillance operation to spy on his classmates, right as the real US government's mass-surveillance programs are exposed[1]. This aired mere months after Edward Snowden's 2013 leaks[2][3][4] revealed the scope of NSA data collection, and directly engages with that fallout.",
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
    ],
  },
  // World War Zimmerman (S17E3)
  240: {
    summary:
      "Cartman falls asleep and dreams of a nationwide race war triggered by a controversial self-defense shooting. It's a direct response to the 2013 George Zimmerman trial over the killing of Trayvon Martin[1], and the anxious national conversation about race that followed the verdict.",
    sources: [
      { label: 'Wikipedia: Killing of Trayvon Martin', url: 'https://en.wikipedia.org/wiki/Killing_of_Trayvon_Martin' },
    ],
  },
  // Black Friday (S17E7)
  244: {
    summary:
      "The kids' friendships fracture over which new game console to buy, splitting the town into Thrones-style warring camps[1], while adults literally go to war over Black Friday doorbusters. It's a direct parody of the Xbox One vs. PS4 launch rivalry[2][3] and the real chaos around Black Friday shopping stampedes.",
    sources: CONSOLE_WAR_SOURCES_GOT_FIRST,
  },
  // A Song of Ass and Fire (S17E8)
  245: {
    summary:
      "The console-war standoff continues as a sprawling Game of Thrones-style fantasy parody, with the kids' console loyalties turned into warring kingdoms. It keeps skewering the Xbox One/PS4 launch rivalry[1][2] while spoofing Game of Thrones[3], then near its cultural peak.",
    sources: CONSOLE_WAR_SOURCES,
  },
  // Titties and Dragons (S17E9)
  246: {
    summary:
      "The Game-of-Thrones-style console war saga wraps up[1]. It's the third part of the trilogy mocking the Xbox One vs. PS4 launch hype cycle[2][3], wrapped in Thrones-style fantasy-political parody.",
    sources: CONSOLE_WAR_SOURCES_GOT_FIRST,
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
  // Freemium Isn't Free (S18E6)
  253: {
    summary:
      "Stan gets hooked on a mobile game that nickel-and-dimes him for virtual currency at every turn. It's a direct satire of freemium mobile games and their real-world microtransaction and loot-box monetization tactics[1][2] - the same model behind real games like Candy Crush Saga, Clash of Clans, EA Sports FC's Ultimate Team packs, and Genshin Impact's gacha banners.",
    sources: [
      {
        label: 'Investopedia: How Microtransactions Are Evolving the Economics of Gaming',
        url: 'https://www.investopedia.com/articles/investing/022216/how-microtransactions-are-evolving-economics-gaming.asp',
      },
      {
        label: 'ScienceDirect: microtransactions/gaming research article',
        url: 'https://www.sciencedirect.com/science/article/pii/S1875952124000612',
      },
    ],
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
  },
  // Where My Country Gone? (S19E2)
  259: {
    summary:
      "A wall goes up around South Park and Canadian immigrants are demonized as job-stealing outsiders. It's a direct parody of Donald Trump's early 2016 campaign rhetoric on immigration[1][2] and border walls[3], with Mr. Garrison standing in for Trump himself.",
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
    ],
  },
  // Safe Space (S19E5)
  262: {
    summary:
      "Cartman demands everyone only post positive comments on his Instagram, weaponizing 'safe space' language to shut down any criticism. It's a satire of both campus safe-space culture debates[1] and the curated, filtered unreality of social media image culture.",
    sources: [
      { label: "Flexa: How safe are 'safe spaces' really?", url: 'https://flexa.careers/blog/how-safe-are-safe-spaces-really' },
    ],
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
  // Oh, Jeez (S20E7)
  274: {
    summary:
      "Mr. Garrison, having accidentally become President-elect, privately admits to Caitlyn Jenner that he never actually wanted to win and has no real plan for governing. Made and aired the night after the real 2016 US election[1], it's the show's raw, same-week reaction to Donald Trump's shock victory over Hillary Clinton.",
    sources: [
      { label: 'The Guardian: Donald Trump wins US election', url: 'https://www.theguardian.com/us-news/2016/nov/09/donald-trump-wins-us-election-news' },
    ],
  },
  // White People Renovating Houses (S21E1)
  278: {
    summary:
      "A wholesome couple's home-renovation show becomes a local obsession, echoing HGTV hits like Fixer Upper[1]. It's a satire of the home-renovation TV boom[2] and the gentrification that so often follows in its wake.",
    sources: [
      { label: 'Wikipedia: Fixer Upper (TV series)', url: 'https://en.wikipedia.org/wiki/Fixer_Upper_(TV_series)' },
      {
        label: 'Wikipedia: Category - Home renovation television series',
        url: 'https://en.wikipedia.org/wiki/Category:Home_renovation_television_series',
      },
    ],
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
      "Professor Chaos weaponizes Facebook itself as his latest evil scheme, exploiting how easily fake news and misinformation spread across the platform. It's a direct satire of the real 2016-17 uproar over Facebook's role in spreading fake news, and the company's own scramble to start fact-checking and flagging it[1].",
    sources: [
      { label: 'The Guardian: Facebook to "flag" fake news', url: 'https://www.theguardian.com/technology/2016/dec/15/facebook-flag-fake-news-fact-check' },
    ],
  },
  // Hummels & Heroin (S21E5)
  282: {
    summary:
      "Randy accidentally gets the whole town hooked on painkillers while running a shady side hustle. It's a direct response to the US opioid crisis[1][2][3], satirizing both addiction and the profiteering (from doctors to dealers) that fed it.",
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
      "A local news station gets bought up and forced to read identical, oddly slanted scripts from corporate. It's a jab at real local-news consolidation by conglomerates like Sinclair Broadcast Group, later notorious for making anchors nationwide recite the same promotional scripts verbatim[1].",
    sources: [
      {
        label: "Sinclair requires anchors to read script bashing 'fake' news (YouTube)",
        url: 'https://www.youtube.com/watch?v=aGIYU2Xznb4',
      },
    ],
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
  },
  // Tegridy Farms (S22E4)
  291: {
    summary:
      "Randy moves the family to a farm to grow marijuana now that it's legal, marketing it with a folksy 'integrity' pitch[1]. It kicks off a long-running satire of the newly legal cannabis industry and the wave of opportunists rebranding themselves as wholesome small-farm entrepreneurs[2][3].",
    sources: [
      {
        label: 'From Facing Jail Time to Growing Craft Cannabis in New Jersey | Hamilton Farms (YouTube)',
        url: 'https://www.youtube.com/watch?v=N-uXbDVy9uA',
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
  },
  // Nobody Got Cereal? (S22E7)
  294: {
    summary:
      "The fallout from ManBearPig's return escalates as the boys go on the run from the police and the creature itself, while the town scrambles to cover up the damage rather than face what's actually happening.\n\nThe reveal driving it all is a sharp climate-change allegory in its own right[1]: decades ago, Stan's Grandpa and the town's other elderly residents struck a deal with the demonic ManBearPig, trading a future of mass death for a present full of cool stuff - gas-guzzling cars, boutique ice cream - handing the consequences down to their kids and grandkids to deal with.\n\nBy the end, South Park itself doesn't break the cycle so much as continue it: the townspeople cut their own new deal with ManBearPig, buying another five years of comfort at the cost of a murder rampage that will fall on children in the Third World instead of them - a pointed dig at how wealthy nations keep offloading climate change's worst consequences onto the developing world. Together with Time To Get Cereal, it completes South Park's rare self-corrective two-parter - Trey Parker and Matt Stone have both described the arc in interviews as an explicit apology for playing climate change for a punchline back in 2006.",
    sources: [
      { label: 'Salon: South Park, climate change, and ManBearPig', url: 'https://www.salon.com/2018/11/15/south-park-climate-change-manbearpig/' },
    ],
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
      "The chaos at the Amazon Fulfillment Center from Unfulfilled boils over into the town's Bike Parade, as Kenny refuses to take corporate sponsorship money in solidarity with the striking warehouse workers[1][2]. It's a direct continuation of the show's satire of Amazon's real fulfillment-center labor conditions and rapid expansion.",
    sources: [
      {
        label: 'The Guardian: Amazon fulfillment center warehouse employees union',
        url: 'https://www.theguardian.com/technology/2019/jan/01/amazon-fulfillment-center-warehouse-employees-union-new-york-minnesota',
      },
      { label: 'Business Insider: Amazon warehouse locations in the US (2017)', url: 'https://www.businessinsider.com/amazon-warehouse-locations-in-us-2017-9' },
    ],
  },
  // Mexican Joker (S23E1)
  298: {
    summary:
      "Kyle gets sent off to a summer camp that turns out to be a parody of the real US immigrant child-detention centers making headlines[1][2][3].\n\nThe episode's dark joke - explicitly modeled on the year's other big pop-culture villain-origin story, Joker[4] - is that locking traumatized kids in cages risks manufacturing the very threat the policy claims to guard against: a 'Mexican Joker' born from the exact system meant to prevent him. Its satire cuts at how both sides of the immigration debate flattened a genuinely complicated issue into slogans, without either fully owning a workable fix.",
    sources: [
      { label: 'CNN: ICE kids in detention', url: 'https://edition.cnn.com/2019/10/24/us/ice-kids-detention-invs' },
      { label: 'Freedom for Immigrants: child detention stories', url: 'https://www.freedomforimmigrants.org/child-detention-stories' },
      { label: "The Guardian: 'detained' - inside the US's largest immigrant detention system under Trump", url: 'https://www.theguardian.com/us-news/2019/sep/24/detained-us-largest-immigrant-detention-trump' },
      { label: 'Wikipedia: Joker (2019 film)', url: 'https://en.wikipedia.org/wiki/Joker_(2019_film)' },
    ],
  },
  // Band in China (S23E2)
  299: {
    summary:
      "A kids' band tours China and discovers Hollywood self-censors to keep access to the Chinese market, while the NBA gets caught in a similar bind. This aired right as the real NBA faced Chinese backlash over a pro-Hong-Kong tweet[1], and the episode's blunt satire of Chinese censorship - echoing China's real ban on Winnie the Pooh imagery over comparisons to President Xi Jinping[2] - got South Park itself scrubbed from the Chinese internet and banned in China within days of airing[3].",
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
    ],
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
      "Told almost entirely in Dr. Seuss-style rhyme[1], the kids switch the whole school over to a mysterious plant-based 'goo' as South Park's cafeteria - and then the country - abandons meat overnight. It's a direct satire of the sudden early rise of alternative proteins like Beyond Meat, and the real backlash from cattle ranchers[2] and farmers[3] who saw plant-based meat substitutes as an existential threat to their industry.",
    sources: [
      { label: 'Wikipedia: Dr. Seuss', url: 'https://en.wikipedia.org/wiki/Dr._Seuss' },
      {
        label: "The Wall Street Journal: America's cattle ranchers are fighting back against fake meat",
        url: 'https://www.wsj.com/articles/americas-cattle-ranchers-are-fighting-back-against-fake-meat-11574850603',
      },
      {
        label: 'Big Issue: farmers are fighting back against the fake-meat supermarket invasion',
        url: 'https://www.bigissue.com/news/environment/farmers-are-fighting-back-against-the-fake-meat-supermarket-invasion/',
      },
    ],
  },
  // Season Finale (S23E6)
  303: {
    summary:
      "Randy gets caught red-handed vandalizing his neighbors' yards over homegrown-weed paranoia, then tries to pin the blame on a fabricated 'Mexican Joker' rather than own up to it - a pointed jab at Donald Trump's real habit of casting himself as the victim rather than admit fault[1]. The invented scapegoat leans on both the year's ICE detention-center controversy[2] and the 2019 film Joker[3], tying Randy's blame-shifting theatrics to the same news cycle Mexican Joker had just satirized.",
    sources: [
      { label: 'The Washington Post: Trump doubles down on male victimhood', url: 'https://www.washingtonpost.com/news/opinions/wp/2018/10/03/trump-doubles-down-on-male-victimhood/' },
      { label: "The Guardian: 'detained' - inside the US's largest immigrant detention system under Trump", url: 'https://www.theguardian.com/us-news/2019/sep/24/detained-us-largest-immigrant-detention-trump' },
      { label: 'Wikipedia: Joker (2019 film)', url: 'https://en.wikipedia.org/wiki/Joker_(2019_film)' },
    ],
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
      "Kyle's mom looks amazing after a fecal transplant, and soon everyone in town is desperate to get their hands on primo microbiome material. It's a direct satire of the real, rapid rise of fecal microbiota transplantation (FMT)[1], a once-fringe treatment that had become standard of care for recurrent C. diff infections by the time this aired[2].",
    sources: [
      { label: 'The New York Times: what is a fecal transplant, and why would I want one?', url: 'https://www.nytimes.com/2019/01/18/well/live/what-is-a-fecal-transplant-and-why-would-i-want-one.html' },
      {
        label: 'Harvard Health: stool transplants are now standard of care for recurrent C. diff infections',
        url: 'https://www.health.harvard.edu/blog/stool-transplants-are-now-standard-of-care-for-recurrent-c-difficile-infections-2019050916576',
      },
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
      { label: 'Wikipedia: The Mandalorian', url: 'https://en.wikipedia.org/wiki/The_Mandalorian' },
      { label: 'Variety: South Park to stream exclusively on HBO Max', url: 'https://variety.com/2019/tv/news/south-park-stream-exclusively-hbo-max-1203387212/' },
    ],
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
      "The town fights over who gets the new vaccine first and whether to trust it at all[1]. It's a direct response to the real COVID-19 vaccine rollout in late 2020/early 2021[2][3] and the hesitancy, hoarding, and politicization that surrounded it.",
    sources: [
      { label: 'ScienceDirect: vaccine research article', url: 'https://www.sciencedirect.com/science/article/pii/S0264410X24000653' },
      { label: 'Gladstone Institutes: Milestones in the COVID-19 Pandemic', url: 'https://gladstone.org/news/milestones-covid-19-pandemic' },
      { label: 'Wikipedia: COVID-19', url: 'https://en.wikipedia.org/wiki/COVID-19' },
    ],
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
  },
  // Margaritaville (S13E3)
  184: {
    summary:
      "Randy's margarita-machine bender wrecks the town's finances, and South Park starts worshipping 'The Economy' as an angry god demanding sacrifice. It's a direct satire of the 2008-09 financial crisis[1]: banks handing out credit for things people can't afford, a bailout that asks ordinary borrowers to eat the loss, and a culture that blamed an abstract, unaccountable 'market' rather than the institutions that made the loans.\n\nStan and Kyle's plot even restages the Last Supper[2], with Kyle as a money-changer-expelling Jesus and Cartman as a scheming Judas selling out the town's debtors.",
    sources: [
      { label: 'Wikipedia: Subprime mortgage crisis', url: 'https://en.wikipedia.org/wiki/Subprime_mortgage_crisis' },
      { label: 'Wikipedia: Last Supper', url: 'https://en.wikipedia.org/wiki/Last_Supper' },
    ],
  },
  // Handicar (S18E4)
  251: {
    summary:
      "Cartman launches an unlicensed car service using disabled people's motorized wheelchairs to dodge taxi regulations - a broad swipe at Uber and the ride-sharing boom of the mid-2010s[1][2], and the wider debate over 'gig economy' apps undercutting regulated labor and treating workers as disposable.",
    sources: [
      { label: 'The Guardian: How Uber conquered London', url: 'https://www.theguardian.com/technology/2016/apr/27/how-uber-conquered-london' },
      { label: 'BBC News: Uber technology article', url: 'https://www.bbc.co.uk/news/technology-27733971' },
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
      "The town is 'infected' by loud, spray-tanned, fist-pumping Jersey culture spreading like a disease. It's a direct parody of MTV's Jersey Shore (which had just become a phenomenon)[1][2] and the reality-TV era's habit of turning a regional/ethnic identity into a mockable stereotype for entertainment.",
    sources: [
      { label: 'The Guardian: Charlie Brooker on Jersey Shore', url: 'https://www.theguardian.com/tv-and-radio/2010/mar/20/charlie-brooker-jersey-shore' },
      { label: 'Vice: the Jersey Shore scene that made Snooki a star', url: 'https://www.vice.com/en/article/17-years-ago-one-shocking-jersey-shore-scene-turned-snooki-into-a-reality-tv-star-overnight/' },
    ],
  },
  // Member Berries (S20E1)
  268: {
    summary:
      "Talking berries flood South Park with warm nostalgia ('member Chewbacca? Member the Password Sing-Along?') while quietly making people receptive to xenophobic, wall-building rhetoric. Season 20 aired during the 2016 US election[1] and this episode is a pointed critique of how nostalgia - 'make it like it used to be' - was being used as a political weapon on both sides of the Atlantic that year.",
    sources: [
      { label: 'CNN: 2016 Election Results (President)', url: 'https://edition.cnn.com/election/2016/results/president' },
    ],
  },
}
