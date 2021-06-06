

const postingSection = document.querySelector('.reddit-postings');


function addPosts (data){



    // pieces for each card //
    const listOfPosts = data.data.children;
    console.log(listOfPosts);

        // forEach Loop //

        listOfPosts.forEach(data => {
            // console.log(data);
            // console.log(data.data.title);
              // pieces for each card //
            const postContainer = document.createElement('div');
            const postName = document.createElement('h3');
            const userName = document.createElement('p');
            const postImage = document.createElement('img');
            const postUrl = document.createElement('a');


            // container //
            postContainer.setAttribute('class','post-container');

            // title //
            postName.innerText = data.data.title;
            postName.setAttribute('class', 'post-title');
            postContainer.appendChild(postName);

            // user ID who posted //

            userName.innerText = `Posted by: ${data.data.author}`;
            userName.setAttribute('class', 'user-name');
            postContainer.appendChild(userName);


            // img //
            postImage.setAttribute('src', data.data.thumbnail);
            postImage.setAttribute('class', 'post-image')
            postContainer.appendChild(postImage);

            // url //
            postUrl.setAttribute('href', data.data.url);
            postUrl.innerText = data.data.url;
            postUrl.setAttribute('class', 'post-url');
            postContainer.appendChild(postUrl);


            postingSection.appendChild(postContainer);
            
    



        })
    
}



fetch("https://www.reddit.com/r/aww/.json").then((response) => {
    return response.json();
    // loading //
}).then((data) => {
    console.log(data);
    console.log(data.data.children);
    addPosts(data);

});

// note, 3 things to get//
// 1. title
// 2. name
// 3. preview