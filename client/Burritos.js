Meteor.subscribe('burritos');
Template.Burritos.helpers({
    burritos: () => Burritos.find(),
    // Take the object keys that begin with a capital letter and turn them into an array of strings.
    flatten: (obj) => _(Object.keys(obj)).filter(i => obj[i] && /^[A-Z]/.test(i)).map(i => i),
    incrementByOne: (a) => a + 1,
    isStranger: (user) => user === 'Stranger McDanger',
    asLocal: (time) => typeof time === 'undefined'? '': time.toLocaleString(),
    icon: (i) => i === 'Jalapeño'?'glyphicon glyphicon-fire':''
});
