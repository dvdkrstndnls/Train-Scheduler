# Train-Scheduler
Train Schedule App for Train Company Route Administrator

## Deployed at:
https://dvdkrstndnls.github.io/Train-Scheduler/

## My Portfolio
https://dvdkrstndnls.github.io/Portfolio/

## Tools Used
Firebase, HTML, CSS, Bootstrap, Javascript, jQuery


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Your own Firebase credentials
```

### Installing

After you fork the repo, you'll need to set up your own firebase account:

https://firebase.google.com/docs/web/setup

You'll want to replace my Firebase credentials (in main.js) with your own:

```
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDxA9tnWsZfl75Ms-GNgNYcHN78W9rm6Hk",
    authDomain: "train-schedule-5efe9.firebaseapp.com",
    databaseURL: "https://train-schedule-5efe9.firebaseio.com",
    projectId: "train-schedule-5efe9",
    storageBucket: "",
    messagingSenderId: "71267407443"
  };
  firebase.initializeApp(config);
```

## Deployment

Since all the backend is handled by firebase you'll not need any other backend. Thus a simple deployment could just use [GitHubPages](https://pages.github.com/)


