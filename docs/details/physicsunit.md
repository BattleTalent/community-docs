# PhysicsUnit





### Access the physics world



Battle Talent is fully driven by physics, so every collider in this game, we can find the logic object they belonged to. That is **PhysicsUnit** for. Btw, if an object doesn't have **PhysicsUnit** attached to, then we treat it as environment.

Here is an example to check what we got by a collider or rigidbody:

```
local pu = CL.PhysicsUnit.GetPhysicsUnit(collider)
if (pu == nil || pu:IsScene()) then
    print("Env")
else
    print(pu.unitType)
end

-- by default, we use Bottom Up Method, which means, we may get the sub object of another object
-- if we want to get the root object, then we should use GetPhysicsUnitTopDown instead
local puRB = CL.PhysicsUnit.GetPhysicsUnitTopDown(rigidbody.transform)
if (puRB == nil || puRB:IsScene()) then
    print("Env")
else
    print(puRB.unitType)
end
```



**PhysicsUnit** can be parenting. For example, a character itself is a **PhysicsUnit**(InteractRole), and the weapon it holding is also a **PhysicsUnit**(InteractWeapon). So when we got a collider, there's two way to know what it is. For example, if you got the collider of the weapon holding by a character. If we called **GetPhysicsUnitTopDown**, it will return the character(holding the weapon). If we called **GetPhysicsUnit**, it will return the weapon itself.



### Predefined PhysicsUnit Types

| enum name      | class name                                                   |
| :------------- | :----------------------------------------------------------- |
| FlyObject      | [FlyObject](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_fly_object.html) |
| SceneObject    | [SceneObject](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_scene_object.html) |
| InteractRole   | [FullCharacterControl](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_full_character_control.html) |
| InteractWeapon | [InteractWeapon](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_interact_weapon.html) |
| PlayerRole     | [PlayerUnit](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_player_unit.html) |
| PlayerHand     | [PhysicsHand](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_physics_hand.html) |