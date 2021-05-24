import { DeviceState, ConnectionType, InterlockState } from "../enum";
import faker from "faker";

export interface ReactIRParams {
    orientation: Object;
    state: DeviceState;
    ip_address: String;
    network: ConnectionType;
    friendly_name: String;
    probe: Object,
    key: Object,
    door: Object,
    laser: Object
    file_name: String;
    time_remaining: Date;
    set_temperature: Number;
    // fw: String;
    // interlock: InterlockState;
}
