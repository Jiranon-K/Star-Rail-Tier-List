export type CharacterElement = 'กายภาพ' | 'ไฟ' | 'น้ำแข็ง' | 'สายฟ้า' | 'ลม' | 'ควอนตัม' | 'จินตภาพ';

export type CharacterPath = 'ทำลายล้าง' | 'ล่าสังหาร' | 'ปัญญา' | 'ประสาน' | 'ลบล้าง' | 'อนุรักษ์' | 'เฟื่องฟู' | 'ความทรงจำ';

export type Character = {
  id: number;
  name: string;
  rarity: 4 | 5;
  path: CharacterPath;
  element: CharacterElement;
  imageUrl: string; 
};

// ข้อมูลตัวละคร Honkai Star Rail
export const characters: Character[] = [
  { id: 1, name: "Acheron", rarity: 5, path: "ลบล้าง", element: "สายฟ้า", imageUrl: "/character/Character_Acheron_Splash_Art.webp" },
  { id: 2, name: "Argenti", rarity: 5, path: "ปัญญา", element: "กายภาพ", imageUrl: "/character/Character_Argenti_Splash_Art.webp" },
  { id: 3, name: "Arlan", rarity: 4, path: "ทำลายล้าง", element: "สายฟ้า", imageUrl: "/character/Character_Arlan_Splash_Art.webp" },
  { id: 4, name: "Asta", rarity: 4, path: "ประสาน", element: "ไฟ", imageUrl: "/character/Character_Asta_Splash_Art.webp" },
  { id: 5, name: "Aventurine", rarity: 5, path: "อนุรักษ์", element: "จินตภาพ", imageUrl: "/character/Character_Aventurine_Splash_Art.webp" },
  { id: 29, name: "Aglaea", rarity: 4, path: "ความทรงจำ", element: "สายฟ้า", imageUrl: "/character/Character_Aglaea_Splash_Art.webp" },
  { id: 6, name: "Bailu", rarity: 5, path: "เฟื่องฟู", element: "สายฟ้า", imageUrl: "/character/Character_Bailu_Splash_Art.webp" },
  { id: 7, name: "Black Swan", rarity: 5, path: "ลบล้าง", element: "ลม", imageUrl: "/character/Character_Black_Swan_Splash_Art.webp" },
  { id: 8, name: "Blade", rarity: 5, path: "ทำลายล้าง", element: "ลม", imageUrl: "/character/Character_Blade_Splash_Art.webp" },
  { id: 9, name: "Boothill", rarity: 5, path: "ล่าสังหาร", element: "กายภาพ", imageUrl: "/character/Character_Boothill_Splash_Art.webp" },
  { id: 10, name: "Bronya", rarity: 5, path: "ประสาน", element: "ลม", imageUrl: "/character/Character_Bronya_Splash_Art.webp" },
  { id: 11, name: "Clara", rarity: 5, path: "ทำลายล้าง", element: "กายภาพ", imageUrl: "/character/Character_Clara_Splash_Art.webp" },
  { id: 12, name: "Dan Heng", rarity: 4, path: "ล่าสังหาร", element: "ลม", imageUrl: "/character/Character_Dan_Heng_Splash_Art.webp" },
  { id: 13, name: "Dan Heng - จ้าวยลจันทรา", rarity: 5, path: "ทำลายล้าง", element: "จินตภาพ", imageUrl: "/character/Character_Dan_Heng_Imbibitor_Lunae_Splash_Art.webp" },
  { id: 14, name: "Dr. Ratio", rarity: 5, path: "ปัญญา", element: "ควอนตัม", imageUrl: "/character/Character_Dr._Ratio_Splash_Art.webp" },
  { id: 15, name: "Fu Xuan", rarity: 5, path: "อนุรักษ์", element: "ควอนตัม", imageUrl: "/character/Character_Fu_Xuan_Splash_Art.webp" },
  { id: 30, name: "Fugue", rarity: 5, path: "ลบล้าง", element: "ไฟ", imageUrl: "/character/Character_Fugue_Splash_Art.webp" },
  { id: 31, name: "Gallagher", rarity: 4, path: "เฟื่องฟู", element: "ไฟ", imageUrl: "/character/Character_Gallagher_Splash_Art.webp" },
  { id: 16, name: "Gepard", rarity: 5, path: "อนุรักษ์", element: "น้ำแข็ง", imageUrl: "/character/Character_Gepard_Splash_Art.webp" },
  { id: 17, name: "Guinaifen", rarity: 4, path: "ลบล้าง", element: "ไฟ", imageUrl: "/character/Character_Guinaifen_Splash_Art.webp" },
  { id: 32, name: "Hanya", rarity: 4, path: "ประสาน", element: "กายภาพ", imageUrl: "/character/Character_Hanya_Splash_Art.webp" },
  { id: 18, name: "Herta", rarity: 4, path: "ทำลายล้าง", element: "น้ำแข็ง", imageUrl: "/character/Character_Herta_Splash_Art.webp" },
  { id: 19, name: "Himeko", rarity: 5, path: "ปัญญา", element: "ไฟ", imageUrl: "/character/Character_Himeko_Splash_Art.webp" },
  { id: 20, name: "Hook", rarity: 4, path: "ทำลายล้าง", element: "ไฟ", imageUrl: "/character/Character_Hook_Splash_Art.webp" },
  { id: 33, name: "Huohuo", rarity: 4, path: "เฟื่องฟู", element: "ลม", imageUrl: "/character/Character_Huohuo_Splash_Art.webp" },
  { id: 34, name: "Jade", rarity: 5, path: "ปัญญา", element: "ควอนตัม", imageUrl: "/character/Character_Jade_Splash_Art.webp" },
  { id: 35, name: "Jiaoqiu", rarity: 5, path: "ลบล้าง", element: "ไฟ", imageUrl: "/character/Character_Jiaoqiu_Splash_Art.webp" },
  { id: 21, name: "Jing Yuan", rarity: 5, path: "ปัญญา", element: "สายฟ้า", imageUrl: "/character/Character_Jing_Yuan_Splash_Art.webp" },
  { id: 36, name: "Jingliu", rarity: 5, path: "ทำลายล้าง", element: "น้ำแข็ง", imageUrl: "/character/Character_Jingliu_Splash_Art.webp" },
  { id: 22, name: "Kafka", rarity: 5, path: "ลบล้าง", element: "สายฟ้า", imageUrl: "/character/Character_Kafka_Splash_Art.webp" },
  { id: 37, name: "Lingsha", rarity: 4, path: "เฟื่องฟู", element: "ไฟ", imageUrl: "/character/Character_Lingsha_Splash_Art.webp" },
  { id: 23, name: "Luka", rarity: 4, path: "ทำลายล้าง", element: "กายภาพ", imageUrl: "/character/Character_Luka_Splash_Art.webp" },
  { id: 24, name: "Luocha", rarity: 5, path: "เฟื่องฟู", element: "จินตภาพ", imageUrl: "/character/Character_Luocha_Splash_Art.webp" },
  { id: 38, name: "Lynx", rarity: 4, path: "เฟื่องฟู", element: "ควอนตัม", imageUrl: "/character/Character_Lynx_Splash_Art.webp" },
  { id: 25, name: "March 7th", rarity: 4, path: "อนุรักษ์", element: "น้ำแข็ง", imageUrl: "/character/Character_March_7th_(Preservation)_Splash_Art.webp" },
  { id: 39, name: "March 7th The Hunt", rarity: 4, path: "ล่าสังหาร", element: "จินตภาพ", imageUrl: "/character/Character_March_7th_29_Splash_Art.webp" },
  { id: 26, name: "Misha", rarity: 4, path: "ทำลายล้าง", element: "กายภาพ", imageUrl: "/character/Character_Misha_Splash_Art.webp" },
  { id: 40, name: "Moze", rarity: 4, path: "ล่าสังหาร", element: "สายฟ้า", imageUrl: "/character/Character_Moze_Splash_Art.webp" },
  { id: 41, name: "Mydei", rarity: 4, path: "ทำลายล้าง", element: "จินตภาพ", imageUrl: "/character/Character_Mydei_Splash_Art.webp" },
  { id: 27, name: "Natasha", rarity: 4, path: "เฟื่องฟู", element: "กายภาพ", imageUrl: "/character/Character_Natasha_Splash_Art.webp" },
  { id: 28, name: "Pela", rarity: 4, path: "ลบล้าง", element: "น้ำแข็ง", imageUrl: "/character/Character_Pela_Splash_Art.webp" },
  { id: 42, name: "Qingque", rarity: 4, path: "ปัญญา", element: "ควอนตัม", imageUrl: "/character/Character_Qingque_Splash_Art.webp" },
  { id: 43, name: "Rappa", rarity: 5, path: "ปัญญา", element: "จินตภาพ", imageUrl: "/character/Character_Rappa_Splash_Art.webp" },
  { id: 44, name: "Robin", rarity: 4, path: "ประสาน", element: "กายภาพ", imageUrl: "/character/Character_Robin_Splash_Art.webp" },
  { id: 45, name: "Ruan Mei", rarity: 5, path: "ประสาน", element: "น้ำแข็ง", imageUrl: "/character/Character_Ruan_Mei_Splash_Art.webp" },
  { id: 46, name: "Sampo", rarity: 4, path: "ลบล้าง", element: "ลม", imageUrl: "/character/Character_Sampo_Splash_Art.webp" },
  { id: 47, name: "Seele", rarity: 5, path: "ล่าสังหาร", element: "ควอนตัม", imageUrl: "/character/Character_Seele_Splash_Art.webp" },
  { id: 48, name: "Serval", rarity: 4, path: "ปัญญา", element: "สายฟ้า", imageUrl: "/character/Character_Serval_Splash_Art.webp" },
  { id: 49, name: "Silver Wolf", rarity: 5, path: "ลบล้าง", element: "ควอนตัม", imageUrl: "/character/Character_Silver_Wolf_Splash_Art.webp" },
  { id: 50, name: "Sparkle", rarity: 5, path: "ประสาน", element: "ควอนตัม", imageUrl: "/character/Character_Sparkle_Splash_Art.webp" },
  { id: 51, name: "Sunday", rarity: 4, path: "ประสาน", element: "จินตภาพ", imageUrl: "/character/Character_Sunday_Splash_Art.webp" },
  { id: 52, name: "Sushang", rarity: 4, path: "ล่าสังหาร", element: "กายภาพ", imageUrl: "/character/Character_Sushang_Splash_Art.webp" },
  { id: 53, name: "The Herta", rarity: 5, path: "ปัญญา", element: "น้ำแข็ง", imageUrl: "/character/Character_The_Herta_Splash_Art.webp" },
  { id: 54, name: "Tingyun", rarity: 4, path: "ประสาน", element: "สายฟ้า", imageUrl: "/character/Character_Tingyun_Splash_Art.webp" },
  { id: 55, name: "Topaz & Numby", rarity: 5, path: "ล่าสังหาร", element: "ไฟ", imageUrl: "/character/Character_Topaz_and_Numby_Splash_Art.webp" },
  { id: 56, name: "Trailblazer", rarity: 5, path: "ทำลายล้าง", element: "กายภาพ", imageUrl: "/character/Character_Trailblazer_29_Destruction_Splash_Art.webp" },
  { id: 57, name: "Trailblazer", rarity: 5, path: "อนุรักษ์", element: "ไฟ", imageUrl: "/character/Character_Trailblazer_29_Destruction_Splash_Art.webp" },
  { id: 58, name: "Trailblazer • Harmony", rarity: 5, path: "ประสาน", element: "จินตภาพ", imageUrl: "/character/Character_Trailblazer_29_Destruction_Splash_Art.webp" },
  { id: 59, name: "Trailblazer • Remembrance", rarity: 5, path: "ความทรงจำ", element: "น้ำแข็ง", imageUrl: "/character/Character_Trailblazer_29_Destruction_Splash_Art.webp" },
  { id: 60, name: "Tribbie", rarity: 4, path: "ประสาน", element: "ควอนตัม", imageUrl: "/character/Character_Tribbie_Splash_Art.webp" },
  { id: 61, name: "Welt", rarity: 5, path: "ลบล้าง", element: "จินตภาพ", imageUrl: "/character/Character_Welt_Splash_Art.webp" },
  { id: 62, name: "Xueyi", rarity: 5, path: "ทำลายล้าง", element: "ควอนตัม", imageUrl: "/character/Character_Xueyi_Splash_Art.webp" },
  { id: 63, name: "Yanqing", rarity: 5, path: "ล่าสังหาร", element: "น้ำแข็ง", imageUrl: "/character/Character_Yanqing_Splash_Art.webp" },
  { id: 64, name: "Yukong", rarity: 4, path: "ประสาน", element: "จินตภาพ", imageUrl: "/character/Character_Yukong_Splash_Art.webp" },
  { id: 65, name: "Yunli", rarity: 5, path: "ทำลายล้าง", element: "กายภาพ", imageUrl: "/character/Character_Yunli_Splash_Art.webp" },
  { id: 66, name: "Feixiao", rarity: 5, path: "ล่าสังหาร", element: "ลม", imageUrl: "/character/Character_Feixiao_Splash_Art.webp" },
  { id: 67, name: "Firefly", rarity: 5, path: "ทำลายล้าง", element: "ไฟ", imageUrl: "/character/Character_Firefly_Splash_Art.webp" }
];


export const getCharactersByRarity = (rarity: 4 | 5): Character[] => {
  return characters.filter(char => char.rarity === rarity);
};

export const getCharactersByPath = (path: CharacterPath): Character[] => {
  return characters.filter(char => char.path === path);
};

export const getCharactersByElement = (element: CharacterElement): Character[] => {
  return characters.filter(char => char.element === element);
};


export const getAllPaths = (): CharacterPath[] => {
  return Array.from(new Set(characters.map(char => char.path)));
};

export const getAllElements = (): CharacterElement[] => {
  return Array.from(new Set(characters.map(char => char.element)));
};