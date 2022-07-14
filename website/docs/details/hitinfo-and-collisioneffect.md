# HitInfo and CollisionEffect





#### CollisionEffect component

CollisionEffect is used for defining the physics collision material of an object. What you need to do is to attach this script to a collider, then fill in the material type it belongs to.

Here is a table of the built-in material name predefined.

| Collision Material Name | Used For                     |
| ----------------------- | ---------------------------- |
| Weapon                  | Blade                        |
| WeaponBlunt             | Hammer, Metal, Handle        |
| Metal                   | Environment                  |
| Brick                   | Environment                  |
| Wood                    | Environment or Wooden Weapon |

#### HitInfo component

HitInfo is used for defining the damage each collider part can cause. Just the same as CollisionEffect, what you need to do is to add a RagdollHitInfoObj component then fill in the HitInfo name. And you also can define your own HitInfo.

Notice that you may need to use RagdollHitInfoRef component to bind multiple RagdollHitInfoObj as one hit identity, otherwise it will cause multiple hits at a time.

Here is a table of the built-in HitInfo name predefined. (the number value maybe a bit different from the game, since battle talent is still under developing)

| Name            | VelocityMlp | DamageMlp | DamageThrough | DamageCrit | StabMlp | HitMlp | HitRandom | StabDamage | BreakDefenceMlp | HitBackMlp | KnockoutFactor | DizzyFactor | StiffValue |
| --------------- | ----------- | --------- | ------------- | ---------- | ------- | ------ | --------- | ---------- | --------------- | ---------- | -------------- | ----------- | ---------- |
| Sword           | 1.2         | 10        | 0.5           | 1.5        | 1.5     | 115    | 0.2       | 120        | 1               | 90         | 0.1            | 0           | 2.8        |
| LightSaber      | 1.2         | 35        | 0.5           | 1.5        | 1.5     | 120    | 0.2       | 120        | 1               | 90         | 0.1            | 0           | 2.8        |
| Wood            | 1.2         | 5         | 1.5           | 1.5        | 1       | 125    | 1         | 0          | 1.2             | 90         | 0.5            | 0.5         | 2.8        |
| Brick           | 1.2         | 5         | 1.5           | 1.5        | 1       | 130    | 1         | 0          | 1.2             | 90         | 0.5            | 0.5         | 2.8        |
| Metal           | 1.2         | 7         | 1.2           | 1.5        | 1       | 125    | 1         | 0          | 1.3             | 112.5      | 0.3            | 0.4         | 2.8        |
| Fist            | 1.2         | 4         | 1.2           | 1.5        | 1       | 125    | 1         | 0          | 1               | 90         | 0.3            | 0.4         | 2.8        |
| Hammer          | 1.2         | 6         | 1.5           | 1.5        | 1       | 130    | 0.1       | 0          | 2               | 112.5      | 0.4            | 0.4         | 3.6        |
| SingleHammer    | 1.2         | 8         | 2             | 1.5        | 1       | 125    | 0.1       | 0          | 2               | 112.5      | 0.45           | 0.45        | 3.6        |
| Axe             | 1.2         | 12        | 1             | 1.5        | 1.8     | 120    | 0.1       | 120        | 2               | 90         | 0.1            | 0           | 3.6        |
| Dagger          | 1.3         | 5         | 0.5           | 2          | 4.5     | 115    | 0.2       | 120        | 0.8             | 90         | 0.1            | 0           | 1.6        |
| Katana          | 1.2         | 12        | 0.1           | 1.3        | 1       | 115    | 0.2       | 120        | 1               | 90         | 0.1            | 0           | 1.6        |
| Rapier          | 1.2         | 8         | 0.2           | 1.5        | 3       | 115    | 0.1       | 120        | 1.5             | 90         | 0.1            | 0           | 2.8        |
| Shield          | 1.2         | 8         | 1.2           | 1.5        | 1       | 125    | 0.1       | 0          | 2               | 90         | 0.3            | 0.4         | 2.8        |
| Spear           | 1.3         | 7         | 0.8           | 1.8        | 2.5     | 120    | 0.1       | 120        | 1.4             | 112.5      | 0.1            | 0           | 2.8        |
| Stick           | 1.2         | 6         | 1             | 2          | 1       | 125    | 1         | 0          | 1.5             | 90         | 0.5            | 0.6         | 2.8        |
| SwordWind       | 1.2         | 12        | 0.5           | 1.5        | 1.1     | 115    | 0.1       | 120        | 1               | 90         | 0.1            | 0           | 2.8        |
| SwordWind_Slash | 1.2         | 20        | 0.5           | 1.5        | 1.1     | 115    | 0.5       | 0          | 1               | 112.5      | 0.5            | 0           | 2.8        |
| Wand            | 1.2         | 6         | 1             | 2          | 1       | 120    | 0.8       | 0          | 1.2             | 90         | 0.5            | 0.6         | 2.8        |
| Bullet          | 1.2         | 3         | 0.4           | 4.5        | 1       | 115    | 0.1       | 0          | 1               | 90         | 0.1            | 0           | 2.8        |
| Explode         | 1.2         | 40        | 1             | 1          | 1       | 115    | 0.1       | 0          | 1               | 400        | 1              | 0           | 2.8        |
| Arrow           | 1.2         | 6         | 0.5           | 6          | 2       | 120    | 0.5       | 120        | 1               | 90         | 0.1            | 0           | 2.8        |
| MagicBall       | 1.2         | 12        | 0.5           | 4          | 1       | 115    | 0.1       | 0          | 1               | 90         | 0.3            | 0           | 2.8        |
| Flame           | 1.2         | 5         | 0.6           | 2          | 1       | 120    | 0.1       | 0          | 1               | 112.5      | 0.3            | 0           | 2.8        |
| IceSword        | 1.2         | 20        | 0.5           | 1.5        | 1.5     | 115    | 0.2       | 120        | 1               | 90         | 0.1            | 0           | 2.8        |
| Laser           | 1.2         | 15        | 0.6           | 2          | 1.5     | 115    | 0.1       | 0          | 1               | 90         | 0.3            | 0           | 2.8        |
| FlySlash        | 1.2         | 15        | 0.5           | 1          | 1.3     | 115    | 0.1       | 0          | 1               | 90         | 0.3            | 0           | 2.8        |
| FlyString       | 1.2         | 15        | 0.5           | 1          | 1.3     | 115    | 0.1       | 0          | 1               | 90         | 0.3            | 0           | 2.8        |
| FlyThunder      | 1.2         | 3         | 0.5           | 1          | 1.3     | 115    | 0.1       | 0          | 1               | 140        | 0.1            | 0           | 2.8        |
| FlyOriFire      | 1.2         | 15        | 0.5           | 4          | 1       | 115    | 0.1       | 0          | 1               | 90         | 0.3            | 0           | 2.8        |
| TrackBall       | 2.2         | 10        | 1             | 1.5        | 1.3     | 115    | 0.1       | 0          | 1               | 90         | 0.6            | 0           | 2.8        |
| Spike           | 1.2         | 5         | 1             | 1.5        | 2       | 115    | 0.1       | 120        | 1               | 112.5      | 0.3            | 0           | 2.8        |
| SpikeSmall      | 1.2         | 3         | 1             | 1.5        | 2       | 115    | 0.1       | 120        | 1               | 112.5      | 0.3            | 0           | 2.8        |
| Drone           | 1.2         | 22.5      | 1             | 1          | 1       | 115    | 0.1       | 0          | 1               | 150        | 0.3            | 0           | 2.8        |
| DropObj         | 1.2         | 50        | 1             | 2          | 1       | 115    | 2         | 120        | 1               | 150        | 1              | 0           | 2.8        |
| KO              | 1.2         | 20        | 1             | 2          | 1       | 115    | 2         | 0          | 1               | 120        | 1              | 0           | 2.8        |
