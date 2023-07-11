import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state(){
        return{
            boardData: [],
            lastId: '',
        }
    },
    mutations: {
        createBoardData(state, data){
            state.boardData = data;
            this.commit('changeLastId', data[data.length - 1].id);
            console.log(data[data.length - 1].id);
            
        },
        addBoardData(state, data){
            state.boardData.push(data);
            this.commit('changeLastId', data.id);
        },
        changeLastId(state, id){
            state.lastId = id;
        }
    },
    actions: {
        getMainList(context) {
            axios.get('http://192.168.0.66/api/boards')
            .then(res => {
                // console.log(res.data[0]['id']);
                // context.boardData = res.data;
                context.commit('createBoardData', res.data);
            })
            .catch( err => {
                console.log(err)
            })
        },
        getMoreList(context){
            axios.get('http://192.168.0.66/api/boards/' + context.state.lastId)
                .then(res => {
                    if (res.data) {
                        context.commit('addBoardData', res.data);
                    } else {
                        alert('마지막 글입니다.');
                        document.getElementById('moreBtn').style.display = 'none';
                    }
                })
                .catch( err => {
                    console.log(err)
                })
        }
    },
})

export default store;