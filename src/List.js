const setBtn = (todo) => {

    let new_arr = [...arr]

    let new_obj = new_arr.map(user => {
        if (user.key === todo.key) {
            if (user.isDone === '완료!') {
                return (
                    { ...user, isDone: '취소!' }
                )
            } else {
                return (
                    { ...user, isDone: '완료!' }
                )
            }
        } else {
            return { ...user }
        }
    })

    setArr(new_obj);
}