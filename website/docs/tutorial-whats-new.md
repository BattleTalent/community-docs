---
title: Whats new
---

There have been some cool updates since the latest update!

## 12/15/2021
* Sheaths (scabbards) are now sticky and sword stays in.
* Removed random AKshots when grabbing the mod spells
* Fixed scabbard texture. (was broken due to a fonzie fix for the scabbard script.)

## 11/28/2021

* Moved all weapon folders to "Resources" (WeaponRes is no more)
* Removed sherbs collection and all dependencies on it.
* Added SpellCrystal model.
* Separated FireBall particle dependency from Crossbow.
* Fixed scabbard crashing script.

## 11/24/2021

* More hierarchy cleanup.
* Moved unused resources to a separate folder.
* Fixed scabbard texture.
* Fixed ak47 & lightsaber audio.
* Fixed Tower_Turret materials.
* Fixed Tower_Turret scripts.
* Moved HandPoseHelper to toolkit.

## 11/23/2021

* Removed workflow conflicting button (weapons are no longer named with prefix so gaze update button is now removed. update through AddressableConfig)
* Spells & crossbow get slotted.
* Hierarchy should be cleaner now (not finished yet). 
* Deleted duplicate code. 
* Tower_Turret icon fixed.
* Gaze info now gets updated when prefixing

## 11/20/2021

* Spell crystal modding! We can now create spells.
* Trap modding. We can now officialy mod placeable objects.
* Sheaths/Scabbards modding! Yes they are actually working now.
* Hand grip previews. You can now preview the hand position in the editor.
* New holding pose (for spells) called `GlovePose`!
* Skill charge color. You can now change the glowing color the weapon skill in InteractTriggerX.
* Skill charge sound. You can now add sounds straight from InteractTriggerX.
* Lua scripts can now receive String values!
* Automatic addressable creation. You won't have to edit that list manually anymore.
* Automatic addressable prefixing. Use the "Create And Refresh Addresable name" option in `Assets/Resources/AddressableConfig`.
* Automatic prefab & script prefix modifying. Use the "Modify Prefix Invoke Button" option in `Assets/Resources/AddressableConfig`.
