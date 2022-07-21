# Skill System



#### InteractTrigger component

Here shows:

- What will happen when you toggled those paramters on InteractTrigger component.
- How's the mana cost system work.
- What's the callback function we'll call when we pull the trigger.

For more examples, please check out the Mod Toolkit

| manaCost                |                                                              |                             |                                                              |                                                          |                                                              |
| ----------------------- | ------------------------------------------------------------ | --------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- | ------------------------------------------------------------ |
| instantSkill            |                                                              | √                           | √                                                            |                                                          |                                                              |
| skillChargeEndTime      |                                                              |                             | √                                                            | √                                                        | √                                                            |
| activateTime            |                                                              |                             |                                                              | √                                                        |                                                              |
|                         |                                                              |                             |                                                              |                                                          |                                                              |
| example                 | Continuous updated skill, such as telekinesis, sprint spear, slash katana | one shot skill, such as gun | can be shot and charged at the same time, such as storm pistol | can be charged into special state, such as thunder spear | Charged for an one shot release, such as fireball spell      |
| Real mana in calcuation | manaCostOnCharge                                             | manaCost                    | manaCost manaCostOnCharge                                    | manaCostOnCharge                                         | manaCostOnCharge                                             |
| callback                | OpenSkill UpdateSkill CloseSkill                             | UpdateSkill                 | UpdateSkill OnChargeBegin OnChargeReady OnChargeUpdate OnChargeRelease OnChargeCancel | OnActivateBegin OnActivateEnd OnActivateCancel           | OnChargeBegin->OnChargeReady->OnChargeUpdate->OnChargeRelease |

#### CollisionEffect component