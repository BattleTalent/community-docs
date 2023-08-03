---
title: Event - OnSceneEnter
---

Call a function when entering a scene.

## Example

```lua
local OnEnter = function()
    print("I entered a scene")
end

CL.CoreEntry.EnterGameStateEvent("+", OnEnter) 
```

## User Variables

No user variables.
