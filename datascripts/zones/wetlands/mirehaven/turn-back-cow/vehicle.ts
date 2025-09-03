import { std } from "wow/wotlk";
import { HORSE_VEHICULE } from "../../../../transports/vehicles/horse-vehicle-mount";

export const COW_VEHICULE = std.Vehicles.create(HORSE_VEHICULE.ID)
  .Flags.NO_JUMPING.set(true)
  .Flags.NO_STRAFE.set(true);

COW_VEHICULE.Seats.modRefCopy(0, (seat) => seat.Attachment.OffsetZ.set(1.5));
