---
title: enemies not following player on custom map

---
### Steps to reproduce

1. Create a custom map.
1. Add some enemies on it. 
1. Enemies do not know how to walk around objects and dont follow you.

### Fix 1

1. Make sure the meshes of your map have read/write enabled.

![Component](/img/tutorial-read-write-enabled.png)

### Fix 2

1. Make sure the correct ` layer` is set (occluder-static) for the meshes.

![Component](/img/tutorial-occluder-static.png)
