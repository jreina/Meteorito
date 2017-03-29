Meteor.methods({
    'burrito.create': function(doc) {
        Burritos.insert(doc);
    }
});