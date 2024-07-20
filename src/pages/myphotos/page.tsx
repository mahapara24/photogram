import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";

interface IMyPhotosProps {}

const MyPhotos: React.FunctionComponent<IMyPhotosProps> = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component Rendered succesfully ");
  }, []);

  const btnClick = () => {
    setCount(count + 1);
    setCount(count + 1);

    setCount(count + 1);
  };
  return (
    <Layout>
      <div>MyPhotos</div>
      <div>
        <h1>interview preparation code practice</h1>
        <button onClick={btnClick}>Click me</button>
        <p>you clicked {count} times </p>
      </div>
    </Layout>
  );
};

export default MyPhotos;
