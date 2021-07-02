---
title: Tips
---

Some extra tips for creating BT mods.

## Namespaces

* namespace of CSharp code is `CS` in lua
* namespace CrossLink is `CL` in lua, CL == CS.CrossLink
* namespace UnityEngine is `UE` in lua, UE == CS.UnityEngine

## Static functions

Calling a static function should use `.` instead of `:` in lua.

## Recommended IDE

* recommended IDE to use by Fonzie is [ZeroBrane Studio](https://studio.zerobrane.com/) as lua editor

## Different AttachLine holdPoses

You can hold objects in different ways by changing the "Hand Pose" parameter on the "AttachLine" prefab. Since the current documentation does not mention all different holdPoses, here is a list of all options.

| Pose	| Description |
| ---|---|
| DefaultPose | This is the default pose. It is also used when NOT holding anything.|
| HoldPose | This pose is for swords, axes, etc.|
|GunPose | This pose is for holding guns.|

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

## Upgrade and vulnerability colors

Upgrade and vulnerability colors will be set by the "skill change colors" property of the "interact trigger" component. But there are some important things to watchout for.

* The added meshes should have a material where emmision is turned on.
* The added meshes should have a material where emmision does not have an emmision map texture.
* The added meshes should have a material where emmision map texture color is set to 1,1,1,0.
