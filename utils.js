const imageData = {
    "userNames": ["bri_123", "sam_got_2", "jennie_smt", "dizzy_candy", "skol34", "hymy_jon"],
    "comments": ["cool!!!", "This is amazing", "wow this looks great"],
    "images": [
        {
            "objects": [
                {"value": "1", "type": "dog", "position": []},
                {"value": "2", "type": "dog", "position": []},
                {"value": "3", "type": "dog", "position": []}
            ],
            "keywords": ["dog", "animals", "pets", "care", "garden", "familly", "kids"],
            "vibes": [
                {"value": "happyness", "sentiment": "green"}, 
                {"value": "homelife", "sentiment": "yellow"},
                {"value": "gardening", "sentiment": "yellow"},
                {"value": "playing", "sentiment": "yellow"},
                {"value": "loving", "sentiment": "pink"},
                {"value": "joyfull", "sentiment": "pink"}
            ],
            "headlines": [
                "I love my doggy.",
                "Did you get your dog out today?",
                "Mixed-breed dogs"
            ],
            "emojis": ["🐕","🐾","🐩","🐶","🐕‍🦺","🦮"],
            "stories": [
                "Worried about remembering all of these className names? The Tailwind CSS IntelliSense extension for VS Code has you covered.",
                "Emoji Meaning The cooked sausage of a hot dog in a sliced bun and drizzled with yellow mustard.",
                "The domestic dog is a domesticated descendant of the wolf. ",
                "The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nearest living relative. "
            ]
        },
        {
            "objects": [
                {"value": "1", "type": "sun", "position": []},
                {"value": "2", "type": "sea", "position": []},
                {"value": "3", "type": "human", "position": []}
            ],
            "keywords": ["sun", "beach", "palms", "sea", "summer", "summertime", "party", "hot", "sand", "vacation"],
            "vibes": [
                {"value": "happyness", "sentiment": "green"}, 
                {"value": "friendship", "sentiment": "green"},
                {"value": "joy", "sentiment": "green"},
                {"value": "partying", "sentiment": "pink"},
                {"value": "positivity", "sentiment": "pink"},
                {"value": "excitement", "sentiment": "purple"}
                
            ],
            "headlines": [
                "Kiss me hard before you go, Summertime sadness",
                "Summertime, And the livin' is easy",
                "One of these mornings, You're gonna rise up singing",
                "Yes, you'll spread your wings"
            ],
            "emojis": ["🏖️","🦩","🌴","🌊", "⛵", "🚢"],
            "stories": [
                "The song is sung several times throughout Porgy and Bess. Its lyrics are the first words heard in act 1 of the opera",
                "A wave of water, as breaks at the beach. Depicted as a blue wave with a foamy, white crest, curling to the right.",
                "A gray seal with dark eyes and a dark nose. Most platforms feature a design with whiskers.",
                "Emoji Meaning An octopus, a sea animal with eight legs, known to change color and release ink."
            ]
        }
    ]
};

const generateRandomAIPost = function() {
    let images = ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg'];
    let emojis = ["🐕","🐾","🐩","🐶","🐕‍🦺","🦮"].sort( () => .5 - Math.random() );;
    let comments =  ["cool!!!", "This is amazing", "wow this looks great"];
    let userNames = ["bri_123", "sam_got_2", "jennie_smt", "dizzy_candy", "skol34", "hymy_jon"];
    let stories = [
        "This post was generated by AI. How cool is that !!!",
        "Emoji Meaning The cooked sausage of a hot dog in a sliced bun and drizzled with yellow mustard.",
        "The domestic dog is a domesticated descendant of the wolf. ",
        "The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nearest living relative. "
    ];

    return {
      likes: Math.floor(Math.random() * (1000 - 100)) + 100,
      userName: 'devGhostStories',
      story: stories[Math.floor(Math.random()*stories.length)],
      tags: ['ai', 'devghoststories', 'aistories'],
      emojis: emojis.sort( () => 0.5 - Math.random()),
      commentUserName: userNames[Math.floor(Math.random()*userNames.length)],
      comment: comments[Math.floor(Math.random()*comments.length)],
      image: images[Math.floor(Math.random()*images.length)],
    };
}

module.exports = {
    generateRandomAIPost,
    imageData
}