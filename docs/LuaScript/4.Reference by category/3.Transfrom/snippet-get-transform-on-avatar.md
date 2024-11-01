---
title: GetTransformOnAvatar
---

Retrieves a transform on the player to mutate stuff like disabling cloaks and such.

## Example

```lua
local table = {}

function table:FindTransformByNameRecursive(haystack, needle)
    local children = haystack:GetComponentsInChildren(typeof(UE.Transform), true)
    local it = children:GetEnumerator()

    local foundTransform = nil
    while it:MoveNext() do
        if it.Current.name == needle then
            foundTransform = it.Current
        end
    end

    return foundTransform
end

function table:FindTransformByNameRecursive(haystack, needle)
    local ik = CL.InteractCharacter.PlayerInstance.ik.transform
    local cloak = self:FindTransformByNameRecursive(ik, "Warrior_cloak_Head")
    print(cloak)
end
```

## User Variables

No user variables.