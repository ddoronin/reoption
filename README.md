# Reoption

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ddoronin/reoption/blob/master/LICENSE) 
[![npm version](https://img.shields.io/npm/v/reoption.svg?style=flat)](https://www.npmjs.com/package/reoption) 

```
npm install reoption
```

## Show me

Given a function that should find resource and return numeric id. If no results found it should return `null` or `undefined`.
```tsx
findId: () => number;
```

Let's print results in JSX as usual:

```tsx
{ findId() && <p>The id is "{findId()}"</p> }
{ !findId() && <p>Not found</p> }
```
This solution is extrmely popular in React world, but here is a list of problems:
1. Result `0` will be interpreted as `false`. It can be solved by adding more logic around, ending up with helper methods.

2. Extra calls of the `findId()` method. Can be solved by caching the returned value. That mean just adding one more variable.

3. Looks hucky from the very beginning. This is something personal :)

4. NOT a reusable code snippet mostly because of related helper functions from point #1 and cache #2.

With `Match` from `reoption` the same code will look cleaner and smarter. Check it out!
```tsx
import { Match } from 'reoption';
```
```tsx
<Match 
    option={findId}
    some={(id: number) => <p>The id is "{id}"</p>}
    none={<p>Not found</p>}
/>
```