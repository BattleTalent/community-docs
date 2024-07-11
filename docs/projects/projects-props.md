---
title: Props
---

This is a special project that makes it able to add props to the Prop Spawner Spell!
Make sure to keep `_PropSpawner_PROP_`, inside your prop addressables. Or the prop spawner wont find your prop!

## Downloads

* [Prop Project](https://github.com/unbelievableflavour/BattleTalentBaseProjects/raw/main/YOURPREFIX_PropSpawner_PROP_YourModName.zip)

## How to use

### Quick start

1. Open the project in Unity
1. Open `Assets/Build`.
1. See your weapon addressable folders here!
1. Open `Assets/Resources`.
1. See your prop resource folders here!
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

