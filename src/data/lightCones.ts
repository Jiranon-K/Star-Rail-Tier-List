export type LightConePath =
  | "ทำลายล้าง"
  | "ล่าสังหาร"
  | "ปัญญา"
  | "ประสาน"
  | "ลบล้าง"
  | "อนุรักษ์"
  | "เฟื่องฟู"
  | "ความทรงจำ";

export type LightCone = {
  id: number;
  name: string;
  rarity: 3 | 4 | 5;
  path: LightConePath;
  imageUrl: string;
};

// ข้อมูล Light Cone 
export const lightCones: LightCone[] = [
  {
    id: 1,
    name: "A Grounded Ascent",
    rarity: 5,
    path: "ประสาน",
    imageUrl: "/light-cone/Light_Cone_A_Grounded_Ascent_Artwork.webp",
  },
  {
    id: 2,
    name: "A Secret Vow",
    rarity: 4,
    path: "ทำลายล้าง",
    imageUrl: "/light-cone/Light_Cone_A_Secret_Vow.webp",
  },
  {
    id: 3,
    name: "Adversarial",
    rarity: 3,
    path: "ล่าสังหาร",
    imageUrl: "/light-cone/Light_Cone_Adversarial.webp",
  },
  {
    id: 4,
    name: "After the Charmony Fall",
    rarity: 4,
    path: "ปัญญา",
    imageUrl: "/light-cone/Light_Cone_After_the_Charmony_Fall.webp",
  },
  {
    id: 5,
    name: "Along the Passing Shore",
    rarity: 5,
    path: "ลบล้าง",
    imageUrl: "/light-cone/Light_Cone_Along_the_Passing_Shore.webp",
  },
  {
    id: 6,
    name: "Amber",
    rarity: 3,
    path: "อนุรักษ์",
    imageUrl: "/light-cone/Light_Cone_Amber.webp",
  },
  {
    id: 7,
    name: "An Instant Before A Gaze",
    rarity: 5,
    path: "ปัญญา",
    imageUrl: "/light-cone/Light_Cone_An_Instant_Before_A_Gaze.webp",
  },
  {
    id: 8,
    name: "Arrows",
    rarity: 3,
    path: "ล่าสังหาร",
    imageUrl: "/light-cone/Light_Cone_Arrows.webp",
  },
  {
    id: 9,
    name: "Baptism of Pure Thought",
    rarity: 5,
    path: "ล่าสังหาร",
    imageUrl: "/light-cone/Light_Cone_Baptism_of_Pure_Thought.webp",
  },
  {
    id: 10,
    name: "Before Dawn",
    rarity: 5,
    path: "ปัญญา",
    imageUrl: "/light-cone/Light_Cone_Before_Dawn.webp",
  },
  {
    id: 11,
    name: "Before the Tutorial Mission Starts",
    rarity: 4,
    path: "ลบล้าง",
    imageUrl: "/light-cone/Light_Cone_Before_the_Tutorial_Mission_Starts.webp",
  },
  {
    id: 12,
    name: "Boundless Choreo",
    rarity: 4,
    path: "ลบล้าง",
    imageUrl: "/light-cone/Light_Cone_Boundless_Choreo.webp",
  },
  {
    id: 13,
    name: "Brighter Than the Sun",
    rarity: 5,
    path: "ทำลายล้าง",
    imageUrl: "/light-cone/Light_Cone_Brighter_Than_the_Sun.webp",
  },
  {
    id: 14,
    name: "But the Battle Isn't Over",
    rarity: 5,
    path: "ประสาน",
    imageUrl: "/light-cone/Light_Cone_But_the_Battle_Over.webp",
  },
  {
    id: 15,
    name: "Carve the Moon, Weave the Clouds",
    rarity: 4,
    path: "ประสาน",
    imageUrl: "/light-cone/Light_Cone_Carve_the_MoonC_Weave_the_Clouds.webp",
  },
  {
    id: 16,
    name: "Chorus",
    rarity: 3,
    path: "ประสาน",
    imageUrl: "/light-cone/Light_Cone_Chorus.webp",
  },
  {
    id: 17,
    name: "Collapsing Sky",
    rarity: 3,
    path: "ทำลายล้าง",
    imageUrl: "/light-cone/Light_Cone_Collapsing_Sky.webp",
  },
  {
    id: 18,
    name: "Concert for Two",
    rarity: 4,
    path: "อนุรักษ์",
    imageUrl: "/light-cone/Light_Cone_Concert_for_Two.webp",
  },
  {
    id: 19,
    name: "Cornucopia",
    rarity: 3,
    path: "เฟื่องฟู",
    imageUrl: "/light-cone/Light_Cone_Cornucopia.webp",
  },
  {
    id: 20,
    name: "Cruising in the Stellar Sea",
    rarity: 5,
    path: "ล่าสังหาร",
    imageUrl: "/light-cone/Light_Cone_Cruising_in_the_Stellar_Sea.webp",
  },
  {
    id: 21,
    name: "Dance at Sunset",
    rarity: 5,
    path: "ทำลายล้าง",
    imageUrl: "/light-cone/Light_Cone_Dance_at_Sunset.webp",
  },
  {
    id: 22,
    name: "Dance! Dance! Dance!",
    rarity: 4,
    path: "ประสาน",
    imageUrl: "/light-cone/Light_Cone_Dance21_Dance.webp",
  },
  {
    id: 23,
    name: "Darting Arrow",
    rarity: 3,
    path: "ล่าสังหาร",
    imageUrl: "/light-cone/Light_Cone_Darting_Arrow.webp",
  },
  {
    id: 24,
    name: "Data Bank",
    rarity: 3,
    path: "ปัญญา",
    imageUrl: "/light-cone/Light_Cone_Data_Bank.webp",
  },
  {
    id: 25,
    name: "Day One of My New Life",
    rarity: 3,
    path: "อนุรักษ์",
    imageUrl: "/light-cone/Light_Cone_Day_One_of_My_New_Life.webp",
  },
  {
    id: 26,
    name: "Defense",
    rarity: 3,
    path: "อนุรักษ์",
    imageUrl: "/light-cone/Light_Cone_Defense.webp",
  },
  {
    id: 27,
    name: "Destiny's Threads Forewoven",
    rarity: 4,
    path: "อนุรักษ์",
    imageUrl: "/light-cone/Light_Cone_Destiny27s_Threads_Forewoven.webp",
  },
  {
    id: 28,
    name: "Destiny's Threads Forewoven",
    rarity: 4,
    path: "เฟื่องฟู",
    imageUrl: "/light-cone/Light_Cone_Dream27s_Montage.webp",
  },
  {
    id: 29,
    name: "Dreamville Adventure",
    rarity: 4,
    path: "ประสาน",
    imageUrl: "/light-cone/Light_Cone_Dreamville_Adventure.webp",
  },
  {
    id: 30,
    name: "Earthly Escapade",
    rarity: 5,
    path: "ประสาน",
    imageUrl: "/light-cone/Light_Cone_Earthly_Escapade.webp",
  },
  {
    id: 31,
    name: "Echoes of the Coffin",
    rarity: 5,
    path: "เฟื่องฟู",
    imageUrl: "/light-cone/Light_Cone_Echoes_of_the_Coffin.webp",
  },
  {
    id: 32,
    name: "Eternal Calculus",
    rarity: 5,
    path: "ปัญญา",
    imageUrl: "/light-cone/Light_Cone_Eternal_Calculus.webp",
  },
  {
    id: 33,
    name: "Eyes of the Prey",
    rarity: 4,
    path: "ลบล้าง",
    imageUrl: "/light-cone/Light_Cone_Eyes_of_the_Prey.webp",
  },
  {
    id: 34,
    name: "Fermata",
    rarity: 4,
    path: "ลบล้าง",
    imageUrl: "/light-cone/Light_Cone_Fermata.webp",
  },
  {
    id: 35,
    name: "Final Victor",
    rarity: 4,
    path: "ล่าสังหาร",
    imageUrl: "/light-cone/Light_Cone_Final_Victor.webp",
  },
  {
    id: 36,
    name: "Fine Fruit",
    rarity: 3,
    path: "เฟื่องฟู",
    imageUrl: "/light-cone/Light_Cone_Fine_Fruit.webp",
  },
  {
    id: 37,
    name: "Flame of Blood, Blaze My Path",
    rarity: 5,
    path: "ทำลายล้าง",
    imageUrl: "/light-cone/Light_Cone_Flame_of_Blood_Blaze_My_Path.webp",
  },
  {
    id: 38,
    name: "Flames Afar",
    rarity: 4,
    path: "ทำลายล้าง",
    imageUrl: "/light-cone/Light_Cone_Flames_Afar.webp",
  },
  {
    id: 39,
    name: "Flowing Nightglow",
    rarity: 5,
    path: "ประสาน",
    imageUrl: "/light-cone/Light_Cone_Flowing_Nightglow.webp",
  },
  {
    id: 40,
    name: "For Tomorrow's Journey",
    rarity: 4,
    path: "ประสาน",
    imageUrl: "/light-cone/Light_Cone_For_Tomorrow_Journey.webp",
  }
];

export const getLightConesByRarity = (rarity: 3 | 4 | 5): LightCone[] => {
  return lightCones.filter((cone) => cone.rarity === rarity);
};

export const getLightConesByPath = (path: LightConePath): LightCone[] => {
  return lightCones.filter((cone) => cone.path === path);
};

export const getAllPaths = (): LightConePath[] => {
  return Array.from(new Set(lightCones.map((cone) => cone.path)));
};
