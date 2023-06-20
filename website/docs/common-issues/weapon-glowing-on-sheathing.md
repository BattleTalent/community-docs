---
title: Weapon glowing on sheathing
---

![Component](/img/tutorial-common-issues-sheathing.jpeg)

## Steps to reproduce

1. Spawn your weapon.
1. Sheath it.
1. Regrab it again. See that its glowing!

## Fix

1. Open InteractTrigger component.
1. Open "Skill Change Colors".
1. Make sure all mesh renderers there have material with emmision map color set to 1,1,0.
