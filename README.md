## Running Project

To run project, run the following command

```bash
  docker-compose up --build
```

## Running Tests

To run tests, run the following command

```bash
  cd node-server
  npm run test
```

## API Reference (For node client [PORT:3000])

#### Get

```http
  GET /
```

## API Reference (For node server [PORT:8000])

#### Get id

```http
  GET /id
```

#### Get all user

```http
  GET /user
```

#### returns the user details list from DB

#### Post user detail

```http
  POST /user
```

#### add the user details to the DB

## API Reference (For python server [PORT:5000])

#### Get tone

```http
  GET /tone
```
