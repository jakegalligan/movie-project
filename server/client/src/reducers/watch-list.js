import {ADD_MOVIE} from '../actions/types'

export default function (state = [], action) {
    switch (action.type) {
        case ADD_MOVIE:
           let newState = [...state, action.payload]
            return newState;
    }
}