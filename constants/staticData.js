export const userData = {
    name: "Jack Napier",
    thumbnail: require("../assets/images/user/avatar.jpg"),
}

export const actorsData = [
    {
        id: 1,
        name: 'Chris Hemsworth',
        title: 'Thor',
        thumbnail: require("../assets/images/actors/thor.jpg"),
    },
    {
        id: 2,
        name: 'Natalie Portman',
        title: 'Jane Foster, Mighty Thor',
        thumbnail: require("../assets/images/actors/natalie.jpg"),
    },
    {
        id: 3,
        name: 'Christian Bale',
        title: 'Gorr',
        thumbnail: require("../assets/images/actors/bale.jpg"),
    },
    {
        id: 4,
        name: 'Tessa Thompson',
        title: 'King Valkyrie',
        thumbnail: require("../assets/images/actors/thesa.jpg"),
    },
    {
        id: 5,
        name: 'Taika Waititi',
        title: 'Korg, Old Kronan',
        thumbnail: require("../assets/images/actors/taika.jpg"),
    }
]

export const reviewsData = [
    {
        id: 1,
        name: 'Maximus',
        review: 'For a movie seemingly made with the sole purpose of inserting as many goofy gags per minute as possible while employing a healthy dose of vivid colors and rousing GNR hits, Love and Thunder is shockingly lethargic.',
        thumbnail: require("../assets/images/reviews/maximus.jpg"),
        time: '1 day ago',
        likes: 330
    },
    {
        id: 2,
        name: 'Edna Mode',
        review: 'Not just the best Marvel movie yet made, but a bona fide camp comedy classic: fast, bright, gaudy, prickly, antic and fun.',
        thumbnail: require("../assets/images/reviews/ednamode.jpg"),
        time: '3 days ago',
        likes: 220
    },
    {
        id: 3,
        name: 'Inigo Montoya',
        review: 'It brings up a lot of interesting ideas and ultimately does almost nothing with them',
        thumbnail: require("../assets/images/reviews/inigo.jpg"),
        time: '10 mins ago',
        likes: 100    },
]

export const genreData = [
    {
        id: 1,
        name: "Drama",
        thumbnail: require("../assets/images/genre/drama.jpg"),
    },
    {
        id: 2,
        name: "Action",
        thumbnail: require("../assets/images/genre/action.jpg"),
    },
    {
        id: 3,
        name: "Horror",
        thumbnail: require("../assets/images/genre/horror.jpg"),
    },
    {
        id: 4,
        name: "Thriller",
        thumbnail: require("../assets/images/genre/thriller.jpg"),
    },
    {
        id: 5,
        name: "Comedy",
        thumbnail: require("../assets/images/genre/drama.jpg"),
    }
]
export const  moviesData = [
    {
        id: 1,
        name: "Avengers Endgame",
        watchingprogress: 20,
        thumbnail: require("../assets/images/movies/avengers.jpg"),
        details: {
            //image: require("../assets/images/series/barbarians/barbarians.jpg"),
            age: "16+",
            genre: "Historical Drama",
            ratings: 7.2,
            season: "SEASON 1",
            currentEpisode: 'S1 : E1 "Episode 1 : Vikings"',
            runningTime: "45m",
            progress: "0%"
        }
    },
    {
        id: 2,
        name: "The Green Knight",
        watchingprogress: 45,
        thumbnail: require("../assets/images/movies/knight.jpg"),
        details: {
            //image: require("../assets/images/series/barbarians/barbarians.jpg"),
            age: "16+",
            genre: "Historical Drama",
            ratings: 7.2,
            season: "SEASON 1",
            currentEpisode: 'S1 : E1 "Episode 1 : Vikings"',
            runningTime: "45m",
            progress: "0%"
        }
    },
    {
        id: 3,
        name: "The Sea Beast",
        watchingprogress: 55,
        thumbnail: require("../assets/images/movies/the_beast.jpg"),
        details: {
            //image: require("../assets/images/series/barbarians/barbarians.jpg"),
            age: "16+",
            genre: "Historical Drama",
            ratings: 7.2,
            season: "SEASON 1",
            currentEpisode: 'S1 : E1 "Episode 1 : Vikings"',
            runningTime: "45m",
            progress: "0%"
        }
    },
    {
        id: 4,
        name: "The Boss baby",
        watchingprogress: 75,
        thumbnail: require("../assets/images/movies/bossbaby.jpg"),
        details: {
            //image: require("../assets/images/series/barbarians/barbarians.jpg"),
            age: "16+",
            genre: "Historical Drama",
            ratings: 7.2,
            season: "SEASON 1",
            currentEpisode: 'S1 : E1 "Episode 1 : Vikings"',
            runningTime: "45m",
            progress: "0%"
        }
    },
    {
        id: 5,
        name: "The Royal Treatment",
        watchingprogress: 15,
        thumbnail: require("../assets/images/movies/royal_treatment.jpg"),
        details: {
            //image: require("../assets/images/series/barbarians/barbarians.jpg"),
            age: "16+",
            genre: "Historical Drama",
            ratings: 7.2,
            season: "SEASON 1",
            currentEpisode: 'S1 : E1 "Episode 1 : Vikings"',
            runningTime: "45m",
            progress: "0%"
        }
    },
    {
        id: 6,
        name: "The Upside",
        watchingprogress: 60,
        thumbnail: require("../assets/images/movies/the_upside.jpg"),
        details: {
            //image: require("../assets/images/series/barbarians/barbarians.jpg"),
            age: "16+",
            genre: "Historical Drama",
            ratings: 7.2,
            season: "SEASON 1",
            currentEpisode: 'S1 : E1 "Episode 1 : Vikings"',
            runningTime: "45m",
            progress: "0%"
        }
    }, 
    {
        id: 7,
        name: "Rocks",
        watchingprogress: 15,
        thumbnail: require("../assets/images/movies/documentary.jpg"),
        details: {
            //image: require("../assets/images/series/barbarians/barbarians.jpg"),
            age: "16+",
            genre: "Historical Drama",
            ratings: 7.2,
            season: "SEASON 1",
            currentEpisode: 'S1 : E1 "Episode 1 : Vikings"',
            runningTime: "45m",
            progress: "0%"
        }
    },
    {
        id: 8,
        name: "Squid Game",
        watchingprogress: 66,
        thumbnail: require("../assets/images/movies/squid.jpg"),
        details: {
            //image: require("../assets/images/series/barbarians/barbarians.jpg"),
            age: "16+",
            genre: "Historical Drama",
            ratings: 7.2,
            season: "SEASON 1",
            currentEpisode: 'S1 : E1 "Episode 1 : Vikings"',
            runningTime: "45m",
            progress: "0%"
        }
    },
    {
        id: 9,
        name: "The Man From Toronto",
        watchingprogress: 10,
        thumbnail: require("../assets/images/movies/toronto.jpg"),
        details: {
            //image: require("../assets/images/series/barbarians/barbarians.jpg"),
            age: "16+",
            genre: "Historical Drama",
            ratings: 7.2,
            season: "SEASON 1",
            currentEpisode: 'S1 : E1 "Episode 1 : Vikings"',
            runningTime: "45m",
            progress: "0%"
        }
    },
    {
        id: 10,
        name: "Tenet",
        watchingprogress: 35,
        thumbnail: require("../assets/images/movies/tenet.jpg"),
        details: {
            //image: require("../assets/images/series/barbarians/barbarians.jpg"),
            age: "16+",
            genre: "Historical Drama",
            ratings: 7.2,
            season: "SEASON 1",
            currentEpisode: 'S1 : E1 "Episode 1 : Vikings"',
            runningTime: "45m",
            progress: "0%"
        }
    },
    {
        id: 11,
        name: "The Samaritan",
        watchingprogress: 54,
        thumbnail: require("../assets/images/movies/smaritan.jpg"),
        details: {
            //image: require("../assets/images/series/barbarians/barbarians.jpg"),
            age: "16+",
            genre: "Historical Drama",
            ratings: 7.2,
            season: "SEASON 1",
            currentEpisode: 'S1 : E1 "Episode 1 : Vikings"',
            runningTime: "45m",
            progress: "0%"
        }
    },
    {
        id: 12,
        name: "TopGun Maverick",
        watchingprogress: 40,
        thumbnail: require("../assets/images/movies/topgun.jpg"),
        details: {
            //image: require("../assets/images/series/barbarians/barbarians.jpg"),
            age: "16+",
            genre: "Historical Drama",
            ratings: 7.2,
            season: "SEASON 1",
            currentEpisode: 'S1 : E1 "Episode 1 : Vikings"',
            runningTime: "45m",
            progress: "0%"
        }
    },
    {
        id: 12,
        name: "Venom",
        watchingprogress: 75,
        thumbnail: require("../assets/images/movies/venom.jpg"),
        details: {
            //image: require("../assets/images/series/barbarians/barbarians.jpg"),
            age: "16+",
            genre: "Historical Drama",
            ratings: 7.2,
            season: "SEASON 1",
            currentEpisode: 'S1 : E1 "Episode 1 : Vikings"',
            runningTime: "45m",
            progress: "0%"
        }
    },
    {
        id: 13,
        name: "Thor Love and Thunder",
        watchingprogress: 100,
        thumbnail: require("../assets/images/movies/thor.jpg"),
        details: {
            //image: require("../assets/images/series/barbarians/barbarians.jpg"),
            age: "16+",
            genre: "Historical Drama",
            ratings: 7.2,
            season: "SEASON 1",
            currentEpisode: 'S1 : E1 "Episode 1 : Vikings"',
            runningTime: "45m",
            progress: "0%"
        }
    },
    {
        id: 14,
        name: "Bullet Train",
        watchingprogress: 80,
        thumbnail: require("../assets/images/movies/bullet_train.jpg"),
        details: {
            //image: require("../assets/images/series/barbarians/barbarians.jpg"),
            age: "16+",
            genre: "Historical Drama",
            ratings: 7.2,
            season: "SEASON 1",
            currentEpisode: 'S1 : E1 "Episode 1 : Vikings"',
            runningTime: "45m",
            progress: "0%"
        }
    },
    {
        id: 15,
        name: "Jeen Yuhs",
        watchingprogress: 20,
        thumbnail: require("../assets/images/movies/bullet_train.jpg"),
        details: {
            //image: require("../assets/images/series/barbarians/barbarians.jpg"),
            age: "16+",
            genre: "Historical Drama",
            ratings: 7.2,
            season: "SEASON 1",
            currentEpisode: 'S1 : E1 "Episode 1 : Vikings"',
            runningTime: "45m",
            progress: "0%"
        }
    },
]

const staticData = {
    moviesData,
    genreData,
    userData,
    actorsData,
    reviewsData
};

export default staticData;