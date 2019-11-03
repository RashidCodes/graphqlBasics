## Introduction to Graphql 
In this mini-project, I build a very simple react application that displays a number of books on buttons. Clicking on a book displays information about the book in a sidebar.


### Tools
- React.js
- Apollo 
- Express.js
- Graphql
- Express-grapqhl


### Overview
- React.js is used to create the frontend of the application.
- The backend is created with express and express-graphql.
- The frontend makes requests to the supercharged /graphql endpoint using apollo.
- The server runs on different uri, so the cors middleware is used to handle cross origin resource sharing.


### Thoughts
I think graphql is much better than the REST architecture because of its simplicity. Sure it does require a little bit of setting up, but I believe it's much more efficient with queries compared to REST, because you are able to query complex data with as many as one request to the Graphql server. Apollo also has some caching capabilities which significantly curtails the latency you get REST. 
