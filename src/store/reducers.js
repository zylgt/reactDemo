
import {DEL} from './actionType'
const defaultState = {
    dataSource:[
        {
          key: '1',
          type:'BPM1',
          name:'5907',
          specs:'1',
          money:'199',
          stock:'999',
          date:'2020-08-09',
          lot:'202008090056',
          img:'https://cnbj2.fds.api.xiaomi.com/webfiles/detail-img416071590370824.jpeg'
        },
        {
          key: '2',
          type:'BPM2',
          name:'5907',
          specs:'1',
          money:'199',
          stock:'999',
          date:'2020-08-09',
          lot:'202008090056',
          img:'https://cnbj2.fds.api.xiaomi.com/webfiles/detail-img416071590370824.jpeg'
        },
        {
          key: '3',
          type:'BPM3',
          name:'5907',
          specs:'1',
          money:'199',
          stock:'999',
          date:'2020-08-09',
          lot:'202008090056',
          img:'https://cnbj2.fds.api.xiaomi.com/webfiles/detail-img416071590370824.jpeg'
        },
        {
          key: '4',
          type:'BPM4',
          name:'5907',
          specs:'1',
          money:'199',
          stock:'999',
          date:'2020-08-09',
          lot:'202008090056',
          img:'https://cnbj2.fds.api.xiaomi.com/webfiles/detail-img416071590370824.jpeg'
        },
        {
          key: '5',
          type:'BPM5',
          name:'5907',
          specs:'1',
          money:'199',
          stock:'999',
          date:'2020-08-09',
          lot:'202008090056',
          img:'https://cnbj2.fds.api.xiaomi.com/webfiles/detail-img416071590370824.jpeg'
        }
    ]
}

const del = (state = defaultState, action) =>{
    switch(action.type){
        case DEL:
            let newData = state.dataSource.filter(item=> item.key!==action.data)
            return {dataSource:newData}
        default:
            return state
    }
}

export default del