---
title: ParticlesOnTriggerScript
---

Enable particles when holding down the trigger.

## Code

```lua
local table = {}

function table:OpenSkill(attach)
    self.particles:Play()
end

function table:CloseSkill()
    self.particles:Stop()
end

return Class(nil,nil,table)
```

## Component

![Component](/img/script-particles-on-trigger.png)
