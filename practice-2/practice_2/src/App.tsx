import Header from "@/components/Header/Header";
import url from "@/assets/images/appleIceCream.jpg";
import { USERS } from "@/constants/header";
import Footer from "@/components/Footer/Footer";
import MainContext from "@/context/MainContext";

const App: React.FC = () => {

  return (
    <>
      <Header username={USERS.username} image={url} />
      <MainContext />
      <Footer />
    </>
  );
}

export default App;
