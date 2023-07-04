---
title: Gaze info not showing
---

## Steps to reproduce

1. Spawn your weapon.
1. Hold out your hands towards it.
1. Empty blue info screen shows.

## Fix

DONT use the "Pull Gaze Name From GameObject" anymore. Weapon prefabs are no longer named with prefix due to the new prefixing system. The value's of Gaze obj should be set manually.
