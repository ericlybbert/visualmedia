var products = [    
"Pens",
"Pencils",
"Erasers",
"Highlighters",
"Scissors",
"Permanent markers",
"Binder clips",
"Stapler",
"Staples",
"Tape",
"Glue sticks",
"Rubber bands",
"Pencil sharpener",
"3 hole punch",
"Calculator",
"Desk drawer organizer",
"File cabinet",
"Manila folders",
"3 ring binders",
"Calendar",
"Planner",
"Envelopes",
"Stamps",
"Sticky notes",
"Notepads",
"Printer paper",
"Printer cartridges",
"Printer",
"Wireless router",
"Power strip",
"Paper shredder",
"Scanner",
"Label maker",
"Plates",
"Flatware",
"Can opener",
"Wooden spoon",
"Whisk",
"Spatula",
"Measuring cups",
"Pot or pan",
"Dish cloths",
"Salt and pepper shakers",
"Ice cube tray",
"Garbage can",
"Toilet paper",
"Toilet brush",
"Bath mat",
"Bar of soap",
"Liquid soap dispenser",
"Toothpaste",
"Toilet plunger",
"Pillow",
"Sheets",
"Laundry hamper",
"Baking soda",
"Broom",
"Dustpan",
"Vacuum",
"Mop",
"Batteries",
"Scissors",
"Needle and thread",
"Band-Aids",
"Air freshener",
"Screwdriver",
"Hammer",
"Pliers",
"Wrench",
"Nails"   
 ]; 



var gender = [  
"Male",
"Female",
"Male and Female"
]; 

var age = [  
"18-24",
"25-34",
"35-44",
"45-54",
"55-64",
"65+"

]; 

var relationship = [  
"Married",
"In a relationship",
"Single"
]; 

var education = [  
"High school",
"Associates",
"Bachelors",
"Masters or Doctorate"
]; 

var income = [  
"$15,000 – $39,000",
"$40,000 – $59,000",
"$60,000 – $89,000",
"$90,000 +"
]; 

var media = [  
"Magazines and Facebook"  
]; 

/*
"Magazines and Blogs",
"Magazines and Social Media",    
"TV and Blogs",
"TV and Social Media",
"Blogs and Social Media",  
*/





function random(mylength, myarray, myid){
    //alert(myarray.toString());
    var myrandom = Math.floor((Math.random() * mylength));  
    var myselection = myarray[myrandom].toString();
    console.log(myselection);
    document.getElementById(myid).innerHTML = myselection;
}


function generate(){
random(products.length, products, "product");
random(gender.length, gender, "gender");
random(age.length, age, "age");
random(relationship.length, relationship, "relationship");
random(education.length, education, "education");
random(income.length, income, "income");
random(media.length, media, "media");
}
