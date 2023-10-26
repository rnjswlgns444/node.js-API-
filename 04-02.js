import express form 'express'

const app = express()
app.use(express.json()) //express에서 json 사용하기 위해 입력.

app.get('/boards', (req, res) => {
  //1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기.
  const result = [
    {number: 1, writer :"철수", title: " 제목입니다", contents: "철수내용"},
    {number: 1, writer :"영희", title: " 제목입니다", contents: "영희내용"},
    {number: 1, writer :"훈이", title: " 제목입니다", contents: "훈이내용"}
    ]
  //2. 꺼내온 결과 응답 주기
  res.send(result)
})

app.post('/boards', (req, res)=>{
  //1.데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기.

  //2. 저장 결과 응답 주기.
  res.send("게시물 등록에 성공하였습니다!")
})

//해보기
app.get('/tokens/phone', (req, res) => {
  //DB에서 데이터 꺼내옴.
  const myphone = 01011112222
  res.send(myphone)
})
app.post('/tokens/phone', (req, res) => {
  //1. 휴대폰번호 자릿수 맞는지 확인하기
  const isValid = checkValidationPhone(myphone)
  if(isValid){
    //2. 핸드폰 토큰 6자리 만들기
    const mytoken = getToken()

    //3. 핸드폰번호에 토큰 전송하기
    sendTokenToSMS(myphone, mytoken)
    res.send("인증완료!")
  }
})
  

app.listen(3000,()=> {
  console.log('Example app listening on port${3000}')
})
