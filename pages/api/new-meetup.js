import { MongoClient } from 'mongodb';
async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    // 연결된 클라이언트를 알 수 있다.
    const client = await MongoClient.connect(
      'mongodb+srv://Erin:Dkssud12@cluster0.q9ibh.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    // client객체에서 db() 메소드를 통해 연결된 데이터베이스를 확보할 수 있다.
    const db = client.db();

    // 이제 데이터베이스에서 collection에 접근할 수 있게 되는데
    // mongodb는 문서들로 가득찬 컬렉션을 작동시키는 NOSQL데이터베이스가 된다.
    // collection SQL은 데이터 베이스에 있는 테이블들이고
    // document는 해당 테이블의 항목이다.
    // 한마디로 여러 document를 가지고 있는 컬렉션을 가지게 되는것.
    // 여기서 단일 meetup은 하나의 document가 되고
    // 전체 컬렉션은 여러 meetup인 여러 meepup document들을 보관하는것
    // 또한, 데이터베이스와 컬렉션 메소드를 사용하여 컬렉션을 보관한다.
    const meetupsCollection = db.collection('meetups'); //컬렉션의 이름은 맘대로 설정가능 (여기선'meetups')
    //meetupsCollection에서는 컬렉션에 새 document를 삽입하기위해 구축된 query명령중 하나인 insertOne을 호출한다.
    // meetupsCollection.insertOne(data);
    // mongoDB에서는 문서가 결국 자바스크립트의 객체이다.
    // 따라서 위에서 설정해준 객체의 제목, 이미지 등등이 될 수 있다.
    // 이런경우 직접데이터를 삽입할 수 있으므로 전체 데이터를 데이터베이스에 저장 할 수 있다.
    const result = await meetupsCollection.insertOne(data); // 데이터객체를 데이터베이스에 삽입
    // 여기서 result는 자동으로 생성된 ID를 가진 객체가 된다.
    console.log(result);

    client.close(); // 모든것이 끝나면 데이터베이스 연결을 차단 하고 

    // 함수에 매개변수로 받았던 응답객체를 사용하여 (res) 응답을 보내야한다. 

    // 요청이 들어오면, 데이터베이스에 데이터를 저장하고, 다시 응답을 보내야하기 떄문. 

    // 응답객체로 아래를 수행
    //되돌아오는 응답의 HTTP status코드를 설정하기 위해 응답을 호출할 수 있는  status Methodfmf 갖게 되는데
    // 예를들어 201 코드 : 성공적으로 삽입되었다.
    //json호출은 연결하여 발신응답에 추가될 json데이터를 준비한다.
    res.status(201).json({message:"MEETUP ADDED"})



  }
}
