const generateRandomAIPost = require('../../utils').generateRandomAIPost;

module.exports = (req, res) => {
    let item1 = generateRandomAIPost()
    let item2 = generateRandomAIPost()
    let item3 = generateRandomAIPost()
    res.json({
      items: [item1, item2, item3]
    });
};