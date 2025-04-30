import AOS from "aos";
import { Route, Routes, useLocation } from 'react-router-dom';
import LoadingScreen from "./global/components/LoadingScreen";
import React, { Suspense, useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';
import SiteHeader from "./global/components/SiteHeader";
import Footer from './global/components/SiteFooter';
import ScrollToTop from "./global/components/ScrollToTop";
import DashboardBlogDetails from "./pages/dashboard/blogs/DashboardBlogDetails";
import Dashboard from "./pages/dashboard";
import DashboardBlogs from "./pages/dashboard/blogs";
import SignUpForm from "./global/components/forms/SignUpForm";
import SignInForm from "./global/components/forms/SignInForm";
import ContactUsPage from "./pages/contactUs";
import Services from "./pages/services";
import FloatingButtons from "./global/components/FloatingButtons";
import DrawerMenu from "./global/components/DrawerMenu";
import ProtectedRoute from "./global/components/ProtectedRoute";
const ParticlesBackground = React.lazy(() => import("./global/components/canvas/ParticlesBackground"));
const ServiceDetails = React.lazy(() => import('./pages/services/ServiceDetails'));
const Home = React.lazy(() => import('./pages/home'));
const Projects = React.lazy(() => import('./pages/projects'));
const About = React.lazy(() => import('./pages/about'));
const Blogs = React.lazy(() => import('./pages/blogs/Blogs'));
const BlogDetails = React.lazy(() => import('./pages/blogs/BlogDetails'));


function App() {

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
          localStorage.removeItem('token');
        }
      } catch (err) {
        localStorage.removeItem('token');
      }
    }
  }, []);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false)
  const [drawerOpened, setDrawerOpened] = useState(false)
  const hideFooter = location.pathname.endsWith("/projects") || location.pathname.startsWith("/dashboard");
  const dashboardActive = location.pathname.startsWith("/dashboard");

  useEffect(() => {
    { !dashboardActive && AOS.init({ duration: 1300 }) }
    const handleScroll = () => window.scrollY > 55 ? setIsScrolled(true) : setIsScrolled(false)
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);


  return (
    <>
      {!dashboardActive &&
        <>
          <Suspense fallback={<LoadingScreen />}>
            <ParticlesBackground />
          </Suspense>
          <SiteHeader isScrolled={isScrolled} />
          <FloatingButtons isScrolled={isScrolled} setDrawerOpened={setDrawerOpened} />
          <DrawerMenu
            drawerOpened={drawerOpened}
            setDrawerOpened={setDrawerOpened}
          />
        </>
      }
      <div className={`main-overlay ${drawerOpened && 'visible'}`}></div>
      <ScrollToTop />
      <main>
        <Routes>
          <Route
            path='/'
            element={
              <Suspense fallback={<LoadingScreen />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path='/services'
            element={
              <Suspense fallback={<LoadingScreen />}>
                <Services />
              </Suspense>
            }
          />
          <Route
            path='/services/:endpoint'
            element={
              <Suspense fallback={<LoadingScreen />}>
                <ServiceDetails />
              </Suspense>
            }
          />
          <Route
            path='/projects'
            element={
              <Suspense fallback={<LoadingScreen />}>
                <Projects />
              </Suspense>
            }
          />
          <Route
            path='/about'
            element={
              <Suspense fallback={<LoadingScreen />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path='/blogs'
            element={
              <Suspense fallback={<LoadingScreen />}>
                <Blogs />
              </Suspense>
            }
          />
          <Route
            path='/blogs/:blogId'
            element={
              <Suspense fallback={<LoadingScreen />}>
                <BlogDetails />
              </Suspense>
            }
          />
          <Route path='/contact-us' element={<ContactUsPage />} />
          <Route path='/sign-up' element={<SignUpForm />} />
          <Route path='/sign-in' element={<SignInForm />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Suspense fallback={<LoadingScreen />}>
                  <Dashboard />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/blogs"
            element={
              <ProtectedRoute>
                <Suspense fallback={<LoadingScreen />}>
                  <DashboardBlogs />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path='/dashboard/blog-details/:blogId'
            element={
              <ProtectedRoute>
                <Suspense fallback={<LoadingScreen />}>
                  <DashboardBlogDetails />
                </Suspense>
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;

// import { BrowserRouter } from "react-router-dom";
// import Main from "./global/components/Main";
// import LoadingScreen from "./global/components/LoadingScreen";
// import React, { Suspense, useEffect } from "react";
// import { jwtDecode } from 'jwt-decode';
// const ParticlesBackground = React.lazy(() => import("./global/components/canvas/ParticlesBackground"));


// function App() {

//   // Remove token from localstorage if it is expired
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       try {
//         const decoded = jwtDecode(token);
//         const currentTime = Date.now() / 1000;
//         if (decoded.exp < currentTime) {
//           localStorage.removeItem('token');
//         }
//       } catch (err) {
//         localStorage.removeItem('token');
//       }
//     }
//   }, []);
//   const dashboardActive = window.location.pathname.startsWith("/dashboard");

//   return (
//     <>
//       {!dashboardActive &&
//         <Suspense fallback={<LoadingScreen />}>
//           <ParticlesBackground />
//         </Suspense>
//       }
//       <BrowserRouter>
//         <Main />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;