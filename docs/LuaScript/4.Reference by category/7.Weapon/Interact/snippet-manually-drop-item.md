---
title: Manually drop item
---

Manually drop/ungrab a weapon or object.

## Example

```lua
function table:OnGrab(attach, g)
    if g then
        -- i grabbed an object.
        self:Drop(attach)
    end
end

function table:Drop(attach)
  -- call this the next frame.
  local callOnSchedulerInterval = function(sche, t, s)
  
    -- manually ungrab
    attach.attachedHand:Grab(nil)

  end
  CL.Scheduler.Create({}, callOnSchedulerInterval)
end
```

## User Variables

No user variables.

## FAQ

### Where do I add this script?

`OnGrab` is a function that can be called when adding a luascript to the `InteractTriggerX` component.
