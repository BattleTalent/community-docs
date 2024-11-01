---
title: Get Lua Script
---

It gets another Lua script from an `InteractTriggerX`, `LuaComponent` or other component containing a Lua script.

## Example

The following example gets the `InteractWeapon` component from variable `self.gameObj` and stores it in `interactWeapon` variable.

```lua
local luaScript = self.componentWithLuaScript.script.self
```

## User Variables

| Component   | variable    |
| ----------- | ----------- |
| InteractTriggerX   | `self.componentWithLuaScript`|

## FAQ

###  What if I want to print a variable from another script?

```
local luaScript = self.componentWithLuaScript.script.self
print(luaScript.yourVariable)
```
