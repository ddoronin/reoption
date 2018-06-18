# reoption
_Rething Options in React..._

## Quick example

Find id of anything, if no results return null or undefined.
```tsx
findId: () => number;
```

To print the result in JSX usually you would type:

```tsx
{ findId() && <p>The id is "{findId()}"</p> }
{ !findId() && <p>Not found</p> }
```
Problems of this solution:
1. Result `0` will be interpreted as `false`. It can be solved by adding more logic around, eventually creating helper methods.

2. Extra calls of `findId()` method. It can be solved by caching the returned value. One more variable.

3. Looks hucky from the very beginning.

4. Cannot be used as a reusable code snippet (mostly because of related helper functions from point #1 and cache #2).

With `Match` from `reoption` this code looks clean and smart. Check it out!
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