import { DeviceState, ConnectionType, InterlockState } from '../enum';
import { ReactIRParams } from '../interface';
import { NetworkInterfaceInfo, networkInterfaces } from 'os';
import faker from 'faker';

export class ReactIR {
    constructor() {
        
    }

    generateFakeReactIR(): ReactIRParams {
        return {
            orientation:faker.random.objectElement({one: 90, two: 0, three: 270}),
            state: this.getRandomEnum(DeviceState),
            ip_address: this.getPrivateIPNInfos()[0]?.address || '0.0.0.0',
            network: this.getRandomEnum(ConnectionType),
            friendly_name: faker.name.firstName(),
            probe:faker.random.objectElement({one: 0, two: 1 }),
            key:faker.random.objectElement({one: 0, two: 1 }),
            door:faker.random.objectElement({one: 0, two: 1 }),
            laser:faker.random.objectElement({one: 0, two: 1 }),
            file_name: faker.hacker.abbreviation(),
            time_remaining: faker.date.past(),
            set_temperature: faker.random.number(100),
            // interlock: this.getRandomEnum(InterlockState),
            // fw: faker.lorem.word(),
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
