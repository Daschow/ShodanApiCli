# ShodanAPICLI

Fetch devices whith open ports.

## Context

We're using [Shodan](https://www.shodan.io/) in order to fetch all of the devices.

## Installation

First you will have to clone this project : 

```git
git clone REMOTE
```

You will have to install all of our dependencies, thanks to [Node.js](nodejs.dev/)

```npm
npm i
```

Then, you need a .env file which will have our personal data like API_KEY from Shodan and your express port.

```txt
PORT=XXXX
API_KEY=YOUR_API_KEY
```