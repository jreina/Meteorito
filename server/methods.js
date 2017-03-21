Meteor.methods({
    'order.create': function(doc) {
        Orders.insert(doc);
    }
});