﻿
# Entertainment App

The Entertainment App allows users to search for their preferred movies or TV series and provides the added functionality of bookmarking their favorites. 


## Demo

https://entertainment-app-neon.vercel.app

- Backend API Url

https://entertainment-app-server-rosy.vercel.app/


## Acknowledgements

I sincerely thank AlmaBetter for their guidance and support throughout my Full Stack Web Development journey. This project reflects the practical skills and knowledge gained through their program.


## Features
- User Authentication: Secure signup and login using JWT authentication.

- Home Page: Displays trending and recommended movies/TV series in a responsive grid layout.

- Movies Page: Browse and search through a wide variety of movies.

- TV Series Page: Explore and filter TV shows by genre or title.

- Bookmarks: Add or remove favorite movies/TV series for quick access.

- Search Functionality: Global search to find specific movies or TV shows.


- Backend API Integration: Node.js + Express server connected to MongoDB Atlas with data fetched via Rapid API.

- Redux Integration: Efficient state management for authentication, bookmarks, and search.


## Project Structurre

```
├── public
├── src
│   ├── components  
│   ├── Pages        
│   │   ├── bookmark    
│   │   ├── home   
│   │   ├── login    
│   │   ├── movieDetails   
│   │   ├── movies   
│   │   ├── series   
│   │   ├── seriesDetails
│   │   └── Signup 
│   ├── redux
|   |   ├── slices  
|   |   |      ├── authSlice.js   
│   │   |      ├── bookmarkSlice.js
│   │   |      ├── moviesSlice.js
│   │   |      ├── searchMovieSlice.js   
│   │   |      ├── searchSeriesSlice.js   
│   │   |      └── seriesSlice.js 
│   │   └── Store.js     
│   ├── app.js
│   └── main.js
├── index.html
└── package.json
```

## API Reference

#### Register User

```http
  POST /api/createuser
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email` `password`      | `string` | **Required**. Email and password to register user |

#### Login User

```http
  POST /api/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email` `password`      | `string` | **Required**. Email and password to login user |

#### Get all movies

```http
  GET /api/getallmovies
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  | `string` | **Required**. Your API key |

#### Get movie detials

```http
  GET /api/movie/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Get All Series

```http
  GET /api/getseries
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  | `string` | **Required**. Your API key |

#### Get movie detials

```http
  GET /api/series/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Get All Series

```http
  GET /api/getseries
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  | `string` | **Required**. Your API key |



#### Get All Bookmakrs

```http
  GET /api/bookatks
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  | `string` | **Required**. Your API key |


#### Add Bookmark

```http
  POST /api/bookmark
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  | `string` | **Required**. Your API key |


#### Delete Bookmark

```http
  Delete /api/bookmark/${movieid}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  | `string` | **Required**. Your API key |






## Environment Variables

To run this project, you will need to add the following environment variables to your .env file 

- Client Side

`VITE_SERVER`

- Server Side

`MONGO_URL`
`JWT_SECRET`
`CLIENT_SERVER`



## Authors

- [@Karan Pal](https://www.linkedin.com/in/karan-pal-developer/)

