import express from 'express';
import { Architect } from '../../models/architect';
import { City } from '../../models/city';
import { GolfCourse } from '../../models/golfcourse';



const router = express.Router();

// Get all architects
router.get('/architects', async (_req, res) => {
    try {
        const architects = await Architect.findAll();
        res.json(architects);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching architects' });
    }
});

// Get all cities
router.get('/city', async (_req, res) => {
    try {
        const cities = await City.findAll();
        res.json(cities);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching cities' });
    }
});

// Get golf courses by city
router.get('/golfcourses/:cityId', async (req, res) => {
    try {
        const { cityId } = req.params;
        const golfCourses = await GolfCourse.findAll({
            where: { cityId },
            include: [{ model: Architect }, { model: City }],
        });
        res.json(golfCourses);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching golf courses' });
    }
});

export default router;