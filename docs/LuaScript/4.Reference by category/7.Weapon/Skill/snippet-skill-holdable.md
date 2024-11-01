---
title: Skill - Holdable
---

A skill that will stay activated while holding down the trigger button.

**Remember:** `Instant skill` should be checked in the `InteractTriggerX` component for a skill to be holdable.

## Example

```lua
local table = {}

function table:OpenSkill(attach)
	print("Start skill triggered!")
end

function table:CloseSkill()
	print("End skill triggered!")
end

return Class(nil,nil,table)
```

## User Variables

No user variables

## FAQ

### Where do I add this script?

`OpenSkill` is a function that can be called when adding a luascript to the `InteractTriggerX` component.
`CloseSkill` is a function that can be called when adding a luascript to the `InteractTriggerX` component.

### Why is the function not called multiple times when I hold down the trigger?

Make sure `Instant skill` is **CHECKED** in the `InteractTriggerX` component. 
