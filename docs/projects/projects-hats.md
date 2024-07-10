---
title: Hats
---

This is a special project that makes it able to add hats to the Hat Spell!
Make sure to keep `_HatSpell_HAT_`, inside your hat addressables. Or the hat spell won't find your hat!

## Downloads

* **Hat project is not yet publicly available. Try again soon.**

## How to use

### Quick start

1. Open the project in Unity
1. Open `Assets/Build`.
1. See your hat addressable folders here!
1. Resources folder is included in separate hat folders.
1. There you go! All needed components.

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

### Project name
The project name should be changed manually so that the mod will have it's own name.
1. Go to `Edit/Project Settings/Player/Product Name`.
1. Change `YOURPREFIX_ModName` to your prefix + modname. (No _ at the end)

