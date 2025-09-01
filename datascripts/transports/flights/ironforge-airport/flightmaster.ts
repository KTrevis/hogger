import { std } from "wow/wotlk";
import { MODULE_NAME } from "../../../utils/constants";
import { FlightNodeIds } from "../../../utils/flight-node-ids";

const FLIGHT_MASTER_SPAWN = {
  map: 0,
  x: -4487.191406,
  y: -1578.791138,
  z: 509.005005,
  o: 3.810882,
};

const FLIGHT_MASTER = std.CreatureTemplates.create(
  MODULE_NAME,
  "ironforge-airport-flightmaster",
  1573
).Spawns.add(
  MODULE_NAME,
  "ironforge-airport-flightmaster-spawn",
  FLIGHT_MASTER_SPAWN
);

const NODES = [
  { map: 0, x: -5403.278809, y: -2609.519531, z: 501.50177, o: 1.495386 },
  { map: 0, x: -5394.007324, y: -2333.615967, z: 547.595154, o: 1.550364 },
  { map: 0, x: -5022.93457, y: -1663.914551, z: 594.006348, o: 1.039855 },
  { map: 0, x: -4786.474121, y: -1652.375122, z: 531.247803, o: 0.05418 },
  { map: 0, x: -4570.463867, y: -1639.800659, z: 516.00116, o: 0.05418 },
  { map: 0, x: -4492.536621, y: -1582.382568, z: 512.505127, o: 0.658937 },
];

std.Taxi.createBiFromNode(
  MODULE_NAME,
  "ironforge-airport-flightmaster-taxi",
  "FLIGHTPATH",
  FlightNodeIds.THELSAMAR,
  0,
  0,
  NODES
).EndName.enGB.set("Ironforge Airport, Dun Morogh");

std.GMTeleports.create()
  .Position.set(FLIGHT_MASTER_SPAWN)
  .Name.set("airportironforge");
