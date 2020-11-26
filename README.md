# palindrome-game

A palindrome is a word or phrase which reads the same backward or forward.

In the game a user can enter their name and a word/sentence, if the word is a palindrome then a high score
should be recorded, the score being the length of the string.

Endpoints:

```
GET /api/getScores: returns the top 5 scores.
POST /api/submitEntry: returns the points scored for the entry.
```

Rules:

A player can have multiple turns - the score recorded is per turn and not cumulative.
Multiple players can submit the same word

## Factsheet

| **Category**              | **Value**                                 |
| ------------------------- | ---------------------------------------- |
| **Contact**               | https://github.com/cavalost, claudina.avalos@opendeusto.es
| **Language / Framework**  | Node / Express / AngularJS


## Requirements
Node >= 8

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev-start
```

### Compiles and runs the server
```
npm run start
```

### Lints files
```
npm run lint
```

### Run unit tests
```
npm run test
```
