<template>
  <div class="pd-table">
    <div class="pd-thead" v-if="hasHeader">
      <div
        v-for="({ label, position, tooltip, space, margin }, index) in header"
        scope="col"
        :key="index"
        :ref="`col-${index}`"
        :class="[ 'th-padding',
          position ? `align-${position}` : 'align-left',
          space ? `width-${space}` : 'width-full',
          margin ? `th-margin` : 'null',
        ]"
      >
        <p class="ml-3">
          {{ label }}
          <span
            v-if="tooltip"
            class="tooltip-icon"
            v-tooltip:right="$t(`${tooltip}`)"
          >
            <ds-image :name="`${getTheme || 'default'}-question`" />
          </span>
        </p>
      </div>
    </div>
    <div class="pd-tbody">
      <!-- {{value}} -->
      <div class="pd-tbody-tr" v-for="(item, index) in value" :key="index">
        <div
          class="pd-tbody-td"
          v-for="(col, colIndex) in header"
          :key="`${col.name}-${colIndex}`"
          :class="[
            col.position ? `td-position-${col.position}` : 'td-position-left',
            col.space ? `width-${col.space}` : 'width-full',
          ]"
        >
          <slot :name="col.name" :data="item"> </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DsImage from './DsImage.vue'
export default {
  name: 'PdTable',
  components: {
    DsImage
  },
  props: {
    header: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    hasHeader () {
      return !!this.header.length
    },
    hasData () {
      return !!this.value.length
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.pd-table {
  // width: 100%;
  .pd-thead {
    display: flex;
    min-width: 500px;
    padding: 12px 0;
    p {
      font-weight: 600;
      color: #333333;
      font-size: 14px;
      line-height: normal;
      font-family: 'PingFang SC ', 'PingFang SC', sans-serif;

    }
  }
  .pd-tbody {
    &-tr {
      border-top: 1px solid #e5e5e5;
      display: flex;
      align-items: center;
      padding: 13px 0;
      .pd-tbody-td {
        display: flex;
        padding: 2px 15px 2px 15px;
        width: 100%;
        height: 48px;
        align-items: center;
        p,a{
    font-family: 'Arial', sans-serif;
    color: #333333;
    text-align: left;
    line-height: normal;
    font-size: 12px
        }
      }
      .pd-tbody-td:hover {
          background: #e4e4e482;
      }
    }
  }
}
.align {
  &-center {
    text-align: center;
  }
  &-left {
    text-align: left;
  }
  &-right {
    text-align: right;
  }
}

.td-position {
  &-left {
    justify-content: flex-start;
  }
  &-center {
    justify-content: center;
  }
  &-right {
    justify-content: flex-end;
  }
}
.th-margin {
  margin-left: 20px;
}

.width {
  &-status {
    width: 320px !important;
  }
  &-full {
    width: 220px !important;
  }
  &-half {
    width: 162px !important;
  }
  &-action {
    flex: 240px !important;
  }
  &-trnsDate{
    flex: 562px !important;
  }
}
.th-padding{
  padding: 2px 15px 2px 15px;
  width: 100%;
}
.tooltip-icon {
  img {
    width: 18px;
    height: 18px;
  }
}
</style>
