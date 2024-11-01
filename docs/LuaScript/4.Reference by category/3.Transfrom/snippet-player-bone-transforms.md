---
title: Player - Bone Transforms
---

Retrieve bone transforms on the players body.

## Example

```lua
function test:GetPlayerChestTransform()
    local chestTrans = CL.InteractCharacter.PlayerInstance.ik.references.chest
    return chestTrans;
end

local chestTransform = GetPlayerChestTransform()
```

## User Variables

No user variables.

## FAQ

### This script is only for the chest?

Correct. But you can call all other bones of the player as well!

List of bones:
- references.root
- references.pelvis
- references.spine
- references.chest
- references.neck
- references.head
- references.leftShoulder
- references.leftUpperArm
- references.leftForearm
- references.leftHand
- references.rightShoulder
- references.rightUpperArm
- references.rightForearm
- references.rightHand
- references.leftThigh
- references.leftCalf
- references.leftFoot
- references.leftToes
- references.rightThigh
- references.rightCalf
- references.rightFoot
- references.rightToes
