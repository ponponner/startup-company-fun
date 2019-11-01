<template>
  <v-menu
    v-model="visibility"
    :position-x="positionX"
    :position-y="positionY"
    absolute
    offset-y
    open-on-hover
  >
    <v-sheet class="product-type-tooltip" :width="width" :elevation="0">
      <v-layout column>
        <v-flex class="font-weight-bold">
          {{ innerData.productTypeName }}
        </v-flex>
        <v-divider />
        <v-flex>
          <span>Created by </span>
          <span class="font-weight-bold">{{ innerData.employeeTypeName }}</span>
          <span> ({{ innerData.employeeLevelName }})</span>
        </v-flex>
        <v-divider />
        <v-flex>
          <div v-if="innerData.parts == null || innerData.parts.length === 0">
            Raw Component
          </div>
          <v-list v-else class="pa-0">
            <v-list-item-group>
              <v-list-item v-for="(item, i) in innerData.parts" :key="i">
                <v-list-item-icon>
                  <v-icon>fa-question-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="text-left">
                  <span class="font-weight-bold">{{ item.quantity }}</span>
                  <span class="ml-2">{{ item.productTypeName }}</span>
                </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-flex>
        <v-divider />
        <v-flex>
          <span>Prod. Time: </span>
          <span class="font-weight-bold">{{ innerData.productionTime }}</span>
        </v-flex>
      </v-layout>
    </v-sheet>
  </v-menu>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

export interface ProductTypeTooltipData {
  productTypeName: string;
  employeeTypeName: string;
  employeeLevelName: string;
  parts: Array<{ productTypeName: string; quantity: number }>;
  productionTime: string;
}

@Component
export default class ProductTypeTooltip extends Vue {
  public static readonly width: number = 320;
  @Prop() private activator?: HTMLElement;
  @Prop() private data?: ProductTypeTooltipData;

  private visibility = false;
  private positionX = 0;
  private positionY = 0;

  private get width(): number {
    return ProductTypeTooltip.width;
  }
  private get innerData(): ProductTypeTooltipData {
    return (this.data as ProductTypeTooltipData) || {};
  }

  @Watch('activator')
  private onActivatorChanged() {
    const activator = this.activator;

    // set to invisible
    if (activator == null) {
      this.visibility = false;
      return;
    }

    // set positions
    const rect = activator.getBoundingClientRect();
    this.positionX = rect.left + rect.width / 2 - this.width / 2;
    this.positionY = rect.bottom + 10;

    // set to visible
    this.$nextTick(() => (this.visibility = true));
  }
}
</script>

<style lang="stylus">
.product-type-tooltip {
  padding: 0 !important;
  width: 100px;
  padding: 16px;

  .flex {
    padding: 0.3em 1em;
    text-align: center;

    &:first-child {
      background: rgba(black, 0.1);
    }

    .font-weight-bold {
      // color: #555;
    }
  }
}
</style>
