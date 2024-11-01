---
title: HitInfo
---

Add a new hitinfo to the config file.

## Example

```lua
HitInfoConfig = CL.GameDataMgr.GetData(typeof(CL.HitInfoConfig))
local customHitInfo = CL.HitInfoConfig.HitInfoConfigItem()
customHitInfo.Name = "YOURPREFIX_YourWeaponName"
customHitInfo.VelocityMlp = 1.5
customHitInfo.DamageMlp = 30
customHitInfo.DamageThrough = 1.5
customHitInfo.DamageCrit = 1.5
customHitInfo.StabMlp = 1.5
customHitInfo.HitMlp = 120
customHitInfo.HitRandom = 0.2
customHitInfo.StabDamage = 120
customHitInfo.BreakDefenceMlp = 1
customHitInfo.HitBackMlp = 90
customHitInfo.KnockoutFactor = 0.1
customHitInfo.DizzyFactor = 0
customHitInfo.StiffValue = 2.5
HitInfoConfig:AddData(customHitInfo)
```

## User Variables

No user variables.

## FAQ

### Where do I add this script?

In `WMD_WeaponModDemo.txt`

### Where can I add this to my weapon?

Enter the `customHitInfo.Name` into the `name` field of the `hitInfoObj` component on your weapon. 
