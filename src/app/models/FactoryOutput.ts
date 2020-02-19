import { FactoryIOType } from './Enums';

export interface FactoryOutput {
    Amount: number;
    Name: string;
    IOType: FactoryIOType;
    NeededPerPallet: number;
}
