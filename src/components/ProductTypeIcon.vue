<template>
  <v-card
    :class="['product-type-icon', isRawComponent ? 'raw-component' : '']"
    v-ripple
  >
    <v-layout column fill-height>
      <v-flex class="name" grow>
        {{ productTypeName }}
      </v-flex>
      <v-divider />
      <v-flex class="etc" shrink>
        {{ employeeLevelName }}
      </v-flex>
      <v-divider />
      <v-flex class="etc" shrink>
        {{ productionTime }}
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ProductTypeIcon extends Vue {
  public static readonly className = 'product-type-icon';
  @Prop() private productTypeName!: string;
  @Prop() private employeeLevelName!: string;
  @Prop() private productionTime!: string;
  @Prop() private isRawComponent!: boolean;
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
