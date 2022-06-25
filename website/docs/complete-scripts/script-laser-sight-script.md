
---
title: LaserSightScript
---

Add a laser to your gun.

## Code

```lua
local table = {}

function table:Awake()
    self.scheId = null;
    self.schedulerInterval = 0.01;
    self.timeBeforeStopping = -1;
    self.timeBeforeStarting = 0;
end

function table:Start()
    self.scheId = CL.Scheduler.Create({},
    function(sche, t, s)
		self:Updating()
    end
    , self.schedulerInterval, self.timeBeforeStopping, self.timeBeforeStarting)
    :SetUpdateChannel(CL.Scheduler.UpdateChannel.FixedUpdate)
    :IgnoreTimeScale(true)
    :SetOnStop(function(sche)
        print("Disabling laser sight for gun.")
    end).actionId
end

function table:Updating()
	local fwd = self.raycastStartLocation:TransformDirection(UE.Vector3.forward);
	local isHit, hitInfo = UE.Physics.SphereCast(self.raycastStartLocation.position, 0.02, fwd, 50, CL.LayerDefine.EnvLayerMask.value)

	if isHit and hitInfo.distance > 1 then
		self:SetLineToHitLocation(hitInfo);
		do return end
	end

	self:SetLineToFallbackLocation();
end

function table:SetLineToFallbackLocation()
	self.laser:SetPosition(0, self.raycastStartLocation.position);
	self.laser:SetPosition(1, self.laserEndFallbackLocation.position);
end

function table:SetLineToHitLocation(hitInfo)
	self.laser:SetPosition(0, self.raycastStartLocation.position);
	self.laser:SetPosition(1, hitInfo.point);
end

function table:OnDestroy()
    CL.Scheduler.RemoveSchedule(self.scheId)
end

return Class(nil,nil,table)
```

## Component

Can be used on `InteractTriggerX`, but probably also on `LuaBehaviour`.
![Component](/img/script-laser-sight1.png)
