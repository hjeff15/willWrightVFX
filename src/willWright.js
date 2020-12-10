const willDetails = {
    name: 'Will Wright',
    occupation: 'Digital Compositor',
    email: 'williamwrightvfx@gmail.com',
    showreel: 'https://vimeo.com/476581882',
    showreelPassword: 'Showreel2020',
    linkedInURL: 'https://www.linkedin.com/in/willwrightvfx/',
    about: 'Experienced Nuke Compositor, with over 8 years in the industry. A great technical grounding of Nuke with a create eye. Also has a high standard for attention to detail, with a genuine passion for VFX.',
    filmography:[
        {
            name: 'The Witches',
            role: 'Digital compositor',
            company: 'Nviz Visual Effects',
            year: 2020,
            img: 'https://m.media-amazon.com/images/M/MV5BNjRkYjlhMjEtYzIwOC00ZWYzLTgyMmQtYjI5M2UzNDJkNTU2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
            imdb:'https://www.imdb.com/title/tt0805647/?ref_=fn_al_tt_1',
        },
        {
            name: 'The One and Only Ivan',
            role: 'Visual effects artist',
            company: 'Nviz Visual Effects',
            year: 2020,
            img: 'https://m.media-amazon.com/images/M/MV5BZWY3OTNhNWUtMDk2My00ZGVhLWE5ODQtM2NkOTZiMWM2MGY2XkEyXkFqcGdeQXVyNjMwMzc3MjE@._V1_SX300.jpg',
            imdb:'https://www.imdb.com/title/tt3661394/?ref_=fn_al_tt_1',
        },
        {
            name: 'An American Pickle',
            role: 'Digital compositor',
            company: 'Nviz Visual Effects',
            year: 2020,
            img: 'https://m.media-amazon.com/images/M/MV5BNmRkZmZiNzUtMzgwYy00NTEzLWE2NjctMmI3NGI5ZTBiNDdkXkEyXkFqcGdeQXVyNzE3ODQxNjU@._V1_SX300.jpg',
            imdb:'https://www.imdb.com/title/tt9059704/?ref_=fn_al_tt_1',
        },
        {
            name: 'Devs',
            role: 'Digital compositor',
            company: 'Nviz Visual Effects',
            year: 2020,
            img: 'https://m.media-amazon.com/images/M/MV5BYjZjN2VhYzEtNjQwNy00NjU2LTlkMGYtYzU3NzM0ZTYwN2ZkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg',
            imdb:'https://www.imdb.com/title/tt8134186/?ref_=fn_al_tt_1',
        },
        {
            name: 'Avengers: Endgame',
            role: 'Compositor',
            company: 'Cinestine',
            year: 2019,
            img: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
            imdb:'https://www.imdb.com/title/tt4154796/?ref_=fn_al_tt_1',
        },
        {
            name: 'Fantastic Beasts: The Crimes of Grindelwald',
            role: 'Visual effects artist',
            company: 'Nviz (On location at Leavesden Studios)',
            year: 2018,
            img: 'https://m.media-amazon.com/images/M/MV5BYWVlMDI5N2UtZTIyMC00NjZkLWI5Y2QtODM5NGE5MzA0NmVjXkEyXkFqcGdeQXVyNzU3NjUxMzE@._V1_SX300.jpg',
            imdb:'https://www.imdb.com/title/tt4123430/?ref_=fn_al_tt_1',
        },
        {
            name: 'Outlaw King',
            role: 'Digital compositor',
            company: 'Nviz Visual Effects',
            year: 2018,
            img: 'https://m.media-amazon.com/images/M/MV5BMTc4MTU4YzEtODBiNC00NzA4LTg0NGItM2ZhZjZlNDFiNjJjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg',
            imdb:'https://www.imdb.com/title/tt6679794/?ref_=fn_al_tt_1',
        },
        {
            name: '22 July',
            role: 'Visual effects',
            company: 'Nviz Visual Effects',
            year: 2018,
            img: 'https://m.media-amazon.com/images/M/MV5BNGY2MmQ0YTYtNjRjOS00ZjBhLThlMDMtN2FiY2ZjODhmNzU2XkEyXkFqcGdeQXVyOTA5NzQ0MDQ@._V1_SX300.jpg',
            imdb:'https://www.imdb.com/title/tt7280898/?ref_=fn_al_tt_1',
        },
        {
            name: 'Patient Zero',
            role: 'Digital compositor',
            company: 'Nviz Visual Effects',
            year: 2018,
            img: 'https://m.media-amazon.com/images/M/MV5BMjQ0Njc1OTczMl5BMl5BanBnXkFtZTgwMDM0MzY5NTM@._V1_SX300.jpg',
            imdb:'https://www.imdb.com/title/tt3458254/?ref_=fn_al_tt_1',
        },
        {
            name: 'Solo: A Star Wars Story',
            role: 'Post-vis artist On location at Pinewood studios',
            company: 'Nviz Visual Effects',
            year: 2018,
            img: 'https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SX300.jpg',
            imdb:'https://www.imdb.com/title/tt3778644/?ref_=fn_al_tt_1',
        },
        {
            name: 'Annihilation',
            role: 'Digital compositor',
            company: 'Nviz Visual Effects',
            year: 2018,
            img: 'https://m.media-amazon.com/images/M/MV5BMTk2Mjc2NzYxNl5BMl5BanBnXkFtZTgwMTA2OTA1NDM@._V1_SX300.jpg',
            imdb:'https://www.imdb.com/title/tt2798920/?ref_=fn_al_tt_1',
        },
        {
            name: 'King Arthur: Legend of the Sword',
            role: 'Digital compositor',
            company: 'Nviz Visual Effects',
            year: 2017,
            img: 'https://m.media-amazon.com/images/M/MV5BMjM3ODY3Njc5Ml5BMl5BanBnXkFtZTgwMjQ5NjM5MTI@._V1_SX300.jpg',
            imdb:'https://www.imdb.com/title/tt1972591/?ref_=fn_al_tt_1',
        },
        {
            name: 'Life',
            role: 'Digital compositor',
            company: 'Nviz Visual Effects',
            year: 2017,
            img: 'https://m.media-amazon.com/images/M/MV5BMzAwMmQxNTctYjVmYi00MDdlLWEzMWUtOTE5NTRiNDhhNjI2L2ltYWdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
            imdb:'https://www.imdb.com/title/tt5442430/?ref_=fn_al_tt_1',
        },
        {
            name: 'Jason Bourne',
            role: 'Digital compositor',
            company: 'Nviz Visual Effects',
            year: 2016,
            img: 'https://m.media-amazon.com/images/M/MV5BNGJlYjVkMjQtN2NlZC00NTJhLThmZjItMTRlZDczMmE3YmI3XkEyXkFqcGdeQXVyMzI0NDc4ODY@._V1_SX300.jpg',
            imdb:'https://www.imdb.com/title/tt4196776/?ref_=fn_al_tt_1',
        },
        {
            name: 'Sing Street',
            role: 'Digital compositor',
            company: 'Nviz Visual Effects',
            year: 2016,
            img: 'https://m.media-amazon.com/images/M/MV5BMjEzODA3MDcxMl5BMl5BanBnXkFtZTgwODgxNDk3NzE@._V1_SX300.jpg',
            imdb:'https://www.imdb.com/title/tt3544112/?ref_=fn_al_tt_1',
        },
        {
            name: 'Eddie the Eagle',
            role: 'Digital compositor',
            company: 'Nviz Visual Effects',
            year: 2015,
            img: 'https://m.media-amazon.com/images/M/MV5BMTUxOTc5MTU1NF5BMl5BanBnXkFtZTgwODYyNTA1NzE@._V1_SX300.jpg',
            imdb:'https://www.imdb.com/title/tt1083452/?ref_=fn_al_tt_1',
        },
        {
            name: 'Victor Frankenstein',
            role: 'Digital compositor',
            company: 'Nviz Visual Effects',
            year: 2015,
            img: 'https://m.media-amazon.com/images/M/MV5BODA5MDc2NDI5OF5BMl5BanBnXkFtZTgwNDYzMTA2NjE@._V1_SX300.jpg',
            imdb:'https://www.imdb.com/title/tt1976009/?ref_=fn_al_tt_1',
        },
        {
            name: 'Legend',
            role: 'Compositor',
            company: 'Nviz Visual Effects',
            year: 2015,
            img: 'https://m.media-amazon.com/images/M/MV5BMjE0MjkyODQ3NF5BMl5BanBnXkFtZTgwNDM1OTk1NjE@._V1_SX300.jpg',
            imdb:'https://www.imdb.com/title/tt3569230/?ref_=fn_al_tt_2',
        },
        {
            name: 'Absolutely Anything',
            role: 'Digital compositor',
            company: 'Nviz Visual Effects',
            year: 2015,
            img: 'https://m.media-amazon.com/images/M/MV5BMjMxNTQ1NDgyOF5BMl5BanBnXkFtZTgwMjMxNjU0NjE@._V1_SX300.jpg',
            imdb:'https://www.imdb.com/title/tt1727770/?ref_=fn_al_tt_1',
        },
        {
            name: 'Kingsman: The Secret Service',
            role: 'Digital compositor',
            company: 'Nviz Visual Effects',
            year: 2014,
            img: 'https://m.media-amazon.com/images/M/MV5BMTkxMjgwMDM4Ml5BMl5BanBnXkFtZTgwMTk3NTIwNDE@._V1_SX300.jpg',
            imdb:'https://www.imdb.com/title/tt2802144/?ref_=fn_al_tt_1',
        },
        {
            name: 'Robot Overlords',
            role: 'Digital compositor',
            company: 'Nviz Visual Effects',
            year: 2014,
            img: 'https://m.media-amazon.com/images/M/MV5BMjM1ODc0MDgzNV5BMl5BanBnXkFtZTgwMzcyNzE1NDE@._V1_SX300.jpg',
            imdb:'https://www.imdb.com/title/tt2145829/?ref_=fn_al_tt_1',
        },
        {
            name: 'Trash',
            role: 'Digital compositor',
            company: 'Nviz Visual Effects',
            year: 2014,
            img: 'https://m.media-amazon.com/images/M/MV5BMTEyNDY2Njc1NzheQTJeQWpwZ15BbWU4MDc1NzY2NjYx._V1_SX300.jpg',
            imdb:'https://www.imdb.com/title/tt1921149/?ref_=fn_al_tt_1',
        },
        {
            name: 'Edge of Tomorrow',
            role: 'Digital compositor',
            company: 'Nviz Visual Effects',
            year: 2014,
            img: 'https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_SX300.jpg',
            imdb:'https://www.imdb.com/title/tt1631867/?ref_=fn_al_tt_1',
        },
        {
            name: 'Muppets Most Wanted',
            role: 'Digital compositor',
            company: 'Nviz Visual Effects',
            year: 2014,
            img: 'https://m.media-amazon.com/images/M/MV5BNDY2MTE0ODM4NF5BMl5BanBnXkFtZTgwMDI3Mjc2MDE@._V1_SX300.jpg',
            imdb:'https://www.imdb.com/title/tt2281587/?ref_=fn_al_tt_1',
        },
        {
            name: '47 Ronin',
            role: 'Roto artist)',
            company: 'Framestore',
            year: 2013,
            img: 'https://m.media-amazon.com/images/M/MV5BMTc0MjE2NzE0OV5BMl5BanBnXkFtZTgwNTU5MjE1MDE@._V1_SX300.jpg',
            imdb:'https://www.imdb.com/title/tt1335975/?ref_=fn_al_tt_1',
        }
    ],
    reference:[
        {
            name: 'Ciaran Keenan-Gavaghan',
            role: 'Head of production Nviz',
            email: 'ciaran.keenan@nviz-studio.com',
            telephone: '+44(0)20 3167 3860'
        },
        {
            name: 'Jamie Wood',
            role: 'Head of 2D Nviz',
            email: 'jamie.wood@nviz-studio.com',
            telephone: '+44(0)20 3167 3860'
        }
    ],
    education: [
        {
            university: 'University of Gloucestershire',
            degree: 'BA Hons Professional Media – Video Production'
        }
    ]
}

export default willDetails;