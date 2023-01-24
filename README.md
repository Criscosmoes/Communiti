
## What is Communiti?

Communiti is a place where people can come together and discuss their favorite topics, interests, and passions. 

## Non-functional requirements

I initially wanted to create an MVP of this application based on these requirements: 

1. A user can see communities

2. A user can create a community

3. A user can comment and engage in conversation with another user

## System Design of Communiti

This is a very rudimentary design of an application. I plan to scale in the sense of hooking up a CDN to S3 to lower latency, 
caching to lower latency, and maybe some database work like partioning or replication for fun.

![image](https://user-images.githubusercontent.com/54221993/214380481-32879da2-4574-451e-9ae7-845736b0c747.png)


## What is Communiti built on?

Communiti is built on React.js/Next.js on the Front-end, Node.js on the API, and PostgreSQL for database. Also good to note that
Front-end is hosted on Vercel, and API/DB on # AWS. 


## Database design and API design

I currently have a couple tables. Communities, Posts, Comments, Users, User_Communities(keep track of followers)



