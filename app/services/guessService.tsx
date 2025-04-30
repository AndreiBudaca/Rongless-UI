import axios from "axios";

export interface Video {
  video_id: string;
  video_title: string;
  thumbnail: string;
}

export interface VideosList {
  videos: Video[]
}

export interface DailyVideo {
  date: Date;
  video: Video
}

export async function GetSongs() {
  const response = await axios.get<VideosList>("https://rongless-api-6a665316a7c2.herokuapp.com/extract_metadata");

  return response.data;
}

export async function GetDailySongs() {
  const response = await axios.get<DailyVideo>("https://rongless-api-6a665316a7c2.herokuapp.com/daily_video");

  return response.data;
}
