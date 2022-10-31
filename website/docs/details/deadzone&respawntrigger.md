## DeadZone & RespawnTrigger.

DeadZone is the lower limit of the character's active height. Once the character reaches DeadZone, the program sets the character to the last active RespawnTrigger position, which we do by adjusting the y value of the DeadZone position under the SceneScriptNode.

![](scene-deadzone&respawntrigger\deadzone.png)

The RespawnTrigger is activated by the BoxCollider trigger, which needs to be set to the right size to ensure it activates when the character passes through.

![](scene-deadzone&respawntrigger\respawntrigger.png)

![](scene-deadzone&respawntrigger\respawntrigger2.png)