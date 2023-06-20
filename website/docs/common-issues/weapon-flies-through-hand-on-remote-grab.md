---
title: Weapon flies through hand on remote grab
---

## Steps to reproduce

1. Spawn your weapon.
1. Remote grab the weapon.
1. See that it flies through your hand.

## Fix

The issue is with the attachline.
You need to have values for both the line start and end.
Put the attach line in the middle of the handle, and then figure it out. 
