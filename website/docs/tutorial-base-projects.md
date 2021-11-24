---
title: Base Projects
---

Base projects are very simple straightforward completed mods of a specific type. They are great starting points for creating your own mods and can be used freely.

#### Downloads (New)
These are projects based on the new toolkit. They are the prefered projects.

(Coming soon)

#### Downloads (Old)
These are projects based on the previous toolkit. They work just fine, but some the documentation may differ a from these.

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

#### Experimental

These projects are a bit hacky and might not work in next version but bring some cool extra features to the game!

* [Prop](https://github.com/unbelievableflavour/BattleTalentBaseProjects/raw/main/YOURPREFIX_Prop.zip)
* [Song](https://github.com/unbelievableflavour/BattleTalentBaseProjects/raw/main/YOURPREFIX_Song.zip)


## How to use

### Quick start

1. Open the project in Unity
2. Find the folder named `YOURPREFIX_<WeaponName>` and open it.
3. There you go! All needed components, scenes for your mod can be found in this directory!

### Where is the scene located?
A scene is included under `Setup/SampleScene`.

## Important
Some important things you might need to know while creating mods through base mods.

### Prefixes
In the projects you will find a lot of `YOURPREFIX_` in names. You should change those to your own cool modder tag so your mods will not conflict with others.

### Code changes
Only actual CODE change that's needed per project is the following:

In `Assets\Build\Entry.txt` edit `AddStoreItemTemplate("YOURPREFIX_YourModName_Your_Weapon_Name", nil, "Weapon name", "A description about the weapon.")` at the bottom of the script.
