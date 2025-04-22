import express from 'express';
import fs from 'fs';
import path from 'path';
import authMiddleware from '../middleware/authMiddleware.js';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../db/db.json');

// שליפת כל המתכונים
router.get('/', (req, res) => {
    const db = JSON.parse(fs.readFileSync(dbPath));
    setTimeout(() => res.json(db.recipes), [2000])
});
router.get('/:id', (req, res) => {
    const id = req.params.id; // קבלת ה-ID מהפרמטרים של הבקשה
    const db = JSON.parse(fs.readFileSync(dbPath));
    
    // מציאת המתכון לפי ה-ID
    const recipe = db.recipes.find(r => r.id === id);

    if (recipe) {
        res.json(recipe); // החזרת המתכון אם נמצא
    } else {
        res.status(404).json({ message: 'Recipe not found' }); // החזרת שגיאה אם לא נמצא
    }
});


// הוספת מתכון (רק למשתמש מחובר)
router.post('/', authMiddleware, (req, res) => {
    const { title, description,products } = req.body;
    const db = JSON.parse(fs.readFileSync(dbPath));

    const newRecipe = {
        id: Date.now(),
        title,
        products,
        description,
        authorId: req.user.id
    };

    db.recipes.push(newRecipe);
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

    res.status(201).json({ message: "Recipe added", recipe: newRecipe });
});

export default router;
