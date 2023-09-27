---
title: TeleportOnTriggerReleaseScript
---

1. Hold down the trigger. Throw weapon.
2. Throw weapon.
3. Teleports player to location of thrown blade when on releasing the trigger.

## Code

```lua
local table = {}

function table:Awake()
    self.isCurrentlyHolding = false
    self.scheId = null
	self.player = CL.InteractCharacter.PlayerInstance
	local leftHand = self.player.hands[1]
	local rightHand = self.player.hands[0]
	self.leftTrigger = leftHand.inputs[CL.VRTKInputButton.ButtonType.Trigger]
	self.rightTrigger = rightHand.inputs[CL.VRTKInputButton.ButtonType.Trigger]
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

function table:listenForButtonInput()
	if self.buttonHasBeenPressed then
		if self.hand == "left" and self.leftTrigger.IsPressed == false then
			self.buttonHasBeenPressed = false
			print("stopped listening")
			self:Teleport()
			CL.Scheduler.RemoveSchedule(self.scheId)
			return
		end
		if self.hand == "right" and self.rightTrigger.IsPressed == false then		
			self.buttonHasBeenPressed = false
			print("stopped listening")
			self:Teleport()
			CL.Scheduler.RemoveSchedule(self.scheId)
			return
		end
	end

	if self.isCurrentlyHolding then
		if self.hand == "left" and self.leftTrigger.IsPressed then
			self.buttonHasBeenPressed = true
			return
		end
		if self.hand == "right" and self.rightTrigger.IsPressed then		
			self.buttonHasBeenPressed = true
			return
		end
	end
end

function table:Teleport()
	if self.isCurrentlyHolding then
		return
	end

    if self.effectName then
        CL.EffectMgr.Instance:PlayEffect(self.effectName, self.trans.position, UE.Quaternion.identity)
    end

	if self.soundName then
		local volume = 0.5
        local randomPitch = (math.random() + math.random(70, 130)) / 100
		CL.AudioMgr.Instance:PlaySoundClip(self.soundName, self.trans.position, false, volume, randomPitch)
	end

    self.player:Transport(self.trans.position)
end

function table:OnGrab(a, g)
    if (g) then
		self.isCurrentlyHolding = true
		if(a.attachedHand:GetHandIndex() == 0) then 
            self.hand = "right"
        else
            self.hand = "left"
        end
	else
		self.isCurrentlyHolding = false
	end
end

function table:PullTrigger()
    print("Instant skill triggered!")

    local schedulerInterval = 0.02
    local timeBeforeStopping = -1
    local timeBeforeStarting = 0

    self.scheId = CL.Scheduler.Create({},
    function(sche, t, s)
        self:listenForButtonInput()
    end
    , schedulerInterval, timeBeforeStopping, timeBeforeStarting)
    :SetUpdateChannel(CL.Scheduler.UpdateChannel.FixedUpdate)
    :IgnoreTimeScale(true)
    :SetOnStop(function(sche)
        print("Stopping input listener")
    end).actionId
end

function table:OnDestroy()
    CL.Scheduler.RemoveSchedule(self.scheId)
end

return Class(nil,nil,table)
```

## Component

Use this script with `InteractTriggerX`. No variables needed.
