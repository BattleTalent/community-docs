---
title: RetractableScript
---

Makes an object retractable with sounds.

## Code

```lua
local table = {}

function table:Awake()
    --system will cache up cols, we should do this manual before disabling collider
    self.host.interact:GetCols() 
    self.initLocalScale = self.blade.localScale
    self.blade.localScale = UE.Vector3.zero
    self.blade.gameObject:SetActive(false)
    self.host.interact:SetAsNoTrail()
    self.scaleActId = -1
    self.lightUp = false
    self.soundPlayTime = 0
    self.delayScaleAct = -1
    self.isOpen = false
end

function table:UpdateSkill()
	local shootInterval = self.shootInterval or 0.1
	local st = self.shootTime or 0
	local ct = UE.Time.time
	if ct - st < shootInterval then
		return
	end	

    self:ToggleRetractable()
end

function table:ToggleRetractable()
    if (self.isOpen) then
        if (lightUp == false) then
            return
        end

        self.isOpen = self.isOpen == false;
        self.host.interact.rb.centerOfMass = UE.Vector3(0, 0, 0)
        self.host.interact.rb.mass = 6
        self.saberEndSound:PlaySound()
        self.soundPlayTime = UE.Time.time
        self:DoScale(false)            
        return
    end
    
    self.isOpen = self.isOpen == false;
    self.saberBeginSound:PlaySound()
    self:DoScale(true)
    self.host.interact.rb.centerOfMass = UE.Vector3(0, 0, 0.5)
    self.host.interact.rb.mass = 12
end

function table:DoScale(scaleUp)
    self.lightUp = scaleUp
    local so = self.host.interact:GetStabObject()
    local blade = self.blade
    local startScale = blade.localScale
    
    --local endScale = scaleUp ? initLocalScale : Vector3.zero;
    local endScale = UE.Vector3.zero
    if (scaleUp) then
        endScale = self.initLocalScale
    end
        
    if (scaleUp) then
        blade.gameObject:SetActive(true)
        so.scalingForward = true
    else     
        so:BreakAllStab()
    end
    
    CL.Scheduler.RemoveSchedule(self.scaleActId)
    self.scaleActId = CL.Scheduler.Create(self.host, 
        function (sche, t, s)
            self.blade.localScale = UE.Vector3.Lerp(startScale, endScale, CL.EasingEquations.QuadEaseInOut(t, 0, 1, s))
            self.rigidBody.centerOfMass = UE.Vector3(0,0,0);
            if (t>=s) then
                so.scalingForward = false
                if (scaleUp == false) then
                    self.blade.gameObject:SetActive(false)                   
                    so:BreakAllStab()
                end
            end
        end
    , 0, 0.1):
    SetUpdateChannel(CL.Scheduler.UpdateChannel.FixedUpdate).actionId
end

return Class(nil,nil,table)
```

## Component

![Component](/img/script-retractable1.png)
