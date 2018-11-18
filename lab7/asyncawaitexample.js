function fetchPosts() {
    fetch(apiEndpoint)
        .then(d => d.json())
        .then(d => {
            state.posts = d;
            generatePosts();
        })
        .catch(e => console.log(e));
}

async function fetchPosts() {
    try {
        let d = await fetch(apiEndpoint);
        let posts = await d.json();
        state.posts = posts;
        generatePosts();
    } catch (e) {
        console.log(e);
    }
}