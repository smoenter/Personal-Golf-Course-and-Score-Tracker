import { seedUsers } from './user-seeds.js';
import sequelize from '../config/connection.js';
import { insertCitiesAndGolfCourses } from './city-seeds.js';

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await insertCitiesAndGolfCourses();
    console.log('\n----- CITIES SEEDED -----\n');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();
