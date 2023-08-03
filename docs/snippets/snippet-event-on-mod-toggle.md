---
title: Event - OnModToggle
---

Call a function when a mod is enabled or disabled.

## Example

```lua
local function OnModToggle(isEnable)
    if isEnable then
        print("OnEnable")
    else
        print("OnDisable")
    end
end

CL.ModManager.SaveLuaEnableFunc(OnModToggle) 
```

## User Variables

No user variables.
