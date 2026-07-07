/**
 * TBH Steam Market アイテム一覧 (Steam Market API より自動取得)
 * AppID: 3678970 | 件数: 742 | 取得日: 2026-07-05
 * これはSteamの公開APIから合法的に取得したデータです
 */

export interface MarketItem {
  name: string;    // Steam market hash name
  type: string;    // アイテムタイプ (例: "Sword - Lv. 80")
  category: string; // カテゴリ (Gear / Decoration / Engraving / ...)
}

export const MARKET_ITEMS: MarketItem[] = [
  {
    "name": "Empire 50th Anniversary Coin",
    "type": "Offering Material",
    "category": "Offering"
  },
  {
    "name": "Kingdom 50th Anniversary Coin",
    "type": "Offering Material",
    "category": "Offering"
  },
  {
    "name": "Frozen Orb (Arcana) A",
    "type": "Orb - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Twilight Amethyst",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Shadow Bow (Beyond) A",
    "type": "Bow - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Scroll of Immortal Inscription",
    "type": "Inscription Material",
    "category": "Inscription"
  },
  {
    "name": "Astral Diamond",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Phantom Emerald",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Scroll of Arcana Inscription",
    "type": "Inscription Material",
    "category": "Inscription"
  },
  {
    "name": "Knight Boots (Arcana) A",
    "type": "Boots - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Dimensional Arrow (Beyond) A",
    "type": "Arrow - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Tempest Staff (Beyond) A",
    "type": "Staff - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Dimensional Armor (Beyond) A",
    "type": "Armor - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Dimensional Helmet (Beyond) A",
    "type": "Helmet - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Kraken Ink",
    "type": "Engraving Material",
    "category": "Engraving"
  },
  {
    "name": "Minotaur Horn",
    "type": "Engraving Material",
    "category": "Engraving"
  },
  {
    "name": "Dimensional Boots (Beyond) A",
    "type": "Boots - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Dimensional Gloves (Beyond) A",
    "type": "Gloves - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Soulstone - Torment",
    "type": "Soulstone",
    "category": "Soulstone"
  },
  {
    "name": "Empire 10th Anniversary Coin",
    "type": "Offering Material",
    "category": "Offering"
  },
  {
    "name": "Dice",
    "type": "Engraving Material",
    "category": "Engraving"
  },
  {
    "name": "Ethereal Amulet (Arcana) A",
    "type": "Amulet - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Titan Marrow",
    "type": "Engraving Material",
    "category": "Engraving"
  },
  {
    "name": "Dimensional Arrow (Arcana) A",
    "type": "Arrow - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Scroll of Legendary Inscription",
    "type": "Inscription Material",
    "category": "Inscription"
  },
  {
    "name": "Void Opal",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Orichalcum Ore",
    "type": "Crafting Material",
    "category": "Crafting"
  },
  {
    "name": "Shadow Bow (Arcana) A",
    "type": "Bow - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Shine Armor (Beyond) A",
    "type": "Armor - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Void Ichor",
    "type": "Engraving Material",
    "category": "Engraving"
  },
  {
    "name": "Shine Gloves (Beyond) A",
    "type": "Gloves - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Arcane Ore",
    "type": "Crafting Material",
    "category": "Crafting"
  },
  {
    "name": "Limitless Scepter (Beyond) A",
    "type": "Scepter - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Fighter's Helmet (Beyond) A",
    "type": "Helmet - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Dimensional Sword (Beyond) A",
    "type": "Sword - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Dimensional Scepter (Beyond) A",
    "type": "Scepter - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Dimensional Tome (Beyond) A",
    "type": "Tome - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Diamond",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Fate Helmet (Beyond) A",
    "type": "Helmet - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Ethereal Ring (Arcana) A",
    "type": "Ring - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Haste Arrow (Beyond) A",
    "type": "Arrow - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Mystic Gloves (Beyond) A",
    "type": "Gloves - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Scroll of Rare Inscription",
    "type": "Inscription Material",
    "category": "Inscription"
  },
  {
    "name": "Shine Boots (Beyond) A",
    "type": "Boots - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Tempest Staff (Arcana) A",
    "type": "Staff - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Eclipse Ring (Arcana) A",
    "type": "Ring - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Sapphire Earring (Arcana) A",
    "type": "Earing - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Ethereal Bracer (Beyond) A",
    "type": "Bracer - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Lapis Lazuli",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Darksteel Ingot",
    "type": "Crafting Material",
    "category": "Crafting"
  },
  {
    "name": "Emerald Amulet (Arcana) A",
    "type": "Amulet - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Sapphire Earring (Beyond) A",
    "type": "Earing - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Mystic Bow (Beyond) A",
    "type": "Bow - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Warrior's Tome (Beyond) A",
    "type": "Tome - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Demon Blood",
    "type": "Engraving Material",
    "category": "Engraving"
  },
  {
    "name": "Dimensional Sword (Arcana) A",
    "type": "Sword - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Sacred Staff (Beyond) A",
    "type": "Staff - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Amethyst Ring (Arcana) A",
    "type": "Ring - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Celestial Earring (Beyond) A",
    "type": "Earing - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Arcane Crystal",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Dimensional Boots (Arcana) A",
    "type": "Boots - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Basilisk Scale",
    "type": "Engraving Material",
    "category": "Engraving"
  },
  {
    "name": "Wraith Essence",
    "type": "Engraving Material",
    "category": "Engraving"
  },
  {
    "name": "Dimensional Gloves (Arcana) A",
    "type": "Gloves - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Ethereal Earring (Immortal) A",
    "type": "Earing - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Fate Arrow (Beyond) A",
    "type": "Arrow - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Limitless Bow (Arcana) A",
    "type": "Bow - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Amethyst",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Emerald Amulet (Beyond) A",
    "type": "Amulet - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Dimensional Armor (Arcana) A",
    "type": "Armor - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Emerald",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Eclipse Amulet (Beyond) A",
    "type": "Amulet - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Eclipse Ring (Beyond) A",
    "type": "Ring - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Emerald Ring (Beyond) A",
    "type": "Ring - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Scroll of Uncommon Inscription",
    "type": "Inscription Material",
    "category": "Inscription"
  },
  {
    "name": "Dimensional Scepter (Arcana) A",
    "type": "Scepter - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Crimson Bracer (Arcana) A",
    "type": "Bracer - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Haste Arrow (Arcana) A",
    "type": "Arrow - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Dimensional Orb (Beyond) A",
    "type": "Orb - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Griffin Beak",
    "type": "Engraving Material",
    "category": "Engraving"
  },
  {
    "name": "Black Pearl",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Phoenix Ash",
    "type": "Engraving Material",
    "category": "Engraving"
  },
  {
    "name": "Fighter's Helmet (Arcana) A",
    "type": "Helmet - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Dimensional Crossbow (Beyond) A",
    "type": "Crossbow - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Ethereal Amulet (Immortal) A",
    "type": "Amulet - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Bloodstone",
    "type": "Crafting Material",
    "category": "Crafting"
  },
  {
    "name": "Fate Scepter (Beyond) A",
    "type": "Scepter - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Empire 1st Anniversary Coin",
    "type": "Offering Material",
    "category": "Offering"
  },
  {
    "name": "Opal",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Emerald Ring (Arcana) A",
    "type": "Ring - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Dimensional Shield (Arcana) A",
    "type": "Shield - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Soulstone - Hell",
    "type": "Soulstone",
    "category": "Soulstone"
  },
  {
    "name": "Ethereal Bracer (Immortal) A",
    "type": "Bracer - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Gale Arrow (Beyond) A",
    "type": "Arrow - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Rune Gloves (Beyond) A",
    "type": "Gloves - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Skull",
    "type": "Engraving Material",
    "category": "Engraving"
  },
  {
    "name": "Eclipse Amulet (Immortal) A",
    "type": "Amulet - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Dimensional Tome (Arcana) A",
    "type": "Tome - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Mystic Topaz",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Rune Plate (Beyond) A",
    "type": "Armor - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Kingdom 10th Anniversary Coin",
    "type": "Offering Material",
    "category": "Offering"
  },
  {
    "name": "Ethereal Amulet (Beyond) A",
    "type": "Amulet - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Ethereal Ring (Immortal) A",
    "type": "Ring - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Pearl",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Platinum Bracer (Arcana) A",
    "type": "Bracer - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Rune Boots (Beyond) A",
    "type": "Boots - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Enchanted Ruby",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Moonstone Pendant (Arcana) A",
    "type": "Amulet - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Garnet",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Void Staff (Beyond) A",
    "type": "Staff - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Turquoise",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Fate Sword (Beyond) A",
    "type": "Sword - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Dimensional Bolt (Beyond) A",
    "type": "Bolt - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "War Gloves (Beyond) A",
    "type": "Gloves - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Ancient Orb (Beyond) A",
    "type": "Orb - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Dimensional Shield (Beyond) A",
    "type": "Shield - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Shadow Bow (Immortal) A",
    "type": "Bow - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Emerald Earring (Arcana) A",
    "type": "Earing - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Dimensional Armor (Immortal) A",
    "type": "Armor - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Soulstone - Normal",
    "type": "Soulstone",
    "category": "Soulstone"
  },
  {
    "name": "Platinum Amulet (Arcana) A",
    "type": "Amulet - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Rune Orb (Beyond) A",
    "type": "Orb - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Dimensional Orb (Arcana) A",
    "type": "Orb - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Arcane Orb (Beyond) A",
    "type": "Orb - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Rune Arrow (Beyond) A",
    "type": "Arrow - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "War Boots (Beyond) A",
    "type": "Boots - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Rune Helmet (Beyond) A",
    "type": "Helmet - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Dimensional Helmet (Immortal) A",
    "type": "Helmet - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Azure Arrow (Arcana) A",
    "type": "Arrow - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Prophecy Orb (Arcana) A",
    "type": "Orb - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Vengeance Sword (Arcana) A",
    "type": "Sword - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Emerald Bracer (Immortal) A",
    "type": "Bracer - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Scroll of Common Inscription",
    "type": "Inscription Material",
    "category": "Inscription"
  },
  {
    "name": "Ruby Pendant (Beyond) A",
    "type": "Amulet - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Dusk Bow (Beyond) A",
    "type": "Bow - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Crimson Bracer (Beyond) A",
    "type": "Bracer - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Fate Tome (Arcana) A",
    "type": "Tome - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "War Helmet (Beyond) A",
    "type": "Helmet - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Fate Arrow (Arcana) A",
    "type": "Arrow - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Dimensional Boots (Immortal) A",
    "type": "Boots - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "War Armor (Beyond) A",
    "type": "Armor - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Amethyst Ring (Beyond) A",
    "type": "Ring - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Emerald Earring (Beyond) A",
    "type": "Earing - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Dragon Bile",
    "type": "Engraving Material",
    "category": "Engraving"
  },
  {
    "name": "Mystic Armor (Arcana) A",
    "type": "Armor - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Elite Bow (Beyond) A",
    "type": "Bow - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Dimensional Bolt (Arcana) A",
    "type": "Bolt - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Obsidian Bracer (Arcana) A",
    "type": "Bracer - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Shine Armor (Arcana) A",
    "type": "Armor - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Radiant Shield (Arcana) A",
    "type": "Shield - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Platinum Earring (Arcana) A",
    "type": "Earing - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Celestial Earring (Immortal) A",
    "type": "Earing - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Sacred Staff (Arcana) A",
    "type": "Staff - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Chaos Shard",
    "type": "Crafting Material",
    "category": "Crafting"
  },
  {
    "name": "Gold Amulet (Arcana) A",
    "type": "Amulet - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Knight Sword (Beyond) A",
    "type": "Sword - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Mystic Boots (Arcana) A",
    "type": "Boots - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Shine Gloves (Arcana) A",
    "type": "Gloves - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Blessed Tome (Arcana) A",
    "type": "Tome - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Rune Tome (Arcana) A",
    "type": "Tome - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Shine Boots (Arcana) A",
    "type": "Boots - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Crystal Quartz",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Rune Scepter (Beyond) A",
    "type": "Scepter - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Soulstone - Nightmare",
    "type": "Soulstone",
    "category": "Soulstone"
  },
  {
    "name": "Dimensional Tome (Legendary) A",
    "type": "Tome - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Limitless Scepter (Arcana) A",
    "type": "Scepter - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Starlight Sapphire",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Fate Sword (Arcana) A",
    "type": "Sword - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Dimensional Arrow (Immortal) A",
    "type": "Arrow - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Tiger Eye Earring (Beyond) A",
    "type": "Earing - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Obsidian Bracer (Beyond) A",
    "type": "Bracer - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Obsidian Shard",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Knight's Armor (Arcana) A",
    "type": "Armor - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Barbed Arrow (Arcana) A",
    "type": "Arrow - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Fate Bolt (Beyond) A",
    "type": "Bolt - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Radiant Shield (Beyond) A",
    "type": "Shield - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Silver Amulet (Immortal) A",
    "type": "Amulet - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Leather",
    "type": "Crafting Material",
    "category": "Crafting"
  },
  {
    "name": "Copper Nugget",
    "type": "Crafting Material",
    "category": "Crafting"
  },
  {
    "name": "Mystic Shield (Beyond) A",
    "type": "Shield - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Minor Emerald",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Chain Helmet (Arcana) A",
    "type": "Helmet - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Emerald Amulet (Immortal) A",
    "type": "Amulet - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Mystic Orb (Arcana) A",
    "type": "Orb - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Spider Silk",
    "type": "Engraving Material",
    "category": "Engraving"
  },
  {
    "name": "Moonstone Pendant (Immortal) A",
    "type": "Amulet - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Chain Boots (Arcana) A",
    "type": "Boots - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Warrior's Tome (Arcana) A",
    "type": "Tome - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Platinum Earring (Immortal) A",
    "type": "Earing - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Dimensional Gloves (Immortal) A",
    "type": "Gloves - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Dimensional Hatchet (Immortal) A",
    "type": "Hatchet - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Platinum Ring (Arcana) A",
    "type": "Ring - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Ancient Orb (Arcana) A",
    "type": "Orb - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Harpy Feather",
    "type": "Engraving Material",
    "category": "Engraving"
  },
  {
    "name": "Chain Gloves (Arcana) A",
    "type": "Gloves - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Sage Staff (Beyond) A",
    "type": "Staff - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Emerald Earring (Immortal) A",
    "type": "Earing - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Thunderstone",
    "type": "Crafting Material",
    "category": "Crafting"
  },
  {
    "name": "Iron Boots (Immortal) A",
    "type": "Boots - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Eclipse Bracer (Immortal) A",
    "type": "Bracer - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "War Shield (Beyond) A",
    "type": "Shield - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Comet Staff (Beyond) A",
    "type": "Staff - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Sapphire Earring (Immortal) A",
    "type": "Earing - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Stardust Ingot",
    "type": "Crafting Material",
    "category": "Crafting"
  },
  {
    "name": "Coral Piece",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Limitless Axe (Arcana) A",
    "type": "Axe - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Devout Scepter (Beyond) A",
    "type": "Scepter - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Mandrake Root",
    "type": "Engraving Material",
    "category": "Engraving"
  },
  {
    "name": "Silver Ring (Immortal) A",
    "type": "Ring - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Limitless Bow (Immortal) A",
    "type": "Bow - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Ruby",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Knight Gloves (Arcana) A",
    "type": "Gloves - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Amber Ring (Immortal) A",
    "type": "Ring - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Elite Shield (Beyond) A",
    "type": "Shield - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Minor Topaz",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "War Bow (Arcana) A",
    "type": "Bow - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Silver Earring (Immortal) A",
    "type": "Earing - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Rune Arrow (Arcana) A",
    "type": "Arrow - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Dimensional Axe (Beyond) A",
    "type": "Axe - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Eclipse Ring (Immortal) A",
    "type": "Ring - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Platinum Amulet (Immortal) A",
    "type": "Amulet - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Silver Bracer (Immortal) A",
    "type": "Bracer - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Fate Helmet (Arcana) A",
    "type": "Helmet - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Azure Staff (Arcana) A",
    "type": "Staff - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Tiger Eye Earring (Immortal) A",
    "type": "Earing - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Rune Sword (Beyond) A",
    "type": "Sword - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Dimensional Crossbow (Arcana) A",
    "type": "Crossbow - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Amber Ring (Beyond) A",
    "type": "Ring - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Haste Bolt (Beyond) A",
    "type": "Bolt - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Platinum Ring (Immortal) A",
    "type": "Ring - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Mystic Crossbow (Beyond) A",
    "type": "Crossbow - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Sacred Scepter (Arcana) A",
    "type": "Scepter - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Wooden Shield (Immortal) A",
    "type": "Shield - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Iron Ingot",
    "type": "Crafting Material",
    "category": "Crafting"
  },
  {
    "name": "Ruby Pendant (Legendary) A",
    "type": "Amulet - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Dimensional Shield (Immortal) A",
    "type": "Shield - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "War Tome (Arcana) A",
    "type": "Tome - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Dimensional Axe (Arcana) A",
    "type": "Axe - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Gale Arrow (Arcana) A",
    "type": "Arrow - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Nightshade Extract",
    "type": "Engraving Material",
    "category": "Engraving"
  },
  {
    "name": "Silver Ingot",
    "type": "Crafting Material",
    "category": "Crafting"
  },
  {
    "name": "Mystic Gloves (Arcana) A",
    "type": "Gloves - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Emerald Ring (Immortal) A",
    "type": "Ring - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Iron Plate (Immortal) A",
    "type": "Armor - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Frozen Orb (Legendary) A",
    "type": "Orb - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Composite Bow (Arcana) A",
    "type": "Bow - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Knight Boots (Immortal) A",
    "type": "Boots - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Tempest Staff (Immortal) A",
    "type": "Staff - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Gold Earring (Arcana) A",
    "type": "Earing - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Iron Gloves (Immortal) A",
    "type": "Gloves - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Rune Orb (Arcana) A",
    "type": "Orb - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Hunter's Arrow (Immortal) A",
    "type": "Arrow - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Iron Tome (Immortal) A",
    "type": "Tome - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Celestial Earring (Legendary) A",
    "type": "Earing - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Dimensional Crossbow (Immortal) A",
    "type": "Crossbow - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Platinum Bracer (Immortal) A",
    "type": "Bracer - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Iron Helmet (Immortal) A",
    "type": "Helmet - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Iron Crossbow (Beyond) A",
    "type": "Crossbow - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Void Staff (Arcana) A",
    "type": "Staff - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Bronze Ingot",
    "type": "Crafting Material",
    "category": "Crafting"
  },
  {
    "name": "Emerald Amulet (Legendary) A",
    "type": "Amulet - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Rune Helmet (Arcana) A",
    "type": "Helmet - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Iron Bolt (Arcana) A",
    "type": "Bolt - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Mystic Bow (Arcana) A",
    "type": "Bow - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Gold Bracer (Immortal) A",
    "type": "Bracer - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Long Bow (Immortal) A",
    "type": "Bow - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Dimensional Orb (Immortal) A",
    "type": "Orb - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Eclipse Bracer (Legendary) A",
    "type": "Bracer - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Chain Mail (Arcana) A",
    "type": "Armor - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Amber Gem",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Knight Helmet (Arcana) A",
    "type": "Helmet - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Gold Ring (Arcana) A",
    "type": "Ring - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Dimensional Sword (Immortal) A",
    "type": "Sword - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Witch Staff (Arcana) A",
    "type": "Staff - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Minor Ruby",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Stone",
    "type": "Crafting Material",
    "category": "Crafting"
  },
  {
    "name": "Gold Ring (Immortal) A",
    "type": "Ring - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Frozen Orb (Immortal) A",
    "type": "Orb - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Ethereal Bracer (Legendary) A",
    "type": "Bracer - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Dimensional Hatchet (Arcana) A",
    "type": "Hatchet - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Haste Bolt (Arcana) A",
    "type": "Bolt - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Ogre Blood",
    "type": "Engraving Material",
    "category": "Engraving"
  },
  {
    "name": "Ethereal Amulet (Legendary) A",
    "type": "Amulet - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Minor Amethyst",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Great Sword (Arcana) A",
    "type": "Sword - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Iron Arrow (Immortal) A",
    "type": "Arrow - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Blessed Scepter (Immortal) A",
    "type": "Scepter - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Mystic Shield (Arcana) A",
    "type": "Shield - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Obsidian Bracer (Immortal) A",
    "type": "Bracer - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Gold Earring (Immortal) A",
    "type": "Earing - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Prophecy Orb (Immortal) A",
    "type": "Orb - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "War Boots (Arcana) A",
    "type": "Boots - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Iron Shield (Immortal) A",
    "type": "Shield - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Poisonous Herb",
    "type": "Engraving Material",
    "category": "Engraving"
  },
  {
    "name": "Brilliant Orb (Immortal) A",
    "type": "Orb - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Mushroom Spore",
    "type": "Engraving Material",
    "category": "Engraving"
  },
  {
    "name": "Jade Stone",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Haste Bolt (Legendary) A",
    "type": "Bolt - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Rune Gloves (Arcana) A",
    "type": "Gloves - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Devout Scepter (Arcana) A",
    "type": "Scepter - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Dimensional Tome (Immortal) A",
    "type": "Tome - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Rune Plate (Arcana) A",
    "type": "Armor - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Amethyst Ring (Immortal) A",
    "type": "Ring - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Fate Scepter (Arcana) A",
    "type": "Scepter - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Bronze Bracer (Immortal) A",
    "type": "Bracer - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Gold Amulet (Immortal) A",
    "type": "Amulet - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Wyvern Claw",
    "type": "Engraving Material",
    "category": "Engraving"
  },
  {
    "name": "Emerald Earring (Legendary) A",
    "type": "Earing - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Sacred Staff (Immortal) A",
    "type": "Staff - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "War Armor (Arcana) A",
    "type": "Armor - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Steel Scepter (Arcana) A",
    "type": "Scepter - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Emerald Bracer (Legendary) A",
    "type": "Bracer - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Arcane Orb (Arcana) A",
    "type": "Orb - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "War Gloves (Arcana) A",
    "type": "Gloves - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Elite Bow (Arcana) A",
    "type": "Bow - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Topaz",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Platinum Earring (Legendary) A",
    "type": "Earing - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "War Helmet (Arcana) A",
    "type": "Helmet - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Platinum Amulet (Legendary) A",
    "type": "Amulet - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Rune Boots (Arcana) A",
    "type": "Boots - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Dusk Bow (Arcana) A",
    "type": "Bow - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Long Staff (Immortal) A",
    "type": "Staff - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Azure Arrow (Immortal) A",
    "type": "Arrow - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Knight's Tome (Arcana) A",
    "type": "Tome - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Haste Arrow (Immortal) A",
    "type": "Arrow - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Fighter's Helmet (Immortal) A",
    "type": "Helmet - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Bronze Amulet (Immortal) A",
    "type": "Amulet - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Platinum Ring (Legendary) A",
    "type": "Ring - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Crimson Bracer (Immortal) A",
    "type": "Bracer - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Bastard Sword (Arcana) A",
    "type": "Sword - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Silver Amulet (Legendary) A",
    "type": "Amulet - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Iron Arrow (Legendary) A",
    "type": "Arrow - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Barbed Arrow (Immortal) A",
    "type": "Arrow - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Dimensional Armor (Legendary) A",
    "type": "Armor - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Heavy Shield (Arcana) A",
    "type": "Shield - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Wolf Fang",
    "type": "Engraving Material",
    "category": "Engraving"
  },
  {
    "name": "Comet Staff (Arcana) A",
    "type": "Staff - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Gold Bracer (Arcana) A",
    "type": "Bracer - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "War Bow (Immortal) A",
    "type": "Bow - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Sapphire",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Rapier (Immortal) A",
    "type": "Sword - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Beast Bolt (Legendary) A",
    "type": "Bolt - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "War Shield (Arcana) A",
    "type": "Shield - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Obsidian Bracer (Legendary) A",
    "type": "Bracer - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Emerald Ring (Legendary) A",
    "type": "Ring - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Dimensional Helmet (Legendary) A",
    "type": "Helmet - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Hunting Bow (Immortal) A",
    "type": "Bow - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Elite Crossbow (Beyond) A",
    "type": "Crossbow - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Exceptional Crossbow (Arcana) A",
    "type": "Crossbow - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Hunter's Bolt (Legendary) A",
    "type": "Bolt - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Void Iron",
    "type": "Crafting Material",
    "category": "Crafting"
  },
  {
    "name": "Gold Ingot",
    "type": "Crafting Material",
    "category": "Crafting"
  },
  {
    "name": "Gold Amulet (Legendary) A",
    "type": "Amulet - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Silver Earring (Legendary) A",
    "type": "Earing - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "War Helmet (Immortal) A",
    "type": "Helmet - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Ancient Tree Sap",
    "type": "Engraving Material",
    "category": "Engraving"
  },
  {
    "name": "Fate Tome (Immortal) A",
    "type": "Tome - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Knight's Tome (Immortal) A",
    "type": "Tome - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Dimensional Scepter (Immortal) A",
    "type": "Scepter - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Vengeance Sword (Immortal) A",
    "type": "Sword - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Healing Herb",
    "type": "Engraving Material",
    "category": "Engraving"
  },
  {
    "name": "Fate Axe (Immortal) A",
    "type": "Axe - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Chain Helmet (Immortal) A",
    "type": "Helmet - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Gold Ring (Legendary) A",
    "type": "Ring - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Cutlas (Immortal) A",
    "type": "Sword - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Sapphire Earring (Legendary) A",
    "type": "Earing - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Dimensional Gloves (Legendary) A",
    "type": "Gloves - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Azure Staff (Immortal) A",
    "type": "Staff - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Dimensional Bolt (Immortal) A",
    "type": "Bolt - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Rune Scepter (Arcana) A",
    "type": "Scepter - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Elite Crossbow (Arcana) A",
    "type": "Crossbow - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Blessed Tome (Immortal) A",
    "type": "Tome - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Eclipse Ring (Legendary) A",
    "type": "Ring - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Iron Boots (Legendary) A",
    "type": "Boots - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Iron Plate (Legendary) A",
    "type": "Armor - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Shine Gloves (Immortal) A",
    "type": "Gloves - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Sage Staff (Arcana) A",
    "type": "Staff - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Fate Sword (Immortal) A",
    "type": "Sword - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Warrior's Tome (Immortal) A",
    "type": "Tome - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Elder Orb (Immortal) A",
    "type": "Orb - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Fate Helmet (Immortal) A",
    "type": "Helmet - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Bronze Ring (Immortal) A",
    "type": "Ring - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Elite Shield (Arcana) A",
    "type": "Shield - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Great Sword (Immortal) A",
    "type": "Sword - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Mystic Crossbow (Arcana) A",
    "type": "Crossbow - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Platinum Bracer (Legendary) A",
    "type": "Bracer - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Iron Gloves (Legendary) A",
    "type": "Gloves - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Iron Helmet (Legendary) A",
    "type": "Helmet - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Copper Bracer (Immortal) A",
    "type": "Bracer - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Fate Tome (Legendary) A",
    "type": "Tome - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Complete Crossbow (Arcana) A",
    "type": "Crossbow - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Limitless Crossbow (Immortal) A",
    "type": "Crossbow - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Bronze Amulet (Legendary) A",
    "type": "Amulet - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Silver Bracer (Legendary) A",
    "type": "Bracer - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Knight's Armor (Immortal) A",
    "type": "Armor - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Silver Ring (Legendary) A",
    "type": "Ring - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Fate Arrow (Immortal) A",
    "type": "Arrow - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Dimensional Axe (Immortal) A",
    "type": "Axe - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Gold Bracer (Legendary) A",
    "type": "Bracer - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Mystic Armor (Immortal) A",
    "type": "Armor - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Bronze Earring (Immortal) A",
    "type": "Earing - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Witch Staff (Immortal) A",
    "type": "Staff - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Rune Axe (Beyond) A",
    "type": "Axe - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "War Gloves (Immortal) A",
    "type": "Gloves - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Herald Staff (Immortal) A",
    "type": "Staff - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Iron Tome (Legendary) A",
    "type": "Tome - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Mystic Orb (Immortal) A",
    "type": "Orb - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Dimensional Arrow (Legendary) A",
    "type": "Arrow - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Rune Sword (Arcana) A",
    "type": "Sword - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "War Armor (Immortal) A",
    "type": "Armor - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "War Boots (Immortal) A",
    "type": "Boots - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Mystic Boots (Legendary) A",
    "type": "Boots - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Rune Axe (Arcana) A",
    "type": "Axe - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Bat Wing Membrane",
    "type": "Engraving Material",
    "category": "Engraving"
  },
  {
    "name": "Hunting Bow (Legendary) A",
    "type": "Bow - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Short Bow (Immortal) A",
    "type": "Bow - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Hunter's Arrow (Legendary) A",
    "type": "Arrow - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "War Tome (Immortal) A",
    "type": "Tome - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Blessed Scepter (Legendary) A",
    "type": "Scepter - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Mystic Boots (Immortal) A",
    "type": "Boots - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Bronze Earring (Legendary) A",
    "type": "Earing - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Knight Gloves (Immortal) A",
    "type": "Gloves - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Amber Ring (Legendary) A",
    "type": "Ring - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Ethereal Ring (Legendary) A",
    "type": "Ring - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Dimensional Scepter (Legendary) A",
    "type": "Scepter - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Prophecy Orb (Legendary) A",
    "type": "Orb - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Composite Bow (Immortal) A",
    "type": "Bow - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Iron Crossbow (Arcana) A",
    "type": "Crossbow - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Copper Ring (Immortal) A",
    "type": "Ring - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Gale Arrow (Immortal) A",
    "type": "Arrow - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Empire Armor (Immortal) A",
    "type": "Armor - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Ancient Orb (Immortal) A",
    "type": "Orb - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Knight Sword (Arcana) A",
    "type": "Sword - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Heater Shield (Arcana) A",
    "type": "Shield - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Azure Arrow (Legendary) A",
    "type": "Arrow - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Wooden Boots (Immortal) A",
    "type": "Boots - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Wooden Helmet (Immortal) A",
    "type": "Helmet - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Empire Boots (Immortal) A",
    "type": "Boots - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Minor Sapphire",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Knight Helmet (Immortal) A",
    "type": "Helmet - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Eclipse Amulet (Legendary) A",
    "type": "Amulet - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Copper Amulet (Legendary) A",
    "type": "Amulet - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Gold Earring (Legendary) A",
    "type": "Earing - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Great Axe (Arcana) A",
    "type": "Axe - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Elite Bow (Legendary) A",
    "type": "Bow - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Rune Tome (Immortal) A",
    "type": "Tome - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Knight Helmet (Legendary) A",
    "type": "Helmet - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Shine Boots (Immortal) A",
    "type": "Boots - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Kingdom 1st Anniversary Coin",
    "type": "Offering Material",
    "category": "Offering"
  },
  {
    "name": "Mystic Crossbow (Immortal) A",
    "type": "Crossbow - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Radiant Shield (Immortal) A",
    "type": "Shield - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Heavy Shield (Immortal) A",
    "type": "Shield - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Copper Earring (Immortal) A",
    "type": "Earing - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Chain Boots (Immortal) A",
    "type": "Boots - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Wooden Armor (Immortal) A",
    "type": "Armor - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Iron Shield (Legendary) A",
    "type": "Shield - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Shadow Bow (Legendary) A",
    "type": "Bow - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Dimensional Crossbow (Legendary) A",
    "type": "Crossbow - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Slime Jelly",
    "type": "Engraving Material",
    "category": "Engraving"
  },
  {
    "name": "Witch Staff (Legendary) A",
    "type": "Staff - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Shine Armor (Immortal) A",
    "type": "Armor - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Chain Boots (Legendary) A",
    "type": "Boots - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Moonstone Pendant (Legendary) A",
    "type": "Amulet - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Heater Shield (Immortal) A",
    "type": "Shield - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Chain Mail (Immortal) A",
    "type": "Armor - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Barbed Bolt (Legendary) A",
    "type": "Bolt - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Chain Mail (Legendary) A",
    "type": "Armor - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "War Tome (Legendary) A",
    "type": "Tome - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Dimensional Bolt (Legendary) A",
    "type": "Bolt - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Iron Scepter (Immortal) A",
    "type": "Scepter - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Knight Gloves (Legendary) A",
    "type": "Gloves - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Cutlas (Legendary) A",
    "type": "Sword - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Sacred Scepter (Immortal) A",
    "type": "Scepter - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Knight's Tome (Legendary) A",
    "type": "Tome - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Long Staff (Legendary) A",
    "type": "Staff - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Long Bow (Legendary) A",
    "type": "Bow - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Novice Scepter (Immortal) A",
    "type": "Scepter - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Dimensional Sword (Legendary) A",
    "type": "Sword - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Empire Tome (Immortal) A",
    "type": "Tome - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Steel Scepter (Immortal) A",
    "type": "Scepter - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Sage Staff (Immortal) A",
    "type": "Staff - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Empire Helmet (Immortal) A",
    "type": "Helmet - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Long Sword (Immortal) A",
    "type": "Sword - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Steel Axe (Immortal) A",
    "type": "Axe - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Rune Bolt (Beyond) A",
    "type": "Bolt - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Heater Shield (Legendary) A",
    "type": "Shield - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Blessed Tome (Legendary) A",
    "type": "Tome - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Leather Gloves (Immortal) A",
    "type": "Gloves - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Rune Orb (Immortal) A",
    "type": "Orb - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Great Axe (Beyond) A",
    "type": "Axe - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Long Crossbow (Legendary) A",
    "type": "Crossbow - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Complete Crossbow (Immortal) A",
    "type": "Crossbow - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Gale Arrow (Legendary) A",
    "type": "Arrow - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Bronze Ring (Legendary) A",
    "type": "Ring - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "War Hatchet (Arcana) A",
    "type": "Hatchet - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Exceptional Crossbow (Immortal) A",
    "type": "Crossbow - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Chain Gloves (Immortal) A",
    "type": "Gloves - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Brilliant Orb (Legendary) A",
    "type": "Orb - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "War Boots (Legendary) A",
    "type": "Boots - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Chain Helmet (Legendary) A",
    "type": "Helmet - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Empire Gloves (Immortal) A",
    "type": "Gloves - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Skeleton Bone",
    "type": "Engraving Material",
    "category": "Engraving"
  },
  {
    "name": "Bastard Sword (Immortal) A",
    "type": "Sword - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Mystic Gloves (Immortal) A",
    "type": "Gloves - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Devout Scepter (Legendary) A",
    "type": "Scepter - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Knight's Armor (Legendary) A",
    "type": "Armor - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Fate Helmet (Legendary) A",
    "type": "Helmet - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Rune Bolt (Immortal) A",
    "type": "Bolt - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Haste Bolt (Immortal) A",
    "type": "Bolt - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "War Axe (Arcana) A",
    "type": "Axe - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Rune Bolt (Arcana) A",
    "type": "Bolt - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Fate Axe (Beyond) A",
    "type": "Axe - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Ethereal Ring (Beyond) A",
    "type": "Ring - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Fate Bolt (Arcana) A",
    "type": "Bolt - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Iron Scepter (Legendary) A",
    "type": "Scepter - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Elite Bow (Immortal) A",
    "type": "Bow - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Dimensional Boots (Legendary) A",
    "type": "Boots - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Prayer Tome (Immortal) A",
    "type": "Tome - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Hunter's Bolt (Immortal) A",
    "type": "Bolt - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Rune Plate (Immortal) A",
    "type": "Armor - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Mystic Crossbow (Legendary) A",
    "type": "Crossbow - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Magic Orb (Immortal) A",
    "type": "Orb - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Elite Hatchet (Beyond) A",
    "type": "Hatchet - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Ethereal Earring (Beyond) A",
    "type": "Earing - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Herald Staff (Legendary) A",
    "type": "Staff - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Short Bow (Legendary) A",
    "type": "Bow - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Barbed Arrow (Legendary) A",
    "type": "Arrow - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Composite Bow (Legendary) A",
    "type": "Bow - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Dimensional Orb (Legendary) A",
    "type": "Orb - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Devout Scepter (Immortal) A",
    "type": "Scepter - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Wooden Arrow (Immortal) A",
    "type": "Arrow - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Barbed Bolt (Immortal) A",
    "type": "Bolt - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Bronze Bracer (Legendary) A",
    "type": "Bracer - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Dimensional Shield (Legendary) A",
    "type": "Shield - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Dimensional Axe (Legendary) A",
    "type": "Axe - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Tiger Eye Earring (Legendary) A",
    "type": "Earing - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Limitless Crossbow (Legendary) A",
    "type": "Crossbow - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Short Bolt (Legendary) A",
    "type": "Bolt - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Fate Axe (Arcana) A",
    "type": "Axe - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Elder Orb (Legendary) A",
    "type": "Orb - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Steel Axe (Arcana) A",
    "type": "Axe - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "War Bow (Legendary) A",
    "type": "Bow - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Buckler (Legendary) A",
    "type": "Shield - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Shine Gloves (Legendary) A",
    "type": "Gloves - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Limitless Axe (Beyond) A",
    "type": "Axe - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Rune Bolt (Legendary) A",
    "type": "Bolt - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Wooden Shield (Legendary) A",
    "type": "Shield - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Limitless Scepter (Immortal) A",
    "type": "Scepter - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Complete Crossbow (Legendary) A",
    "type": "Crossbow - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Mystic Hatchet (Arcana) A",
    "type": "Hatchet - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Limitless Hatchet (Immortal) A",
    "type": "Hatchet - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Buckler (Immortal) A",
    "type": "Shield - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Moonstone Pendant (Beyond) A",
    "type": "Amulet - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Dimensional Hatchet (Beyond) A",
    "type": "Hatchet - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Void Staff (Legendary) A",
    "type": "Staff - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Fate Sword (Legendary) A",
    "type": "Sword - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Exceptional Crossbow (Legendary) A",
    "type": "Crossbow - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Dimensional Hatchet (Legendary) A",
    "type": "Hatchet - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Dimensional Arrow (Celestial) A",
    "type": "Arrow - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Celestial Pearl",
    "type": "Decoration Material",
    "category": "Decoration"
  },
  {
    "name": "Shine Boots (Celestial) A",
    "type": "Boots - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Dimensional Gloves (Celestial) A",
    "type": "Gloves - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Wooden Axe (Immortal) A",
    "type": "Axe - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Fear Bolt (Immortal) A",
    "type": "Bolt - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Steel Hatchet (Legendary) A",
    "type": "Hatchet - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Battle Hatchet (Legendary) A",
    "type": "Hatchet - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Limitless Hatchet (Beyond) A",
    "type": "Hatchet - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Dimensional Shield (Celestial) A",
    "type": "Shield - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Fighter's Helmet (Cosmic) A",
    "type": "Helmet - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Sacred Staff (Celestial) A",
    "type": "Staff - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Dimensional Armor (Divine) A",
    "type": "Armor - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Short Hatchet (Legendary) A",
    "type": "Hatchet - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "War Hatchet (Legendary) A",
    "type": "Hatchet - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Short Crossbow (Legendary) A",
    "type": "Crossbow - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Radiant Shield (Divine) A",
    "type": "Shield - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Leather Hatchet (Legendary) A",
    "type": "Hatchet - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Leather Crossbow (Legendary) A",
    "type": "Crossbow - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Fighter's Helmet (Divine) A",
    "type": "Helmet - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Moonstone",
    "type": "Crafting Material",
    "category": "Crafting"
  },
  {
    "name": "Sunstone",
    "type": "Crafting Material",
    "category": "Crafting"
  },
  {
    "name": "Iron Axe (Immortal) A",
    "type": "Axe - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Emerald Bracer (Beyond) A",
    "type": "Bracer - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Iron Bolt (Legendary) A",
    "type": "Bolt - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Steel Hatchet (Immortal) A",
    "type": "Hatchet - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Short Hatchet (Immortal) A",
    "type": "Hatchet - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Short Bolt (Immortal) A",
    "type": "Bolt - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Wooden Arrow (Legendary) A",
    "type": "Arrow - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Battle Hatchet (Immortal) A",
    "type": "Hatchet - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Iron Crossbow (Legendary) A",
    "type": "Crossbow - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Elite Hatchet (Immortal) A",
    "type": "Hatchet - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Battle Axe (Legendary) A",
    "type": "Axe - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Copper Bracer (Legendary) A",
    "type": "Bracer - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Wooden Axe (Legendary) A",
    "type": "Axe - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Magic Orb (Legendary) A",
    "type": "Orb - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Copper Ring (Legendary) A",
    "type": "Ring - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Fate Axe (Legendary) A",
    "type": "Axe - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Elite Crossbow (Legendary) A",
    "type": "Crossbow - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Mystic Hatchet (Beyond) A",
    "type": "Hatchet - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "War Hatchet (Immortal) A",
    "type": "Hatchet - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Great Axe (Legendary) A",
    "type": "Axe - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Fate Bolt (Legendary) A",
    "type": "Bolt - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Steel Axe (Legendary) A",
    "type": "Axe - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Elite Hatchet (Legendary) A",
    "type": "Hatchet - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Iron Axe (Legendary) A",
    "type": "Axe - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Beast Bolt (Arcana) A",
    "type": "Bolt - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Long Hatchet (Immortal) A",
    "type": "Hatchet - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Battle Hatchet (Beyond) A",
    "type": "Hatchet - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "War Shield (Legendary) A",
    "type": "Shield - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Rune Axe (Immortal) A",
    "type": "Axe - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "War Axe (Immortal) A",
    "type": "Axe - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Mystic Hatchet (Legendary) A",
    "type": "Hatchet - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Long Sword (Legendary) A",
    "type": "Sword - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Radiant Shield (Legendary) A",
    "type": "Shield - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Amber Ring (Arcana) A",
    "type": "Ring - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Copper Amulet (Immortal) A",
    "type": "Amulet - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Arcane Orb (Legendary) A",
    "type": "Orb - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Iron Bolt (Immortal) A",
    "type": "Bolt - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Mystic Orb (Legendary) A",
    "type": "Orb - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Short Crossbow (Immortal) A",
    "type": "Crossbow - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Wooden Staff (Legendary) A",
    "type": "Staff - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Elite Hatchet (Immortal) A",
    "type": "Hatchet - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Great Axe (Legendary) A",
    "type": "Axe - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Novice Scepter (Legendary) A",
    "type": "Scepter - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Limitless Scepter (Legendary) A",
    "type": "Scepter - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Scroll of Beyond Inscription",
    "type": "Inscription Material",
    "category": "Inscription"
  },
  {
    "name": "War Axe (Legendary) A",
    "type": "Axe - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Rune Arrow (Legendary) A",
    "type": "Arrow - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "War Shield (Legendary) A",
    "type": "Shield - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Barbed Bolt (Arcana) A",
    "type": "Bolt - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Wooden Staff (Legendary) A",
    "type": "Staff - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Steel Hatchet (Arcana) A",
    "type": "Hatchet - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Mystic Hatchet (Immortal) A",
    "type": "Hatchet - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Mystic Orb (Legendary) A",
    "type": "Orb - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Short Crossbow (Immortal) A",
    "type": "Crossbow - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Iron Bolt (Immortal) A",
    "type": "Bolt - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Barbed Bolt (Arcana) A",
    "type": "Bolt - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Limitless Axe (Immortal) A",
    "type": "Axe - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Leather Hatchet (Immortal) A",
    "type": "Hatchet - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Sage Staff (Legendary) A",
    "type": "Staff - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Vengeance Sword (Beyond) A",
    "type": "Sword - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Battle Axe (Immortal) A",
    "type": "Axe - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Ruby Pendant (Arcana) A",
    "type": "Amulet - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Leather Hatchet (Immortal) A",
    "type": "Hatchet - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Sage Staff (Legendary) A",
    "type": "Staff - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Leather Crossbow (Immortal) A",
    "type": "Crossbow - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Warrior's Tome (Legendary) A",
    "type": "Tome - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Mystic Shield (Legendary) A",
    "type": "Shield - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Heavy Shield (Legendary) A",
    "type": "Shield - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Wooden Boots (Legendary) A",
    "type": "Boots - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Tiger Eye Earring (Arcana) A",
    "type": "Earing - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Radiant Shield (Legendary) A",
    "type": "Shield - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Limitless Hatchet (Arcana) A",
    "type": "Hatchet - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Rune Orb (Legendary) A",
    "type": "Orb - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Empire Helmet (Legendary) A",
    "type": "Helmet - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Vengeance Sword (Beyond) A",
    "type": "Sword - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Wooden Boots (Legendary) A",
    "type": "Boots - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Tiger Eye Earring (Arcana) A",
    "type": "Earing - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Fear Bolt (Legendary) A",
    "type": "Bolt - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Mystic Orb (Beyond) A",
    "type": "Orb - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Shine Boots (Legendary) A",
    "type": "Boots - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Empire Helmet (Legendary) A",
    "type": "Helmet - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Sacred Staff (Legendary) A",
    "type": "Staff - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Limitless Crossbow (Arcana) A",
    "type": "Crossbow - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Wooden Helmet (Legendary) A",
    "type": "Helmet - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Rune Scepter (Legendary) A",
    "type": "Scepter - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Long Crossbow (Immortal) A",
    "type": "Crossbow - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "Dusk Bow (Legendary) A",
    "type": "Bow - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Battle Hatchet (Arcana) A",
    "type": "Hatchet - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Great Sword (Legendary) A",
    "type": "Sword - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Shine Boots (Legendary) A",
    "type": "Boots - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Celestial Earring (Arcana) A",
    "type": "Earing - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Knight Sword (Immortal) A",
    "type": "Sword - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Copper Earring (Legendary) A",
    "type": "Earing - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Wooden Armor (Legendary) A",
    "type": "Armor - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "War Helmet (Legendary) A",
    "type": "Helmet - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Arcane Orb (Immortal) A",
    "type": "Orb - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Rapier (Legendary) A",
    "type": "Sword - Lv. 10",
    "category": "Gear"
  },
  {
    "name": "War Tome (Beyond) A",
    "type": "Tome - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Rune Boots (Legendary) A",
    "type": "Boots - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Rune Sword (Legendary) A",
    "type": "Sword - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Fate Scepter (Legendary) A",
    "type": "Scepter - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Azure Staff (Legendary) A",
    "type": "Staff - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Prayer Tome (Legendary) A",
    "type": "Tome - Lv. 1",
    "category": "Gear"
  },
  {
    "name": "Ethereal Earring (Arcana) A",
    "type": "Earing - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Rune Arrow (Immortal) A",
    "type": "Arrow - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Limitless Bow (Legendary) A",
    "type": "Bow - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "War Gloves (Legendary) A",
    "type": "Gloves - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Amethyst Ring (Legendary) A",
    "type": "Ring - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Knight Boots (Legendary) A",
    "type": "Boots - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Rune Gloves (Legendary) A",
    "type": "Gloves - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Empire Tome (Legendary) A",
    "type": "Tome - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Ruby Pendant (Immortal) A",
    "type": "Amulet - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Eclipse Bracer (Beyond) A",
    "type": "Bracer - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Fate Tome (Beyond) A",
    "type": "Tome - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Ethereal Earring (Arcana) A",
    "type": "Earing - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Rune Arrow (Immortal) A",
    "type": "Arrow - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Limitless Bow (Legendary) A",
    "type": "Bow - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "War Gloves (Legendary) A",
    "type": "Gloves - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Mystic Armor (Legendary) A",
    "type": "Armor - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Amethyst Ring (Legendary) A",
    "type": "Ring - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Limitless Bow (Beyond) A",
    "type": "Bow - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Vengeance Sword (Legendary) A",
    "type": "Sword - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Comet Staff (Immortal) A",
    "type": "Staff - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Rune Helmet (Legendary) A",
    "type": "Helmet - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "War Armor (Legendary) A",
    "type": "Armor - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Sacred Scepter (Legendary) A",
    "type": "Scepter - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Mystic Bow (Immortal) A",
    "type": "Bow - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Haste Arrow (Legendary) A",
    "type": "Arrow - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Void Staff (Immortal) A",
    "type": "Staff - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Rune Tome (Beyond) A",
    "type": "Tome - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Fate Scepter (Immortal) A",
    "type": "Scepter - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "War Shield (Immortal) A",
    "type": "Shield - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Iron Bolt (Beyond) A",
    "type": "Bolt - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Mystic Armor (Beyond) A",
    "type": "Armor - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Rune Boots (Immortal) A",
    "type": "Boots - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Empire Boots (Legendary) A",
    "type": "Boots - Lv. 5",
    "category": "Gear"
  },
  {
    "name": "Dimensional Helmet (Arcana) A",
    "type": "Helmet - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Rune Scepter (Immortal) A",
    "type": "Scepter - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Bastard Sword (Legendary) A",
    "type": "Sword - Lv. 15",
    "category": "Gear"
  },
  {
    "name": "Wood",
    "type": "Crafting Material",
    "category": "Crafting"
  },
  {
    "name": "Shine Armor (Legendary) A",
    "type": "Armor - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Limitless Axe (Legendary) A",
    "type": "Axe - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Ethereal Bracer (Arcana) A",
    "type": "Bracer - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Mystic Bow (Legendary) A",
    "type": "Bow - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Eclipse Bracer (Beyond) A",
    "type": "Bracer - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Comet Staff (Legendary) A",
    "type": "Staff - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Limitless Bow (Beyond) A",
    "type": "Bow - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Vengeance Sword (Legendary) A",
    "type": "Sword - Lv. 65",
    "category": "Gear"
  },
  {
    "name": "Comet Staff (Immortal) A",
    "type": "Staff - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Rune Helmet (Legendary) A",
    "type": "Helmet - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Azure Staff (Legendary) A",
    "type": "Staff - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Rune Gloves (Legendary) A",
    "type": "Gloves - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Dusk Bow (Legendary) A",
    "type": "Bow - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Fate Scepter (Legendary) A",
    "type": "Scepter - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Mystic Gloves (Legendary) A",
    "type": "Gloves - Lv. 50",
    "category": "Gear"
  },
  {
    "name": "Heavy Shield (Legendary) A",
    "type": "Shield - Lv. 20",
    "category": "Gear"
  },
  {
    "name": "Rune Sword (Legendary) A",
    "type": "Sword - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Dimensional Helmet (Arcana) A",
    "type": "Helmet - Lv. 80",
    "category": "Gear"
  },
  {
    "name": "Rune Scepter (Legendary) A",
    "type": "Scepter - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "Crimson Bracer (Legendary) A",
    "type": "Bracer - Lv. 40",
    "category": "Gear"
  },
  {
    "name": "War Helmet (Legendary) A",
    "type": "Helmet - Lv. 30",
    "category": "Gear"
  },
  {
    "name": "Ruby Pendant (Immortal) A",
    "type": "Amulet - Lv. 40",
    "category": "Gear"
  }
];

export const APPID = 3678970;
export const CURRENCY_JPY = 8;
