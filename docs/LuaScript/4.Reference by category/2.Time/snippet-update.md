---
title: Update
---

xLua doesn't have an update function by itself, but we can fake it. The following script can be added to `LuaBehaviour` or `InteractTriggerX` to start a endless looping script.

**It is very important** though that you call the `RemoveSchedule` script in the `OnDestroy` function so that it stops when the weapon is destroyed.

## Example

Updates every 0.3 seconds, and starts after 0.2 seconds

```lua

local table = {}

function table:Awake()
    self.scheId = null;

    self.speed = 1;
    self.schedulerInterval = 0.3
    self.timeBeforeStopping = -1
    self.timeBeforeStarting = 0.2
end

function table:Start()
    self.scheId = CL.Scheduler.Create({},
    function(sche, t, s)
        print("im updating!"); 
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

## User Variables

No user variables.

## FAQ

### Can I stop this after a certain time?

Just change the `self.timeBeforeStopping = -1;` to `self.timeBeforeStopping = 10;`  
