import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import logo from "./assets/logo.png";

function Header({ styleProp, menuColorProp }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <div className="header" style={styleProp}>
      <Modal isOpen={isOpen} onClick={() => setIsOpen(false)} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader style={{ textAlign: "right" }}>
            أختار المستوى الدراسي
          </ModalHeader>
          <ModalBody
            style={{
              textAlign: "right",
              display: "flex",
              flexDirection: "column",
              padding: "10vh 10vw",
            }}
          >
            <Link to="/5">
              <Button style={{ margin: "10px", width: "100%" }}>
                السنة الخامسة
              </Button>
            </Link>
            <Link to="/6">
              <Button style={{ margin: "10px", width: "100%" }}>
                السنة السادسة
              </Button>
            </Link>

            <Button
              colorScheme="blue"
              style={{ margin: "10px", width: "100%" }}
              onClick={() => setIsOpen(false)}
            >
              إغلاق
            </Button>
          </ModalBody>
          <ModalFooter
            style={{ display: "flex", justifyContent: "flex-start" }}
          ></ModalFooter>
        </ModalContent>
      </Modal>

      <Link className="logo" to="/">
        <img src={logo} style={{ width: "50px" }} alt="logo" />
      </Link>

      <div className="big-screen">
        <div
          style={{
            marginRight: "7.5px",
            marginLeft: "7.5px",
            cursor: "pointer",
          }}
          onClick={() => setIsOpen(true)}
        >
          الدروس والتمارين
        </div>
        <div style={{ marginRight: "7.5px", marginLeft: "7.5px" }}>
          <Link to="/videos">فديوهات تعليمية</Link>
        </div>
        <div style={{ marginRight: "7.5px", marginLeft: "7.5px" }}>
          <Link to="/atlas">أطلسي</Link>
        </div>
      </div>
      <div className="small-screen">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon style={menuColorProp} />}
            variant="outline"
          />
          <MenuList style={{ color: "black" }}>
            <MenuItem
              style={{ flexDirection: "row-reverse" }}
              onClick={() => setIsOpen(true)}
            >
              الدروس والتمارين
            </MenuItem>
            <Link to="/videos">
              <MenuItem style={{ flexDirection: "row-reverse" }}>
                فديوهات تعليمية
              </MenuItem>
            </Link>
            <Link to="/atlas">
              <MenuItem style={{ flexDirection: "row-reverse" }}>
                أطلسي
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
