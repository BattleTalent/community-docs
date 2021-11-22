---
title: Tips
---

Some extra tips for creating BT mods.

## What's new?
There have been some cool updates since the latest update!

* Spell crystal modding! We can now create spells.
* Hand grip previews. You can now preview the hand position in the editor.
* New spell holding pose called `GlovePose`!
* Scabbard! Yes they are actually working now.
* Skill charge color. You can now change the glowing color the weapon skill in InteractTriggerX.
* Skill charge sound. You can now add sounds straight from InteractTriggerX.
* Automatic addressable namespacing. Change it once in `Assets/Resources/AddressableConfig`, edit it in your prefabs and your done!

## Namespaces

* namespace of CSharp code is `CS` in lua
* namespace CrossLink is `CL` in lua, CL == CS.CrossLink
* namespace UnityEngine is `UE` in lua, UE == CS.UnityEngine

## Addressable shortcuts

Shortcuts to be used in the addressable list for adding files to the mod build.

* Weapons use `Weapon/`
* Icons use `ICon/`
* Sounds use  `Audio/Sound/`
* Scripts use `LuaScript/`
* Effects use `Effect/`

## Static functions

Calling a static function should use `.` instead of `:` in lua.

## Recommended IDE

* Recommended IDE to use by Fonzie is [ZeroBrane Studio](https://studio.zerobrane.com/) as lua editor

## Different AttachLine holdPoses

You can hold objects in different ways by changing the "Hand Pose" parameter on the "AttachLine" prefab. Since the current documentation does not mention all different holdPoses, here is a list of all options.

| Pose	| Description |
| ---|---|
| DefaultPose | This is the default pose. It is also used when NOT holding anything.|
| HoldPose | This pose is for swords, axes, etc.|
| GunPose | This pose is for holding guns.|
| GlovePose | This pose is for spells.| 

## When is slicing triggered

Fonzie was kind enough to give us some explanation on when slicing will be triggered.

> slicing will be triggered when using the side part to stab in an enemy who has low hp 
* to make the stab works with side part 
    1. the StabDamage of weapon's hitter part should be larger than 100, for example 120 
    2. set the sideGeo to >= 0
    3. setup the stab area
* how to determine an enemy's hp is low? here's the pseudocode. 
  `hpIsLow = ((hp - curDmg) / (hpMax)) < 0.2`

## Debug Log path for PC users.

Since the PC version doesn't have a log in-game there is another way to find out what's wrong with your mod. All notices and errors will be saved instantly to this file.

`C:\Users\<YOUR_USER>\AppData\LocalLow\CrossLink\BattleTalent\Player.log`
