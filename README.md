# express-pug-tailwind-boilerplate

An [Express.js](https://expressjs.com) application boilerplate using [Pug](https://pugjs.org) as the template engine and using [Tailwind](https://tailwindcss.com) for styles.

## Using the boilerplate
Clone the repo, install dependencies and start the server.
```
git clone https://github.com/rajasegar/express-pug-tailwind-boilerplate
cd
npm install
npm start
```


## Development mode
Tailwind CSS will not be purged so that you can experiment with the different styles during development.

```
npm run dev
```


## Production
Express will start in production mode and the Tailwind CSS will be purged and minified.
```
npm start
```
