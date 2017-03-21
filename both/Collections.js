const AppData = {
    IngredientOptions: {
        "Cheese": "",
        "Sausage": "",
        "Eggs": "",
        "Bacon": "",
        "Ham": "",
        "Salsa": "",
        "Hot Sauce": "glyphicon glyphicon-fire",
        "Barbacoa": "",
        "Chicharróns": ""
    }
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
            options: Object.keys(AppData.IngredientOptions).map(function(i) { return { label: i, value: i}; })
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
    burritos: {
        type: [Schemas.BurritoSchema],
        label: "Burritos",
        optional: false
    },
    created: {
        type: Date,
        autoValue: function() {
            return new Date();
        },
        optional: true,
        label: "Created",
        autoform: {
            type: "hidden"
        }
    },
    user: {
        type: String,
        label: "Username",
        autoValue: function() {
            return Meteor.user() === null? 'Stranger McDanger': Meteor.user().username;
        },
        optional: false,
        autoform: {
            type: "hidden"
        }
    },
    userId: {
        type: String,
        label: "UserId",
        autoValue: function() {
            return this.userId;
        },
        optional: true,
        autoform: {
            type: "hidden"
        }
    }
});

Ingredients.attachSchema(Schemas.IngredientSchema);
Burritos.attachSchema(Schemas.BurritoSchema);
Orders.attachSchema(Schemas.OrderSchema);
