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
 * @plugindesc v0.9.03 Super-charge your class mechanics
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
 * Here is a list of all of the plugin parameters and what they do.  As a quick
 * note of reference, the terms Spell, Magic and Power all typically mean the
 * same thing.  They are simply Skills.
 *
 * Save Magic Object - Setting this to true allows you to modify the $frogMagic
 * object, which contains all of the information within the plugin parameters,
 * when the player saves the game. By default, this object is built from the
 * plugin parameters when a new game is started or a saved game is loaded. This
 * is usually what you’ll want. If, for some reason, you need to alter this
 * data in-game and have those changes persist until the end of the game,
 * you’ll need to turn this option on.
 *
 * ################ Options ################
 *
 * Sort Order - Skills now have levels, even if they use the traditional MP
 * system.  So it makes sense to sort them by level so that you can place the
 * most powerful or least powerful skills on top.  Use this option to choose
 * which way you'd like them sorted for the player.
 *
 * Show All Spell Levels - Normally, only the spell slots that an actor has
 * learned will be displayed.  So if the highest level of spell an actor can
 * cast is 3rd level, it'll show as something like 4/3/3/2.  But if you want
 * every slot to always show, turn this option on.  This same actor will now
 * show 4/3/3/2/0/0/0/0/0/0 if they have 9 levels of spells.  Zero-level spells
 * are always ignored in the display if an actor doesn't have any because some
 * classes, like the Paladin and Ranger in D&D, start at first level spells.
 *
 * Cost Indicator - Configure how the cost for spell slots, magic points and
 * powers are displayed in the skill selection window.
 *
 *    Spell Slots - Style the Spell Slot indicator.
 *       Format - Text format for this cost indicator. Use %1 to indicate the
 *          slot level, %2 for number of slots remaining.
 *       Color - Text color for this indicator.  Choose one of the default colors
 *          or enter a hex code.
 *       Font Size - Font size in pixel height.
 *
 *    Magic Points - Style the Magic Point indicator.
 *       Format - Text format for this cost indicator. Use %1 to indicate the
 *          slot level.
 *       Color - Text color for this indicator.  Choose one of the default
 *          colors or enter a hex code.
 *       Font Size - Font size in pixel height.
 *
 *    Powers - Style the Powers indicator.
 *       Format Per Day - Text format for this cost indicator. Use %1 to
 *          indicate the uses per day.
 *       Format Per Encounter - Text format for this cost indicator. Use %1 to
 *          indicate the uses per encounter.
 *       Format Cooldown - Text format for this cost indicator. Use %1 to
 *          indicate the number of rounds between uses.
 *       Format At Will - Text format for this cost indicator.
 *       Color - Text color for this indicator.  Choose one of the default
 *          colors or enter a hex code.
 *       Font Size - Font size in pixel height.
 *
 * Spell XP - By default, every time an actor uses a skill, it's XP value will
 * increase by +1.  If you wish, you can scale the damage that each skill
 * inflicts or heals based on a formula so that the more experience an actor has
 * using a skill increases it's potential damage output.
 *
 *    Enabled - Set this to true if you want skills to power up based on number
 *       of times used by an actor.
 *    Damage Formula - Formula run on the damage dealt by a skill. DMG = damage,
 *       XP = # times skill used by actor.
 *    Max XP - Set the maximum XP that a skill can acquire. Set to 0 if there's
 *       no maximum.
 *
 * Steps For Turn - Set the number of steps on map it takes to register as a
 * turn for out-of-battle purposes.  Certain effects, like poison, may continue
 * on after battle while the player is walking around on the map.  You can
 * override the default value of 20 steps here.  This plugin also contains
 * functionality in this area.  Powers that have a cooldown effect and can be
 * used, say once every 3 rounds, will use this to determine when this Power is
 * usable again if it used outside of combat.
 *
 * Recover Power - Powers at the Encounter frequency, when used out of battle,
 * recover after this many turns.  Using the supplied Steps For Turn, if a skill
 * is usable 1/encounter is used outside of battle, it will recover after this
 * many turns while walking around on the map.
 *
 * Battle Status Window - Configure the size of the HP, MP and TP display areas
 * in the Actor Battle Status window.  Spell slots tend to take up more room
 * than is normally available so this allows you to adjust this area to suit
 * your game.
 *
 *    Gauge Area Width - Width in pixels of the gauge area in the Actor Battle
 *       Status window.
 *    HP Area Percentage - Width as a percentage of the HP area.
 *    MP Area Percentage - Width as a percentage of the MP area.
 *    TP Area Percentage - Width as a percentage of the TP area. This value is
 *       ignored if TP is turned off.
 *    Spacing** - Width as a percentage of the space between each area.
 *    Font Size** - Font size in pixel height.
 *
 * Exposure Log Text - Text format for when a capable actor learns spells
 * through exposure. %1 = Actor, %2 = Percentage Learned, %3 = Skill.  This text
 * appears in the battle log and can contain special characters.
 *
 * Obtain Essence Text - Text format for obtaining essence after battle. %1 =
 * Amount Received, %2 Essence Name.
 *
 * Learn From Essence Text - Text format for learning a spell by acquiring
 * essence. %1 = Actor Name, %2 - Skill.
 *
 *
 * ################ Class Config ################
 *
 * This is where you'll configure your class's skill and magic systems.  These
 * parameters will define how skills are learned, prepared and used as well as
 * what resource they utilize and what spell list they have access to.
 *
 * Desc - Short description so that you know what this is. Not required but
 * highly recommended.
 *
 * Class Id - Class to configure.
 *
 * Magic - Magic systems that this class has access to.  You can attach any
 * number of skill systems to this actor just so long as each one has a unique
 * Skill Type Id.
 *
 *    Desc - Short description so that you know what this is. Not required but
 *       highly recommended.
 *
 *    Skill Type Id - Skill Type Id associated with this skill/magic system.
 *
 *    Caster Type - Define if and how spells are prepared.  d20 magic systems
 *       such as Dungeons & Dragons have different mechanics than your typical
 *       JRPG.  A spell-caster may be able to learn every spell known to man
 *       but, of course, they usually don't have access to any spell at any
 *       time.  Each morning, aftter sleeping for the night, a caster has to
 *       memorize or otherwise prepare which spell they think they will need
 *       that day.  Other casters may not have such wide array of spell but
 *       don't have to micro-manage their accessible spells.  If you've played
 *       D&D 3.5 and know the difference between a Wizard, Sorcerer and Spirit
 *       Shaman is, you'll know what these options do.
 *
 *       Prepared - A prepared caster will usually have access to most or all
 *          of their spell list.  Each day, they will choose exactly which
 *          spells and how many of each they will be able to cast that day.  Say
 *          your Wizard has the following slots available: 4/3/3/2.  This means
 *          that they have 4 zero-level spells, 3 first level spells, 3 second
 *          and 2 third.  If they choose to memorize Fireball and Haste with
 *          their 3rd level spells, they will be able to cast each one once that
 *          day.  Once a spell is cast, it is gone.  If a prepared caster wants
 *          to cast the same spell more than once that day, they will have to
 *          prepare more than one of said spell.
 *
 *       Spontaneous - A spontaneous caster is usually more restricted in the
 *          number of spells they can learn but they don't need to worry about
 *          which spells to prepare for the day.  They have their subset of
 *          spells that they know and can cast them however is needed.  When a
 *          spontaneous caster uses a spell, it stays on their list so if their
 *          3rd level spells are Fireball and Haste, they can cast all Fireballs
 *          all Hastes or any combination of the two.  Due to their lack of
 *          versatility, they usually get to cast a greater number of spells per
 *          day but that's left up to you to decide.
 *
 *       Hybrid - A hybrid caster take the best of both worlds.  They usually
 *          can learn, or just know, most or all of their spell list and prepare
 *          spells much like a prepared caster.  They can only prepare one of a
 *          given spell, though, because like a spontaneous caster, the spell
 *          doesn't get used up when cast.  They can cast the same spell over
 *          and over again as long as they have a slot left to do so.  If you
 *          use all three types of casters in your game, you'll normally balance
 *          this out by giving them a lot of spell slots like a spontaneous
 *          caster but have them be able to prepare less spells than a prepared
 *          caster.
 *
 * Resource - Casting spells or using special abilities will usually have some
 * kind of finite resource that's expended.  As of now, there are three
 * different ones to choose from.
 *
 *    Spell Slots - Spell slots are a number of spells for each level starting
 *       at level zero.  A first level Wizard may only get 3 zero-level and 1
 *       first level spell but as they level up, they'll continue to gain more
 *       and more lower level spells while acquiring access to higher level
 *       spells as well.If you've ever played D&D or Final Fantasy 1, they work
 *       like this.
 *
 *    Magic Points - You already know what magic points are if you develop RPG
 *       Maker games.  They are the default system.  This plugin expands the
 *       default system, however.  Like all of the systems here, spells/skills
 *       have levels and the magic point system is no different.  You are free
 *       to continue to use the default system without spell levels if you don't
 *       configure a class in this section, by doing so, you gain all of the
 *       other functionality available here applied to a magic point system.
 *
 *    Powers - Powers work by giving a character access to a spell/skill that
 *       can be used a certain number of times per day, per encounter or once
 *       every so many turns in battle (sometimes called a cooldown).  For
 *       instance, a newly acquired power may be usable 3/day or maybe
 *       1/encounter.  D&D 4th Edition utilized such a system for all of the
 *       classes but I tend to prefer using this system fighting techniques as
 *       opposed to spell casting.  As always, though, the choice is yours how
 *       or if you want to use this.
 *
 * Default Known - This describes what spells this caster knows by default.  A
 * class can start knowing every spell in their list, all of the zero-level
 * spells or not knowing any of them.
 *
 * Spellbook - In another section of the plugin parameters, you'll define spell
 * lists which contain all skill-relevant information like spell level and such.
 * Enter the name of the spell list you want this class to use for this Skill
 * Type.
 *
 * School - Spells can be separated into schools of magic.  In practical terms,
 * these are just groups of spells.  I hope to do more with this but for now,
 * it can be used to grant a subset of spells to a class.  Say you have Cleric
 * spell list that has a bunch of spells that deal with life and death.  Heal,
 * Harm, Raise Dead, Finger of Death etc.  A Paladin shouldn't get all of these
 * death spells.  Those spells could be grouped into their own school and not
 * given to the Paladin class.
 *
 * Spells Per Day - Number of spell uses per slot by actor level, delimited by
 * a /, starting with level zero.  Each line in this list corresponds to the
 * character's level and describes how many spells of each level that they can
 * prepare each day.
 *
 * Your Spells Per Day, Spells Known and Hybrid Retrieve will look similar to
 * this.  You can use a dash to signify unlimited.
 * 3/1
 * 4/2
 * 4/2/1
 * 4/3/2
 * 4/3/2/1
 * 4/3/3/2 etc.
 *
 * Spells Known - Number of spells learned by actor level, delimited by a /.
 * Unless this parameter is left blank, this class will have a Learn command
 * which is used to choose whatever spells they want to learn from their spell
 * list.
 *
 * Hybrid Retrieve - Hybrid casters use this list to determine how many spells
 * they can prepare per day.  The number that they can cast still uses Spells
 * Per Day but because the number they can prepare and the number that they can
 * cast are different, they need this extra list filled in to configure this.
 *
 * Max Spell Level - Most of the time, you can rely on this plugin figuring out
 * the maximum level of spell a character can use by Spells Per Day or Spells
 * Known, but some magic systems don't require these fields to be filled in. If
 * a class learns all of their spells through exposure or through essence and
 * maybe also use the magic point system, there's no reason to fill in the three
 * parameters above so this is use for those systems to specify what the maximum
 * spell level a class can use.
 *
 * MP Recovery** - Early Ultima games used an MP system where the actors only
 * had a small amount of MP.  Their MP would return slowly as they walked around
 * the map and eventually replenish their magical power.  This parameter is used
 * to replicate such a system if you'd like.
 *
 *   Recover MP - Number of MP recovered after walking a certain number of
 *      steps specified below.
 *
 *   Every X Steps** - Number of steps it take to recover the amount of MP list
 *      above.
 *
 * Learn From Items - Can learn spells by using items if they are in your
 * spellbook.  If an item has the Learn Skill property, they won't be able to
 * learn the spell if this is set to false.  Most spontaneous casters will have
 * this set to false to limit their spell selection.
 *
 * Learn From Exposure - Can learn spells when allies or enemies use them in
 * battle similar to a Final Fantasy Blue Mage.  Since my goal for this plugin
 * is to allow you to replicate almost every other magic system, it wouldn't be
 * complete without a way to learn spells from the creatures you battle now
 * would it?  Set this to true if this class learns spells this way.
 *
 * Learn From Essence - Can learn spells through equipment by absorbing the
 * essence of enemies defeated in battle.  Later on, you will be able to
 * configure enemies to bestow their essence or spirit when killed.  You can
 * also configure equipment that draws in this essence and allows the wearer to
 * partially learn one or more spells.  If they gain enough of the required
 * essence, they learn a new spell.  If you've ever played Final Fantasy 6 and
 * know how characters learn spells by equipping Espers then you pretty know
 * how this works.
 *
 * Show As MP - Each class can have any number of magic systems attached to it
 * but unfortunately, the status windows don't have unlimited space to show all
 * of these.  Therefore, you have to choose which one to display where an
 * actor's MP gauge normally goes.  Set this option to true to indicate that
 * this should be displayed in the MP area.  If more than one is set to true,
 * the plugin will use the first one set this way.
 *
 * Text - Configurable display text.
 *
 * MP Label - If Show As MP is the first magic entry set to true, use this text
 * for this classes MP label. Leave blank to use the default MP label defined
 * in the System tab.
 *
 * Use Command - The Skills menu usually just allows you to select the Skill
 * Type and all of your learned skills are there for use.  But this magic
 * system plugin is more complex.  Actors can now use, learn and/or prepare
 * spells from this screen now so new command options have been added.  The
 * command that allows you to use a skill or cast a spell defaults to the
 * command "Use".  It's probably best to set this to a more appropriate term
 * depending on what type of system this class uses.  If they are a spell
 * caster, you might want to label this command "Cast".  If they are a melee
 * character, maybe "Use" or "Perform" is a better fit.
 *
 * Prepare Command - This is the command used when an actor prepares their
 * spells or skills for the day.  A Cleric might call this "Pray" since they
 * pray to their god for spells each day.  A Wizard might "Memorize" their
 * spells.  Set this to what's most appropriate for this class.
 *
 * Learn Command - If a class learns at least some of their spells by choosing
 * them from their spell list (see Spells Known), they will have a "Learn"
 * command.  Call it whatever you'd like.
 *
 * Use Help - Use command help text.
 *
 * Prepare Help - Prepare command help text.
 *
 * Learn Help - Learn command help text.
 *
 *
 * ################ Spell Lists ################
 *
 * The second really important part of this plugin is Spell Lists.  If you've
 * played Dungeons & Dragons before, you know what a spell list is.  If not,
 * it's a list of spells that this class has access to.  Yeah, crazy ... I know.
 *
 * Name - Remember in Class Config where you entered the name of a spell list
 * in the Spell List parameter?  Well, this is what's referenced.  Whatever you
 * define in these parameters will be associated with that class/skill type.
 *
 * Desc - Short description of this spell list.  This is not required.
 *
 * Max Spell Level - Highest level of spells this class gets.  A Wizard might
 * get up to 9th level spells.  A Bard's list might only go up to 6.  This is
 * just here for efficiency because otherwise, I'd have to itterate through
 * every spell in the list to figure out what the highest spell level is.  I'd
 * rather not do that.  It's just better if you tell me now.
 *
 * Spell Config - This is where we get down to brass tax.  Not only will you
 * list every spell that this spell list contains, there are several other
 * properties that need to be filled in to make this whole magic system thing
 * work.
 *
 *   Desc - Short description so that you know what this is. Not required but
 *      highly recommended.  You probably want to type in the name of the
 *      spell/skill here for easy reference.
 *
 *   Skill Id - This is the skill that's on this spell list.
 *
 *   Level - This is the spell's level.  A spell might not be the same level for
 *      every caster.  While a Cure Light Wounds is a 1st level spell for a
 *      cleric, for a Druid, it's a 2nd level spell.  Some casters are better
 *      than other at certain things and even though they may be able to learn
 *      some of the same spells, they could be different levels.
 *
 *   School - Each spell may be given a school.  This is  way to group spells so
 *      that some classes only gain access to a subset of a spell list.  Later
 *      on, I hope to implement ways to grant bonuses to individual schools of
 *      magic.
 *
 *   Power Use - If a caster uses Powers, this is where you define it's usage.
 *      Uses - Number of times this power can be used.
 *      Frequency** - How long you need to wait before power is available again.
 *	       Day - This power can be used Uses/Day.
 *	       Encounter - This power can be used Uses/Encounter.
 *	       Rounds - This power can be used once every Uses/Rounds.
 *	       At Will - This power can be used at will or as often as they want.
 *
 * Exposure Amount - Being exposed to this spell allows an actor to partially
 * learn this spell (0-100).  So if an enemy uses a spell from an actor's spell
 * list, this list, and this spell has an exposure amount of 50, the actor will
 * learn 50% of the spell.  The second time they exposed to this spell, they
 * will know 100% of the spell and will learn it completely.  They are then
 * free to utilize the spell for themself.
 *
 * Components - You didn't think I'd make a D&D-like magic system without
 * allowing you to specify spell components, did you?  Oh, ye of little faith.
 * So yeah, if you're spell needs some Eye of Newt, define that here.
 *
 *    Item Id - Item required to use this spell.
 *    Count - Number of this item needed to use this spell.
 *    Consume - Required item is consumed when spell is cast.  Most of the time,
 *       this will be true but say you want a Cleric to have a Holy Symbol as a
 *       focus object in order to Turn Undead.  Set this to false.
 *
 * Prerequisite - Required spells needed to learn this spell.  Maybe a character
 * need to learn Fire 1 before they can learn Fire 2.  That kinda makes sense.
 * If you want to set up your magic system so that certain spells need to be
 * learned before other, more powerful ones, you can set up prerequisites.
 *
 * Can Learn - Perhaps a spell is rare or unique.  Maybe it can't be just
 * learned normally throught the Learn command.  If that's the case, set this
 * to false.
 *
 *
 * ################ Enemy Config ################
 *
 * You're almost to the home stretch.  In fact, if you aren't going to use
 * essence in your game, congratulations!  You're done!  You can skill these
 * last two sections.  If you are going to use essence, though, you'll need to
 * define how much each enemy gives out and of which type.
 *
 * Desc - Short description so that you know what this is. Not required but
 * highly recommended.  It's probably a good idea to list the enemy's name here
 * for easy reference.
 *
 * Enemy Id - Enemy to configure.
 *
 * Essence Type - Essence type that this enemy grants when defeated in battle.
 * See, unlike Final Fantasy 6, with this plugin, enemies may grant different
 * types of essence when they die and certain spells might only be learnable
 * with the right type.  Maybe you want each creature to give a different
 * elemental type of essence when defeated.  A Slime gives out 1 water essence.
 * A Hell Hound grants 10 fire essence.  Some spells can only be learned through
 * water essence and other through fire essence.  This is a nice way to make
 * sure your players can just grind in the same spot to learn all of their
 * spells.
 *
 * Essence Amount -  Amount of essence this enemy grants when defeated in
 * battle.  Each spell will require a certain amount of essence to learn it.
 * Weaker enemies will usually give out lower amounts of essence and vise versa.
 *
 *
 * ################ Item Config ################
 *
 * Essence Types - Define essence types that enemies leave behind when they
 * die.  This is just a lookup chart to match up the Essence Type with a display
 * name used for when the battle is over and rewards are given.
 *
 * Weapon - Configure effects of equipped weapons.
 *    Weapon Id - Weapon with magic properties.
 *
 *    Learn From Essence - Configure what spells can be learned and how much
 *    essence is required to do so.
 *
 *       Skill Id - Skill that is learned form this item.
 *       Essence Type - Essence type required to learn this skill.
 *       Essence Required - Required amount of essence this skill needs to be
 *          learned.  Low level spells won't need much essence to learn.  High
 *          level skills will need a lot.  This allows you to ensure that
 *          players don't just kill weak creatures to learn their spells.
 *
 * Armor - Configure effects of equipped armor.
 *    Armor Id - Armor with magic properties.
 *
 *    Learn From Essence - Configure what spells can be learned and how much
 *    essence is required to do so.
 *
 *       Skill Id - Skill that is learned form this item.
 *       Essence Type - Essence type required to learn this skill.
 *       Essence Required - Required amount of essence this skill needs to be
 *          learned.  Low level spells won't need much essence to learn.  High
 *          level skills will need a lot.  This allows you to ensure that
 *          players don't just kill weak creatures to learn their spells.
 *
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * Strangely enough, this plugin doesn't have as many script calls or plugin
 * commands.  Well, it technically does but most of them would only be useful
 * if you are a skilled JavaScript coder and if that's the case, look at the
 * next to last section of the plugin code for a well documented list of script
 * calls.  But for the general audience, I only have a couple plugin commands
 * to share that I think will be useful.
 *
 * Spell XP:
 * In Damage Formulas, you can use **sxp** to reference the actor's Spell XP
 * for the performed skill.  This is an alternative to using the global formula
 * in the Options parameter.
 *
 * Recover magic for a single actor.  This only recovers spell slots and powers.
 * The editor's Recover All command is normally used to recover all HP, MP,
 * spell slots and powers.
 *
 * MAGIC RECOVER actorId
 * ex. MAGIC RECOVER 3
 *
 * Recover magic for all actors.  This only recovers spell slots and powers.
 * The editor's Recover All command is normally used to recover all HP, MP,
 * spell slots and powers.
 *
 * MAGIC RECOVERALL
 * ex. MAGIC RECOVERALL
 *
 * Add a school of magic to an actor:
 * MAGIC ADDSCHOOL actorId skillTypeId school
 * ex. MAGIC ADDSCHOOL 3 1 Evocation
 *
 * Remove a school of magic from an actor:
 * MAGIC REMSCHOOL actorId skillTypeId school
 * ex. MAGIC REMSCHOOL 3 1 Divination
 *
 * Manually set a spell's xp value (example sets Marsha's [skill 10] to the
 * value 20)
 *
 * MAGIC SETXP actorId skill value
 * ex. MAGIC SETXP 3 10 20
 *
 * Add to a spell's xp value (example adds 5 to Marsha's [skill 10])
 * MAGIC ADDXP actorId skill value
 * ex. MAGIC SETXP 3 10 5
 *
 * Set a spell's used power count
 * MAGIC SETPOW actorId skill value
 *
 * Add to a spell's used power count
 * MAGIC ADDPOW actorId skill value
 *
 * Set a spell's max power count
 * MAGIC SETPOWMAX actorId skill value
 *
 * Add to a spell's max power count
 * MAGIC ADDPOWMAX actorId skill value
 *
 * Set a spell's power wait counter (cooldown)
 * MAGIC SETPOWWAIT actorId skill value
 *
 * Add to a spell's power wait counter (cooldown)
 * MAGIC ADDPOWWAIT actorId skill value
 *
 * Set a spell's power frequency (d = day, e = encounter, r = rounds, w = at
 * will)
 * MAGIC ADDPOWFREQ actorId skill value
 *
 * Dynamically add a spell to an actor's spell list
 * {object} actor - An actor object or actor id
 * {object} skill - A skill object or skill id
 * {object} props - Properties of the new spell
 *     {boolean} canLearn - Set to true if you want this spell to show up in
 *        the Learn command menu
 *     {array} components - Array of ojects that define the spell components
 *         {number} itemId - Id of item required to cast this spell
 *         {number} count - The number of this item consumed in the casting of
 *            this spell
 *     {number} level - Level of this spell
 *     {number} powerMax - Max power uses
 *     {number} powerFrequency - Power frequency
 *     {array} prerequisite - Array of skill ids that need to be learned before
 *        this one can be
 *     {string} school - School of magic
 * FROG.Magic.addSpell(actor, skill, props);
 *
 * Ex. Add skill 10 to actor 2
 * FROG.Magic.addSpell(2, 10, {
 *   canLearn: true,
 *   components: [
 *     { itemId: 1, count: 2, consume: true },
 *     { itemId: 2, count: 1, consume: false }
 *   ],
 *   level: 1,
 *   powerMax: 3,
 *   powerFrequency: "d",
 *   prerequisite: [],
 *   school: "enchantment"
 * });
 *
 * Dynamically remove a spell from an actor's spell list
 * {object} actor - An actor object or actor id
 * {object} skill - A skill object or skill id
 * FROG.Magic.removeSpell(actor, skill);
 *
 * Ex. Remove skill 10 from actor 2
 * FROG.Magic.addSpell(2, 10);
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
 * Version 0.9.01 - Bug fix
 * Version 0.9.02 - Added more plugin commands.
 * Version 0.9.03 - Bug fixes, small feature additions.
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
 * @param Show All Spell Levels
 * @parent Parameters
 * @type boolean
 * @desc If you want to display spell slots that haven't been learned yet, turn this on. Ex. 4/3/3/2/0/0/0/0/0/0
 * @default false
 * @on Yes
 * @off No
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
 * @desc Text format for this cost indicator. Use %1 to indicate the slot level, %2 for number of slots remaining.
 * @default %2/L%1
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
 *
 * @param Consume
 * @type boolean
 * @desc Some spells require a focus object which is not consumed in the casting.
 * @default true
 * @on Yes
 * @off No
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
FROG.Core.jsonParams(PluginManager.parameters('FROG_Magic'), $frogMagic);

/* ---------------------------------------------------------------*\
                            Data Manager
\* -------------------------------------------------------------- */

// Load in plugin paramters
FROG.Magic.DataManager_setupNewGame = DataManager.setupNewGame;
DataManager.setupNewGame = function () {
    FROG.Magic.DataManager_setupNewGame.call(this);
    FROG.Core.jsonParams(PluginManager.parameters('FROG_Magic'), $frogMagic);
    //console.log($frogMagic);
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

        if (spell) {
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
        classMagic.maxSlotLevel = FROG.Magic.getSpellList(classMagic.spellbook).maxSpellLevel || 9;
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
        if (txtSlots) {
            var arr = (txtSlots + "/").split('/');
            for (var i=0; i<arr.length-1; i++) {
                actorMagic.max[i] = (arr[i] === "-") ? arr[i] : ~~arr[i];
            }
        }

        // Hybrid Retrieve Spells
        var txtSlots = classMagic.hybridRetrieve[this._level];
        if (txtSlots) {
            var arr = (txtSlots + "/").split('/');
            for (var i=0; i<arr.length-1; i++) {
                actorMagic.retrievedMax[i] = (arr[i] === "-") ? arr[i] : ~~arr[i];
            }
        }

        // Spells known
        var spellsKnown = classMagic.spellsKnown[this._level];
        if (spellsKnown) {
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
                    text = (costObj.format) ? costObj.format.replace("%1", slotLevel).replace("%2", FROG.Magic.numSlotsAvailable(actor, skill)) : "";
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

        FROG.Magic.addSpell(actor, skill, {
            canLearn: spellConfig.canLearn,
            components: spellConfig.components || [],
            level: spellConfig.level,
            powerMax: powerUses.uses || 0,
            powerFrequency: powerUses.frequency || "w",
            prerequisite: spellConfig.prerequisite || [],
            school: spellConfig.school
        });
    }
}

/** Add a new spell to an actor's spellInfo
 * @param {object} actor - An actor object or id
 * @param {object} skill - A skill object or id
 * @param {object} props - Properties of the new spell
 *     @param {boolean} canLearn - Set to true if you want this spell to show up in the Learn command menu
 *     @param {array} components - Array of ojects that define the spell components
 *         @param {number} itemId - Id of item required to cast this spell
 *         @param {number} count - The number of this item consumed in the casting of this spell
 *     @param {number} level - Level of this spell
 *     @param {number} powerMax - Max power uses
 *     @param {number} powerFrequency - Power frequency
 *     @param {array} prerequisite - Array of skill ids that need to be learned before this one can be
 *     @param {string} school - School of magic
 */
FROG.Magic.addSpell = function (actor, skill, props) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    if (typeof skill == "number") skill = $dataSkills[skill];
    actor = actor || {};
    skill = skill || {};
    props = props || null;

    var actorMagic = FROG.Magic.getActorMagic(actor, skill.stypeId);
    if (!actorMagic || !props) return;
    var classMagic = FROG.Magic.getClassMagic(actor, skill.stypeId) || {};

    actorMagic.spellInfo.push({
        id: skill.id,
        essence: 0,
        exposure: 0,
        canLearn: props.canLearn || false,
        canLearnFromItem: classMagic.learnFromItems || false,
        components: props.components || [],
        level: props.level || 0,
        powerCount: 0,
        powerCountMax: props.powerMax || 0,
        powerMax: props.powerMax || 0,
        powerFrequency: props.powerFrequency || "w",
        powerResetCounter: 0,
        prerequisite: props.prerequisite || [],
        school: props.school ? props.school.toLowerCase() : "",
        stypeId: skill.stypeId,
        xp: 0
    });

    // Learn skill if actor knows it by default
    if (classMagic.defaultKnown == "All" || (classMagic.defaultKnown == "Zero Level" && props.level === 0)) {
        actor.learnSkill(skill.id);
    }
}

/** Remove a spell from an actor's spellInfo
 * @param {object} actor - An actor object or id
 * @param {object} skill - A skill object or id
 */
FROG.Magic.removeSpell = function (actor, skill) {
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    if (typeof skill == "number") skill = $dataSkills[skill];
    actor = actor || {};
    skill = skill || {};

    var actorMagic = FROG.Magic.getActorMagic(actor, skill.stypeId);
    if (!actorMagic) return;

    var index = actorMagic.spellInfo.map(function(info) {
        return info.id;
    }).indexOf(skill.id);

    if (index > -1) {
        actorMagic.spellInfo.splice(index, 1);
        actor.forgetSkill(skill.id);
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
    var resource = FROG.Magic.getClassMagic(actor, stypeId, "resource");
    var spellInfo = actorMagic.spellInfo;

    if (spellInfo && spellInfo.length) {
        spellInfo = spellInfo.filter(function (info) {
            // Special exception for At Will Powers. Never allow the same one to be memorized more than once.
            if (memorizeAvailable && resource == "Powers" && info.powerFrequency == "w" && FROG.Magic.isSpellPrepared(actor, $dataSkills[info.id])) {
                return false;
            }

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

/** Gets spell list from plugin parameters
 * @param {string} spellbook - Name of a spell list
 * @return {object} Returns spell list object
 */
FROG.Magic.getSpellList = function (spellbook) {
    spellbook = spellbook || "";
    return $frogMagic.spellLists.find(function (list) {
        return list.name.toLowerCase() == spellbook.toLowerCase();
    }) || null;
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
        var spellList = FROG.Magic.getSpellList(spellbook);
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

/** Alter the properties of a single actor's spell
 * @param {object} actor - An actor
 * @param {object} skill - A skill
 * @param {number} value - Value to set the spell's xp to
 */
FROG.Magic.alterSpell = function (options) {
    var actor = options.actor || {};
    var skill = options.skill || {};
    var prop = options.prop || "";
    var value = options.value || 0;
    var operator = options.operator || "";
    if (typeof actor == "number") actor = $gameActors.actor(actor);
    if (typeof skill == "number") skill = $dataSkills[skill];

    var spell = FROG.Magic.getSpell(actor, skill);
    if (spell && prop && value && operator) {
        if (operator.toLowerCase() == "add") {
            spell[prop] += value;
        }
        else {
            spell[prop] = value;
        }
    }
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
            else if (actorMagic.max[i] > 0 || (FROG.Magic.getOptions("showAllSpellLevels") && i > 0)) {
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
    return FROG.Magic.numSlotsAvailable(actor, skill) > 0;
}

/** Determines how many slots are available for a given skill.
 * @param {object} actor - An actor
 * @param {object} skill - A skill
 * @returns {number} Returns number of uses left
 */
FROG.Magic.numSlotsAvailable = function (actor, skill) {
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
        return max - used;
    }

    return 99999;
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
            // Power users only memorize once and add to uses instead
            var bOk = true;
            var resource = FROG.Magic.getClassMagic(actor, skill.stypeId, "resource");
            if (resource == "Powers") {
                if (FROG.Magic.isSpellPrepared(actor, skill)) {
                    var spell = FROG.Magic.getSpell(actor, skill);
                    if (spell && spell.powerFrequency != "r" && spell.powerFrequency != "w") {
                        spell.powerCountMax += spell.powerMax;
                        bOk = false;
                    }
                }
            }

            // Prepare spell
            if (bOk) {
                actorMagic.prepared.push(skill);
            }
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
                if (comp.consume) {
                    $gameParty.consumeItem($dataItems[comp.itemId]);
                }
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
                    FROG.Magic.alterSpell({
                        actor: actorId,
                        skill: skillId,
                        prop: "xp",
                        value: ~~value,
                        operator: "set"
                    });
                    break;

                case "ADDXP":
                    var skillId = ~~FROG.Core.formatArg(args[2]);
                    var value = FROG.Core.formatArg(args[3]);
                    FROG.Magic.alterSpell({
                        actor: actorId,
                        skill: skillId,
                        prop: "xp",
                        value: ~~value,
                        operator: "add"
                    });
                    break;

                case "SETPOW":
                    var skillId = ~~FROG.Core.formatArg(args[2]);
                    var value = FROG.Core.formatArg(args[3]);
                    FROG.Magic.alterSpell({
                        actor: actorId,
                        skill: skillId,
                        prop: "powerCount",
                        value: ~~value,
                        operator: "set"
                    });
                    break;

                case "ADDPOW":
                    var skillId = ~~FROG.Core.formatArg(args[2]);
                    var value = FROG.Core.formatArg(args[3]);
                    FROG.Magic.alterSpell({
                        actor: actorId,
                        skill: skillId,
                        prop: "powerCount",
                        value: ~~value,
                        operator: "add"
                    });
                    break;

                case "SETPOWMAX":
                    var skillId = ~~FROG.Core.formatArg(args[2]);
                    var value = FROG.Core.formatArg(args[3]);
                    FROG.Magic.alterSpell({
                        actor: actorId,
                        skill: skillId,
                        prop: "powerMax",
                        value: ~~value,
                        operator: "set"
                    });
                    FROG.Magic.alterSpell({
                        actor: actorId,
                        skill: skillId,
                        prop: "powerCountMax",
                        value: ~~value,
                        operator: "set"
                    });
                    break;

                case "ADDPOWMAX":
                    var skillId = ~~FROG.Core.formatArg(args[2]);
                    var value = FROG.Core.formatArg(args[3]);
                    FROG.Magic.alterSpell({
                        actor: actorId,
                        skill: skillId,
                        prop: "powerMax",
                        value: ~~value,
                        operator: "add"
                    });
                    FROG.Magic.alterSpell({
                        actor: actorId,
                        skill: skillId,
                        prop: "powerCountMax",
                        value: ~~value,
                        operator: "add"
                    });
                    break;

                case "SETPOWWAIT":
                    var skillId = ~~FROG.Core.formatArg(args[2]);
                    var value = FROG.Core.formatArg(args[3]);
                    FROG.Magic.alterSpell({
                        actor: actorId,
                        skill: skillId,
                        prop: "powerResetCounter",
                        value: ~~value,
                        operator: "set"
                    });
                    break;

                case "ADDPOWWAIT":
                    var skillId = ~~FROG.Core.formatArg(args[2]);
                    var value = FROG.Core.formatArg(args[3]);
                    FROG.Magic.alterSpell({
                        actor: actorId,
                        skill: skillId,
                        prop: "powerResetCounter",
                        value: ~~value,
                        operator: "add"
                    });
                    break;

                case "SETPOWFREQ":
                    var skillId = ~~FROG.Core.formatArg(args[2]);
                    var value = FROG.Core.formatArg(args[3]);
                    FROG.Magic.alterSpell({
                        actor: actorId,
                        skill: skillId,
                        prop: "powerFrequency",
                        value: value,
                        operator: "set"
                    });
                    break;
            }
        }
    }
}
