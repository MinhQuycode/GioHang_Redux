import {combineReducers} from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer';

const rootReducer = combineReducers({//Store tổng của ứng dụng
    stateGioHang: BaiTapGioHangReducer //state giỏ hàng
})

export default rootReducer;