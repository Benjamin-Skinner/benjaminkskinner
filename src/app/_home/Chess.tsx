"use client";

import React from "react";
import { useLastGame } from "@/data/chess";

interface Props {}

const Chess: React.FC<Props> = ({}) => {
  const { stats, loading } = useLastGame();

  if (loading || !stats) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <h2>My Chess Stats</h2>
      <p className="-mt-6 text-sm text-gray-400 mb-6">via Chess.com API</p>
      {loading || !stats ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col lg:flex-row items-center justify-evenly space-x-4">
          <div className="shadow-md p-4 mb-4 rounded-lg w-full md:w-4/5 lg:w-1/2 text-center">
            <p className="text-xs mb-4">Current Rating</p>
            <p className="text-3xl text-black">{stats?.elo}</p>
          </div>
          <div className="shadow-md p-4 mb-4 rounded-lg w-full md:w-4/5 lg:w-1/2 text-center">
            <p className="text-xs mb-4">Most Recent Game</p>
            <p className="text-3xl text-black">
              {stats?.last_game?.result.toUpperCase()}
            </p>
            <p className="italic text-sm">vs {stats?.last_game?.opponent}</p>
            <p className="text-gray-400 text-md mt-2">
              {" "}
              — {stats?.last_game?.date} —{" "}
            </p>
          </div>
          <div className="shadow-md p-4 mb-4 rounded-lg w-full md:w-4/5 lg:w-1/2 text-center">
            <p className="text-xs mb-4">Last 10</p>
            <p className="text-3xl text-black">
              {stats?.last_ten.wins} — {stats?.last_ten.losses}
            </p>
          </div>
        </div>
      )}
      <div className="w-full flex items-center justify-center">
        <a
          href={stats?.profile_link}
          target="_blank"
          className="mt-4 shadow-md p-8 mb-4 rounded-lg w-4/5 text-center text-gray-500 text-lg hover:bg-gray-200 p-2 rounded-md m-auto"
        >
          Challenge Me
        </a>
      </div>
    </div>
  );
};

export default Chess;
