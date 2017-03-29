FlowRouter.route('/', {
    name: 'home',
    action: function(){
        BlazeLayout.render('MainLayout', { main: 'NewOrder'});
    }
});

// ~/burritos
FlowRouter.route('/burritos', {
    name: 'burritos',
    action: () => {
        BlazeLayout.render('MainLayout', { main: 'Burritos' });
    }
});
