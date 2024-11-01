---
title: CL - PhysicsHelper - IgnoreCollisions
---

Toggle collisions between 2 colliders so they can freely move past each other.

## Example

Ignore collisions
```lua
CL.PhysicsHelper.IgnoreCollisions(collider1, collider2, true)
```

Reenable collisions
```lua
CL.PhysicsHelper.IgnoreCollisions(collider1, collider2, false)
```

## User Variables


| Component                       | variable         |
|---------------------------------|------------------|
| Collider (or list of colliders) | `self.collider1` |
| Collider (or list of colliders) | `self.collider2` |
