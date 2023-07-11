<template>
    <!-- list  -->
    <div v-if="$store.state.tabFlg == 0">
        <postComponent></postComponent>
    </div>
    <!-- image filter -->
    <div v-if="$store.state.tabFlg == 1">
        <div class="upload-img" :class="$store.state.filter" :style="{ backgroundImage: `url('${$store.state.imgUrl}')` }"></div>
        <div class="filter-box">
            <div class="filter" @click="$store.commit('changeFilter', index)" :class="index" v-for="index in filterList" :key="index" :style="{ backgroundImage: `url('${$store.state.imgUrl}')` }">
                <span>
                    {{ index }}
                </span>
            </div>

        </div>
    </div>
    <!-- write -->
    <div v-if="$store.state.tabFlg == 2">
        <div class="upload-img" :class="$store.state.filter" :style="{ backgroundImage: `url('${$store.state.imgUrl}')` }"></div>
        <div>
            <textarea class="write-box" name="content" id="content" placeholder="글 작성 공간"></textarea>
        </div>
    </div>
</template>

<script>
import postComponent from './postComponent.vue';

export default {
    name: 'containerComponent',
    data(){
        return {
            filterList: ["aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"]
        }
    },
    components: {
        postComponent,
    }
}
</script>