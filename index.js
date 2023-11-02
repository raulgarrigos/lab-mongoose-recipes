const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

mongoose.set("strictQuery", false);

const MONGODB_URI = "mongodb://127.0.0.1:27017/recipe-app";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    // return Recipe.deleteMany()

    // ! Create => Iteration 2
    // return Recipe.create({
    //   title: "Carrot Cake",
    //   level: "Amateur Chef",
    //   ingredients: [
    //     "6 cups grated carrots",
    //     "1 cup brown sugar",
    //     "1 cup raisins",
    //     "4 eggs",
    //     "1 1/2 cups white sugar",
    //     "1 cup vegetable oil",
    //     "2 teaspoons vanilla extract",
    //     "1 cup crushed pineapple, drained",
    //     "3 cups all-purpose flour",
    //     "1 1/2 teaspoons baking soda",
    //     "1 teaspoon salt",
    //     "4 teaspoons ground cinnamon",
    //   ],
    //   cuisine: "International",
    //   dishType: "dessert",
    //   image:
    //     "https://images.media-allrecipes.com/userphotos/720x405/3605684.jpg",
    //   duration: 130,
    //   creator: "Chef Nadia",
    // });

    // ! Insert multiple recipes => Iteration 3
    // return Recipe.insertMany(data);
    //! Update recipe =>  Iteration 4
    //   return Recipe.findOneAndUpdate(
    //     { title: "Rigatoni alla Genovese" },
    //     { duration: 100 },
    //     { new: true }
    //   );
    //! Remve a recipe => Iteration 5
    return Recipe.findByIdAndDelete("6543d254a246eb182444d848");
  })
  .then((response) => {
    // console.log(response.title); // ! Iteración 2
    // response.forEach((eachElement) => { // ! Iteración 3
    //   console.log(eachElement.title);
    // });
    //console.log("receta actualizada", response); //!Iteration 4

    console.log("delete success", response);
    return mongoose.connection.close(); // !Iteracion 6 cierre de conexion con DB
  })
  .then((response) => {
    console.log("conexion cerrada"); //! Iteracion 6
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
