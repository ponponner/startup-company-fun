<template>
  <v-simple-table class="production-requests" dense>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="product-type">{{ getUiText('ProductType') }}</th>
          <th class="employee-type">{{ getUiText('EmployeeType') }}</th>
          <th class="employee-level">{{ getUiText('EmployeeLevel') }}</th>
          <th class="quantity" colspan="3">{{ getUiText('Quantity') }}</th>
          <th class="remove"><v-btn x-small @click="clear()">clear</v-btn></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in requests" :key="item.productType.id">
          <td>{{ item.productType.name }}</td>
          <td>{{ item.employeeType.name }}</td>
          <td>{{ item.employeeLevel.name }}</td>
          <td class="quantity">
            <v-btn x-small @click="decrement(item.productType.id)">-</v-btn>
          </td>
          <td class="quantity">{{ item.quantity }}</td>
          <td class="quantity">
            <v-btn x-small @click="increment(item.productType.id)">+</v-btn>
          </td>
          <td class="remove">
            <v-btn x-small @click="remove(item.productType.id)">remove</v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script lang="ts">
/* tslint:disable:member-ordering */

// --------------------------------------------------
// Vue
// --------------------------------------------------
import { Component, Prop, Vue } from 'vue-property-decorator';

// --------------------------------------------------
// Models
// --------------------------------------------------
import { ProductType } from '@/models/ProductType';

// --------------------------------------------------
// Stores
// --------------------------------------------------
import { catalog } from '@/store/stores/catalog';
import { productionQueue } from '@/store/stores/productionCalculator';
import { texts, TEXT_CATEGORY_ID } from '@/store/stores/texts';

// --------------------------------------------------
// Component
// --------------------------------------------------
@Component
export default class ProductionRequests extends Vue {
  private get requests() {
    return productionQueue.requests.entries.map(e => {
      const pr = catalog.productionRequirements.get(e.key);
      return {
        productType: pr.productType,
        employeeType: pr.employeeType,
        employeeLevel: pr.employeeLevel,
        quantity: e.value,
      };
    });
  }

  private increment(productTypeId: string) {
    productionQueue.increment(productTypeId);
  }
  private decrement(productTypeId: string) {
    productionQueue.decrement(productTypeId);
  }
  private remove(productTypeId: string) {
    productionQueue.remove(productTypeId);
  }
  private clear() {
    productionQueue.requests.clear();
  }

  // --------------------------------------------------
  // Texts
  // --------------------------------------------------
  private getUiText(key: string) {
    return texts.getInSelected(
      TEXT_CATEGORY_ID.Ui__Component__ProductionRequests,
      key
    );
  }
}
</script>

<style lang="stylus">
.production-requests {
  th {
    &.product-type {
      width: 230px;
      min-width: 230px;
      max-width: 230px;
    }

    &.employee-type, &.employee-level {
      width: 150px;
      min-width: 150px;
      max-width: 150px;
    }
  }

  tbody > tr > td {
    white-space: nowrap;
  }

  .remove > .v-btn {
    width: 64px;
  }

  .quantity {
    width: 30px;
    text-align: center !important;

    &:nth-child(3) {
      width: 50px;
    }
  }
}
</style>
