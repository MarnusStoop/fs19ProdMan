import { FactoryInput } from './FactoryInput';
import { FactoryOutput } from './FactoryOutput';

export interface FactoryDetail {
    Id: number;
    Name: string;
    Inputs: FactoryInput[];
    Outputs: FactoryOutput[];
}
