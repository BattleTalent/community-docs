---
title: SlowTimeOnTriggerScript
---

Slows time on pressing the trigger button.

## Code

```lua
local table = {}

function table:Awake()
    self.slowMoLength = 4f
end

function table:UpdateSkill()
    local shootInterval = self.shootInterval or 0.1
    local st = self.shootTime or 0
    local ct = UE.Time.time
    if ct - st < shootInterval then
        return
    end

    self:PullTrigger()
end

function table:PullTrigger()
    local player = CL.InteractCharacter.PlayerInstance
    if player == nil then
        return
    end

    player:SlowMo(self.slowMoLength) 
end

return Class(nil,nil,table)
```

## Component

![Component](/img/script-slow-time-on-trigger.png)
