const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/mernboilerplate"
);

const resourcesSeed = [
  {
    catagory: "about",
    heading: "About Us",
    subtitle: "from the creator of GraphicKnowvel",
    body1:
      "We are a Philadelphia based company serving the needs of small businesses in need of a little cash.",
      body2:
      "View our values and mission statment to learn more.",
      date: new Date(Date.now())
  },
  {
    catagory: "howitWorks",
    heading: "The Dead Zone",
    body1:
      "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
      body2:
      "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
      date: new Date(Date.now())
  },
  {
    catagory: "privacypolicy",
    heading: "The Dead Zone",
    body1:
        "Please reproduce and share!",
      body2:
      "See terms of use",
            date: new Date(Date.now())
  },
  {
    catagory: "termsofuse",
    heading: "Terms of Use",
    body1:
      "Terms of use the sale of this product is not limited in any way.",
      body2:
      "No Copyright as of yet.",
      date: new Date(Date.now())
  },
  {
    catagory: "missionstatement",
    heading: "Mission Statement",
    body1:
      "Partnering with small businesses to help them grow by providing honest, transparent, and consultive funding solutions tailored to the individual needs of each business.",
    date: new Date(Date.now())
  },
  {
    catagory: "values",
    heading: "Core Values",
    body1:
      "Be Honest and Transparent, Understand Each Business's Unique Needs, Look Out For Client's Best Interest, Client Success Is our Sucess, and Believe In Each And Every Business We Fund.",
    date: new Date(Date.now())
  },
  {
    catagory: "faq",
    heading: "Does an application cost money?",
    body1:
      "No! It will always be free",
    date: new Date(Date.now())
  }
];

db.Resources
  .remove({})
  .then(() => db.Resources.collection.insertMany(resourcesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });