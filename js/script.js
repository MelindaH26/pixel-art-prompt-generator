// Arrays to store randomised prompts
const subjects = ['cat', 'mouse', 'dog', 'bear', 'a mountain scene', 'trees', 'a flower', 'fruit', 'Whimsical Treehouse', 'Time-traveling Explorer', 'Robotic Garden', 'Mystical Waterfall', 'Steampunk Invention', 'Space Cowboy', 'Magical Tea Party', 'Enchanted Library', 'Mythical Moonlit Creature', 'Future City Market', 'Dreaming Android', 'Edible Galaxy', 'Futuristic Food Truck', 'Alien Botanicals', 'Robot Chef', 'Majestic Wolf', 'Owl', 'Red Panda', 'Swan', 'Fox', 'White Tiger', 'Seahorse', 'Raccoon', 'Peacock', 'Colorful Chameleon', 'Unicorn', 'Elephant', 'Dragon', 'Koala', 'Giant Panda', 'Hummingbird', 'Horse', 'Black Panther', 'Butterfly', 'Sushi Platter', 'Chocolate', 'Mango or Mango Smoothie', 'Salad', 'Ramen Bowl', 'Blueberry Pancakes', 'Taco', 'Pineapple', 'Pizza', 'Creme Brulee', 'Avocado Toast', 'Cheeseburger', 'Ice Cream', 'Lobster Thermidor',
'Pasta', 'Shrimp Tempura', 'Cupcake', 'Pumpkin Pie', 'Dragon Fruit', 'donut', 'Mushroom', 'Mushroom Forest', 'Sleeping Dog'];
const colourSchemes = ['monochromatic', '1 colour', '2 colours', '3 colours', '4 colours', '5 colours', '6 colours', 'unlimited', 'analogous colours', '3 colour analogous', '4 colour analogous', '5 colour analogous', '6 colour analogous', 'complementary', '2 blues, 2 yellows', 'Ocean Blues', 'Sunset Colours', 'Earthy Tones', 'Pastel Colours', 'Midnight Magic', 'Citrus Burst'];
const canvasSize = ['16x16', '32x32', '48x48', '64x64', '128x128', '256x256', '512x512', '24x24', '40x40', '72x72', '96x96', '120x120', '144x144', '180x180',
'200x200', '320x240', '640x480', '800x600', '1024x768', '20x20', '36x36', '60x60', '88x88', '160x160', '300x300', '400x400', '576x576', '720x720', 'Unlimited', 'Your Choice'];
const additionalChallenges = ['Use a spooky theme', 'add a sci-fi vibe', 'make it festive', 'try to replicate one of your favourite artist\'s styles', 'dystopian theme', 'Post your work on social media', 'Experiment with animating your pixel art, exploring simple movements or cycles.', 'Try your hand at creating an isometric pixel art scene for a unique perspective', 'Experiment with adding reflections and shadows to objects in your pixel art scene', 'Generate a random pattern or shape and incorporate it into your pixel art piece.', 'Combine two unrelated themes or concepts into a single pixel art piece, creating a unique fusion', 'Design a pixel art piece with perfect symmetry', 'Challenge yourself to convey a sense of landscape or environment in your piece', 'Experiment with pixel sorting techniques to distort and manipulate certain elements of your pixel art piece', 'Design a pixel art piece that incorporates an optical illusion', 'Use shading and color techniques to give a 3D effect to your pixel art', 'Challenge yourself to create a pixel art scene with a strong vanishing point perspective, emphasizing depth and distance.', 'Craft a pixel art piece using silhouettes', 'Experiment with adding glowing elements to your pixel art, such as neon signs, magical auras, or luminescent creatures.'];

// get intro para
const introPara = document.getElementsByClassName('intro-text')[0];
// get prompt holders
const subjectHolder = document.getElementsByClassName('subject-holder')[0];
const colourHolder = document.getElementsByClassName('colour-holder')[0];
const canvasHolder = document.getElementsByClassName('canvas-holder')[0];
const challengeHolder = document.getElementsByClassName('challenge-holder')[0];
// get prompt container
const promptContainer = document.getElementById('prompt-container');
// get buttons
const closeButton = document.getElementById('close');
const promptButton = document.getElementById('generate-prompt');

// function to hide or show desired element (pass in block or none)
function ChangeDisplay(el, display) {
    el.style.display = display;
}

// Helper function to return random array item
function getRandom(arr) {
    const num = Math.floor(Math.random() * arr.length);
    return arr[num];
}

// Create prompt class
class CreativePrompt {
    constructor() {
        this._subject = getRandom(subjects);
        this._colourScheme = getRandom(colourSchemes);
        this._canvasSize = getRandom(canvasSize);
        this._additionalChallenge = getRandom(additionalChallenges)
    }

    //getters
    get subject() {
        return this._subject;
    }
    get colourScheme() {
        return this._colourScheme;
    }
    get canvasSize() {
        return this._canvasSize;
    }
    get additionalChallenge() {
        return this._additionalChallenge;
    }

}

// function to create and update prompt/prompt fields
function generatePrompt() {
    
    // create prompt
    const prompt = new CreativePrompt;
    
    // map fields to holders
    subjectHolder.innerHTML = prompt.subject;
    colourHolder.innerHTML = prompt.colourScheme;
    canvasHolder.innerHTML = prompt.canvasSize;
    challengeHolder.innerHTML = prompt.additionalChallenge;

    // Make sure conainer is displaying
    promptContainer.style.display = 'block';

    // hide intro text if it is out
    ChangeDisplay(introPara, 'none');
}


// call the generatePrompt() on button click
promptButton.addEventListener('click', generatePrompt);
// hide the prompt container when the 'x' button is clicked
closeButton.addEventListener('click', function () {
    ChangeDisplay(promptContainer, 'none');
    introPara.innerHTML = 'Oh no, you broke it! :\'\( ... Just kidding!<br/>click the button for another idea';
    ChangeDisplay(introPara, 'block');
});
