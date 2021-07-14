---
title: Base Projects
---

Base projects are very simple straightforward completed mods of a specific type. They are great starting points for creating your own mods and can be used freely.

#### Downloads

* [Sword](https://github.com/unbelievableflavour/BattleTalentBaseProjects/raw/main/YOURPREFIX_Sword.zip)
* [Sword - Increased damage on trigger](https://github.com/unbelievableflavour/BattleTalentBaseProjects/raw/main/YOURPREFIX_SwordWithIncreasedDamageOnTrigger.zip)
* [Sword - Shoots projectile on trigger](https://github.com/unbelievableflavour/BattleTalentBaseProjects/raw/main/YOURPREFIX_SwordWithProjectile.zip)
* [Greatsword](https://github.com/unbelievableflavour/BattleTalentBaseProjects/raw/main/YOURPREFIX_Greatsword.zip)
* [Shield - Not-hand-specific](https://github.com/unbelievableflavour/BattleTalentBaseProjects/raw/main/YOURPREFIX_Shield.zip)
* Shield - Hand-specific (Soon)
* [Blunt](https://github.com/unbelievableflavour/BattleTalentBaseProjects/raw/main/YOURPREFIX_Blunt.zip)
* [Blunt - Animation On Trigger](https://github.com/unbelievableflavour/BattleTalentBaseProjects/raw/main/YOURPREFIX_AnimationOnTrigger.zip)
* [Katana](https://github.com/unbelievableflavour/BattleTalentBaseProjects/raw/main/YOURPREFIX_Katana.zip)
* [Gun - One-handed](https://github.com/unbelievableflavour/BattleTalentBaseProjects/raw/main/YOURPREFIX_Gun.zip)
* Gun - Two-handed (Soon)

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
Only actual CODE changes that are needed per project are the following:

Step 1 - Entry.txt In `Setup\Scripts\Entry.txt` edit print("Loading YOURPREFIX_PROJECTNAME")

Step 2 - Entry.txt In `Setup\Scripts\WeaponModDemo.txt` edit AddStoreItemTemplate("YOURPREFIX_PROJECTNAME", nil, "Weapon name", "A description about the weapon.")

Icon changes
ALWAYS test if the mod shows up correctly in the store.
