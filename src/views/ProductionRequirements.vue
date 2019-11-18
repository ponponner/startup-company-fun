<template>
  <v-container class="production-requirements" fill-height fluid pa-0>
    <v-layout column fill-height>
      <v-flex class="view-header" shrink>
        <header>
          <v-layout column fill-height>
            <v-spacer />
            <v-flex shrink>
              <h1>PRODUCTION REQUIREMENTS</h1>
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
      <v-flex class="view-body" grow>
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="eType in employeeTypes" :key="eType.id">
            <v-layout class="list" row>
              <ProductTypeIcon
                v-for="pt in productTypes(eType.id)"
                :key="pt.id"
                :product-type-id="pt.id"
                @mouseenter.native="onPttActivate(true, $event, pt.id)"
                @mouseleave.native="onPttActivate(false)"
              />
            </v-layout>
          </v-tab-item>
        </v-tabs-items>
      </v-flex>
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

// --------------------------------------------------
// Components
// --------------------------------------------------
import ProductTypeIcon from '@/components/ProductTypeIcon.vue';
import ProductTypeTooltip from '@/components/ProductTypeTooltip.vue';

// --------------------------------------------------
// Component
// --------------------------------------------------
@Component({
  components: {
    ProductTypeIcon,
    ProductTypeTooltip,
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
}
</script>

<style lang="stylus" scoped>
$opacity = 0.15;

.v-tabs-items {
  min-height: 100%;
  background: transparent !important;

  .list {
    $item-size = 80px;
    $item-spacing = 12px;
    $item-num-on-row = 9;
    $list-w = $item-size * $item-num-on-row + $item-spacing * $item-num-on-row;
    margin: 0 !important;
    padding: 0 !important;
    width: $list-w !important;

    .product-type-icon {
      margin: $item-spacing 0 0 $item-spacing;
    }
  }
}
</style>