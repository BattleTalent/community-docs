---
title: Changing parents
---

Just an example how you would move an object under a different transform.

## Example

```lua
self.ourObject.tranform.parent = self.newParent.transform;
```

## User Variables

| Component   | variable    |
| ----------- | ----------- |
| GameObject   | `self.ourObject` |
| GameObject   | `self.newParent` |

## FAQ

### Can I detach from the parent?

Just change the value to nil.  

```lua
self.ourObject.tranform.parent = nil;
```
