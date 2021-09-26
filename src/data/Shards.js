const Shards = {
    /*
        ==================
        |   Juggernaut   |
        ==================
    */
    pathfinder_special_juggernaut_blade_dance_reduce_omnislash_cooldown: {
        name: 'Studied the blade',
        skill: 'bladeDance',
        description: 'Each critical hit caused by Blade Dance also reduce Omnislash by 0.75 seconds'
    },
    pathfinder_special_juggernaut_wind_breathing_dummy: {
        name: 'Mask of Leeroy',
        skill: 'omnislash',
        description: 'Grant Juggernaut the Wind\'s Breath ability, allowing to quickly dash to a target location, attacking any enemy in the way'
    },
    pathfinder_special_juggernaut_blade_fury_flying: {
        name: 'Helicopter',
        skill: 'bladeFury',
        description: 'Juggernaut gains flying movement during Bladefury and 35% damage reduction'
    },
    pathfinder_special_juggernaut_blade_fury_ward: {
        name: 'Let it Rip',
        skill: 'bladeFury',
        description: 'Casting Bladefury causes any allied hero and healing ward in a 600 radius to cast their own lesser Bladefury for 50% duration'
    },
    pathfinder_special_juggernaut_blade_fury_strength: {
        name: 'Meat Spin',
        skill: 'bladeFury',
        description: 'Blade Fury grants Juggernaut 0.15 temporary bonus strength for every instance of damage dealt, lasting 15 seconds. Additional stacks will refresh the duration of the buff.'
    },
    pathfinder_special_juggernaut_healing_ward_earthshock: {
        name: 'Wrath of Gaia',
        skill: 'healingWard',
        description: 'Every 3 seconds, Healing Ward cast a shockwave that root nearby enemies for 1.5 seconds. The range of the effect is the same as Healing Ward\'s heal radius.'
    },
    pathfinder_special_juggernaut_healing_ward_creep: {
        name: 'Timmothy the Brave',
        skill: 'healingWard',
        description: 'Healing Ward becomes a melee unit with high armour and possesses 100% of his total attack damage. The Healing Ward also possesses 50% of his attack damage and gains 40% of Juggernaut\'s max health as bonus health.'
    },
    pathfinder_special_juggernaut_healing_ward_radiance: {
        name: 'Bad Omen',
        skill: 'healingWard',
        description: 'Healing Ward gains a burning aura, causing it to burn all enemies in its heal radius every second. The damage is equals to Juggernaut\'s total Attack Damage.'
    },
    pathfinder_special_juggernaut_healing_ward_allies: {
        name: 'Pass the Grass',
        skill: 'healingWard',
        description: 'Casting Healing Ward will also summon a personal Healing Ward for each friendly hero within a 600 radius. These extra healing wards has 60% duration'
    },
    pathfinder_special_juggernaut_blade_dance_illusion: {
        name: 'Army of the Isle',
        skill: 'bladeDance',
        description: 'Each Critical Hit caused by Blade Dance also spawns an invulnerable illusion of Juggernaut that lasts 2 seconds. These uncontrollable Illusions deal 40% damage and can also spawn more illusion from their own critical strikes.'
    },
    /*
        ===========
        |   Axe   |
        ===========
    */
    pathfinder_axe_special_berseker_call_battle_hunger: {
        name: 'Axe-troverted Personality',
        skill: 'beserkersCall',
        description: 'Berserker\'s Call also automatically applies Battle Hunger unto all affected enemy units. Axe is healed for 3% of his max health for each unit taunted'
    },
    pathfinder_axe_special_berseker_call_health: {
        name: 'Cardiovascular Axercises',
        skill: 'beserkersCall',
        description: 'Axe gains 25 bonus max health every time an enemy unit dies while affected by Berserker\'s Call. Half of this bonus is lost on death.'
    },
    pathfinder_axe_special_berseker_call_allies: {
        name: 'Come Axe Me A Question',
        skill: 'beserkersCall',
        description: 'Berserker\'s Call also triggers on allied heroes, granting them the armour bonus and drawing the aggro of nearby enemy units unto Axe instead.'
    },
    pathfinder_axe_special_battle_hunger_lifesteal: {
        name: 'Axe-cellent Camaraderie',
        skill: 'battleHunger',
        description: 'Battle Hunger now heals all nearby allied heroes within a 700 radius for 100% of its damage.'
    },
    pathfinder_axe_special_battle_hunger_culling_cdr: {
        name: 'Axe-citing Developments',
        skill: 'battleHunger',
        description: 'Each time an enemy unit afflicted with Battle Hunger is attacked, the cooldown of Culling Blade is reduced by 1 seconds. These attacks do not need to come from Axe himself.'
    },
    pathfinder_axe_special_battle_hunger_refresh: {
        name: 'Axe-quisite Allure',
        skill: 'battleHunger',
        description: 'Each time a unit afflicted with Battle Hunger attacks Axe, they gain an additional stack of Battle Hunger. This effect fully ignores the ability\'s max stack count'
    },
    pathfinder_axe_special_counter_helix_allies: {
        name: 'Axe-ceptional Influences',
        skill: 'counterHelix',
        description: 'Counter Helix becomes an aura ability that grants its benefit to all allied heroes within a 700 radius.'
    },
    pathfinder_axe_special_counter_helix_fury: {
        name: 'Huge Pain in the Axe',
        skill: 'counterHelix',
        description: 'Counter Helix can now be toggled, causing Axe to continously deals the ability\'s damage to nearby enemies every second. This effect does not require mana, but drain 3% health per second. Axe moves 40% slower while the effect is active'
    },
    pathfinder_axe_special_counter_helix_reduce_damage: {
        name: 'Low Axe-pectation',
        skill: 'counterHelix',
        description: 'Enemy units damaged by Counter Helix deal 35% percent less damage for 2.5 seconds.'
    },
    pathfinder_axe_special_culling_blade_heal: {
        name: 'Back in Axe-tion',
        skill: 'cullingBlade',
        description: 'Killing an enemy unit with Culling Blade instantly heals Axe for 50% of the target\'s max health. Additionally, Culling Blade refunds 3 times its mana cost upon getting a kill.'
    },
    pathfinder_axe_special_culling_blade_omnislash: {
        name: 'Omnidirectional Axe-travaganza',
        skill: 'cullingBlade',
        description: 'Upon killing an enemy with his Ultimate, Axe instantly blinks away and and casts Culling Blade onto the lowest-health enemy within an 900 radius.'
    },
    pathfinder_axe_special_culling_blade_delay: {
        name: 'Unforgettable Axe-periences',
        skill: 'cullingBlade',
        description: 'Culling Blade now has a grace period of 7 seconds, during which the damaged unit will instantly die if its health falls below the kill threshold.'
    },
    pathfinder_axe_special_culling_blade_leap: {
        name: 'Workplace Axe-cidents',
        skill: 'cullingBlade',
        description: 'Culling Blade allows Axe to leap onto any enemy unit within 1200 range. Upon landing, he stuns all units within a 400 radius for 2 seconds, and applies Culling Blade\'s Failure Damage unto all secondary targets.'
    },
    pathfinder_axe_special_berseker_call_blink: {
        name: 'Call of ceeb',
        skill: 'beserkersCall',
        description: 'Berserker\'s Call becomes a point-targeted abilities that allows Axe to instantly blink to a position up to 750 units away'
    },
    /*
        ========================
        |   Legion Commander   |
        ========================
    */
    pathfinder_special_lc_global_arrows_dummy: {
        name: 'Blot Out the Sun',
        skill: 'overwhelmingOdds',
        description: 'Legion Commander gains the Overwhelmingly Overhelming Odds ability, allowing her to channel for up to 8 seconds to call down the current level of Overwhelming Odds unto a random visible enemy within global range every 0.8 seconds.'
    },
    pathfinder_special_lc_duel_arrows: {
        name: 'Just Don\'t Lead Em\' So Much',
        skill: 'overwhelmingOdds',
        description: 'While under the effect of Duel, Legion Commander\'s opponent is hit with the current level of Overwhelming Odds every second.'
    },
    pathfinder_special_lc_duel_legion: {
        name: 'Tonight, Dine in Hell',
        skill: 'duel',
        description: 'Upon casting Duel, Legion Commander summons the Ashen Legion to battle all other nearby enemy units within a large 1000 radius. These Ashen warriors possess 60% of Legion Commander\'s attack damage, and would last for the duration of the ability. These warriors do not move, and act as stationary melee units that attack any enemies that pass it.'
    },
    pathfinder_special_lc_duel_purge: {
        name: 'So You\'re Finally Awake',
        skill: 'pressTheAttack',
        description: 'While dueling an enemy, Legion Commander will cast the current level of Press the Attack on all friendly heroes within a 650 radius. Each cast will additionally heal the affected units for 4% of Legion Commander\'s max health.'
    },
    pathfinder_special_lc_arrows_meteor: {
        name: 'Fight in the Shade',
        skill: 'overwhelmingOdds',
        description: 'Overwhelming Odds now launches an additional volley of meteors, dealing an additional instance of the ability\'s base damage and stunning any affect enemy unit for 3 seconds'
    },
    pathfinder_special_lc_arrows_reset: {
        name: 'Are You Not Entertained?',
        skill: 'overwhelmingOdds',
        description: 'Upon killing an enemy unit with Overwhelming Odds, Legion Commander resets the cooldowns of all of her abilities'
    },
    pathfinder_special_lc_moment_aoe: {
        name: 'Born to Kill',
        skill: 'momentOfCourage',
        description: 'Moment of Courage now also causes Legion Commander to attacks up to 2 additional targets in a 200 radius. These instant attacks fully benefit from all of Legion Commander\'s abilities and items'
    },
    pathfinder_special_lc_press_blademail: {
        name: 'Et tu, Tresdin?',
        skill: 'pressTheAttack',
        description: 'Press the Attack now also grants the affected unit a lesser blademail effect, causing 50% of all damage they receive to be sent back unto the attackers'
    },
    pathfinder_special_lc_press_bkb: {
        name: 'Give Them Nothing',
        skill: 'pressTheAttack',
        description: 'Units affected by Press The Attack will also receive 50% magical resistance and 35% status resistance'
    },
    /*
        ==============
        |   Magnus   |
        ==============
    */
    aghsfort_special_magnataur_shockwave_multishot: {
        name: 'Triwave',
        skill: 'shockwave',
        description: 'Shockwave now fires 3 shockwaves. Secondary shockwaves deal 50% less damage.'
    },
    aghsfort_special_magnataur_shockwave_damage_reduction: {
        name: 'Shock and Awe',
        skill: 'shockwave',
        description: 'Enemies hit by Shockwave deal 65% less damage for 2.5 seconds.'
    },
    aghsfort_special_magnataur_shockwave_boomerang: {
        name: 'Shockarang',
        skill: 'shockwave',
        description: 'Shockwaves launch a secondary Shockwave in the opposite direction after reaching their maximum distance.'
    },
    aghsfort_special_magnataur_empower_all_allies: {
        name: 'Empowerment',
        skill: 'empower',
        description: 'Empower has no target requirement and is applied to all allies.'
    },
    aghsfort_special_magnataur_empower_lifesteal: {
        name: 'Vampower',
        skill: 'empower',
        description: 'Empowered attacks now have 10% lifesteal.'
    },
    aghsfort_special_magnataur_empower_shockwave_on_attack: {
        name: 'Too Many Waves',
        skill: 'empower',
        description: 'Empowered attacks now have a 20% chance to cast Magnus\'s Shockwave.'
    },
    aghsfort_special_magnataur_skewer_bonus_strength: {
        name: 'Bulldoze',
        skill: 'skewer',
        description: 'Magnus gains 5 strength per target skewered for 20 seconds.'
    },
    aghsfort_special_magnataur_skewer_heal: {
        name: 'Spit Take',
        skill: 'skewer',
        description: 'Magnus heals allies hit for 60% of skewer\'s damage. The allies are not moved.'
    },
    aghsfort_special_magnataur_skewer_shockwave: {
        name: 'Blast Off',
        skill: 'skewer',
        description: 'Magnus attacks each enemy as he Skewers them'
    },
    aghsfort_special_magnataur_reverse_polarity_polarity_dummy: {
        name: 'Reverse Reverse Polarity',
        skill: 'reversePolarity',
        description: 'Magnus reverses Reverse Polarity, gaining an additional ability that flings out enemies away from him instead of pulling them in, applying the damage and stun of Reverse Polarity.'
    },
    aghsfort_special_magnataur_reverse_polarity_allies_crit: {
        name: 'Dematerialization',
        skill: 'reversePolarity',
        description: 'Allies\' attacks critically strike enemies stunned by Reverse Polarity for 300% damage.'
    },
    aghsfort_special_magnataur_reverse_polarity_steroid: {
        name: 'Extra Polarity',
        skill: 'reversePolarity',
        description: 'After casting Reverse Polarity, Magnus\'s movement speed is increased by 100% and his attack speed is increased by 70 for 30 seconds.'
    },
    /*
        ============
        |   Mars   |
        ============
    */
    aghsfort_special_mars_spear_multiskewer: {
        name: 'Shish Kebab',
        skill: 'spearOfMars',
        description: 'Spear can impale up to 7 enemies at once.'
    },
    aghsfort_special_mars_spear_impale_explosion: {
        name: 'Boomstick',
        skill: 'spearOfMars',
        description: 'Spear explodes in a 450 radius at its destination, dealing an additional instance of its current damage.'
    },
    aghsfort_special_mars_spear_burning_trail: {
        name: 'Trailblazer',
        skill: 'spearOfMars',
        description: 'Spear leaves a burning trail in its wake. The trail lasts for 4 seconds and burns enemies for 20% of Spear\'s damage every 0.5 seconds.'
    },
    aghsfort_special_mars_gods_rebuke_full_circle: {
        name: 'Full Circle',
        skill: 'godsRebuke',
        description: 'God\'s Rebuke deals damage in a full circle around Mars.'
    },
    aghsfort_special_mars_gods_rebuke_stun: {
        name: 'Stunning Rebuke',
        skill: 'godsRebuke',
        description: 'God\'s Rebuke stuns enemies for 2 seconds.'
    },
    aghsfort_special_mars_gods_rebuke_strength_buff: {
        name: 'Strong Argument',
        skill: 'godsRebuke',
        description: 'God\'s Rebuke grants Mars 4 strength for 10 seconds for each enemy hit.'
    },
    aghsfort_special_mars_bulwark_counter_rebuke: {
        name: 'Retort',
        skill: 'bulwark',
        description: 'During active Bulwark, Mars has  17% chance to counter attack with God\'s Rebuke if attacked from the front'
    },
    aghsfort_special_mars_bulwark_spears: {
        name: 'Bastion',
        skill: 'bulwark',
        description: 'Every 1.1 seconds of Bulwark being active, Mars gets an additional charge, up to 3 total. When Bulwark is turned off, Mars releases a Spear for each charge, in a semi-circle in front of him.'
    },
    aghsfort_special_mars_bulwark_soldiers: {
        name: 'Phalanx',
        skill: 'bulwark',
        description: 'When activating Bulwark, Mars summons 3 invulnerable and unmovable soldiers next to him. Soldiers have an attack range of 300, and deal 25 + 30% of Mars\'s Base Attack Damage with each hit. Soldiers last for the full duration of Bulwark.'
    },
    aghsfort_special_mars_arena_of_blood_global: {
        name: 'Remote Workplace',
        skill: 'arenaOfBlood',
        description: 'Arena of Blood has a global cast range, and a 25% cooldown decrease'
    },
    aghsfort_special_mars_arena_of_blood_attack_buff: {
        name: 'Coliseum',
        skill: 'arenaOfBlood',
        description: 'Allies inside the Arena gain 35 bonus damage and 25 bonus attack speed'
    },
    aghsfort_special_mars_arena_of_blood_outside_perimeter: {
        name: 'Anyway, Here\'s Spearwall',
        skill: 'arenaOfBlood',
        description: 'Soldiers in the Arena of Blood also attack enemies up to 250 units outside the arena.'
    },
    /*
        ==================
        |   Omniknight   |
        ==================
    */
    aghsfort_special_omniknight_purification_cast_radius: {
        name: 'Holy Place',
        skill: 'purification',
        description: 'Purification now heals all friendly units in an 250 area of effect.'
    },
    aghsfort_special_omniknight_purification_charges: {
        name: 'Benevolence',
        skill: 'purification',
        description: 'Purification now has 2 charges.'
    },
    aghsfort_special_omniknight_purification_multicast: {
        name: 'Blessed Cure',
        skill: 'purification',
        description: 'Purification has a 50% chance to affect the target twice.'
    },
    aghsfort_special_omniknight_repel_procs_purification: {
        name: 'Heavenly Purification',
        skill: 'purification',
        description: 'Heals the target with the current level of Purification when Heavenly Grace is cast.'
    },
    aghsfort_special_omniknight_repel_outgoing_damage: {
        name: 'Zeal',
        skill: 'heavenlyGrace',
        description: 'Heavenly Grace amplifies damage dealt by the affected unit by 30%.'
    },
    aghsfort_special_omniknight_repel_damage_instance_refraction: {
        name: 'Heavenly Barrier',
        skill: 'heavenlyGrace',
        description: 'Heavenly Grace blocks 5 instances of damage on the targeted ally.'
    },
    aghsfort_special_omniknight_repel_knockback_on_cast: {
        name: 'Judgement',
        skill: 'heavenlyGrace',
        description: 'Heavenly Grace knocks back enemies within 400 of the target on cast, and deals damage equal to 150% of Omniknight\'s base attack to the affected enemies.'
    },
    aghsfort_special_omniknight_degen_aura_toggle: {
        name: 'Righteous Path',
        skill: 'degenAura',
        description: 'Degen Aura also affects allies, increasing their attack and movement speed for 50% of values'
    },
    aghsfort_special_omniknight_degen_aura_damage: {
        name: 'Condemnation',
        skill: 'degenAura',
        description: 'Degen Aura damages enemies in its area of effect for 25% of Omniknight\'s base attack damage every 0.75 seconds.'
    },
    aghsfort_special_omniknight_degen_aura_restoration: {
        name: 'Absolution',
        skill: 'degenAura',
        description: 'Enemy units that die within Degen Aura\'s area of effect restore 4% of Omniknight\'s max Health and Mana.'
    },
    aghsfort_special_omniknight_guardian_angel_purification: {
        name: 'Heal Life Angel',
        skill: 'guardianAngel',
        description: 'Any time a unit affected by Guardian Angel is attacked, there is a 20% chance that the unit will be healed by Omniknight\'s current level of Purification.'
    },
    aghsfort_special_omniknight_guardian_angel_immune_flight: {
        name: 'Angelic Flight',
        skill: 'guardianAngel',
        description: 'Guardian Angel gives 30% magic resistance and flight for its duration'
    },
    aghsfort_special_omniknight_guardian_angel_single_target_dummy: {
        name: 'Personal Savior',
        skill: 'guardianAngel',
        description: 'Omniknight gains a separate ability, allowing him to cast his current level of Guardian angel on a single target. Mana cost is reduced by 50%.'
    },
    /*
        ================
        |   Snapfire   |
        ================
    */
    aghsfort_special_snapfire_scatterblast_double_barrel: {
        name: 'Double-barreled',
        skill: 'scatterblast',
        description: 'Scatterblast has 2 charges.'
    },
    aghsfort_special_snapfire_scatterblast_knockback: {
        name: 'Stopping Power',
        skill: 'scatterblast',
        description: 'Scatterblast knocks enemies hit 250 units back, and always deals its point blank damage to all enemies.'
    },
    aghsfort_special_snapfire_scatterblast_barrage: {
        name: 'Sawed-Off',
        skill: 'scatterblast',
        description: 'Along with the main blast, Snapfire fires two additional volleys of Scatterblast to her sides.'
    },
    aghsfort_special_snapfire_firesnap_cookie_multicookie: {
        name: 'Baker\'s Dozen',
        skill: 'firesnapCookie',
        description: 'Snapfire gives Firesnaps to all targets in a 300 area around her main target. Only the main target hops forward, secondary targets hop in place. The initial cookie flies 50% faster.'
    },
    aghsfort_special_snapfire_firesnap_cookie_enemytarget: {
        name: 'Raisin Firesnaps',
        skill: 'firesnapCookie',
        description: 'Firesnaps now cause the current level of Mortimer\'s Kiss to be created at the landing destination, and can be fed to enemies, causing them to jump in place.'
    },
    aghsfort_special_snapfire_firesnap_cookie_allied_buff: {
        name: 'Freshly Baked',
        skill: 'firesnapCookie',
        description: 'Firesnaps give allies 250 Bonus Attack Range (ranged only) and 50 Attack Damage for 6.5 seconds.'
    },
    aghsfort_special_snapfire_lil_shredder_explosives: {
        name: 'Explosive Shells',
        skill: 'lilShredder',
        description: 'Lil\' Shredder attacks deal damage in a 150 radius.'
    },
    aghsfort_special_snapfire_lil_shredder_ally_cast: {
        name: 'Lil Friendly Shredder',
        skill: 'lilShredder',
        description: 'Lil\' Shredder can be cast on allies.'
    },
    aghsfort_special_snapfire_lil_shredder_bouncing_bullets: {
        name: 'Ricochet',
        skill: 'lilShredder',
        description: 'Lil\' Shredder attacks bounce to an additional 3 targets within a 500 range.'
    },
    aghsfort_special_snapfire_mortimer_kisses_fragmentation: {
        name: 'Fragments of Kisses',
        skill: 'mortimerKisses',
        description: 'Kisses explode on impact, sending 6 fragments into an area 300 around the initial area.'
    },
    aghsfort_special_snapfire_mortimer_kisses_autoattack: {
        name: 'Autocannon',
        skill: 'mortimerKisses',
        description: 'When Mortimer Kisses are active, Snapfire blasts enemies within 450 range with Scatterblast every 1 second(s).'
    },
    aghsfort_special_snapfire_mortimer_kisses_incoming_damage_reduction: {
        name: 'Safety First',
        skill: 'mortimerKisses',
        description: 'When Mortimer Kisses are active, Snapfire takes 100% less damage.'
    },
    /*
        ==================
        |   Tidehunter   |
        ==================
    */
    tidehunter_gush_pf_miss: {
        name: 'Salt Water Face Wash',
        skill: 'gush',
        description: 'Enemy units affected by Gush\'s debuff will also have a 33% miss chance.'
    },
    tidehunter_gush_pf_ravage: {
        name: 'Tentacular Fondling',
        skill: 'gush',
        description: 'Gush also summons a single Ravage tentacle of the current level unto the primary targeted unit, which deals 20% damage and stuns for the full duration of Ravage.'
    },
    tidehunter_gush_pf_bounce: {
        name: 'Together unto the Depth',
        skill: 'gush',
        description: 'Upon hitting a target, Gush projectile will bounce up to 2 times to the furthest enemy unit within a 1200 radius.'
    },
    tidehunter_anchor_smash_pf_whack: {
        name: 'Anchor Whack',
        skill: 'anchorSmash',
        description: 'Anchor Smash now also knocks back any affected enemy unit and has a 45% chance to root them for 2 seconds.'
    },
    tidehunter_anchor_smash_pf_karate: {
        name: 'Fish-Man Karate',
        skill: 'anchorSmash',
        description: 'Tidehunter\'s attack speed is reduced to the absolute minimum, but the cooldown of Anchor Smash is reduced by half and its mana cost is removed.'
    },
    tidehunter_anchor_smash_pf_allies: {
        name: 'Safe Harbours',
        skill: 'anchorSmash',
        description: 'Casting Anchor Smash will also apply the effect unto any friendly hero with a 700 radius, dealing damage and reducing the attack capability of any enemy unit .around them'
    },
    tidehunter_kraken_shell_pf_heal: {
        name: 'Lovecraftian Romance',
        skill: 'krakenShell',
        description: 'Kraken Shell\'s cleanse effect also dispels and heals any friendly hero within a 1000 radius for 30% of the trigger treshold.'
    },
    tidehunter_kraken_shell_pf_ravage_cdr: {
        name: 'Maelrawn\'s Lament',
        skill: 'krakenShell',
        description: 'Each proc of Kraken Shell\'s cleanse effect also lowers the cooldown of Ravage by 5%.'
    },
    tidehunter_kraken_shell_pf_gush: {
        name: 'Razor Shore',
        skill: 'krakenShell',
        description: 'Upon triggering the cleanse effect, Kraken Shell will automatically launce 3 Gush projectiles of the current level unto nearby enemy units.'
    },
    tidehunter_ravage_pf_puddle: {
        name: 'Red Sea\'s Clamour',
        skill: 'krakenShell',
        description: 'Casting Ravage will leave behind a puddle that amplifies Kraken Shell\'s damage block by 75%. Any enemy unit within the radius has a 10% chance of being affected by the current level of Ravage every second. The puddle will never expire as long as Tidehunter remains inside it.'
    },
    tidehunter_pf_crunch: {
        name: 'Cap\'n Crunch',
        skill: 'krakenShell',
        description: 'Tidehunter swallows up an enemy captain, dealing 5% of his max health as pure damage to both himself and the victim every second. If the targer dies under this effect, Tidehunter gains a stacking bonus that increases his max health, regeneration, status resistance, armor, magic resistance. Half the stacks are lost on death.'
    },
    /*
        ============
        |   Tusk   |
        ============
    */
    aghsfort_special_tusk_ice_shards_explode: {
        name: 'Icebreaker',
        skill: 'iceShards',
        description: 'Each shard explodes every 0.75 seconds in a 250 radius, dealing 30% of the Ice Shard initial damage for the duration of the shards.'
    },
    aghsfort_special_tusk_ice_shards_stun: {
        name: 'Deep Freeze',
        skill: 'iceShards',
        description: 'The Ice Shard projectile also stuns the hit targets for 2 seconds.'
    },
    aghsfort_special_tusk_ice_shards_secondary: {
        name: 'Ice Shard Extension',
        skill: 'iceShards',
        description: 'The Ice Shard projectile continues past the cast target, dealing damage to enemies up to 2000 units away. Ice shards will still be created in the usual place.'
    },
    aghsfort_special_tusk_snowball_heal: {
        name: 'Snow Fort',
        skill: 'snowball',
        description: 'All allies inside the Snowball gain an additional 4% Max Health as regen per second.'
    },
    aghsfort_special_tusk_snowball_end_damage: {
        name: 'Snowball Blast',
        skill: 'snowball',
        description: 'At the end of the Snowball, all enemies within a 450 area of the end receive an additional burst of Snowball damage.'
    },
    aghsfort_special_tusk_snowball_global: {
        name: 'Global Cooling',
        skill: 'snowball',
        description: 'Snowball has global cast range and ally units can be added into the snowball from anywhere. Max travel duration is not increased.'
    },
    aghsfort_special_tusk_tag_team_lifesteal: {
        name: 'Cool Party',
        skill: 'tagTeam',
        description: 'Allies hitting an enemy affected by Tag Team gain 8% lifesteal.'
    },
    aghsfort_special_tusk_tag_team_toggle: {
        name: 'Tag, You\'re In',
        skill: 'tagTeam',
        description: 'Tag Team can now be toggled on or off and has no duration, but drains 15 mana per second.'
    },
    aghsfort_special_tusk_tag_team_global: {
        name: 'Everybody Tag Now',
        skill: 'tagTeam',
        description: 'Tag Team is applied to all enemies, regardless of Tusk\'s position.'
    },
    aghsfort_special_tusk_walrus_punch_reset: {
        name: 'And Another Punch!',
        skill: 'walrusPunch',
        description: 'If an enemy is killed by Walrus Punch, its cooldown is refreshed.'
    },
    aghsfort_special_tusk_walrus_punch_land_damage: {
        name: 'Tusky-duskie',
        skill: 'walrusPunch',
        description: 'Upon landing from Walrus Punch, all enemies within 300 radius of the landing zone take 50% of the initial punch damage.'
    },
    aghsfort_special_tusk_walrus_punch_wallop: {
        name: 'Walrus Wallop',
        skill: 'walrusPunch',
        description: 'Walrus Punch knocks back enemies up to 600 units. When the unit collides with another enemy, that enemy also takes a 25% weaker crit damage and receives a weaker knockback, continuing the effect on units it hits. A unit can only be hit once per use of Walrus Wallop.'
    },
    tusk_frozen_sigil_pf: {
        name: 'Sigil from Cobalt',
        skill: 'tagTeam',
        description: 'Tusk summons forth a frozen sigil that continuously attacks all nearby enemies for 30% of Tusk\'s total attack damage. Additionally, any attack landed on an enemy unit within the Sigil\'s aura will cause them to become rooted for 0.35 seconds.'
    },
    /*
        ========================
        |   Phantom Assassin   |
        ========================
    */
    pathfinder_special_pa_dagger_bouncing: {
        name: 'Golden Eye',
        skill: 'stiflingDagger',
        description: 'Upon hitting an enemy, Stifling Dagger will bounce up to 3 times to other enemy unit within a 700 radius.'
    },
    pathfinder_special_pa_blink_illusion: {
        name: 'Quantum of Solace',
        skill: 'stiflingDagger',
        description: 'Phantom Strike summons a near-perfect copy of Phantom Assassin at her initial location. This illusion deals 35% damage, is magic-immune, and benefits from most of her passives and items. The illusion will never expire as long as there is an enemy unit within a 400 radius'
    },
    pathfinder_special_pa_blink_aoe: {
        name: 'Spectre',
        skill: 'phantomStrike',
        description: 'Phantom Strike leaves a pulsing circular area at its destination. Each pulse applies Phantom Assassin\'s attack unto every single enemy unit caught within the 350 radius. These attacks can never miss and benefits from Phantom Assassin\'s abilities and items. Maximum of 3 pulses.'
    },
    pathfinder_special_pa_blur_aoe: {
        name: 'For your Eyes Only',
        skill: 'blur',
        description: 'Blur also applies its effect to all friendly heroes within a 700 radius. Allies benefit from both active and passive components of Blur.'
    },
    pathfinder_special_pa_blur_block: {
        name: 'Die Another Day',
        skill: 'blur',
        description: 'Upon breaking Blur\'s invisibility, Phantom Assassin gains 10 seconds of persistent spell block, allowing her to absorb the effects of all single targeted spells.'
    },
    pathfinder_special_pa_crit_fear: {
        name: 'Oh My God She Killed Kenny',
        skill: 'coupDeGrace',
        description: 'Coup de Grace\'s critical strikes causes enemy units within 300 radius to be frozen with terror, rendering them unable to act for 2.75 seconds. The main attack target is unaffected by this effect.'
    },
    pathfinder_special_pa_crit_lifesteal: {
        name: 'Live and Let Die',
        skill: 'coupDeGrace',
        description: 'Coup de Grace\'s critical strikes also lifesteal for 50% damage.'
    },
    phantom_assassin_dagger_global_dummy: {
        name: 'The World is Not Enough',
        skill: 'coupDeGrace',
        description: 'Phantom Assassin gains the Black Swan Pirouette ability, allowing her to unleash the current level of Stifling Dagger unto every enemy unit within global range. Also passively grants all Stifling Daggers 100% lifesteal. The Black Swan Pirouette ability has a 40 seconds cooldown.'
    },
    pathfinder_special_pa_crit_dagger: {
        name: 'License to Kill',
        skill: 'coupDeGrace',
        description: 'Coup de Grâce Critical Strikes cause any enemy unit affected by the Stifling Dagger debuff to release 1 Stifling Dagger toward another unit within the range of the ability.'
    },
    pathfinder_special_pa_blur_regen: {
        name: 'The Living Daylights',
        skill: 'blur',
        description: 'While under the effect of Blur\'s invisibility, Phantom Assassin passively gain 50% movement speed and 5% max health regeneration. Blur\'s passive component also unlocks Phantom Assassin\'s maximum movement speed limit.'
    },
    pathfinder_special_pa_blur_cdr: {
        name: 'Whispers from Lordran',
        skill: 'blur',
        description: 'Any enemy unit that dies within a 500 radius of Phantom Assassin reduces Blur\'s cooldown by 50%'
    },
    /*
        ====================
        |   Shadow Fiend   |
        ====================
    */
    pathfinder_nevermore_special_necromastery_revenant: {
        name: 'Oathbound Revenant',
        skill: 'necromastery',
        description: 'Necromastery becomes a unit-target ability. When activated, Shadowfiend consumes 5 souls to cast the current level of Shadowraze unto the targeted unit, twice. If it dies, the target will arise once more to fight for Shadowfiend.'
    },
    pathfinder_nevermore_special_raze_multi: {
        name: 'Death of Night',
        skill: 'shadowraze',
        description: 'Shadowraze Near/Medium/Far releases 1/2/5 additional razes around Shadowfiend.'
    },
    pathfinder_nevermore_special_dark_lord_raze: {
        name: 'Happy Hallowfiend',
        skill: 'shadowraze',
        description: 'Presence of the Dark Lord becomes a Toggle ability. When activated, the ability creates a Shadowraze underneath a random nearby enemy every second. Each of these Shadowraze consumes 2 soul.'
    },
    pathfinder_nevermore_special_requiem_soul_projectile: {
        name: 'Glutton of the Abyss',
        skill: 'requiemOfSouls',
        description: 'Souls retrieved by Necromastery also launch a Requiem projectile in the opposite direction, damaging and applying the debuff upon any enemy unit on the way for the value of the ultimate.'
    },
    pathfinder_nevermore_special_requiem_sleep: {
        name: 'Requiem for a Dream',
        skill: 'requiemOfSouls',
        description: 'Enemies feared by Requiem of Souls will furthermore put to sleep for up to 25 seconds once the debuff wears off.'
    },
    pathfinder_nevermore_special_dark_lord_split_attack: {
        name: 'Injustice for All',
        skill: 'presenceOfTheDarkLord',
        description: 'Each time Shadowfiend attacks, he will also launch up to 2 additional attacks toward other enemy units affected by Presence of the Dark Lord. These extra attacks deal 50% less damage but can fully proc any on-hit effect.'
    },
    pathfinder_nevermore_special_necromastery_attack_soul: {
        name: 'Ozkavosh Hospitality',
        skill: 'necromastery',
        description: 'Each time Shadowfiend attacks an enemy unit, he has a 15% chance to extract 1 soul from the target.'
    },
    pathfinder_nevermore_special_requiem_attack: {
        name: 'Conductor of the Hellward Express',
        skill: 'presenceOfTheDarkLord',
        description: 'Shadowfiend gains a stack of Choo Choo Soul every time he attack an enemy unit affected by Presence of the Dark Lord. At 55 stacks, Shadowfiend will reset the stack count and unleash a free Requiem of Souls of the current level.'
    },
    pathfinder_nevermore_special_dark_lord_friendly: {
        name: 'Favors of Ristful',
        skill: 'presenceOfTheDarkLord',
        description: 'Presence of the Dark Lord now also increases the armor of nearby allies for the ability\'s value.'
    },
    pathfinder_nevermore_special_necromastery_lifesteal: {
        name: 'Soul of a Poet',
        skill: 'necromastery',
        description: 'Each soul collected through Necromastery also grants Shadowfiend +1% spell amplification, as well as +2% spell lifesteal and regen amplification'
    },
    /*
        =============
        |   Slark   |
        =============
    */
    aghsfort_special_slark_dark_pact_essence_shift: {
        name: 'Broken Contract',
        skill: 'darkPact',
        description: 'Dark Pact adds Essence Shift stacks for each target hit.'
    },
    aghsfort_special_slark_dark_pact_push_stun: {
        name: 'Smells Fishy',
        skill: 'darkPact',
        description: 'Dark Pact Push pushes away enemies with each pulse, stunning them for 1.5 seconds.'
    },
    aghsfort_special_slark_dark_pact_unit_target: {
        name: 'Brackish Bath',
        skill: 'darkPact',
        description: 'Dark Pact can target units, friendly or enemies, and purges all allies around the target'
    },
    aghsfort_special_slark_pounce_attack_all: {
        name: 'Gone Fishing',
        skill: 'pounce',
        description: 'Slark also attacks all targets he jumps through, including the leashed enemy.'
    },
    aghsfort_special_slark_pounce_projectiles: {
        name: 'Little Skippers',
        skill: 'pounce',
        description: 'Creates 6 copies of Slark that jump in different directions in a 180 degree cone, damaging and leashing enemy units.'
    },
    aghsfort_special_slark_pounce_leashed_bonus: {
        name: 'Fish Food',
        skill: 'pounce',
        description: 'Allies attacking a leashed unit get bonus 50 attack speed.'
    },
    aghsfort_special_slark_essence_shift_aoe_attack: {
        name: 'Apex Predator',
        skill: 'essenceShift',
        description: 'When Essence Shift is activated, Slark attacks everyone in a 250 radius.'
    },
    aghsfort_special_slark_essence_shift_leash_chance: {
        name: 'Lucky Catch',
        skill: 'pounce',
        description: 'With each attack, Slark has a 15% chance to apply Pounce on the attacked target. This effect has an internal cooldown of 3 seconds'
    },
    aghsfort_special_slark_essence_shift_allied_buff: {
        name: 'Sea School',
        skill: 'essenceShift',
        description: 'When activated, increases the primary stat of all allies by the same amount Slark increases his agility.'
    },
    aghsfort_special_slark_shadow_dance_dark_pact_pulses: {
        name: 'Reef Rage',
        skill: 'shadowDance',
        description: 'While in Shadow Dance, every .25 seconds, Slark emits a Dark Pact pulse.'
    },
    aghsfort_special_slark_shadow_dance_essence_shift_bonus: {
        name: 'Deep Six',
        skill: 'essenceShift',
        description: 'When Shadow Dance is activated, Slark also activates his Essence Shift active, with 2x the amount of Essence Shift\'s max stacks.'
    },
    aghsfort_special_slark_shadow_dance_leash: {
        name: 'Hook, Line, and Sinker',
        skill: 'shadowDance',
        description: 'When Shadow Dance is activated, pulls all enemies in a 450 area of effect towards slark and leashes them with the current level of Pounce.'
    },
    /*
        ==============
        |   Sniper   |
        ==============
    */
    aghsfort_special_sniper_shrapnel_bombs: {
        name: 'Explosive Shrapnel',
        skill: 'shrapnel',
        description: 'Units that die under Shrapnel explode in a 300 unit radius, dealing 50% of the Shrapnel damage they received.'
    },
    aghsfort_special_sniper_shrapnel_attack_speed: {
        name: 'Ho ho, ha ha!',
        skill: 'shrapnel',
        description: 'Sniper gains 10 temporary attack speed for each enemy that dies under Shrapnel'
    },
    aghsfort_special_sniper_shrapnel_miss_chance: {
        name: 'Suppressive Fire',
        skill: 'shrapnel',
        description: 'Enemies under Shrapnel have 15% increased miss chance.'
    },
    aghsfort_special_sniper_shrapnel_move_speed: {
        name: 'Bullet Dance',
        skill: 'shrapnel',
        description: 'Sniper gains 150 movespeed while under Shrapnel.'
    },
    aghsfort_special_sniper_headshot_crits: {
        name: 'Say Goodbye To Yer Head!',
        skill: 'headshot',
        description: 'Headshot procs deal 135% critical hits.'
    },
    aghsfort_special_sniper_headshot_stuns: {
        name: 'Stoppin\' Power',
        skill: 'headshot',
        description: 'Headshot can stun a target every 3 seconds.'
    },
    aghsfort_special_sniper_take_aim_self_purge: {
        name: 'Purge & Sprint',
        skill: 'takeAim',
        description: 'Take Aim applies a weak purge to Sniper and grants 250 bonus movespeed for 2.5 seconds.'
    },
    aghsfort_special_sniper_take_aim_hop_backwards: {
        name: 'Tactical Hop',
        skill: 'takeAim',
        description: 'When activating Take Aim, Sniper hops backwards 400 units and knocks back enemies in front of him.'
    },
    aghsfort_special_sniper_take_aim_armor_reduction: {
        name: 'Armor Piercing',
        skill: 'takeAim',
        description: 'Take Aim applies 6 armor reduction for 10 seconds.'
    },
    aghsfort_special_sniper_take_aim_rapid_fire: {
        name: 'Rapid Fire',
        skill: 'takeAim',
        description: 'Take Aim grants 400 bonus attack speed for 3 attacks. The bonus attack speed attacks last 6 second if not used.'
    },
    aghsfort_special_sniper_assassinate_buckshot: {
        name: 'Buckshot',
        skill: 'assassinate',
        description: 'Assassinate hits enemies in a cone behind the main target for 60% of Assassinate\'s damage. The cone length is 900 and width is 450'
    },
    aghsfort_special_sniper_assassinate_original_scepter: {
        name: 'Hipfire',
        skill: 'assassinate',
        description: 'Reduces Assassinate\'s aim duration by 50% and applies stun to the primary target.'
    },
    aghsfort_special_sniper_assassinate_killshot: {
        name: 'Big Game Hunter',
        skill: 'assassinate',
        description: 'For each Captain killed with Assassinate, Sniper gains 100 permanent Assassinate damage. You can only gain one stack per room. Changes Assassinate\'s damage type to Pure.'
    },
    pathfinder_sharpshooter_moving: {
        name: 'pathfinder_sharpshooter_moving',
        skill: 'assassinate',
        description: 'To do: Fill in'
    },
    /*
        ========================
        |   Templar Assassin   |
        ========================
    */
    aghsfort_special_templar_assassin_refraction_kill_refresh: {
        name: 'Absorption',
        skill: 'refraction',
        description: 'Every time an enemy is killed with Refraction Damage active, gain 1 stack of Refraction Damage Absorb.'
    },
    aghsfort_special_templar_assassin_refraction_detonate_trap: {
        name: 'Smoke and Mirrors',
        skill: 'refraction',
        description: 'When Refraction is activated, a Psionic Trap is placed where Templar Assassin is standing.'
    },
    aghsfort_special_templar_assassin_refraction_allies: {
        name: 'Glass Shield',
        skill: 'refraction',
        description: 'Refraction castable on allies. Cast range is 800.'
    },
    aghsfort_special_templar_assassin_meld_attack_on_activation: {
        name: 'Vanishing Slice',
        skill: 'meld',
        description: 'Templar Assassin attacks all enemies in a 300 area of effect when activating Meld.'
    },
    aghsfort_special_templar_assassin_meld_teleport: {
        name: 'Celestial Step',
        skill: 'meld',
        description: 'Meld becomes a ground targeted skill with a cast range of 600 Templar Assassin instantly teleports to the selected location and goes into Meld.'
    },
    aghsfort_special_templar_assassin_meld_refraction_on_kill: {
        name: 'Latent Charge',
        skill: 'meld',
        description: 'Every time an enemy is killed while debuffed by Meld Strike, Templar Assassin gains a charge of Refraction Damage.'
    },
    aghsfort_special_templar_assassin_psi_blades_splash: {
        name: 'Psychic Burst',
        skill: 'psiBlades',
        description: 'Psi Blades deal damage in a 175 Area of Effect around the spill target.'
    },
    aghsfort_special_templar_assassin_psi_blades_trap: {
        name: 'Covert Devices',
        skill: 'psionicTrap',
        description: 'Templar Assassin has a 15% chance to create a Psionic Trap under a target hit by the Psi Blades spill.'
    },
    aghsfort_special_templar_assassin_psionic_trap_multipulse: {
        name: 'Shaded Echo',
        skill: 'psionicTrap',
        description: 'Psionic Traps stay on the ground and pulse, dealing additional damage, up to 3 times.'
    },
    aghsfort_special_templar_assassin_psionic_trap_damage_heals: {
        name: 'Resurgence',
        skill: 'psionicTrap',
        description: 'Psionic Traps heal all Templar Assassin\'s allies for 50% of the damage they deal.'
    },
    aghsfort_special_templar_assassin_psionic_trap_area_attack: {
        name: 'Veiled Cuts',
        skill: 'psionicTrap',
        description: 'Psionic Traps also launch a Meld attack onto each enemy when they detonate.'
    },
    /*
        ============
        |   Ursa   |
        ============
    */
    aghsfort_special_ursa_earthshock_invis: {
        name: 'Concealed',
        skill: 'earthshock',
        description: 'After Earthshock lands, go into a deep invisibility state that is not broken by your spells or attacks. Lasts 2.5 seconds.'
    },
    aghsfort_special_ursa_earthshock_knockback: {
        name: 'Cannonball',
        skill: 'earthshock',
        description: 'Earthshock applies 125 knockback and stuns for 1.5 seconds.'
    },
    aghsfort_special_ursa_earthshock_apply_fury_swipes: {
        name: 'Digging In',
        skill: 'earthshock',
        description: 'Earthshock applies and has its damage increased by Fury Swipes.'
    },
    aghsfort_special_ursa_earthshock_overpower_stack: {
        name: 'Relentless',
        skill: 'earthshock',
        description: 'Enemies that die under Earthshock\'s debuff give Ursa 2 stack(s) of Overpower.'
    },
    aghsfort_special_ursa_overpower_crit: {
        name: 'Torn to Shreds',
        skill: 'overpower',
        description: 'Overpower attacks do 130% critical hits.'
    },
    aghsfort_special_ursa_overpower_evasion: {
        name: 'Elusive',
        skill: 'overpower',
        description: 'Overpower provides 30% evasion for 3.5 seconds.'
    },
    aghsfort_special_ursa_overpower_cleave: {
        name: 'Reckless',
        skill: 'overpower',
        description: 'Overpower attacks deal 35% of attack damage as physical damage in a cone up to 650 distance behind the target.'
    },
    aghsfort_special_ursa_fury_swipes_armor_reduction: {
        name: 'Lacerated Armor',
        skill: 'furySwipes',
        description: 'Fury Swipes apply 1 armor reduction per stack.'
    },
    aghsfort_special_ursa_fury_swipes_lifesteal: {
        name: 'Rend',
        skill: 'furySwipes',
        description: 'Each stack of Fury Swipes grants Ursa 3% lifesteal/spell lifesteal.'
    },
    aghsfort_special_ursa_fury_swipes_ursa_minor: {
        name: 'Ursa Minor',
        skill: 'furySwipes',
        description: 'Fury Swipes gains an active component that summons 3 invulnerable, uncontrollable Ursa Cubs. The cubs will randomly attack and apply Fury Swipes for Ursa and themselves on nearby enemies, but the cubs receive only 25% of the Fury Swipes bonus damage. Duration: 10, Cooldown: 20, Mana Cost: 50.'
    },
    aghsfort_special_ursa_enrage_allies: {
        name: 'Protect the Cubs',
        skill: 'enrage',
        description: 'Enrage also provides all enrage benefits to allies within 700 radius.'
    },
    aghsfort_special_ursa_enrage_fear: {
        name: 'Intimidating Roar',
        skill: 'enrage',
        description: 'Enrage applies fear to enemies within 500 radius for 3 seconds.'
    },
    aghsfort_special_ursa_enrage_attack_speed: {
        name: 'Ferocity',
        skill: 'enrage',
        description: 'Enrage provides 80 attack speed to allies within 700 radius.'
    },
    aghsfort_special_ursa_enrage_earthshock: {
        name: 'Rampage',
        skill: 'earthshock',
        description: 'An Earthshock is triggered at Ursa\'s position every 1 second(s) while Enrage is active.'
    },
    /*
        ==================
        |   Venomancer   |
        ==================
    */
    pathfinder_special_venomancer_gale_bkb: {
        name: 'Herd Immunity',
        skill: 'venomousGale',
        description: 'Each enemy unit hit by Venomous Gale grants Venomancer 1 second(s) of Spell Immunity.'
    },
    pathfinder_special_venomancer_ward_global_attack: {
        name: 'Global Epidemic',
        skill: 'plagueWard',
        description: 'Plague Wards gain global attack range, but can no longer be controlled.'
    },
    pathfinder_special_venomancer_ward_lifesteal: {
        name: 'Rotten Delicacy',
        skill: 'plagueWard',
        description: 'Plague Ward attacks provide Venomancer with 70% lifesteal. The heal amount does not includes damage over time effects.'
    },
    pathfinder_special_venomancer_ward_corpse: {
        name: 'Fertile Soil',
        skill: 'plagueWard',
        description: 'Venomancer\'s attacks now hit up to 2 additional enemies. Enemy units killed by Venomancer have a 100% chance to spawn a Plague Ward at their location. The last hit must come from Venomancer himself.'
    },
    pathfinder_special_venomancer_ward_nova: {
        name: 'Airborne Parasites',
        skill: 'poisonNova',
        description: 'Each time a unit is damaged by Poison Nova, it has a 10% chance to spawn a Plague Ward at its current location.'
    },
    pathfinder_special_venomancer_gale_attack: {
        name: 'Seasonal Allergy',
        skill: 'venomousGale',
        description: 'Venomancer\'s attacks have a 17% chance to also launch the current level of Venomous Gale in all directions.'
    },
    pathfinder_special_venomancer_banana_bomb: {
        name: 'Bananamancer',
        skill: 'venomousGale',
        description: 'Venomancer\'s Venomous Gale now summons a banana for each target hit. After a brief delay, these bananas will release Venomancer\'s current level of Poison Nova in a fixed 175 radius.'
    },
    pathfinder_special_venomancer_bigass_ward_dummy: {
        name: 'Terror of Jidi Isles',
        skill: 'plagueWard',
        description: 'Venomancer gains the ability to summon a massive Fire-Breathing Plague Ward, who will also continuously spawn Venomancer\'s current level of Plague Ward near its location every 7 seconds. Fire Breath Damage is equals to 3 times of Venomancer\'s Attack Damage. The Ward has a 120 second cooldown and lasts for 104 seconds. The ward is quite durable, having triple Venomancer\'s health, 35 Armor, and 70 magic resistance.'
    },
    /*
        =============
        |   Viper   |
        =============
    */
    aghsfort_special_viper_poison_snap: {
        name: 'Poison Snap',
        skill: 'poisonAttack',
        description: 'Whenever an enemy takes 25 damage from Poison Attack, it will be mini-stunned.'
    },
    aghsfort_special_viper_poison_attack_explode: {
        name: 'Venomous Discharge',
        skill: 'poisonAttack',
        description: 'Poison Attack festers and explodes when expiring, dealing damage in a 300 area of effect equal to 2x the total damage the enemy took from the current debuff.'
    },
    aghsfort_special_viper_poison_attack_spread: {
        name: 'Contagion',
        skill: 'poisonAttack',
        description: 'When a unit dies affected by Poison Attack, the current debuff is applied to enemies in 300 area of effect.'
    },
    aghsfort_special_viper_nethertoxin_charges: {
        name: 'Nethertoxin Charges',
        skill: 'nethertoxin',
        description: 'Nethertoxin gains 2 charges.'
    },
    aghsfort_special_viper_nethertoxin_lifesteal: {
        name: 'Toxic Osmosis',
        skill: 'nethertoxin',
        description: 'Nethertoxin restores 8% of its damage dealt as health to Viper.'
    },
    aghsfort_special_viper_nethertoxin_persist: {
        name: 'Lingering Miasma',
        skill: 'nethertoxin',
        description: 'Enemies that die from Nethertoxin extend the pool duration by 2 second(s).'
    },
    aghsfort_special_viper_corrosive_skin_speed_steal: {
        name: 'Exudate',
        skill: 'corrosiveSkin',
        description: 'Viper gains 25% of the attack speed lost by targets debuffed by Corrosive Skin as bonus attack and movement speed.'
    },
    aghsfort_special_viper_corrosive_skin_flying: {
        name: 'Fly Into A Rage',
        skill: 'corrosiveSkin',
        description: 'Corrosive Skin can be activated to gain flying movement for 8 seconds, and automatically apply Corrosive Skin\'s debuff to all enemies within 450 range. The poison damage is doubled. 30 cooldown, 50 mana cost.'
    },
    aghsfort_special_viper_corrosive_skin_aura: {
        name: 'Shedding Skin',
        skill: 'corrosiveSkin',
        description: 'Corrosive Skin becomes an aura that affects teammates within 900 range for half the effect.'
    },
    aghsfort_special_viper_viper_strike_allies: {
        name: 'Antitoxin',
        skill: 'viperStrike',
        description: 'Viper Strike can target allies, healing them for the damage amount and buffing their movement and attack for the slow amounts.'
    },
    aghsfort_special_viper_chain_viper_strike: {
        name: 'Snakebite',
        skill: 'viperStrike',
        description: 'Viper Strike will bounce to 2 additional targets.'
    },
    aghsfort_special_viper_periodic_strike: {
        name: 'Contamination',
        skill: 'viperStrike',
        description: 'Viper Strike becomes a no target spell. Any target walking within Viper Strike cast range for the duration of the ability will be struck by a Viper Strike every 0.4 seconds. The duration of the ability is equal to Viper Strike\'s overall debuff duration.'
    },
    /*
        ==============
        |   Weaver   |
        ==============
    */
    aghsfort_special_weaver_swarm_allies: {
        name: 'Bug Your Friends',
        skill: 'theSwarm',
        description: 'Beetles attach to allies, healing them and increasing their armor for the values of the base ability.'
    },
    aghsfort_special_weaver_swarm_explosion: {
        name: 'Bug Bug Boom',
        skill: 'theSwarm',
        description: 'When a Beetle is killed, it explodes in a 250 radius, dealing damage equal to the damage it already dealt to its target.'
    },
    aghsfort_special_weaver_swarm_damage_transfer: {
        name: 'Hivemind',
        skill: 'theSwarm',
        description: 'All enemies affected by the Swarm transfer 15% of damage dealt to other affected units in their vicinity'
    },
    aghsfort_special_weaver_shukuchi_trail: {
        name: 'Reality Rips',
        skill: 'shukuchi',
        description: 'Shukuchi leaves a trail behind Weaver that lasts 4 seconds and deals 25% of Shukuchi\'s damage every 0.5 seconds. Path radius is 150.'
    },
    aghsfort_special_weaver_shukuchi_heal: {
        name: 'Beneficial Passing',
        skill: 'shukuchi',
        description: 'Shukuchi heals all allies that Weaver Passes through for 50% of Shukuchi\'s damage.'
    },
    aghsfort_special_weaver_shukuchi_attack_on_completion: {
        name: 'Blacklist',
        skill: 'shukuchi',
        description: 'Once Shukuchi is complete, Weaver fires an attack at all affected enemies.'
    },
    aghsfort_special_weaver_shukuchi_swarm: {
        name: 'Shukuchi Swarm',
        skill: 'shukuchi',
        description: 'Units hit by Shukuchi are automatically affected by the current level of the The Swarm.'
    },
    aghsfort_special_weaver_geminate_attack_splitshot: {
        name: 'Many Threads',
        skill: 'geminateAttack',
        description: 'Weaver\'s additional attack hits an additional 4 targets in Weaver\'s attack range + 250.'
    },
    aghsfort_special_weaver_geminate_attack_applies_swarm: {
        name: 'Swarm the Beaches',
        skill: 'geminateAttack',
        description: 'Weaver\'s additional attack attaches the current level of The Swarm to the target.'
    },
    aghsfort_special_weaver_geminate_attack_lifesteal: {
        name: 'Give Some, Take Some',
        skill: 'geminateAttack',
        description: 'Weaver\'s additional attack lifesteals 20% of the attack.'
    },
    aghsfort_special_weaver_time_lapse_allies: {
        name: 'Back to Basics',
        skill: 'timeLapse',
        description: 'Time Lapse can target allies.'
    },
    aghsfort_special_weaver_time_lapse_restoration: {
        name: 'All\'s Well That Starts Well',
        skill: 'timeLapse',
        description: 'When Time Lapse is cast, it automatically restores the target to full health and mana.'
    },
    aghsfort_special_weaver_time_lapse_explosion: {
        name: 'Explosive Reality',
        skill: 'timeLapse',
        description: 'Time Lapsed units (meaning non-elite/bosses) create explosions at the start and end of their paths, damaging units in a 200 area for 50% of the target\'s missing Health.'
    },
    /*
        =================
        |   Disruptor   |
        =================
    */
    aghsfort_special_disruptor_thunder_strike_interval_upgrade: {
        name: 'Cloud Cover',
        skill: 'thunderStrike',
        description: 'Interval between strikes reduced by 50%. Amount of strikes increased by 3.'
    },
    aghsfort_special_disruptor_thunder_strike_mana_restore: {
        name: 'Mana Storm',
        skill: 'thunderStrike',
        description: 'Every strike restores 8% of max Mana to allies in a 450 radius around the target.'
    },
    aghsfort_special_disruptor_thunder_strike_crit_chance: {
        name: 'Critical Strike',
        skill: 'thunderStrike',
        description: 'Every strike has a 25% chance to crit, dealing 175% damage.'
    },
    aghsfort_special_disruptor_thunder_strike_on_attack: {
        name: 'Loaded Weapon',
        skill: 'thunderStrike',
        description: 'Disruptor gains a 50% chance to cast a Thunder Strike on an attacked target.'
    },
    aghsfort_special_disruptor_glimpse_hit_on_arrival: {
        name: 'Blast In The Past',
        skill: 'glimpse',
        description: 'When enemies arrive at their final destination, 150% of Disruptor\'s Intelligence is dealt in a 250 radius around them.'
    },
    aghsfort_special_disruptor_glimpse_travel_damage: {
        name: 'Shocking Travel',
        skill: 'glimpse',
        description: 'Deals 70% of Disruptor\'s Intelligence for every 75 units of distance the enemy has been glimpsed, over the course of the glimpse duration'
    },
    aghsfort_special_disruptor_kinetic_field_damage: {
        name: 'Electric Fence',
        skill: 'kineticField',
        description: 'Kinetic Field deals 50% of Disruptor\'s Base Attack Damage to enemies trapped inside every 0.5 seconds.'
    },
    aghsfort_special_disruptor_kinetic_field_allied_heal: {
        name: 'Area of Bliss',
        skill: 'kineticField',
        description: 'Allies inside the kinetic field heal 50% of Disruptor\'s Intelligence every 0.5 second.'
    },
    aghsfort_special_disruptor_kinetic_field_allied_attack_buff: {
        name: 'Stay in the Zone',
        skill: 'kineticField',
        description: 'Kinetic Field increases allied attack speed by 60.'
    },
    aghsfort_special_disruptor_kinetic_field_double_ring: {
        name: 'Ring-ception',
        skill: 'kineticField',
        description: 'Creates a second Kinetic Field with a radius that is 2 times bigger than the original.'
    },
    aghsfort_special_disruptor_static_storm_kinetic_field_on_cast: {
        name: 'Perfect Storm',
        skill: 'staticStorm',
        description: 'Static Storm automatically creates a Kinetic Field on cast.'
    },
    aghsfort_special_disruptor_static_storm_crits_on_attacks: {
        name: 'Field of Dreams',
        skill: 'staticStorm',
        description: 'All attacks on the affected enemies have a 30% chance to crit for 150% damage.'
    },
    aghsfort_special_disruptor_static_storm_damage_reduction: {
        name: 'Pacific Storm',
        skill: 'staticStorm',
        description: 'All enemies caught in Static Storm deal 30% less damage.'
    },
    /*
        ==============
        |   Jakiro   |
        ==============
    */
    pathfinder_jakiro_duel_breath_ice_blob: {
        name: 'Crystalized Veins',
        skill: 'dualBreath',
        description: 'The ice component of Dual Breath has a 25% chance of creating a blob of Ice Path directly underneath each enemy hit, dealing damage and stunning for Ice Path\'s current values.'
    },
    pathfinder_jakiro_dual_breath_fart: {
        name: 'Tacobellian Indigestion',
        skill: 'dualBreath',
        description: 'Every second, Jakiro has a 10% chance of releasing either component of Dual Breath in a cone behind him.'
    },
    pathfinder_jakiro_duel_breath_liquid_fire: {
        name: 'Through the Fire and Flames',
        skill: 'dualBreath',
        description: 'The fire component of Dual Breath has a 75% chance of also launching a Liquid Fire projectiles of the current level unto each enemy hit. Liquid Fire will always have its cooldown refreshed when this effect occurs.'
    },
    pathfinder_jakiro_ice_path_barrier: {
        name: 'Ice-solation Protocol',
        skill: 'icePath',
        description: 'Casting Ice Path also creates two walls of ice shards of equal lengths on either side of the path. The ice wall remains for 3 additional seconds after Ice Path has melted.'
    },
    pathfinder_jakiro_ice_path_repeat: {
        name: 'Let it Go',
        skill: 'icePath',
        description: 'Any enemy units that die while affected by Ice Path will unleash the current level of Ice Path in the direction they were facing'
    },
    pathfinder_jakiro_ice_path_fast: {
        name: 'On Thin Ice',
        skill: 'icePath',
        description: 'Friendly heroes coming into contact wth Ice Path is dispelled of all debuffs and gain 400 bonus movement speed. While the bonus is active, the affected heroes have flying speed, is phased, and cannot be slowed.'
    },
    pathfinder_jakiro_ice_path_armour: {
        name: 'Vanilla Ice',
        skill: 'icePath',
        description: 'Friendly heroes coming into contact with Ice Path receive an ice coating that repeatedly freeze their attackers for up to .5 seconds per attack. The duration of this buff equals double the lifetime of Ice Path'
    },
    pathfinder_jakiro_liquid_fire_burst: {
        name: 'Drachen Fammenwerfer',
        skill: 'liquidFire',
        description: 'In addition to its regular effect, Liquid Fire immediately deals bonus burst damage equal to half of the total damage the damage over time deals.'
    },
    pathfinder_jakiro_liquid_fire_allies: {
        name: 'Molten Blood Transfusion',
        skill: 'liquidFire',
        description: 'Liquid Fire can now target allied heroes, healing them for 200% of the ability\'s damage as well as granting them bonus attack speed.'
    },
    pathfinder_jakiro_liquid_fire_macropyre: {
        name: 'Warm Personality',
        skill: 'liquidFire',
        description: 'Any enemy units that die while affected by Liquid Fire has a 25% chance to leave behind a Macropyre puddle of the current level. The puddle\'s lifetime equals to half the duration of Macropyre'
    },
    pathfinder_jakiro_macropyre_eternal: {
        name: 'Darling it\'s Cold Outside',
        skill: 'liquidFire',
        description: 'Macropyre will never expire as long as Jakiro remains inside it, but the remaining cooldown of the ability is increased by .4 seconds per second this effect is active.'
    },
    pathfinder_jakiro_macropyre_burning_man: {
        name: 'Festivity of the Burning Man',
        skill: 'macropyre',
        description: 'Casting Macropyre now also creates 5 additional smaller Macropyres around the targeted area.'
    },
    pathfinder_jakiro_macropyre_heal: {
        name: 'Lavatherapy',
        skill: 'macropyre',
        description: 'Macropyre now also heals all friendly heroes within its area of effect for 50% of its full damage'
    },
    pathfinder_jakiro_macropyre_cooldown_reduction: {
        name: 'A Song of Fire and More Fire',
        skill: 'macropyre',
        description: 'Any enemy units that die while affected by Macropyre will reduce the cooldown of the ability by 5%'
    },
    /*
        =================
        |   Ogre-Magi   |
        =================
    */
    pathfinder_special_om_aoe_fireblast: {
        name: 'Get Outta my Swamp',
        skill: 'fireblast',
        description: 'If Ogre Magi casts Fireblast, the effect also applies unto every single enemy unit in its cast range.'
    },
    pathfinder_special_ignite_fireblast: {
        name: 'Concussion Therapy',
        skill: 'fireblast',
        description: 'Enemy units struck by Ignite\'s projectiles also have a 40% chance to have Ogre Magi\'s current level of Fireblast cast on them automatically. This effect can proc Multicast.'
    },
    pathfinder_special_friendly_ignite: {
        name: 'Ogre is Love, Ogre is Life',
        skill: 'ignite',
        description: 'After hitting their target, Ignite\'s projectiles will additionally bounce to a nearby friendly hero, healing them and increasing their movement speed for the value of the ability.'
    },
    pathfinder_special_ignite_multismash: {
        name: 'Multi-Smash',
        skill: 'multicast',
        description: 'Attacks against Ignited enemies now have a chance to proc Multicast, causing the target to be hit multiple times in quick succession. These extra attacks can fully proc any on-hit effect from abilities and items'
    },
    pathfinder_special_om_shield_bloodlust: {
        name: 'Ogres Has Layers',
        skill: 'bloodlust',
        description: 'Bloodlust now grant the targeted ally a fire shield with 3 layers, each preventing a single instance of damage. Whenever the bloodlusted unit is damaged, the shield will immediately release the ranged version of Ogre Magi\'\
        s attacks toward 5 nearby enemies. These attacks can proc any on-hit effect from abilities and items'
    },
    pathfinder_special_stunned_ignite: {
        name: 'Too Hot to Handle',
        skill: 'ignite',
        description: 'While a unit is stunned, silenced, or rooted while under the effect of Ignite, it will continuously cast Ogre Magi\'s current level of ignite unto another rando unit within the range of the ability'
    },
    pathfinder_special_om_giant_bloodlust: {
        name: 'Hymn of the Giants',
        skill: 'bloodlust',
        description: 'Bloodlust now also grants the affected unit 65% status resistance and 15 additional physical armor'
    },
    pathfinder_special_om_multi_multicast: {
        name: 'Casino Royale',
        skill: 'multicast',
        description: 'The last cast of Multicast has a 45% chance to be Multicasted again. There is no limit to how many times this can proc.'
    },
    pathfinder_special_om_aoe_multicast: {
        name: 'It\'s All Ogre Now',
        skill: 'multicast',
        description: 'Multicast passively grands Ogre Magic a 15% chance every second to automatically cast a random single-targeted ability or item unto an enemy unit within a 900 radius. This effect can proc Multicast, and fully ignores any cooldown or cast range limitation. Ogre Magi does not need to be alive for this effect to proc.'
    },
    pathfinder_special_om_summoming: {
        name: 'That\'ll do Donkey, That\'ll do',
        skill: 'multicast',
        description: 'Ogre Magi can now channel for up to 20 seconds to continuously summon explosive donkeys that last up to 10 seconds. These units will automatically seek out nearby enemies and cast the current level of Fireblast unto all nearby hostile units when killed.'
    },
    /*
        ==================
        |   Windranger   |
        ==================
    */
    pathfinder_special_windranger_shackleshot_armor: {
        name: 'Fair-weather Friends',
        skill: 'shackleshot',
        description: 'All attacks by Windranger now also multi-shot unto all enemy units currently stunned by Shackleshot'
    },
    pathfinder_special_windranger_windrun_cyclone: {
        name: 'Windward Haze',
        skill: 'shackleshot',
        description: 'While under the effect of Windrun, Windranger automatically launches the current level of Shackleshot toward the closest nearby enemy unit every 2 seconds.'
    },
    pathfinder_special_windranger_shackleshot_aoe: {
        name: 'Aeolian Forecast',
        skill: 'shackleshot',
        description: 'If Shackleshot is successful, a free Powershot will instantly be casted in the target\'s direction'
    },
    pathfinder_special_windranger_shackleshot_sleep: {
        name: 'Autumn Chill',
        skill: 'shackleshot',
        description: 'If Shackleshot is successful, enemy units stunned by Shackleshot will be put to sleep for up to %duration% seconds once the effect wears off'
    },
    pathfinder_special_windranger_powershot_multishot: {
        name: 'Sweeping Gale',
        skill: 'powershot',
        description: 'Powershot now fires 3 separate projectiles, each dealing the full damage of the ability.'
    },
    pathfinder_special_windranger_powershot_repeating: {
        name: 'Semiautomatic Assault Archery',
        skill: 'powershot',
        description: 'If Powershot is casted while auto-cast is toggled on, its fires 9 non-piercing shots, each dealing 40% damage'
    },
    pathfinder_special_windranger_windrun_aoe: {
        name: 'Picnic In The Park',
        skill: 'windrun',
        description: 'Casting Windrun also grants the effect to friendly heroes within a 500 radius.'
    },
    pathfinder_special_windranger_focusfire_trueshot: {
        name: 'Feel The Breeze',
        skill: 'focusFire',
        description: 'While under the effect of Focus Fire, each of Windranger\'s attack mini-stun the targeted enemy unit. All of the target\'s passives are disabled for the duration of the ability'
    },
    pathfinder_special_windranger_focusfire_global: {
        name: 'Arrow Rain',
        skill: 'focusFire',
        description: 'While under the effect of Focus Fire, Windranger gains global attack range against the targeted enemy unit. The cast range of Focus Fire remains the same.'
    },
    pathfinder_special_windranger_windrun_invis: {
        name: 'Wind Chimes of Zaru\'Kina',
        skill: 'windrun',
        description: 'Windrun now grants Windranger invisibility and create a decoy illusion at her location. The illusion deals and receives %illusion_dmg_mult%%% less damage. If Windranger performs an attack, her invisibility will\
        instantly be dispelled"'
    },
    pathfinder_special_windranger_powershot_ricochet: {
        name: 'Unhealthy Fixation',
        skill: 'powershot',
        description: 'Upon hitting an enemy unit, Powershot ricochets toward the furthest enemy within a 700 radius. This effect can occur up to 1 times'
    },
    pathfinder_special_windranger_focusfire_lifesteal: {
        name: 'Smiles and Murders',
        skill: 'focusFire',
        description: 'Focus Fire now grants the %lifesteal%%% lifesteal against the target. While Focus Fire is active, Windranger will continuously benefit from the current level of Windrun'
    },
    pathfinder_special_windranger_powershot_attacks: {
        name: 'Razor Squalls',
        skill: 'powershot',
        description: 'Any enemy unit that comes within a %radius% radius of the Powershot projectile will be hit with an attack from Windranger. These attacks can fully proc any on-hit effect from items and abilities'
    },
    /*
        =====================
        |   Queen of Pain   |
        =====================
    */
    aghsfort_special_queenofpain_shadow_strike_on_attack: {
        name: 'Stinging Lash',
        skill: 'shadowStrike',
        description: 'Each attack has a 20% chance to apply Shadow Strike to the target.'
    },
    aghsfort_special_queenofpain_shadow_strike_chain: {
        name: 'Spread the Pain',
        skill: 'shadowStrike',
        description: 'Each attack Shadow Strike bounces to up 5 additional targets.'
    },
    aghsfort_special_queenofpain_shadow_strike_scream: {
        name: 'Delight and Torment',
        skill: 'shadowStrike',
        description: 'When the debuff effect of Shadow Strike ends, that unit emits a Scream of Pain.'
    },
    aghsfort_special_queenofpain_blink_generates_scream: {
        name: 'Haunting Echoes',
        skill: 'blink',
        description: 'Blink generates a Scream of Pain at its start and end positions.'
    },
    aghsfort_special_queenofpain_blink_attack_speed: {
        name: 'Fervent Assault',
        skill: 'blink',
        description: 'Blink provides 60 bonus attack speed for 2s.'
    },
    aghsfort_special_queenofpain_blink_shadow_strike: {
        name: 'Hall of Pain',
        skill: 'blink',
        description: 'Enemies that are between the start and end points of Queen of Pain\'s Blink get hit by her current level of Shadow Strike.'
    },
    aghsfort_special_queenofpain_scream_of_pain_resets_blink: {
        name: 'Rapturous Cry',
        skill: 'blink',
        description: 'When an enemy is killed by Scream of Pain, Queen of Pain\'s Blink cooldown is reset.'
    },
    aghsfort_special_queenofpain_scream_of_pain_knockback: {
        name: 'Resounding Wail',
        skill: 'screamOfPain',
        description: 'Knocks back every enemy hit by Scream to the max distance of Scream\'s area of effect. Every hit reduces the cooldown of Sonic Wave by 0.75s.'
    },
    aghsfort_special_queenofpain_scream_of_pain_restores_caster: {
        name: 'Invigorating Shriek',
        skill: 'screamOfPain',
        description: 'Every enemy hit by Scream of Pain sends back an echo to Queen of Pain, healing her for 10% of the damage dealt and restoring 10% of Scream\'s mana cost.'
    },
    aghsfort_special_queenofpain_sonic_wave_trail: {
        name: 'Thundering Resonance',
        skill: 'sonicWave',
        description: 'Sonic Wave leaves a trail that applies 20% damage of Sonic Wave\'s damage every 0.5 seconds. The trail lasts 6 seconds.'
    },
    aghsfort_special_queenofpain_sonic_wave_circle: {
        name: 'Sonic Tsunami',
        skill: 'sonicWave',
        description: 'When Sonic Wave is cast, it is emited in 6 directions around Queen of Pain.'
    },
    aghsfort_special_queenofpain_sonic_wave_attack_buff: {
        name: 'Discordant Force',
        skill: 'sonicWave',
        description: 'Increases Queen of Pain\'s Attack Speed by 10, Attack Damage by 10 for 7 seconds for each enemy hit with Sonic Wave.'
    },
    /*
        =====================
        |   Winter Wyvern   |
        =====================
    */
    aghsfort_special_winter_wyvern_arctic_burn_doubleattack: {
        name: 'Second Degree Burn',
        skill: 'arcticBurn',
        description: 'Every 3.5 seconds, an Arctic Burn attack is doubled.'
    },
    aghsfort_special_winter_wyvern_arctic_burn_splash_damage: {
        name: 'Arctic Splash',
        skill: 'arcticBurn',
        description: 'Arctic Burn attacks damage enemies in a 175 radius around the target.'
    },
    aghsfort_special_winter_wyvern_arctic_burn_splitshot: {
        name: 'Winter\'s Breath',
        skill: 'arcticBurn',
        description: 'Arctic Burn attacks up to 4 additional targets within range, dealing 35% less damage to secondary targets.'
    },
    aghsfort_special_winter_wyvern_splinter_blast_vacuum: {
        name: 'Cool and Collected',
        skill: 'splinterBlast',
        description: 'Splinter Blast pulls secondary targets towards the initial target.'
    },
    aghsfort_special_winter_wyvern_splinter_blast_main_target_hit: {
        name: 'Chilled To The Bone',
        skill: 'splinterBlast',
        description: 'After the secondary targets are hit, the main target is struck by returning splinters from each target for 50% of Splinter Blast\'s total damage.'
    },
    aghsfort_special_winter_wyvern_splinter_blast_heal: {
        name: 'Soothing Breeze',
        skill: 'splinterBlast',
        description: 'Splinter Blast heals allies around the target for 50% of the Splinter Blast\'s damage.'
    },
    aghsfort_special_winter_wyvern_cold_embrace_charges: {
        name: 'Empowered Embrace',
        skill: 'coldEmbrace',
        description: 'Cold Embrace now has 2 charges.'
    },
    aghsfort_special_winter_wyvern_cold_embrace_blast_on_end: {
        name: 'Ice Cold Killing',
        skill: 'coldEmbrace',
        description: 'At the end of Cold Embrace, the current level of Splinter Blast will emanate from the affected unit.'
    },
    aghsfort_special_winter_wyvern_cold_embrace_magic_damage_block: {
        name: 'Diamondize',
        skill: 'coldEmbrace',
        description: 'Cold Embrace targets also gain magic immunity.'
    },
    aghsfort_special_winter_wyvern_winters_curse_transfer: {
        name: 'Sharing is Scaring',
        skill: 'wintersCurse',
        description: 'Winter\'s Curse remaining duration transfers to a nearby enemy if the initial target dies.'
    },
    aghsfort_special_winter_wyvern_winters_curse_heal_on_death: {
        name: 'Wintermancy',
        skill: 'wintersCurse',
        description: 'Heals Wyvern and all her allies for 50% of the target\'s max HP if it dies during Winter\'s Curse.'
    },
    aghsfort_special_winter_wyvern_winters_curse_damage_amp: {
        name: 'Foul Cursing',
        skill: 'wintersCurse',
        description: 'Incoming damage from affected enemies to the target is amplified by 50%.'
    },
    /*
        ====================
        |   Witch Doctor   |
        ====================
    */
    aghsfort_special_witch_doctor_paralyzing_cask_multicask: {
        name: 'Multi-Cask',
        skill: 'paralyzingCask',
        description: 'Paralyzing Cask launches 1 additional casks to targets in the cast range.'
    },
    aghsfort_special_witch_doctor_paralyzing_cask_applies_maledict: {
        name: 'Bad Medicine',
        skill: 'paralyzingCask',
        description: 'Paralyzing Cask applies the current level of Maledict on hit.'
    },
    aghsfort_special_witch_doctor_paralyzing_cask_aoe_damage: {
        name: 'A Fine Powder',
        skill: 'paralyzingCask',
        description: 'Paralyzing Casks deal their damage in a 250 radius.'
    },
    aghsfort_special_witch_doctor_paralyzing_cask_attack_procs: {
        name: 'A Big Mess',
        skill: 'paralyzingCask',
        description: 'Witch Doctor has a 15% chance to throw his current level of Paralyzing Cask when attacking. Has an internal cooldown of 4 seconds'
    },
    aghsfort_special_witch_doctor_maledict_aoe_procs: {
        name: 'Blighted',
        skill: 'maledict',
        description: 'When Maledict ticks, it damages all enemies in a 300 area of effect'
    },
    aghsfort_special_witch_doctor_maledict_death_restoration: {
        name: 'Mumbo Jumbo',
        skill: 'maledict',
        description: 'Every big tick of Maledict heals Witch Doctor for 65% of the damage dealt.'
    },
    aghsfort_special_witch_doctor_maledict_affects_allies: {
        name: 'Strange Boon',
        skill: 'maledict',
        description: 'Allies can be affected by Maledict. 50% of damage dealt by the spell heals them instead, along with additional bursts of healing based on how much damage they\'ve taken.'
    },
    aghsfort_special_witch_doctor_maledict_infectious: {
        name: 'Infectious Malady',
        skill: 'maledict',
        description: 'Every time Maledict does a burst, it infects enemies in a 250 radius with the same level of Maledict.'
    },
    aghsfort_special_witch_doctor_voodoo_restoration_enemy_damage: {
        name: 'Hocus-Pocus',
        skill: 'voodooRestoration',
        description: 'Voodoo Restoration effects enemies as well, dealing the the heal amount as damage.'
    },
    aghsfort_special_witch_doctor_voodoo_restoration_lifesteal: {
        name: 'Invigorating Charm',
        skill: 'voodooRestoration',
        description: 'Allies affected by Voodoo Restoration also gain 15% lifesteal.'
    },
    aghsfort_special_witch_doctor_voodoo_restoration_damage_amp: {
        name: 'Cursed Aura',
        skill: 'voodooRestoration',
        description: 'Enemies in Voodoo Restoration\'s radius take 35% bonus damage from all sources.'
    },
    aghsfort_special_witch_doctor_voodoo_restoration_mana_restore: {
        name: 'Spirit Balm',
        skill: 'voodooRestoration',
        description: 'All mana used on Voodoo Restoration is granted to all allies in its area, except for Witch Doctor himself.'
    },
    aghsfort_special_witch_doctor_death_ward_no_channel: {
        name: 'Bewitched',
        skill: 'deathWard',
        description: 'Death Ward does not need to be channeled. Death Ward lasts for 50% of max duration'
    },
    aghsfort_special_witch_doctor_death_ward_damage_resist: {
        name: 'Pain Diffuser',
        skill: 'deathWard',
        description: 'While Death Ward is active, Witch Doctor takes 80% less damage.'
    },
    aghsfort_special_witch_doctor_death_ward_splitshot: {
        name: 'Wise Enchantment',
        skill: 'deathWard',
        description: 'Death Ward attacks 3 additional enemies. These additional attacks do not bounce. Additional attack have 100 bonus range'
    },
    /*
        ================
        |   Hoodwink   |
        ================
    */
    pathfinder_bushwhack_multi_attack: {
        name: 'Ain\'t No Fortunate Ones',
        skill: 'bushwhack',
        description: 'Attacking any unit stunned by Bushwhack also cause Hoodwink to launches additional attacks unto all nearby affected enemy. These extra attacks deal 100% damage and can fully proc any on-hit effect'
    },
    pathfinder_bushwhack_ground: {
        name: 'Wookie Doctrine',
        skill: 'bushwhack',
        description: 'Bushwhack now has 4 charges and always creates a tree at the target location. If there is no enemy units within the radius, the net trap will remain on the ground for up to 60 seconds. Any unsuspecting enemy stepping into the trap area will trigger the current level of Bushwhack after a brief delay'
    },
    pathfinder_acorn_shot_stun: {
        name: 'Look At It Go',
        skill: 'acornShot',
        description: 'Acorn Shot now initially stuns for 0.2 seconds and deals 40 magical damage. Each additional bounce increases the stun duration by 0.2 seconds and the damage by 40.'
    },
    pathfinder_scurry_canadian: {
        name: 'Canadian Heritage',
        skill: 'scurry',
        description: 'While Scurry is active, Hoodwink will immediately destroys any tree or wooden crate she comes into contact with, healing for 5% of her max health and extend the buff duration by 1 seconds for each tree destroyed. Any natural tree cut down this way will regrow after 10 seconds'
    },
    pathfinder_acorn_shot_tree: {
        name: 'And I Speak For The Trees',
        skill: 'acornShot',
        description: 'The tree summoned by Acorn Shot becomes imbued with an ancient spirit, healing any friendly hero within a 300 radius for 2% of their max health each second. Enemy units that remain too close to the tree has a 20% chance to be struck with the current level of Acorn Shot every second'
    },
    pathfinder_acorn_shot_attack: {
        name: 'Get Nutted',
        skill: 'acornShot',
        description: 'Each of Hoodwink\'s attacks now has a 10% chance of launching the current level of Acorn Shot at the targeted unit'
    },
    pathfinder_sharpshooter_pierce: {
        name: 'Smelt of Elderberries',
        skill: 'sharpshooter',
        description: 'Sharpshooter projectiles now continuously creates trees in its path. While charging Sharpshooter, Hoodwink takes 100% less damage from all sources'
    },
    pathfinder_sharpshooter_reset: {
        name: 'There\'s a Mouse With a Bow Over There',
        skill: 'sharpshooter',
        description: 'If Sharpshooter kills an enemy captain, its cooldown will be immediately reset. Hoodwink will be buffed with the current level of Scurry when this effect occurs'
    },
    pathfinder_scurry_leap: {
        name: 'Over The River And Through The Woods',
        skill: 'scurry',
        description: 'Casting Scurry now also causes Hoodwink to leap forward 1000 units. Upon landing, Hoodwink immediately attacks any nearby enemy within a 250 radius, knocking them away and stunning them for 0.4 seconds'
    },
    pathfinder_scurry_allies: {
        name: 'We\'ve Gotta Get Out Of This Place',
        skill: 'scurry',
        description: 'Casting Scurry grants its active buff to all allies within a 500 radius. The duration of the buff is extended by 2 seconds for each ally affected.'
    },
    pathfinder_bushwhack_scurry: {
        name: 'Sapper of Tomo\'kan',
        skill: 'scurry',
        description: 'For every 1.5 seconds during Scurry\'s active buff, a tree will be created behind Hoodwink'
    },
    /*
        ===============
        |   Phoenix   |
        ===============
    */
    pathfinder_fire_spirit_sun_strike: {
        name: 'Aggressive Training',
        skill: 'fireSpirits',
        description: 'Fire Spirits\' speed is increased by 0.75%. Briefly after a Fire Spirit\'s impact, a sun strike is called down upon the location. Any enemy unit hit is stunned for 1.75 seconds and dealt burst damage equals to 100 of Fire Spirits\' total damage over time. This sun strike also applies the Fire Spirits debuff'
    },
    pathfinder_fire_spirit_baby: {
        name: 'Lux Memento Mori',
        skill: 'fireSpirits',
        description: 'Allied heroes hit by Fire Spirit are followed by a lesser baby phoenix that heals them for 3% of their max health every second. If the hero takes lethal damage during this time, the baby bird will die instead, stunning nearby enemies for 2 seconds and healing their host to 15% in the process'
    },
    pathfinder_sun_ray_infinite: {
        name: 'Eternal Sunshine Of The Spotless Mind',
        skill: 'sunRay',
        description: 'Sun Ray can be channeled indefinitely and costs 50% less health to channel. While the ability is active, Phoenix is immune to stuns and has increased turn rate, but can no longer toggle movements'
    },
    pathfinder_icarus_dive_loop: {
        name: 'Loop De Loop',
        skill: 'icarusDive',
        description: 'Icarus Dive can loop up to 4 times. If the ability is cancelled early, its cooldown is reduced by 10% for each unfinished loop'
    },
    pathfinder_icarus_dive_flyby: {
        name: 'Grass Grows, Bird Flies, Sun Shines',
        skill: 'icarusDive',
        description: 'During Icarus Dive, Phoenix continuously attacks all enemies within a 525 radius every 0.35 seconds. These attacks can proc on-hit effects'
    },
    pathfinder_fire_spirit_shell: {
        name: 'Galileo\'s Revenge',
        skill: 'fireSpirits',
        description: 'If Phoenix takes more than 600 damage, it will receive a strong dispel and automatically launch a free fire spirit of the current level unto a nearby enemy. The damage count reset after 6 seconds of not taking damage'
    },
    pathfinder_supernova_allies: {
        name: 'Fortunate Sun',
        skill: 'supernova',
        description: 'Supernova gains an additional charge and becomes a unit target ability, allowing Phoenix to apply the effect unto an ally instead of itself'
    },
    pathfinder_supernova_blackhole: {
        name: 'Black Hole Sun',
        skill: 'supernova',
        description: 'Supernova also creates a block hole at its location. This black hole stuns any nearby enemy unit, dealing 4% of Phoenix\'s max health as damage every second'
    },
    pathfinder_sun_ray_star: {
        name: 'Fabulous Fowl',
        skill: 'sunRay',
        description: 'Sun Ray also produces 5 additional rays in all directions around Phoenix'
    },
    pathfinder_icarus_dive_bkb: {
        name: 'Mile High Club',
        skill: 'icarusDive',
        description: 'Phoenix gains spell immunity during Icarus Dive. For a 6 seconds after the flight ends, Phoenix has flying movement and 80% bonus movement speed'
    },
    pathfinder_supernova_heal_bkb: {
        name: 'From Dusk Til Dawn',
        skill: 'supernova',
        description: 'Supernova grants spell immunity to all allied heroes within its radius, and continous heals them for the burn damage. If Phoenix is successfully reborn, nearby allies are also healed for 5% of their max health'
    },
    /*
        =====================
        |   Dragon Knight   |
        =====================
    */
    pathfinder_dk_breathe_fire_stun: {
        name: 'Morning Breaths',
        skill: 'breatheFire',
        description: 'Each unit hit by Breathe Fire has a 50% chance to be stunned and damaged by the current level of Dragon Tail'
    },
    pathfinder_dk_dragon_tail_bounce: {
        name: 'Swift Saphira',
        skill: 'dragonTail',
        description: 'Dragon Tail gains 900 bonus cast range. Upon impact, it bounces 3 additional times to nearby enemies. After its final bounce, the projectile returns to Dragon Knight, stunning all foes around him'
    },
    pathfinder_dk_breathe_fire_macropyre: {
        name: 'Dracarys',
        skill: 'breatheFire',
        description: 'Breathe Fire leaves behind a trail of fiery flames. The fire lasts 5 seconds and deals 20% of the ability\'s damage every 0.5 seconds'
    },
    pathfinder_dk_dragon_blood_damage: {
        name: 'Boiling Veins',
        skill: 'dragonBlood',
        description: 'Dragon Blood passively charges up every second, empowering Dragon Knight\'s next strike with bonus magical damage. The amount of bonus damage gained every second is equals to Dragon Knight\'s total health regeneration. The bonus damage is maxed after 4 seconds, and is reset after every attack. If proc at maximum damage, the attack also heals Dragon Knight for 100% of damage dealt '
    },
    pathfinder_dk_breathe_fire_crit_lifesteal: {
        name: 'Flame Buffet',
        skill: 'breatheFire',
        description: 'While attacking a unit currently afflicted with the Breathe Fire debuff, Dragon Knight has 25% chance to critical strike for 180% damage. These critical attacks heals Dragon Knight for 100% of damage dealt'
    },
    pathfinder_dk_dragon_blood_gold: {
        name: 'Hoard of Babylon',
        skill: 'dragonBlood',
        description: 'For every 400 gold unspent, Dragon Knight gains 1 bonus armor. For every 350 gold unspent, he also gain 1% magic resistance'
    },
    pathfinder_dk_dragon_tail_passive: {
        name: 'Blade Scales',
        skill: 'dragonTail',
        description: 'When attacked, Dragon Knight has a 15% chance to immediately retaliate with the current level of Dragon Tail'
    },
    pathfinder_dk_elder_dragon_form_cdr: {
        name: 'Blessing of Ancalagon',
        skill: 'elderDragonForm',
        description: 'The cooldown of Elder Dragon Form is reduced by 0.5 seconds everytime Dragon Knight takes damage. If he received lethal damage while Elder Dragon Form is off cooldown, the ability is instantly activated and he is healed to 20% of his max health'
    },
    pathfinder_dk_elder_dragon_form_fear: {
        name: 'Beneath The Shadow of My Wings',
        skill: 'elderDragonForm',
        description: 'Upon transforming into Dragon Form, Dragon Knight casts the current level of Breathe Fire in all direction around himself, and applies fear to all enemies within a 500 radius for 1.75 seconds'
    },
    pathfinder_dk_dragon_blood_active: {
        name: 'Pyroclastic Conflagration',
        skill: 'dragonBlood',
        description: 'Dragon Blood can be activated to grant Dragon Knight 3 seconds of magic immunity. When activated, it creates a fiery blast that knocks back enemies within a 500 radius. Affected units are stunned for 1.25 seconds and dealt damage equals to 200% of Dragon Knight\'s total health regeneration'
    },
    pathfinder_dk_elder_dragon_form_attack: {
        name: 'Fang of Galakrond',
        skill: 'elderDragonForm',
        description: 'After every 3 attacks in human form, Dragon Knight\'s next attack is empowered by the current level of Elder Dragon Form. While transformed, Dragon Knight\'s attack projectile bounce to an additional nearby target, dealing full damage and applies the attack\'s debuff'
    },
    pathfinder_dk_dragon_tail_chain: {
        name: 'Soul Feast',
        skill: 'dragonTail',
        description: 'Dragon Tail tethers Dragon Knight to the primary target. While linked, Dragon Knight can never be killed by the target, and 50% of the damage he takes is reflected back unto the tethered opponent. The tether lasts 4 seconds, and has a maximum length of 1000'
    },
    /*
        ===================
        |   Dawnbreaker   |
        ===================
    */
    dawnbreaker_celestial_hammer_lua_illusion: {
        name: 'Echoes of the First Light',
        skill: 'celestialHammer',
        description: 'Celestrial Hammer creates an illusion of Dawnbreaker each time it hits an enemy unit. These illusions deal 20% damage, take 450% damage, and are fully capable of proccing Luminosity'
    },
    dawnbreaker_luminosity_lua_stacking: {
        name: 'Lux Immortalis',
        skill: 'luminosity',
        description: 'Each time Dawnbreaker attacks, she gain a stack of Lux Immortalis. Each stack grants Dawnbreaker 2% damage reduction, 2% status resistance, 4 health regeneration, and 5 bonus attack damage, up to a maximum of 40 stacks. If Dawnbreaker stops attacking for 2 seconds, the stack count is immediately reset, unless she is channeling Solar Guardian'
    },
    dawnbreaker_starbreaker_lua_solar_pulse: {
        name: 'Starburst',
        skill: 'starbreaker',
        description: 'Starbreaker periodically emits Solar Guardian pulses of the current level throughout its duration. Dawnbreaker receives 75% less damage while performing Starbreaker'
    },
    dawnbreaker_starbreaker_lua_max_luminosity: {
        name: 'Whispers of Ezalor',
        skill: 'starbreaker',
        description: 'Starbreaker procs Luminosity on every hit, and Luminosity will always be set at max stacks after the ability ends'
    },
    dawnbreaker_starbreaker_lua_smash_sleep: {
        name: 'Stop, Hammer Time!',
        skill: 'starbreaker',
        description: 'The radius of Starbreaker\'s final smash is increased by 35%. All enemies hit by this final strike, including CC-immune units, take 200 additional magic damage and are put to sleep for 12s'
    },
    dawnbreaker_luminosity_lua_charge: {
        name: 'Rogue Knight\'s Pursuit',
        skill: 'luminosity',
        description: 'Dawnbreaker can now activate Luminosity to launch herself toward any enemy unit within a 1000 radius. Upon arriving at the target, Dawnbreaker stuns all enemies within a 230 radius for 1.1 seconds. While charging, Dawnbreaker is invulnerable and leaves behind a trail of Celestrial Hammer fire'
    },
    dawnbreaker_celestial_hammer_lua_skewer: {
        name: 'Righteous Momentum',
        skill: 'celestialHammer',
        description: 'Celestrial Hammer drags along any enemy unit in its path. Upon hitting the ground, all units within a 200 radius of Celestrial Hammer are instantly damaged by an attack from Dawnbreaker, then stunned for 2 seconds'
    },
    dawnbreaker_celestial_hammer_lua_trail_heal: {
        name: 'Road to Eden',
        skill: 'celestialHammer',
        description: 'Celestrial Hammer\'s fire trail now heals and increases the movement speed of allied heroes. Any friendly hero healed by Luminosity will also leave a fire trail of their own for 2 seconds'
    },
    dawnbreaker_luminosity_lua_explosion: {
        name: 'Confessions in the Dark',
        skill: 'luminosity',
        description: 'If an enemy unit dies within 1.2 seconds of being hit by a Luminosity critical strike, it will explodes in a 500 radius, damaging enemies and healing allied heroes for 30% of its max health. Affected enemies are also stunned for 0.7 seconds'
    },
    dawnbreaker_solar_guardian_lua_charges: {
        name: 'Beam Me Up, Scotty!',
        skill: 'solarGuardian',
        description: 'Solar Guardian now has 3 independent charges. Upon landing, Dawnbreaker reset the cooldown of all of her other abilities'
    },
    dawnbreaker_solar_guardian_lua_permanent_dummy: {
        name: 'Solar Sanctuary',
        skill: 'solarGuardian',
        description: 'Consume 100% of Dawnbreaker\'s current mana to permanently bless a location, causing it to radiates lesser Solar Guardian pulses of the current level, damaging and healing for 30% of the ability\'s values. Can only be used once per room, but the effect will last until the end of the encounter'
    },
    dawnbreaker_solar_guardian_lua_permanent: {
        name: 'Solar Sanctuary',
        skill: 'solarGuardian',
        description: 'Consume 100% of Dawnbreaker\'s current mana to permanently bless a location, causing it to radiates lesser Solar Guardian pulses of the current level, damaging and healing for 30% of the ability\'s values. Can only be used once per room, but the effect will last until the end of the encounter'
    },
    dawnbreaker_solar_guardian_lua_capture: {
        name: 'Stairway to Heaven',
        skill: 'solarGuardian',
        description: 'Solar Guardian now captures all nearby enemies, taking them unto the sky with Dawnbreaker. Upon landing, Dawnbreaker gains complete immunity against physical and magical damage for 6 seconds. All enemies within the capture radius are stunned while Solar Guardian is channeling'
    },
    /*
        ==============
        |   Dazzle   |
        ==============
    */
    pf_poison_touch_spread: {
        name: 'Infection Mandate',
        skill: 'poisonTouch',
        description: 'Poison Touch projectiles now mini-stun on impact. If a unit debuffed by Poison Touch is attacked by Dazzle, it will spread the debuff to 4 nearby units'
    },
    pf_poison_touch_ward: {
        name: 'Prince Bongo',
        skill: 'poisonTouch',
        description: 'Enemies dying while debuffed by Poison Touch has a 50% chance to spawn a ward that pulse 2 times with the current level of Shadow Wave'
    },
    pf_poison_touch_chain: {
        name: 'Communal Discharge',
        skill: 'poisonTouch',
        description: 'Poison Touch launches a single bouncing projectile, dealing physical impact damage equals to 50% of Dazzle\'s total intelligence while splashing for 15% in a small radius.\
        The number of bounces is equal to the ability\'s max targets, and the impact applies twice as many Poison Touch stacks'
    },
    pf_shallow_grave_invis: {
        name: 'Weaversong Lullaby',
        skill: 'shallowGrave',
        description: 'Shallow Grave causes the affected units to become invisible while granting them 250 bonus movement speed and 60 bonus health regeneration'
    },
    pf_shallow_grave_aoe: {
        name: 'Mass Burial',
        skill: 'shallowGrave',
        description: 'Shallow Graves applies to all friendly heroes within a 420 radius of the target. Any enemy caught within this radius is hexed for 50% of Shallow Grave\'s duration'
    },
    pf_shallow_grave_ground: {
        name: 'Hallowed Ground',
        skill: 'shallowGrave',
        description: 'Shallow Grave can be ground targeted to create a shadow pool. Any friendly unit standing within the radius receives %heal_amp%%% healing amplification. If a friendly hero takes lethal damage within the area, they will be instantly blessed with Shallow Grave.\
         The pool lasts indefinitely until its effect is proc\'d or Dazzle casts Shallow Grave again'
    },
    pf_shadow_wave_enemy: {
        name: 'Chapel of Woe',
        skill: 'shadowWave',
        description: 'Shadow Wave can now be cast on enemies, causing it to bounce between enemy units, dealing damage while healing nearby friendly heroes for 50% of the amount. When used this way there are 2 times as many bounces'
    },
    pf_shadow_wave_proc: {
        name: 'Heal of a Deal',
        skill: 'shadowWave',
        description: 'While attacking an enemy afflicted with Poison Touch, Dazzle has a 20% chance to cause a Shadow Wave of the current level to bounce to a nearby valid target. This can proc Bad Juju'
    },
    pf_shadow_wave_dispel: {
        name: 'Disco Sermon',
        skill: 'shadowWave',
        description: 'The first bounce of Shadow Wave has global range. Any friendly hero healed by Shadow Wave also receives a strong dispel that cleanses stuns and most debuffs'
    },
    pf_bad_juju_attacks: {
        name: 'Sacred Founding',
        skill: 'badJuju',
        description: 'Any time Dazzle casts a spell, he automatically launches 5 attacks toward nearby enemies within the effect radius of Bad Juju'
    },
    pf_bad_juju_heal: {
        name: 'Purple Rain',
        skill: 'badJuju',
        description: 'Each time Dazzle casts a spell, all allies within the Bad Juju effect radius is blessed with a purple mist that restore 2% of their max health and mana every second. The duration is the same as Bad\
         Juju\'s debuff duration, and is refreshed when reapplied'
    },
    pf_bad_juju_raze: {
        name: 'Never More Blessed',
        skill: 'badJuju',
        description: 'Bad Juju gains a stack each time Dazzle successfully casts a spell. At 3 stacks, the counter is reset, and a shadow raze is summoned under every single enemy unit within Bad Juju\'s radius, dealin\
         100% of Dazzle\'s intelligence as physical damage'
    },
    /*
        ==============
        |   Zeus     |
        ==============
    */
    pathfinder_zuus_arc_lightning_multi_enemy_bounce: {
        name: 'Leyden Jar',
        skill: 'arcLightning',
        description: 'Arc Lightning can now bounce to enemies already hit by this cast, and has a 15% chance to apply Lightning Bolt on the target on every bounce.'
    },
    pathfinder_zuus_arc_lightning_ally_bounce_buff: {
        name: 'Electromania',
        skill: 'arcLightning',
        description: 'Arc Lightning can now bounce onto Zeus and his allies, granting them a 50% chance to cast Arc Lightning at a random target whenever they cast a spell for 6 seconds. \
        Allied Arc Lightnings cannot bounce onto allies.'
    },
    pathfinder_zuus_arc_lightning_projectile: {
        name: 'Disco Rave',
        skill: 'arcLightning',
        description: 'Arc Lightning now launches a linear projectile that travels 1500 units and casts Arc Lightning every second to enemies within 300 radius of it.\
        Enemies struck by this projectile will also be struck by Arc Lightning.'
    },
    pathfinder_zuus_lightning_bolt_kill_recast: {
        name: 'Hell\'s Bells',
        skill: 'lightningBolt',
        description: 'If Lightning Bolt successfully kills a unit, it will be recasted upon a nearby unit with the lowest health. This process can repeat itself.'
    },
    pathfinder_zuus_lightning_bolt_self_cast: {
        name: 'Lightning in a Bottle',
        skill: 'lightningBolt',
        description: 'Lightning Bolt can now be self-casted, healing Zeus for 30% of his maximum health, knocking back enemies within 500 radius of him, and stunning them for 1.2 seconds.'
    },
    pathfinder_zuus_lightning_bolt_linear_cast: {
        name: 'Highway to Heaven',
        skill: 'lightningBolt',
        description: 'Lightning Bolt is now a directional ability that casts Lightning Bolts in a linear direction, starting from Zeus\' position. Lightning Bolts strike forward 375 units every 0.3\
        seconds, up to a maximum distance based on 2x of Zeus\' usual cast range with Lightning Bolt.'
    },
    pathfinder_zuus_cloud: {
        name: 'Skyfall',
        skill: 'thundergodsWrath',
        description: 'Grants an active ability which lets Zeus summon a storm cloud that duplicates his spell casts upon enemies within the radius.'
    },
    pathfinder_zuus_static_field_attack_arc_lightning: {
        name: 'Dirty Deeds Done Dirt Cheap',
        skill: 'staticField',
        description: 'Zeus\' basic attacks deal 40% of Static Field\'s bonus damage. If Zeus attacks the same target 3 times, he will immediately cast Arc Lightning at that target for free.'
    },
    pathfinder_zuus_heavenly_jump: {
        name: 'Zeus From Above',
        skill: 'staticField',
        description: 'Grants an active ability which lets Zeus perform a Heavenly Jump, leaping up to 850 units in any direction! After landing, Zeus strikes the closest 2 enemies within a \
        X radius with a Lightning Bolt.'
    },
    pathfinder_zuus_thundergods_wrath_autosmite: {
        name: 'You\'ve Been Thunderstruck!',
        skill: 'thundergodsWrath',
        description: 'Thundergod\'s Wrath can now be auto-casted, giving Zeus a 10% chance every second to smite a random visible enemy for 50% of Thundergod\'s Wrath\'s damage. Each smite costs \
        3% of Zeus\' maximum mana.'
    },
    pathfinder_zuus_thundergods_wrath_multistrike: {
        name: 'Celestial Tantrum',
        skill: 'thundergodsWrath',
        description: 'Thundergod\'s Wrath always strikes at least 10 times. If Thundergod\'s Wrath strikes less than 10 targets, Thundergod\'s Wrath will keep smiting until it has reached its minimum \
        or all of the targets are dead. Each round of strikes will deal 90% of the damage of the previous round.'
    },
    pathfinder_zuus_thundergods_wrath_ground_target: {
        name: 'Electric Rainfall',
        skill: 'thundergodsWrath',
        description: 'Thundergod\'s Wrath is now a ground-targeted ability with 700 base cast range. If Thundergod\'s Wrath strikes at least 5 units, another Thundergod\'s Wrath is recasted \
        0.6 seconds later with 50% the radius of the previous. This can repeat itself.'
    },
}
export default Shards
