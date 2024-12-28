import { ChessDotCom_Game, ChessGame, ChessStats } from "@/types";
import { profile } from "console";
import { useEffect, useState } from "react";

const USERNAME = "the-skinner";

export const useLastGame = () => {
  const [data, setData] = useState<ChessStats>();
  const [loading, setLoading] = useState<boolean>(true);

  const get = async () => {
    const games = await getLast10Games();
    console.log(games);
    const lastGame = formatGameData(
      games.reduce((a, b) => (a.end_time > b.end_time ? a : b))
    );
    const chessData = {
      elo: lastGame.eloAfter,
      last_ten: {
        wins: games.filter((g) => g.white.username === USERNAME).length,
        losses: games.filter((g) => g.black.username === USERNAME).length,
      },
      last_game: lastGame,
      profile_link: `https://www.chess.com/member/${USERNAME}`,
    };
    setData(chessData);
    setLoading(false);
  };

  useEffect(() => {
    get();
  }, []);

  return { stats: data, loading };
};

async function getLast10Games() {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  const thisMonthGames = await getGamesByMonth(currentMonth, currentYear, 10);

  // If there are 10+ games this month, return the last 10
  if (thisMonthGames.length >= 10) {
    return thisMonthGames;
  } else {
    console.log("Not enough games this month");
  }

  // If there are less than 10 games this month, get the rest from last month
  const newMonth = currentMonth === 1 ? 12 : currentMonth - 1;
  const newYear = currentMonth === 1 ? currentYear - 1 : currentYear;
  const lastMonthGames = await getGamesByMonth(
    newMonth,
    newYear,
    10 - thisMonthGames.length
  );
  return [...lastMonthGames, ...thisMonthGames];
}

// Get All Games from Month
async function getGamesByMonth(month: number, year: number, maxNum: number) {
  const url = `https://api.chess.com/pub/player/${USERNAME}/games/${year}/${month}`;
  const res = await fetch(url);
  const { games } = await res.json();
  return games.slice(-maxNum) as ChessDotCom_Game[];
}

function formatGameData(game: ChessDotCom_Game): ChessGame {
  const wasWhite = game.white.username === USERNAME;

  if (wasWhite) {
    return {
      result: game.white.result === "win" ? "win" : "loss",
      date: formatDate(game.end_time),
      color: "white",
      opponent: game.black.username,
      eloAfter: game.white.rating,
    };
  } else {
    return {
      result: game.black.result === "win" ? "win" : "loss",
      date: formatDate(game.end_time),
      color: "black",
      opponent: game.white.username,
      eloAfter: game.black.rating,
    };
  }
}

function formatDate(date: number) {
  return new Date(date * 1000).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}
