import { ProductType } from './ProductType';
import { EmployeeType } from './EmployeeType';
import { EmployeeLevel } from './EmployeeLevel';

export interface ProductionRequirementPart {
  productType: ProductType;
  quantity: number;
}

export class ProductionRequirement {
  public readonly id: string;
  public readonly productType: ProductType;
  public readonly employeeType: EmployeeType;
  public readonly employeeLevel: EmployeeLevel;
  public readonly productionTime: number;
  public readonly parts: ProductionRequirementPart[];

  constructor(
    id: string,
    productType: ProductType,
    employeeType: EmployeeType,
    employeeLevel: EmployeeLevel,
    productionTime: number,
    parts: ProductionRequirementPart[]
  ) {
    this.id = id;
    this.productType = productType;
    this.employeeType = employeeType;
    this.employeeLevel = employeeLevel;
    this.productionTime = productionTime;
    this.parts = parts;
  }
}
