import "./Footer.css";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

function Footer() {
  const appIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-google-play"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#2c3e50"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 3.71v16.58a.7 .7 0 0 0 1.05 .606l14.622 -8.42a.55 .55 0 0 0 0 -.953l-14.622 -8.419a.7 .7 0 0 0 -1.05 .607z" />
      <path d="M15 9l-10.5 11.5" />
      <path d="M4.5 3.5l10.5 11.5" />
    </svg>
  );

  const youtubeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-youtube-kids"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#2c3e50"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17.782 17.03l-3.413 .235l-.023 0c-1.117 .09 -2.214 .335 -3.257 .725l-2.197 .794a3.597 3.597 0 0 1 -2.876 -.189a3.342 3.342 0 0 1 -1.732 -2.211l-1.204 -5.293a3.21 3.21 0 0 1 .469 -2.503a3.468 3.468 0 0 1 2.177 -1.452l9.843 -2.06c1.87 -.392 3.716 .744 4.124 2.537l1.227 5.392a3.217 3.217 0 0 1 -.61 2.7a3.506 3.506 0 0 1 -2.528 1.323z" />
      <path d="M10 10l.972 4l4.028 -3z" />
    </svg>
  );

  const mailIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-mail"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#2c3e50"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
      <path d="M3 7l9 6l9 -6" />
    </svg>
  );

  const phoneIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-phone"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#2c3e50"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
    </svg>
  );

  const [isOpen, setIsOpen] = useState(false);
  const [copyNumberMessage, setCopyNumberMessage] = useState(false);
  const handleCopyNumber = () => {
    navigator.clipboard.writeText("+21655025758");
    setCopyNumberMessage(true);
  };
  function handleClose() {
    setIsOpen(false);
    setCopyNumberMessage(false);
  }
  return (
    <>
      <Modal isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader dir="rtl">إتصل بنا</ModalHeader>
          <ModalBody style={{textAlign: "center"}}>
            <div>يمكنك الإتصال بنا عن طريق الرقم التالي</div>
            <div style={{fontSize: "1.9em", marginTop: "20px"}}>+21655025758</div>
          </ModalBody>
          <ModalFooter style={{display: "flex", flexDirection: "column"}}>
            <Button onClick={handleCopyNumber} style={{width: "50vw", marginBottom: "10px"}}>
              {copyNumberMessage ? "🎉 تم النسخ" : "نسخ الرقم"}
            </Button>
            <Button colorScheme="blue" mr={3} onClick={handleClose} style={{width: "50vw", marginRight: "0", marginBottom: "4px"}}>
              إغلاق النافذة
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className="Footer_container">
        <div style={{marginBottom: "15px", fontSize: "1.5em"}}>روابط مهمة</div>
        <div className="Footer_section">
          <a href="https://b1files.mobeasy.com/builds/build-871683-20230508143827.apk">
            {appIcon}
          </a>
          <a href="https://youtube.com/@I3raf_biladek">{youtubeIcon}</a>
          <a href="mailto:jellalikhaled8@gmail.com">
            <div>{mailIcon}</div>
          </a>
          <div onClick={() => setIsOpen(true)}>{phoneIcon}</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
