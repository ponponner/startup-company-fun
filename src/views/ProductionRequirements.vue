<template>
  <v-container class="production-requirements" fill-height fluid>
    <v-layout column fill-height>
      <v-flex class="view-header" shrink>
        <header>
          <v-layout column fill-height>
            <v-spacer />
            <v-flex shrink>
              <h1>{{ getUiText('ProductTypes') }}</h1>
              <v-tabs v-model="tab" background-color="transparent">
                <v-tab v-for="eType in employeeTypes" :key="eType.id">
                  {{ eType.name }}
                </v-tab>
              </v-tabs>
              <v-divider />
            </v-flex>
          </v-layout>
        </header>
      </v-flex>
      <v-flex class="view-body" shrink>
        <v-layout column>
          <v-flex>
            <v-tabs-items v-model="tab">
              <v-tab-item v-for="eType in employeeTypes" :key="eType.id">
                <v-layout class="list" row>
                  <ProductTypeIcon
                    v-for="pt in productTypes(eType.id)"
                    :key="pt.id"
                    :product-type-id="pt.id"
                    @mouseenter.native="onPttActivate(true, $event, pt.id)"
                    @mouseleave.native="onPttActivate(false)"
                    @click.native="increment(pt.id)"
                  />
                </v-layout>
              </v-tab-item>
            </v-tabs-items>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex class="view-header" shrink>
        <header>
          <h1>{{ getUiText('Requests') }}</h1>
        </header>
      </v-flex>
      <v-flex class="view-body" shrink>
        <ProductionRequests />
      </v-flex>
      <v-flex class="view-header" shrink>
        <header>
          <h1>{{ getUiText('Total') }}</h1>
        </header>
      </v-flex>
      <v-flex class="view-body" shrink>
        <ProductionRequestsTotal />
      </v-flex>
      <v-flex grow></v-flex>
      <ProductTypeTooltip :activator="pttActivator" :product-type-id="id4Ptt" />
    </v-layout>
  </v-container>
</template>

<script lang="ts">
/* tslint:disable:member-ordering */

// --------------------------------------------------
// Lib.
// --------------------------------------------------
import { Component, Vue } from 'vue-property-decorator';
import Enumerable from 'linq';

// --------------------------------------------------
// Models
// --------------------------------------------------
import {
  EmployeeLevel,
  EmployeeType,
  ProductType,
  ProductionRequirement,
} from '@/models';

// --------------------------------------------------
// Stores
// --------------------------------------------------
import { catalog } from '@/store/stores/catalog';
import { productionQueue } from '@/store/stores/productionCalculator';
import { texts, TEXT_CATEGORY_ID } from '@/store/stores/texts';

// --------------------------------------------------
// Components
// --------------------------------------------------
import ProductTypeIcon from '@/components/ProductTypeIcon.vue';
import ProductTypeTooltip from '@/components/ProductTypeTooltip.vue';
import ProductionRequests from '@/components/ProductionRequests.vue';
import ProductionRequestsTotal from '@/components/ProductionRequestsTotal.vue';

// --------------------------------------------------
// Component
// --------------------------------------------------
@Component({
  components: {
    ProductTypeIcon,
    ProductTypeTooltip,
    ProductionRequests,
    ProductionRequestsTotal,
  },
})
export default class ProductionRequirements extends Vue {
  private tab: number = 0;

  private get employeeTypes(): EmployeeType[] {
    return catalog.employeeTypes.values;
  }
  private productTypes(eTypeId: string): EmployeeType[] {
    return catalog.productionRequirements.values
      .filter(pr => pr.employeeType.id === eTypeId)
      .map(pr => catalog.productTypes.get(pr.productType.id));
  }

  // --------------------------------------------------
  // ProductionCalculator
  // --------------------------------------------------
  private increment(productTypeId: string) {
    productionQueue.increment(productTypeId);
  }
  private decrement(productTypeId: string) {
    productionQueue.decrement(productTypeId);
  }

  // --------------------------------------------------
  // ProductTypeTooltip: PTT/ptt
  // --------------------------------------------------
  private pttActivator: HTMLElement | null = null;
  private id4Ptt: string | null = null;

  private onPttActivate(
    visibility: boolean,
    e: MouseEvent,
    productTypeId: string
  ) {
    if (!visibility) {
      this.pttActivator = null;
      return;
    }
    this.pttActivator = e.target as HTMLElement;
    this.id4Ptt = productTypeId;
  }

  // --------------------------------------------------
  // Texts
  // --------------------------------------------------
  private getUiText(key: string) {
    return texts.getInSelected(
      TEXT_CATEGORY_ID.Ui__View__ProductionRequirements,
      key
    );
  }
}
</script>

<style lang="stylus">
$opacity = 0.15;

.production-requirements {
  padding: 0px !important;
  padding-bottom: 50px !important;

  .v-tabs-items {
    background: transparent !important;

    .list {
      $item-size = 80px;
      $item-spacing = 12px;
      $item-num-on-row = 9;
      $list-w = $item-size * $item-num-on-row + $item-spacing * $item-num-on-row;
      height: $item-size * 2 + $item-spacing * 5;
      margin: 0 !important;
      padding: 0 !important;
      padding-bottom: $item-spacing * 3 !important;
      width: $list-w !important;

      .product-type-icon {
        margin: $item-spacing 0 0 $item-spacing;
      }
    }
  }
}
</style>