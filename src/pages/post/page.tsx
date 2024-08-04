import React from "react";
import Layout from "../../components/layout";

interface IPostProps {}

const Post: React.FunctionComponent<IPostProps> = () => {
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="border max-w-3xl w-full ">
          <h3 className="bg-slate-800 text-white text-center  text-lg p-2 ">
            Create Post
          </h3>
          <div className="p-8">
            <form action="">
              <div className="flex flex-col">
                <label className="mb-4" htmlFor="caption">
                  Photo Caption
                </label>
                <textarea
                  className="mb-8"
                  name=""
                  placeholder="What's in your photo!"
                  id="caption"
                ></textarea>
              </div>{" "}
              <div className="flex flex-col">
                <label htmlFor="photo" className="mb-4">
                  Photos
                </label>
              </div>
              <button
                className="mt-8 w-32 bg-gray-600 p-3 rounded-lg "
                type="submit"
              >
                {" "}
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Post;
