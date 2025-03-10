import sequelize from '../config/connection.js'
import { ArchitectFactory } from './architect.js';
import { CityFactory } from './city.js';
import { GolfCourseFactory } from './golfcourse.js';
import { UserFactory } from './user.js';

const User = UserFactory(sequelize);
const Architect = ArchitectFactory(sequelize);
const City = CityFactory(sequelize);
const GolfCourse = GolfCourseFactory(sequelize);

// ADD RELATIONSHIPS HERE

export { User, Architect, City, GolfCourse };
