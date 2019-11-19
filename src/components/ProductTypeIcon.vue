<template>
  <v-card
    :class="['product-type-icon', isRawComponent ? 'raw-component' : '']"
    v-ripple
  >
    <v-layout column fill-height>
      <v-flex class="name" grow>
        {{ productType.name }}
      </v-flex>
      <v-divider />
      <v-flex class="etc" shrink>
        {{ employeeLevel.name }}
      </v-flex>
      <v-divider />
      <v-flex class="etc" shrink>
        <span>{{ pr.productionTime }}</span>
        <span>h</span>
      </v-flex>
    </v-layout>
  </v-card>
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
import { EmployeeLevel } from '@/models/EmployeeLevel';
import { ProductionRequirement } from '@/models/ProductionRequirement';
import { ProductType } from '@/models/ProductType';

// --------------------------------------------------
// Stores
// --------------------------------------------------
import { catalog } from '@/store/stores/catalog';

// --------------------------------------------------
// Component
// --------------------------------------------------
@Component
export default class ProductTypeIcon extends Vue {
  public static readonly className = 'product-type-icon';

  @Prop() private productTypeId!: string;

  private get employeeLevel(): EmployeeLevel {
    return catalog.employeeLevels.get(this.pr.employeeLevel.id);
  }
  private get isRawComponent(): boolean {
    return this.pr.parts.length === 0;
  }
  private get pr(): ProductionRequirement {
    return catalog.productionRequirements.values.filter(
      o => o.productType.id === this.productTypeId
    )[0];
  }
  private get productType(): ProductType {
    return catalog.productTypes.get(this.productTypeId);
  }
}
</script>

<style lang="stylus">
// ---------------
// variables
// ---------------
$size = 80px;

// ---------------
// common-classes
// ---------------
.text-ellipse {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

// ---------------
// specify-classes
// ---------------
.product-type-icon {
  height: $size;
  width: $size;
  padding: 4px;

  &.raw-component {
    border-radius: 50% !important;
  }

  &.raw-component::before {
    border-radius: 50% !important;
  }

  // overlay(invisible)
  &::before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: gray;
    opacity: 0;
  }

  // overlay(visible)
  &:hover::before {
    opacity: 0.1;
  }

  .name {
    font-size: 13px !important;
    @extend .text-ellipse;
  }

  .etc {
    font-size: 12px !important;
    @extend .text-ellipse;
  }
}
</style>
