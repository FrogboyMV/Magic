# Magic

## Introduction

So who likes magic?  No one?  Oh well, I guess I’ve got nothing to share then.  Wait, what’s that?  Oh, sorry.  I’ve must have heard you wrong.  You make RPGs, of course you like magic!  Who doesn’t?

RPG Maker gives you some nice tools to build that RPG you’ve always wanted to make and the Skills system is fairly robust.  But there’s a problem and it’s actually kind of a big one.  All of the actor’s typically feel, well, samey.  I mean, I have this Fighter.  He uses skills which cost MP to perform special attacks until his MP runs out.  I also have a Mage.  She uses skills which cost MP to cast spells until her MP runs out.  In fact, all of my actors follow this same exact mechanic.  It would be much cooler if actor of different flavor felt and played differently from one another and had their own unique mechanics to work with.  There are plugins out there to change up the Skill system but you end up with the same issue.  All of your actor now use this new system but your Fighter still functions pretty much the same as your Mage.  You could try to add in several of these plugins that change the Skill system in different ways but that sounds like a risky proposition.  Conflicts seem likely in this scenario.

Enter Frog Magic, the one-stop shop for all of your skill/magic needs.  With my latest plugin, you’ll be able to create a wide range of class mechanics to make your characters fun, unique and memorable.  So what can you make?  How about a Fighter who has range of various attacks that can be used At Will, operate on a cool-down every few turns or more powerful maneuvers usable a certain number of times per day?  Alongside this Fighter, you can have a Wizard who has spells slots like in Dungeons & Dragons or Final Fantasy 1.  Maybe your Wizard only learns a few spells but can buy scrolls to add to her spellbook.  But hey, you also want a Sorcerer class who is born with natural magic ability.  He can’t learn learn spells from scrolls and only gets a small subset of his choosing but is graced with a larger allotment of spell slots per day to work with.  Your cleric doesn’t even need to choose which spells he knows or learn them from scrolls as his god has already bestowed on him this knowledge.  He does need to choose which spells to prepare each day and can change his memorized spells as situation calls for.  Perhaps your Druid or Mimic can only learn spells from the creatures you encounter out in the wild.  When she witnesses a spell or ability being used in battle enough times, she’ll learn it herself and can harness the same power.  How about yet another class who can equip magical items that teach them skills by absorbing the essence of slain enemies (like Espers in Final Fantasy 6)?  Or maybe hybrid classes like the Paladin who have a small list of spells that use slots and several class abilities that are usable a certain number of times per day?  That would be crazy right?

Not any longer.  If you know me and my work, you’ll know that my plugins are powerful,  versatile and allow you to combine properties together to make your game totally original.  Frog Magic will give you the power to add the following to your game.

## Features

Each class can be assigned any number of Skill Types that use whatever skill or magic system you create.
* 3 different caster types: prepared, spontaneous and hybrid.
* 3 different resources: spell slots, magic points and powers.
* Actors can automatically know none, all or only zero-level spells.
* Spellbooks and schools of magic.  A class skill type can be restricted by schools or expanded beyond their normal spellbook.
* Spell levels.  Each spell in a spell list has a level which is used to determine when a class is able to learn it.  The same spell doesn't need to be the same level for every class.
* Define number of spells known, prepared and/or retrieved per day.  If you’ve ever played D&D and know what 4/4/3/2/1 represents, you know what I’m talking about here.
* Allow or restrict acquiring spells by player choice (player choice), items (learning from scrolls), exposure (learning by seeing the spell used in battle) and essence (slaying monsters while wearing special equipment).
* Spell components. Does that spell require Eye of Newt?  Your heroes better go find some newt.
* Mix and match all of the above however you want. Lots of room to add new capabilities in the future.  Feel free to make requests.


## How to Use

Here is a list of all of the plugin paramters and what they do.  As a quick note of reference, the terms Spell, Magic and Power all typically mean the same thing.  They are simply Skills.

**Save Magic Object** - Setting this to true allows you to modify the $frogMagic object, which contains all of the information within the plugin parameters, when the player saves the game. By default, this object is built from the plugin parameters when a new game is started or a saved game is loaded. This is usually what you’ll want. If, for some reason, you need to alter this data in-game and have those changes persist until the end of the game, you’ll need to turn this option on.

###Options

**Sort Order** - Skills now have levels, even if they use the traditional MP system.  So it makes sense to sort them by level so that you can place the most powerful or least powerful skills on top.  Use this option to choose which way you'd like them sorted for the player.

**Cost Indicator** - Configure how the cost for spell slots, magic points and powers are displayed in the skill selection window.
* **Spell Slots** - Style the Spell Slot indicator.
  * **Format** - Text format for this cost indicator. Use %1 to indicate the slot level.
  * **Color** - Text color for this indicator.  Choose one of the default colors or enter a hex code.
  * **Font Size** - Font size in pixel height.
* **Magic Points** - Style the Magic Point indicator.
  * **Format** - Text format for this cost indicator. Use %1 to indicate the slot level.
  * **Color** - Text color for this indicator.  Choose one of the default colors or enter a hex code.
  * **Font Size** - Font size in pixel height.
* **Powers** - Style the Powers indicator.
  * **Format Per Day** - Text format for this cost indicator. Use %1 to indicate the uses per day.
  * **Format Per Encounter** - Text format for this cost indicator. Use %1 to indicate the uses per encounter.
  * **Format Cooldown** - Text format for this cost indicator. Use %1 to indicate the number of rounds between uses.
  * **Format At Will** - Text format for this cost indicator.
  * **Color** - Text color for this indicator.  Choose one of the default colors or enter a hex code.
  * **Font Size** - Font size in pixel height.

**Spell XP** - By default, every time an actor uses a skill, it's XP value will increase by +1.  If you wish, you can scale the damage that each skill inflicts or heals based on a formula so that the more experience an actor has using a skill increases it's potential damage output.
  * **Enabled** - Set this to true if you want skills to power up based on number of times used by an actor.
  * **Damage Formula** - Formula run on the damage dealt by a skill. DMG = damage, XP = # times skill used by actor.
  * **Max XP** - Set the maximum XP that a skill can acquire. Set to 0 if there's no maximum.

**Steps For Turn** - Set the number of steps on map it takes to register as a turn for out-of-battle purposes.  Certain effects, like poison, may continue on after battle while the player is walking around on the map.  You can override the default value of 20 steps here.  This plugin also contains functionality in this area.  Powers that have a cooldown effect and can be used, say once every 3 rounds, will use this to determine when this Power is usable again if it used outside of combat.

**Recover Power** - Powers at the Encounter frequency, when used out of battle, recover after this many turns.  Using the supplied Steps For Turn, if a skill is usable 1/encounter is used outside of battle, it will recover after this many turns while walking around on the map.

**Battle Status Window** - Configure the size of the HP, MP and TP display areas in the Actor Battle Status window.  Spell slots tend to take up more room than is normally available so this allows you to adjust this area to suit your game.
  * **Gauge Area Width** -  Width in pixels of the gauge area in the Actor Battle Status window.
  * **HP Area Percentage** - Width as a percentage of the HP area.
  * **MP Area Percentage** - Width as a percentage of the MP area.
  * **TP Area Percentage** - Width as a percentage of the TP area. This value is ignored if TP is turned off.
  * **Spacing** - Width as a percentage of the space between each area.
  * **Font Size** - Font size in pixel height.

**Exposure Log Text** - Text format for when a capable actor learns spells through exposure. %1 = Actor, %2 = Percentage Learned, %3 = Skill.  This text appears in the battle log and can contain special characters.

**Obtain Essence Text** - Text format for obtaining essence after battle. %1 = Amount Received, %2 Essence Name.

**Learn From Essence Text** - Text format for learning a spell by acquiring essence. %1 = Actor Name, %2 - Skill.
