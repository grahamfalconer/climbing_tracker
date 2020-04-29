it('Has a title', function(){
    let goal = new Goal("Tackling the tough one");
    wilson.isEqual(goal.title, "Tackling the tough one")
})
it('Has a description', function(){
    let goal= new Goal("Tackling the tough one", "My new shoes should help me");
    wilson.isEqual(goal.description, "My new shoes should help me")
})

