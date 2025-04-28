import type { Route } from "./+types/home";
import { Game } from "~/game/game";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Titlu Daniel" },
  ];
}

export default function Home() {
  return <Game />;
}
