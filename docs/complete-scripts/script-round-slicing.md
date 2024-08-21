---
title: RoundSlicingScript
---

This script will allow slicing from all directions when `colliderName` hits an enemy.

## Code

```lua
local table = {
    ragdollHitInfoObj = nil,
    colliderName = "Blade",
}

function table:Awake()
    self.phase1EventHandler = function(fc, mu, thisCol, otherRB, otherCol, point, normal, relaVel)
        if otherCol.name ~= self.colliderName then
            return
        end

        if fc.muscleState:IsPowerfulCharacter() and not fc.attr:IsDead() then
            return
        end
        
        local frag = fc.reactAnim:CheckHitDismemberPoint(mu.muscleName, point)
        if frag then
            CL.FullBodyMuscleState.dmgEffectData.cutBodyFragment = frag
        end
    end
    self.ragdollHitInfoObj.hitInfo:OnInteractRoleHitPhase1Event("+", self.phase1EventHandler)
end

function table:OnDestroy()
    self.ragdollHitInfoObj.hitInfo:OnInteractRoleHitPhase1Event("-", self.phase1EventHandler)
end

return Class(nil,nil,table)
```

## Component

Use this script with `LuaBehaviour`.

## User Variables

| Component | Variable                 | Explanation                                                                               | Default |
|-----------|--------------------------|-------------------------------------------------------------------------------------------|---------|
| String    | `self.ragdollHitInfoObj` | The ragdollHitInfoObj of your weapon.                                                     | `nil`   |
| String    | `self.colliderName`      | This should be your blade collider's transform name. All other transforms will be ignored | `Blade` |

## FAQ

### Can I still stab using this script?
Yes you can! Just make sure you add a collider to the tip of your weapon which is slightly in front of your `colliderName` collider so that it will hit that collider first and stab instead of slice.
