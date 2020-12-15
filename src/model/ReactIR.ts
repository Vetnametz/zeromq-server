import { DeviceState, ConnectionType, InterlockState } from '../enum';
import { ReactIRParams } from '../interface';
import { NetworkInterfaceInfo, networkInterfaces } from 'os';
import faker from 'faker';

export class ReactIR {
    constructor() {
        
    }

    generateFakeReactIR(): ReactIRParams {
        return {
            orientation:faker.random.objectElement({one: 90, two: 0}),
            state: this.getRandomEnum(DeviceState),
            interlock: this.getRandomEnum(InterlockState),
            ip: this.getPrivateIPNInfos()[0]?.address || '0.0.0.0',
            connection: this.getRandomEnum(ConnectionType),
            fw: faker.lorem.word(),
            friendlyName: faker.name.firstName(),
            experiment: faker.hacker.abbreviation(),
            expTimeRemaining: faker.date.past(),
            sensorTemperature: faker.random.number(100),
        }
        
    }

    private getPrivateIPNInfos = (): (NetworkInterfaceInfo | undefined)[] => {
        return Object.values(networkInterfaces())
            .flatMap((infos) => {
                return infos?.filter((i) => i.family === 'IPv4');
            })
            .filter((info) => {
                return (
                info?.address.match(
                    /(^127\.)|(^10\.)|(^172\.1[6-9]\.)|(^172\.2[0-9]\.)|(^172\.3[0-1]\.)|(^192\.168\.)/
                ) !== null
                );
            });
    };

    private getRandomEnum<T extends object>(anEnum: T): T[keyof T] {
        const enumValues = Object.keys(anEnum).map(key => key);
        const randomIndex = Math.floor(Math.random() * enumValues.length)

        return anEnum[enumValues[randomIndex] as keyof T];
    }
}
