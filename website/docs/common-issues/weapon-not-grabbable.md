---
title: Weapon not grabbable
---

## Steps to reproduce

1. Spawn your weapon.
1. Try to grab it.
1. Not grabbable.

## Fix 1

1. Make sure "hand side" in "AttachLine" component is not set to "None".

![Component](/img/tutorial-common-issues-hand-side-wrong.jpeg)

## Fix 2

1. If you have multiple Attachlines, make sure "Depend Attach Obj" in both "AttachLine"s aren't referring to each other.
