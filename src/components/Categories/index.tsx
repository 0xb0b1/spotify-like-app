// import { useState, useEffect } from "react";
import play from '../../assets/play.svg'

const categories = {
  href: 'https://api.spotify.com/v1/browse/categories?country=SE&locale=sv_se&offset=5&limit=49',
  items: [
    {
      href: 'https://api.spotify.com/v1/browse/categories/rock',
      icons: [
        {
          height: 274,
          url: 'https://t.scdn.co/media/derived/rock_9ce79e0a4ef901bbd10494f5b855d3cc_0_0_274_274.jpg',
          width: 274,
        },
      ],
      id: 'rock',
      name: 'Rock',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/summer',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/8e508d7eb5b843a89c368c9507ecc429.jpeg',
          width: null,
        },
      ],
      id: 'summer',
      name: 'Sommar',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/pride',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/c5495b9f0f694ffcb39c9217d4ed4375',
          width: null,
        },
      ],
      id: 'pride',
      name: 'Pride',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/at_home',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/04da469dd7be4dab96659aa1fa9f0ac9.jpeg',
          width: null,
        },
      ],
      id: 'at_home',
      name: 'Hemma',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/chill',
      icons: [
        {
          height: 274,
          url: 'https://t.scdn.co/media/derived/chill-274x274_4c46374f007813dd10b37e8d8fd35b4b_0_0_274_274.jpg',
          width: 274,
        },
      ],
      id: 'chill',
      name: 'Chill',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/edm_dance',
      icons: [
        {
          height: 274,
          url: 'https://t.scdn.co/media/derived/edm-274x274_0ef612604200a9c14995432994455a6d_0_0_274_274.jpg',
          width: 274,
        },
      ],
      id: 'edm_dance',
      name: 'Dance/electronic',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/workout',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/media/links/workout-274x274.jpg',
          width: null,
        },
      ],
      id: 'workout',
      name: 'Träning',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/metal',
      icons: [
        {
          height: 274,
          url: 'https://t.scdn.co/media/original/metal_27c921443fd0a5ba95b1b2c2ae654b2b_274x274.jpg',
          width: 274,
        },
      ],
      id: 'metal',
      name: 'Metal',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/kids_family',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/664bb84f7a774e1eadb7c227aed98f3c',
          width: null,
        },
      ],
      id: 'kids_family',
      name: 'Barn och familj',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/decades',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/b611cf5145764c64b80e91ccd5f357c8',
          width: null,
        },
      ],
      id: 'decades',
      name: 'Årtionden',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/rnb',
      icons: [
        {
          height: 274,
          url: 'https://t.scdn.co/media/derived/r-b-274x274_fd56efa72f4f63764b011b68121581d8_0_0_274_274.jpg',
          width: 274,
        },
      ],
      id: 'rnb',
      name: 'R&B',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/wellness',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/2adf91e7179a4e098834d630c74824b1.jpeg',
          width: null,
        },
      ],
      id: 'wellness',
      name: 'Välmående',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/equal',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/084155aeaa724ea1bd393a017d67b709',
          width: null,
        },
      ],
      id: 'equal',
      name: 'EQUAL',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/focus',
      icons: [
        {
          height: 274,
          url: 'https://t.scdn.co/media/original/genre-images-square-274x274_5e50d72b846a198fcd2ca9b3aef5f0c8_274x274.jpg',
          width: 274,
        },
      ],
      id: 'focus',
      name: 'Fokus',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/dinner',
      icons: [
        {
          height: 274,
          url: 'https://t.scdn.co/media/original/dinner_1b6506abba0ba52c54e6d695c8571078_274x274.jpg',
          width: 274,
        },
      ],
      id: 'dinner',
      name: 'Matlagning och middag',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/party',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/7ee6530d5b3c4acc9a0957046bf11d63',
          width: null,
        },
      ],
      id: 'party',
      name: 'Party',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/country',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/a2e0ebe2ebed4566ba1d8236b869241f.jpeg',
          width: null,
        },
      ],
      id: 'country',
      name: 'Country',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/soul',
      icons: [
        {
          height: 274,
          url: 'https://t.scdn.co/media/derived/soul-274x274_266bc900b35dda8956380cffc73a4d8c_0_0_274_274.jpg',
          width: 274,
        },
      ],
      id: 'soul',
      name: 'Soul',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/sleep',
      icons: [
        {
          height: 274,
          url: 'https://t.scdn.co/media/derived/sleep-274x274_0d4f836af8fab7bf31526968073e671c_0_0_274_274.jpg',
          width: 274,
        },
      ],
      id: 'sleep',
      name: 'Sova',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/afro',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/b505b01bbe0e490cbe43b07f16212892.jpeg',
          width: null,
        },
      ],
      id: 'afro',
      name: 'Afro',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/latin',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/26a60378-a374-4cd7-b894-28efa5e154cb.jpg',
          width: null,
        },
      ],
      id: 'latin',
      name: 'Latino',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/jazz',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/568f37f1cab54136939d63bd1f59d40c',
          width: null,
        },
      ],
      id: 'jazz',
      name: 'Jazz',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/romance',
      icons: [
        {
          height: 274,
          url: 'https://t.scdn.co/media/derived/romance-274x274_8100794c94847b6d27858bed6fa4d91b_0_0_274_274.jpg',
          width: 274,
        },
      ],
      id: 'romance',
      name: 'Romantik',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/caribbean',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/495fadcefe234607b14b2db3381f3f5d.jpeg',
          width: null,
        },
      ],
      id: 'caribbean',
      name: 'Karibien',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/kpop',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/2078afd91e4d431eb19efc5bee5ab131.jpeg',
          width: null,
        },
      ],
      id: 'kpop',
      name: 'K-pop',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/thirdparty',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/b4182906bf244b4994805084c057e9ee.jpeg',
          width: null,
        },
      ],
      id: 'thirdparty',
      name: 'Trendsättare',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/roots',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/7fe0f2c9c91f45a3b6bae49d298201a4.jpeg',
          width: null,
        },
      ],
      id: 'roots',
      name: 'Folk och akustiskt',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/instrumental',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/384c2b595a1648aa801837ff99961188',
          width: null,
        },
      ],
      id: 'instrumental',
      name: 'Instrumental',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/blackhistorymonth',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/781e4ef90e4d48e889d9c15bc35fdec6',
          width: null,
        },
      ],
      id: 'blackhistorymonth',
      name: 'Black History Is Now',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/aapi_heritage_month',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/9378062ced4e466980de864ee3cc3bf3',
          width: null,
        },
      ],
      id: 'aapi_heritage_month',
      name: 'Stop Asian Hate',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/classical',
      icons: [
        {
          height: 274,
          url: 'https://t.scdn.co/media/derived/classical-274x274_abf78251ff3d90d2ceaf029253ca7cb4_0_0_274_274.jpg',
          width: 274,
        },
      ],
      id: 'classical',
      name: 'Klassiskt',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/blues',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/6fe5cd3ebc8c4db7bb8013152b153505',
          width: null,
        },
      ],
      id: 'blues',
      name: 'Blues',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/arab',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/41c540e662c0476c8729eb12c2f08995.jpeg',
          width: null,
        },
      ],
      id: 'arab',
      name: 'Arab',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/punk',
      icons: [
        {
          height: 274,
          url: 'https://t.scdn.co/media/derived/punk-274x274_f3f1528ea7bbb60a625da13e3315a40b_0_0_274_274.jpg',
          width: 274,
        },
      ],
      id: 'punk',
      name: 'Punk',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/funk',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/f4f0987fcab446fcaa7173acb5e25701.jpeg',
          width: null,
        },
      ],
      id: 'funk',
      name: 'Funk',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/travel',
      icons: [
        {
          height: 274,
          url: 'https://t.scdn.co/media/derived/travel-274x274_1e89cd5b42cf8bd2ff8fc4fb26f2e955_0_0_274_274.jpg',
          width: 274,
        },
      ],
      id: 'travel',
      name: 'Resor',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/gaming',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/0d39395309ba47838ef12ce987f19d16.jpeg',
          width: null,
        },
      ],
      id: 'gaming',
      name: 'Gaming',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/popculture',
      icons: [
        {
          height: 274,
          url: 'https://t.scdn.co/media/derived/trending-274x274_7b238f7217985e79d3664f2734347b98_0_0_274_274.jpg',
          width: 274,
        },
      ],
      id: 'popculture',
      name: 'Populärt',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/ambient',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/9210c5a26e6a4b4da2c3ea8e5f87fff8',
          width: null,
        },
      ],
      id: 'ambient',
      name: 'Ambient',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/inspirational',
      icons: [
        {
          height: 274,
          url: 'https://t.scdn.co/media/derived/icon-274x274_5ce6e0f681f0a76f9dcf9270dfd18489_0_0_274_274.jpg',
          width: 274,
        },
      ],
      id: 'inspirational',
      name: 'Christian & Gospel',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/tokyo',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/0e5a2f7ea4bf44ca88be919b84a39912',
          width: null,
        },
      ],
      id: 'tokyo',
      name: 'Tokyo',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/happier_than_ever',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/789ca4b7af334c239a74d2b859860ed3',
          width: null,
        },
      ],
      id: 'happier_than_ever',
      name: 'Happier Than Ever',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/music_and_talk',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/487ecec9ae594690a55c0150b1958eff',
          width: null,
        },
      ],
      id: 'music_and_talk',
      name: 'Music + Talk',
    },
    {
      href: 'https://api.spotify.com/v1/browse/categories/holidays',
      icons: [
        {
          height: null,
          url: 'https://t.scdn.co/images/dec76a385201436281efb6796a54f479.jpeg',
          width: null,
        },
      ],
      id: 'holidays',
      name: 'Julmusik',
    },
  ],
  limit: 49,
  next: null,
  offset: 5,
  previous:
    'https://api.spotify.com/v1/browse/categories?country=SE&locale=sv_se&offset=0&limit=49',
  total: 49,
}

// interface CategoriesProps {
//   items: Array<{
//     href: string;
//     icons: Array<{
//       url: string;
//     }>;
//     id: string;
//     name: string;
//   }>;
// }

export const Categories = () => {
  // const [categories, setCategories] = useState<CategoriesProps>();

  // useEffect(() => {
  //   const getCategories = async () => {
  //     const response = await axios.get("http://localhost:3333/categories");

  //     setCategories(response.data);
  //   };
  //   getCategories();
  // }, []);

  // console.log(categories?.items.forEach((item) => console.log(item.name)));
  // console.log(categories?.items.forEach((item) => console.log(item)));

  return (
    <div className='py-4 px-2 h-home w-full box-border overflow-y-scroll no-scrollbar'>
      <section className='text-gray-50 h-full'>
        <div className='flex flex-wrap flex-1 items-center justify-center w-full '>
          {categories?.items.map((item) => (
            <div
              className='relative flex items-end rounded-full mx-2 my-2 max-h-72 max-w-69'
              key={item.id}
            >
              <img
                src={item.icons[0].url}
                alt=''
                className='relative object-cover h-72 w-auto rounded-3xl filter blur-none hover:blur-sm'
              />

              <div className='absolute flex items-center m-4'>
                <img src={play} alt='' className='bg-green-500 rounded-full' />
                <span className='m-2 font-black text-sm'>{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
