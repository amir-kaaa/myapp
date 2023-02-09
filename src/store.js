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
    addNewText(text) {
        this.state.arr4 = text;
        console.log(this.state.arr4)
    },
    callSubscriber() {
        console.log('State is changed')
    },
    addText(text) {
        let newText = text;
        this.state.arr3.push(newText);
        this.callSubscriber(this.state)
    },
    subscribe(observer) {
        this.callSubscriber = observer;
    }
}

export default store;