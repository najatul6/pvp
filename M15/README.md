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
