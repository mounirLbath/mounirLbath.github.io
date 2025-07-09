import React from "react";
import ImageTile from "../Components/ImageTile";
import Title from "../Components/Title";

const page = () => {
  const images = [
    {
      id: "1Yri9xveslYDylOmPhFLulGGjssnpHnj8",
      orientation: "landscape",
      description: "Milky Way over the mountains.",
      properties: ["Nikon D3400", "55mm", "f/5.6"],
      location: "Nendaz, Swiss Alps",
      date: "",
    },
    { id: "1FSLQKv_mTe2KTyIELrjAAM2gwLRSi_GI", orientation: "landscape" },
    { id: "16B8zLT9AMQ7skEzCEN_69Q1yRo_PjqbJ", orientation: "landscape" },
    { id: "19QOcrNYTWTdQynQpKw8rbOGzs15LiRTh", orientation: "landscape" },
    { id: "1C36W9j21725yKpjiwPwr6NyHHGKNH65z", orientation: "landscape" },
    { id: "18iEhv51luYizumy7tIWuums4a7r5Nw_Z", orientation: "portrait" },
    { id: "1WikPvvrwXqhUAYZMuW0UrP-7RmyUNsxq", orientation: "portrait" },
    { id: "1VwxFszFRRqi5NpBIHICl9jGRyqhliXDr", orientation: "landscape" },
    { id: "1b-74qf37USBtfa_J1JRewvRHOHxL9Eh4", orientation: "portrait" },
    { id: "1GDKNhK2Ek1tSVuNzGVKZfOp1Z1N7Ak4-", orientation: "portrait" },
    { id: "1VIZ8Ewx_D-xWfbuIIrTB640F-kbFkxys", orientation: "landscape" },
    { id: "1Tu6qkA6VXd4LbE6uYLjyy4r4fsjRU43U", orientation: "landscape" },
    { id: "1iPgKIIzTUBD8nuDp57NI-72CF79n40Ao", orientation: "landscape" },
    { id: "1XHRxiTMgv6AKHivQoJeRSaStZXwGm8j-", orientation: "portrait" },
    { id: "1GUrqQdeeEPF1RtUw3QUO8ts16pSWay-N", orientation: "portrait" },
    { id: "1kjPUDw25M8S9mCXjg61Ch19wWUmQObJH", orientation: "landscape" },
    { id: "1SOzk1GniBh7hVs6iR2GVhxjkJ_CPNLZh", orientation: "landscape" },
    { id: "1YlYjF8ZRo_dJ6NoYfn3mm-Wu7eYv8WZU", orientation: "portrait" },
    { id: "1332SJapDWPNyoJffiPyUw89Dz3t1PhX8", orientation: "landscape" },
    { id: "1ZKDSMLNdg3SLF7bbp-oYKlBap8NCbLqC", orientation: "landscape" },
    { id: "1z-O74mIb_iGXghTDPGpYzdtGKhtnjQFx", orientation: "landscape" },
    { id: "1xU15gIRJDPVP46YO6_I8zFpC-kJ8GXqH", orientation: "landscape" },
    { id: "1CRVkP4_v_LOnRYYnoEHKk38tr4UN3IoC", orientation: "landscape" },
    { id: "1r4ICqhJmcM5EEUino_UHF00JhenNIx-g", orientation: "landscape" },
    { id: "1AkJTELiPQYdr0McchbRzAfLfIJUX_MtW", orientation: "landscape" },
    { id: "1ivzyb2yxmab8zDYZIspCGAMG2IxAb9Sl", orientation: "portrait" },
    { id: "1ziI1RgMOn9gGnyULPJz6gGg_8pQvjFIY", orientation: "landscape" },
    { id: "1Tv5libJsG5qHCmRGSOb0PZ1JftgW6T_m", orientation: "portrait" },
    { id: "1v36Ua0KGiy3Hauy8DJ58pmewdgvMAkNc", orientation: "landscape" },
    { id: "1_Lm1Vcs5Ma5vXbW8WVxI68YL5E6SgPVJ", orientation: "landscape" },
    { id: "1g8d9xhOnOAq1297o7jkFe5aWygrjdxZk", orientation: "landscape" },
    { id: "1Y1Kep5APu1XTm7Z-Iq9Adwh8KevmfxBQ", orientation: "landscape" },
    { id: "1ETkw97453a_GowKWD9hpgziA9JaINHXT", orientation: "landscape" },
    { id: "1YBJtmz2KPp3ApckVWO2mX8Du7fruDsBP", orientation: "landscape" },
    { id: "1ZWESXZ9Y9ioXMXndRCsRFrebrvF8S__O", orientation: "portrait" },
    { id: "1_zCEFldvAMOSAtxxYGSWcGFoTVsRYmRa", orientation: "landscape" },
    { id: "19BjAfxBBvkd28KeQPobZlZGLFoN6NJzS", orientation: "landscape" },
    { id: "15TVDEV3bH-4ieRouzUyyXVqmah12lYDW", orientation: "landscape" },
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
