# InteractTrigger - Skill System





The chart below shows what different combinations of these parameters mean:

PS: For more examples, please check out the project

|                         |                                                              |                             |                                                              |                                                          |                                                              |
| ----------------------- | ------------------------------------------------------------ | --------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- | ------------------------------------------------------------ |
| instantSkill            |                                                              | √                           | √                                                            |                                                          |                                                              |
| skillChargeEndTime      |                                                              |                             | √                                                            | √                                                        | √                                                            |
| activateTime            |                                                              |                             |                                                              | √                                                        |                                                              |
|                         |                                                              |                             |                                                              |                                                          |                                                              |
| example                 | Continuous updated skill, such as telekinesis, sprint spear, slash katana | one shot skill, such as gun | can be shot and charged at the same time, such as storm pistol | can be charged into special state, such as thunder spear | Charged for an one shot release, such as fireball spell      |
| Real mana in calcuation | manaCostOnCharge                                             | manaCost                    | manaCost manaCostOnCharge                                    | manaCostOnCharge                                         | manaCostOnCharge                                             |
| callback                | OpenSkill UpdateSkill CloseSkill                             | UpdateSkill                 | UpdateSkill OnChargeBegin OnChargeReady OnChargeUpdate OnChargeRelease OnChargeCancel | OnActivateBegin OnActivateEnd OnActivateCancel           | OnChargeBegin->OnChargeReady->OnChargeUpdate->OnChargeRelease |

#### 