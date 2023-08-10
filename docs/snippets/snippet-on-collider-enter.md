---
title: OnColliderEnter
---

Do things when an object with a rigidBody and collider **collides** with another collider.

## Example

```lua
local table = {}

function table:OnColliderEnter(collision)
    print("I collided!")
end

return Class(nil,nil,table)
```

## User Variables

No user variables.

## FAQ

### Where do I add this script?

`OnColliderEnter` is a function that can be called from all luascripts as long as the object has a `rigidBody` and a `collider` that is NOT set to `OnTrigger`.

### Any way to see which object I collided into?

Yes, just call `print(collision.gameObject.name)` to get the name of the object you collided with.

### Any way to only trigger when I hit something really hard?

Yes, just return when the `sqrMagnitude` is below a certain value.

```lua
local table = {
    minimumSqrMagnitute = 2,
}

function table:OnColliderEnter(collision)
    if collision.relativeVelocity.sqrMagnitude < self.minimumSqrMagnitute then
        return
    end

    print("I collided really hard!")
end

return Class(nil,nil,table)
```
