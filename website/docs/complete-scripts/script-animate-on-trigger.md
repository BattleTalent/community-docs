---
title: AnimateOnTriggerScript
---

Toggles an animation on pressing the trigger button.

## Code

```lua
local table = {
    isOpen = false,
    shootInterval = 0.1,
}

function table:UpdateSkill()
	local st = self.shootTime or 0
	local ct = UE.Time.time
	if ct - st < self.shootInterval then
		return
	end	
    self:ToggleAnimation()
end

function table:ToggleAnimation()

    if (self.isOpen) then
        self.isOpen = self.isOpen == false;
        self.animator:Play("Off");
        return
    end

    self.isOpen = self.isOpen == false;
    self.animator:Play("On");
end

return Class(nil,nil,table)
```

## Component

![Component](/img/script-animate-on-trigger1.png)

## AnimationController

![Component](/img/script-animate-on-trigger2.png)
