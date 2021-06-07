

const postingSection = document.querySelector('.reddit-postings');


// function addPosts (data){



//     // pieces for each card //
//     const listOfPosts = data.data.children;
//     console.log(listOfPosts);

//         // forEach Loop //

//         listOfPosts.forEach(data => {
//             // console.log(data);
//             // console.log(data.data.title);
//               // pieces for each card //
//             const postContainer = document.createElement('div');
//             const postName = document.createElement('h3');
//             const userName = document.createElement('p');
//             const postImage = document.createElement('img');
//             const postUrl = document.createElement('a');


//             // container //
//             postContainer.setAttribute('class','post-container');

//             // title //
//             postName.innerText = data.data.title;
//             postName.setAttribute('class', 'post-title');
//             postContainer.appendChild(postName);

//             // user ID who posted //

//             userName.innerText = `Posted by: ${data.data.author}`;
//             userName.setAttribute('class', 'user-name');
//             postContainer.appendChild(userName);


//             // img //
//             postImage.setAttribute('src', data.data.thumbnail);
//             postImage.setAttribute('class', 'post-image')
//             postContainer.appendChild(postImage);

//             // url //
//             postUrl.setAttribute('href', data.data.url);
//             postUrl.innerText = data.data.url;
//             postUrl.setAttribute('class', 'post-url');
//             postContainer.appendChild(postUrl);


//             postingSection.appendChild(postContainer);
            
    



//         })
    
// }


function addPosts (data){



    // pieces for each card //
    const listOfPosts = data.data.children;
    console.log(listOfPosts);
    let tenPostsMax = 0;
    let i = 0;
    console.log(tenPostsMax);

        // only 10 loop //
        while (i < 10) {
           let thisPost = listOfPosts[i];


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
            postName.innerText = thisPost.data.title;
            postName.setAttribute('class', 'post-title');
            postContainer.appendChild(postName);

            // user ID who posted //

            userName.innerText = `Posted by: ${thisPost.data.author}`;
            userName.setAttribute('class', 'user-name');
            postContainer.appendChild(userName);


            // img //
            postImage.setAttribute('src', thisPost.data.thumbnail);
            postImage.setAttribute('class', 'post-image')
            postContainer.appendChild(postImage);

            // url //
            postUrl.setAttribute('href', thisPost.data.url);
            postUrl.innerText = thisPost.data.url;
            postUrl.setAttribute('class', 'post-url');
            postContainer.appendChild(postUrl);


            postingSection.appendChild(postContainer);

            tenPostsMax += 1;
            i++;
            console.log(tenPostsMax);

        }
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