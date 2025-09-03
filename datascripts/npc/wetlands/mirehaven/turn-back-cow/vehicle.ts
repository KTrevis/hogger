import { std } from "wow/wotlk";
import { HORSE_VEHICULE } from "../../../../transports/vehicles/horse-vehicle-mount";

export const COW_VEHICULE = std.Vehicles.create(HORSE_VEHICULE.ID);

COW_VEHICULE.Seats.modRef(0, (seat) => seat.Attachment.OffsetZ.set(1.5));
