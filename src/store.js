import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state(){
        return{
            boardData: [],
            lastId: '',
            tabFlg: 0,
            imgUrl: '',
            imgFilter: '',
            contentText: '',
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
        },
        changeTabFlg(state, num){
            state.tabFlg = num;
        },
        uploadFile(state, uploadFile){
            state.uploadFile = uploadFile;
        },
        changeImgUrl(state, imgUrl){
            state.imgUrl = imgUrl;
        },
        changeFilter(state, imgFilter){
            state.filter = imgFilter;
        },
        clearState(state){
            state.imgUrl = '';
            state.filter = '';
        },
        
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
        },
        writeContent(context){
            const header = {
                headers: {
                    'Content-Type' : 'multipart/form-data',
                }
            }

            const imgFilter = context.filter;
            const uploadFile = context.uploadFile;
            const contentText = context.content;

            const uploadData = {
                name: '노수빈', //고정
                filter: imgFilter, //값 받아오기
                img: uploadFile, //값 받아오기.. url 대신 파일 받아오기
                content: contentText, //값 받아오기
            }

            axios.post('http://192.168.0.66/api/boards', uploadData, header)
                .then(res => context.id = res.data.id)
                .catch(err => {
                    console.log(err)
                })
        }
    },
})

export default store;