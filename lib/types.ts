export interface Song {
  id: number;
  title: string;
  artist: string;
  duration: string;
  lang: 'en' | 'es';
  emoji: string;
  bgClass: string;
  youtubeId?: string;
}

export interface ContestEntry {
  id: number;
  rank: number;
  title: string;
  artist: string;
  country: string;
  votes: number;
  votePercent: number;
  emoji: string;
  bgGradient: string;
}

export interface Event {
  id: number;
  title: string;
  city: string;
  country: string;
  countryFlag: string;
  date: string;
  status: 'upcoming' | 'past';
}
