---
title: OnGrab
---

Do things when grabbing and ungrabbing an item.

## Example

```lua
local table = {}

function table:OnGrab(a, g)
    if (g) then
        print("grab");
    else
        print("ungrab");
    end
end

return Class(nil,nil,table)
```

## User Variables

No user variables.

## FAQ

### Where do I add this script?

OnGrab is a function that can be called when adding a luascript to the `InteractTriggerX` component.
