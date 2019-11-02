<template>
  <v-container class="production-requirements" fill-height fluid pa-0>
    <v-layout column fill-height>
      <v-flex class="view-header" shrink>
        <v-layout column fill-height>
          <v-spacer />
          <v-flex shrink>
            <h1 class="font-weight-black text-no-wrap">
              PRODUCTION REQUIREMENTS
            </h1>
            <v-tabs v-model="tab" background-color="transparent">
              <v-tab v-for="empType in employeeTypes" :key="empType">
                {{ getEmployeeTypeName(empType) }}
              </v-tab>
            </v-tabs>
            <v-divider />
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex class="view-body" grow>
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="empType in employeeTypes" :key="empType">
            <v-layout class="list" row>
              <ProductTypeIcon
                v-for="pr in productionRequirements[empType]"
                :key="pr.id"
                :product-type-name="getProductTypeName(pr.productType)"
                :employee-level-name="getEmployeeLevelName(pr.employeeLevel)"
                :production-time="`${pr.productionTime}h`"
                :is-raw-component="pr.parts.length === 0"
                @mouseenter.native="onPttActivate(true, $event, pr)"
                @mouseleave.native="onPttActivate(false)"
              />
            </v-layout>
          </v-tab-item>
        </v-tabs-items>
      </v-flex>
      <ProductTypeTooltip :activator="pttActivator" :data="pttData" />
    </v-layout>
  </v-container>
</template>

<script lang="ts">
/* tslint:disable:member-ordering */

// --------------------------------------------------
// Lib
// --------------------------------------------------
import { Component, Vue } from 'vue-property-decorator';
import Enumerable from 'linq';

// --------------------------------------------------
// Model & Data
// --------------------------------------------------
import { Language, LANGUAGES } from '@/models/language';
import { EmployeeType, EMPLOYEE_TYPES } from '@/models/employeeType';
import { EmployeeLevel, EMPLOYEE_LEVELS } from '@/models/employeeLevel';
import { ProductType, PRODUCT_TYPES } from '@/models/productType';
import {
  ProductionRequirement,
  PRODUCTION_REQUIREMENTS,
} from '@/models/productionRequirement';
import { TextCategory, glbTexts } from '@/models/text';

// --------------------------------------------------
// Components
// --------------------------------------------------
import ProductTypeIcon from '@/components/ProductTypeIcon.vue';
import ProductTypeTooltip, {
  ProductTypeTooltipData,
} from '@/components/ProductTypeTooltip.vue';

@Component({
  components: {
    ProductTypeIcon,
    ProductTypeTooltip,
  },
})
export default class ProductionRequirements extends Vue {
  private tab: number = 0;

  //
  private currentLanguage: Language = Language.English;
  private languages: Language[] = LANGUAGES;
  private getLanguageName(language: Language): string {
    return glbTexts[TextCategory.LanguageName][language];
  }

  //
  private employeeTypes: EmployeeType[] = EMPLOYEE_TYPES;
  private getEmployeeTypeName(employeeType: EmployeeType) {
    return glbTexts[TextCategory.EmployeeTypeName][employeeType];
  }

  //
  private employeeLevels: EmployeeLevel[] = EMPLOYEE_LEVELS;
  private getEmployeeLevelName(employeeLevel: EmployeeLevel) {
    return glbTexts[TextCategory.EmployeeLevelName][employeeLevel];
  }

  //
  private getProductTypeName(productType: ProductType) {
    return glbTexts[TextCategory.ProductTypeName][productType];
  }

  // productionRequirements[EmployeeType][EmployeeLevel][index]
  private productionRequirements: ProductionRequirement[][] = Enumerable.from(
    PRODUCTION_REQUIREMENTS
  )
    .groupBy(o => o.employeeType)
    .select(g => g.toArray())
    .toArray();

  // --------------------------------------------------
  // ProductTypeTooltip: PTT/ptt
  // --------------------------------------------------
  private pttActivator: HTMLElement | null = null;
  private pttData: ProductTypeTooltipData | null = null;

  private onPttActivate(
    visibility: boolean,
    e: MouseEvent,
    data: ProductionRequirement
  ) {
    if (!visibility) {
      this.pttActivator = null;
      return;
    }
    this.pttActivator = e.target as HTMLElement;
    this.pttData = {
      productTypeName: this.getProductTypeName(data.productType),
      employeeTypeName: this.getEmployeeTypeName(data.employeeType),
      employeeLevelName: this.getEmployeeLevelName(data.employeeLevel),
      parts: data.parts.map(o => ({
        productTypeName: this.getProductTypeName(o.productType),
        quantity: o.quantity,
      })),
      productionTime: `${data.productionTime}h`,
    };
  }
}
</script>

<style lang="stylus" scoped>
$view-header-height = 120px;
$opacity = 0.15;

.view-header {
  height: $view-header-height;

  h1 {
    margin: 0.1em 1em;
    color: rgba(black, $opacity) !important;
  }
}

.view-body {
  background: #FAFAFA;

  .v-tabs-items {
    min-height: 100%;
    background: transparent !important;
  }
}

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
</style>