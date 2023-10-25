import React, {useState} from "react";
import "./style.scss";
import Box from '../../components/Box/Box';

const Home = () => {
    const [usersWithGrades, setUsersWithGrades] = useState([
        {
            name: 'pepe',
            grade: 10
          },
          {
            name: 'pablo',
            grade: 6
          },
          {
            name: 'ernesto',
            grade: 8
          },
          {
            name: 'noe',
            grade: 9
          }
    ]);

    const [isDarkTheme, setIsDartkTeme] = useState(false);

    const addUser = () =>{
        const userValue = document.querySelector('#user').value;
        const gradeValue = document.querySelector('#grade').value;

        setUsersWithGrades([...usersWithGrades, {
            name: userValue,
            grade: gradeValue
        }]);
    };

    const toggleTheme = () => {
        setIsDartkTeme(!isDarkTheme);
    }

    return (
        <div className={`home ${isDarkTheme ? 'dark-theme' : 'light-theme'} d-flex flex-column`}>            
            <div className="title">
                <h1>User Grades</h1>                
                <button type="button" className={`btn ${isDarkTheme ? 'btn-light' : 'btn-dark'} `} onClick={toggleTheme}>Change Theme</button>
            </div>
            <div className="m-5 d-flex flex-row">
                <div>
                    <input className="form-control" id='user' type='text' placeholder='User...'/>
                    <input className="form-control" id='grade' type='text' placeholder='Grade...'/>
                    <button type="btn" className="btn btn-primary" onClick={addUser}>Add User</button>
                </div>
                <div className="ms-4">
                {                    
                    usersWithGrades.map((user, index)=> {
                        return <Box user={user.name} grade={user.grade}/>
                    })
                }
                </div>
            </div>
        </div>
    );
};

export default Home;