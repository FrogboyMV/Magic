//=============================================================================
// Frogboy RMMV Plugin
// FROG_Magic.js
//=============================================================================

var Imported = Imported || {};
Imported.FROG_Magic = true;

var FROG = FROG || {};
FROG.Magic = FROG.Magic || {};
if (!Imported.FROG_Core) console.error("This plugin requires FROG_Core");

/*:
 * @plugindesc v0.9 Super-charge your classes
 * @author Frogboy
 *
 * @help
 * Make classes play and feel different from one another.
 * Author Frogboy
 *
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * So who likes magic?  No one?  Oh well, I guess I’ve got nothing to share
 * then.  Wait, what’s that?  Oh, sorry.  I’ve must have heard you wrong.  You
 * make RPGs, of course you like magic!  Who doesn’t?  And even if you don't,
 * you'll still like this plugin.
 *
 * RPG Maker gives you some nice tools to build that RPG you’ve always wanted
 * to make and the Skills system is fairly robust.  But there’s a problem and
 * it’s actually kind of a big one.  All of the actor’s typically feel, well,
 * samey.  I mean, I have this Fighter.  He uses skills which cost MP to perform
 * special attacks until his MP runs out.  I also have a Mage.  She uses skills
 * which cost MP to cast spells until her MP runs out.  In fact, all of my
 * actors follow this same exact mechanic.  It would be much cooler if actor of
 * different flavor felt and played differently from one another and had their
 * own unique mechanics to work with.  There are plugins out there to change up
 * the Skill system but you end up with the same issue.  All of your actor now
 * use this new system but your Fighter still functions pretty much the same as
 * your Mage.  You could try to add in several of these plugins that change the
 * Skill system in different ways but that sounds like a risky proposition.
 * Conflicts seem likely in this scenario.
 *
 * Enter Frog Magic, the one-stop shop for all of your skill/magic needs.  With
 * my latest plugin, you’ll be able to create a wide range of class mechanics
 * to make your characters fun, unique and memorable.  So what can you make?
 * How about a Fighter who has range of various attacks that can be used At
 * Will, operate on a cool-down every few turns or more powerful maneuvers
 * usable a certain number of times per day?  Alongside this Fighter, you can
 * have a Wizard who has spells slots like in Dungeons & Dragons or Final
 * Fantasy 1.  Maybe your Wizard only learns a few spells but can buy scrolls
 * to add to her spellbook.  But hey, you also want a Sorcerer class who is
 * born with natural magic ability.  He can’t learn spells from scrolls
 * and only gets a small subset of his choosing but is graced with a larger
 * allotment of spell slots per day to work with.  Your cleric doesn’t even
 * need to choose which spells he knows or learn them from scrolls as his god
 * has already bestowed on him this knowledge.  He does need to choose which
 * spells to prepare each day and can change his memorized spells as situation
 * calls for.  Perhaps your Druid or Mimic can only learn spells from the
 * creatures you encounter out in the wild.  When she witnesses a spell or
 * ability being used in battle enough times, she’ll learn it herself and can
 * harness the same power.  How about yet another class who can equip magical
 * items that teach them skills by absorbing the essence of slain enemies (like
 * Espers in Final Fantasy 6)?  Or maybe hybrid classes like the Paladin who
 * have a small list of spells that use slots and several class abilities that
 * are usable a certain number of times per day?  That would be crazy right?
 *
 * Not any longer.  If you know me and my work, you’ll know that my plugins are
 * powerful,  versatile and allow you to combine properties together to make
 * your game totally original.  Frog Magic will give you the power to add the
 * following to your game.
 *
 * ============================================================================
 * Features
 * ============================================================================
 *
 *    * Each class can be assigned any number of Skill Types that use whatever
 *      skill or magic system you create.
 *    * 3 different caster types: prepared, spontaneous and hybrid.
 *    * 3 different resources: spell slots, magic points and powers.
 *    * Actors can automatically know none, all or only zero-level spells.
 *    * Spellbooks and schools of magic.  A class skill type can be restricted
 *      by schools or expanded beyond their normal spellbook.
 *    * Spell levels.  Each spell in a spell list has a level which is used to
 *      determine when a class is able to learn it.  The same spell doesn't
 *      need to be the same level for every class.
 *    * Define number of spells known, prepared and/or retrieved per day.  If
 *      you’ve ever played D&D and know what 4/4/3/2/1 represents, you know
 *      what I’m talking about here.
 *    * Allow or restrict acquiring spells by player choice (player choice),
 *      items (learning from scrolls), exposure (learning by seeing the spell
 *      used in battle) and essence (slaying monsters while wearing special
 *      equipment).
 *    * Spell components. Does that spell require Eye of Newt?  Your heroes
 *      better go find some newt.
 *    * Mix and match all of the above however you want. Lots of room to add
 *      new capabilities in the future.  Feel free to make requests.
 *
 * ============================================================================
 * How to Use
 * ============================================================================
 *
 *
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * This plugin can be used in commercial or non-commercial projects.  You also
 * have my permission to write and share plugins that add to or extend the
 * functionality of this plugin.  While not required, if you use this in a
 * commercial game, a free copy of the game would be nice as I put a lot of
 * work into this and would love to see how you used it in your game.
 *
 * Credit Frogboy in your work.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 0.9 - Beta release
 *
 * ============================================================================
 *
 * @param Parameters
 *
 * @param Save Magic Object
 * @parent Parameters
 * @type boolean
 * @desc Save changes made to the $frogMagic object.
 * @default false
 * @on Yes
 * @off No
 *
 * @param Options
 * @parent Parameters
 * @type struct<optionsStruct>
 * @desc Configure your classes.
 * @default {"Sort Order":"DESC","Cost Indicator":"{\"Spell Slots\":\"{\\\"Format\\\":\\\"L%1\\\",\\\"Color\\\":\\\"24 - Pale Green\\\",\\\"Font Size\\\":\\\"22\\\"}\",\"Magic Points\":\"{\\\"Format\\\":\\\"%1MP\\\",\\\"Color\\\":\\\"2 - Mango\\\",\\\"Font Size\\\":\\\"22\\\"}\",\"Powers\":\"{\\\"Format Per Day\\\":\\\"%1/Day\\\",\\\"Format Per Encounter\\\":\\\"%1/Enc\\\",\\\"Format Cooldown\\\":\\\"%1 Rnd\\\",\\\"Format At Will\\\":\\\"At Will\\\",\\\"Color\\\":\\\"6 - Light Yellow\\\",\\\"Font Size\\\":\\\"22\\\"}\"}","Spell XP":"{\"Enabled\":\"false\",\"Damage Formula\":\"DMG * (1 + XP * 2 / 100)\",\"Max XP\":\"100\"}","Steps For Turn":"20","Recover Power":"3","Battle Status Window":"{\"Gauge Area Width\":\"400\",\"HP Area Percentage\":\"25\",\"MP Area Percentage\":\"45\",\"TP Area Percentage\":\"20\",\"Spacing\":\"5\",\"Font Size\":\"24\"}","Exposure Log Text":"\\c[24]%1\\c[0] has learned \\c[24]%2%\\c[0] of \\c[24]%3\\c[0]","Obtain Essence Text":"%1 %2 received!","Learn From Essence Text":"%1 learned %2!"}
 *
 * @param Class Config
 * @parent Parameters
 * @type struct<classConfigStruct>[]
 * @desc Configure your classes.
 * @default []
 *
 * @param Spell Lists
 * @parent Parameters
 * @type struct<spellListStruct>[]
 * @desc Configure your spell lists.
 * @default []
 *
 * @param Enemy Config
 * @parent Parameters
 * @type struct<enemyConfigStruct>[]
 * @desc Configure your Enemies. Used for systems where actors learn from equipment like Espers in FF6.
 * @default []
 *
 * @param Item Config
 * @parent Parameters
 * @type struct<itemConfigStruct>
 * @desc Configure your Items.
 * @default {"Essence Types":"[]","Weapon":"[]","Armor":"[]"}
 */

/*~struct~optionsStruct:
 * @param Sort Order
 * @type select
 * @desc Sort order for skills by slot level.
 * @default DESC
 * @option Ascending
 * @value ASC
 * @option Descending
 * @value DESC
 *
 * @param Cost Indicator
 * @type struct<costIndicatorStruct>
 * @desc Style the cost indicators in the skill list window.
 * @default {"Spell Slots":"{\"Format\":\"L%1\",\"Color\":\"24 - Pale Green\",\"Font Size\":\"22\"}","Magic Points":"{\"Format\":\"%1MP\",\"Color\":\"2 - Mango\",\"Font Size\":\"22\"}","Powers":"{\"Format Per Day\":\"%1/Day\",\"Format Per Encounter\":\"%1/Enc\",\"Format Cooldown\":\"%1 Rnd\",\"Format At Will\":\"At Will\",\"Color\":\"6 - Light Yellow\",\"Font Size\":\"22\"}"}
 *
 * @param Spell XP
 * @type struct<spellXPStruct>
 * @desc Configure how skills increase in power the more they are used.
 * @default {"Enabled":"false","Damage Formula":"DMG * (1 + XP * 2 / 100)","Max XP":"100"}
 *
 * @param Steps For Turn
 * @type number
 * @desc Set the number of steps on map it takes to register as a turn for out-of-battle purposes. Default 20.
 * @default 20
 * @min 0
 *
 * @param Recover Power
 * @type number
 * @desc Powers at the Encounter frequency, when used out of battle, recover after this many turns. Default 3.
 * @default 3
 * @min 0
 *
 * @param Battle Status Window
 * @type struct<battleStatusStruct>
 * @desc Configure the size of the HP, MP and TP display areas in the Actor Battle Status window.
 * @default {"Gauge Area Width":"400","HP Area Percentage":"25","MP Area Percentage":"45","TP Area Percentage":"20","Spacing":"5","Font Size":"24"}
 *
 * @param Exposure Log Text
 * @type text
 * @desc Text format for when a capable actor learns spells through exposure. %1 = Actor, %2 = Percentage Learned, %3 = Skill.
 * @default \c[24]%1\c[0] has learned \c[24]%2%\c[0] of \c[24]%3\c[0]
 *
 * @param Obtain Essence Text
 * @type text
 * @desc Text format for obtaining essence after battle. %1 = Amount Received, %2 Essence Name.
 * @default %1 %2 received!
 *
 * @param Learn From Essence Text
 * @type text
 * @desc Text format for learning a spell by acquiring essence. %1 = Actor Name, %2 - Skill.
 * @default %1 learned %2!
 */

/*~struct~costIndicatorStruct:
 * @param Spell Slots
 * @type struct<slotIndicatorStruct>
 * @desc Style the spell slot cost indicator.
 * @default {}
 *
 * @param Magic Points
 * @type struct<mpIndicatorStruct>
 * @desc Style the MP cost indicator.
 * @default {}
 *
 * @param Powers
 * @type struct<powerIndicatorStruct>
 * @desc Style the power cost indicator.
 * @default {}
 */

/*~struct~spellXPStruct:
 * @param Enabled
 * @type boolean
 * @desc Set this to true if you want skills to power up based on number of times used by an actor.
 * @default false
 * @on Yes
 * @off No
 *
 * @param Damage Formula
 * @type combo
 * @desc Formula run on the damage dealt by a skill. DMG = damage, XP = # times skill used by actor.
 * @default DMG * (1 + XP * 2 / 100)
 * @option DMG * (1 + XP * 2 / 100)
 *
 * @param Max XP
 * @type number
 * @desc Set the maximum XP that a skill can acquire. Set to 0 if there's no maximum.
 * @default 100
 * @min 0
 */

/*~struct~battleStatusStruct:
 * @param Gauge Area Width
 * @type number
 * @desc Width in pixels of the gauge area in the Actor Battle Status window.
 * @default 400
 * @min 0
 *
 * @param HP Area Percentage
 * @type number
 * @desc Width as a percentage of the HP area.
 * @default 30
 * @min 0
 * @max 100
 *
 * @param MP Area Percentage
 * @type number
 * @desc Width as a percentage of the MP area.
 * @default 30
 * @min 0
 * @max 100
 *
 * @param TP Area Percentage
 * @type number
 * @desc Width as a percentage of the TP area. This value is ignorred if TP is turned off.
 * @default 30
 * @min 0
 * @max 100
 *
 * @param Spacing
 * @type number
 * @desc Width as a percentage of the space between each area.
 * @default 5
 * @min 0
 *
 * @param Font Size
 * @type number
 * @desc Font size in pixel height.
 * @default 22
 * @min 0
 */

/*~struct~slotIndicatorStruct:
 * @param Format
 * @type text
 * @desc Text format for this cost indicator. Use %1 to indicate the slot level.
 * @default L%1
 *
 * @param Color
 * @type combo
 * @desc Text color for this indicator.  Hex codes work here as well.
 * @default 24 - Pale Green
 * @option 0 - White
 * @option 1 - Blue
 * @option 2 - Mango
 * @option 3 - Green
 * @option 4 - Sky Blue
 * @option 5 - Sky Purple
 * @option 6 - Light Yellow
 * @option 7 - Gray
 * @option 8 - Light Gray
 * @option 9 - Darker Blue
 * @option 10 - Orange Red
 * @option 11 - Dark Green
 * @option 12 - Dusk Blue
 * @option 13 - Dusk Violet
 * @option 14 - Orange Yellow
 * @option 15 - Black
 * @option 16 - Pale Blue
 * @option 17 - Yellow
 * @option 18 - Red
 * @option 19 - Midnight Gray
 * @option 20 - Burnt Orange
 * @option 21 - Yellow Orange
 * @option 22 - Darkest Blue
 * @option 23 - Cyan
 * @option 24 - Pale Green
 * @option 25 - Brown
 * @option 26 - Blue Violet
 * @option 27 - Violet Pink
 * @option 28 - Forest Green
 * @option 29 - Light Green
 * @option 30 - Dark Violet
 * @option 31 - Violet
 *
 * @param Font Size
 * @type number
 * @desc Font size in pixel height.
 * @default 22
 * @min 0
 */

/*~struct~mpIndicatorStruct:
 * @param Format
 * @type text
 * @desc Text format for this cost indicator. Use %1 to indicate the MP value.
 * @default %1MP
 *
 * @param Color
 * @type combo
 * @desc Text color for this indicator.  Hex codes work here as well.
 * @default 2 - Mango
 * @option 0 - White
 * @option 1 - Blue
 * @option 2 - Mango
 * @option 3 - Green
 * @option 4 - Sky Blue
 * @option 5 - Sky Purple
 * @option 6 - Light Yellow
 * @option 7 - Gray
 * @option 8 - Light Gray
 * @option 9 - Darker Blue
 * @option 10 - Orange Red
 * @option 11 - Dark Green
 * @option 12 - Dusk Blue
 * @option 13 - Dusk Violet
 * @option 14 - Orange Yellow
 * @option 15 - Black
 * @option 16 - Pale Blue
 * @option 17 - Yellow
 * @option 18 - Red
 * @option 19 - Midnight Gray
 * @option 20 - Burnt Orange
 * @option 21 - Yellow Orange
 * @option 22 - Darkest Blue
 * @option 23 - Cyan
 * @option 24 - Pale Green
 * @option 25 - Brown
 * @option 26 - Blue Violet
 * @option 27 - Violet Pink
 * @option 28 - Forest Green
 * @option 29 - Light Green
 * @option 30 - Dark Violet
 * @option 31 - Violet
 *
 * @param Font Size
 * @type number
 * @desc Font size in pixel height.
 * @default 22
 * @min 0
 */

/*~struct~powerIndicatorStruct:
 * @param Format Per Day
 * @type text
 * @desc Text format for this cost indicator. Use %1 to indicate the uses per day.
 * @default %1/Day
 *
 * @param Format Per Encounter
 * @type text
 * @desc Text format for this cost indicator. Use %1 to indicate the uses per encounter.
 * @default %1/Enc
 *
 * @param Format Cooldown
 * @type text
 * @desc Text format for this cost indicator. Use %1 to indicate the number of rounds between uses.
 * @default %1 Rnd
 *
 * @param Format At Will
 * @type text
 * @desc Text format for this cost indicator.
 * @default At Will
 *
 * @param Color
 * @type combo
 * @desc Text color for this indicator.  Hex codes work here as well.
 * @default 6 - Light Yellow
 * @option 0 - White
 * @option 1 - Blue
 * @option 2 - Mango
 * @option 3 - Green
 * @option 4 - Sky Blue
 * @option 5 - Sky Purple
 * @option 6 - Light Yellow
 * @option 7 - Gray
 * @option 8 - Light Gray
 * @option 9 - Darker Blue
 * @option 10 - Orange Red
 * @option 11 - Dark Green
 * @option 12 - Dusk Blue
 * @option 13 - Dusk Violet
 * @option 14 - Orange Yellow
 * @option 15 - Black
 * @option 16 - Pale Blue
 * @option 17 - Yellow
 * @option 18 - Red
 * @option 19 - Midnight Gray
 * @option 20 - Burnt Orange
 * @option 21 - Yellow Orange
 * @option 22 - Darkest Blue
 * @option 23 - Cyan
 * @option 24 - Pale Green
 * @option 25 - Brown
 * @option 26 - Blue Violet
 * @option 27 - Violet Pink
 * @option 28 - Forest Green
 * @option 29 - Light Green
 * @option 30 - Dark Violet
 * @option 31 - Violet
 *
 * @param Font Size
 * @type number
 * @desc Font size in pixel height.
 * @default 22
 * @min 0
 */

/*~struct~classConfigStruct:
 * @param Desc
 * @type text
 * @desc Short description so that you know what this is. Not required but highly recommended.
 *
 * @param Class Id
 * @type class
 * @desc Class to configure.
 * @default 0
 *
 * @param Magic
 * @type struct<classMagicStruct>[]
 * @desc Magic systems that this class has access to.
 * @default []
 */

/*~struct~classMagicStruct:
 * @param Desc
 * @type text
 * @desc Short description so that you know what this is. Not required but highly recommended.
 *
 * @param Skill Type Id
 * @type number
 * @desc Skill Type Id associated with this magic/skill system.
 * @default 1
 * @min 0
 *
 * @param Caster Type
 * @type select
 * @desc Define if and how spells are prepared.
 * @default Prepared
 * @option Prepared - Prepare which spells or abilities you want to cast
 * @value Prepared
 * @option Spontaneous - Cast any spell or ability that you know
 * @value Spontaneous
 * @option Hybrid - Prepared spells that aren't consumed when used
 * @value Hybrid
 *
 * @param Resource
 * @type select
 * @desc Define what resource this class uses to cast spells or perform abilities.
 * @default Spell Slots
 * @option Spell Slots
 * @value Spell Slots
 * @option Magic Points
 * @value Magic Points
 * @option Powers
 * @value Powers
 *
 * @param Default Known
 * @type select
 * @desc Describes what spells this caster knows by default.
 * @default None
 * @option None
 * @value None
 * @option Zero Level
 * @value Zero Level
 * @option All
 * @value All
 *
 * @param Spellbook
 * @type text
 * @desc Name of the spell list that this class has access to.
 *
 * @param School
 * @type text[]
 * @desc Schools of magic this class has access to. Use All to grant access to the entire spell list.
 * @default ["All"]
 *
 * @param Spells Per Day
 * @type text[]
 * @desc Number of spell uses per slot by actor level delimited with a /.
 * @default []
 *
 * @param Spells Known
 * @type text[]
 * @desc Number of spells learned by actor level delimited with a /.
 * @default []
 *
 * @param Hybrid Retrieve
 * @type text[]
 * @desc Hybrid casters prepare this number of spells but cast from Spells Per Day.
 * @default []
 *
 * @param Max Spell Level
 * @type number[]
 * @desc Maximum spell level usable by actor based on actor level. Used for Resource - Magic Points and Powers.
 * @default []
 *
 * @param MP Recovery
 * @type struct<mpRecoveryStruct>
 * @desc Allow actor to recover MP as they walk. Only used for Resource - Magic Points.
 * @default {"Recover MP":"0","Every X Steps":"25"}
 *
 * @param Learn From Items
 * @type boolean
 * @desc Can learn spells by using items if they are in your spellbook.
 * @default true
 * @on Yes
 * @off No
 *
 * @param Learn From Exposure
 * @type boolean
 * @desc Can learn spells when allies or enemies use them in battle similar to a FF Blue Mage.
 * @default false
 * @on Yes
 * @off No
 *
 * @param Learn From Essence
 * @type boolean
 * @desc Can learn spells through equipment by absorbing the essence of enemies defeated in battle.
 * @default false
 * @on Yes
 * @off No
 *
 * @param Show As MP
 * @type boolean
 * @desc The first Magic entry with this set to true is used to display the actor's magic.
 * @default true
 * @on Yes
 * @off No
 *
 * @param Text
 * @type struct<classMagicTextStruct>
 * @desc Configurable display text.
 * @default {"MP Label":"","Use Command":"Use","Prepare Command":"Prepare","Learn Command":"Learn","Use Help":"Use a special ability or cast a spell.","Prepare Help":"Prepare spells or abilities for the day.","Learn Help":"Learn a new ability or spell."}
 */

/*~struct~classMagicTextStruct:
 * @param MP Label
 * @type text
 * @desc If Show As MP is the first magic entry set to true, use this text for this classes MP label. Leave blank for default.
 * @default
 *
 * @param Use Command
 * @type text
 * @desc Command text to memorize spells for the day.  This is not relevant for Spontaneous casters.
 * @default Use
 *
 * @param Prepare Command
 * @type text
 * @desc Command text to memorize spells for the day.  This is not relevant for Spontaneous casters.
 * @default Prepare
 *
 * @param Learn Command
 * @type text
 * @desc Command text to learn new spells.
 * @default Learn
 *
 * @param Use Help
 * @type text
 * @desc Use command help text.
 * @default Use a special ability or cast a spell.
 *
 * @param Prepare Help
 * @type text
 * @desc Prepare command help text.
 * @default Prepare spells or abilities for the day.
 *
 * @param Learn Help
 * @type text
 * @desc Learn command help text.
 * @default Learn a new ability or spell.
 */

/*~struct~mpRecoveryStruct:
 * @param Recover MP
 * @type number
 * @desc Amount of MP recovered.
 * @default 0
 *
 * @param Every X Steps
 * @type number
 * @desc Number of steps they need to take to recover the given MP.
 * @default 25
 */

/*~struct~spellListStruct:
 * @param Name
 * @type text
 * @desc Name of the spell list that is used as a reference to grant a class access to it.
 *
 * @param Desc
 * @type text
 * @desc Short description of this spell list.  This is not required.
 *
 * @param Max Spell Level
 * @type number
 * @desc Highest level of spells this class gets.
 * @default 9
 *
 * @param Spell Config
 * @type struct<spellConfigStruct>[]
 * @desc Define what spells are on this list along with additional properties.
 * @default []
 */

/*~struct~spellConfigStruct:
 * @param Desc
 * @type text
 * @desc Short description so that you know what this is. Not required but highly recommended.
 *
 * @param Skill Id
 * @type skill
 * @desc A spell or ability in this spellbook.
 * @default 0
 *
 * @param Level
 * @type number
 * @desc The level of this spell or ability.
 * @default 0
 * @min 0
 *
 * @param School
 * @type text
 * @desc Group, type, school, discipline, whatever you want to call it.
 *
 * @param Power Use
 * @type struct<powerUseStruct>
 * @desc Configure Power properties.
 * @default {}
 *
 * @param Exposure Amount
 * @type number
 * @desc Being exposed to this spell allows an actor to partially learn this spell (0-100).
 * @default 0
 * @min 0
 * @max 100
 *
 * @param Components
 * @type struct<spellComponentsStruct>[]
 * @desc Required items needed to use this skill.
 * @default []
 *
 * @param Prerequisite
 * @type skill[]
 * @desc Required skills needed to learn this skill.
 * @default []
 *
 * @param Can Learn
 * @type boolean
 * @desc This spell cannot be learned naturally through the Learn command.
 * @default true
 * @on Yes
 * @off No
 */

/*~struct~powerUseStruct:
 * @param Uses
 * @type number
 * @desc Number of times this power can be used.
 * @default 3
 * @min 0
 *
 * @param Frequency
 * @type select
 * @desc How long you need to wait before power is available again.
 * @default d
 * @option Day
 * @value d
 * @option Encounter
 * @value e
 * @option Rounds
 * @value r
 * @option At Will
 * @value w
 */

/*~struct~spellComponentsStruct:
 * @param Item Id
 * @type item
 * @desc Item required to use this skill.
 * @default 0
 *
 * @param Count
 * @type number
 * @desc Number of this item needed to use this skill.
 * @default 1
 * @min 0
 */

/*~struct~enemyConfigStruct:
 * @param Desc
 * @type text
 * @desc Short description so that you know what this is. Not required but highly recommended.
 *
 * @param Enemy Id
 * @type enemy
 * @desc Enemy to configure.
 * @default 0
 *
 * @param Essence Type
 * @type text
 * @desc Essence type that this enemy grants when defeated in battle.
 * @default
 *
 * @param Essence Amount
 * @type number
 * @desc Ammount of essence this enemy grants when defeated in battle.
 * @default 1
 * @min 0
 */

/*~struct~itemConfigStruct:
 * @param Essence Types
 * @type struct<essenceTypeStruct>[]
 * @desc Define essence types that enemies leave behind when they die.
 * @default []
 *
 * @param Weapon
 * @type struct<itemConfigWeaponStruct>[]
 * @desc Configure effects of equipped weapons.
 * @default []
 *
 * @param Armor
 * @type struct<itemConfigArmorStruct>[]
 * @desc Configure effects of equipped armor.
 * @default []
 */

/*~struct~essenceTypeStruct:
 * @param Name
 * @type text
 * @desc The display name for this type for essence.
 *
 * @param Type
 * @type text
 * @desc Unique identifier used when configuring the Learn From Essence properties of equipment.
 */

/*~struct~itemConfigWeaponStruct:
 * @param Desc
 * @type text
 * @desc Short description so that you know what this is. Not required but highly recommended.
 *
 * @param Weapon Id
 * @type weapon
 * @desc Weapon with magic properties.
 * @default 0
 *
 * @param Learn From Essence
 * @type struct<learnFromEssenceStruct>[]
 * @desc Configure what spells can be learned and how much essence is required to do so.
 * @default []
 */

/*~struct~itemConfigArmorStruct:
 * @param Desc
 * @type text
 * @desc Short description so that you know what this is. Not required but highly recommended.
 *
 * @param Armor Id
 * @type armor
 * @desc Armor with magic properties.
 * @default 0
 *
 * @param Learn From Essence
 * @type struct<learnFromEssenceStruct>[]
 * @desc Configure what spells can be learned and how much essence is required to do so.
 * @default []
 */

/*~struct~learnFromEssenceStruct:
 * @param Desc
 * @type text
 * @desc Short description so that you know what this is. Not required but highly recommended.
 *
 * @param Skill Id
 * @type skill
 * @desc Skill that is learned form this item.
 * @default 0
 *
 * @param Essence Type
 * @type text
 * @desc Essence type required to learn this skill.
 * @default
 *
 * @param Essence Required
 * @type number
 * @desc Required amount of essence this skill needs to be learned.
 * @default 100
 * @min 1
 */

var $frogMagic = {};

/* ---------------------------------------------------------------*\
                            Data Manager
\* -------------------------------------------------------------- */

// Load in plugin paramters
FROG.Magic.DataManager_IsDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function () {
    if (!FROG.Magic.DataManager_IsDatabaseLoaded.call(this)) return false;
    if (FROG.Core.isEmpty($frogMagic)) {
        FROG.Core.jsonParams(PluginManager.parameters('FROG_Magic'), $frogMagic);
        console.log($frogMagic);
    }
    return true;
}

// Save File
FROG.Magic.DataManager_MakeSaveContents = DataManager.makeSaveContents;
DataManager.makeSaveContents = function() {
    var contents = FROG.Magic.DataManager_MakeSaveContents.call(this);
    if (FROG.Magic.saveMagicObject === true) {
        contents.frogMagic = $frogMagic;
    }
    return contents;
}

// Load File
FROG.Magic.DataManager_ExtractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function(contents) {
    FROG.Magic.DataManager_ExtractSaveContents.call(this, contents);
    if (FROG.Magic.saveMagicObject === true) {
        $frogMagic = contents.frogMagic;
    }
}


/* ---------------------------------------------------------------*\
                            Battle Manager
\* -------------------------------------------------------------- */

// Blue magic type learning skills from exposure
Game_Actor.prototype.learnFromExposure = function (skill) {
    var actor = this;
    var classMagicArr = FROG.Magic.getClassMagic(actor);
    if (!classMagicArr || actor.hasSkill(skill.id)) return;

    for (var j=0; j<classMagicArr.length; j++) {
        var classMagic = classMagicArr[j];
        if (!classMagic || !classMagic.learnFromExposure) continue;

        var actorMagic = FROG.Magic.getActorMagic(actor, skill.stypeId);
        if (!actorMagic) continue;

        var message = "";
        var spell = FROG.Magic.getSpell(actor, skill);
        var spellbookSpell = FROG.Magic.getSpellConfig(actorMagic.spellbook, skill);

        if (!actor.hasSkill(skill.id) &&
            spell.level > -1 &&
            spell.level <= FROG.Magic.getActorMaxSlot(actor, skill.stypeId) &&
            spellbookSpell.exposureAmount > 0 &&
            spell.exposure < 100
        ) {
            // Add exposure
            spell.exposure += spellbookSpell.exposureAmount;
            spell.exposure = spell.exposure.clamp(0, 100);
            if (spell.exposure === 100) {
                actor.learnSkill(skill.id);
            }

            // Compose battle log message
            var text = FROG.Magic.getOptions("exposureLogText") || "\\c[24]%1\\c[0] has learned \\c[24]%2%\\c[0] of \\c[24]%3\\c[0]\n";
            message = text.replace("%1", actor._name).replace("%2", spell.exposure).replace("%3", skill.name);

            // Add message to battle log
            if (BattleManager._logWindow) {
                BattleManager._logWindow.push('addText', message);
            }
        }
    }
}

// Learn from Exposure
FROG.Magic.BattleManager_startAction = BattleManager.startAction;
BattleManager.startAction = function() {
    FROG.Magic.BattleManager_startAction.call(this);
    var action = this._subject.currentAction();

    if (action && action._item && action._item._dataClass == "skill") {
        var skill = $dataSkills[action._item._itemId || 0];
        FROG.Magic.learnFromExposure(skill);
    }
}

// Reset encounter and turn level powers
FROG.Magic.BattleManager_updateBattleEnd = BattleManager.updateBattleEnd;
BattleManager.updateBattleEnd = function () {
    FROG.Magic.BattleManager_updateBattleEnd.call(this);
    for (i=0; i<$gameParty.battleMembers().length; i++) {
        var actor = $gameActors._data[$gameParty._actors[i]];
        if (actor) {
            actor.resetEncounterPowers(true);
        }
    }
}

// Add support for essence received
FROG.Magic.BattleManager_makeRewards = BattleManager.makeRewards;
BattleManager.makeRewards = function() {
    FROG.Magic.BattleManager_makeRewards.call(this);
    this._rewards.essence = $gameTroop.makeEssence();
}

// Add support for essence received
FROG.Magic.BattleManager_displayRewards = BattleManager.displayRewards;
BattleManager.displayRewards = function() {
    FROG.Magic.BattleManager_displayRewards.call(this);
    this.displayEssence();
}

// Show essence received
BattleManager.displayEssence = function() {
    var essence = this._rewards.essence;
    if (!FROG.Core.isEmpty(essence)) {
        $gameMessage.newPage();
        var text = FROG.Magic.getOptions("obtainEssenceText") || "%1 %2 received!";
        Object.keys(essence).forEach(function (key, index) {
            var message = text.replace("%1", essence[key]).replace("%2", FROG.Magic.getEssenceName(key));
            $gameMessage.add(message);
        });
    }
}

// Gain essence from slain enemies
FROG.Magic.BattleManager_gainRewards = BattleManager.gainRewards;
BattleManager.gainRewards = function() {
    FROG.Magic.BattleManager_gainRewards.call(this);
    this.gainEssence();
}

// Gain essence from slain enemies
BattleManager.gainEssence = function() {
    var essence = this._rewards.essence;
    if (!FROG.Core.isEmpty(essence)) {
        $gameParty.allMembers().forEach(function(actor) {
            actor.gainEssence(essence);
        });
    }
}


/* ---------------------------------------------------------------*\
                            Window_Base
\* -------------------------------------------------------------- */

// Draw skill slots if class is configured to use them
Window_Base.prototype.drawActorMp = function(actor, x, y, width) {
    width = width || 186;
    var classMagicArr = FROG.Magic.getClassMagic(actor);
    var classMagic = {};
    if (classMagicArr) {
        classMagic = classMagicArr.filter(function (config) {
            return config.showAsMP === true;
        })[0] || {};
    }
    var mpLabel = (classMagic.text && classMagic.text.mpLabel) ? classMagic.text.mpLabel : TextManager.mpA;

    switch (classMagic.resource) {
        case "Spell Slots":
            var slotDisplay = FROG.Magic.getActorSlotsDisplay(actor, classMagic.skillTypeId);
            this.changeTextColor(this.systemColor());
            this.drawText(mpLabel, x, y, 44);
            this.resetTextColor();
            this.drawText(slotDisplay, x + 44, y, width - 44, "right");
            break;

        case "Powers":
            var slotDisplay = FROG.Magic.getActorPowersDisplay(actor, classMagic.skillTypeId);
            this.changeTextColor(this.systemColor());
            this.drawText(mpLabel, x, y, 44);
            this.resetTextColor();
            this.drawText(slotDisplay, x + 44, y, width - 44, "right");
            break;

        default: // Magic Points
            var color1 = this.mpGaugeColor1();
            var color2 = this.mpGaugeColor2();
            this.drawGauge(x, y, width, actor.mpRate(), color1, color2);
            this.changeTextColor(this.systemColor());
            this.drawText(mpLabel, x, y, 44);
            this.drawCurrentAndMax(actor.mp, actor.mmp, x, y, width,
                                   this.mpColor(actor), this.normalColor());
            break;
    }
}


/* ---------------------------------------------------------------*\
                        Window_BattleStatus
\* -------------------------------------------------------------- */

Window_BattleStatus.prototype.gaugeAreaWidth = function() {
    var bsw = FROG.Magic.getOptions("battleStatusWindow") || {};
    return bsw.gaugeAreaWidth || 330;
}

Window_BattleStatus.prototype.drawGaugeAreaWithTp = function(rect, actor) {
    var bsw = FROG.Magic.getOptions("battleStatusWindow");
    if (bsw) {
        var hpw = rect.width * (bsw.hPAreaPercentage / 100);
        var mpw = rect.width * (bsw.mPAreaPercentage / 100);
        var tpw = rect.width * (bsw.tPAreaPercentage / 100);
        var space = rect.width * (bsw.spacing / 100);

        this.changeFontSize(bsw.fontSize || 28);
        this.drawActorHp(actor, rect.x + 0, rect.y, hpw);
        this.drawActorMp(actor, rect.x + hpw + space, rect.y, mpw);
        this.drawActorTp(actor, rect.x + hpw + mpw + (space * 2), rect.y, tpw);
        this.resetFontSettings();
    }
    else {
        this.drawActorHp(actor, rect.x + 0, rect.y, 108);
        this.drawActorMp(actor, rect.x + 123, rect.y, 96);
        this.drawActorTp(actor, rect.x + 234, rect.y, 96);
    }
}

Window_BattleStatus.prototype.drawGaugeAreaWithoutTp = function(rect, actor) {
    var bsw = FROG.Magic.getOptions("battleStatusWindow");
    if (bsw) {
        var hpw = rect.width * (bsw.hPAreaPercentage / 100);
        var mpw = rect.width * (bsw.mPAreaPercentage / 100);
        var space = rect.width * (bsw.spacing / 100);

        this.changeFontSize(bsw.fontSize || 28);
        this.drawActorHp(actor, rect.x + 0, rect.y, hpw);
        this.drawActorMp(actor, rect.x + hpw + space, rect.y, mpw);
        this.resetFontSettings();
    }
    else {
        this.drawActorHp(actor, rect.x + 0, rect.y, 201);
        this.drawActorMp(actor, rect.x + 216,  rect.y, 114);
    }
}


/* ---------------------------------------------------------------*\
                            Game_Party
\* -------------------------------------------------------------- */

// MP Recovery option while walking the map
FROG.Magic.Game_Party_IncreaseSteps = Game_Party.prototype.increaseSteps;
Game_Party.prototype.increaseSteps = function() {
    FROG.Magic.Game_Party_IncreaseSteps.call(this);
    var aliveActors = this.aliveMembers();

    // MP Recovery option
    for (var i=0; i<aliveActors.length; i++) {
        var actor = aliveActors[i];
        var partySteps = this.steps();
        var classMagic = FROG.Magic.getClassMagic(actor);
        if (classMagic && classMagic.resource == "Magic Points") {
            if (!FROG.Core.isEmpty(classMagic.mpRecovery) &&
                classMagic.mpRecovery.recoverMP > 0 &&
                classMagic.mpRecovery.everyXSteps > 0 &&
                partySteps % classMagic.mpRecovery.everyXSteps === 0
            ) {
                actor.gainMp(classMagic.mpRecovery.recoverMP);
            }
        }
    }
}


/* ---------------------------------------------------------------*\
                        Game_BattlerBase
\* -------------------------------------------------------------- */

// Recover magic
FROG.Magic.Game_BattlerBase_RecoverAll = Game_BattlerBase.prototype.recoverAll;
Game_BattlerBase.prototype.recoverAll = function() {
    FROG.Magic.Game_BattlerBase_RecoverAll.call(this);
    if (this.isActor()) {
        FROG.Magic.resetUsedSpells(this);
    }
}

// Spell cooldowns
FROG.Magic.Game_Battler_onTurnEnd = Game_Battler.prototype.onTurnEnd;
Game_Battler.prototype.onTurnEnd = function() {
    FROG.Magic.Game_Battler_onTurnEnd.call(this);
    FROG.Magic.powerTurnEnd(this);
}


/* ---------------------------------------------------------------*\
                            Game_Actor
\* -------------------------------------------------------------- */

// Initialize actor talents when game starts
FROG.Magic.Game_Actor_setup = Game_Actor.prototype.setup;
Game_Actor.prototype.setup = function(actorId) {
    FROG.Magic.Game_Actor_setup.call(this, actorId);
    this.initializeMagic();
    this.initializeSpellInfo();
    this.initializeSpellsKnown();
}

// Add spell info for every skill this actor can learn
Game_Actor.prototype.initializeSpellInfo = function() {
    var classMagicArr = FROG.Magic.getClassMagic(this) || [];
    for (var j=0; j<classMagicArr.length; j++) {
        var classMagic = classMagicArr[j];
        if (classMagic && classMagic.spellbook) {
            FROG.Magic.addSpellInfo(this, classMagic.spellbook);
        }
    }
}

// Set the number of steps on map that equates to a turn in battle
Game_Actor.prototype.stepsForTurn = function() {
    return FROG.Magic.getOptions("stepsForTurn") || 20;
}

// Reset encounter powers if used outside of battle
Game_Actor.prototype.encounterEndOnMap = function() {
    var recoverPower = FROG.Magic.getOptions("recoverPower") || 6;
    if ($gameParty.steps() % (this.stepsForTurn() * recoverPower) === 0) {
        actor.resetEncounterPowers(false);
    }
}

// Initialize Magic
Game_Actor.prototype.resetEncounterPowers = function(alsoResetCooldowns) {
    var resource = FROG.Magic.getClassMagic(this, "resource");
    if (resource == "Powers" && this._frogMagic && this._frogMagic.spellInfo && this._frogMagic.spellInfo.length) {
        var spellInfo = this._frogMagic.spellInfo.filter(function (info) {
            return info.powerFrequency == "e" || (alsoResetCooldowns && info.powerFrequency == "r");
        });

        for (var i=0; i<spellInfo.length; i++) {
            spellInfo[i].powerCount = 0;
            spellInfo[i].powerResetCounter = 0;
        }
    }
}

// Initialize Magic
Game_Actor.prototype.initializeMagic = function() {
    this._frogMagic = {};

    var classMagicArr = FROG.Magic.getClassMagic(this);
    if (!classMagicArr) return;

    for (var j=0; j<classMagicArr.length; j++) {
        var classMagic = classMagicArr[j];
        if (!classMagic || !classMagic.skillTypeId) continue;
        classMagic.maxSlotLevel = classMagic.maxSlotLevel || 9;
        classMagic.school = classMagic.school.map(function (sph) {
            return sph.toLowerCase();
        });
        this._frogMagic[classMagic.skillTypeId] = {
            known: [],
            learned: [],
            max: [],
            memorized: [],
            spellInfo: [],
            prepared: [],
            retrieved: [],
            retrievedMax: [],
            spellbook: classMagic.spellbook,
            school: classMagic.school,
            used: []
        };

        var actorMagic = this._frogMagic[classMagic.skillTypeId];
        for (var i=0; i<=classMagic.maxSlotLevel; i++) {
            actorMagic.known.push(0);
            actorMagic.learned.push(0);
            actorMagic.max.push(0);
            actorMagic.memorized.push(0);
            actorMagic.retrieved.push(0);
            actorMagic.retrievedMax.push(0);
            actorMagic.used.push(0);
        }
    }

    this.resetMagicSlots();
}

// Initialize Spells Known
Game_Actor.prototype.initializeSpellsKnown = function() {
    var classMagicArr = FROG.Magic.getClassMagic(this);
    if (!classMagicArr) return;

    for (var j=0; j<classMagicArr.length; j++) {
        var classMagic = classMagicArr[j];
        if (classMagic && classMagic.defaultKnown && classMagic.spellbook) {
            var spells = [];
            switch (classMagic.defaultKnown) {
                case "All":
                    spells = FROG.Magic.getSpellInfo({
                        actor: this,
                        stypeId: classMagic.skillTypeId
                    });
                    break;

                case "Zero Level":
                    spells = FROG.Magic.getSpellInfo({
                        actor: this,
                        stypeId: classMagic.skillTypeId,
                        level: 0
                    });
                    break;
            }

            // Learn default skills
            if (spells && spells.length) {
                for (var i=0; i<spells.length; i++) {
                    if (spells[i] && spells[i].id) {
                        this.learnSkill(spells[i].id);
                    }
                }
            }
        }
    }
}

// Sets the current max slots usable to current level
Game_Actor.prototype.resetMagicSlots = function() {
    var classMagicArr = FROG.Magic.getClassMagic(this);
    if (!classMagicArr) return;

    for (var j=0; j<classMagicArr.length; j++) {
        var classMagic = classMagicArr[j];
        if (!classMagic && !classMagic.skillTypeId) continue;
        var actorMagic = this._frogMagic[classMagic.skillTypeId] || null;
        if (!actorMagic) continue;

        // Spells per day
        var txtSlots = classMagic.spellsPerDay[this._level];
        if (txtSlots) {// && txtSlots.toString().indexOf('/') > -1) {
            var arr = (txtSlots + "/").split('/');
            for (var i=0; i<arr.length-1; i++) {
                actorMagic.max[i] = (arr[i] === "-") ? arr[i] : ~~arr[i];
            }
        }

        // Hybrid Retrieve Spells
        var txtSlots = classMagic.hybridRetrieve[this._level];
        if (txtSlots) { // && txtSlots.toString().indexOf('/') > -1) {
            var arr = (txtSlots + "/").split('/');
            for (var i=0; i<arr.length-1; i++) {
                actorMagic.retrievedMax[i] = (arr[i] === "-") ? arr[i] : ~~arr[i];
            }
        }

        // Spells known
        var spellsKnown = classMagic.spellsKnown[this._level];
        if (spellsKnown) { // && spellsKnown.toString().indexOf('/') > -1) {
            var arr = (spellsKnown + "/").split('/');
            for (var i=0; i<arr.length-1; i++) {
                actorMagic.known[i] = ~~arr[i];
            }
        }
    }
}

// Check to see if any spell slots are available
FROG.Magic.Game_Actor_meetsSkillConditions = Game_Actor.prototype.meetsSkillConditions;
Game_Actor.prototype.meetsSkillConditions = function(skill) {
    var usable = FROG.Magic.Game_Actor_meetsSkillConditions.call(this, skill);
    var resource = FROG.Magic.getClassMagic(this, "resource");
    if (usable && resource == "Spell Slots") {
        usable = FROG.Magic.isSlotAvailable(this, skill);
    }
    return usable;
}

// Update max spell slots and spells known on level up
FROG.Magic.Game_Actor_levelUp = Game_Actor.prototype.levelUp;
Game_Actor.prototype.levelUp = function() {
    FROG.Magic.Game_Actor_levelUp.call(this);
    this.resetMagicSlots();
}

// Memorize/retrieve skill and add to prepared spells
Game_Actor.prototype.memorizeSkill = function(skill) {
    FROG.Magic.gainSpellMemorized(this, skill, 1);
    FROG.Magic.gainSpellRetrieved(this, skill, 1);
    FROG.Magic.gainSpellPrepared(this, skill, 1);
}

// Only reduce magic points if this skill type uses magic points
Game_Actor.prototype.paySkillCost = function(skill) {
    var resource = FROG.Magic.getClassMagic(this, "resource");
    if (resource == "Magic Points") {
        Game_BattlerBase.prototype.paySkillCost.call(this, skill);
    }
    else {
        this._tp -= this.skillTpCost(skill);
    }
}

// Make exception for non-magic point skill types
Game_Actor.prototype.canPaySkillCost = function(skill) {
    var mpCaster = true;
    var resource = FROG.Magic.getClassMagic(this, skill.stypeId, "resource");
    if (resource != "Magic Points") {
        mpCaster = false;
    }
    return this._tp >= this.skillTpCost(skill) && (this._mp >= this.skillMpCost(skill) || !mpCaster);
}

// Gain essence from slain enemies
Game_Actor.prototype.gainEssence = function (essence) {
    if (FROG.Core.isEmpty(essence)) return;
    var actor = this;
    var essenceSpells = FROG.Magic.getEquipEssenceSpells(this);

    for (var i=0; i<essenceSpells.length; i++) {
        var essenceInfo = essenceSpells[i];
        var skill = $dataSkills[essenceSpells[i].skillId || 0];
        var spell = FROG.Magic.getSpell(this, skill);
        if (!skill || !essenceInfo || !spell || this.hasSkill(skill.id)) continue;

        // Add essence
        if (essence[essenceInfo.essenceType] > 0) {
            spell.essence += essence[essenceInfo.essenceType];
            if (spell.essence >= essenceInfo.essenceRequired) {
                this.learnSkill(skill.id);

                // Display learned skill
                var text = FROG.Magic.getOptions("learnFromEssenceText") || "%1 learned %2!";
                if (text) {
                    spell.essence = spell.essence.clamp(0, essenceInfo.essenceRequired);
                    var message = text.replace("%1", this._name).replace("%2", skill.name);
                    $gameMessage.add(message);
                }
            }
        }
    }
}


/* ---------------------------------------------------------------*\
                            Game_Troop
\* -------------------------------------------------------------- */

// After battle essence awards
Game_Troop.prototype.makeEssence = function() {
    var essence = {};
    var deadMembers = this.deadMembers();

    for (var i=0; i<deadMembers.length; i++) {
        var enemyEssence = deadMembers[i].makeEssence();
        if (!FROG.Core.isEmpty(enemyEssence)) {
            if (!essence.hasOwnProperty(enemyEssence.type)) {
                essence[enemyEssence.type] = 0;
            }
            essence[enemyEssence.type] += enemyEssence.amount || 0;
        }
    }

    return essence;
}


/* ---------------------------------------------------------------*\
                            Game_Enemy
\* -------------------------------------------------------------- */

// After battle essence awards
Game_Enemy.prototype.makeEssence = function() {
    var enemyConfig = FROG.Magic.getEnemyConfig(this);
    if (enemyConfig) {
        return {
            type: enemyConfig.essenceType,
            amount: enemyConfig.essenceAmount
        };
    }

    return {};
}


/* ---------------------------------------------------------------*\
                        Game_Action
\* -------------------------------------------------------------- */

// Use skill
FROG.Magic.Game_Action_apply = Game_Action.prototype.apply;
Game_Action.prototype.apply = function(target) {
    FROG.Magic.Game_Action_apply.call(this, target);
    var actor = this.subject();
    var skill = this.item();
    if (DataManager.isSkill(skill)) {
        FROG.Magic.useSkill(actor, skill);
    }
}

// Test to see if item that adds a skill is usable
FROG.Magic.Game_Action_testItemEffect = Game_Action.prototype.testItemEffect;
Game_Action.prototype.testItemEffect = function(target, effect) {
    var bOk = FROG.Magic.Game_Action_testItemEffect.call(this, target, effect);
    if (bOk && effect.code === Game_Action.EFFECT_LEARN_SKILL) {
        var spell = FROG.Magic.getSpell(target, $dataSkills[effect.dataId]);
        if (!spell) return false;

        if (typeof spell.canLearnFromItem == "boolean") {
            return (
                target.isActor() &&
                !target.isLearnedSkill(effect.dataId) &&
                spell.canLearnFromItem &&
                FROG.Magic.meetsPrerequisites(target, spell.prerequisite)
            );
        }
    }
    return bOk;
}

// This variable is used in damage formulas and is set to the spell's xp value for that actor.
var sxp = 0;

// If spell xp is enabled, adjust damage.
FROG.Magic.Game_Action_evalDamageFormula = Game_Action.prototype.evalDamageFormula;
Game_Action.prototype.evalDamageFormula = function(target) {
    sxp = (this.subject().isActor()) ? FROG.Magic.getSpell(this.subject(), this.item(), "xp") : 0;
    var dmg = FROG.Magic.Game_Action_evalDamageFormula.call(this, target);
    var spellXP = FROG.Magic.getOptions("spellXP");
    if (spellXP && spellXP.enabled && spellXP.damageFormula) {
        var xp = FROG.Magic.getSpell(this.subject(), this.item(), "xp");
        dmg = eval(spellXP.damageFormula.toLowerCase()) || 0;
    }
    return dmg;
}

/* ---------------------------------------------------------------*\
                        Scene_ItemBase
\* -------------------------------------------------------------- */

// Cancel out of actor select when skill is used so that the player can't overuse
FROG.Magic.Scene_ItemBase_useItem = Scene_ItemBase.prototype.useItem;
Scene_ItemBase.prototype.useItem = function() {
    FROG.Magic.Scene_ItemBase_useItem.call(this);
    this.onActorCancel();
}


/* ---------------------------------------------------------------*\
                        Scene_Skill
\* -------------------------------------------------------------- */

// Create new skill scene
Scene_Skill.prototype.create = function() {
    Scene_ItemBase.prototype.create.call(this);
    this.createHelpWindow();
    this.createSkillTypeWindow();
    this.createStatusWindow();
    this.createSkillActionWindow();
    this.createItemWindow();
    this.createActorWindow();
    this._skillTypeWindow.setSkillActionWindow(this._skillActionWindow);
}

// Skill command now takes you to the action menu
Scene_Skill.prototype.commandSkill = function() {
    this._skillActionWindow.activate();
    this._skillActionWindow.select(0);
}

// Cancelling out of skill menu take you to action menu
Scene_Skill.prototype.onItemCancel = function() {
    this._itemWindow.deselect();
    this._skillActionWindow.activate();
    this._helpWindow.setText("");
}

// Changing actor clears the action menu selection
FROG.Magic.Scene_Skill_onActorChange = Scene_Skill.prototype.onActorChange;
Scene_Skill.prototype.onActorChange = function() {
    FROG.Magic.Scene_Skill_onActorChange.call(this);
    this._skillActionWindow.select(-1);
}

// Create action menu
Scene_Skill.prototype.createSkillActionWindow = function() {
    var wy = this._helpWindow.height + this._skillTypeWindow.height;
    this._skillActionWindow = new Window_SkillAction(0, wy);
    this._skillActionWindow.setHandler('use',      this.commandUse.bind(this));
    this._skillActionWindow.setHandler('memorize', this.commandMemorize.bind(this));
    this._skillActionWindow.setHandler('learn',    this.commandLearn.bind(this));
    this._skillActionWindow.setHandler('cancel',   this.onActionCancel.bind(this));
    this._skillActionWindow.setHandler('pagedown', this.nextActor.bind(this));
    this._skillActionWindow.setHandler('pageup',   this.previousActor.bind(this));
    this._skillActionWindow.setHelpWindow(this._helpWindow);
    this.addWindow(this._skillActionWindow);
}

// Set actor in action window
FROG.Magic.Scene_Skill_refreshActor = Scene_Skill.prototype.refreshActor;
Scene_Skill.prototype.refreshActor = function() {
    FROG.Magic.Scene_Skill_refreshActor.call(this);
    this._skillActionWindow.setActor(this.actor());
}

// Use command
Scene_Skill.prototype.commandUse = function() {
    this._action = "use";
    this._itemWindow._action = "use";
    this._itemWindow.activate();
    this._itemWindow.selectLast();
}

// Prepare command
Scene_Skill.prototype.commandMemorize = function() {
    this._action = "memorize";
    this._itemWindow._action = "memorize";
    this._itemWindow.activate();
    this._itemWindow.selectLast();
}

// Learn command
Scene_Skill.prototype.commandLearn = function() {
    this._action = "learn";
    this._itemWindow._action = "learn";
    this._itemWindow.activate();
    this._itemWindow.selectLast();
}

// Cancel in action window take you back to skill type window
Scene_Skill.prototype.onActionCancel = function() {
    this._skillActionWindow.deselect();
    this._skillTypeWindow.activate();
}

// Item window has a different height
Scene_Skill.prototype.createItemWindow = function() {
    var wx = 0;
    var wy = this._skillActionWindow.y + this._skillActionWindow.height;
    var ww = Graphics.boxWidth;
    var wh = Graphics.boxHeight - wy;
    this._itemWindow = new Window_SkillList(wx, wy, ww, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this._skillTypeWindow.setSkillWindow(this._itemWindow);
    this._skillActionWindow.setSkillWindow(this._itemWindow);
    this.addWindow(this._itemWindow);
}

// Use, memorize or learn skill
Scene_Skill.prototype.onItemOk = function() {
    var actor = this.user();
    var skill = this.item();

    switch (this._action) {
        case "use":
            this.actor().setLastMenuSkill(skill);
            this.determineItem();
            break;

        case "memorize":
            actor.memorizeSkill(skill);
            //FROG.Magic.gainSpellMemorized(actor, skill, 1);
            this.refreshAllWindows();
            break;

        case "learn":
            FROG.Magic.gainSpellLearned(actor, skill, 1);
            this.refreshAllWindows();
            break;
    }
}

// Refresh all windows
Scene_Skill.prototype.refreshAllWindows = function () {
    this._itemWindow.refresh();
    this._skillTypeWindow.refresh();
    this._skillActionWindow.refresh();
    this._itemWindow.activate();
}


/* ---------------------------------------------------------------*\
                        Window_SkillAction
\* -------------------------------------------------------------- */

function Window_SkillAction() {
    this.initialize.apply(this, arguments);
}

Window_SkillAction.prototype = Object.create(Window_HorzCommand.prototype);
Window_SkillAction.prototype.constructor = Window_SkillAction;

Window_SkillAction.prototype.initialize = function(x, y) {
    Window_HorzCommand.prototype.initialize.call(this, x, y);
    this._actor = null;
    this._action = null;
    this._stypeId = 0;
    this._cols = 0;
    this._useHelp = "";
    this._prepareHelp = "";
    this._learnHelp = "";
    this.deactivate();
    this.refresh();
    this.select(-1);
}

Window_SkillAction.prototype.windowWidth = function() {
    return Graphics.boxWidth;
}

Window_SkillAction.prototype.maxCols = function() {
    return this._cols;
}

// Make command list and dynamically set the number of columns
Window_SkillAction.prototype.makeCommandList = function() {
    this._cols = 1;
    var classMagic = FROG.Magic.getClassMagic(this._actor, this._stypeId);
    if (classMagic) {
        var badge = 0;
        var useCommand = "Use";
        var prepareCommand = "Prepare";
        var learnCommand = "Learn";
        this._useHelp = "";
        this._prepareHelp = "";
        this._learnHelp = "";

        if (!FROG.Core.isEmpty(classMagic.text)) {
            useCommand = classMagic.text.useCommand || "Use";
            prepareCommand = classMagic.text.prepareCommand || "Prepare";
            learnCommand = classMagic.text.learnCommand || "Learn";
            this._useHelp = classMagic.text.useHelp;
            this._prepareHelp = classMagic.text.prepareHelp;
            this._learnHelp = classMagic.text.learnHelp;
        }

        this.addCommand(useCommand, "use");

        if (classMagic.casterType == "Prepared" || classMagic.casterType == "Hybrid") {
            badge = (classMagic.casterType == "Prepared")
                ? FROG.Magic.numSpellsToMemorize(this._actor, this._stypeId)
                : FROG.Magic.numSpellsToRetrieve(this._actor, this._stypeId);

            if (badge > 0) prepareCommand += " (" + badge + ")";
            this.addCommand(prepareCommand, "memorize");
            this._cols++;
        }

        if (classMagic.defaultKnown != "All" && FROG.Magic.canLearnSpells(this._actor, this._stypeId)) {
            badge = FROG.Magic.numSpellsToLearn(this._actor, this._stypeId);
            if (badge > 0) learnCommand += " (" + badge + ")";
            this.addCommand(learnCommand, "learn");
            this._cols++;
        }
    }
    else {
        this.addCommand("Use", "use");
    }
}

Window_SkillAction.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.makeCommandList();
        this.refresh();
    }
}

Window_SkillAction.prototype.setStypeId = function(stypeId) {
    if (this._stypeId !== stypeId) {
        this._stypeId = stypeId;
        this.makeCommandList();
        this.refresh();
    }
}

Window_SkillAction.prototype.setSkillWindow = function(skillWindow) {
    this._skillWindow = skillWindow;
}

Window_SkillAction.prototype.setHelpWindow = function(helpWindow) {
    this._helpWindow = helpWindow;
}

Window_SkillAction.prototype.update = function() {
    Window_Command.prototype.update.call(this);
    if (this._skillWindow) {
        var action = this.currentSymbol();
        this._skillWindow.setAction(action);

        var help = "";
        switch (action) {
            case "use": help = this._useHelp; break;
            case "memorize": help = this._prepareHelp; break;
            case "learn": help = this._learnHelp; break;
        }
        this._helpWindow.setText(help);
    }
}


/* ---------------------------------------------------------------*\
                        Window_SkillType
\* -------------------------------------------------------------- */

// Set action window
Window_SkillType.prototype.setSkillActionWindow = function (actionWindow) {
    this._skillActionWindow = actionWindow;
}

// Set skill type in action window
FROG.Magic.Window_SkillType_update = Window_SkillType.prototype.update;
Window_SkillType.prototype.update = function() {
    FROG.Magic.Window_SkillType_update.call(this);
    if (this._skillActionWindow) {
        this._skillActionWindow.setStypeId(this.currentExt());
    }
}


/* ---------------------------------------------------------------*\
                        Window_SkillList
\* -------------------------------------------------------------- */

// Set action (use, memorize, learn)
Window_SkillList.prototype.setAction = function(action) {
    if (this._action !== action) {
        this._action = action;
        this.refresh();
        this.resetScroll();
    }
}

// Make the proper skill list based on the current action
FROG.Magic.Window_SkillList_makeItemList = Window_SkillList.prototype.makeItemList;
Window_SkillList.prototype.makeItemList = function() {
    FROG.Magic.Window_SkillList_makeItemList.call(this);
    var actor = this._actor;
    if (!actor) return;

    switch (this._action || "use") {
        // Use Menu
        case "use":
            if (this._data.length) {
                var casterType = FROG.Magic.getClassMagic(actor, this._stypeId, "casterType");
                if (casterType == "Prepared" || casterType == "Hybrid") {
                    this._data = FROG.Magic.getActorMagic(actor, this._stypeId, "prepared") || [];
                }
            }
            break;

        // Memorize menu
        case "memorize":
            var classMagic = FROG.Magic.getClassMagic(actor, this._stypeId);
            if (classMagic && classMagic.casterType == "Hybrid" && classMagic.hybridRetrieve && classMagic.hybridRetrieve.length) {
                this._data = FROG.Magic.getRetrievableSpells(actor, this._stypeId);
            }
            else {
                this._data = FROG.Magic.getMemorizableSpells(actor, this._stypeId);
            }
            break;

        // Learn menu
        case "learn":
            this._data = FROG.Magic.getLearnableSpells(actor, this._stypeId);
            break;
    }

    // Sort spells
    FROG.Magic.sortSpells(actor, this._data);
    this._data = this._data.concat(FROG.Magic.getPartialLearnedSpells(actor, this._stypeId));
}

// Draw the proper skill cost based on the skill type's resource
Window_SkillList.prototype.drawSkillCost = function(skill, x, y, width) {
    var actor = this._actor;
    var fontSize = 28;
    var color = "";
    var text = "";
    this.changeFontSize(fontSize || 0);

    var options = FROG.Magic.getOptions();
    var resource = FROG.Magic.getClassMagic(actor, skill.stypeId, "resource");
    switch (resource) {
        case "Spell Slots":
            var slotLevel = FROG.Magic.getSpell(actor, skill, "level");
            if (slotLevel || slotLevel === 0) {
                text = "L" + slotLevel;
                if (options && options.costIndicator && options.costIndicator.spellSlots) {
                    var costObj = options.costIndicator.spellSlots;
                    text = (costObj.format) ? costObj.format.replace("%1", slotLevel) : "";
                    color = costObj.color;
                    fontSize = costObj.fontSize || 0;
                }
            }
            break;

        case "Powers":
            text = "At Will";
            var powerUses = FROG.Magic.getPowerUses(actor, skill);
            if (options && options.costIndicator && options.costIndicator.powers) {
                var costObj = options.costIndicator.powers;
                switch (powerUses.frequency) {
                    case "d":
                        text = costObj.formatPerDay.replace("%1", powerUses.uses);
                        break;

                    case "e":
                        text = costObj.formatPerEncounter.replace("%1", powerUses.uses);
                        break;

                    case "r":
                        if (powerUses.reset > 0) {
                            text = "Wait " + powerUses.reset;
                        }
                        else {
                            text = costObj.formatCooldown.replace("%1", powerUses.uses);
                        }
                        break;

                    case "w":
                        text = costObj.formatAtWill;
                        break;
                }

                color = costObj.color;
                fontSize = costObj.fontSize || 0;
            }
            break;

        default:
            text = skill.mpCost + "MP";
            if (options && options.costIndicator && options.costIndicator.magicPoints) {
                var costObj = options.costIndicator.magicPoints;
                text = (costObj.format) ? costObj.format.replace("%1", skill.mpCost) : "";
                color = costObj.color;
                fontSize = costObj.fontSize || 0;
            }
            break;
    }

    if (skill) {
        if (!skill.partiallyLearned) {
            // Draw Cost
            this.changeFontSize(fontSize);
            this.changeTextColor(this.frogParamColor(color));
            this.drawText(text, x, y, width, 'right');
            width -= this.textWidth(text);

            // Draw TP
            if (actor.skillTpCost(skill) > 0) {
                text = actor.skillTpCost(skill) + TextManager.tpA;
                this.changeTextColor(this.tpCostColor());
                this.drawText(text, x, y, width, 'right');
                width -= this.textWidth(tpText);
            }
        }
        else {
            // Draw partially learned spell
            this.changeFontSize(fontSize);
            this.changeTextColor(this.frogParamColor(color));

            if (skill.exposure > 0) {
                text = skill.exposure + "%";
                this.drawText(text, x, y, width, 'right');
                width -= this.textWidth(text);
            }

            if (skill.essence > 0 && skill.essenceRequired > 0 && skill.essence < skill.essenceRequired) {
                text = ~~(skill.essence / skill.essenceRequired * 100) + "%";
                this.drawText(text, x, y, width, 'right');
                width -= this.textWidth(text);
            }
        }
    }

    this.resetFontSettings();
}

// Is skill active
FROG.Magic.Window_SkillList_isEnabled = Window_SkillList.prototype.isEnabled;
Window_SkillList.prototype.isEnabled = function (item) {
    var enabled = FROG.Magic.Window_SkillList_isEnabled.call(this, item);
    if (this._actor && (this._action == "memorize" || this._action == "learn")) {
        // Memorize or Learn spells
        enabled = (item && !item.partiallyLearned);
    }
    else if (enabled) {
        // Use spell
        enabled = FROG.Magic.isMagicEnabled(this._actor, item);
    }

    return enabled;
}

/* ---------------------------------------------------------------*\
                        Script Calls
\* -------------------------------------------------------------- */

/** Easily retrieve an actor's magic properties of a given skill type
 * @param {object} actor - An actor
 * @param {number} stypeId - A skill type id
 * @param {string} prop - Property name (optional)
 * @returns {variant} Returns actor magic object or property value
 */
FROG.Magic.getActorMagic = function (actor, stypeId, prop) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    actor = actor || {};
    stypeId = stypeId || 0;
    var actorMagic = null;

    if (actor._frogMagic && actor._frogMagic[stypeId]) {
        actorMagic = actor._frogMagic[stypeId];
        if (prop) {
            actorMagic = actorMagic[prop] || null;
        }
    }

    return actorMagic;
}

/** Easily retrieve a class magic object or one of it's top-level properties
 * @param {object} actor - An actor
 * @param {number} stypeId - A skill type id
 * @param {string} prop - Property name (optional)
 * @returns {variant} Returns class magic object or property value
 */
FROG.Magic.getClassMagic = function (actor, stypeId, prop) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    actor = actor || {};
    stypeId = stypeId || 0;

    var classConfig = $frogMagic.classConfig.filter(function (config) {
        return config.classId === actor._classId;
    })[0] || null;

    if (classConfig) {
        if (classConfig.magic && classConfig.magic.length && stypeId > 0) {
            var classConfigMagic = classConfig.magic.filter(function (config) {
                return config.skillTypeId === stypeId;
            })[0] || null;

            if (classConfigMagic && prop) {
                return classConfigMagic[prop];
            }

            return classConfigMagic;
        }
        else {
            return classConfig.magic || null;
        }
    }

    return null;
}

/** Adds entire spell list to an actor's spell info object
 * @param {object} actor - An actor
 * @param {string} spellbook - Name of a spell list
 */
FROG.Magic.addSpellInfo = function (actor, spellbook) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    actor = actor || {};

    var spellConfigArr = FROG.Magic.getSpellConfig(spellbook);
    if (!spellConfigArr) return;

    for (var i=0; i<spellConfigArr.length; i++) {
        var spellConfig = spellConfigArr[i];
        if (!spellConfig) continue;
        var skill = $dataSkills[spellConfig.skillId || 0] || {};
        var actorMagic = FROG.Magic.getActorMagic(actor, skill.stypeId);
        if (!actorMagic) continue;
        var classMagic = FROG.Magic.getClassMagic(actor, skill.stypeId);
        var powerUses = spellConfig.powerUse || {};

        actorMagic.spellInfo.push({
            id: skill.id,
            essence: 0,
            exposure: 0,
            canLearn: spellConfig.canLearn,
            canLearnFromItem: classMagic.learnFromItems,
            components: spellConfig.components || [],
            level: spellConfig.level,
            powerCount: 0,
            powerCountMax: powerUses.uses || 0,
            powerMax: powerUses.uses || 0,
            powerFrequency: powerUses.frequency || "w",
            powerResetCounter: 0,
            prerequisite: spellConfig.prerequisite || [],
            school: spellConfig.school.toLowerCase(),
            stypeId: skill.stypeId,
            xp: 0
        });
    }
}

/** Retrieve an actor's spell info
 * @param {object} options - List of options used as search criteria
 * @returns {object} Returns array of spell info objects based on search criteria
 */
FROG.Magic.getSpellInfo = function (options) {
    var actor = options.actor || {};
    var skill = options.skill || {};
    var stypeId = options.stypeId || 0;
    var level = (options.level || options.level === 0) ? options.level : -1;
    var maxLevel = (options.maxLevel || options.maxLevel === 0) ? options.maxLevel : -1;
    var hasSkill = (typeof options.hasSkill == "boolean") ? options.hasSkill : null;
    var canLearn = (typeof options.canLearn == "boolean") ? options.canLearn : null;
    var knownAvailable = !!options.knownAvailable;
    var memorizeAvailable = !!options.memorizeAvailable;
    var retrieveAvailable = !!options.retrieveAvailable;
    var isPrepared = (typeof options.isPrepared == "boolean") ? options.isPrepared : null;
    var meetsPrerequisites = (typeof options.meetsPrerequisites == "boolean") ? options.meetsPrerequisites : null;
    var dfault = options.default || null;

    if (typeof actor == "number") actor = $gameActors.actor(actor);
    if (typeof skill == "number") skill = $dataSkills[skill];

    var actorMagic = FROG.Magic.getActorMagic(actor, stypeId || skill.stypeId) || {};
    var spellInfo = actorMagic.spellInfo;

    if (spellInfo && spellInfo.length) {
        spellInfo = spellInfo.filter(function (info) {
            return (
                ((!FROG.Core.isEmpty(skill) && info.id === skill.id) || (FROG.Core.isEmpty(skill) && info.stypeId === stypeId)) &&
                (level < 0 || info.level === level) &&
                (maxLevel < 0 || info.level <= maxLevel) &&
                (meetsPrerequisites === null || FROG.Magic.meetsPrerequisites(actor, info.prerequisite)) &&
                (actorMagic.school.indexOf("all") > -1 || actorMagic.school.indexOf(info.school) > -1) &&
                (hasSkill === null || (hasSkill && actor.hasSkill(info.id)) || (!hasSkill && !actor.hasSkill(info.id))) &&
                (canLearn === null || info.canLearn === canLearn) &&
                (!knownAvailable || (~~actorMagic.known[info.level] - ~~actorMagic.learned[info.level]) > 0) &&
                (!memorizeAvailable || (~~actorMagic.max[info.level] - ~~actorMagic.memorized[info.level]) > 0) &&
                (!retrieveAvailable || (~~actorMagic.retrievedMax[info.level] - ~~actorMagic.retrieved[info.level]) > 0) &&
                (isPrepared === null || isPrepared === FROG.Magic.isSpellPrepared(actor, $dataSkills[info.id]))
            );
        });
    }

    return (spellInfo && !FROG.Core.isEmpty(spellInfo)) ? spellInfo : dfault;
}

/** Gets spell info from spell list plugin parameters
 * @param {string} spellbook - Name of a spell list
 * @param {object} skill - A skill
 * @param {number} value - Plugin paramter spell information
 */
FROG.Magic.getSpellConfig = function (spellbook, skill) {
    if (typeof skill == "number") skill = $dataSkills[skill];
    skill = skill || {};
    spellbook = spellbook || "";

    if (spellbook) {
        var spellList = $frogMagic.spellLists.filter(function (list) {
            return list.name.toLowerCase() == spellbook.toLowerCase();
        })[0] || null;

        if (spellList) {
            if (!FROG.Core.isEmpty(skill)) {
                return spellList.spellConfig.filter(function (list) {
                    return list.skillId === skill.id;
                })[0] || null;
            }
            else {
                return spellList.spellConfig || [];
            }
        }
    }
    return [];
}

/** Easily retrieve plugin parameter info for an item
 * @param {number} itemId - Id of an item
 * @param {string} dataClass - Type of equipment (weapon or armor)
 * @param {string} prop - Property name (optional)
 * @returns {variant} Returns item object or property value
 */
FROG.Magic.getItemConfig = function (itemId, dataClass, prop) {
    itemId = itemId || 0;
    dataClass = dataClass || "";
    if (!$frogMagic.itemConfig) return null;
    var itemConfig = null;

    switch (dataClass.toLowerCase()) {
        case "weapon":
            itemConfig = $frogMagic.itemConfig.weapon.filter(function (config) {
                return config.weaponId === itemId;
            })[0] || null;
            break;

        case "armor":
            itemConfig = $frogMagic.itemConfig.armor.filter(function (config) {
                return config.armorId === itemId;
            })[0] || null;
            break;
    }

    // Return property value if sent
    if (itemConfig && prop) {
        return itemConfig[prop] || null;
    }

    return itemConfig;
}

/** Retrieve enemy config info
 * @param {object} enemy - An enemy
 * @returns {object} Returns plugin paramter info for this enemy
 */
FROG.Magic.getEnemyConfig = function (enemy) {
    if (typeof enemy == "number") enemy = $dataEnemies[enemy];
    enemy = enemy || {};

    return $frogMagic.enemyConfig.filter(function (config) {
        return config.enemyId === enemy._enemyId;
    })[0] || null;
}

/** Retrieve options info
 * @param {string} prop - Options property
 * @returns {variant} Returns plugin paramter property info
 */
FROG.Magic.getOptions = function (prop) {
    prop = prop || "";
    if ($frogMagic && $frogMagic.options) {
        if (prop) {
            return $frogMagic.options[prop];
        }

        return $frogMagic.options;
    }
    return null;
}

/** Determines whether a skill is prepared or not
 * @param {object} actor - An actor
 * @param {array} prereqs - Array of skill ids that the actor is required to know
 * @returns {boolean} Returns true if the skill is prepared, false if not.
 */
FROG.Magic.meetsPrerequisites = function (actor, prereqs) {
    if (!prereqs || !prereqs.length) return true;
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    actor = actor || {};

    return actor._skills.filter(function (skill_id) {
        return prereqs.indexOf(skill_id) > -1;
    }).length === prereqs.length;
}

/** Retrieve a single spell info object
 * @param {object} actor - An actor
 * @param {object} skill - A skill
 * @param {string} prop - Property name (optional)
 * @returns {variant} Returns a single spell info object or one of its property value
 */
FROG.Magic.getSpell = function (actor, skill, prop) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    if (typeof skill == "number") skill = $dataSkills[skill];
    actor = actor || {};
    skill = skill || {};
    prop = prop || "";

    var spellInfo = FROG.Magic.getSpellInfo({
        actor: actor,
        skill: skill,
        default: null
    });

    if (spellInfo) {
        if (prop) return spellInfo[0][prop];
        return spellInfo[0] || null;
    }

    return null;
}

/** Retrieve spells for an actor's Learn list
 * @param {object} actor - An actor
 * @param {number} stypeId - A skill type id
 * @returns {array} Returns learnable skills
 */
FROG.Magic.getLearnableSpells = function (actor, stypeId) {
    var actor = actor || {};
    var stypeId = stypeId || 0;
    if (typeof actor == "number") actor = $gameActors.actor(actor);

    return FROG.Magic.getSpellInfo({
        actor: actor,
        stypeId: stypeId,
        maxLevel: FROG.Magic.getActorMaxLearn(actor, stypeId),
        hasSkill: false,
        canLearn: true,
        knownAvailable: true,
        meetsPrerequisites: true,
        default: []
    }).map(function (x) {
        return $dataSkills[x.id];
    });
}

/** Retrieve spells for an actor's Prepare list
 * @param {object} actor - An actor
 * @param {number} stypeId - A skill type id
 * @returns {array} Returns memorizable skills
 */
FROG.Magic.getMemorizableSpells = function (actor, stypeId) {
    var actor = actor || {};
    var stypeId = stypeId || 0;
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    var casterType = FROG.Magic.getClassMagic(actor, stypeId, "casterType");

    return FROG.Magic.getSpellInfo({
        actor: actor,
        stypeId: stypeId,
        maxLevel: FROG.Magic.getActorMaxSlot(actor, stypeId),
        hasSkill: true,
        memorizeAvailable: true,
        isPrepared: (casterType == "Hybrid") ? false : null,
        default: []
    }).map(function (x) {
        return $dataSkills[x.id];
    });
}

/** Retrieve spells for an actor's Retrieve list
 * @param {object} actor - An actor
 * @param {number} stypeId - A skill type id
 * @returns {array} Returns Retrievable skills
 */
FROG.Magic.getRetrievableSpells = function (actor, stypeId) {
    var actor = actor || {};
    var stypeId = stypeId || 0;
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    var casterType = FROG.Magic.getClassMagic(actor, stypeId, "casterType");

    return FROG.Magic.getSpellInfo({
        actor: actor,
        stypeId: stypeId,
        maxLevel: FROG.Magic.getActorMaxSlot(actor, stypeId),
        hasSkill: true,
        retrieveAvailable: true,
        isPrepared: (casterType == "Hybrid") ? false : null,
        default: []
    }).map(function (x) {
        return $dataSkills[x.id];
    });
}

/** Retrieve partially learned skills
 * @param {object} actor - An actor
 * @param {number} stypeId - A skill type id
 * @returns {array} Returns partially learned skills
 */
FROG.Magic.getPartialLearnedSpells = function (actor, stypeId) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    actor = actor || {};
    stypeId = stypeId || 0;

    var actorMagic = FROG.Magic.getActorMagic(actor, stypeId);
    if (actorMagic && actorMagic.spellInfo && actorMagic.spellInfo.length) {
        var maxSlot = FROG.Magic.getActorMaxSlot(actor, stypeId);
        var essenceSkill = FROG.Magic.getEquipEssenceSpells(actor);
        var spellInfo = actorMagic.spellInfo.filter(function (info) {
            return (
                (info.exposure > 0 && info.exposure < 100) ||
                essenceSkill.filter(function (ess) {
                    return (
                        ess.skillId == info.id &&
                        info.essence > 0 &&
                        info.essence < ess.essenceRequired &&
                        info.level <= maxSlot
                    )
                }).length > 0
            )
        });

        if (spellInfo) {
            var skills = [];
            for (var i=0; i<spellInfo.length; i++) {
                var info = spellInfo[i];
                var skill = Object.assign({}, $dataSkills[info.id]);

                // Exposure
                skill.exposure = info.exposure;

                // Essence
                var essence = essenceSkill.filter(function (ess) {
                    return info.id === ess.skillId;
                })[0] || {};
                skill.essence = info.essence;
                skill.essenceRequired = essence.essenceRequired;

                skill.partiallyLearned = true;
                skills.push(skill);
            }
            return skills || [];
        }
    }

    return [];
}

/** Expend spell slots, magic points or power uses
 * @param {object} actor - An actor
 * @param {object} skill - A skill
 */
FROG.Magic.useSkill = function (actor, skill) {
    if (actor.isActor() && DataManager.isSkill(skill)) {
        var classMagic = FROG.Magic.getClassMagic(actor, skill.stypeId);
        if (!classMagic) return;

        switch (classMagic.resource) {
            case "Spell Slots":
                FROG.Magic.gainSlotUsed(actor, skill, 1);

                // Only remove the spell for Prepared casters, not Hybrid ones
                if (classMagic.casterType == "Prepared") {
                    FROG.Magic.gainSpellPrepared(actor, skill, -1);
                }
                break;

            case "Magic Points":
                actor.gainMp(skill.mpCost * -1);
                break;

            case "Powers":
                FROG.Magic.gainPowerUsed(actor, skill, 1);
                break;

        }

        FROG.Magic.useSpellComponents(actor, skill);
        FROG.Magic.gainSpellXp(actor, skill);
    }
}

/** Retrieve display for spell slots
 * @param {object} actor - An actor
 * @param {number} stypeId - A skill type id
 * @returns {string} Returns text display
 */
FROG.Magic.getActorSlotsDisplay = function (actor, stypeId) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    actor = actor || {};
    var slotsText = "";
    var actorMagic = FROG.Magic.getActorMagic(actor, stypeId);

    if (actorMagic && actorMagic.max && actorMagic.used) {
        for (var i=0; i<actorMagic.max.length; i++) {
            if (actorMagic.max[i] == "-") {
                slotsText += "-/";
            }
            else if (actorMagic.max[i] > 0) {
                slotsText += (actorMagic.max[i] - actorMagic.used[i]) + "/";
            }
        }
        if (slotsText.indexOf('/') > -1) {
            slotsText = slotsText.slice(0, -1);
        }
    }

    return slotsText;
}

/** Retrieve display for powers
 * @param {object} actor - An actor
 * @param {number} stypeId - A skill type id
 * @returns {string} Returns text display
 */
FROG.Magic.getActorPowersDisplay = function (actor, stypeId) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    actor = actor || {};
    var count = max = 0;
    var actorMagic = FROG.Magic.getActorMagic(actor, stypeId);

    if (actorMagic && actorMagic.spellInfo && actorMagic.spellInfo.length) {
        for (var i=0; i<actorMagic.prepared.length; i++) {
            var spellInfo = actorMagic.spellInfo.filter(function (info) {
                return info.id === actorMagic.prepared[i].id;
            })[0] || null;

            if (spellInfo && spellInfo.powerFrequency != "w") {
                count += spellInfo.powerCount;
                max += spellInfo.powerCountMax;
            }
        }
    }

    return (max - count) + "/" + max;
}

/** Determines if a spell slot is available for a given skill
 * @param {object} actor - An actor
 * @param {object} skill - A skill
 * @returns {boolean} Returns true if the actor has a spell slot available, false if not.
 */
FROG.Magic.isSlotAvailable = function (actor, skill) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    if (typeof skill == "number") skill = $dataSkills[skill];
    actor = actor || {};
    skill = skill || {};

    var actorMagic = FROG.Magic.getActorMagic(actor, skill.stypeId);
    var slotLevel = FROG.Magic.getSpell(actor, skill, "level");

    if (actorMagic && (slotLevel || slotLevel === 0) && actorMagic.used && actorMagic.used.length >= slotLevel) {
        var used = actorMagic.used[slotLevel];;
        var max = actorMagic.max[slotLevel];;
        if (max === "-") max = 99999;
        return (max - used) > 0;
    }

    return true;
}

/** Determines if a power is available for a given skill
 * @param {object} actor - An actor
 * @param {object} skill - A skill
 * @returns {number} Returns true if the actor has a power available, false if not.
 */
FROG.Magic.powersAvailable = function (actor, skill) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    if (typeof skill == "number") skill = $dataSkills[skill];
    actor = actor || {};
    skill = skill || {};

    var spell = FROG.Magic.getSpell(actor, skill);
    if (spell) {
        if (spell.powerFrequency == "w") {
            return 9999;
        }
        else {
            return spell.powerCountMax - spell.powerCount;
        }
    }

    return 0;
}

/** Determines if a spell is prepared
 * @param {object} actor - An actor
 * @param {object} skill - A skill
 * @returns {boolean} Returns true if the spell isprepared, false if not.
 */
FROG.Magic.isSpellPrepared = function (actor, skill) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    if (typeof skill == "number") skill = $dataSkills[skill];
    actor = actor || {};
    skill = skill || {};

    var actorMagic = FROG.Magic.getActorMagic(actor, skill.stypeId);
    if (actorMagic && actorMagic.prepared && actorMagic.prepared.length) {
        return (actorMagic.prepared.find(function (prep) { return prep.id === skill.id })) ? true : false;
    }

    return false;
}

/** Retrieve use properties for a given power
 * @param {object} actor - An actor
 * @param {object} skill - A skill
 * @returns {object} Returns power properties
 */
FROG.Magic.getPowerUses = function (actor, skill) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    if (typeof skill == "number") skill = $dataSkills[skill];
    actor = actor || {};
    skill = skill || {};

    // Get power use from actor if available
    var spell = FROG.Magic.getSpell(actor, skill);
    if (spell) {
        return {
            uses: spell.powerCountMax - spell.powerCount,
            frequency: spell.powerFrequency,
            reset: spell.powerResetCounter
        }
    }

    return "";
}

/** Add or subtract spell slot count
 * @param {object} actor - An actor
 * @param {object} skill - A skill
 * @param {number} value - Number to add, or subtract if negative.
 */
FROG.Magic.gainSlotUsed = function (actor, skill, value) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    if (typeof skill == "number") skill = $dataSkills[skill];
    actor = actor || {};
    skill = skill || {};
    value = value || 1;

    var actorMagic = FROG.Magic.getActorMagic(actor, skill.stypeId);
    var slotLevel = FROG.Magic.getSpell(actor, skill, "level");

    if (actorMagic && actorMagic.used && actorMagic.used.length >= slotLevel) {
        var max = actorMagic.max[slotLevel];
        var used = actorMagic.used[slotLevel];
        if (max != "-" && (used || used === 0) && used < max) {
            actorMagic.used[slotLevel] += value;
        }
    }
}

/** Add or subtract power use count
 * @param {object} actor - An actor
 * @param {object} skill - A skill
 * @param {number} value - Number to add, or subtract if negative.
 */
FROG.Magic.gainPowerUsed = function (actor, skill, value) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    if (typeof skill == "number") skill = $dataSkills[skill];
    actor = actor || {};
    skill = skill || {};
    value = value || 1;

    var spell = FROG.Magic.getSpell(actor, skill);
    if (spell && spell.powerCount < spell.powerCountMax) {
        if (value > 0) {
            if (spell.powerFrequency == "r") {
                spell.powerResetCounter = spell.powerMax;
            }
            else {
                spell.powerCount += value;
            }
        }
        else {
            if (spell.powerFrequency == "r") {
                spell.powerResetCounter = 0;
            }
            else {
                spell.powerCount -= value;
            }
        }
    }
}

/** Add or subtract spells learned count
 * @param {object} actor - An actor
 * @param {object} skill - A skill
 * @param {number} value - Number to add, or subtract if negative.
 */
FROG.Magic.gainSpellLearned = function (actor, skill, value) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    if (typeof skill == "number") skill = $dataSkills[skill];
    actor = actor || {};
    skill = skill || {};
    value = value || 1;

    var actorMagic = FROG.Magic.getActorMagic(actor, skill.stypeId);
    if (actorMagic && actorMagic.learned && actorMagic.learned.length) {
        var slotLevel = FROG.Magic.getSpell(actor, skill, "level");
        if (!slotLevel && slotLevel !== 0) return;

        var learned = actorMagic.learned[slotLevel];
        if (learned || learned === 0) {
            actor.learnSkill(skill.id);
            actorMagic.learned[slotLevel] += value;
        }
    }
}

/** Add or subtract spells memorized count
 * @param {object} actor - An actor
 * @param {object} skill - A skill
 * @param {number} value - Number to add, or subtract if negative.
 */
FROG.Magic.gainSpellMemorized = function (actor, skill, value) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    if (typeof skill == "number") skill = $dataSkills[skill];
    actor = actor || {};
    skill = skill || {};
    value = value || 1;

    var actorMagic = FROG.Magic.getActorMagic(actor, skill.stypeId);
    if (actorMagic && actorMagic.memorized && actorMagic.memorized.length) {
        var slotLevel = FROG.Magic.getSpell(actor, skill, "level");
        if (!slotLevel && slotLevel !== 0) return;

        var memorized = actorMagic.memorized[slotLevel];
        if (memorized || memorized === 0) {
            actorMagic.memorized[slotLevel] += value;
        }
    }
}

/** Add or subtract spells retrieved count
 * @param {object} actor - An actor
 * @param {object} skill - A skill
 * @param {number} value - Number to add, or subtract if negative.
 */
FROG.Magic.gainSpellRetrieved = function (actor, skill, value) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    if (typeof skill == "number") skill = $dataSkills[skill];
    actor = actor || {};
    skill = skill || {};
    value = value || 1;

    var actorMagic = FROG.Magic.getActorMagic(actor, skill.stypeId);
    if (actorMagic && actorMagic.retrieved && actorMagic.retrieved.length) {
        var slotLevel = FROG.Magic.getSpell(actor, skill, "level");
        if (!slotLevel && slotLevel !== 0) return;

        var retrieved = actorMagic.retrieved[slotLevel];
        if (retrieved || retrieved === 0) {
            actorMagic.retrieved[slotLevel] += value;
        }
    }
}

/** Add or subtract spells known count
 * @param {object} actor - An actor
 * @param {object} skill - A skill
 * @param {number} value - Number to add, or subtract if negative.
 */
FROG.Magic.gainSpellKnown = function (actor, skill, value) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    if (typeof skill == "number") skill = $dataSkills[skill];
    actor = actor || {};
    skill = skill || {};
    value = value || 1;

    var actorMagic = FROG.Magic.getActorMagic(actor, skill.stypeId);
    if (actorMagic && actorMagic.known && actorMagic.known.length) {
        var slotLevel = FROG.Magic.getSpell(actor, skill, "level");
        if (!slotLevel && slotLevel !== 0) return;

        var known = actorMagic.known[slotLevel];
        if (known || known === 0) {
            actorMagic.known[slotLevel] += value;
        }
    }
}

/** Add or subtract spells prepared count
 * @param {object} actor - An actor
 * @param {object} skill - A skill
 * @param {number} value - Number to add, or subtract if negative.
 */
FROG.Magic.gainSpellPrepared = function (actor, skill, value) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    if (typeof skill == "number") skill = $dataSkills[skill];
    actor = actor || {};
    skill = skill || {};
    value = value || 0;

    var actorMagic = FROG.Magic.getActorMagic(actor, skill.stypeId);
    if (actorMagic && actorMagic.prepared && value) {
        if (value > 0) {
            actorMagic.prepared.push(skill);
        }
        else if (value < 0) {
            var casterType = FROG.Magic.getClassMagic(actor, skill.stypeId, "casterType");
            if (casterType == "Prepared" || casterType == "Hybrid") {
                var index = actorMagic.prepared.map(function(prep) {
                    return prep.id;
                }).indexOf(skill.id);

                actorMagic.prepared.splice(index, 1);
            }
        }
    }
}

/** Retrieve maximum level of spell an actor can use
 * @param {object} actor - An actor
 * @param {number} stypeId - A skill type id
 * @returns {number} Returns the maximum spell level
 */
FROG.Magic.getActorMaxSlot = function (actor, stypeId) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    actor = actor || {};
    stypeId = stypeId || 0;

    // Return Max Spell Level
    var maxSpellLevel = FROG.Magic.getClassMagic(actor, stypeId, "maxSpellLevel");
    if (maxSpellLevel && maxSpellLevel.length >= actor._level) {
        var maxLevel = maxSpellLevel[actor._level - 1];
        if (maxLevel || maxLevel === 0) {
            return maxLevel;
        }
    }

    // Search through Spells Per Day, Spells Known and Spells Retrievable to find Max Slot
    var actorMagic = FROG.Magic.getActorMagic(actor, stypeId);
    if (actorMagic && actorMagic.max && actorMagic.max.length) {
        for (var i=actorMagic.max.length-1; i>=0; i--) {
            if (actorMagic.max[i] > 0) return i;
            if (actorMagic.retrievedMax[i] > 0) return i;
            if (actorMagic.known[i] > 0) return i;
        }
    }

    return -1;
}

/** Retrieve maximum level of spell an actor can learn
 * @param {object} actor - An actor
 * @param {number} stypeId - A skill type id
 * @returns {number} Returns the maximum spell level
 */
FROG.Magic.getActorMaxLearn = function (actor, stypeId) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    actor = actor || {};
    stypeId = stypeId || 0;

    var known = FROG.Magic.getActorMagic(actor, stypeId, "known");
    if (known && known.length) {
        for (var i=known.length-1; i>=0; i--) {
            if (known[i] > 0) return i;
        }
    }

    return -1;
}

/** Determines whether an actor can learn skills
 * @param {object} actor - An actor
 * @param {number} stypeId - A skill type id
 * @returns {boolean} Returns true if the actor can learn spells of this type, false if not.
 */
FROG.Magic.canLearnSpells = function (actor, stypeId) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    actor = actor || {};
    stypeId = stypeId || 0;

    var actorMagic = FROG.Magic.getActorMagic(actor, stypeId);
    if (actorMagic && actorMagic.known && actorMagic.learned) {
        // Casters may get all or zero level spells for free
        var startIndex = 0;
        var classMagic = FROG.Magic.getClassMagic(actor, stypeId);
        if (classMagic) {
            switch (classMagic.defaultKnown) {
                case "All": return false;
                case "Zero Level":
                    startIndex = 1;
                    break;
            }
        }

        // Calculate total of spells known
        var numKnown = actorMagic.known.slice(startIndex).reduce(function (a, b) {
            return a + b;
        }) || 0;
        return numKnown > 0;
    }

    return false;
}

/** Calculate the number of spells left to learn
 * @param {object} actor - An actor
 * @param {number} stypeId - A skill type id
 * @returns {number} Returns number of spell that can be learned
 */
FROG.Magic.numSpellsToLearn = function (actor, stypeId) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    actor = actor || {};
    stypeId = stypeId || 0;

    var actorMagic = FROG.Magic.getActorMagic(actor, stypeId);
    if (actorMagic && actorMagic.known && actorMagic.learned) {
        // Casters may get all or zero level spells for free
        var startIndex = 0;
        var classMagic = FROG.Magic.getClassMagic(actor, stypeId);
        if (classMagic) {
            switch (classMagic.defaultKnown) {
                case "All": return 0;
                case "Zero Level":
                    startIndex = 1;
                    break;
            }
        }

        // Calculate number of spells known vs number of spells learned
        var numKnown = actorMagic.known.slice(startIndex).reduce(function (a, b) { return a + b }) || 0;
        var numLearned = actorMagic.learned.slice(startIndex).reduce(function (a, b) { return a + b }) || 0;
        return numKnown - numLearned;
    }

    return 0;
}

/** Calculate the number of spells left to memorize
 * @param {object} actor - An actor
 * @param {number} stypeId - A skill type id
 * @returns {number} Returns number of spell that can be memorized
 */
FROG.Magic.numSpellsToMemorize = function (actor, stypeId) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    actor = actor || {};
    stypeId = stypeId || 0;

    var actorMagic = FROG.Magic.getActorMagic(actor, stypeId);
    if (actorMagic && actorMagic.max && actorMagic.memorized) {
        var max = actorMagic.max.reduce(function (a, b) { return a + b }) || 0;
        var memorized = actorMagic.memorized.reduce(function (a, b) { return a + b }) || 0;
        return max - memorized;
    }

    return 0;
}

/** Calculate the number of spells left to retrieve
 * @param {object} actor - An actor
 * @param {number} stypeId - A skill type id
 * @returns {number} Returns number of spell that can be retrieved
 */
FROG.Magic.numSpellsToRetrieve = function (actor, stypeId) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    actor = actor || {};
    stypeId = stypeId || 0;

    var actorMagic = FROG.Magic.getActorMagic(actor, stypeId);
    if (actorMagic && actorMagic.retrievedMax && actorMagic.retrieved) {
        var retrievedMax = actorMagic.retrievedMax.reduce(function (a, b) { return a + b }) || 0;
        var retrieved = actorMagic.retrieved.reduce(function (a, b) { return a + b }) || 0;
        return retrievedMax - retrieved;
    }

    return 0;
}

/** Sort an array of skills by level and then by name
 * @param {object} actor - An actor
 * @param {array} skills - Array of skills
 */
FROG.Magic.sortSpells = function (actor, skills) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    actor = actor || {};
    var level1, level2;

    skills.sort(function (skill1, skill2) {
        var level1 = FROG.Magic.getSpell(actor, skill1, "level");
        var level2 = FROG.Magic.getSpell(actor, skill2, "level");

        // Sort by slot if different
        if (FROG.Magic.getOptions("sortOrder") == "DESC") {
            if (level1 < level2) return 1;
            if (level2 < level1) return -1;
        }
        else {
            if (level1 > level2) return 1;
            if (level2 > level1) return -1;
        }

        // Sort by name when same
        if (skill1.name > skill2.name) return 1;
        if (skill2.name > skill1.name) return -1;
        return 0;
    });
}

/** Reset all of an actor's used spells and powers
 * @param {object} actor - An actor
 */
FROG.Magic.resetUsedSpells = function (actor) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    actor = actor || {};

    var classMagicArr = FROG.Magic.getClassMagic(actor);
    if (!classMagicArr) return;

    for (var j=0; j<classMagicArr.length; j++) {
        var classMagic = classMagicArr[j];
        if (!classMagic) continue;

        var actorMagic = FROG.Magic.getActorMagic(actor, classMagic.skillTypeId);
        if (actorMagic && actorMagic.used) {
            // Reset used and memorized spells
            for (var i=0; i<actorMagic.used.length; i++) {
                actorMagic.used[i] = 0;
                actorMagic.memorized[i] = 0;
                actorMagic.retrieved[i] = 0;
            }

            // Reset powers
            for (var i=0; i<actorMagic.spellInfo.length; i++) {
                var spellInfo = actorMagic.spellInfo[i];
                if (spellInfo) {
                    spellInfo.powerCount = 0;
                    spellInfo.powerCountMax = spellInfo.powerMax;
                    spellInfo.powerResetCounter = 0;
                }
            }

            // Remove prepared spells
            actorMagic.prepared = [];
        }
    }
}

/** Handle cooldowns at the end of each turn
 * @param {object} actor - An actor
 */
FROG.Magic.powerTurnEnd = function (actor) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    actor = actor || {};

    var classMagicArr = FROG.Magic.getClassMagic(actor);
    if (!classMagicArr) return;

    for (var j=0; j<classMagicArr.length; j++) {
        var classMagic = classMagicArr[j];
        if (!classMagic || !classMagic.skillTypeId || classMagic.resource != "Powers") continue;

        var spellInfo = FROG.Magic.getActorMagic(actor, classMagic.skillTypeId, "spellInfo");
        if (!spellInfo) continue;

        var spellInfo = spellInfo.filter(function (info) {
            return info.powerFrequency == "r";
        });

        for (var i=0; i<spellInfo.length; i++) {
            spellInfo[i].powerResetCounter--;
            if (spellInfo[i].powerResetCounter <= 0) {
                FROG.Magic.gainPowerUsed(actor, spellInfo[i], -1);
                spellInfo[i].powerResetCounter = 0;
            }
        }
    }
}

/** Check to see if any party members learn a skill used in battle
 * @param {object} skill - A skill
 */
FROG.Magic.learnFromExposure = function (skill) {
    if (skill) {
        for (i=0; i<$gameParty.battleMembers().length; i++) {
            var actor = $gameActors._data[$gameParty._actors[i]];
            actor.learnFromExposure(skill);
        }
    }
}

/** Retrieve the name of an essence type
 * @param {string} etype - Key for an essence type
 * @returns {string} Returns name of the essence type for display purposes
 */
FROG.Magic.getEssenceName = function (etype) {
    if ($frogMagic.itemConfig && $frogMagic.itemConfig.essenceTypes) {
        var obj = $frogMagic.itemConfig.essenceTypes.filter(function (essence) {
            return essence.type == etype;
        })[0] || {};

        return obj.name || etype;
    }
    return etype;
}

/** Retrieve skills that can be learned through essence
 * @param {object} actor - An actor
 * @returns {array} Returns array of skill ids you can learn based on an actor's equipment
 */
FROG.Magic.getEquipEssenceSpells = function (actor) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    actor = actor || null;
    if (!actor) return [];
    var classMagicArr = FROG.Magic.getClassMagic(actor);
    if (FROG.Core.isEmpty(classMagicArr)) return [];
    var skillIds = [];

    for (var j=0; j<classMagicArr.length; j++) {
        if (!classMagicArr[j].learnFromEssence) continue;

        for (var i=0; i<actor._equips.length; i++) {
            var equip = actor._equips[i];
            if (equip && ~~equip._itemId > 0) {
                var learnFromEssence = FROG.Magic.getItemConfig(equip._itemId, equip._dataClass, "learnFromEssence");
                if (learnFromEssence) {
                    skillIds = skillIds.concat(learnFromEssence);
                }
            }
        }
    }

    return skillIds;
}

/** Determine whether a skill menu item is enabled
 * @param {object} actor - An actor
 * @param {object} skill - A skill
 * @returns {boolean} Returns true if menu item is selectable, false if it is not.
 */
FROG.Magic.isMagicEnabled = function (actor, skill) {
    var enabled = true;

    // Check available slots for Vancian casters
    var resource = FROG.Magic.getClassMagic(actor, skill.stypeId, "resource");
    switch (resource) {
        case "Spell Slots": enabled = FROG.Magic.isSlotAvailable(actor, skill); break;
        case "Powers":      enabled = FROG.Magic.powersAvailable(actor, skill); break;
    }

    // Check spell components
    if (enabled) {
        var components = FROG.Magic.getSpell(actor, skill, "components");
        if (components && components.length) {
            for (var i=0; i<components.length; i++) {
                var comp = components[i];
                if (comp.itemId > 0 && comp.count > 0 && !FROG.Magic.hasEnoughItems($dataItems[comp.itemId], comp.count)) {
                    enabled = false;
                }
            }
        }
    }

    return enabled;
}

/** Determine whether an actor has enough spell component items on hand
 * @param {object} item - An item
 * @param {number} count - Number of items needed to cast spell
 * @returns {boolean} Returns true if actor has enough items, false if they do not.
 */
FROG.Magic.hasEnoughItems = function (item, count) {
    return $gameParty.numItems(item) >= count;
}

/** Consume spell components when using a skill that requires them
 * @param {object} actor - An actor
 * @param {object} skill - A skill
 */
FROG.Magic.useSpellComponents = function (actor, skill) {
    var components = FROG.Magic.getSpell(actor, skill, "components");
    if (components && components.length) {
        for (var i=0; i<components.length; i++) {
            var comp = components[i];
            for (var j=0; j<comp.count; j++) {
                $gameParty.consumeItem($dataItems[comp.itemId]);
            }
        }
    }
}

/** Add xp to spells when used
 * @param {object} actor - An actor
 * @param {object} skill - A skill
 */
FROG.Magic.gainSpellXp = function (actor, skill) {
    var spell = FROG.Magic.getSpell(actor, skill);
    if (spell) {
        spell.xp++;

        // Cap spell XP
        var spellXP = FROG.Magic.getOptions("spellXP") || {};
        if (spellXP.maxXP) {
            spell.xp = spell.xp.clamp(0, spellXP.maxXP);
        }
    }
}

/** Add a new school to an actors skill type
 * @param {object} actor - An actor
 * @param {number} stypeId - Skill type id
 * @param {string} school - School of magic
 */
FROG.Magic.addSchool = function (actor, stypeId, school) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    actor = actor || null;
    stypeId = stypeId || 0;
    school = school || "";

    if (actor && stypeId > 0 && school) {
        var classMagic = FROG.Magic.getClassMagic(actor, stypeId);
        if (classMagic && classMagic.school && classMagic.school.indexOf(school) === -1 && classMagic.school.indexOf("all") === -1) {
            classMagic.school.push(school);
        }
    }
}

/** Removes a school to an actors skill type
 * @param {object} actor - An actor
 * @param {number} stypeId - Skill type id
 * @param {string} school - School of magic
 */
FROG.Magic.removeSchool = function (actor, stypeId, school) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    actor = actor || null;
    stypeId = stypeId || 0;
    school = school || "";

    if (actor && stypeId > 0 && school) {
        var classMagic = FROG.Magic.getClassMagic(actor, stypeId);
        if (classMagic && classMagic.school && classMagic.school.indexOf(school) > -1) {
            classMagic.school.splice(classMagic.school.indexOf(school), 1);
        }
    }
}

/** Manually set a spell's xp value
 * @param {object} actor - An actor
 * @param {object} skill - A skill
 * @param {number} value - Value to set the spell's xp to
 */
FROG.Magic.setSpellXP = function (actor, skill, value) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    if (typeof skill == "number") skill = $dataSkills[skill];
    actor = actor || {};
    skill = skill || {};
    value = value || 0;

    var spell = FROG.Magic.getSpell(actor, skill);
    if (spell) {
        spell.xp = ~~value;
    }
}

/** Add to a spell's xp value
 * @param {object} actor - An actor
 * @param {object} skill - A skill
 * @param {number} value - Value to set the spell's xp to
 */
FROG.Magic.gainSpellXP = function (actor, skill, value) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    if (typeof skill == "number") skill = $dataSkills[skill];
    actor = actor || {};
    skill = skill || {};
    value = value || 0;

    var spell = FROG.Magic.getSpell(actor, skill);
    if (spell) {
        spell.xp += ~~value;
    }
}

/* ---------------------------------------------------------------*\
                        Plugin Commands
\* -------------------------------------------------------------- */
FROG.Magic.Game_Interpreter_PluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
    FROG.Magic.Game_Interpreter_PluginCommand.call(this, command, args);

    if (command && args && args[0]) {
        if (command.trim().toUpperCase() == "MAGIC") {
            var command = FROG.Core.formatArg(args[0]).toUpperCase();
            var actorId = ~~FROG.Core.formatArg(args[1]);

            switch (command) {
                case "RECOVER":
                    FROG.Magic.resetUsedSpells(actorId);
                    break;

                case "RECOVERALL":
                    for (var i=0; i<$gameParty.members().length; i++) {
                        FROG.Magic.resetUsedSpells($gameParty.members()[i]);
                    }
                    break;

                case "ADDSCHOOL":
                    var stypeId = ~~FROG.Core.formatArg(args[2]);
                    var school = FROG.Core.formatArg(args[3]);
                    FROG.Magic.addSchool(actorId, stypeId, school);
                    break;

                case "REMSCHOOL":
                    var stypeId = ~~FROG.Core.formatArg(args[2]);
                    var school = FROG.Core.formatArg(args[3]);
                    FROG.Magic.removeSchool(actorId, stypeId, school);
                    break;

                case "SETXP":
                    var skillId = ~~FROG.Core.formatArg(args[2]);
                    var value = FROG.Core.formatArg(args[3]);
                    FROG.Magic.setSpellXP(actorId, skillId, value);
                    break;

                case "ADDXP":
                    var skillId = ~~FROG.Core.formatArg(args[2]);
                    var value = FROG.Core.formatArg(args[3]);
                    FROG.Magic.gainSpellXP(actorId, skillId, value);
                    break;
            }
        }
    }
}
