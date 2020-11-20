import {DEL, EDIT, ADD} from './actionType'
const defaultState = {
    dataSource:localStorage['dataSoucer']?JSON.parse(localStorage['dataSoucer']):[]
}

const proDuct = (state = defaultState, action) => {
  var newData = state.dataSource
  switch(action.type){
    case ADD:
        action.data.key = newData.length +1
        newData.push(action.data)
        return {dataSource:newData}  
    case DEL:
      newData = newData.filter(item=> item.key!==action.data)
      return {dataSource:newData}
    case EDIT:
      newData.forEach(item => {
        if(item.key == action.key){
          item.type = action.data.type 
          item.specs = action.data.specs 
          item.stock = action.data.stock 
          item.date = action.data.date 
          item.lot = action.data.lot 
          item.lot = action.data.lot 
          item.money = action.data.money
        }
      })
      return {dataSource:newData}  
    default:
        return state
  }
}

export default proDuct