import Image from "next/image";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Markdown from "markdown-to-jsx";

import client from "@/lib/apolloClient";
import repositoryDetails from "@/lib/queries/repositoryDetails";
import { Repository } from "@/lib/types/githubTypes";

import styles from "@/base/styles/repositoryDetails.module.scss";

// TODO: remove any
interface ParamsProps {
  data: Repository & any;
  owner: string;
  name: string;
}

interface IParams extends ParsedUrlQuery {
  owner: string;
  name: string;
}

export default function RepositoryDetails({ data, owner, name }: ParamsProps) {
  const {
    description,
    isArchived,
    homepageUrl,
    repositoryTopics,
    languages,
    stargazerCount,
    forkCount,
    issues,
    watchers,
    openGraphImageUrl,
    readme,
  } = data || {};

  return (
    <div>
      <Head>
        <title>
          {owner}/{name}: {description}
        </title>
      </Head>

      {isArchived && (
        <p className={styles.archived}>
          This repository has been archived by the owner. It is now read-only.
        </p>
      )}
      <div className="container">
        <main className={styles.main}>
          <h1 className={styles.title}>
            {openGraphImageUrl && (
              <Image
                src={openGraphImageUrl}
                width="200"
                height="200"
                alt="open graph image"
              />
            )}
            <span>
              {owner}/{name}
            </span>
          </h1>
          <div className={styles.row}>
            <div className={styles.columnDetails}>
              <p>{description}</p>
              <a href={homepageUrl} target="_blank" rel="noreferrer">
                {homepageUrl}
              </a>
              <div className={styles.counters}>
                {/* <Counters icon="star" count={stargazerCount} /> */}
                {/* <Counters icon="watch" count={watchers?.totalCount} /> */}
                {/* <Counters icon="fork" count={forkCount} /> */}
                {/* <Counters icon="issue" count={issues?.totalCount} /> */}
              </div>
              {/* <Topics topics={repositoryTopics} /> */}
              {/* <Languages languages={languages} /> */}
            </div>

            <div className={styles.columnContent}>
              {readme?.text && (
                <div className={styles.markdown}>
                  <Markdown>{readme.text}</Markdown>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { owner, name } = params as IParams;

  const { data } = await client.query({
    query: repositoryDetails,
    variables: { owner, name },
  });

  return {
    props: {
      data: data?.repository,
      owner,
      name,
    },
  };
};
