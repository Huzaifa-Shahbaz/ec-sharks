import AOS from "aos";
import { Route, Routes, useLocation } from 'react-router-dom';
import LoadingScreen from "./components/LoadingScreen";
import React, { Suspense, useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';
import SiteHeader from "./components/SiteHeader";
import Footer from './components/SiteFooter';
import ScrollToTop from "./components/ScrollToTop";
import SignUpForm from "./components/forms/SignUpForm";
import SignInForm from "./components/forms/SignInForm";
import FloatingButtons from "./components/FloatingButtons";
import DrawerMenu from "./components/DrawerMenu";
import ProtectedRoute from "./components/ProtectedRoute";
const ParticlesBackground = React.lazy(() => import("./components/canvas/ParticlesBackground"));
import { Home, About, Services, ServiceDetails, Blogs, BlogDetails, ContactUs, Projects, Dashboard, DashboardBlogs, DashboardBlogDetails } from './pages'


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
          <Route path='/contact-us' element={<ContactUs />} />
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