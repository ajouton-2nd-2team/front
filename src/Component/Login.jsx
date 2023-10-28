import Topbar from './Topbar';
import { useState, useEffect } from 'react';

const Login = () => {
    const userData = {
        id: '',
        password: '',
    };

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const changeId = (e) => {
        setId(e.target.value);
    }

    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    const changeUserData = () => {
        userData.id = id;
        userData.password = password;
        console.log(userData);

        const jsonPayload = JSON.stringify(userData);

        // POST 요청 보내기
        fetch('https://localhost:3000/userData', {
            method: 'POST', // POST 요청
            headers: {
                'Content-Type': 'application/json', // JSON 데이터임을 지정
            },
            body: jsonPayload, // JSON 데이터를 요청 본문에 포함
        })
            .then(response => response.json())
            .then(data => {
                // 서버로부터의 응답 처리
                console.log(data);
            })
            .catch(error => {
                console.error('API 요청 중 오류 발생:', error);
            });
    }
    return (
        <div class="loginMain">
            <Topbar fixed="top" />
            <div class="back">
                <div class="title">
                    <h1>
                        로그인
                    </h1>
                </div>
                <div class="form">
                    <form>
                        <label>
                            <input placeholder="아이디"
                                value={id}
                                onChange={changeId} />
                        </label>
                        <label>
                            <input placeholder="비밀번호"
                                value={password}
                                onChange={changePassword} />
                        </label>

                    </form>
                    <button class="login" onClick={changeUserData}>로그인</button>
                </div>
                <div class="but">
                    <button class="new">회원가입</button>
                    <p>|</p>
                    <button class="new">아이디/비밀번호 찾기</button>
                </div>
            </div>
        </div>
    )
}

export default Login;