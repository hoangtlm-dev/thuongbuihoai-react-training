import Image from "next/image";
import profilePic from "../public/chocolate-tarts-cake.jpg";

const Img: React.FC = () => {
  return (
    <>
      <Image
        src={profilePic}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <p>Welcome to my Image page!</p>
    </>
  );
}

export default Img;
