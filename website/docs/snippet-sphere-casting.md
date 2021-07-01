---
title: SphereCast
---

Documents are pages with a **sidebar**, a **previous/next navigation** and many other useful features.

## Example

```lua
local forward = self.transformThatYouAreRaycastingFrom:TransformDirection(UE.Vector3.forward);
local ret, hitInfo = UE.Physics.SphereCast(self.transformThatYouAreRaycastingFrom.position, 0.02, forward, 50, CL.LayerDefine.EnvLayerMask.value)

 if ret then
     print("im here!");
     print(hitInfo.collider)
     print(hitInfo.collider.name)
     print("ive made it!");
 end
```
