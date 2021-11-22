---
title: Before Releasing
---
Before you release your own mod there are a couple of things you should do.

## Renamed the product

The way to change product name
1. Go to `Edit -> Project Settings -> Player`.
2. Modify field `Product Name` to your new mod name. Use the format: YOURPREFIX_MyModName. (Example: UF_ChevalierSword)

## Prefix your new mod

1. Open `Assets -> Resources -> AddressableConfig.asset`
2. Modify field `Prefix` to your new prefix name. Use the format: YOURPREFIX_MyModName_. (Example: UF_ChevalierSword_)
3. Press the button "Create And Refresh Addressable Name to automatically create (or update) all addressables with the correct prefix"
4. Manually check if all your addressables are now prefixed correctly under `window -> asset management -> addressables -> groups`

## Add an icon

Make sure an icon is added, else the store will crash.

## Clear the project (only if not using base project)

Two ways to clear the project of examples

* Remove the pre-added addressables `window -> asset management -> addressables -> groups`
* Delete the Examples folder `Assets/Examples`

## No errors

Open the cheat menu in-game & make sure no errors are shown when spawning the weapon. It will cause unexpected issues throughout the game.
