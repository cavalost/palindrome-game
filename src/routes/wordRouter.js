const { Router } = require('express');
const { score } = require('../service/wordService');

const router = Router();
const scoreList = [];

router.get('/getScores', (req, res, next) => {
	try {
		return res.send(scoreList);
	} catch (error) {
		return next(new Error(error));
	}
});

router.post('/submitEntry', (req, res, next) => {
	const { name, word } = req.body;
	try {
		const points = score(word);
		scoreList.push({ name, points });
		scoreList.sort((a, b) => {
			if (a.points > b.points) {
				return -1;
			} if (a.points < b.points) {
				return 1;
			}
			return 0;
		});
		scoreList.splice(5);
		return res.send({
			name,
			points
		});
	} catch (error) {
		return next(new Error(error));
	}
});

module.exports = router;
