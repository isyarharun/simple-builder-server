# simple-builder-server

This is a server for https://github.com/isyarharun/simple-builder. Build using NodeJS, express, and mongodb. The project is generated from scratch. You can change the mongodb connection in src\config\mongo.config.js

## Project setup
```
1. install all dependencies please run "yarn install"
2. run in local run "yarn run dev"
3. port for the backend is 3003

```

## API get form response by form id
```
GET form/response/:id

```

## API get form form id
```
GET form/:id

```

## API to save generated form
```
POST form/save

```

## API to submit generated form
```
POST form/submit

```

## TODO next
```
1. API to generate list of forms
2. add validation for POST API
3. move setting to env file

```
