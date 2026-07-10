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
  // Mr. Hankey, the Christmas Poo (S1E9)
  9: {
    summary:
      "A school bans anything religious from its Christmas pageant, terrified of offending anyone - until a talking piece of feces convinces everyone that a totally secular Christmas is just as absurd. It's a swipe at the annual 'War on Christmas'-style fights over religion in public schools and how far institutions will go to avoid controversy.",
  },
  // Chinpokomon (S3E11)
  42: {
    summary:
      "A Japanese toy company's pocket-monster craze sweeps South Park's kids while secretly indoctrinating them to rebuild a WWII-era war machine. It's a broad parody of Pokemon-mania and the wider anxiety, in the late '90s, about how much control foreign entertainment franchises had over American children's attention (and wallets).",
  },
  // Are You There God? It's Me, Jesus (S3E17)
  47: {
    summary:
      "The town spends the last days of 1999 in escalating panic that computers - and civilization - will collapse the moment the year rolls over. This is a direct parody of the real Y2K scare, when genuine fears about date-formatted software bugs curdled into full-blown doomsday hysteria.",
  },
  // Cartman's Silly Hate Crime 2000 (S4E2)
  50: {
    summary:
      "Cartman gets charged with a hate crime for a schoolyard fight, exposing how the same act can be punished totally differently depending on who's involved. It's a direct engagement with hate-crime legislation debates of the era: whether laws should weigh a perpetrator's bias more heavily than an ordinary assault.",
  },
  // Timmy 2000 (S4E3)
  51: {
    summary:
      "Every kid in school suddenly gets diagnosed with 'Attention Deficit Disorder' and put on Ritalin so they'll sit still. It's a pointed jab at the explosion of ADHD diagnoses and child stimulant prescriptions in the late '90s, and the suspicion that medication was being used to paper over ordinary rowdiness.",
  },
  // It Hits the Fan (S5E1)
  66: {
    summary:
      "A TV show says the word 'shit' uncensored, and it becomes a media sensation with an on-screen counter tallying every use. It's a direct parody of real fights over broadcast decency standards and the FCC - and, cheekily, of South Park itself testing what Comedy Central would let it get away with.",
  },
  // Osama bin Laden Has Farty Pants (S5E9)
  74: {
    summary:
      "Cartman gets an Afghan pen pal and the boys go looking for Osama bin Laden themselves. Made and aired within weeks of the September 11 attacks, it's the show's raw first attempt to process 9/11, the start of the war in Afghanistan, and the wave of American patriotism (and jingoism) that followed.",
  },
  // Jared Has Aides (S6E1)
  80: {
    summary:
      "A weight-loss pitchman becomes a local celebrity and surrounds himself with 'aides.' It's a parody of Subway's real Jared Fogle ad campaign, which built an entire marketing empire around one man's sandwich-diet weight loss story.",
  },
  // Red Hot Catholic Love (S6E8)
  87: {
    summary:
      "Parents in South Park are outraged to learn Catholic priests have been abusing children for years - and that the Church hierarchy in Rome already knew. This is a direct response to the Catholic Church sex-abuse scandal that broke wide open in the US press in 2002, including the cover-ups by bishops.",
  },
  // Free Hat (S6E9)
  88: {
    summary:
      "The boys try to stop a beloved old sci-fi trilogy from being digitally 're-mastered' with pointless new special effects. It's a direct parody of George Lucas re-releasing the original Star Wars trilogy with added CGI, and the backlash from fans who felt classic films were being tampered with.",
  },
  // The Biggest Douche in the Universe (S6E15)
  94: {
    summary:
      "Cartman channels the spirit of a TV psychic who claims to talk to dead relatives. It's a direct takedown of real 'medium' John Edward and shows like Crossing Over, accused of cold-reading grieving audiences for ratings rather than genuinely communicating with the dead.",
  },
  // My Future Self n' Me (S6E16)
  95: {
    summary:
      "Stan's parents hire an actor to play his drug-addicted future self as a scare tactic. It's a jab at D.A.R.E.-style anti-drug programs and scared-straight PSAs, which the show suggests are so heavy-handed and dishonest that kids see right through them.",
  },
  // I'm a Little Bit Country (S7E4)
  100: {
    summary:
      "The kids stage dueling school reports on whether protest is patriotic, while flashbacks revisit the Revolutionary War. It aired just as the US invaded Iraq in March 2003, landing squarely in the national argument over whether opposing the war was principled dissent or unpatriotic.",
  },
  // All About Mormons (S7E12)
  108: {
    summary:
      "A cheerful new Mormon family moves to town, and the show intercuts their story with a musical-comedy recap of Joseph Smith and the founding of the LDS Church. It's a direct, detailed satire of Mormon history and doctrine - while ultimately being surprisingly gentle about the family's actual character.",
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
      "A washed-up celebrity turns up warning everyone about a creature called ManBearPig[1] that's 'half man, half bear, half pig,' and gets furious that no one takes him seriously. It's a direct, pointed parody of Al Gore and his climate-change advocacy following An Inconvenient Truth[2].",
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
  // Dead Kids (S22E1)
  288: {
    summary:
      "A student is killed at school and the adults' reaction is to treat it as a mundane inconvenience rather than a tragedy. It's a bleak, direct commentary on how routine school shootings had become in American life[1], and how numb institutional responses to them felt by 2018[2].",
    sources: [
      { label: 'Brady: School Shootings', url: 'https://www.bradyunited.org/resources/issues/school-shootings' },
      { label: 'BBC News (business-46507514)', url: 'https://www.bbc.co.uk/news/business-46507514' },
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
      "The kids discover electric scooters left scattered around town and start riding them everywhere to haul in more Halloween candy than ever, while the adults grumble about reckless riders clogging up the sidewalks. It's a direct parody of the sudden 2018 rise of dockless e-scooter rental apps like Bird and Lime, which dropped scooters on city streets almost overnight and set off a real backlash over sidewalk clutter and reckless riding.",
  },
  // Band in China (S23E2)
  299: {
    summary:
      "A kids' band tours China and discovers Hollywood self-censors to keep access to the Chinese market, while the NBA gets caught in a similar bind. This aired right as the real NBA faced Chinese backlash over a pro-Hong-Kong tweet[1], and the episode's blunt satire of Chinese censorship got South Park itself banned in China.",
    sources: [
      {
        label: "ESPN: James Harden apologizes as controversy grows: 'We love China'",
        url: 'https://www.espn.com/nba/story/_/id/27787634/james-harden-apologizes-controversy-grows-love-china',
      },
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
      "Randy's margarita-machine bender wrecks the town's finances, and South Park starts worshipping 'The Economy' as an angry god demanding sacrifice. It's a direct satire of the 2008-09 financial crisis[1]: banks handing out credit for things people can't afford, a bailout that asks ordinary borrowers to eat the loss, and a culture that blamed an abstract, unaccountable 'market' rather than the institutions that made the loans. Stan and Kyle's plot even restages the Last Supper[2], with Kyle as a money-changer-expelling Jesus and Cartman as a scheming Judas selling out the town's debtors.",
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
