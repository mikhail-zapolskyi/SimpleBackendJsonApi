import fetch from 'node-fetch';

export const getPosts = async (req, res, next) => {
     const query = req.query;
    
     // ARRAY OF SORT ITEMS AVAILABLE AND VALIDATION;
     const sort = [ 'id', 'reads', 'likes', 'popularity'];
     const isIncludedSortBy = sort.includes(query.sortBy);

     // VALIDATIONS
     if ( !query.tags ) res.status(400).json({ error: "Tags parameter is required" });
     if ( query.sortBy === undefined ) {
          false
     } else {
          if ( !isIncludedSortBy ) res.status(400).json({ error: "sortBy parameter is invalid" })
     };
     
     try {
          const allPosts = await Promise.all(
               query.tags.split(',').map(item => fetch(`https://api.hatchways.io/assessment/solution/posts?tags=${ item }`)
                    .then(res => res.json()))
          );
          
          const filteredPosts = allPosts
               .map(arr => arr.posts // MAP THROUGH THE ARRAYS OF POSTS
                    .map(item => item)) // MAP THROUGH THE POSTS ARRAYS
                         .flat() // COMBINE ARAYS
                              .reduce((items, item) => { // REMOVE DUPLICATES
                                   const x = items.find(newItem => newItem.id === item.id);
                                   if (!x) {
                                        return items.concat([item]);
                                   } else {
                                        return items;
                                   }
                              },[]).sort((a, b) => {
                                        if( !query.direction || query.direction === 'asc' ){
                                             return a[`${ query.sortBy }`] - b[`${ query.sortBy }`]
                                        } else if ( query.direction === 'desc' ){
                                             return b[`${ query.sortBy }`] - a[`${ query.sortBy }`]
                                        } else if ( query.direction !== 'desc' || query.direction !== 'asc') {
                                             res.status(400).json({ error: 'direction parameter is invalid' })    
                                        }
                                   });
          res.status(200).json(filteredPosts);
     } catch(error) {
          res.status(400).json({ error: error.message });
     }
};