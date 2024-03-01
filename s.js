const blogPost = (Name, Likes, Blog) => {
    let author = Name;
    let likes = Likes;
    let blog = Blog;

    let result = `the blog ${blog} and the author ${author} got ${likes} likes`;
    console.log(result);
};

blogPost('Mario', 1221, '"Mario reviews nihari for the first time"');