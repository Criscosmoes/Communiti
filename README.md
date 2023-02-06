
## What is Communiti?

Communiti is a place where people can come together and discuss their favorite topics, interests, and passions. 

## Functional requirements

I initially wanted to create an MVP of this application based on these requirements: 

1. A user can see communities

2. A user can create a community

3. A user can comment and engage in conversation with another user

## System Design of Communiti

This is a very rudimentary design of an application. I plan to scale in the sense of hooking up a CDN to S3 to lower latency, 
caching to lower latency, and maybe some database work like partioning or replication for fun.

![image](https://user-images.githubusercontent.com/54221993/214380481-32879da2-4574-451e-9ae7-845736b0c747.png)


## What is Communiti built on?

Communiti is built on React.js/Next.js/Typescript on the Front-end, Node.js on the API, and PostgreSQL for database. Also good to note that
Front-end is hosted on Vercel, and API/DB on # AWS. 


## Database design

I currently have a couple tables. Communities, Posts, Comments, Users, User_Communities (keep track of following)

# Communities
![image](https://user-images.githubusercontent.com/54221993/214385398-0a0bb392-7981-45e1-8a3b-e7e9377f32c0.png)

# User
![image](https://user-images.githubusercontent.com/54221993/214385853-79ef06c0-af75-42c4-a2bd-5a8d5c0d5d92.png)

# User Communities 
![image](https://user-images.githubusercontent.com/54221993/214385654-0846de81-ffbd-462d-beeb-7d95364e454a.png)

# Posts
![image](https://user-images.githubusercontent.com/54221993/214386113-67e6f96b-69c3-46b4-ad83-097c664ef2aa.png)

# Comments
![image](https://user-images.githubusercontent.com/54221993/214386255-7e950740-2731-46fe-b574-5e83fb373e13.png)


## API design

As you can assume, I created typical CRUD operations on each DB Table.

# Communities, User, User Communities, Posts, Comments

GET, POST, PATCH, DELETE operations on all tables.

## Future of Communiti: 

I plan to keep adding new features consistenly throughout this project. Whether it be to the front-end or back-end. Thanks for reading.
