---
title: UE - Time
---

Returns the time at the beginning of this frame.

## Example

```lua
local currentTime = UE.Time.time
```

## User Variables

No user variables.

## FAQ

### How can I get the time between 2 points in time?

Get the time between `otherTime` and `currentTime` simply by doing the following:
```lua
local otherTime = UE.Time.time -- somewhere else in the script ofcourse, else it would return the same time as currentTime.
local currentTime = UE.Time.time

local timeBetween = currentTime - otherTime
```
