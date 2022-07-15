---
title: Before Releasing
---
Before you release your own mod there are a couple of things you should do.

## Renamed the product

The way to change product name
1. Go to `Edit -> Project Settings -> Player`.
2. Modify field `Product Name` to your new mod name. Use the format: `YOURPREFIX_MyModName`. (Example: `UF_ChevalierSword`)

## Prefix your new mod

1. Open `Assets -> Resources -> AddressableConfig.asset`
1. Modify field `Prefix` to your new prefix name. Use the format: `YOURPREFIX_MyModName_`. (Example: `UF_ChevalierSword_`)
1. Press the button "Create And Refresh Addressable Name to automatically create (or update) all addressables with the correct prefix"
1. Manually check if all your addressables are now prefixed correctly under `window -> asset management -> addressables -> groups`

## Add a config

Right click under `Assets -> Build -> YourWeaponName -> Config`, then create an `ItemInfoConfig` then rename it as you need.(`ItemInfoConfig` is one of our entry point of your mod. Battle Talent will load all the `ItemInfoConfig` files in your mod, and add them into the game. Another entry point of mod, is entry script. Battle Talent will always load this script if your mod have it with 

## Add an icon

Create an icon under `Assets -> Build -> YourWeaponName -> ICon -> YourWeaponName.png`
Make sure an icon is added, else the store will crash.

## Cleared the project of files you are not using.

Two ways to clear the project of examples

* Delete all weapons under `build` folder that you are not gonna use.
* Delete all models and other files under `resources` folder that you are not gonna use.

## No errors

Open the in-game `console` (`cheat menu must be unlocked`) and make sure no errors are shown when you've spawned and tested a weapon. It will cause unexpected issues throughout the game so **DONT RELEASE MODS WITH ERRORS**.
