import Topbar from './Topbar';

const Login = () => {
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
                            <input placeholder="아이디" />
                        </label>
                        <label>
                            <input placeholder="비밀번호" />
                        </label>

                    </form>
                    <button class="login">로그인</button>
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