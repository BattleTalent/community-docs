---
title: Explosion Without damage to player
---

Add check for the upcoming hits if it's the player, if so > skip damage.

## Example

```lua
CL.InteractTrigger.HitScanAction = function(beHitPu, beHitCol, selfPu, rb, col, hitDir, hitterCamp)
    local isSkip = false
    if (beHitPu.unitType == CL.Tagger.Tag.PlayerRole) then
        isSkip = true
    end
    return isSkip
end  

CL.InteractTrigger.ApplyExplode(self.trans.position, self.explodeRange, self.host, self.host.rb, self.host.col, CL.AIProxy.CampNone)
```

## User Variables

No user variables.

## FAQ

### Where do I add this script?

Most common use will be in `FlyExplodeScript.txt`
