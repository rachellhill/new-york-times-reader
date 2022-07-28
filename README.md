# New York Times Top Stories

New York Times Reader was built using the [NY Times Top Stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview) that features live news and a multitude of categories to read recent articles by the journalists of The New York Times. 

![giphy](./src/assets/nytimes.gif)

## Author 

[Rachel Hill](https://github.com/rachellhill)

## Endpoints 

Below are the endpoints to consume for this API:

`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=yourkey
https://api.nytimes.com/svc/topstories/v2/home.json?api-key=yourkey
https://api.nytimes.com/svc/topstories/v2/science.json?api-key=yourkey
https://api.nytimes.com/svc/topstories/v2/us.json?api-key=yourkey
https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey`

This application consumes each of these endpoints to offer a wide range of articles for a user. 

## Project Management 
- Spec can be found [here](https://mod4.turing.edu/projects/take_home/take_home_fe)
- Github project board can be found [here](https://github.com/users/rachellhill/projects/1)
- Figma Wirefram can be found [here](https://www.figma.com/file/qOPomKm8aDLsj6yTOwmiyM/NYT-News-Reader?node-id=0%3A1)

## Technologies 
- React 
- React router 
- HTML 
- CSS 

## Installation 
- Clone down this repo in your command line 
- Run `cd new-york-times-reader` 
- Run `npm i` to install dependencies
- Run `npm start` to view the application in action 

## Features 
- Filter by section to view articles within a particular genre
- Error handling 

## Future Additions 
- Add a search functionality to search articles 
- Implement responsive design 
- Ensure Lighthouse Accessibility 100% 
