# Scripting in Lua





#### Basic Classes

- [Scheduler](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_scheduler.html)
- [LanguageMgr](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_language_mgr.html)
- [EffectMgr](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_language_mgr.html)
- [AudioMgr](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_audio_mgr.html)
- [ResourceMgr](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_resource_mgr.html)
- [GameDataMgr](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_game_data_mgr.html)
- [XLuaMgr](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_x_lua_mgr.html)

#### GamePlay Related Classes

- [HitInfoConfig](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_hit_info_config.html)
- [UnlockContentConfig](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_unlock_content_config.html)
- [AIProxy](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_a_i_proxy.html)
- [CharacterCombatAttr](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_character_combat_attr.html)
- [FullBodyMuscleState](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_full_body_muscle_state.html)
- [BuffMgr](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_buffer_mgr.html)
- [InteractBase](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_interact_base.html)
- [HUDMgr](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_hud_mgr.html)
- [PlayerDataMgr](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_player_data_mgr.html)
- [LevelDataMgr](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_level_data_mgr.html)

#### Lua Host Classes

- [LuaBehaviour](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_lua_behaviour.html)
- [InteractTriggerX](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_interact_trigger_x.html)
- [FlyObjectX](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_fly_object_x.html)

For lua host script, check the LuaFunction in each class, that's the event they will receive.

For example, InteractTriggerX has luaCloseSkill, then it'll recive CloseSkill Event

exceptional case:

| LuaFunction name | actual event name |
| :--------------: | :---------------: |
|    AwakeInit     |       Awake       |
|    StartInit     |       Start       |

For example, InteractTriggerX has luaAwakeInit, but it'll receive Awake Event instead of AwakeInit

#### Commonly used components

| Basic Components                   | Function                                                     |
| ---------------------------------- | ------------------------------------------------------------ |
| InteractWeapon                     | represent the entity of weapon                               |
| InteractTrigger / InteractTriggerX | define how weapon works when player pressing trigger button  |
| StabObj                            | define how your weapon penetrate others                      |
| RagdollHitInfoObj                  | define how to calculate damage                               |
| RagdollHitInfoRef                  | it'll define a group of RagdollHitInfoObj as a whole, so that they won't hit multiple times |
| RagdollInit                        | define intertia tensor and center mass, if it's zero, then it'll not take effect on the rigidbody |
| CollisionEffect                    | simulate physics collision effect                            |
| AttachLine / AttachPoint           | define how player grabs it                                   |
| Mount Point                        | define how player put it in the pocket                       |
| FlyObj / FlyObjX                   | attached on Fly Object, such as bullet, magic                |



#### Tips for scripting in lua:

- namespace of CShape code is CS in lua
- namespace [CrossLink](https://battletalent.github.io/BTModToolkit/namespace_cross_link.html) is CL in lua, CL == CS.CrossLink
- namespace UnityEngine is UE in lua, UE == CS.UnityEngine
- calling a static function should use '.' instead of ':' in lua
- recommend using [ZeroBrane Studio](https://studio.zerobrane.com/) as lua editor
- use IsNullOrDestroyed for null checking

#### Related Manual

- [Unity manual](https://docs.unity3d.com/2019.4/Documentation/Manual/)
- [Lua manual](https://www.lua.org/manual/5.1/)
- [Xlua](https://github.com/Tencent/xLua/blob/master/README_EN.md)







