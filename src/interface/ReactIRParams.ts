import { DeviceState, ConnectionType } from "../enum";

export interface ReactIRParams {
    orientation: Number;
    state: DeviceState;
    ip: String;
    connection: ConnectionType;
    fw: String;
    friendlyName: String;
    experiment: String;
    expTimeRemaining: Date;
    sensorTemperature: Number;
}
