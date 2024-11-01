---
title: OnTriggerEnter
---

Do things when an object with a rigidBody and collider **enters** another collider.

## Example

```lua
local table = {}

function table:OnTriggerEnter(collider)
    print("I entered a collider!")
end

return Class(nil,nil,table)
```

## User Variables

No user variables.

## FAQ

### Where do I add this script?

`OnTriggerEnter` is a function that can be called from all luascripts as long as the object has a `rigidBody` and a `collider` that is **set** to `OnTrigger`.

### Any way to see which object collider I entered into?

Yes, just call `print(collider.name)` to get the name of the object you collided with.

### Any way to get the gameObject of the collider I entered into?

Yes, just call `print(collider.gameObject.name)` to get the name of the object you collided with.
