var emotions = [    
    "Affraid",
    "Angry",
    "Annoyed",
    "Anxious",
    "Bored",
    "Cheerful",
    "Confused",
    "Defensive",
    "Disgust",
    "Hope",
    "Love",
    "Sad",
    "Worried",
    "Nails"   
 ]; 


var colors = [  
    "Blue",
    "Green",
    "Red",
    "Yellow",
    "Orange",
    "Purple",
    "Brown",
    "Tan",
    "Ivory",
    "Gold",
    "Silver",
    "Pink"
]; 

var nouns = [  
    "actor",
    "airplane",
    "airport",
    "army",
    "baseball",
    "beef",
    "birthday",
    "boy",
    "brush",
    "bushes",
    "butter",
    "cast",
    "cave",
    "cent",
    "cherries",
    "cherry",
    "cobweb",
    "coil",
    "cracker",
    "dinner",
    "eggnog",
    "elbow",
    "face",
    "fireman",
    "flavor",
    "gate",
    "glove",
    "glue",
    "goldfish",
    "goose",
    "grain",
    "hair",
    "haircut",
    "hobbies",
    "holiday",
    "hot",
    "jellyfish",
    "ladybug",
    "mailbox",
    "number",
    "oatmeal",
    "pail",
    "pancake",
    "pear",
    "pest",
    "popcorn",
    "queen",
    "quicksand",
    "quiet",
    "quilt",
    "rainstorm",
    "scarecrow",
    "scarf",
    "stream",
    "street",
    "sugar",
    "throne",
    "toothpaste",
    "twig",
    "volleyball",
    "wood",
    "wrench"
]; 

var genres = [  
    "Jazz",
    "Folk Music",
    "Hip Hop",
    "Rap",
    "Rock",
    "Reggae",
    "Pop",
    "Techno",
    "Punk",
    "Country",
    "Blues"
]; 




function random(mylength, myarray, myid){
    //alert(myarray.toString());
    var myrandom = Math.floor((Math.random() * mylength));  
    var myselection = myarray[myrandom].toString();
    console.log(myselection);
    document.getElementById(myid).innerHTML = myselection;
}


function generate(){
    random(colors.length, colors, "colors");
    random(emotions.length, emotions, "emotions");
    random(nouns.length, nouns, "nouns");
    random(genres.length, genres, "genres");
}
