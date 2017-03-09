Meteor.subscribe('orders');
Template.Orders.helpers({
    orders: () => Orders.find(),
    incrementByOne: (a) => a + 1
});