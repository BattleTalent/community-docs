---
title: IncreasedDamageScript
---

Increased melee damage when holding down the trigger.

## Code

```lua
local table = {}

function table:Awake()
    self.fallbackDamage = self.ragdollHitInfo.hitInfo.damageMlp;
end

function table:OpenSkill(attach)
    self.ragdollHitInfo.hitInfo.damageMlp = self.damage;
end

function table:CloseSkill()
    self.ragdollHitInfo.hitInfo.damageMlp = self.fallbackDamage;
end

return Class(nil,nil,table)
```

## Component

![Component](/img/script-increased-damage1.png)
