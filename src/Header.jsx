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

function Header({styleProp, menuColorProp}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <div className="header" style={styleProp}>
      <div className="logo">بلادي</div>

      <div className="big-screen">
        <div
          style={{ marginRight: "7.5px", marginLeft: "7.5px" }}
          onClick={() => setIsOpen(true)}
        >
          الدروس والتمارين
        </div>

        <Modal isOpen={isOpen} onClick={() => setIsOpen(false)} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader style={{ textAlign: "right" }}>
              إختر المستوى الدراسي
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
                <Button style={{ margin: "10px", width: "100%" }}>السنة الخامسة</Button>
              </Link>
              <Link to="/6">
                <Button style={{ margin: "10px", width: "100%" }}>السنة السادسة</Button>
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

        <div style={{ marginRight: "7.5px", marginLeft: "7.5px" }}>
          <Link to="/lol2">فديوهات تعليمية</Link>
        </div>
        <div
          style={{ marginRight: "7.5px", marginLeft: "7.5px" }}
          onClick={() => setIsOpen2(true)}
        >
          بلادي
        </div>

        <Modal isOpen={isOpen2} onClick={() => setIsOpen2(false)} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader style={{ textAlign: "right" }}>
              موسوعة بلادي
            </ModalHeader>
            <ModalBody
              style={{
                textAlign: "right",
                display: "flex",
                flexDirection: "column",
                padding: "10vh 10vw",
              }}
            >
              <Button style={{ margin: "10px" }}>حمل</Button>
              <Button style={{ margin: "10px" }}> إطلع</Button>
              <Button
                colorScheme="blue"
                style={{ margin: "10px" }}
                onClick={() => setIsOpen2(false)}
              >
                إغلاق
              </Button>
            </ModalBody>
            <ModalFooter
              style={{ display: "flex", justifyContent: "flex-start" }}
            ></ModalFooter>
          </ModalContent>
        </Modal>

        <div style={{ marginRight: "7.5px", marginLeft: "7.5px" }}>
          <Link to="lol4">أطلسي</Link>
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
            <MenuItem style={{ flexDirection: "row-reverse" }}>
              <Link to="lol2">فديوهات تعليمية</Link>
            </MenuItem>
            <MenuItem
              style={{ flexDirection: "row-reverse" }}
              onClick={() => setIsOpen2(true)}
            >
              <Link to="lol3">بلادي</Link>
            </MenuItem>
            <MenuItem style={{ flexDirection: "row-reverse" }}>
              <Link to="lol4">أطلسي</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
