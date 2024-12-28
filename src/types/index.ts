/* Posts */
export type PostData = {
  title: string;
  slug: string;
  date: string;
  status: "public" | "draft";
  redirect?: string;
};

export type Post = {
  data: PostData;
  content: string;
};

/* CHESS */

export type ChessDotCom_Player = {
  url: string;
  username: string;
  last_online: string;
  fide: number;
};

export type ChessDotCom_Stats = {
  chess_rapid: {
    last: {
      rating: number;
      date: string;
      rd: number;
    };
  };
};

export type ChessDotCom_Game = {
  end_time: number;
  time_class: "rapid";
  url: string;
  black: {
    username: string;
    rating: number;
    result: string;
  };
  white: {
    username: string;
    rating: number;
    result: string;
  };
};

export type ChessGame = {
  result: "win" | "loss" | "draw";
  date: string;
  color: "white" | "black";
  opponent: string;
  eloAfter: number;
};

export type ChessStats = {
  elo: number;
  last_ten: {
    wins: number;
    losses: number;
  };
  last_game: ChessGame;
  profile_link: string;
};
