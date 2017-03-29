const AppData = {
    IngredientOptions: [
        "Egg",
        "Bacon",
        "Sausage",
        "Turkey Bacon",
        "Cheese",
        "Potatoes",
        "Beans",
        "Onions",
        "Bell Peppers",
        "Green Chilies",
        "Jalapeño"
    ]
};

Schemas = {};

Template.registerHelper("Schemas", Schemas);

var Collections = {};

Template.registerHelper("Collections", Collections);

Burritos = Collections.Burritos = new Mongo.Collection("burritos");

// #region Burrito Schema
var burritoSchema = _.reduce(AppData.IngredientOptions, (y, x) => {
    y[x] = { type: Boolean, label: x }
    return y;
}, {});
burritoSchema.notes = {
    type: String,
    label: "Notes",
    optional: true,
    autoform: {
        afFieldInput: {
            type: "textarea"
        }
    }
};
burritoSchema.payment = {
    type: String,
    label: "I'll pay with:",
    optional: false,
    autoform: {
        options: [
            { value: "Cash", label: "Cash" },
            { value: "Buckaroos", label: "Buckaroos"}
        ]
    }
};
burritoSchema.created = {
    type: Date,
    autoValue: function() {
        return new Date();
    },
    optional: true,
    label: "Created",
    autoform: {
        type: "hidden"
    }
};
burritoSchema.user = {
    type: String,
    label: "Username",
    autoValue: function() {
        return Meteor.user() === null? 'Stranger McDanger': Meteor.user().username;
    },
    optional: false,
    autoform: {
        type: "hidden"
    }
};
burritoSchema.userId = {
    type: String,
    label: "UserId",
    autoValue: function() {
        return this.userId;
    },
    optional: true,
    autoform: {
        type: "hidden"
    }
};
// #endregion

Schemas.BurritoSchema = new SimpleSchema(burritoSchema);
Burritos.attachSchema(Schemas.BurritoSchema);
