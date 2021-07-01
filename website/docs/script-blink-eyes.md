---
title: BlinkEyesScript
---

Make a objects disable and enable at random times.

## Code

```lua
local table = {}

function table:Awake()

    self.eyesAreClosed = false;
    self.scheId = null;

    self.speed = 1;
    self.schedulerInterval = 0.2;
    self.timeBeforeStopping = -1;
    self.timeBeforeStarting = 0;

    self.timer = 3;
    self.blinkTime = 0.2;
end

function table:Start()
    self.scheId = CL.Scheduler.Create({},
    function(sche, t, s)
        if (self.eyesAreClosed) then
            self.eyesAreClosed = false
            self.openEyes.gameObject:SetActive(true)
            self.closedEyes.gameObject:SetActive(false)
            return
        end

        self.timer = self.timer-0.2
        if (self.timer > 0) then
            return  
        end

        self.eyesAreClosed = true
        self.openEyes.gameObject:SetActive(false)        
        self.closedEyes.gameObject:SetActive(true)
        self.timer = math.random(2, 4)
    end
    , self.schedulerInterval, self.timeBeforeStopping, self.timeBeforeStarting)
    :SetUpdateChannel(CL.Scheduler.UpdateChannel.FixedUpdate)
    :IgnoreTimeScale(true)
    :SetOnStop(function(sche)
        print("Prop stops blinking")
    end).actionId
end

function table:OnDestroy()
    CL.Scheduler.RemoveSchedule(self.scheId)
end

return Class(nil,nil,table)
```

## Component

![Component](/img/script-increased-damage1.png)
