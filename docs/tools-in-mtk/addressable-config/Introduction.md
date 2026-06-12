# Introduction

Addressable Config is a tool that renames your mod assets (Prefabs, Music, Effects, Icons, LuaScripts, etc.) based on a configured prefix to their final names that will be used when the game loads your mod.

## Main Features

This tool automatically renames your MOD assets according to your configured prefix, including:

- Prefabs
- Music files
- Visual effects
- UI icons
- Lua scripts 
- Other game resources


## <span id="filename"> How It Works </span>

When creating a MOD, all assets will be renamed using a unified prefix. This serves several purposes:

1. Prevents naming conflicts with assets from other mods
2. Maintains consistent asset naming within your mod
3. Ensures proper loading and identification of mod assets during gameplay

For example, if your configured prefix is "MyMod_":
- A `Sword` prefab will be renamed to `MyMod_Sword`
- `BattleMusic.wav` will be renamed to `MyMod_BattleMusic.wav`
- `SparkEffect` will be renamed to `MyMod_SparkEffect`
- `WeaponIcon.png` will be renamed to `MyMod_WeaponIcon.png`
- `PlayerScript.txt` will be renamed to `MyMod_PlayerScript.txt`

## How to Use

1. Open Addressable Config by either:
   - Using the shortcut `Ctrl+Shift+E`
   - Or navigating to `Tools -> Select Addressables Config`
2. Enter your desired prefix
3. Specify the folder path containing your assets - all assets in this folder and its subfolders will be processed
4. Click "CreateAndRefreshAddressableName" to apply the changes

## Verifying and Modifying Asset Names

You can verify the final asset names that will be used by your MOD by checking the Default Local Group information in the Addressables Groups window. If the generated names don't match your expectations:

1. Click "Clear Addressables" to remove the current naming configuration
2. Reconfigure your prefix and folder paths as needed
3. Generate new asset names by clicking "CreateAndRefreshAddressableName"

This naming convention ensures your MOD assets can be correctly identified and loaded in the game.




