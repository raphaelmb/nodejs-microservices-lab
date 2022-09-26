import axios from "axios";

const LadingPage = ({ currentUser }) => {
  return <h1>Landing page</h1>;
};

LadingPage.getInitialProps = async () => {
  const response = await axios.get("/api/users/currentuser").catch((err) => {
    console.log(err.message);
  });
  return response.data;
};

export default LadingPage;
