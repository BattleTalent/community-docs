# Using Codex Skills to Create Mods

ModToolkit includes seven player-facing Codex Skills for melee weapons, firearms, NPCs, Avatars, SkinMods, and songs. Open the correct repository folder and tell Codex what you want to create. Codex will load the relevant workflow and help produce the Unity assets.

## Before You Start

### Standard Mod Workflow

You will need:

- Codex.
- Unity Hub and Unity Editor `2020.3.48f1`.
- The BattleTalent Mod Toolkit repository.
- The model, textures, audio, or icon assets you want to use.

Open the **BTModToolkit repository root** in Codex, then open `ModProj` in Unity Hub.

You do not need to install the seven Mod Skills manually. They are stored in the repository's `.agents/skills` directory, and Codex discovers them automatically when the repository is opened.

### Using Tripo

The Tripo workflow also requires:

- Node.js 20 or later.
- Your own Tripo account.

Before using Tripo for the first time, double-click `Setup-TripoWorkflow.cmd` in the repository root. The script automatically:

- Checks Codex, Git, the Unity project, and the Node.js version.
- Installs or switches to Node.js 20+ through NVM or Winget when necessary.
- Installs the latest version of `tripo-cli`.
- Opens the Tripo browser authorization flow. API key authentication is also supported.
- Runs `tripo doctor`.
- Writes a check result without sensitive information to the ignored `.tripo-workflow/status.json` file.

After setup is complete, you can use Tripo directly from Codex. On the first invocation, Codex starts the Tripo CLI and opens the authorization page.

:::warning
Never send your Tripo API key, login token, or other account credentials through chat, and never commit them to Git.
:::

## How to Invoke a Skill

The most direct method is to type `$` in the Codex input field and select a Skill from the list:

```text
Use $battle-talent-melee-weapon-authoring to create a katana Mod using Assets/Resources/Katana/Sword_Mesh.fbx.
```

You can also describe the task in natural language. Codex will select the appropriate Skill based on your request:

```text
Create a katana Mod using Assets/Resources/Katana/Sword_Mesh.fbx.
```

In the Codex CLI or IDE extension, you can also use `/skills` to view the available Skills.

## Which Skill Should I Use?

| What You Want to Create | Skill to Use | Scope |
|---|---|---|
| Pistols, rifles, SMGs, or shotguns | `$battle-talent-gun-mod-authoring` | Gun prefabs, grips, triggers, projectiles, recoil, sounds, and effects |
| Knives, swords, axes, hammers, or clubs | `$battle-talent-melee-weapon-authoring` | Collision, damage, grips, mounting, and stab behavior |
| Standalone songs | `$battle-talent-song-mod-authoring` | Audio entries for the in-game music selection, not weapon sound effects |
| Player Avatars | `$projsao-avatar-mod-authoring` | Humanoid setup, slots, hand poses, and AvatarInfo |
| NPC characters | `$projsao-role-mod-authoring` | RoleModInfo, weapon slots, armor, AI, dismemberment, and grab points |
| Legacy skins using the original player rig | `$projsao-skin-mod-authoring` | SkinMods compatible with the game's original player skeleton |

If you are unsure whether a character should be an Avatar, an NPC Role, or a Skin, describe how it will be used and let Codex confirm the correct category.

## Quick Start

This tutorial has two workflows:

- **Standard workflow**: You already have a model and can create the Mod directly.
- **Tripo workflow**: You do not have a model yet and need to generate a concept image or 3D model first.

### Part 1: Create a Mod with Existing Assets

Use this workflow when you already have a model and do not need to use Tripo.

#### Step 1: Open the Project

Open the BTModToolkit root directory in Codex, then open `ModProj` in Unity.

#### Step 2: Select the Mod Skill

Use the Skill table above to choose the Skill for a melee weapon, firearm, song, Avatar, NPC, or Skin.

#### Step 3: Describe the Assets and Requirements

Copy the template below and replace the Skill, asset path, and requirements:

```text
Use $corresponding-mod-skill.

Goal: Create or modify the following Mod using the supplied assets.
Platform: Windows PC VR, Meta Quest, or both.
Assets: Paths to the model, textures, audio, or icons.
Requirements: Grip style, weapon behavior, character type, hand poses, and other requirements.
Complete the Mod assets and validation first. Do not build or install.
```

For example:

```text
Use $battle-talent-melee-weapon-authoring.

Goal: Create a katana Mod using Assets/Resources/Katana/Sword_Mesh.fbx.
Platform: Windows PC VR.
Requirements: One-handed, stab-capable, and preserve the model's original size.
Complete the Mod assets and validation first. Do not build or install.
```

#### Step 4: Let Codex Create the Mod

Codex reads the assets and creates the corresponding Unity prefabs, configuration, icon, and Addressables entries. If a required file is missing or an actual Unity error occurs, Codex will stop and explain the problem.

#### Step 5: Build, Install, and Test

After the assets and validation are complete, tell Codex when you are ready to test in the game:

```text
Build and install the Mod for Meta Quest now.
Report build, installation, Mod discovery, and in-game testing as separate results.
```

### Part 2: Generate Assets with Tripo and Create a Mod

Use this workflow when you do not have a model and need to generate a 3D asset from a concept image or an existing image.

#### Step 1: Open the Project

Open the BTModToolkit root directory in Codex, then open `ModProj` in Unity.

#### Step 2: Specify Both Tripo and the Final Mod Type

Tripo generates the asset, while the corresponding authoring Skill creates the final Mod. Include both Skills in your prompt.

When you do not have a concept image:

```text
Use $tripo-battletalent-workflow,
then use $battle-talent-melee-weapon-authoring after the model is approved to create the weapon Mod.

Goal: Generate a katana and turn it into a Windows PC VR melee weapon Mod.
First provide the concept image generation plan and credit cost. Wait for my approval before generating.
After the concept image is generated, wait for me to approve a specific version, then provide the image-to-3D plan and credit price.
Do not submit the image-to-3D task until I approve it. Do not use text-to-3D.
After the model is approved, continue through the Unity Mod workflow. Do not build or install automatically.
```

If you already have a concept image, use:

```text
Use $tripo-battletalent-workflow,
then use $projsao-avatar-mod-authoring after the model is approved to create an AvatarMod.

Platform: Meta Quest.
Use the attached concept image to generate the model.
First provide the image-to-3D plan and credit cost, then wait for my approval before submitting the task.
After the model is approved, continue through the AvatarMod workflow. Do not build or install automatically.
```

#### Step 3: Confirm the Concept and Credit Usage

Follow Codex's prompts and confirm:

1. Whether Tripo should be used, along with the target platform and concept image credit cost.
2. The specific concept image version.
3. The image-to-3D plan, texture quality, and credit price.
4. The generated 3D model.

Avatars and NPC Roles may also require you to confirm whether an existing skeleton binding should be reused or a new binding should be generated. Weapons and static props generally do not require character rigging.

#### Step 4: Continue to Unity Mod Creation

After the model is approved, the corresponding Skill creates the Unity prefabs, configuration, icon, and Addressables entries.

#### Step 5: Build, Install, and Test

When you are ready to test in the game, tell Codex:

```text
Build and install the Mod for Meta Quest now.
Report build, installation, Mod discovery, and in-game testing as separate results.
```

## Example Prompts

### Generate a Weapon with Tripo and Create a Mod

```text
Use $tripo-battletalent-workflow to generate a katana,
then use $battle-talent-melee-weapon-authoring after the model is approved to create a weapon Mod.

Platform: Windows PC VR.
First provide the concept image generation plan and credit cost, then wait for my approval before generating.
After the concept image is generated, wait for me to approve a specific version before submitting the image-to-3D task.
Do not use text-to-3D. Do not build or install.
```

### Generate a Model from an Existing Concept Image

```text
Use $tripo-battletalent-workflow.
I will provide an approved concept image. Use it to generate a character model,
then use $projsao-avatar-mod-authoring after the model is approved to create an AvatarMod.

First provide the image-to-3D plan and credit cost, then wait for my approval before submitting the task.
Preserve the model's original size. Do not automatically re-rig a model that I have already declared as rigged.
```

### Generate a Pistol Concept First, Then Create the Gun

```text
Use $tripo-battletalent-workflow.
First generate a sci-fi pistol concept image for review. Do not generate the 3D model immediately.
After I approve a specific concept image, provide the image-to-3D plan and credit cost.
After the model is approved, use $battle-talent-gun-mod-authoring to create the firearm Mod.

Platform: Meta Quest.
Complete Unity and Addressables validation first. Do not install automatically.
```

### Create a Melee Weapon

```text
Use $battle-talent-melee-weapon-authoring.
Turn the model in D:\MyAssets\Katana into a one-handed, stab-capable katana Mod.
Target Windows PC VR and preserve the model's imported size.
Do not build, install, or delete any existing examples.
```

### Create a Firearm

```text
Use $battle-talent-gun-mod-authoring.
Turn the model in D:\MyAssets\ArcRifle into a two-handed rifle Mod.
Target Meta Quest, use single-shot firing, and launch projectiles along the muzzle's forward direction.
Preserve the model's original size and use the current Gun template.
Complete asset creation and validation first. Do not build or install.
```

### Create a Song Mod

```text
Use $battle-talent-song-mod-authoring.
Create a SongMod using D:\MyAssets\NeonSky\song.mp3 and icon.png.
Set the display name to Neon Sky and target both Windows PC VR and Meta Quest.
The audio and icon are licensed for redistribution.
Complete the Music configuration and Addressables validation. Do not build.
```

### Create an Avatar

```text
Use $projsao-avatar-mod-authoring.
The model at D:\MyAssets\Ranger\ranger.fbx already has a valid Humanoid rig. Continue directly with Avatar creation.
Preserve the model's original size, and configure the hand and back slots, default hand poses, and weapon grip poses.
Target Meta Quest. Do not build or install yet.
```

### Create an NPC

```text
Use $projsao-role-mod-authoring.
Turn the model at D:\MyAssets\Goblin\goblin.fbx into a GoblinRaider NPC RoleMod.
The model is already rigged. Preserve its original size.
Use the default AI and one one-handed weapon slot. Armor and dismemberment are not required.
Complete the Role prefab, RoleModInfo, and Addressables validation.
```

### Create a Skin

```text
Use $projsao-skin-mod-authoring.
Turn the model in D:\MyAssets\DarkKnight into a legacy player SkinMod.
The model is already bound to the game's original player rig and includes a skeleton root named root.
Preserve its original size and configure first-person head hiding and shadows.
Complete Unity and Addressables validation first. Do not build.
```

## Prompt Checklist

| Detail | Example |
|---|---|
| Create or modify | "Create a new Mod" or "Modify `Assets/Build/KatanaSlash`" |
| Mod type | Firearm, melee weapon, song, Avatar, NPC, or Skin |
| Target platform | Windows PC VR, Meta Quest, or both |
| Asset path | `D:\MyAssets\Model` |
| Key behavior | Two-handed grip, stab behavior, single-shot firing, default AI, or custom hand poses |
| Delivery scope | Assets only, build, install, or build and install |

If you do not want the model size to change, add:

```text
Preserve the model's imported size and units. Do not rescale it to match a template.
```

If you want to change the size, add:

```text
Set the model scale to 2.
```

If you only want to review the generated assets before delivery, add:

```text
Complete Unity asset creation and validation first. Do not build or install.
```
