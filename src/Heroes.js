const Heroes = [
    {
        id: 'Axe',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/23/Axe_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['beserkersCall', 'battleHunger', 'counterHelix', 'cullingBlade', 'talentTree']
    },
    {
        id: 'Legion Commander',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a2/Legion_Commander_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['overwhelmingOdds', 'pressTheAttack', 'momentOfCourage', 'duel', 'talentTree']
    },
    {
        id: 'Magnus',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/ba/Magnus_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['shockwave', 'empower', 'skewer', 'reversePolarity', 'talentTree']
    },
    {
        id: 'Mars',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9d/Mars_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['spearOfMars', 'godsRebuke', 'bulwark', 'arenaOfBlood', 'talentTree']
    },
    {
        id: 'Omniknight',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e2/Omniknight_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['purification', 'heavenlyGrace', 'degenAura', 'guardianAngel', 'talentTree']
    },
    {
        id: 'Snapfire',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7a/Snapfire_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['scatterblast', 'firesnapCookie', 'lilShredder', 'mortimerKisses', 'talentTree']
    },
    {
        id: 'Tidehunter',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d5/Tidehunter_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['gush', 'krakenShell', 'anchorSmash', 'ravage', 'talentTree']
    },
    {
        id: 'Tusk',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/ce/Tusk_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['iceShards', 'snowball', 'tagTeam', 'walrusPunch', 'talentTree']
    },
    {
        id: 'Hoodwink',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c9/Hoodwink_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['acornShot', 'bushwhack', 'scurry', 'sharpshooter', 'talentTree']
    },
    {
        id: 'Juggernaut',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/03/Juggernaut_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['bladeFury', 'healingWard', 'bladeDance', 'omnislash', 'talentTree']
    },
    {
        id: 'Phantom Assasin',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/8e/Phantom_Assassin_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['stiflingDagger', 'phantomStrike', 'blur', 'coupDeGrace', 'talentTree']
    },
    {
        id: 'Shadow Fiend',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/36/Shadow_Fiend_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['shadowraze', 'necromastery', 'presenceOfTheDarkLord', 'requiemOfSouls', 'talentTree']
    },
    {
        id: 'Slark',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/aa/Slark_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['darkPact', 'pounce', 'essenceShift', 'shadowDance', 'talentTree']
    },
    {
        id: 'Sniper',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/51/Sniper_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['sharpnel', 'headshot', 'takeAim', 'assassinate', 'talentTree']
    },
    {
        id: 'Templar Assasin',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9c/Templar_Assassin_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['refraction', 'meld', 'psiBlades', 'psionicTrap', 'talentTree']
    },
    {
        id: 'Venomancer',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/25/Venomancer_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['venomousGale', 'poisonSting', 'plagueWard', 'poisonNova', 'talentTree']
    },
    {
        id: 'Viper',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/5f/Viper_icon.png',
        desc: 'Viper, the Netherdrake, is a ranged agility hero who functions as an excellent nuker, ganker and carry due to his assortment of low-cooldown spells and debilitating attacks. \
        \nHis modus operandi is to whittle away his opponents\' vitality over long stretches of time while they fail to inflict fatal damage.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['poisonAttack', 'nethertoxin', 'corrosiveSkin', 'viperStrike', 'talentTree']
    },
    {
        id: 'Weaver',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/09/Weaver_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['theSwarm', 'shukuchi', 'geminateAttack', 'timeLapse', 'talentTree']
    },
    {
        id: 'Disruptor',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/97/Disruptor_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['thunderStrike', 'glimpse', 'kineticField', 'staticStorm', 'talentTree']
    },
    {
        id: 'Jakiro',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2f/Jakiro_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['dualBreath', 'icePath', 'liquidFire', 'macropyre', 'talentTree']
    },
    {
        id: 'Ogre-Magi',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e0/Ogre_Magi_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['fireblast', 'ignite', 'bloodlust', 'multicast', 'talentTree']
    },
    {
        id: 'Queen of Pain',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a1/Queen_of_Pain_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['shadowStrike', 'blink', 'screamOfPain', 'sonicWave', 'talentTree']
    },
    {
        id: 'Windranger',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/60/Windranger_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['shackleshot', 'powershot', 'windrun', 'focusFire', 'talentTree']
    },
    {
        id: 'Winter Wyvern',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/4/4a/Winter_Wyvern_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['arcticBurn', 'splinterBlast', 'coldEmbrace', 'wintersCurse', 'talentTree']
    },
    {
        id: 'Witch Doctor',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/33/Witch_Doctor_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['paralyzingCask', 'voodooRestoration', 'maledict', 'deathWard', 'talentTree']
    }

]

export default Heroes