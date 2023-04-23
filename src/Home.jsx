import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import FrontPage from "./FrontPage";
import About from "./About";
import Gallery from "./Gallery";
import WebsiteSections from "./WebsiteSections";
import Footer from "./Footer"

const AnimatedButton = motion(Button);
function Home() {
  const [showParagraph, setShowParagraph] = useState(true);
  const [showTopContent, setShowTopContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParagraph(false);
      setShowTopContent(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div>
        {showParagraph && (
          <motion.p
            className="paragraph"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { type: "spring", stiffness: 200, damping: 12 },
            }}
          >
            <div>loading ....</div>
          </motion.p>
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
