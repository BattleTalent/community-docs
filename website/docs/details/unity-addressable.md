# Unity Addressable and Predefined Path



### What is addressable

Addressable is the way we package files, unity program can read  later.

Unity can access those resources with addressable path associated with.

Which means your script can also use this system to load the resource you defined in the addressable path.

For example, you can add an resource at addressable path: "Test", then you can load this resource with ResourceMgr.Load("Test") from script.







### Predefined Path

In Battle Talent, we predefined some paths, so that you can create them in the corresponding system later. 

The rule behind this is very simple. For example, if you want to play an effect, once you create an effect object correctly, then you can just play them in game with single line of code:

```
EffectMgr. PlayEffect("effect-name", position, rotation)
```

| Object Type | Path       | System                 |
| ----------- | ---------- | ---------------------- |
| Weapon      | Weapon/    | ResourceMgr            |
| Script      | LuaScript/ | XLua                   |
| ICon        | ICon/      | ResourceMgr            |
| Effect      | Effect/    | EffectMgr              |
| Audio       | Audio/     | AudioMgr               |
| FlyObj      | FlyObj/    | FlyObject.CreateFlyObj |

