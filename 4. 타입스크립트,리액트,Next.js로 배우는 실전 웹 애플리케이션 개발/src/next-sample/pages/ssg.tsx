import { GetStaticProps, NextPageContext, NextPage } from "next"; // pages를 위한 타입
import Head from "next/head";

// 페이지 컴포넌트의 props 타입 정의
type SSGProps = {
  message: string;
};

const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props;

  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>이 페이지는 정적 사이트 생성을 통해 빌드 시 생성된 페이지입니다.</p>
        <p>{message}</p>
      </main>
    </div>
  );
};

// getStaticProps는 빌드 시 실행된다!!!
// getStaticProps는 export 해야하며 비동기 함수로 정의해야 합니다.
// getStaticProps 인수에는 context가 부여된다. -> 빌드시 사용할 수 있는데이터
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}에 getStaticProps 가 실행됬습니다.`;

  console.log(message);

  return {
    // 여기에서 반환한 props를 기반으로 페이지 검포넌트를 그린다.
    props: {
      message,
    },
  };
};

export default SSG;
