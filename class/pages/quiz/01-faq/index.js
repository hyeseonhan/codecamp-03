import { ArrowRight, Profile, Underbar_icon, Underbar_letter, Homeicon, Mapicon, Loveicon, Myicon, Home, Map, Love, My,Time, Bar, Name, Search, Title, Category, Notice, Event, Frequent, Main, Question, Qlist, Qline, One, Two, Three, Four, Five, Six, First, Second, Third, Fourth, Fifth, Sixth, Arrow, Afirst, Asecond, Afthird, Afourth, Afifth, Asixth, Group, Wrapper } from '../../../styles/01-faq'


export default function FaqPage(){

    return(

        <Wrapper>
            <Bar>
                <Time>12:30</Time>
            </Bar>
            <Search>
                <img src="/images/searchicon.png"/>
            </Search>
            <Group>
                <Title>마이</Title>
                <Profile><img src ="/images/profile.png"/></Profile>
                <Name>임정아</Name>
                <ArrowRight><img src ="/images/arrow right.png"/></ArrowRight>
            </Group>
            <Category>
                <Notice>공지사항</Notice>
                <Event>이벤트</Event>
                <Frequent>FAQ</Frequent>
                <Question>Q&A</Question>
            </Category>
            <Main>
                <Qlist>
                    <Qline>
                        <First>Q. 01</First>
                        <One>리뷰 작성은 어떻게 하나요?</One>
                    </Qline>
                    <Qline>
                        <Second>Q.02</Second>
                        <Two>리뷰 수정/삭제는 어떻게 하나요?</Two>
                    </Qline>    
                    <Qline>
                        <Third>Q. 03</Third>
                        <Three>아이디/비밀번호를 잊어버렸어요.</Three>
                    </Qline>
                    <Qline>
                        <Fourth>Q. 04</Fourth>
                        <Four>회원탈퇴를 하고싶어요.</Four>
                    </Qline>    
                    <Qline>
                        <Fifth>Q. 05</Fifth>
                        <Five>출발지 설정은 어떻게 하나요?</Five>
                    </Qline>
                    <Qline>
                        <Sixth>Q. 06</Sixth>
                        <Six>비밀번호를 변경하고 싶어요.</Six>
                    </Qline>
                </Qlist>
                <Arrow>
                    <Afirst><img src="/images/arrow down.png" width="35" height="35"/></Afirst>
                    <Asecond><img src="/images/arrow down.png" width="30" height="30"/></Asecond>
                    <Afthird><img src="/images/arrow down.png" width="30" height="30"/></Afthird>
                    <Afourth><img src="/images/arrow down.png" width="30" height="30"/></Afourth>
                    <Afifth><img src="/images/arrow down.png" width="30" height="30"/></Afifth>
                    <Asixth><img src="/images/arrow down.png" width="30" height="30"/></Asixth>
                </Arrow>
            </Main>     
            <Underbar_icon>
                <Homeicon><img src="/images/home.png"/></Homeicon>
                <Mapicon><img src="/images/map.png"/></Mapicon>
                <Loveicon><img src="/images/love.png"/></Loveicon>
                <Myicon><img src="/images/my.png"/></Myicon>
            </Underbar_icon>
            <Underbar_letter>
                <Home>홈</Home>
                <Map>잇츠로드</Map>
                <Love>마이찜</Love>
                <My>마이</My>
            </Underbar_letter>
        </Wrapper>
        

    )
}