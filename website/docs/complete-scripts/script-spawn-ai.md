---
title: SpawnAI
---

Adds an **enemy** or **friend** to the battlefield.

## Code

```lua
local table = {}

function table:Start()
    local nameOfAI = self.name or "Goblin_L2"
    local relationShipWithAI = self.relationship or "Bad"
    local shouldStay = self.shouldStay == "Yes"
    
    local fc = CL.CharacterMgr.Instance:SpawnRole(nameOfAI)
    if fc ~= nil then
        fc.trans.position = self.spawnPosition.position
        fc.trans.rotation = self.spawnPosition.rotation
    end
    
    fc.attr.camp = relationShipWithAI

    if shouldStay then
        fc.ai:StayCommand()
    end
end

return Class(nil,nil,table)
```

## Component

Use this script with `LuaBehaviour`.

## User Variables

| Component | Variable             | Explanation                                                             | Default     |
|-----------|----------------------|-------------------------------------------------------------------------|-------------|
| String    | `self.name`          | The name of the enemy to spawn.                                         | `Goblin_L2` |
| String    | `self.relationship`  | If `Bad`, AI will spawn as enemy. If `Good`, AI will spawn as a friend. | `Bad`       |
| String    | `self.shouldStay`    | If `Yes`, then AI will now move to player until being hit.              | `No`        |
| Transform | `self.spawnPosition` | The position of the enemy to spawn.                                     | no default  |

## FAQ

### Can I change the AI that spawns?
Yes you can change the AI to spawn. This can be a specific role name(`Goblin_Axe`) or a group name(`Goblin_L2`, contains `Goblin_Axe` and `Goblin_Rogue`).

For instance if you want a lvl 2 Elf:
Set the `self.name` var to `Elf_L2`

Or if you want a Goblin with an axe:
Set the `self.name` var to `Goblin_Axe`

Here are all possible options in the demo:

![Component](/img/script-spawn-ai-1.png)
![Component](/img/script-spawn-ai-2.png)

### Can I change if they are good or bad?
Yes you can change your relationship with the AI.

To good:
Set the `self.relationship` var to "Good"

To Bad:
Set the `self.relationship` var to "Bad"(default)

### Can I change if the enemy engages or stays?
Yes you can make change the AI stay state.

Add the following line to the script
```
fc.ai:StayCommand()
```