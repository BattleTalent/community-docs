# Scheduler - Timer



Scheduler is a script used to define when your code being executed.

For example: you can call a function every 0.1 second for 1 second and delay 0.2 second

    local interval = 0.1
    local timeBeforeStopping = 1
    local delay = 0.2
    
    self.scheId = CL.Scheduler.Create(self,
    function(sche, t, s)
        print("im updating!"); 
    end
    , interval, timeBeforeStopping, delay)
    :SetUpdateChannel(CL.Scheduler.UpdateChannel.FixedUpdate)
    :IgnoreTimeScale(true)
    :SetOnStop(function(sche)
        print("Im stopping now")
    end).actionId
    
    -- if you want to stop this scheduler
    -- CL.Scheduler.RemoveScheduler(self.scheId)

Trick 1: call a function next frame

```
CL.Scheduler.Create(self,
function(sche, t, s)
    print("im executing next frame!"); 
end)
```

Trick 2: lerp a value(you can even use this with Curve)

```
CL.Scheduler.Create(self,
function(sche, t, s)
	local progress = t/s
    local lerpedVec = UE.Vector3.Lerp(fromVector, toVector, progress)
    print(lerpedVec)
end, 0, 1)
```

Trick 3: stop inside the function

```
CL.Scheduler.Create(self,
function(sche, t, s)
	local progress = t/s
	if progress > 0.5 then
		sche:Stop()
	end
end, 0, 1)
```

