import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import FrontPage from "./FrontPage";
import About from "./About";
import Gallery from "./Gallery";
import Footer from "./Footer";
import logo from "./assets/logo.png";

const AnimatedButton = motion(Button);
function Home() {
  const [showParagraph, setShowParagraph] = useState(true);
  const [showTopContent, setShowTopContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParagraph(false);
      setShowTopContent(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div>
        {showParagraph && (
          <div>
            <motion.div
              className="before_Home"
              style={{
                height: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 200, damping: 12 },
              }}
            >
              <img src={logo} style={{ width: "300px" }} alt="logo" />
            </motion.div>
            <div style={{ textAlign: "center" }}>
              <div>🧑‍🏫 من إعداد المعلمان </div>
              <div>خالد جلالي وحذامي الحفيان المقدم</div>
            </div>
          </div>
        )}

        {showTopContent && (
          <div className="Home">
            <FrontPage />
            <About />
            <Gallery />
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
