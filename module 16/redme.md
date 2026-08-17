হ্যাঁ, এই কথাটার সহজ অর্থ হলো:

ES5-এ asynchronous কাজ বা একটার পর একটা কাজ করতে গেলে অনেক সময় nested callbacks ব্যবহার করতে হতো। এর ফলে code অনেক বেশি ভেতরে ভেতরে চলে যেত এবং পড়তে, বুঝতে ও maintain করতে কঠিন হতো।

Example:
getUser(function(user) {
    getPosts(user, function(posts) {
        getComments(posts, function(comments) {
            console.log(comments);
        });
    });
});

এখানে একটি callback-এর ভিতরে আরেকটি callback, তার ভিতরে আরেকটি callback। এটাকেই অনেক সময় Callback Hell বলা হয়।

ES6+ এ Promise এবং পরে async/await আসার ফলে code অনেক পরিষ্কার হয়েছে:

async function getData() {
    const user = await getUser();
    const posts = await getPosts(user);
    const comments = await getComments(posts);


    console.log(comments);
}

মূল কথা:
ES5 → বেশি nested callbacks → code difficult to read/maintain
Modern JavaScript → Promise / async-await → cleaner code