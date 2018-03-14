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
  positions: [{
    name: '', // e.g. LB, ST, RW, CAM
    proficiency: 0 //number, 0-99
  }], // string
  squadNumber: 0, // number,
  strongFoot: '', // left, right, both
  attributes: { // all numbers, 0-99
    mental: [{
      aggression: 0,
      attitude: 0,
      concentration: 0,
      teamwork: 0
    }],
    physical: [{
      acceleration: 0,
      speed: 0,
      strength: 0
    }],
    technical: [{
      control: 0,
      penalties: 0,
      weakFoot: 0
    }],
    attacking: [{
      shooting: 0,
      volleys: 0
    }],
    defending: [{
      slideTackle: 0,
      standTackle: 0
    }],
    goalkeeping: [{
      command: 0,
      crosses: 0,
      distribution: 0,
      penalties: 0,
      shotStopping: 0
    }]
  },
  rating: 0 // number, 0-99
}
```
