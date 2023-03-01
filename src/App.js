import Banner from "./components/Banner/Banner";
import Blogs from "./components/Blogs/Blogs";
import CareerGuide from "./components/CareerGuide/CareerGuide";
import Community from "./components/Community/Community";
import Course from "./components/Course/Course";
import Expert from "./components/Expert/Expert";
import Footer from "./components/footer/Footer";
import Loading from "./components/Loading/Loading";
import NavBar from "./components/navBar/NavBar";
import Resource from "./components/Resource/Resource";
import TrustedCompany from "./components/TrustedCompany/TrustedCompany";
import WorkShop from "./components/WorkShop/WorkShop";
import useFetch from "./hooks/useFetch";

function App() {
  const [careerData, careerLoading] = useFetch("/careerGuide.json");
  const [courseData, courseLoading] = useFetch("/course.json");
  const [resourceData, resourceLoading] = useFetch("/resource.json");
  const [communityData, communityLoading] = useFetch("/community.json");
  const [expertData, expertLoading] = useFetch("/expert.json");
  const [blogsData, blogLoading] = useFetch("/blog.json");
  if (
    careerLoading ||
    courseLoading ||
    resourceLoading ||
    communityLoading ||
    expertLoading ||
    blogLoading
  ) {
    return <Loading />;
  }
  return (
    <div>
      <NavBar />
      <Banner />
      <CareerGuide careerData={careerData} />
      <Course courseData={courseData} />
      <WorkShop courseData={courseData.slice(0, 3)} />
      <Resource resourceData={resourceData} />
      <Community communityData={communityData} />
      <Expert expertData={expertData} />
      <TrustedCompany />
      <Blogs blogsData={blogsData} />
      <Footer />
    </div>
  );
}

export default App;
