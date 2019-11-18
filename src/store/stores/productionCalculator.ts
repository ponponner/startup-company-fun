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
// Stores
// --------------------------------------------------
import { catalog } from '@/store/stores/catalog';

// --------------------------------------------------
// Module
// --------------------------------------------------
@Module({
  dynamic: true,
  store,
  name: 'productionCalculator',
  namespaced: true,
})
class ProductionCalculator extends VuexModule {
  public readonly requests: Hash<number>;

  constructor(module: any) {
    super(module);

    this.requests = new Hash();
  }

  public get results() {
    const totalReqs: Hash<number> = new Hash();
    let tmpReqs1: Hash<number> = Hash.fromEntries(this.requests.entries);
    let tmpReqs2: Hash<number> | undefined;
    while (tmpReqs1.size !== 0) {
      // tmpReqs2 = 0
      tmpReqs2 = new Hash();

      for (const req of tmpReqs1.entries) {
        // totalReqs += tmpReqs1
        const id = req.key;
        const qty = req.value;
        totalReqs.set(id, (totalReqs.tryGet(id) || 0) + qty);

        // tmpReqs2 += (parts of req)
        const pr = catalog.productionRequirements.values.find(
          o => o.productType.id === id
        );
        if (pr == null) {
          throw new Error();
        }
        for (const part of pr.parts) {
          const id2 = part.productType.id;
          const qty2 = part.quantity;
          tmpReqs2.set(id2, (tmpReqs2.tryGet(id2) || 0) + qty2 * qty);
        }
      }
      // tmpReqs1 = tmpReqs2
      tmpReqs1 = tmpReqs2;
    }
    return totalReqs;
  }

  @Mutation
  public increment(productTypeId: string) {
    const newQty = (this.requests.tryGet(productTypeId) || 0) + 1;
    this.requests.set(productTypeId, newQty);
  }
  @Mutation
  public decrement(productTypeId: string) {
    const newQty = (this.requests.tryGet(productTypeId) || 0) - 1;
    if (newQty === 0) {
      this.requests.remove(productTypeId);
    } else {
      this.requests.set(productTypeId, newQty);
    }
  }
  @Mutation
  public remove(productTypeId: string) {
    this.requests.remove(productTypeId);
  }
}

export const productionQueue = getModule(ProductionCalculator);
