---
title: Add HP to player
---

Adds 20 HP to the player.

## Example

```lua
local player = CL.InteractCharacter.PlayerInstance
if player == nil then
    return
end

player.attr:AddHp(20)
```

## User Variables

No user variables.

## FAQ

### Can I also do this for mana?

Yes you can! use `AddMp()` to add mana. More information can be found [here](http://jjyy.guru/BTModToolkit/class_cross_link_1_1_player_combat_attr.html).
