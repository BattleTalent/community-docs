---
title: Skill - Holdable
---

A skill that will stay activated while holding down the trigger button.

**Remember:** `Instant skill` should not be checked in the `InteractTriggerX` component for a skill to be holdable.

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
	print("Holdable skill triggered!")
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

`UpdateSkill` is a function that can be called when adding a luascript to the `InteractTriggerX` component.

### Why is the function not called multiple times when I hold down the trigger?

Make sure `Instant skill` is **NOT CHECKED** in the `InteractTriggerX` component. 
