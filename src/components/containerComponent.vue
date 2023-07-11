<template>
    <!-- list  -->
    <div>
        <postComponent></postComponent>
    </div>
    <!-- image filter -->
    <div>
        <div class="upload-img"></div>
        <div class="filter-box">
            <div class="filter"></div>
            <div class="filter"></div>
            <div class="filter"></div>
            <div class="filter"></div>
            <div class="filter"></div>
            <div class="filter"></div>
            <div class="filter"></div>
        </div>
    </div>
    <!-- write -->
    <div>
        <div class="upload-img"></div>
        <div>
            <textarea class="write-box" name="content" id="content" placeholder="글 작성 공간"></textarea>
        </div>
    </div>
</template>

<script>
import postComponent from './postComponent.vue';

export default {
    name: 'containerComponent',
    components: {
        postComponent,
    }
}
</script>