# MongoDB Practice Task

### 1. Find all documents in the collection where the age is greater than 30, and only return the name and email fields.

### Answer

```javascript
db.data.find(
  { age: { $gt: 30 } },
  {
    name: 1,
    email: 1,
  },
);
```

### 2. Find documents where the favorite color is either "Maroon" or "Blue".

### Answer

```javascript
db.data.find({
  favoriteColor: { $in: ["Maroon", "Blue"] },
});
```

### 3. Find all documents where the skill is an empty array.

### Answer

```javascript
db.data.find({
  skill: { $size: 0 },
});
```

### 4. Find documents where the person has skills in both "JavaScript" and "Java".

### Answer

```javascript
db.data.find({
  "skills.name": {
    $all: ["JavaScript", "Java"],
  },
});
```

### 5. Add a new skill to the skills array for the document with the email "amccurry3@cnet.com". The skill is {"name": "Python","level": "Beginner","isLearning": true}
Note: At first, you will have to insert the given email then add the skill
mentioned above

### Answer

```
db.data.find(
  { age: { $gt: 30 } },
  {
    _id: 0,
    name: 1,
    email: 1
  }
);
```

### 2. Find documents where the favorite color is either "Maroon" or "Blue."

### Answer

```
db.data.find(
  { age: { $gt: 30 } },
  {
    _id: 0,
    name: 1,
    email: 1
  }
);
```

### 2. Find documents where the favorite color is either "Maroon" or "Blue."

### Answer

```
db.data.find(
  { age: { $gt: 30 } },
  {
    _id: 0,
    name: 1,
    email: 1
  }
);
```
