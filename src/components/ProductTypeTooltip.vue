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
          {{ pr != null && pr.productType.name }}
        </v-flex>
        <v-divider />
        <v-flex>
          <TemplatedTextNeo :template="template">
            <span class="font-weight-bold" :tag="TextTag.EmployeeTypeName">{{
              pr != null && pr.employeeType.name
            }}</span>
            <span :tag="TextTag.EmployeeLevelName">{{
              pr != null && pr.employeeLevel.name
            }}</span>
          </TemplatedTextNeo>
        </v-flex>
        <v-divider />
        <v-flex>
          <div v-if="pr != null && pr.parts.length === 0">
            {{ rowComponentName }}
          </div>
          <v-list v-else class="pa-0">
            <v-list-item-group>
              <v-list-item
                v-for="(item, i) in pr != null ? pr.parts : []"
                :key="i"
              >
                <v-list-item-icon>
                  <v-icon>fa-question-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="text-left">
                  <span class="font-weight-bold">{{ item.quantity }}</span>
                  <span class="ml-2">{{ item.productType.name }}</span>
                </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-flex>
        <v-divider />
        <v-flex>
          <span>Prod. Time: </span>
          <span class="font-weight-bold"
            >{{ pr != null && pr.productionTime }}h</span
          >
        </v-flex>
      </v-layout>
    </v-sheet>
  </v-menu>
</template>

<script lang="ts">
/* tslint:disable:member-ordering */

// --------------------------------------------------
// Lib.
// --------------------------------------------------
import { Hash } from '@/helpers/collections';

// --------------------------------------------------
// Vue
// --------------------------------------------------
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

// --------------------------------------------------
// Models
// --------------------------------------------------
import { ProductionRequirement } from '@/models/ProductionRequirement';

// --------------------------------------------------
// Stores
// --------------------------------------------------
import { catalog } from '@/store/stores/catalog';
import { texts, TEXT_CATEGORY_ID } from '@/store/stores/texts';

// --------------------------------------------------
// Component
// --------------------------------------------------
import TemplatedTextNeo from '@/components/TemplatedTextNeo.vue';

// --------------------------------------------------
// TemplatedText
// --------------------------------------------------
import { LanguageId } from '@/data/ids';
import { ProductType } from '@/models';
enum TextTag {
  EmployeeTypeName,
  EmployeeLevelName,
}
const TEMPLATES: Hash<string> = Hash.fromEntries([
  {
    key: LanguageId.English,
    value: `Created by [[${TextTag.EmployeeTypeName}]] ([[${TextTag.EmployeeLevelName}]])`,
  },
  {
    key: LanguageId.Japanese,
    value: `[[${TextTag.EmployeeTypeName}]] ([[${TextTag.EmployeeLevelName}]]) により作成される`,
  },
]);

// --------------------------------------------------
// Component
// --------------------------------------------------
@Component({
  components: {
    TemplatedTextNeo,
  },
})
export default class ProductTypeTooltip extends Vue {
  // --------------------------------------------------
  // Data
  // --------------------------------------------------
  @Prop() private productTypeId?: string;

  private get pr(): ProductionRequirement | null {
    return this.productTypeId != null
      ? catalog.productionRequirements.get(this.productTypeId)
      : null;
  }
  private get rowComponentName(): string | undefined {
    return ProductType.rowComponentName;
  }

  // --------------------------------------------------
  // TemplatedText
  // --------------------------------------------------
  private get TextTag(): typeof TextTag {
    return TextTag;
  }
  private get template(): string {
    return (
      TEMPLATES.tryGet(texts.selectedLanguageId) ||
      TEMPLATES.get(texts.defaultLanguageId)
    );
  }

  // --------------------------------------------------
  // Activator & Layout
  // --------------------------------------------------
  public static readonly width: number = 320;
  @Prop() private activator?: HTMLElement;

  private visibility = false;
  private positionX = 0;
  private positionY = 0;

  private get width(): number {
    return ProductTypeTooltip.width;
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
