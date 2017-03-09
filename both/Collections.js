const AppData = {
    IngredientOptions: [
                "Cheese",
                "Sausage",
                "Eggs",
                "Bacon",
                "Ham",
                "Salsa"
    ]
};

Schemas = {};

Template.registerHelper("Schemas", Schemas);

var Collections = {};

Template.registerHelper("Collections", Collections);

Orders = Collections.Orders = new Mongo.Collection("orders");
Burritos = Collections.Burritos = new Mongo.Collection("burritos");
Ingredients = Collections.Ingredients = new Mongo.Collection("ingredients");

Schemas.IngredientSchema = new SimpleSchema({
    ingredient: {
        type: String,
        label: "Ingredient",
        autoform: {
            options: AppData.IngredientOptions.map(function(i) { return { label: i, value: i}; })
        },
        optional: false
    },
    count: {
        type: Number,
        label: "Count",
        min: 1,
        max: 5,
        optional: false
    }
});

Schemas.BurritoSchema = new SimpleSchema({
    ingredients: {
        type: [Schemas.IngredientSchema],
        label: "Ingredients"
    }
});

Schemas.OrderSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        optional: false
    },
    burritos: {
        type: [Schemas.BurritoSchema],
        label: "Burritos",
        optional: false
    }
});

Ingredients.attachSchema(Schemas.IngredientSchema);
Burritos.attachSchema(Schemas.BurritoSchema);
Orders.attachSchema(Schemas.OrderSchema);
