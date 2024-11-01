---
title: Scheduler
---

xLua doesn't have an update function by itself, but we can fake it. The following script can be added to `LuaBehaviour` or `InteractTriggerX` to call a function on an interval.

## Example

1. First initialize some variables for the scheduler:
```lua
self.schedulerId = nil

self.schedulerInterval = 0.3   --Runs every 0.3 seconds.
self.timeBeforeStarting = 0.2  --Starts after 0.2 seconds.
self.timeBeforeStopping = -1   --Never stops and will run endlessly.
self.ignoreSlowMotion = false  --Will not slow down when slow motion is activated.
```

2. Then create functions to schedule:
```lua
self.callOnSchedulerInterval = function(sche, t, s)
    print("Im updating!") 
end

self.callOnSchedulerStop = function(sche)
    print("Im stopping now")
end
```

3. Create the scheduler itself somewhere:
```lua
self.schedulerId = CL.Scheduler.Create({},
    self.callOnSchedulerInterval,
    self.schedulerInterval,
    self.timeBeforeStopping,
    self.timeBeforeStarting
):SetUpdateChannel(CL.Scheduler.UpdateChannel.FixedUpdate)
:IgnoreTimeScale(self.ignoreSlowMotion)
:SetOnStop(self.callOnSchedulerStop).actionId
```

4. Important! Don't forget to remove the scheduler or it will continue to run and will drain performance.
```lua
CL.Scheduler.RemoveSchedule(self.schedulerId)
```

**It is very important** though that you also call the `RemoveSchedule` function in the `OnDestroy` function so that it stops running when the weapon is destroyed.
```lua
function table:OnDestroy()
    if self.schedulerId ~= nil then
        CL.Scheduler.RemoveSchedule(self.schedulerId)
    end
end
```

## User Variables

| Component     | variable                       |
|---------------|--------------------------------|
| doesnt matter | `self.schedulerId`             |
| int           | `self.schedulerInterval`       |
| int           | `self.timeBeforeStopping`      |
| int           | `self.timeBeforeStarting`      |
| bool          | `self.ignoreSlowMotion`        |
| func          | `self.callOnSchedulerInterval` |
| func          | `self.callOnSchedulerStop`     |

## FAQ

### Can I stop the scheduler after a certain time?

Change the `self.timeBeforeStopping` to `10` to stop it after 10 seconds.

### Can I stop the scheduler from slowing down during slow motion?

Change the `self.ignoreSlowMotion` to `true`.

## Tricks

### Call a function on the next frame

```lua
local callOnSchedulerInterval = function(sche, t, s)
    print("im executing next frame!") 
end

CL.Scheduler.Create({}, callOnSchedulerInterval)
```

### Lerp a value (you can even use this with Curve)

```lua
local callOnSchedulerInterval = function(sche, t, s)
	local progress = t/s
    local lerpedVec = UE.Vector3.Lerp(fromVector, toVector, progress)
    print(lerpedVec)
end

CL.Scheduler.Create({}, callOnSchedulerInterval, 0, 1)
```

### Stop inside scheduler function

```lua
local callOnSchedulerInterval = function(sche, t, s)
    sche:Stop()
end

CL.Scheduler.Create({}, callOnSchedulerInterval, 0, 1)
```