---
title: SpinObjectScript
---

Make a transform rotate endlessly.

## Code

```lua
local table = {}

function table:Awake()
    self.scheId = null;

    self.speed = 1;
    self.schedulerInterval = 0.02;
    self.timeBeforeStopping = -1;
    self.timeBeforeStarting = 0;
end

function table:Start()
    self.scheId = CL.Scheduler.Create({},
    function(sche, t, s)
        self.blade.Rotate(self.blade, UE.Vector3(0,1*self.speed,0)); 
    end
    , self.schedulerInterval, self.timeBeforeStopping, self.timeBeforeStarting)
    :SetUpdateChannel(CL.Scheduler.UpdateChannel.FixedUpdate)
    :IgnoreTimeScale(true)
    :SetOnStop(function(sche)
        print("Im stopping now")
    end).actionId
end

function table:OnDestroy()
    CL.Scheduler.RemoveSchedule(self.scheId)
end

return Class(nil,nil,table)
```

## Component

![Component](/img/script-spin-object1.png)

