---
title: DashOnTriggerScript
---

Dash on pressing the trigger button.

## Code

```lua
local table = {}

function table:Awake()
    self.ignoreCooldown = true
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

    local leftHand = player.hands[1]
    local rightHand = player.hands[0]

    local leftJoystick = leftHand.inputs[CL.VRTKInputButton.ButtonType.Touchpad]
    local movementInput = leftJoystick.Axis
    local headset = player:GetHeadset()

    local camF = headset.forward
    local camR = headset.right
    camF.y = 0
    camR.y = 0
    camF = camF.normalized
    camR = camR.normalized

    local inputDirectionRelativeToHeadset = (camF * movementInput.y + camR * movementInput.x)

    player:DoDash(inputDirectionRelativeToHeadset, self.ignoreCooldown)
end

return Class(nil,nil,table)
```

## Component

![Component](/img/script-dash-on-trigger.png)

## FAQ

### Any other cool functions I can use from PlayerInstance?

Yes! There is a whole bunch of things you can do! Check [this page](http://jjyy.guru/BTModToolkit/class_cross_link_1_1_interact_character.html) for the complete documentation.
