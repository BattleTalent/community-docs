---
title: SpawnMerchant
---

Adds a **merchant** to the map.

## Code
```lua
local table = {}

function table:Awake()
    self:SpawnMerchant()
end

function table:SpawnMerchant()
    local obj = CL.ResourceMgr.Instantiate("SceneObj/DungeonShop", self.trans.position, self.trans.rotation)
    if IsNullOrDestroyed(obj) then
        return
    end

    local shop = obj:GetComponent(typeof(CL.DungeonShop))
    shop:RefleshConfig()
end

return Class(nil, nil, table)
```

## Component

Use this script with `LuaBehaviour`. No variables required.
