---
title: StabbableObject
---

Adds the "stabbable" component to a rigidbody to make it stabbable & climbable.

## Code

```lua
local table = {}

function table:Awake()
    self.host.gameObject:AddComponent(typeof(CL.StabableObj))
end

return Class(nil,nil,table)
```

## Component

Use this script with `LuaBehaviour`. No variables required.
