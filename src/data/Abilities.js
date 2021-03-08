const Abilities = {
    talentTree: { link: ('https://image.winudf.com/v2/image/Y29tLnRyZW5jaHdhcmZhcmVkb3RhLnRhbGVudHRyZWVmb3Jkb3RhX2ljb25fNTgyZ2hqbzg/icon.png?w=170&fakeurl=1'), name: 'Talent' },
    bladeFury: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/4/4c/Blade_Fury_icon.png'), name: 'Blade Fury' },
    healingWard: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/5/58/Healing_Ward_icon.png'), name: 'Healing Ward' },
    bladeDance: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/8/83/Blade_Dance_icon.png'), name: 'Blade Dance' },
    omnislash: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/3/39/Omnislash_icon.png'), name: 'Omnislash' },
    beserkersCall: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d1/Berserker%27s_Call_icon.png'), name: 'Berserker\'s Call' },
    battleHunger: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/0/00/Battle_Hunger_icon.png'), name: 'Battle Hunger' },
    counterHelix: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/1/14/Counter_Helix_icon.png'), name: 'Counter Helix' },
    cullingBlade: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/3/30/Culling_Blade_icon.png'), name: 'Culling Blade' },
    overwhelmingOdds: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/4/49/Overwhelming_Odds_icon.png'), name: 'Overwhelming Odds' },
    pressTheAttack: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/d/df/Press_the_Attack_icon.png'), name: 'Press the Attack' },
    momentOfCourage: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/b/bd/Moment_of_Courage_icon.png'), name: 'Moment of Courage' },
    duel: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/b/ba/Duel_icon.png'), name: 'Duel' },
    shockwave: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d2/Shockwave_icon.png'), name: 'Shockwave' },
    empower: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7d/Empower_icon.png'), name: 'Empower' },
    skewer: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/8/87/Skewer_icon.png'), name: 'Skewer' },
    reversePolarity: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/f/ff/Reverse_Polarity_icon.png'), name: 'Reverse Polarity' },
    spearOfMars: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/e/ed/Spear_of_Mars_icon.png'), name: 'Spear of Mars' },
    godsRebuke: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/2/29/God%27s_Rebuke_icon.png'), name: 'God\'s Rebuke' },
    bulwark: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b3/Bulwark_icon.png'), name: 'Bulwark' },
    arenaOfBlood: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/8/8c/Arena_Of_Blood_icon.png'), name: 'Arena Of Blood' },
    purification: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/6/64/Purification_icon.png'), name: 'Purification' },
    heavenlyGrace: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/f/fa/Heavenly_Grace_icon.png'), name: 'Heavenly Grace' },
    degenAura: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/4/4d/Degen_Aura_icon.png'), name: 'Degen Aura' },
    hammerOfPurity: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f5/Hammer_of_Purity_icon.png'), name: 'Hammer of Purity' },
    guardianAngel: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/5/5d/Guardian_Angel_icon.png'), name: 'Guardian Angel' },
    scatterblast: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/5/5b/Scatterblast_icon.png'), name: 'Scatterblast' },
    firesnapCookie: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/a/ad/Firesnap_Cookie_icon.png'), name: 'Firesnap Cookie' },
    lilShredder: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/8/89/Lil%27_Shredder_icon.png'), name: 'Lil\' Shredder' },
    mortimerKisses: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/0/0c/Mortimer_Kisses_icon.png'), name: 'Mortimer Kisses' },
    gush: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/3/37/Gush_icon.png'), name: 'Gush' },
    krakenShell: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/4/44/Kraken_Shell_icon.png'), name: 'Kraken Shell' },
    anchorSmash: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/6/63/Anchor_Smash_icon.png'), name: 'Anchor Smash' },
    ravage: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/1/17/Ravage_icon.png'), name: 'Ravage' },
    iceShards: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/3/35/Ice_Shards_icon.png'), name: 'Ice Shards' },
    snowball: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/4/41/Snowball_icon.png'), name: 'Snowball' },
    tagTeam: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9e/Tag_Team_icon.png'), name: 'Tag Team' },
    walrusPunch: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/4/40/Walrus_Punch_icon.png'), name: 'Walrus PUNCH!' },
    acornShot: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/9/94/Acorn_Shot_icon.png'), name: 'Acorn Shot' },
    bushwhack: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/2/28/Bushwhack_icon.png'), name: 'Bushwhack' },
    scurry: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d5/Scurry_icon.png'), name: 'Scurry' },
    sharpshooter: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d1/Sharpshooter_icon.png'), name: 'Sharpshooter' },
    stiflingDagger: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/1/1c/Stifling_Dagger_icon.png'), name: 'Stifling Dagger' },
    phantomStrike: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/2/24/Phantom_Strike_icon.png'), name: 'Phantom Strike' },
    blur: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/e/ef/Blur_icon.png'), name: 'Blur' },
    coupDeGrace: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/0/0f/Coup_de_Grace_icon.png'), name: 'Coup de Grace' },
    shadowraze: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7c/Shadowraze_%28Near%29_icon.png'), name: 'Shadowraze' },
    necromastery: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9d/Necromastery_icon.png'), name: 'Necromastery' },
    presenceOfTheDarkLord: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/6/6e/Presence_of_the_Dark_Lord_icon.png'), name: 'Presence of the Dark Lord' },
    requiemOfSouls: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a8/Requiem_of_Souls_icon.png'), name: 'Requiem of Souls' },
    darkPact: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/8/8d/Dark_Pact_icon.png'), name: 'Dark Pact' },
    pounce: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/2/25/Pounce_icon.png'), name: 'Pounce' },
    essenceShift: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/6/6e/Essence_Shift_icon.png'), name: 'Essence Shift' },
    shadowDance: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2c/Shadow_Dance_icon.png'), name: 'Shadow Dance' },
    shrapnel: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/0/05/Shrapnel_icon.png'), name: 'Shrapnel' },
    headshot: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e5/Headshot_icon.png'), name: 'Headshot' },
    takeAim: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/6/64/Take_Aim_icon.png'), name: 'Take Aim' },
    assassinate: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/1/16/Assassinate_icon.png'), name: 'Assassinate' },
    refraction: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f9/Refraction_icon.png'), name: 'Refraction' },
    meld: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/4/4d/Meld_icon.png'), name: 'Meld' },
    psiBlades: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/7/78/Psi_Blades_icon.png'), name: 'Psi Blades' },
    psionicTrap: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a7/Psionic_Trap_icon.png'), name: 'Psionic Trap' },
    earthshock: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/3/3a/Earthshock_icon.png'), name: 'Earthshock' },
    overpower: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/f/fd/Overpower_icon.png'), name: 'Overpower' },
    furySwipes: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/5/52/Enrage_icon.png'), name: 'Fury Swipes' },
    enrage: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/5/52/Enrage_icon.png'), name: 'Enrage' },
    venomousGale: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/0/0c/Venomous_Gale_icon.png'), name: 'Venomous Gale' },
    poisonSting: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/6/69/Poison_Sting_icon.png'), name: 'Poison Sting' },
    plagueWard: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/6/67/Plague_Ward_icon.png'), name: 'Plague Ward' },
    poisonNova: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/0/0a/Poison_Nova_icon.png'), name: 'Poison Nova' },
    poisonAttack: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/1/1b/Poison_Attack_icon.png'), name: 'Poison Attack' },
    nethertoxin: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/9/95/Nethertoxin_icon.png'), name: 'Nethertoxin' },
    corrosiveSkin: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/e/ea/Corrosive_Skin_icon.png'), name: 'Corrosive Skin' },
    viperStrike: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9b/Viper_Strike_icon.png'), name: 'Viper Strike' },
    theSwarm: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7e/The_Swarm_icon.png'), name: 'The Swarm' },
    shukuchi: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/2/24/Shukuchi_icon.png'), name: 'Shukuchi' },
    geminateAttack: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2d/Geminate_Attack_icon.png'), name: 'Geminate Attack' },
    timeLapse: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/1/16/Time_Lapse_icon.png'), name: 'Time Lapse' },
    thunderStrike: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/5/5e/Thunder_Strike_icon.png'), name: 'Thunder Strike' },
    glimpse: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/e/ed/Glimpse_icon.png'), name: 'Glimpse' },
    kineticField: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7f/Kinetic_Field_icon.png'), name: 'Kinetic Field' },
    staticStorm: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/8/8e/Static_Storm_icon.png'), name: 'Static Storm' },
    dualBreath: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/a/af/Dual_Breath_icon.png'), name: 'Dual Breath' },
    icePath: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/f/fe/Ice_Path_icon.png'), name: 'Ice Path' },
    liquidFire: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/6/67/Liquid_Fire_icon.png'), name: 'Liquid Fire' },
    macropyre: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/b/bd/Macropyre_icon.png'), name: 'Macropyre' },
    fireblast: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/3/30/Fireblast_icon.png'), name: 'Fireblast' },
    ignite: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e4/Ignite_icon.png'), name: 'Ignite' },
    bloodlust: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b4/Bloodlust_icon.png'), name: 'Bloodlust' },
    multicast: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/8/87/Multicast_icon.png'), name: 'Multicast' },
    shadowStrike: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a6/Shadow_Strike_icon.png'), name: 'Shadow Strike' },
    blink: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/4/45/Blink_%28Queen_of_Pain%29_icon.png'), name: 'Blink' },
    screamOfPain: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c8/Scream_of_Pain_icon.png'), name: 'Scream of Pain' },
    sonicWave: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b5/Sonic_Wave_icon.png'), name: 'Sonic Wave' },
    shackleshot: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/3/3e/Shackleshot_icon.png'), name: 'Shackleshot' },
    powershot: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2a/Powershot_icon.png'), name: 'Powershot' },
    windrun: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/8/88/Windrun_icon.png'), name: 'Windrun' },
    focusFire: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/4/4d/Focus_Fire_icon.png'), name: 'Focus Fire' },
    arcticBurn: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/0/01/Arctic_Burn_icon.png'), name: 'Arctic Burn' },
    splinterBlast: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/e/ea/Splinter_Blast_icon.png'), name: 'Splinter Blast' },
    coldEmbrace: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/8/8a/Cold_Embrace_icon.png'), name: 'Cold Embrace' },
    wintersCurse: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b2/Winter%27s_Curse_icon.png'), name: 'Winter\'s Curse' },
    paralyzingCask: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/d/dd/Paralyzing_Cask_icon.png'), name: 'Paralyzing Cask' },
    voodooRestoration: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/1/11/Voodoo_Restoration_icon.png'), name: 'Voodoo Restoration' },
    maledict: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/4/42/Maledict_icon.png'), name: 'Maledict' },
    deathWard: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/c/cf/Death_Ward_icon.png'), name: 'Death Ward' },
    icarusDive: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/0/00/Icarus_Dive_icon.png'), name: 'Icarus Dive' },
    fireSpirits: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/c/cf/Fire_Spirits_icon.png'), name: 'Fire Spirits' },
    sunRay: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/d/df/Sun_Ray_icon.png'), name: 'Sun Ray' },
    supernova: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/a/aa/Supernova_icon.png'), name: 'Supernova' },
    breatheFire: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f8/Breathe_Fire_icon.png'), name: 'Breathe Fire' },
    dragonTail: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/6/6f/Dragon_Tail_icon.png'), name: 'Dragon Tail' },
    dragonBlood: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e6/Dragon_Blood_icon.png'), name: 'Dragon Blood' },
    elderDragonForm: { link: ('https://static.wikia.nocookie.net/dota2_gamepedia/images/3/33/Elder_Dragon_Form_icon.png'), name: 'Elder Dragon Form' },
}

export default Abilities