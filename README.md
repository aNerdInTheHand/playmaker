# playmaker
Generate fictional, copyright resistant, possibly comically-named sports players

### Return format
Players are returned in the following format:

```javascript
{
  name: {
    firstName: '', // string
    surname: '' // string
  },
  position: '', // string
  squadNumber: 0, // number
  attributes: { // all numbers, 0-99
    mental: [{
      ...
    }],
    physical: [{
      ...
    }],
    technical: [{
      ...
    }],
    attacking: [{
      ...
    }],
    defending: [{
      ...
    }],
    goalkeeping: [{
      ...
    }]
  },
  rating: 0 // number, 0-99
}
```
