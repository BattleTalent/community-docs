---
title: Boss NPC Script
---

This script will make your NPC unknockoutable and will give it a boss bar

## Code

```lua

local Restor
eRoleAttr = {
}

function RestoreRoleAttr:OnEnable()
    local fc = self.trans.root:GetComponent(typeof(CL.FullCharacterControl))
    if not IsNullOrDestroyed(fc) then
        self:RestoreHp(fc)
        self:RestoreMp(fc)
    end
end

function RestoreRoleAttr:RestoreHp(fc)
    fc.attr.hp:SetBaseValue(fc.attr.hpMax.BaseValue)
    	fc.motion.disableBalanceFeature = true
	fc.motion.disableMotionFeature = true
	fc.motion.unknockoutable = true
end

function RestoreRoleAttr:RestoreMp(fc)
    fc.attr.mp:SetBaseValue(fc.attr.mpMax.BaseValue)
end

return Class(nil, nil, RestoreRoleAttr)
```
## Where do I put this?

This should be used with a Lua `Behaviour` in the NPC model.