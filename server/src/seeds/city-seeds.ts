import { Architect } from "../models/architect.js";
import { City } from "../models/city.js";
import { GolfCourse } from "../models/golfcourse.js";


export async function insertCitiesAndGolfCourses() {
    try {
        // add architect model and insert data here
        const architects = await Architect.bulkCreate([
           { name: 'Jack Kidwell'},
           { name: 'Herbert Strong'},
           { name: 'Harold Paddock'},
           { name: 'Donald Ross'},
           { name: 'Larry Packard'},
           { name: 'Hamilton County Park District'},
           { name: 'Michael Hurdzan'},
        ])

        const cities = await City.bulkCreate([
            { name: 'Columbus' },
            { name: 'Cleveland' },
            { name: 'Cincinnati' },
        ]);
        console.log('Architects and Cities inserted successfully.');

// may or may not work
        const columbusId = cities.find((city: { name: string; }) => city.name === 'Columbus')?.id;
        await GolfCourse.bulkCreate([
            { cityId: columbusId, name: 'Airport Golf Course', address: '900 N. Hamilton Road, Columbus, OH 43219', architectId: architects[0].id },
            { cityId: columbusId, name: 'Champions Golf Course', address: '3900 Westerville Road, Columbus, OH 43224', architectId: architects[1].id },
            { cityId: columbusId, name: 'Mentel Memorial Golf Course', address: '6005 Alkire Road, Galloway, Ohio 43119', architectId: architects[0].id },
        ]);

        const clevelandId = cities.find((city: { name: string; }) => city.name === 'Cleveland')?.id;
        await GolfCourse.bulkCreate([
            { cityId: clevelandId, name: 'Ironwood Golf Course', address: 'Hinckley Reservation 445 State Rd.Hinckley, Ohio 44233', architectId: architects[2].id },
            { cityId: clevelandId, name: 'Manakiki Golf Course', address: 'North Chagrin Reservation 35501 Eddy Road Willoughby, OH 44094', architectId: architects[3].id },
            { cityId: clevelandId, name: 'Seneca Golf Course', address: 'Brecksville Reservation 975 Valley Parkway Broadview Heights, OH 44147', architectId: architects[4].id },
        ]);

        const cincinnatiId = cities.find((city: { name: string; }) => city.name === 'Cincinnati')?.id;
        await GolfCourse.bulkCreate([
            { cityId: cincinnatiId, name: 'Miami Whitewater Forest Golf Course', address: '8801 Mt. Hope Road Harrison, OH 45030 and Hamilton County Park District', architectId: architects[5].id },
            { cityId: cincinnatiId, name: 'Meadow Links and Golf Academy', address: '10999 Mill Road, Cincinnati, OH 45240', architectId: architects[6].id },
            { cityId: cincinnatiId, name: 'The Vineyard Golf Course', address: '600 Nordyke Rd Cincinnati, OH 45255', architectId: architects[0].id,},
        ]);

        console.log('Cities and Golf Courses inserted successfully.');
    } catch (error) {
        console.error('Error inserting data:', error);
    }
}

// insertCitiesAndGolfCourses();