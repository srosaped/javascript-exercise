// EXERCISE 1

let n = 100;

function result() {
    for (i = 1; i <= n; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log("Visual Nuts");
        }
        else if (i % 3 === 0) {
            console.log("Visual");
        }
        else if (i % 5 === 0) {
            console.log("Nuts");
        }
        else {
            console.log(i);
        }
    }
}

result();

// EXERCISE 2 

const data = [
    {
        country: 'US',
        languages: ['en']
    },
    {
        country: 'BE',
        languages: ['nl', 'fr', 'de']
    },
    {
        country: 'NL',
        languages: ['nl']
    },
    {
        country: 'DE',
        languages: ['de']
    },
    {
        country: 'ES',
        languages: ['es']
    }
];

function countryLanguages() {

    //- returns the number of countries in the world
    const total = data.reduce((a, o) => (a[o.country] = 0, a), {});

    console.log("Number of Countries is:", Object.keys(total).length);

    //- to find the most common official language(s), of all countries
    const countLanguages = new Map();

    data.forEach(country => {
        country.languages.forEach(lang => {
            if (!countLanguages.has(lang)) {
                countLanguages.set(lang, 1);
            }
            else countLanguages.set(lang, countLanguages.get(lang) + 1);
        })

    })
    const sorted = [...countLanguages.entries()].sort();

    console.log("The most common official language(s):", sorted[0])

    //- that counts all the official languages spoken in the listed countries.

    data.forEach(country => {
        country.languages.forEach(lang => {
            countLanguages.set(lang, countLanguages.get(lang)
            )
        })

    });

    console.log('All the official languages are:', sorted.length)

    //- finds the country with the most official languages, where they officially speak German (de). 

    data.forEach((country) => {
        const resArr = country.languages.filter(lang => lang)
        if (resArr.length > 1 && resArr.includes('de'))
        console.log(`Most langs and officially speak German: ${resArr}`)
    });

    //- to find the country with the highest number of official languages.

    const allCountries = data.map(country => country);

    const maxLength = Math.max(...data.map(country => country.languages.length));

    console.log(`Country highest number of official languages is ${allCountries[1].country} with ${maxLength} languages `);

}

countryLanguages();
