FlowRouter.route('/', {
    name: 'home',
    action: function(){
        BlazeLayout.render('MainLayout', { main: 'NewOrder'});
    }
});

// ~/orders
FlowRouter.route('/orders', {
    name: 'orders',
    action: () => {
        BlazeLayout.render('MainLayout', { main: 'Orders' });
    }
});
