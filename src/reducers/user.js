// const usersFromAPI = "";

// Fetch users from json server
const usersFromAPI = async() => {
    const res = await fetch('https://pre.bistrainer.com/v1/index.cfm?action=testapi.users')
    const data = await res.json()
    // console.log(data)
    return data
  }

const startingPoint = usersFromAPI();
// console.log(startingPoint.then())

const userReducer = (state=startingPoint, action) => {
    switch(action.type){
        case "EDIT":
            return; // maybe nothing
        case "SAVE":
            return; // after editing
        default:
            return state;
    }
};

export default userReducer;