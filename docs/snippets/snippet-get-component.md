---
title: GetComponent
---

It gets the component on a gameObj just like in Unity.

## Example

The following example gets the `InteractWeapon` component from variable `self.gameObj` and stores it in `interactWeapon` variable.

```lua
local interactWeapon = self.gameObj:GetComponent(typeof(CL.InteractWeapon))
```

## User Variables

| Component   | variable    |
| ----------- | ----------- |
| GameObject   | `self.gameObj`|
