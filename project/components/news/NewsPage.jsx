import React from "react";
import { useQuery } from "@tanstack/react-query";

import { getAllBlogs } from "../../fetchers/universalFetch";
import NewSingleSection from "./elements/NewSingleSection";
import { HeadSection, Layout, TitleSection } from "../Ui";

const NewsPage = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["news"],
    queryFn: getAllBlogs,
  });
  const blogsData = data?.data?.blog;

  return (
    <>
      <HeadSection
        title={"ATC Chains India"}
        description={"description"}
        keyWords={"Keywords"}
      />
      <Layout>
        <div className="my-28">
          <TitleSection name="News" />
        </div>

        <div className=" grid grid-cols-1 lg:grid-cols-2 items-center place-items-center gap-10 hover:gap-10 font-mono mx-20 ">
          {blogsData?.map((blog, i) => (
            <NewSingleSection key={i} data={blog} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default NewsPage;
