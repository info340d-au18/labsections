// most of the important html you need to know
//
// <body class="container">
//     <div id="scroller">
//         <input id="range" default="3">
//     </div>
//     <div id="app"></div>
//     <script src="js/index.js"></script>
// </body> 

const apiEndpoint = `https://jsonplaceholder.typicode.com/posts`

let state = {
    posts: [],
    postMax: $('#range').attr('default')
}

$('#range').on('change', (e) => {
    state.postMax = e.target.value;
    generatePosts();
})

const generateSinglePost = (data) => {
    // example of the `data` object
    // 
    // {
    //      userId: 123,
    //      id: 1,
    //      title: 'abcd',
    //      body: 'a ton of text in a large paragraph'
    // }
    //
    return $(`<div>
        <div style="border: 1px solid black; margin: 10px; padding: 10px; border-radius: 10px;">
            <div style="color: red;">
                UserId: ${data.userId}
                <span style="margin-left: 50px">post id: ${data.id}</span>
            </div>
            <div style="font-size: 20px; font-weight: bold">
                ${data.title}
            </div>
            <div>
                ${data.body}
            </div>
        </div>
    </div>`)
}

const generatePosts = () => {
    $('#app').empty();
    state.posts.forEach((d, i) => {
        if (i < state.postMax) {
            let post = generateSinglePost(d)
            $('#app').append(post)
        }
    })
}

const fetchPosts = () => {
    fetch(apiEndpoint)
        .then(d => d.json())
        .then(d => {
            state.posts = d;
            generatePosts();
        })
        .catch(e => console.log(e));
}

// On the very first run, fetch the posts
fetchPosts();