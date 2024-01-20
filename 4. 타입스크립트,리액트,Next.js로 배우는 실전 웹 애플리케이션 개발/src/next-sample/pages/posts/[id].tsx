import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router"; // next/router의 훅
import { ParsedUrlQuery } from "querystring";

type PostProps = { id: string };

const Post: NextPage<PostProps> = (props) => {
  const { id } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>이 페이지는 정적 사이트 생성을 통해 빌드 시 생성된 페이지 입니다.</p>
        <p>{`/posts/${id}에 대응하는 페이지 입니다.`}</p>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        id: "1",
      },
    },
    {
      params: {
        id: "2",
      },
    },
    {
      params: {
        id: "3",
      },
    },
  ];
  // fallback을 false로 정의하면, paths에 정의된 페이지 외에는 404를 표시
  return { paths, fallback: false };
};

interface PostParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<PostProps, PostParams> = async (
  context
) => {
  return {
    props: {
      id: context.params!["id"],
      // ! non-null assertion operator, context.params가 null이나 undefined가 아님을 확신한다.
    },
  };
};

export default Post;
