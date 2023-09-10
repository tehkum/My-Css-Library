import "./styles.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import ComponentPage from "./pages/componentpage/componentpage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Layout from "./components/layout/layout";
import Avatar from "./documentation/Avatar";
import Alert from "./documentation/Alert";
import Badge from "./documentation/Badge";
import Button from "./documentation/Button";
import Heading from "./documentation/Heading";
import Text from "./documentation/Text";
import ImageFn from "./documentation/Image";
import Card from "./documentation/Card";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/components" element={<ComponentPage />} />
        <Route
          path="/Avatar"
          element={
            <Layout>
              <Avatar />
            </Layout>
          }
        />
        <Route
          path="/Alert"
          element={
            <Layout>
              <Alert />
            </Layout>
          }
        />
        <Route
          path="/Badge"
          element={
            <Layout>
              <Badge />
            </Layout>
          }
        />
        <Route
          path="/Button"
          element={
            <Layout>
              <Button />
            </Layout>
          }
        />
        <Route
          path="/Heading"
          element={
            <Layout>
              <Heading />
            </Layout>
          }
        />
        <Route
          path="/Text"
          element={
            <Layout>
              <Text />
            </Layout>
          }
        />
        <Route
          path="/Image"
          element={
            <Layout>
              <ImageFn />
            </Layout>
          }
        />
        <Route
          path="/Card"
          element={
            <Layout>
              <Card />
            </Layout>
          }
        />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
