---
title: TeleportOnExplodeScript
---

Teleports player to location of exploding spell.

## Code

```lua
local flyEx = {
}

function flyEx:FlyStart(vel)
    if self.explodeRange > 0 then
        CL.EffectMgr.Instance:PlayEffect(self.explodeEffect, self.trans.position, self.trans.rotation)
        
        local player = CL.InteractCharacter.PlayerInstance
        if player == nil then
            return
        end
        player:Transport(self.trans.position)
    end
end


return Class(nil, nil, flyEx)
```

## Component

![Component](/img/script-teleport-on-explode.png)
