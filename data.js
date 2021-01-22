var data = 
    {
        posts: [
            { id: 1, 
            title: 'json-server', 
            author: 'typicode' },

            { id: 2, 
                title: 'json-server', 
                author: 'typicode' },

            { id: 3, 
                title: 'json-server', 
                author: 'typicode' },

            { id: 4, 
                title: 'json-server', 
                author: 'typicode' },

            { id: 5, 
            title: 'json-server', 
            author: 'typicode' },

            { id: 6, 
                title: 'json-server', 
                author: 'typicode' },
                
            { id: 7, 
                title: 'json-server', 
                author: 'typicode' },

            { id: 8, 
                title: 'json-server', 
                author: 'typicode' },

        ],
        comments: [
          { id: 1, 
            body: 'some comment', 
            postId: 1 }
        ],
        profile: { name: 'typicode' }
    }

    console.log(JSON.stringify(data));


    //{"posts":[{"id":1,"title":"json-server","author":"typicode"},{"id":2,"title":"json-server","author":"typicode"},{"id":3,"title":"json-server","author":"typicode"},{"id":4,"title":"json-server","author":"typicode"},{"id":5,"title":"json-server","author":"typicode"},{"id":6,"title":"json-server","author":"typicode"},{"id":7,"title":"json-server","author":"typicode"},{"id":8,"title":"json-server","author":"typicode"}],"comments":[{"id":1,"body":"some comment","postId":1}],"profile":{"name":"typicode"}}