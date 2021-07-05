---
title: List all weapons
---

Gets a list of all weapon ids from the game.

## Example

```lua
function listToTable(clrlist)
    local t = {}
    local it = clrlist:GetEnumerator()
    while it:MoveNext() do
      t[#t+1] = it.Current
    end
    return t
end

local weapons = CL.WeaponDataMgr.GetWeaponList();
local list = listToTable(weapons);

for key, val in pairs(list) do
    print(key,val)
end
```

## User Variables

No user variables.
