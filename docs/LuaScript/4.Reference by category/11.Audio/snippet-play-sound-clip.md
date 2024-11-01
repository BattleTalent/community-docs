---
title: CL - AudioMgr - PlaySoundClip
---

Play a sound clip at a specific position.

## Example

Play sound
```lua
local volume = 0.5
local pitch = 1.0
CL.AudioMgr.Instance:PlaySoundClip(self.soundName, self.soundPosition, false, volume, pitch)
```

Play sound with randomized pitch
```lua
local volume = 0.5
local randomPitch = (math.random() + math.random(70, 130)) / 100
CL.AudioMgr.Instance:PlaySoundClip(self.soundName, self.soundPosition, false, volume, randomPitch)
```

## User Variables


| Component                      | variable             |
|--------------------------------|----------------------|
| Addressable name of the sound. | `self.soundName`     |
| Vector3                        | `self.soundPosition` |


