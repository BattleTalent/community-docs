---
title: AddItem
---

Adds an item to the store.

## Example

```lua
storeItem = CL.UnlockContentItem()
storeItem.name = weaponName
storeItem.dependItemName = dependWeapon
storeItem.iconName = weaponName
storeItem.contentType = CL.UnlockContentConfig.UnlockContentType.Weapon
storeItem.unlockRequireCoinNum = 1
CL.UnlockContentConfig.AddItem(storeItem)
```

## FAQ

### Where do I add this script?

This script is already included by default in `WMD_WeaponModDemo.txt`.
