import { Hero } from "../components/home/Hero";
import { StatStrip } from "../components/home/StatStrip";
import { WhoHeIs } from "../components/home/WhoHeIs";
import { AgendaTeaser } from "../components/home/AgendaTeaser";
import { AchievementsStrip } from "../components/home/AchievementsStrip";
import { MastermindTeaser } from "../components/home/MastermindTeaser";
import { PledgeWallTeaser } from "../components/home/PledgeWallTeaser";

export function Home() {
  return (
    <>
      <Hero />
      <StatStrip />
      <WhoHeIs />
      <AgendaTeaser />
      <AchievementsStrip />
      <MastermindTeaser />
      <PledgeWallTeaser />
    </>
  );
}
