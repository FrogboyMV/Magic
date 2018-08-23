# Magic

## Introduction

So who likes magic?  No one?  Oh well, I guess I’ve got nothing to share then.  Wait, what’s that?  Oh, sorry.  I’ve must have heard you wrong.  You make RPGs, of course you like magic!  Who doesn’t?  And even if you don't, you'll still like this plugin.

RPG Maker gives you some nice tools to build that RPG you’ve always wanted to make and the Skills system is fairly robust.  But there’s a problem and it’s actually kind of a big one.  All of the actor’s typically feel, well, samey.  I mean, I have this Fighter.  He uses skills which cost MP to perform special attacks until his MP runs out.  I also have a Mage.  She uses skills which cost MP to cast spells until her MP runs out.  In fact, all of my actors follow this same exact mechanic.  It would be much cooler if actor of different flavor felt and played differently from one another and had their own unique mechanics to work with.  There are plugins out there to change up the Skill system but you end up with the same issue.  All of your actor now use this new system but your Fighter still functions pretty much the same as your Mage.  You could try to add in several of these plugins that change the Skill system in different ways but that sounds like a risky proposition.  Conflicts seem likely in this scenario.

![snap01](/img/snap01.PNG)

Enter Frog Magic, the one-stop shop for all of your skill/magic needs.  With my latest plugin, you’ll be able to create a wide range of class mechanics to make your characters fun, unique and memorable.  So what can you make?  How about a Fighter who has range of various attacks that can be used At Will, operate on a cool-down every few turns or more powerful maneuvers usable a certain number of times per day?  Alongside this Fighter, you can have a Wizard who has spells slots like in Dungeons & Dragons or Final Fantasy 1.  Maybe your Wizard only learns a few spells but can buy scrolls to add to her spellbook.  But hey, you also want a Sorcerer class who is born with natural magic ability.  He can’t learn spells from scrolls and only gets a small subset of his choosing but is graced with a larger allotment of spell slots per day to work with.  Your cleric doesn’t even need to choose which spells he knows or learn them from scrolls as his god has already bestowed on him this knowledge.  He does need to choose which spells to prepare each day and can change his memorized spells as situation calls for.  Perhaps your Druid or Mimic can only learn spells from the creatures you encounter out in the wild.  When she witnesses a spell or ability being used in battle enough times, she’ll learn it herself and can harness the same power.  How about yet another class who can equip magical items that teach them skills by absorbing the essence of slain enemies (like Espers in Final Fantasy 6)?  Or maybe hybrid classes like the Paladin who have a small list of spells that use slots and several class abilities that are usable a certain number of times per day?  That would be crazy right?

Not any longer.  If you know me and my work, you’ll know that my plugins are powerful, versatile and allow you to combine properties together to make your game totally original.  Frog Magic will give you the power to add the following to your game.

![snap02](/img/snap02.PNG)


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

![snap03](/img/snap03.PNG)


## How to Use

Here is a list of all of the plugin parameters and what they do.  As a quick note of reference, the terms Spell, Magic and Power all typically mean the same thing.  They are simply Skills.

**Save Magic Object** - Setting this to true allows you to modify the $frogMagic object, which contains all of the information within the plugin parameters, when the player saves the game. By default, this object is built from the plugin parameters when a new game is started or a saved game is loaded. This is usually what you’ll want. If, for some reason, you need to alter this data in-game and have those changes persist until the end of the game, you’ll need to turn this option on.

### Options

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


  
### Class Config

This is where you'll configure your class's skill and magic systems.  These parameters will define how skills are learned, prepared and used as well as what resource they utilize and what spell list they have access to.

**Desc** - Short description so that you know what this is. Not required but highly recommended.

**Class Id** - Class to configure.

**Magic** - Magic systems that this class has access to.  You can attach any number of skill systems to this actor just so long as each one has a unique Skill Type Id.
* **Desc** - Short description so that you know what this is. Not required but highly recommended.
* **Skill Type Id** - Skill Type Id associated with this skill/magic system.
* **Caster Type** - Define if and how spells are prepared.  d20 magic systems such as Dungeons & Dragons have different mechanics than your typical JRPG.  A spell-caster may be able to learn every spell known to man but, of course, they usually don't have access to any spell at any time.  Each morning, aftter sleeping for the night, a caster has to memorize or otherwise prepare which spell they think they will need that day.  Other casters may not have such wide array of spell but don't have to micro-manage their accessible spells.  If you've played D&D 3.5 and know the difference between a Wizard, Sorcerer and Spirit Shaman is, you'll know what these options do.
  * **Prepared** - A prepared caster will usually have access to most or all of their spell list.  Each day, they will choose exactly which spells and how many of each they will be able to cast that day.  Say your Wizard has the following slots available: 4/3/3/2.  This means that they have 4 zero-level spells, 3 first level spells, 3 second and 2 third.  If they choose to memorize Fireball and Haste with their 3rd level spells, they will be able to cast each one once that day.  Once a spell is cast, it is gone.  If a prepared caster wants to cast the same spell more than once that day, they will have to prepare more than one of said spell.
  * **Spontaneous** - A spontaneous caster is usually more restricted in the number of spells they can learn but they don't need to worry about which spells to prepare for the day.  They have their subset of spells that they know and can cast them however is needed.  When a spontaneous caster uses a spell, it stays on their list so if their 3rd level spells are Fireball and Haste, they can cast all Fireballs, all Hastes or any combination of the two.  Due to their lack of versatility, they usually get to cast a greater number of spells per day but that's left up to you to decide.
  * **Hybrid** - A hybrid caster take the best of both worlds.  They usually can learn, or just know, most or all of their spell list and prepare spells much like a prepared caster.  They can only prepare one of a given spell, though, because like a spontaneous caster, the spell doesn't get used up when cast.  They can cast the same spell over and over again as long as they have a slot left to do so.  If you use all three types of casters in your game, you'll normally balance this out by giving them a lot of spell slots like a spontaneous caster but have them be able to prepare less spells than a prepared caster.  
* **Resource** - Casting spells or using special abilities will usually have some kind of finite resource that's expended.  As of now, there are three different ones to choose from.
  * **Spell Slots** - Spell slots are a number of spells for each level starting at level zero.  A first level Wizard may only get 3 zero-level and 1 first level spell but as they level up, they'll continue to gain more and more lower level spells while acquiring access to higher level spells as well.If you've ever played D&D or Final Fantasy 1, they work like this.
  * **Magic Points** - You already know what magic points are if you develop RPG Maker games.  They are the default system.  This plugin expands the default system, however.  Like all of the systems here, spells/skills have levels and the magic point system is no different.  You are free to continue to use the default system without spell levels if you don't configure a class in this section, by doing so, you gain all of the other functionality available here applied to a magic point system.
  * **Powers** - Powers work by giving a character access to a spell/skill that can be used a certain number of times per day, per encounter or once every so many turns in battle (sometimes called a cooldown).  For instance, a newly acquired power may be usable 3/day or maybe 1/encounter.  D&D 4th Edition utilized such a system for all of the classes but I tend to prefer using this system fighting techniques as opposed to spell casting.  As always, though, the choice is yours how or if you want to use this.
* **Default Known** - This describes what spells this caster knows by default.  A class can start knowing every spell in their list, all of the zero-level spells or not knowing any of them.
* **Spellbook** - In another section of the plugin parameters, you'll define spell lists which contain all skill-relevant information like spell level and such.  Enter the name of the spell list you want this class to use for this Skill Type.
* **School** - Spells can be separated into schools of magic.  In practical terms, these are just groups of spells.  I hope to do more with this but for now, it can be used to grant a subset of spells to a class.  Say you have Cleric spell list that has a bunch of spells that deal with life and death.  Heal, Harm, Raise Dead, Finger of Death etc.  A Paladin shouldn't get all of these death spells.  Those spells could be grouped into their own school and not given to the Paladin class.
* **Spells Per Day** - Number of spell uses per slot by actor level, delimited by a /, starting with level zero.  Each line in this list corresponds to the character's level and describes how many spells of each level that they can prepare each day.
  * Your Spells Per Day, Spells Known and Hybrid Retrieve will look similar to this.  You can use a dash to signify unlimited.
  * 3/1
  * 4/2
  * 4/2/1
  * 4/3/2
  * 4/3/2/1
  * 4/3/3/2
  * etc.
* **Spells Known** - Number of spells learned by actor level, delimited by a /.  Unless this parameter is left blank, this class will have a Learn command which is used to choose whatever spells they want to learn from their spell list.
* **Hybrid Retrieve** - Hybrid casters use this list to determine how many spells they can prepare per day.  The number that they can cast still uses Spells Per Day but because the number they can prepare and the number that they can cast are different, they need this extra list filled in to configure this.
* **Max Spell Level** - Most of the time, you can rely on this plugin figuring out the maximum level of spell a character can use by Spells Per Day or Spells Known, but some magic systems don't require these fields to be filled in.  If a class learns all of their spells through exposure or through essence and maybe also use the magic point system, there's no reason to fill in the three parameters above so this is use for those systems to specify what the maximum spell level a class can use.
* **MP Recovery** - Early Ultima games used an MP system where the actors only had a small amount of MP.  Their MP would return slowly as they walked around the map and eventually replenish their magical power.  This parameter is used to replicate such a system if you'd like.
  * **Recover MP** - Number of MP recovered after walking a certain number of steps specified below.
  * **Every X Steps** - Number of steps it take to recover the amount of MP list above.
* **Learn From Items** - Can learn spells by using items if they are in your spellbook.  If an item has the Learn Skill property, they won't be able to learn the spell if this is set to false.  Most spontaneous casters will have this set to false to limit their spell selection.
* **Learn From Exposure** - Can learn spells when allies or enemies use them in battle similar to a Final Fantasy Blue Mage.  Since my goal for this plugin is to allow you to replicate almost every other magic system, it wouldn't be complete without a way to learn spells from the creatures you battle now would it?  Set this to true if this class learns spells this way.
* **Learn From Essence** - Can learn spells through equipment by absorbing the essence of enemies defeated in battle.  Later on, you will be able to configure enemies to bestow their essence or spirit when killed.  You can also configure equipment that draws in this essence and allows the wearer to partially learn one or more spells.  If they gain enough of the required essence, they learn a new spell.  If you've ever played Final Fantasy 6 and know how characters learn spells by equipping Espers then you pretty know how this works.
* **Show As MP** - Each class can have any number of magic systems attached to it but unfortunately, the status windows don't have unlimited space to show all of these.  Therefore, you have to choose which one to display where an actor's MP gauge normally goes.  Set this option to true to indicate that this should be displayed in the MP area.  If more than one is set to true, the plugin will use the first one set this way.
* **Text** - Configurable display text.
  * **MP Label** - If Show As MP is the first magic entry set to true, use this text for this classes MP label. Leave blank to use the default MP label defined in the System tab.
  * **Use Command** - The Skills menu usually just allows you to select the Skill Type and all of your learned skills are there for use.  But this magic system plugin is more complex.  Actors can now use, learn and/or prepare spells from this screen now so new command options have been added.  The command that allows you to use a skill or cast a spell defaults to the command "Use".  It's probably best to set this to a more appropriate term depending on what type of system this class uses.  If they are a spell caster, you might want to label this command "Cast".  If they are a melee character, maybe "Use" or "Perform" is a better fit.
  * **Prepare Command** - This is the command used when an actor prepares their spells or skills for the day.  A Cleric might call this "Pray" since they pray to their god for spells each day.  A Wizard might "Memorize" their spells.  Set this to what's most appropriate for this class.
  * **Learn Command** - If a class learns at least some of their spells by choosing them from their spell list (see Spells Known), they will have a "Learn" command.  Call it whatever you'd like.
  * **Use Help** - Use command help text.
  * **Prepare Help** - Prepare command help text.
  * **Learn Help** - Learn command help text.

  
### Spell Lists

The second really important part of this plugin is Spell Lists.  If you've played Dungeons & Dragons before, you know what a spell list is.  If not, it's a list of spells that this class has access to.  Yeah, crazy ... I know.

* **Name** - Remember in Class Config where you entered the name of a spell list in the Spell List parameter?  Well, this is what's referenced.  Whatever you define in these parameters will be associated with that class/skill type.
* **Desc** - Short description of this spell list.  This is not required.
* **Max Spell Level** - Highest level of spells this class gets.  A Wizard might get up to 9th level spells.  A Bard's list might only go up to 6.  This is just here for efficiency because otherwise, I'd have to itterate through every spell in the list to figure out what the highest spell level is.  I'd rather not do that.  It's just better if you tell me now.
* **Spell Config** - This is where we get down to brass tax.  Not only will you list every spell that this spell list contains, there are several other properties that need to be filled in to make this whole magic system thing work.
  * **Desc** - Short description so that you know what this is. Not required but highly recommended.  You probably want to type in the name of the spell/skill here for easy reference.
  * **Skill Id** - This is the skill that's on this spell list.
  * **Level** - This is the spell's level.  A spell might not be the same level for every caster.  While a Cure Light Wounds is a 1st level spell for a cleric, for a Druid, it's a 2nd level spell.  Some casters are better than other at certain things and even though they may be able to learn some of the same spells, they could be different levels.
  * **School** - Each spell may be given a school.  This is  way to group spells so that some classes only gain access to a subset of a spell list.  Later on, I hope to implement ways to grant bonuses to individual schools of magic.
  * **Power Use** - If a caster uses Powers, this is where you define it's usage.
    * **Uses** - Number of times this power can be used.
	* **Frequency** - How long you need to wait before power is available again.
	  * **Day** - This power can be used Uses/Day.
	  * **Encounter** - This power can be used Uses/Encounter.
	  * **Rounds** - This power can be used once every Uses/Rounds.
	  * **At Will** - This power can be used at will or as often as they want.
  * **Exposure Amount** - Being exposed to this spell allows an actor to partially learn this spell (0-100).  So if an enemy uses a spell from an actor's spell list, this list, and this spell has an exposure amount of 50, the actor will learn 50% of the spell.  The second time they exposed to this spell, they will know 100% of the spell and will learn it completely.  They are then free to utilize the spell for themself.
  * **Components** - You didn't think I'd make a D&D-like magic system without allowing you to specify spell components, did you?  Oh, ye of little faith.  So yeah, if you're spell needs some Eye of Newt, define that here.
    * **Item Id** - Item required to use this spell.
	* **Count** - Number of this item needed to use this spell.
  * **Prerequisite** - Required spells needed to learn this spell.  Maybe a character need to learn Fire 1 before they can learn Fire 2.  That kinda makes sense.  If you want to set up your magic system so that certain spells need to be learned before other, more powerful ones, you can set up prerequisites.
  * **Can Learn** - Perhaps a spell is rare or unique.  Maybe it can't be just learned normally throught the Learn command.  If that's the case, set this to false.
  

### Enemy Config

You're almost to the home stretch.  In fact, if you aren't going to use essence in your game, congratulations!  You're done!  You can skill these last two sections.  If you are going to use essence, though, you'll need to define how much each enemy gives out and of which type.

**Desc** - Short description so that you know what this is. Not required but highly recommended.  It's probably a good idea to list the enemy's name here for easy reference.

**Enemy Id** - Enemy to configure.

**Essence Type** - Essence type that this enemy grants when defeated in battle.  See, unlike Final Fantasy 6, with this plugin, enemies may grant different types of essence when they die and certain spells might only be learnable with the right type.  Maybe you want each creature to give a different elemental type of essence when defeated.  A Slime gives out 1 water essence.  A Hell Hound grants 10 fire essence.  Some spells can only be learned through water essence and other through fire essence.  This is a nice way to make sure your players can just grind in the same spot to learn all of their spells.

**Essence Amount** -  Amount of essence this enemy grants when defeated in battle.  Each spell will require a certain amount of essence to learn it.  Weaker enemies will usually give out lower amounts of essence and vise versa.


### Item Config

**Essence Types** - Define essence types that enemies leave behind when they die.  This is just a lookup chart to match up the Essence Type with a display name used for when the battle is over and rewards are given.

**Weapon** - Configure effects of equipped weapons.
* **Desc**- Short description so that you know what this is. Not required but highly recommended.
* **Weapon Id** - Weapon with magic properties.
* **Learn From Essence** - Configure what spells can be learned and how much essence is required to do so.
  * **Skill Id** - Skill that is learned form this item.
  * **Essence Type** - Essence type required to learn this skill.
  * **Essence Required** - Required amount of essence this skill needs to be learned.  Low level spells won't need much essence to learn.  High level skills will need a lot.  This allows you to ensure that players don't just kill weak creatures to learn their spells.

**Armor** - Configure effects of equipped armor.
* **Desc**- Short description so that you know what this is. Not required but highly recommended.
* **Armor Id** - Armor with magic properties.
* **Learn From Essence** - Configure what spells can be learned and how much essence is required to do so.
  * **Skill Id** - Skill that is learned form this item.
  * **Essence Type** - Essence type required to learn this skill.
  * **Essence Required** - Required amount of essence this skill needs to be learned.  Low level spells won't need much essence to learn.  High level skills will need a lot.  This allows you to ensure that players don't just kill weak creatures to learn their spells.


## Plugin Commands and Script Calls

Strangely enough, this plugin doesn't have a many script calls or plugin commands.  Well, it technically does but most of them would only be useful if you are a skilled JavaScript coder and if that's the case, look at the next to last section of the plugin code for a well documented list of script calls.  But for the general audience, I only have a couple plugin commands to share that I think will be useful.

**Spell XP**

In Damage Formulas, you can use **sxp** to reference the actor's Spell XP for the performed skill.  This is an alternative to using the global formula in the Options parameter.

Recover magic for a single actor.  This only recovers spell slots and powers.  The editor's Recover All command is normally used to recover all HP, MP, spell slots and powers.
```javascript
MAGIC RECOVER actorId
ex. MAGIC RECOVER 3
```

Recover magic for all actors.  This only recovers spell slots and powers.  The editor's Recover All command is normally used to recover all HP, MP, spell slots and powers.
```javascript
MAGIC RECOVERALL
ex. MAGIC RECOVERALL
```

Add a school of magic to an actor:
```javascript
MAGIC ADDSCHOOL actorId skillTypeId school
ex. MAGIC ADDSCHOOL 3 1 Evocation
```

Remove a school of magic from an actor:
```javascript
MAGIC REMSCHOOL actorId skillTypeId school
ex. MAGIC REMSCHOOL 3 1 Divination
```

Manually set a spell's xp value (example sets Marsha's [skill 10] to the value 20)
```javascript
MAGIC SETXP actorId skill value
ex. MAGIC SETXP 3 10 20
```

Add to a spell's xp value (example adds 5 to Marsha's [skill 10])
```javascript
MAGIC ADDXP actorId skill value
ex. MAGIC SETXP 3 10 5
```


## Terms of Use

This plugin can be used in commercial or non-commercial projects.  You also have my permission to write and share plugins that add to or extend the functionality of this plugin.  While not required, if you use this in a commercial game, a free copy of the game would be nice as I put a lot of work into this and would love to see how you used it in your game.

Credit Frogboy in your work.


## Changelog

* Version 0.9 - Beta release
