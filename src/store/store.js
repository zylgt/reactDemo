import { createStore } from 'redux';
import allReducers from './reducers';
const store = createStore(allReducers);
// 监听store值的变化，将数据存储本地防止刷新丢失
store.subscribe(()=>{
    let state = store.getState()
    localStorage.setItem('dataSoucer', JSON.stringify(state.dataSource))
})
export default store;