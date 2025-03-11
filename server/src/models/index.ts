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

Architect.hasMany(GolfCourse, { foreignKey: 'architectId' });
  GolfCourse.belongsTo(Architect, { foreignKey: 'architectId' });

  City.hasMany(GolfCourse, { foreignKey: 'cityId' });
  GolfCourse.belongsTo(City, { foreignKey: 'cityId' });

export { User, Architect, City, GolfCourse };
