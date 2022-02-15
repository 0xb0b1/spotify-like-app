/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
import { useRefreshToken } from "../../hooks/RefreshToken";

import { RiHeart3Line, RiAddFill } from "react-icons/ri";
import playGreen from "../../assets/play-green.svg";

interface FeaturedPlaylistsProps {
  playlists: {
    items: {
      description: string;
      href: string;
      id: string;
      images: {
        url: string;
      }[];
      name: string;
      tracks: {
        href: string;
        total: number;
      };
      uri: string;
    }[];
  };
}

export const Recommendations = () => {
  const { token, getRefreshToken } = useRefreshToken();
  const [isLoading, setIsLoading] = useState(true);
  const [topTracks, setTopTracks] = useState();
  const [featuredPlaylists, setFeaturedPlaylists] =
    useState<FeaturedPlaylistsProps>();

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getFeaturedPlaylists = async () => {
      const myToken = await getRefreshToken();
      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/browse/featured-playlists?offset=0&limit=6",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + myToken,
            },
          }
        );
        setFeaturedPlaylists(response.data);
        setIsLoading(false);
      } catch (error) {
        throw error;
      }
    };
    getFeaturedPlaylists();

    return () => {
      source.cancel();
    };
  }, []);

  if (isLoading) return <div>Loading</div>;

  return (
    <section className="pb-8">
      <h2 className="mt-8 mb-2 font-semibold">Recomended playlists</h2>

      <table className="w-full bg-gray-800 rounded-3xl">
        <thead>
          <tr>
            <th></th>
            <th className="px-4 py-3 text-gray-200 uppercase font-medium text-xs text-left">
              Description
            </th>
            <th className="px-4 py-3 text-gray-200 uppercase font-medium text-xs text-left">
              Name
            </th>
            <th className="px-4 py-3 text-gray-200 uppercase font-medium text-xs text-left"></th>
            <th className="px-4 py-3 text-gray-200 uppercase font-medium text-xs text-left">
              Number of Tracks
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {featuredPlaylists?.playlists.items.map((item, index) => (
            <tr key={index}>
              <td style={{ width: 72 }} className="px-4 py-3 text-sm">
                <img
                  src={item.images[0].url}
                  alt="N"
                  className="w-8 h-8 rounded-sm"
                />
              </td>
              <td>
                <a
                  className="text-gray-100 font-semibold text-none leading-6 text-xs hover:underline"
                  href="/"
                >
                  {item.description.split(" ", 8).join(" ")} ...
                </a>
              </td>
              <td className="px-4 py-3 text-sm">{item.name}</td>
              <td style={{ width: 100 }} className="px-4 py-3 text-sm"></td>
              <td className="px-4 py-3 text-sm">{item.tracks.total}</td>
              <td className="px-4 py-3 text-sm flex gap-1">
                <button type="button">
                  <RiHeart3Line color="white" size={22} />
                </button>
                <button type="button">
                  <RiAddFill size={28} />
                </button>
                <button
                  type="button"
                  className="w-8 h-8 flex items-center justify-center  bg-gray-700 rounded-lg"
                >
                  <img
                    className="w-5 h-5 hover:brightness-95"
                    src={playGreen}
                    alt="Play song"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <span className="text-sm font-semibold px-4 py-4 cursor-pointer">
        1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21
      </span>
    </section>
  );
};
