var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import { getInitialStories, loadMoreStories } from '../services/news/index.js';
const router = express.Router();
router.use((req, res, next) => {
    next();
});
router.get('/initial', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const stories = yield getInitialStories();
    res.json(stories);
}));
router.get('/load/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const new_stories = yield loadMoreStories(parseInt(req.params.id));
    res.json(new_stories);
}));
export default router;
