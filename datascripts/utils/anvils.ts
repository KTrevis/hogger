import { std } from "wow/wotlk";
import { MODULE_NAME } from "./constants";

std.GameObjectTemplates.Generic.load(4087).Spawns.add(
  MODULE_NAME,
  "anvil-spawns",
  [
    { map: 0, x: -3751.662842, y: -2280.208984, z: 168.182037, o: 3.019495 },
    { map: 0, x: -3764.155518, y: -2284.112793, z: 168.181885, o: 3.153013 },
  ]
);
