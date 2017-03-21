Template.NewOrder.events({
    'submit #new-order': () => {
        FlowRouter.go('/orders');
    }
})