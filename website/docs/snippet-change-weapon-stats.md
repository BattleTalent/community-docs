---
title: Change weapon stats
---

Change the stats on a weapon. In this case `damageMlp`.

## Example

```lua
self.ragdollHitInfo.hitInfo.damageMlp = 300;
```

## User Variables

| Component   | variable    |
| ----------- | ----------- |
| RagdollHitInfoObj   | `self.ragdollHitInfo` |

## FAQ

### What stats of a weapon can we change?
The following stats:

| Options |
| ------- |
| templateName |
| weightAmongMultiple |
| velocityMlp |
| damageMlp |
| damageThrough |
| damageCrit |
| stabMlp |
| hitMlp |
| hitRandom |
| stabDamage |
| breakDefenceMlp |
| hitBackMlp |
| knockoutFactor |
| dizzyFactor |
| stiffValue |

### Any way I can revert back to the hitInfo template?
Use the `ResetTemplate` function:

```lua
self.ragdollHitInfo.hitInfo:ResetTemplate();
```

