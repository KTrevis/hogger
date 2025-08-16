import { Classes } from "./classes/classes";
import { LevelCap } from "./level-cap";

export function Main(events: TSEvents) {
  Classes.main(events);
  LevelCap.main(events);
}
