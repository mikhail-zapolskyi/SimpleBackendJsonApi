import fetch from 'node-fetch';

export const getPosts = async (req, res, next) => {
     const { tags, sortBy='id', direction='asc' } = req.query;
     

     try {
          const fetchPosts = await Promise.all(
               tags
                    .split(',')
                    .map((tag) =>
                         fetch(
                              `https://api.hatchways.io/assessment/solution/posts?tags=${tag}`
                         ).then((res) => res.json())
                    )
          );

          const combinedPosts = fetchPosts
               .map((arr) => arr.posts.map((post) => post))
               .flat();

          const removeDuplicates = combinedPosts.reduce((posts, post) => {
               const x = posts.find((newPost) => newPost.id === post.id);
               if (!x) {
                    return posts.concat([post]);
               } else {
                    return posts;
               }
          }, []);

          const readySortedPosts = removeDuplicates.sort((a, b) => {
               if (!direction || direction === 'asc') {
                    return a[`${sortBy}`] - b[`${sortBy}`];
               } else if (direction === 'desc') {
                    return b[`${sortBy}`] - a[`${sortBy}`];
               }
          });

          res.status(200).json({ posts: readySortedPosts });
     } catch (error) {
          res.status(400).json({ error: error.message });
     }
};
