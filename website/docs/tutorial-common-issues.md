---
title: Common Issues
---

Some issues are more common then others. Below are some easy fixes for these isues.

## White Icon

![Component](/img/tutorial-common-issues1.jpeg)

### Steps to reproduce

1. Go to the store.
1. See that the icon is not shown & that it will break all icons coming after yours.

### Fix

1. Delete your icon if there is one.
1. Create a new icon.
1. Recreate addressable list from `Assets -> Resources -> AddressableConfig -> Create And Refresh Addressable Name`

## Dungeon bug

![Component](/img/tutorial-common-issues2.jpeg)

### Steps to reproduce

1. Go to the store.
1. Set the weapon where this is happening to 'Enabled'.
1. Set all other weapons to 'Disabled'.
1. Open a randomly generated dungeon level. (bug only occurs on stages where the icon is a 💀).
1. See that the map textures are not showing & also there is a yellow object stuck to your head.

### Fix

1. Open the cheat menu.
1. Spawn the weapon.
1. Check if errors occured.
1. Fix all errors.

## Weapon glowing on sheathing

![Component](/img/tutorial-common-issues-sheathing.jpeg)

### Steps to reproduce

1. Spawn your weapon.
1. Sheath it.
1. Regrab it again. See that its glowing!

### Fix

1. Open InteractTrigger component.
1. Open "Skill Change Colors".
1. Make sure all mesh renderers there have material with emmision map color set to 1,1,0.

## Upgrade & vulnerability colors are not showing

Upgrade and vulnerability colors will be set by the "skill change colors" property of the "interact trigger" component. But there are some important things to watchout for.

### Steps to reproduce

1. Go to map with enemies.
1. Spawn your weapon.
1. Hit the enemy until you weapon is almost broken.
1. See that your weapon does not change color.

### Fix

* The added meshes should have a material where emmision is turned on.
* The added meshes should have a material where emmision does not have an emmision map texture.
* The added meshes should have a material where emmision map texture color is set to 1,1,1,0.

## Gaze info not showing

DONT use the "Pull Gaze Name From GameObject" anymore. Weapon prefabs are no longer named with prefix due to the new prefixing system. The value's of Gaze obj should be set manually.
