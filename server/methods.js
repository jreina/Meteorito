Meteor.methods({
    'order.create': (doc) => {
        Orders.insert(doc);
    }
});