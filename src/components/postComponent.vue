<template>
    <div class="post">
        <div class="post-img"></div>
        <div class="post-content">
            <p><span class="accent">100</span>좋아요 </p>
            <p><span class="accent">핀메이트</span></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellendus ducimus laboriosam eos nemo fuga harum magnam autem! Culpa, tempora? Veniam, natus commodi! Iure, libero? Quisquam architecto quas consectetur sint!</p>
            <p><span class="accent">2023-07-11 07:50:43</span></p>
        </div>
    </div>
    <div class="post" v-for="index in $store.state.boardData" :key="index">
        
        <div class="post-img" :class="index.filter" :style="{backgroundImage : `url('${index.img}')`}">
        </div>
        
        <div class="post-content" >
            <p><span class="accent">{{ index.likes }}</span>좋아요 </p>
            <p><span class="accent">{{ index.name }}</span></p>
            <p>{{ index.content }}</p>
            <p><span class="accent">{{ index.created_at }}</span></p>
        </div>
    </div>
    
</template>

<script>


export default {
    name: 'postComponent',
    components: {

    }
}
</script>