export type CharacterElement = 'กายภาพ' | 'ไฟ' | 'น้ำแข็ง' | 'สายฟ้า' | 'ลม' | 'ควอนตัม' | 'จินตภาพ';

export type CharacterPath = 'ทำลายล้าง' | 'ล่าสังหาร' | 'ปัญญา' | 'ประสาน' | 'ลบล้าง' | 'อนุรักษ์' | 'เฟื่องฟู';

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
  { id: 1, name: "Acheron", rarity: 5, path: "ลบล้าง", element: "สายฟ้า", imageUrl: "/character/Character_Acheron_Icon.webp" },
  { id: 2, name: "Argenti", rarity: 5, path: "ปัญญา", element: "กายภาพ", imageUrl: "/api/placeholder/240/320" },
  { id: 3, name: "Arlan", rarity: 4, path: "ทำลายล้าง", element: "สายฟ้า", imageUrl: "/api/placeholder/240/320" },
  { id: 4, name: "Asta", rarity: 4, path: "ประสาน", element: "ไฟ", imageUrl: "/api/placeholder/240/320" },
  { id: 5, name: "Aventurine", rarity: 5, path: "อนุรักษ์", element: "จินตภาพ", imageUrl: "/api/placeholder/240/320" },
  { id: 6, name: "Bailu", rarity: 5, path: "เฟื่องฟู", element: "สายฟ้า", imageUrl: "/api/placeholder/240/320" },
  { id: 7, name: "Black Swan", rarity: 5, path: "ลบล้าง", element: "ลม", imageUrl: "/api/placeholder/240/320" },
  { id: 8, name: "Blade", rarity: 5, path: "ทำลายล้าง", element: "ลม", imageUrl: "/api/placeholder/240/320" },
  { id: 9, name: "Boothill", rarity: 5, path: "ล่าสังหาร", element: "กายภาพ", imageUrl: "/api/placeholder/240/320" },
  { id: 10, name: "Bronya", rarity: 5, path: "ประสาน", element: "ลม", imageUrl: "/api/placeholder/240/320" },
  { id: 11, name: "Clara", rarity: 5, path: "ทำลายล้าง", element: "กายภาพ", imageUrl: "/api/placeholder/240/320" },
  { id: 12, name: "Dan Heng", rarity: 4, path: "ล่าสังหาร", element: "ลม", imageUrl: "/api/placeholder/240/320" },
  { id: 13, name: "Dan Heng - จ้าวยลจันทรา", rarity: 5, path: "ทำลายล้าง", element: "จินตภาพ", imageUrl: "/api/placeholder/240/320" },
  { id: 14, name: "Dr. Ratio", rarity: 5, path: "ปัญญา", element: "ควอนตัม", imageUrl: "/api/placeholder/240/320" },
  { id: 15, name: "Fu Xuan", rarity: 5, path: "อนุรักษ์", element: "ควอนตัม", imageUrl: "/api/placeholder/240/320" },
  { id: 16, name: "Gepard", rarity: 5, path: "อนุรักษ์", element: "น้ำแข็ง", imageUrl: "/api/placeholder/240/320" },
  { id: 17, name: "Guinaifen", rarity: 4, path: "ลบล้าง", element: "ไฟ", imageUrl: "/api/placeholder/240/320" },
  { id: 18, name: "Herta", rarity: 4, path: "ทำลายล้าง", element: "น้ำแข็ง", imageUrl: "/api/placeholder/240/320" },
  { id: 19, name: "Himeko", rarity: 5, path: "ปัญญา", element: "ไฟ", imageUrl: "/api/placeholder/240/320" },
  { id: 20, name: "Hook", rarity: 4, path: "ทำลายล้าง", element: "ไฟ", imageUrl: "/api/placeholder/240/320" },
  { id: 21, name: "Jing Yuan", rarity: 5, path: "ปัญญา", element: "สายฟ้า", imageUrl: "/api/placeholder/240/320" },
  { id: 22, name: "Kafka", rarity: 5, path: "ลบล้าง", element: "สายฟ้า", imageUrl: "/api/placeholder/240/320" },
  { id: 23, name: "Luka", rarity: 4, path: "ทำลายล้าง", element: "กายภาพ", imageUrl: "/api/placeholder/240/320" },
  { id: 24, name: "Luocha", rarity: 5, path: "เฟื่องฟู", element: "จินตภาพ", imageUrl: "/api/placeholder/240/320" },
  { id: 25, name: "March 7th", rarity: 4, path: "อนุรักษ์", element: "น้ำแข็ง", imageUrl: "/api/placeholder/240/320" },
  { id: 26, name: "Misha", rarity: 4, path: "ทำลายล้าง", element: "กายภาพ", imageUrl: "/api/placeholder/240/320" },
  { id: 27, name: "Natasha", rarity: 4, path: "เฟื่องฟู", element: "กายภาพ", imageUrl: "/api/placeholder/240/320" },
  { id: 28, name: "Pela", rarity: 4, path: "ลบล้าง", element: "น้ำแข็ง", imageUrl: "/api/placeholder/240/320" }
];

// กรองตัวละคร
export const getCharactersByRarity = (rarity: 4 | 5): Character[] => {
  return characters.filter(char => char.rarity === rarity);
};

export const getCharactersByPath = (path: CharacterPath): Character[] => {
  return characters.filter(char => char.path === path);
};

export const getCharactersByElement = (element: CharacterElement): Character[] => {
  return characters.filter(char => char.element === element);
};

// ดึงค่าที่เป็นไปได้ทั้งหมด
export const getAllPaths = (): CharacterPath[] => {
  return Array.from(new Set(characters.map(char => char.path)));
};

export const getAllElements = (): CharacterElement[] => {
  return Array.from(new Set(characters.map(char => char.element)));
};