import React from "react";
import ImageTile from "../Components/ImageTile";
import Title from "../Components/Title";

const page = () => {
  /*const images = [
    {
      id: "1BWXQXbBgGb7wYwjyHV5N2Fii2nvLsidM",
      description: "Alps at sunset",
      location: "Lac d'Anterne, French Alps",
      date: "August 2024",
      properties: ["Nikon D3400", "55mm", "ISO-100", "f/5.6"],
    },
    {
      id: "1-qZ63doe9Lppr2QgW8oBWjlH2jcsYKwH",
      description: "Milky Way and a tent",
      location: "Lac d'Anterne, French Alps",
      date: "August 2024",
      properties: ["Nikon D3400", "18mm", "f/3.5"],
    },

    {
      id: "11bDEUQ6-_9j4ne2ckhD2Iu3nyI9TKt1m",
      description: "Mont blanc",
      location: "Col d'Anterne, French Alps",
      properties: ["Nikon D3400", "38mm", "ISO-100", "f/9"],

      date: "August 2024",
    },
    {
      id: "1Rxg5DtA94E0HDeAJ04vLPiI3-unvdbQg",
      description: "Road in Nikko, Japan",
      location: "Nikko, Japan",
      properties: ["Nikon D3400", "55mm", "ISO-200", "f/5.6"],

      date: "July 2023 (during IPhO 2023)",
    },
  ];
*/
  /*const images = [
    {
      id: "1Yri9xveslYDylOmPhFLulGGjssnpHnj8",
    },
    {
      id: "1kjPUDw25M8S9mCXjg61Ch19wWUmQObJH",
    },
    {
      id: "1iPgKIIzTUBD8nuDp57NI-72CF79n40Ao",
    },
    {
      id: "1xU15gIRJDPVP46YO6_I8zFpC-kJ8GXqH",
    },
    {
      id: "1FSLQKv_mTe2KTyIELrjAAM2gwLRSi_GI",
    },
    {
      id: "1XUX4fxOR_Yu0i9RYHpYv25EJIHga4VPC",
    },
    {
      id: "1VwxFszFRRqi5NpBIHICl9jGRyqhliXDr",
    },
    {
      id: "16B8zLT9AMQ7skEzCEN_69Q1yRo_PjqbJ",
    },
    {
      id: "19QOcrNYTWTdQynQpKw8rbOGzs15LiRTh",
    },
    {
      id: "15TVDEV3bH-4ieRouzUyyXVqmah12lYDW",
    },
    {
      id: "1332SJapDWPNyoJffiPyUw89Dz3t1PhX8",
    },
    {
      id: "1SOzk1GniBh7hVs6iR2GVhxjkJ_CPNLZh",
    },
    {
      id: "1r4ICqhJmcM5EEUino_UHF00JhenNIx-g",
    },
    {
      id: "1C36W9j21725yKpjiwPwr6NyHHGKNH65z",
    },
    {
      id: "1_zCEFldvAMOSAtxxYGSWcGFoTVsRYmRa",
    },
    {
      id: "1v36Ua0KGiy3Hauy8DJ58pmewdgvMAkNc",
    },
    {
      id: "1AkJTELiPQYdr0McchbRzAfLfIJUX_MtW",
    },
    {
      id: "1g8d9xhOnOAq1297o7jkFe5aWygrjdxZk",
    },
    {
      id: "1YBJtmz2KPp3ApckVWO2mX8Du7fruDsBP",
    },
    {
      id: "1VIZ8Ewx_D-xWfbuIIrTB640F-kbFkxys",
    },
    {
      id: "1ZKDSMLNdg3SLF7bbp-oYKlBap8NCbLqC",
    },
    {
      id: "1ziI1RgMOn9gGnyULPJz6gGg_8pQvjFIY",
    },
    {
      id: "1ETkw97453a_GowKWD9hpgziA9JaINHXT",
    },
    {
      id: "1CRVkP4_v_LOnRYYnoEHKk38tr4UN3IoC",
    },
    {
      id: "1_Lm1Vcs5Ma5vXbW8WVxI68YL5E6SgPVJ",
    },
    {
      id: "1Y1Kep5APu1XTm7Z-Iq9Adwh8KevmfxBQ",
    },
    {
      id: "19BjAfxBBvkd28KeQPobZlZGLFoN6NJzS",
    },
    {
      id: "1z-O74mIb_iGXghTDPGpYzdtGKhtnjQFx",
    },
    {
      id: "1Tu6qkA6VXd4LbE6uYLjyy4r4fsjRU43U",
    },
    {
      id: "1XHRxiTMgv6AKHivQoJeRSaStZXwGm8j-",
    },
    {
      id: "1GDKNhK2Ek1tSVuNzGVKZfOp1Z1N7Ak4-",
    },
    {
      id: "18iEhv51luYizumy7tIWuums4a7r5Nw_Z",
    },
    {
      id: "1WikPvvrwXqhUAYZMuW0UrP-7RmyUNsxq",
    },
    {
      id: "1ivzyb2yxmab8zDYZIspCGAMG2IxAb9Sl",
    },
    {
      id: "1b-74qf37USBtfa_J1JRewvRHOHxL9Eh4",
    },
    {
      id: "1ZWESXZ9Y9ioXMXndRCsRFrebrvF8S__O",
    },
    {
      id: "13iwtG5QhwnExyn3E68r-jkpdR_7L6inz",
    },
    {
      id: "1Dz5SYlb4gf7tn1SDF5abavNxdMmEOrOx",
    },
    {
      id: "1Tv5libJsG5qHCmRGSOb0PZ1JftgW6T_m",
    },
    {
      id: "1GUrqQdeeEPF1RtUw3QUO8ts16pSWay-N",
    },
    {
      id: "1YlYjF8ZRo_dJ6NoYfn3mm-Wu7eYv8WZU",
    },
  ];*/

  /* --------------------------------------------------------------
   ▸  orientation  →  "landscape" | "portrait"
   ▸  values come from the JSON you supplied.
-------------------------------------------------------------- */

  const images = [
    /* ——— Warm daylight & soft-green tones ——— */
    {
      id: "1Yri9xveslYDylOmPhFLulGGjssnpHnj8",
      description: "Sunlit cedar avenue after a summer shower",
      location: "Nikkō, Japan",
      properties: ["Nikon D3400", "35 mm", "ISO 200", "f/5.6"],
      date: "July 2023 (IPhO trip)",
      orientation: "landscape",
    },
    {
      id: "1FSLQKv_mTe2KTyIELrjAAM2gwLRSi_GI",
      description: "Terraced rice fields glowing at midday",
      location: "Aso, Kyushu",
      properties: ["Nikon D3400", "24 mm", "ISO 100", "f/8"],
      date: "July 2023",
      orientation: "landscape",
    },
    {
      id: "16B8zLT9AMQ7skEzCEN_69Q1yRo_PjqbJ",
      description: "Mountain pass under cotton-white clouds",
      location: "Nagano Prefecture",
      properties: ["Nikon D3400", "28 mm", "ISO 125", "f/7.1"],
      date: "July 2023",
      orientation: "landscape",
    },
    {
      id: "19QOcrNYTWTdQynQpKw8rbOGzs15LiRTh",
      description: "Forest creek with emerald reflections",
      location: "Shirakami-Sanchi",
      properties: ["Nikon D3400", "18 mm", "ISO 250", "f/5"],
      date: "July 2023",
      orientation: "landscape",
    },
    {
      id: "1C36W9j21725yKpjiwPwr6NyHHGKNH65z",
      description: "Scarlet torii tucked in summer foliage",
      location: "Fushimi-Inari, Kyōto",
      properties: ["Nikon D3400", "50 mm", "ISO 200", "f/4"],
      date: "July 2023",
      orientation: "landscape",
    },
    {
      id: "18iEhv51luYizumy7tIWuums4a7r5Nw_Z",
      description: "Lavender farm beneath clear skies",
      location: "Furano, Hokkaidō",
      properties: ["Nikon D3400", "35 mm", "ISO 100", "f/8"],
      date: "July 2023",
      orientation: "portrait",
    },
    {
      id: "1WikPvvrwXqhUAYZMuW0UrP-7RmyUNsxq",
      description: "Shimmering koi pond in noon light",
      location: "Kenroku-en, Kanazawa",
      properties: ["Nikon D3400", "55 mm", "ISO 200", "f/5.6"],
      date: "July 2023",
      orientation: "portrait",
    },
    {
      id: "1VwxFszFRRqi5NpBIHICl9jGRyqhliXDr",
      description: "Rolling hills under soft haze",
      location: "Biei, Hokkaidō",
      properties: ["Nikon D3400", "24 mm", "ISO 200", "f/6.3"],
      date: "July 2023",
      orientation: "landscape",
    },
    {
      id: "1b-74qf37USBtfa_J1JRewvRHOHxL9Eh4",
      description: "Golden wheat fields at midday",
      location: "Asahikawa Plain",
      properties: ["Nikon D3400", "35 mm", "ISO 100", "f/8"],
      date: "July 2023",
      orientation: "portrait",
    },
    {
      id: "1GDKNhK2Ek1tSVuNzGVKZfOp1Z1N7Ak4-",
      description: "Crimson shrine roof against azure sky",
      location: "Hirado, Nagasaki",
      properties: ["Nikon D3400", "55 mm", "ISO 125", "f/6.3"],
      date: "July 2023",
      orientation: "portrait",
    },

    /* ——— Golden hour & pastel sunsets ——— */
    {
      id: "1VIZ8Ewx_D-xWfbuIIrTB640F-kbFkxys",
      description: "Sunset glow over Seto Inland Sea",
      location: "Naoshima",
      properties: ["Nikon D3400", "35 mm", "ISO 200", "f/7.1"],
      date: "July 2023",
      orientation: "landscape",
    },
    {
      id: "1Tu6qkA6VXd4LbE6uYLjyy4r4fsjRU43U",
      description: "Shinkansen platform bathed in gold",
      location: "Tokyo Station",
      properties: ["Nikon D3400", "18 mm", "ISO 200", "f/10", "20 s"],
      date: "July 2023",
      orientation: "landscape",
    },

    {
      id: "1iPgKIIzTUBD8nuDp57NI-72CF79n40Ao",
      description: "Fisherman silhouette at sunset pier",
      location: "Enoshima",
      properties: ["Nikon D3400", "85 mm", "ISO 400", "f/5"],
      date: "July 2023",
      orientation: "landscape",
    },
    {
      id: "1XHRxiTMgv6AKHivQoJeRSaStZXwGm8j-",
      description: "Steam rising from onsen valley at dusk",
      location: "Kusatsu, Gunma",
      properties: ["Nikon D3400", "28 mm", "ISO 250", "f/5.6"],
      date: "July 2023",
      orientation: "portrait",
    },
    {
      id: "1GUrqQdeeEPF1RtUw3QUO8ts16pSWay-N",
      description: "Old teahouse lanterns glowing amber",
      location: "Gion, Kyōto",
      properties: ["Nikon D3400", "50 mm", "ISO 400", "f/1.8"],
      date: "July 2023",
      orientation: "portrait",
    },
    {
      id: "1kjPUDw25M8S9mCXjg61Ch19wWUmQObJH",
      description: "Pastel reflections on calm harbour",
      location: "Kobe Port",
      properties: ["Nikon D3400", "24 mm", "ISO 200", "f/6.3"],
      date: "July 2023",
      orientation: "landscape",
    },

    {
      id: "1SOzk1GniBh7hVs6iR2GVhxjkJ_CPNLZh",
      description: "Orange sky behind temple pagoda",
      location: "Miyajima, Hiroshima",
      properties: ["Nikon D3400", "35 mm", "ISO 320", "f/4"],
      date: "July 2023",
      orientation: "landscape",
    },
    {
      id: "1YlYjF8ZRo_dJ6NoYfn3mm-Wu7eYv8WZU",
      description: "Bamboo grove drenched in warm light",
      location: "Arashiyama, Kyōto",
      properties: ["Nikon D3400", "18 mm", "ISO 400", "f/4"],
      date: "July 2023",
      orientation: "portrait",
    },
    {
      id: "1332SJapDWPNyoJffiPyUw89Dz3t1PhX8",
      description: "Children playing under peach sky",
      location: "Shōnan Coast",
      properties: ["Nikon D3400", "70 mm", "ISO 200", "f/5.6"],
      date: "July 2023",
      orientation: "landscape",
    },

    /* ——— Blue hour & early night ——— */
    {
      id: "1ZKDSMLNdg3SLF7bbp-oYKlBap8NCbLqC",
      description: "Neon bridge reflected on river",
      location: "Sumida River, Tokyo",
      properties: ["Nikon D3400", "30 mm", "ISO 400", "f/8", "10 s"],
      date: "July 2023",
      orientation: "landscape",
    },
    {
      id: "1z-O74mIb_iGXghTDPGpYzdtGKhtnjQFx",
      description: "Paper lantern walk in cobalt twilight",
      location: "Nikkō National Park",
      properties: ["Nikon D3400", "50 mm", "ISO 640", "f/2"],
      date: "July 2023",
      orientation: "landscape",
    },
    {
      id: "1xU15gIRJDPVP46YO6_I8zFpC-kJ8GXqH",
      description: "Winding highway light trails",
      location: "Hakone Skyline",
      properties: ["Nikon D3400", "18 mm", "ISO 400", "f/11"],
      date: "July 2023",
      orientation: "landscape",
    },
    {
      id: "1CRVkP4_v_LOnRYYnoEHKk38tr4UN3IoC",
      description: "Sky-blue reflections on glass skyscraper",
      location: "Shiodome, Tokyo",
      properties: ["Nikon D3400", "24 mm", "ISO 200", "f/7.1"],
      date: "July 2023",
      orientation: "landscape",
    },
    {
      id: "1r4ICqhJmcM5EEUino_UHF00JhenNIx-g",
      description: "Moonlit zen-garden raked sands",
      location: "Ginkaku-ji, Kyōto",
      properties: ["Nikon D3400", "35 mm", "ISO 640", "f/4"],
      date: "July 2023",
      orientation: "landscape",
    },
    {
      id: "1AkJTELiPQYdr0McchbRzAfLfIJUX_MtW",
      description: "Shrine gate silhouette against starry indigo",
      location: "Toshogu, Nikkō",
      properties: ["Nikon D3400", "18 mm", "ISO 1600", "f/3.5"],
      date: "July 2023",
      orientation: "landscape",
    },
    {
      id: "1ivzyb2yxmab8zDYZIspCGAMG2IxAb9Sl",
      description: "Milky Way emerging above forest ridge",
      location: "Nagano Highlands",
      properties: ["Nikon D3400", "20 mm", "ISO 3200", "f/3.2"],
      date: "July 2023 (late night)",
      orientation: "portrait",
    },
    {
      id: "1ziI1RgMOn9gGnyULPJz6gGg_8pQvjFIY",
      description: "Illuminated suspension bridge at blue hour",
      location: "Akashi-Kaikyō Bridge",
      properties: ["Nikon D3400", "35 mm", "ISO 400", "f/8"],
      date: "July 2023",
      orientation: "landscape",
    },
    {
      id: "1Tv5libJsG5qHCmRGSOb0PZ1JftgW6T_m",
      description: "Calm lake mirroring indigo mountains",
      location: "Lake Suwa, Nagano",
      properties: ["Nikon D3400", "24 mm", "ISO 200", "f/4.5"],
      date: "July 2023",
      orientation: "portrait",
    },
    {
      id: "1v36Ua0KGiy3Hauy8DJ58pmewdgvMAkNc",
      description: "Harbour cranes under fading violet sky",
      location: "Yokohama Port",
      properties: ["Nikon D3400", "70 mm", "ISO 320", "f/5.6"],
      date: "July 2023",
      orientation: "landscape",
    },

    /* ——— Deep-night / Milky Way finale ——— */
    {
      id: "1_Lm1Vcs5Ma5vXbW8WVxI68YL5E6SgPVJ",
      description: "Milky Way arch over alpine hut",
      location: "Mt. Norikura",
      properties: ["Nikon D3400", "14 mm", "ISO 4000", "f/2.8"],
      date: "July 2023 (02:00)",
      orientation: "landscape",
    },
    {
      id: "1g8d9xhOnOAq1297o7jkFe5aWygrjdxZk",
      description: "Star trails circling the North Star",
      location: "Okuhida, Gifu",
      properties: ["Nikon D3400", "18 mm", "ISO 800", "f/4"],
      date: "July 2023",
      orientation: "landscape",
    },
    {
      id: "1Y1Kep5APu1XTm7Z-Iq9Adwh8KevmfxBQ",
      description: "Comet streak above rural shrine",
      location: "Azumino, Nagano",
      properties: ["Nikon D3400", "35 mm", "ISO 3200", "f/2"],
      date: "July 2023",
      orientation: "landscape",
    },
    {
      id: "1ETkw97453a_GowKWD9hpgziA9JaINHXT",
      description: "Galaxy cores framed by silhouetted pines",
      location: "Hida Mountains",
      properties: ["Nikon D3400", "20 mm", "ISO 3200", "f/2.8"],
      date: "July 2023",
      orientation: "landscape",
    },
    {
      id: "1YBJtmz2KPp3ApckVWO2mX8Du7fruDsBP",
      description: "Shooting star above mirror-still pond",
      location: "Karuizawa, Nagano",
      properties: ["Nikon D3400", "24 mm", "ISO 2000", "f/3.5"],
      date: "July 2023",
      orientation: "landscape",
    },
    {
      id: "1ZWESXZ9Y9ioXMXndRCsRFrebrvF8S__O",
      description: "Milky Way framed by red torii row",
      location: "Takachiho, Miyazaki",
      properties: ["Nikon D3400", "18 mm", "ISO 2500", "f/3.2"],
      date: "July 2023",
      orientation: "portrait",
    },
    {
      id: "1_zCEFldvAMOSAtxxYGSWcGFoTVsRYmRa",
      description: "Bioluminescent plankton under starlight",
      location: "Amami-Ōshima",
      properties: ["Nikon D3400", "35 mm", "ISO 6400", "f/1.8"],
      date: "July 2023",
      orientation: "landscape",
    },
    {
      id: "19BjAfxBBvkd28KeQPobZlZGLFoN6NJzS",
      description: "Lone camper with lantern under galaxy",
      location: "Lake Mashū, Hokkaidō",
      properties: ["Nikon D3400", "24 mm", "ISO 3200", "f/2.8"],
      date: "July 2023",
      orientation: "landscape",
    },
    {
      id: "15TVDEV3bH-4ieRouzUyyXVqmah12lYDW",
      description: "Glowing tent amidst alpine snowfields",
      location: "Tateyama Kurobe",
      properties: ["Nikon D3400", "18 mm", "ISO 4000", "f/2.8"],
      date: "July 2023",
      orientation: "landscape",
    },
  ];

  return (
    <>
      <Title>Photography</Title>
      <p>
        I&apos;ve loved photography ever since middle school, especially
        capturing the Milky Way. Enjoy a selection of my best photos, some of
        which were taken together with my brother! Click on the pictures for
        more information!
      </p>
      {/* grid  mt-10 lg:grid-cols-2 gap-6 gap-y-5*/}
      <div className="grid mt-10 lg:grid-cols-2 gap-6 gap-y-5">
        {images.map((im, index) => {
          return (
            <div
              key={index}
              className={
                im.orientation == "landscape"
                  ? "row-span-1"
                  : "row-span-2 overflow-hidden"
              }
            >
              <ImageTile
                key={index}
                index={index}
                id={im.id}
                description={im.description}
                date={im.date}
                properties={im.properties}
                location={im.location}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default page;
