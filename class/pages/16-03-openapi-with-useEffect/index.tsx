import axios from "axios";
import { useState, useEffect } from "react";

export default function OpenapiWithUseEffectPage() {
  const [dogImage, setDogImage] = useState("");
  //   직접 state를 만들어야ㅏㅁ.

  useEffect(() => {
    async function getImage() {
      const image = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogImage(image.data.message);
    }
    getImage();
  }, []);

  return (
    <>
      <div>오픈API</div>;
      <img src={dogImage} />
    </>
  );
}
