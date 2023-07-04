---
title: Base Projects
---

**Important: Base Projects are no longer recommended. The modproj has the most up-to-date & straightforward mod examples.** 

Base projects **were** very simple straightforward completed mods of a specific types. They **were** great starting points for creating your own mods when the modproj was a little more complicated. The last version of ModProj is easy-to-use and straightforward. So we recommend using the [ModProj](https://github.com/fonzieyang/BTModToolkit) instead now.

## Downloads
**These are projects based on old version of the toolkit. Don't use unless you know what you are doing**

* [Sword](https://github.com/unbelievableflavour/BattleTalentBaseProjects/raw/main/YOURPREFIX_Sword.zip)
* [Sword - Increased damage on trigger](https://github.com/unbelievableflavour/BattleTalentBaseProjects/raw/main/YOURPREFIX_SwordWithIncreasedDamageOnTrigger.zip)
* [Sword - Shoots projectile on trigger](https://github.com/unbelievableflavour/BattleTalentBaseProjects/raw/main/YOURPREFIX_SwordWithProjectile.zip)
* [Weapon - Spawn item on trigger](https://github.com/unbelievableflavour/BattleTalentBaseProjects/raw/main/YOURPREFIX_WeaponSpawner.zip)
* [Greatsword](https://github.com/unbelievableflavour/BattleTalentBaseProjects/raw/main/YOURPREFIX_Greatsword.zip)
* [Shield - Not-hand-specific](https://github.com/unbelievableflavour/BattleTalentBaseProjects/raw/main/YOURPREFIX_Shield.zip)
* [Shield - Hand-specific](https://github.com/unbelievableflavour/BattleTalentBaseProjects/raw/main/YOURPREFIX_ShieldHandSpecific.zip)
* [Blunt](https://github.com/unbelievableflavour/BattleTalentBaseProjects/raw/main/YOURPREFIX_Blunt.zip)
* [Blunt - Animation on trigger](https://github.com/unbelievableflavour/BattleTalentBaseProjects/raw/main/YOURPREFIX_AnimationOnTrigger.zip)
* [Katana](https://github.com/unbelievableflavour/BattleTalentBaseProjects/raw/main/YOURPREFIX_Katana.zip)
* [Gun - One-handed](https://github.com/unbelievableflavour/BattleTalentBaseProjects/raw/main/YOURPREFIX_GunOneHanded.zip)
* [Gun - Two-handed](https://github.com/unbelievableflavour/BattleTalentBaseProjects/raw/main/YOURPREFIX_GunTwoHanded.zip)

## How to use

### Quick start

1. Open the project in Unity
1. Open `Assets/Build`.
1. See your weapon addressable folders here!
1. Open `Assets/Resources`.
1. See your weapon resource folders here!
1. There you go! All needed components.

### Where is the scene located?
Scenes are found under `Assets/Scenes`.

## Important
Some important things you might need to know while creating mods through base mods.

### Prefixes
In the projects you will find a lot of `YOURPREFIX_ModName_` in names. Those should be changed to your own cool modder tag so your mods will not conflict with others.

To update the prefixes automatically for addressables:
1. Open `Assets/Resources/AddressableConfig`.
1. Change `YOURPREFIX_ModName_` to your desired prefix. (keeping the mod name in the prefix is recommended to reduce conflicting mods).
1. Change the `weaponPaths` to match your addressable folders (found under `Assets/Build`).
1. Press the `Create and Addressable Names` button.

To update the prefixes automatically for scripts, prefabs & paths:
1. Open `Assets/Resources/AddressableConfig`.
1. Click `Modify Prefix In Paths Prefabs And Scripts`.
1. Change Old prefix to `YOURPREFIX_ModName_`.
1. Change New Prefix to your desired prefix. (keeping the mod name in the prefix is recommended to reduce conflicting mods).
1. Press the `Invoke` button.

### Code changes
Only actual CODE change that's needed per project is the following:

In `Assets/Build/Entry.txt` edit `AddStoreItemTemplate("YOURPREFIX_YourModName_Your_Weapon_Name", nil, "Weapon name", "A description about the weapon.")` at the bottom of the script.

### Product name
The product name should be changed manually so that the mod will have it's own name.
1. Go to `Edit/Project Settings/Player/Product Name`.
1. Change `YOURPREFIX_ModName` to your prefix + modname. (No _ at the end)
