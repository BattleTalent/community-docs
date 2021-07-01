---
title: SphereCast
---

Casts a sphere along a ray and returns detailed information on what was hit.

This is useful when a Raycast does not give enough precision, because you want to find out if an object of a specific size, such as a character, will be able to move somewhere without colliding with anything on the way. Think of the sphere cast like a thick raycast. In this case the ray is specified by a start vector and a direction.

**Notes**: SphereCast will not detect colliders for which the sphere overlaps the collider. Passing a zero radius results in undefined output and doesn't always behave the same as [Raycast](snippet-ray-casting).

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
