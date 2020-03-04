import profileReducer, { addPostCreator, deletePost } from "./profile-reducer";


let state = {
    posts: [
        { id: 1, message: 'Hi!How are you?', likesCount: 7885 },
        { id: 2, message: 'My first post', likesCount: 15808 },
        { id: 3, message: 'My second post', likesCount: 100000 }
    ]
};

it('length posts should be incremented', () => {
    //1.start data  
    let action = addPostCreator('Hello my friend!');
    //2.action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts.length).toBe(4);
});

it('message of new post should be Hello my friend!', () => {
    //1.start data  
    let action = addPostCreator('Hello my friend!');
    //2.action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts[3].message).toBe('Hello my friend!');
});

it('last post should be deleted', () => {
    //1.start data  
    let action = deletePost(1);
    //2.action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts.length).toBe(2);
});

it('last post should not be deleted if id incorrect', () => {
    //1.start data  
    let action = deletePost(1000);
    //2.action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts.length).toBe(3);
});


