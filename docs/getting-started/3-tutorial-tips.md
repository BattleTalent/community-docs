---
title: Tips
---

Some extra tips for creating BT mods.

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
* FlyObj use `FlyObj/`
* Roles use `Role/`
* Avatars(1.0) (also known as skins) use `Skin/`
* Avatars(2.0) use `Avatar/`
* Maps use `Scene/`

Any resource's addressable name in the path above, can be loaded by the system without path included. for example, if an effect's addressable name is Effect/explosion, it can be created by EffectMgr.Instance:PlayEffect("explosion")

## Static functions

Calling a static function should use `.` instead of `:` in lua.
Example:
* Normal function call: `object:TestFunction()`.
* Static function call: `object.TestFunction()`.

## Recommended IDE

* Recommended IDE to use by Fonzie is [ZeroBrane Studio](https://studio.zerobrane.com/) as lua editor

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
