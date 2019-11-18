/* tslint:disable:member-ordering */

// --------------------------------------------------
// Lib.
// --------------------------------------------------
import { Hash } from '@/helpers/collections';

// --------------------------------------------------
// Vuex
// --------------------------------------------------
import {
  Module,
  VuexModule,
  getModule,
  Mutation,
} from 'vuex-module-decorators';
import store from '@/store';

// --------------------------------------------------
// Models
// --------------------------------------------------
import {
  EmployeeLevel,
  EmployeeType,
  Language,
  ProductType,
  ProductionRequirement,
} from '@/models';

// --------------------------------------------------
// Data
// --------------------------------------------------
import {
  EMPLOYEE_LEVEL_IDS,
  EMPLOYEE_TYPE_IDS,
  LANGUAGE_IDS,
  PRODUCT_TYPE_IDS,
} from '@/data/ids';
import {
  PRODUCTION_REQUIREMENT_DEFINITIONS,
  //
} from '@/data/relations';

// --------------------------------------------------
// Module
// --------------------------------------------------
@Module({ dynamic: true, store, name: 'catalog', namespaced: true })
class Catalog extends VuexModule {
  public readonly employeeLevels: Hash<EmployeeLevel>;
  public readonly employeeTypes: Hash<EmployeeType>;
  public readonly languages: Hash<Language>;
  public readonly productTypes: Hash<ProductType>;
  public readonly productionRequirements: Hash<ProductionRequirement>;

  constructor(module: any) {
    super(module);
    this.employeeLevels = new Hash();
    this.employeeTypes = new Hash();
    this.languages = new Hash();
    this.productTypes = new Hash();
    this.productionRequirements = new Hash();
    this.loadData();
  }

  @Mutation
  public loadData() {
    EMPLOYEE_LEVEL_IDS.forEach(id => {
      this.employeeLevels.set(id, new EmployeeLevel(id));
    });
    EMPLOYEE_TYPE_IDS.forEach(id => {
      this.employeeTypes.set(id, new EmployeeType(id));
    });
    LANGUAGE_IDS.forEach(id => {
      this.languages.set(id, new Language(id));
    });
    PRODUCT_TYPE_IDS.forEach(id => {
      this.productTypes.set(id, new ProductType(id));
    });
    PRODUCTION_REQUIREMENT_DEFINITIONS.forEach(def => {
      const parts = def.parts.map(p => {
        return {
          productType: this.productTypes.get(p.productTypeId),
          quantity: p.quantity,
        };
      });
      this.productionRequirements.set(
        def.id,
        new ProductionRequirement(
          def.id,
          this.productTypes.get(def.productTypeId),
          this.employeeTypes.get(def.employeeTypeId),
          this.employeeLevels.get(def.employeeLevelId),
          def.productionTime,
          parts
        )
      );
    });
  }
}

export const catalog = getModule(Catalog);
