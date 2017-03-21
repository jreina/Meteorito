Meteor.subscribe('orders');
Template.Orders.helpers({
    orders: () => Orders.find(),
    incrementByOne: (a) => a + 1,
    isStranger: (user) => user === 'Stranger McDanger',
    asLocal: (time) => typeof time === 'undefined'? '': time.toLocaleString(),
    icon: (i) => i === 'Hot Sauce'?'glyphicon glyphicon-fire':''
});
