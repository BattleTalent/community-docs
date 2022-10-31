# Create Combat Room

Here is an example of creating a battle room in a scene.



#### 1.Place StoneGateWithCombat

![](E:\xlua-battletalent-docs\website\docs\tutorials\6.create-a-combat-room\place.png)



#### 2.Set the size of the AreaTrigger under StoneGate to cover the entire room.

![](E:\xlua-battletalent-docs\website\docs\tutorials\6.create-a-combat-room\settrigger.png)



#### 3.Create the WaveGenerator file

![](E:\xlua-battletalent-docs\website\docs\tutorials\6.create-a-combat-room\wavegenerator.png)

Fill in the number of enemies generated per wave "SpawnNum", fill in the WaveGroup name to "Pool", specify the WaveGroup file.

![](E:\xlua-battletalent-docs\website\docs\tutorials\6.create-a-combat-room\fillwavegenerator.png)

Specify WaveGenerator to ConfigCombat under StoneGateWithCombat.

![](E:\xlua-battletalent-docs\website\docs\tutorials\6.create-a-combat-room\configcombat.png)



#### 5.Adjust the position of the generation points of EventToConfigCombat, you can increase or decrease the generation points as needed.

![](E:\xlua-battletalent-docs\website\docs\tutorials\6.create-a-combat-room\pointlist.png)



#### 6.Set the SpawnPointMgr under the SceneScriptNode node to the SpawnPoint of the TriggerBySpawnPoint node.

![](E:\xlua-battletalent-docs\website\docs\tutorials\6.create-a-combat-room\triggerbyspawnpoint.png)



#### 7.Done!