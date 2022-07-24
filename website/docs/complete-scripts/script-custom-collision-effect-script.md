---
title: CustomCollisionEffectScript
---

CollisionEffect, but with custom sounds & effects!

## Code

```lua
local table = {
    sqrSpeed = 2,
}

function table:OnColliderEnter(collision)
    -- return when collision was with self

    local hand = self.interactTrigger.interact:GetPrimaryHand()
    if hand and collision.gameObject.transform.root == hand.character.trans.root then
        return
    end

    local pu = CL.PhysicsUnit.GetPhysicsUnitTopDown(collision.collider)
    if pu ~= nil and pu.unitType == CL.Tagger.Tag.PlayerRole then
        return
    end

    -- return when collision was slow

    if collision.relativeVelocity.sqrMagnitude < self.sqrSpeed then
        return
    end
    
    -- return when collider wasnt in list

    local ct = collision:GetContact(0)
    local colliderIsInList = false
    local collider_index = 0
    while self["col" .. collider_index] do
        if self["col" .. collider_index] == ct.thisCollider then
            colliderIsInList = true
            break
        end
        collider_index = collider_index + 1
    end
    if not colliderIsInList then
        return
    end

    -- collide!

    local pos = collision.collider:ClosestPoint(ct.point)
    pos.y = pos.y + 0.05

    if self.effectName then
        CL.EffectMgr.Instance:PlayEffect(self.effectName, pos, UE.Quaternion.identity)
    end

    local soundNames = {}   
    local sound_index = 0
    while self["soundName" .. sound_index] do
        soundNames[sound_index] = self["soundName" .. sound_index]
        sound_index = sound_index + 1
    end

    if soundNames[0] then
        local volume = 0.5
        local randomPitch = (math.random() + math.random(70, 130)) / 100
        CL.AudioMgr.Instance:PlaySoundClip(soundNames, pos, false, volume, randomPitch)
    end
end

return Class(nil,nil,table)
```

## Component

![Component](/img/script-custom-collision-effect.png)

## FAQ

### What's the `col0` variable?
You can add variables to this component to add the collision detection. For example; the above component will only be used on the `col0` collider, but you could also add a `col1`, `col2`, and so on.

