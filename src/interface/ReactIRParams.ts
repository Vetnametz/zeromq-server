import { DeviceState, ConnectionType, InterlockState } from "../enum";

export interface ReactIRParams {
    orientation: Number;
    state: DeviceState;
    interlock: InterlockState;
    ip: String;
    connection: ConnectionType;
    fw: String;
    friendlyName: String;
    experiment: String;
    expTimeRemaining: Date;
    sensorTemperature: Number;
}
