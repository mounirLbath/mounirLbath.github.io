import React from "react";
import PhotoGallery, {
  type Photo,
  type PhotoGroup,
} from "../Components/PhotoGallery";
import ArtTile from "../Components/ArtTile";
import Title from "../Components/Title";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photography",
};

const page = () => {
  const images: Photo[] = [
    {
      src: "/photos/01.jpg",
      orientation: "landscape",
      description: "Milky Way over the mountains.",
      location: "Nendaz, Swiss Alps",
    },
    {
      src: "/photos/20.jpg",
      orientation: "landscape",
      description: "The Milky Way between rocky ridges.",
      location: "Lac d'Anterne, near Chamonix",
    },
    {
      src: "/photos/14.jpg",
      orientation: "portrait",
      description: "The Milky Way over an alpine meadow.",
      location: "Val Thorens, French Alps",
    },
    {
      src: "/photos/09.jpg",
      orientation: "portrait",
      description: "The Milky Way rising beside a cliff.",
      location: "Lac d'Anterne, near Chamonix",
    },
    {
      src: "/photos/25.jpg",
      orientation: "landscape",
      description: "A tent glowing under the stars.",
      location: "Lac d'Anterne, near Chamonix",
    },
    {
      src: "/photos/34.jpg",
      orientation: "landscape",
      description:
        "A sky full of stars, with the Andromeda Galaxy in the bottom left.",
      location: "Lac d'Anterne, near Chamonix",
    },
    {
      src: "/photos/15.jpg",
      orientation: "portrait",
      description: "A mountain ridge under the night sky.",
      location: "Tignes, French Alps",
    },
    {
      src: "/photos/18.jpg",
      orientation: "portrait",
      description: "The heart of the Milky Way.",
      location: "Tignes, French Alps",
    },
    {
      src: "/photos/12.jpg",
      orientation: "landscape",
      description: "Night sky over a mountain ski lift.",
      location: "Tignes, French Alps",
    },
    {
      src: "/photos/38.jpg",
      orientation: "landscape",
      description: "The Milky Way above the cliffs.",
      location: "Tignes, French Alps",
    },
    {
      src: "/photos/39.jpg",
      orientation: "portrait",
      description: "The Milky Way over a lone tree.",
      location: "Westhavelland Nature Park, Brandenburg",
    },
    {
      src: "/photos/42.jpg",
      orientation: "portrait",
      description: "A windmill silhouetted against the stars.",
      location: "Westhavelland Nature Park, Brandenburg",
    },
    {
      src: "/photos/26.jpg",
      orientation: "portrait",
      description: "Mont Blanc.",
      location: "French Alps",
    },
    {
      src: "/photos/29.jpg",
      orientation: "landscape",
      description: "Mont Blanc under a clear sky.",
      location: "Mont Blanc, French Alps",
    },
    {
      src: "/photos/33.jpg",
      orientation: "landscape",
      description: "Mont Blanc at golden hour.",
      location: "Lac d'Anterne, near Chamonix",
    },
    {
      src: "/photos/32.jpg",
      orientation: "landscape",
      description: "Clouds drifting past a peak at golden hour.",
      location: "Lac d'Anterne, near Chamonix",
    },
    {
      src: "/photos/27.jpg",
      orientation: "landscape",
      description: "Mountain silhouettes at dusk.",
      location: "Lac d'Anterne, near Chamonix",
    },
    {
      src: "/photos/02.jpg",
      orientation: "landscape",
      description: "A mountain stream tumbling over mossy rocks.",
      location: "Near Nendaz, Swiss Alps",
    },
    {
      src: "/photos/22.jpg",
      orientation: "landscape",
      description: "A fiery sunset over the hills.",
      location: "Near Lyon, France",
    },
    {
      src: "/photos/11.jpg",
      orientation: "landscape",
      description: "White chalk cliffs above the sea.",
      location: "Møns Klint, Denmark",
    },
    {
      src: "/photos/19.jpg",
      orientation: "landscape",
      description: "A tree clinging to the top of a chalk cliff.",
      location: "Møns Klint, Denmark",
    },
    {
      src: "/photos/35.jpg",
      orientation: "portrait",
      description: "A cliff edge above turquoise water.",
      location: "Møns Klint, Denmark",
    },
    {
      src: "/photos/13.jpg",
      orientation: "landscape",
      description: "Sun glinting on the sea along a beach.",
      location: "Cannes, France",
    },
    {
      src: "/photos/08.jpg",
      orientation: "landscape",
      description: "A lone post in still water.",
      location: "Lake Constance, on the Swiss–German border",
    },
    {
      src: "/photos/10.jpg",
      orientation: "portrait",
      description: "A bird perched atop a rock spire.",
      location: "Near Cannes, France",
    },
    {
      src: "/photos/36.jpg",
      orientation: "landscape",
      description: "A pebble beach at the water's edge.",
      location: "Møns Klint, Denmark",
    },
    {
      src: "/photos/31.jpg",
      orientation: "landscape",
      description: "Dark ripples on the water.",
    },
    {
      src: "/photos/04.jpg",
      orientation: "landscape",
      description: "Two cranes in flight.",
      location: "Camargue, France",
    },
    {
      src: "/photos/05.jpg",
      orientation: "landscape",
      description: "A flamingo wading in the lagoon.",
      location: "Camargue, France",
    },
    {
      src: "/photos/06.jpg",
      orientation: "portrait",
      description: "Looking up an autumn tree.",
      location: "Parc de la Tête d'Or, Lyon",
    },
    {
      src: "/photos/24.jpg",
      orientation: "landscape",
      description: "A seabird swimming in the mist.",
      location: "Møns Klint, Denmark",
    },
    {
      src: "/photos/03.jpg",
      orientation: "landscape",
      description: "Reeds catching the light.",
      location: "Camargue, France",
    },
    {
      src: "/photos/23.jpg",
      orientation: "landscape",
      description: "Green fields stretching to the horizon.",
      location: "On the road, Japan",
    },
    {
      src: "/photos/30.jpg",
      orientation: "landscape",
      description: "A river winding through misty fields.",
      location: "Japan",
    },
    {
      src: "/photos/21.jpg",
      orientation: "landscape",
      description: "An old tree shading a grass amphitheatre.",
      location: "Denmark",
    },
    {
      src: "/photos/43.jpg",
      orientation: "portrait",
      description: "The clock tower of the Red Town Hall.",
      location: "Berlin, Germany",
    },
    {
      src: "/photos/40.jpg",
      orientation: "landscape",
      description: "The TV tower framed by a lifebuoy.",
      location: "Berlin, Germany",
    },
    {
      src: "/photos/41.jpg",
      orientation: "landscape",
      description: "The TV tower against a blue sky.",
      location: "Berlin, Germany",
    },
    {
      src: "/photos/44.jpg",
      orientation: "landscape",
      description: "The Stadtmitte U-Bahn entrance.",
      location: "Berlin, Germany",
    },
    {
      src: "/photos/28.jpg",
      orientation: "portrait",
      description: "A quiet road by the shrine.",
      location: "Near Tōshō-gū Shrine, Nikkō, Japan",
    },
    {
      src: "/photos/37.jpg",
      orientation: "landscape",
      description: "A city highway in the haze.",
      location: "Tokyo, Japan",
    },
    {
      src: "/photos/17.jpg",
      orientation: "landscape",
      description: "A parking lot at the foot of a forested hill.",
      location: "Japan",
    },
  ];

  // "Artistic" order: the original gallery order, with the newer photos fitted in
  const artisticOrder = [
    "/photos/01.jpg",
    "/photos/02.jpg",
    "/photos/03.jpg",
    "/photos/04.jpg",
    "/photos/05.jpg",
    "/photos/06.jpg",
    "/photos/08.jpg",
    "/photos/09.jpg",
    "/photos/10.jpg",
    "/photos/11.jpg",
    "/photos/12.jpg",
    "/photos/13.jpg",
    "/photos/39.jpg",
    "/photos/15.jpg",
    "/photos/17.jpg",
    "/photos/42.jpg",
    "/photos/19.jpg",
    "/photos/20.jpg",
    "/photos/43.jpg",
    "/photos/40.jpg",
    "/photos/41.jpg",
    "/photos/21.jpg",
    "/photos/22.jpg",
    "/photos/23.jpg",
    "/photos/24.jpg",
    "/photos/25.jpg",
    "/photos/26.jpg",
    "/photos/27.jpg",
    "/photos/28.jpg",
    "/photos/29.jpg",
    "/photos/30.jpg",
    "/photos/14.jpg",
    "/photos/18.jpg",
    "/photos/31.jpg",
    "/photos/32.jpg",
    "/photos/33.jpg",
    "/photos/34.jpg",
    "/photos/35.jpg",
    "/photos/36.jpg",
    "/photos/37.jpg",
    "/photos/38.jpg",
    "/photos/44.jpg",
  ];

  // "By theme" sections
  const themeGroups: PhotoGroup[] = [
    {
      title: "Night sky",
      srcs: [
        "/photos/01.jpg",
        "/photos/20.jpg",
        "/photos/14.jpg",
        "/photos/09.jpg",
        "/photos/25.jpg",
        "/photos/34.jpg",
        "/photos/15.jpg",
        "/photos/18.jpg",
        "/photos/12.jpg",
        "/photos/38.jpg",
        "/photos/39.jpg",
        "/photos/42.jpg",
      ],
    },
    {
      title: "Mountains",
      srcs: [
        "/photos/26.jpg",
        "/photos/29.jpg",
        "/photos/33.jpg",
        "/photos/32.jpg",
        "/photos/27.jpg",
        "/photos/02.jpg",
        "/photos/22.jpg",
      ],
    },
    {
      title: "Sea & coast",
      srcs: [
        "/photos/11.jpg",
        "/photos/19.jpg",
        "/photos/35.jpg",
        "/photos/13.jpg",
        "/photos/08.jpg",
        "/photos/10.jpg",
        "/photos/36.jpg",
        "/photos/31.jpg",
      ],
    },
    {
      title: "Nature",
      srcs: [
        "/photos/04.jpg",
        "/photos/05.jpg",
        "/photos/06.jpg",
        "/photos/24.jpg",
        "/photos/03.jpg",
        "/photos/23.jpg",
        "/photos/30.jpg",
        "/photos/21.jpg",
      ],
    },
    {
      title: "Cities",
      srcs: [
        "/photos/43.jpg",
        "/photos/40.jpg",
        "/photos/41.jpg",
        "/photos/44.jpg",
        "/photos/28.jpg",
        "/photos/37.jpg",
        "/photos/17.jpg",
      ],
    },
  ];

  // "By location" sections; "Other" = location not known yet
  const locationGroups: PhotoGroup[] = [
    {
      title: "Swiss Alps",
      srcs: ["/photos/01.jpg", "/photos/02.jpg"],
    },
    {
      title: "Chamonix & Mont Blanc",
      srcs: [
        "/photos/09.jpg",
        "/photos/26.jpg",
        "/photos/25.jpg",
        "/photos/20.jpg",
        "/photos/27.jpg",
        "/photos/33.jpg",
        "/photos/32.jpg",
        "/photos/34.jpg",
        "/photos/29.jpg",
      ],
    },
    {
      title: "Tignes & Val Thorens",
      srcs: [
        "/photos/14.jpg",
        "/photos/15.jpg",
        "/photos/18.jpg",
        "/photos/12.jpg",
        "/photos/38.jpg",
      ],
    },
    {
      title: "Lyon",
      srcs: ["/photos/06.jpg", "/photos/22.jpg"],
    },
    {
      title: "Camargue",
      srcs: ["/photos/04.jpg", "/photos/05.jpg", "/photos/03.jpg"],
    },
    {
      title: "Cannes",
      srcs: ["/photos/10.jpg", "/photos/13.jpg"],
    },
    {
      title: "Denmark",
      srcs: [
        "/photos/11.jpg",
        "/photos/19.jpg",
        "/photos/35.jpg",
        "/photos/24.jpg",
        "/photos/36.jpg",
        "/photos/21.jpg",
      ],
    },
    {
      title: "Germany",
      srcs: [
        "/photos/39.jpg",
        "/photos/42.jpg",
        "/photos/43.jpg",
        "/photos/40.jpg",
        "/photos/41.jpg",
        "/photos/44.jpg",
        "/photos/08.jpg",
      ],
    },
    {
      title: "Japan",
      srcs: [
        "/photos/28.jpg",
        "/photos/17.jpg",
        "/photos/37.jpg",
        "/photos/23.jpg",
        "/photos/30.jpg",
      ],
    },
    {
      title: "Other",
      srcs: ["/photos/31.jpg"],
    },
  ];

  const art = [
    {
      src: "/3d/camera.png",
      width: 1920,
      height: 2880,
      title: "Camera",
      date: "2026",
      scene: "/3d/blender/camera.jpg",
    },
    {
      src: "/3d/rowboat.png",
      width: 1333,
      height: 2000,
      title: "Rowboat",
      date: "2020",
      scene: "/3d/blender/rowboat.jpg",
    },
    {
      src: "/3d/sheep.png",
      width: 3000,
      height: 2000,
      title: "Sheep",
      date: "2022",
      scene: "/3d/blender/sheep.jpg",
      wide: true,
    },
  ];

  // const images = [
  //   /* ——— Warm daylight & soft-green tones ——— */
  //   {
  //     id: "1Yri9xveslYDylOmPhFLulGGjssnpHnj8",
  //     description: "Sunlit cedar avenue after a summer shower",
  //     location: "Nikkō, Japan",
  //     properties: ["Nikon D3400", "35 mm", "ISO 200", "f/5.6"],
  //     date: "July 2023 (IPhO trip)",
  //     orientation: "landscape",
  //   },
  //   {
  //     id: "1FSLQKv_mTe2KTyIELrjAAM2gwLRSi_GI",
  //     description: "Terraced rice fields glowing at midday",
  //     location: "Aso, Kyushu",
  //     properties: ["Nikon D3400", "24 mm", "ISO 100", "f/8"],
  //     date: "July 2023",
  //     orientation: "landscape",
  //   },
  //   {
  //     id: "16B8zLT9AMQ7skEzCEN_69Q1yRo_PjqbJ",
  //     description: "Mountain pass under cotton-white clouds",
  //     location: "Nagano Prefecture",
  //     properties: ["Nikon D3400", "28 mm", "ISO 125", "f/7.1"],
  //     date: "July 2023",
  //     orientation: "landscape",
  //   },
  //   {
  //     id: "19QOcrNYTWTdQynQpKw8rbOGzs15LiRTh",
  //     description: "Forest creek with emerald reflections",
  //     location: "Shirakami-Sanchi",
  //     properties: ["Nikon D3400", "18 mm", "ISO 250", "f/5"],
  //     date: "July 2023",
  //     orientation: "landscape",
  //   },
  //   {
  //     id: "1C36W9j21725yKpjiwPwr6NyHHGKNH65z",
  //     description: "Scarlet torii tucked in summer foliage",
  //     location: "Fushimi-Inari, Kyōto",
  //     properties: ["Nikon D3400", "50 mm", "ISO 200", "f/4"],
  //     date: "July 2023",
  //     orientation: "landscape",
  //   },
  //   {
  //     id: "18iEhv51luYizumy7tIWuums4a7r5Nw_Z",
  //     description: "Lavender farm beneath clear skies",
  //     location: "Furano, Hokkaidō",
  //     properties: ["Nikon D3400", "35 mm", "ISO 100", "f/8"],
  //     date: "July 2023",
  //     orientation: "portrait",
  //   },
  //   {
  //     id: "1WikPvvrwXqhUAYZMuW0UrP-7RmyUNsxq",
  //     description: "Shimmering koi pond in noon light",
  //     location: "Kenroku-en, Kanazawa",
  //     properties: ["Nikon D3400", "55 mm", "ISO 200", "f/5.6"],
  //     date: "July 2023",
  //     orientation: "portrait",
  //   },
  //   {
  //     id: "1VwxFszFRRqi5NpBIHICl9jGRyqhliXDr",
  //     description: "Rolling hills under soft haze",
  //     location: "Biei, Hokkaidō",
  //     properties: ["Nikon D3400", "24 mm", "ISO 200", "f/6.3"],
  //     date: "July 2023",
  //     orientation: "landscape",
  //   },
  //   {
  //     id: "1b-74qf37USBtfa_J1JRewvRHOHxL9Eh4",
  //     description: "Golden wheat fields at midday",
  //     location: "Asahikawa Plain",
  //     properties: ["Nikon D3400", "35 mm", "ISO 100", "f/8"],
  //     date: "July 2023",
  //     orientation: "portrait",
  //   },
  //   {
  //     id: "1GDKNhK2Ek1tSVuNzGVKZfOp1Z1N7Ak4-",
  //     description: "Crimson shrine roof against azure sky",
  //     location: "Hirado, Nagasaki",
  //     properties: ["Nikon D3400", "55 mm", "ISO 125", "f/6.3"],
  //     date: "July 2023",
  //     orientation: "portrait",
  //   },

  //   /* ——— Golden hour & pastel sunsets ——— */
  //   {
  //     id: "1VIZ8Ewx_D-xWfbuIIrTB640F-kbFkxys",
  //     description: "Sunset glow over Seto Inland Sea",
  //     location: "Naoshima",
  //     properties: ["Nikon D3400", "35 mm", "ISO 200", "f/7.1"],
  //     date: "July 2023",
  //     orientation: "landscape",
  //   },
  //   {
  //     id: "1Tu6qkA6VXd4LbE6uYLjyy4r4fsjRU43U",
  //     description: "Shinkans en platform bathed in gold",
  //     location: "Tokyo Station",
  //     properties: ["Nikon D3400", "18 mm", "ISO 200", "f/10", "20 s"],
  //     date: "July 2023",
  //     orientation: "landscape",
  //   },

  //   {
  //     id: "1iPgKIIzTUBD8nuDp57NI-72CF79n40Ao",
  //     description: "Fisherman silhouette at sunset pier",
  //     location: "Enoshima",
  //     properties: ["Nikon D3400", "85 mm", "ISO 400", "f/5"],
  //     date: "July 2023",
  //     orientation: "landscape",
  //   },
  //   {
  //     id: "1XHRxiTMgv6AKHivQoJeRSaStZXwGm8j-",
  //     description: "Steam rising from onsen valley at dusk",
  //     location: "Kusatsu, Gunma",
  //     properties: ["Nikon D3400", "28 mm", "ISO 250", "f/5.6"],
  //     date: "July 2023",
  //     orientation: "portrait",
  //   },
  //   {
  //     id: "1GUrqQdeeEPF1RtUw3QUO8ts16pSWay-N",
  //     description: "Old teahouse lanterns glowing amber",
  //     location: "Gion, Kyōto",
  //     properties: ["Nikon D3400", "50 mm", "ISO 400", "f/1.8"],
  //     date: "July 2023",
  //     orientation: "portrait",
  //   },
  //   {
  //     id: "1kjPUDw25M8S9mCXjg61Ch19wWUmQObJH",
  //     description: "Pastel reflections on calm harbour",
  //     location: "Kobe Port",
  //     properties: ["Nikon D3400", "24 mm", "ISO 200", "f/6.3"],
  //     date: "July 2023",
  //     orientation: "landscape",
  //   },

  //   {
  //     id: "1SOzk1GniBh7hVs6iR2GVhxjkJ_CPNLZh",
  //     description: "Orange sky behind temple pagoda",
  //     location: "Miyajima, Hiroshima",
  //     properties: ["Nikon D3400", "35 mm", "ISO 320", "f/4"],
  //     date: "July 2023",
  //     orientation: "landscape",
  //   },
  //   {
  //     id: "1YlYjF8ZRo_dJ6NoYfn3mm-Wu7eYv8WZU",
  //     description: "Bamboo grove drenched in warm light",
  //     location: "Arashiyama, Kyōto",
  //     properties: ["Nikon D3400", "18 mm", "ISO 400", "f/4"],
  //     date: "July 2023",
  //     orientation: "portrait",
  //   },
  //   {
  //     id: "1332SJapDWPNyoJffiPyUw89Dz3t1PhX8",
  //     description: "Children playing under peach sky",
  //     location: "Shōnan Coast",
  //     properties: ["Nikon D3400", "70 mm", "ISO 200", "f/5.6"],
  //     date: "July 2023",
  //     orientation: "landscape",
  //   },

  //   /* ——— Blue hour & early night ——— */
  //   {
  //     id: "1ZKDSMLNdg3SLF7bbp-oYKlBap8NCbLqC",
  //     description: "Neon bridge reflected on river",
  //     location: "Sumida River, Tokyo",
  //     properties: ["Nikon D3400", "30 mm", "ISO 400", "f/8", "10 s"],
  //     date: "July 2023",
  //     orientation: "landscape",
  //   },
  //   {
  //     id: "1z-O74mIb_iGXghTDPGpYzdtGKhtnjQFx",
  //     description: "Paper lantern walk in cobalt twilight",
  //     location: "Nikkō National Park",
  //     properties: ["Nikon D3400", "50 mm", "ISO 640", "f/2"],
  //     date: "July 2023",
  //     orientation: "landscape",
  //   },
  //   {
  //     id: "1xU15gIRJDPVP46YO6_I8zFpC-kJ8GXqH",
  //     description: "Winding highway light trails",
  //     location: "Hakone Skyline",
  //     properties: ["Nikon D3400", "18 mm", "ISO 400", "f/11"],
  //     date: "July 2023",
  //     orientation: "landscape",
  //   },
  //   {
  //     id: "1CRVkP4_v_LOnRYYnoEHKk38tr4UN3IoC",
  //     description: "Sky-blue reflections on glass skyscraper",
  //     location: "Shiodome, Tokyo",
  //     properties: ["Nikon D3400", "24 mm", "ISO 200", "f/7.1"],
  //     date: "July 2023",
  //     orientation: "landscape",
  //   },
  //   {
  //     id: "1r4ICqhJmcM5EEUino_UHF00JhenNIx-g",
  //     description: "Moonlit zen-garden raked sands",
  //     location: "Ginkaku-ji, Kyōto",
  //     properties: ["Nikon D3400", "35 mm", "ISO 640", "f/4"],
  //     date: "July 2023",
  //     orientation: "landscape",
  //   },
  //   {
  //     id: "1AkJTELiPQYdr0McchbRzAfLfIJUX_MtW",
  //     description: "Shrine gate silhouette against starry indigo",
  //     location: "Toshogu, Nikkō",
  //     properties: ["Nikon D3400", "18 mm", "ISO 1600", "f/3.5"],
  //     date: "July 2023",
  //     orientation: "landscape",
  //   },
  //   {
  //     id: "1ivzyb2yxmab8zDYZIspCGAMG2IxAb9Sl",
  //     description: "Milky Way emerging above forest ridge",
  //     location: "Nagano Highlands",
  //     properties: ["Nikon D3400", "20 mm", "ISO 3200", "f/3.2"],
  //     date: "July 2023 (late night)",
  //     orientation: "portrait",
  //   },
  //   {
  //     id: "1ziI1RgMOn9gGnyULPJz6gGg_8pQvjFIY",
  //     description: "Illuminated suspension bridge at blue hour",
  //     location: "Akashi-Kaikyō Bridge",
  //     properties: ["Nikon D3400", "35 mm", "ISO 400", "f/8"],
  //     date: "July 2023",
  //     orientation: "landscape",
  //   },
  //   {
  //     id: "1Tv5libJsG5qHCmRGSOb0PZ1JftgW6T_m",
  //     description: "Calm lake mirroring indigo mountains",
  //     location: "Lake Suwa, Nagano",
  //     properties: ["Nikon D3400", "24 mm", "ISO 200", "f/4.5"],
  //     date: "July 2023",
  //     orientation: "portrait",
  //   },
  //   {
  //     id: "1v36Ua0KGiy3Hauy8DJ58pmewdgvMAkNc",
  //     description: "Harbour cranes under fading violet sky",
  //     location: "Yokohama Port",
  //     properties: ["Nikon D3400", "70 mm", "ISO 320", "f/5.6"],
  //     date: "July 2023",
  //     orientation: "landscape",
  //   },

  //   /* ——— Deep-night / Milky Way finale ——— */
  //   {
  //     id: "1_Lm1Vcs5Ma5vXbW8WVxI68YL5E6SgPVJ",
  //     description: "Milky Way arch over alpine hut",
  //     location: "Mt. Norikura",
  //     properties: ["Nikon D3400", "14 mm", "ISO 4000", "f/2.8"],
  //     date: "July 2023 (02:00)",
  //     orientation: "landscape",
  //   },
  //   {
  //     id: "1g8d9xhOnOAq1297o7jkFe5aWygrjdxZk",
  //     description: "Star trails circling the North Star",
  //     location: "Okuhida, Gifu",
  //     properties: ["Nikon D3400", "18 mm", "ISO 800", "f/4"],
  //     date: "July 2023",
  //     orientation: "landscape",
  //   },
  //   {
  //     id: "1Y1Kep5APu1XTm7Z-Iq9Adwh8KevmfxBQ",
  //     description: "Comet streak above rural shrine",
  //     location: "Azumino, Nagano",
  //     properties: ["Nikon D3400", "35 mm", "ISO 3200", "f/2"],
  //     date: "July 2023",
  //     orientation: "landscape",
  //   },
  //   {
  //     id: "1ETkw97453a_GowKWD9hpgziA9JaINHXT",
  //     description: "Galaxy cores framed by silhouetted pines",
  //     location: "Hida Mountains",
  //     properties: ["Nikon D3400", "20 mm", "ISO 3200", "f/2.8"],
  //     date: "July 2023",
  //     orientation: "landscape",
  //   },
  //   {
  //     id: "1YBJtmz2KPp3ApckVWO2mX8Du7fruDsBP",
  //     description: "Shooting star above mirror-still pond",
  //     location: "Karuizawa, Nagano",
  //     properties: ["Nikon D3400", "24 mm", "ISO 2000", "f/3.5"],
  //     date: "July 2023",
  //     orientation: "landscape",
  //   },
  //   {
  //     id: "1ZWESXZ9Y9ioXMXndRCsRFrebrvF8S__O",
  //     description: "Milky Way framed by red torii row",
  //     location: "Takachiho, Miyazaki",
  //     properties: ["Nikon D3400", "18 mm", "ISO 2500", "f/3.2"],
  //     date: "July 2023",
  //     orientation: "portrait",
  //   },
  //   {
  //     id: "1_zCEFldvAMOSAtxxYGSWcGFoTVsRYmRa",
  //     description: "Bioluminescent plankton under starlight",
  //     location: "Amami-Ōshima",
  //     properties: ["Nikon D3400", "35 mm", "ISO 6400", "f/1.8"],
  //     date: "July 2023",
  //     orientation: "landscape",
  //   },
  //   {
  //     id: "19BjAfxBBvkd28KeQPobZlZGLFoN6NJzS",
  //     description: "Lone camper with lantern under galaxy",
  //     location: "Lake Mashū, Hokkaidō",
  //     properties: ["Nikon D3400", "24 mm", "ISO 3200", "f/2.8"],
  //     date: "July 2023",
  //     orientation: "landscape",
  //   },
  //   {
  //     id: "15TVDEV3bH-4ieRouzUyyXVqmah12lYDW",
  //     description: "Glowing tent amidst alpine snowfields",
  //     location: "Tateyama Kurobe",
  //     properties: ["Nikon D3400", "18 mm", "ISO 4000", "f/2.8"],
  //     date: "July 2023",
  //     orientation: "landscape",
  //   },
  // ];

  return (
    <>
      <nav className="mb-10 flex gap-6 text-sm text-gray-600 dark:text-gray-400">
        <a href="#photography" className="hover:text-link duration-200">
          Photography
        </a>
        <a href="#3d-art" className="hover:text-link duration-200">
          3D Art
        </a>
      </nav>
      <Title level={1} id="photography">
        Photography
      </Title>
      <p>
        I&apos;ve loved photography ever since middle school, especially
        capturing the Milky Way. Enjoy a selection of my best photos, some of
        which were taken together with my brother! Click on the pictures for
        more information!
      </p>
      <PhotoGallery
        photos={images}
        artisticOrder={artisticOrder}
        themeGroups={themeGroups}
        locationGroups={locationGroups}
      />

      <Title level={1} id="3d-art" className="mt-20">
        3D Art
      </Title>
      <p>
        As a kid, I was a huge fan of Pixar movies. I started learning Blender
        at age 10, here are a few renders I made along the way. Click on the
        images to see the view before render.
      </p>
      <div className="grid mt-10 lg:grid-cols-2 gap-6 gap-y-5">
        {art.map((im, index) => (
          <div key={index} className={im.wide ? "lg:col-span-2" : ""}>
            <ArtTile {...im} />
          </div>
        ))}
      </div>
      <p className="mt-10">
        I made this animated short in 8th grade end-to-end (scripting, modeling,
        animating, texturing, music).
      </p>
      <div className="mt-6 aspect-video w-full">
        <iframe
          className="w-full h-full"
          src="https://www.youtube-nocookie.com/embed/hqScp3jqwbQ"
          title="Turn It Off, animated short (2018)"
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </>
  );
};

export default page;
