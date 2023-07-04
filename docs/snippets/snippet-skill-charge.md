---
title: Skill - Charge
---

A skill that will activate after holding down the trigger button for a couple of seconds.

## Example

```lua
local table = {}

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
	print("Instant skill triggered!")
end

function table:OnChargeRelease()
	print("Charge skill triggered!")
end

return Class(nil,nil,table)
```

## User Variables

| Component   | variable    | optional    |
| ----------- | ----------- | ----------- |
| int   | `self.shootInterval` | yes |
| int   | `self.shootTime` | yes |

## FAQ

### Where do I add this script?

`UpdateSkill` & `OnChargeRelease` are functions that can be called when adding a luascript to the `InteractTriggerX` component.

### How do I adjust the charge time?

Edit the `Skill charge End Time` in the `InteractTriggerX` component.
