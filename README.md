# sei project 3 - Pokézon

## Index
* [Overview](#overview)
* [Installation](#installation)
* [Technologies Used](#technologies-used)
* [Notable Bugs](#notable-bugs)
* [Conclusion](#conclusion)
	* [Wins and Challenges](#wins-and-challenges)
	* [Some Learnings](#some-learnings)


## Overview 

For my third project in General Assembly's Software Engineering course the task was to, in groups of 3 and in a timeframe of 9 days, develop a full-stack website, making our own back-end using a mongo database and express to handle the data and React for the front-end (using the MERN stack)

For this project we were given green light to choose what we wanted to build, in our case we went for an e-commerce website which after lots of thought and discussing with the team we chose to clone Amazon but Pokémon-themed.

This project was half-way into the course and was the biggest one in terms of time and work, a lot of work was put into it and its still being updated by all the members involved in order to improve some features and fix some details.


## Installation

First we need to download the repository into our own machine for which we have to input the following line into our terminal or command line:
```bash 
git clone https://github.com/DanielFDA/sei-project-3.git
```

then we need to make sure [mongoDB](https://www.mongodb.com/try/download/community) is installed and running, for which we run the following command 
```bash 
mongod --dbpath ~/data/db
```
then you'll need to install dependencies in the command line or terminal, making sure you're inside the root of the project. The address on the terminal should look something like this
```bash 
~/GA/development/PROJECTS/sei-project-3
``` 
to install back-end dependencies, in the root of the project (folder) run `yarn`

then to install front-end dependencies we'll have to change folder and install for which we run
```bash 
cd client && yarn
``` 
if it's our first time runnig the project on this computer we'll have to seed the database, to go back to the root of the project type `..` in the terminal or command line and make sure theres nothing after `sei-project-3`, then we run the following
```bash 
yarn seed
``` 
Now we are ready to run the project, for that we type the next line into the terminal or command line
```bash 
yarn dev-fullstack
``` 


## Technologies Used
* CSS
* JavaScript (ES6)
* HTML5
* Node
* Express
* MongoDB
* React
* Insomnia
* Trello
* Cloudinary
* GitHub
* Git
* Heroku
* Google Sheets
* VSCode
## Conclusion

### Wins and Challenges

The biggest win for me was learning how to work as a team, not only communicating efficiently, being on the same page and sharing a common goal but also learning to use git commands and getting more used to sharing thoughts about ongoing work and to-be added features.

The biggest challenges I encountered were mainly code related, stuff that I wanted to implement but had to research and try to do it and sometimes having to ask for help because time was of the essence, which helped me learn a lot of new stuff and kept us as a cohesive team. 


### Some Learnings

This being the biggest project I worked on during the course meant that it's the one where I learned the most about the front-end side of things which is where I spent the majority of my time.

Being up to date with our daily standups and meeting played a big role in order for me to be aware of how things were working in the back-end side of things (in case they changed from one day to another) and made everything go smoother coding wise, also teached me a lot about how and what to communicate in order for the best approach to be taken about a certain matter.

Since this was my first time working on a full-stack app the beggining was very tough, having to set up everything and being able to run it in all of our computers and update with regular commits so we could see the improvements of everyone involved was a huge learning process that was well worth it in the end because we all felt very comfortable using git at the end of it.

All the process that took part in this project was very unique and special, we were very ambitious with the amount of functionality we wanted for the website but at the same time everyone was working very hard to achieve everything that we set up to do, due to the amount of work some of the features weren't completely polished and had to be left out of the deployed website but I feel like my teammates and I are very happy about the outcome of this project and I'm certainly very grateful of being part of it, it was a tiring but very enjoyable experience.


[Index](#index)