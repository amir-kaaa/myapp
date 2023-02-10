const ADD_TEXT = 'ADD-TEXT'
const ADD_NEW_TEXT = 'ADD-NEW-TEXT'

let store = {

    state: {
        arr1: {
            logo1: 'УИ ГА',
            logo2: 'УИ ГА им. Б.П.Бугаева',
            abiturientam: 'Абитуриентам',
            rabotnikam: 'Работникам',
            posetitelyam: 'Посетителям',
            studentam: 'Студентам'
        },
        arr2: [
            'Новости',
            'Мероприятия',
            'Образование',
            'Наука',
            'Об УИ ГА'
        ],
        arr3: [],
        arr4: '',
    },
    callSubscriber() {
        console.log('State is changed')
    },
    subscribe(observer) {
        this.callSubscriber = observer;
    },
    dispatch(action) {

        switch (action.type) {
            case ADD_TEXT:
                let newText = action.text;
                this.state.arr3.push(newText);
                this.callSubscriber(this.state)
                break
            case ADD_NEW_TEXT:
                this.state.arr4 = action.text;
                break
            default:
        }
    }
}

export const addTextActionCreator = (newText) => ({ type: ADD_TEXT, text: newText })
export const addNewTextActonCreator = (newText) => ({ type: ADD_NEW_TEXT, text: newText })

export default store;