---
title: Skill - Toggle
---

A skill that will activate when pushing down the trigger button & deactivate when doing it again.

**Remember:** `Instant skill` should be checked in the `InteractTriggerX` component for a skill to be toggleable.

## Example

```lua
local table = {}

function table:Awake()
    self.isOpen = false
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
    if (self.isOpen) then
        self.isOpen = self.isOpen == false;

        print("Toggle skill deactivated!")
        return
    end
    
    self.isOpen = self.isOpen == false;

	print("Toggle skill activated!")
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

### Why is the function called multiple times when I trigger the skill?

Make sure `Instant skill` is **CHECKED** in the `InteractTriggerX` component. 
