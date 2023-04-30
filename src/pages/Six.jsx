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
import { useState } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";

function Six() {
  const eyeSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-eye"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#2c3e50"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="2" />
      <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
    </svg>
  );

  const downloadSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-download"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#2c3e50"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
      <polyline points="7 11 12 16 17 11" />
      <line x1="12" y1="4" x2="12" y2="16" />
    </svg>
  );

  const exercicesSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-apple-arcade"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#2c3e50"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="5" r="2" />
      <path d="M20 12.5v4.75a0.734 .734 0 0 1 -.055 .325a0.704 .704 0 0 1 -.348 .366l-5.462 2.58a4.998 4.998 0 0 1 -4.27 0l-5.462 -2.58a0.705 .705 0 0 1 -.401 -.691l-.002 -4.75" />
      <path d="M4.431 12.216l5.634 -2.332a5.065 5.065 0 0 1 3.87 0l5.634 2.332a0.692 .692 0 0 1 .028 1.269l-5.462 2.543a5.064 5.064 0 0 1 -4.27 0l-5.462 -2.543a0.691 .691 0 0 1 .028 -1.27z" />
      <line x1="12" y1="7" x2="12" y2="13" />
    </svg>
  );
  const array = [
    {
      title:
        "الدّرس الأوّل: التّوزّع الجغرافي للسّكان والأدفاق الهجريّة في البلاد التّونسيّة",
      color: "#D5E5F5",
      fileLink:
        "https://drive.google.com/file/d/10ReE1-CrC-fZrYv52kox_K-1Yqmc1iJZ/view?usp=share_link",
      firstGameLink: "",
      secondGameLink: "",
    },
    {
      title:
        "الدّرس الثّاني: المؤشّرات الدّيمغرافيّة والاجتماعيّة بالبلاد التّونسيّة",
      color: "#FFC0CB",
      fileLink:
        "https://drive.google.com/file/d/17ioOzujVgqRgKaAhOPjrCvzyy7sEVjOq/view?usp=share_link",
      firstGameLink: "",
      secondGameLink: "",
    },
    {
      title: "الدّرس الثالث: ظروف النّشاط الفلاحي الطّبيعيّة والبشريّة",
      color: "#E4E4C5",
      fileLink:
        "https://drive.google.com/file/d/1shHtxaSI-OZYyeqTC1tCVkgxl3g4rDbd/view?usp=share_link",
      firstGameLink: "",
      secondGameLink: "",
    },
    {
      title: "الدّرس الرّابع: توزع الإنتاج الفلاحي في المجال التونسي وتطوّره",
      color: "#F5D0C5",
      fileLink:
        "https://drive.google.com/file/d/1BFdLpXktqpK90UjjXJbMAXYl-nCNKPBH/view?usp=share_link",
      firstGameLink: "",
      secondGameLink: "",
    },
    {
      title: " الدّرس الخامس: ظروف النّشاط الصناعي: الموارد والظّروف البشريّة",
      color: "#B1D4E0",
      fileLink:
        "https://drive.google.com/file/d/1jELCMBg4oBe3UL4C096HfGGC7-crEIBn/view?usp=share_link",
      firstGameLink: "",
      secondGameLink: "",
    },
    {
      title:
        "الدّرس السّادس: التّوزّع الجغرافي للصّناعة التّونسيّة وتطوّر أهمّ منتجاتها",
      color: "#E2E2E2",
      fileLink:
        "https://drive.google.com/file/d/1hQYpIs0i0vEo1RJ-I2tOsBS26WpJUsDR/view?usp=share_link",
      firstGameLink: "",
      secondGameLink: "",
    },
    {
      title:
        "الدّرس السّابع: ظروف النّشاط السّياحي والمناطق السّياحيّة بالبلاد التّونسيّة",
      color: "#EFE0E9",
      fileLink:
        "https://drive.google.com/file/d/11nGiCnzPQ-quBYEOROlRvJj-8uXZMhJ1/view?usp=share_link",
      firstGameLink: "",
      secondGameLink: "",
    },
    {
      title:
        "الدّرس الثّامن: تطوّر القطاع السّياحي بالبلاد التّونسيّة وانعكاسه على المجال والاقتصاد",
      color: "#F3F3E7",
      fileLink:
        "https://drive.google.com/file/d/1rl0VI_hic5KG3RPHWRccRFbv5z7Joize/view?usp=share_link",
      firstGameLink: "",
      secondGameLink: "",
    },
    {
      title:
        "الدّرس التّاسع: التّجارة الخارجيّة بالبلاد التّونسيّة الواردات والصّادرات (تركيبها وتطوّرها)",
      color: "#C9EBD9",
      fileLink:
        "https://drive.google.com/file/d/11PrXsyaAsiK-qyf3zoBBmxZl5AGKrm0c/view?usp=share_link",
      firstGameLink: "",
      secondGameLink: "",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);
  return (
    <div>
      <div>
        <Header
          menuColorProp={{ color: "black" }}
          styleProp={{
            color: "black",
            backdropFilter: "blur",
            transition: "all 0.3s ease-out",
            position: "fixed",
            background: "#ffffff88",
            borderBottom: "1px solid #11111111",
          }}
        />
      </div>
      <div
        style={{
          textAlign: "right",
          paddingTop: "16vh",
          marginRight: "10vw",
          marginLeft: "10vw",
          fontSize: "1.3em",
        }}
      >
        {array.map((lesson, index) => (
          <div
            key={index}
            style={{
              margin: "20px",
              width: "80vw",
              borderRadius: "10px",
              background: lesson.color,
              padding: "5px",
            }}
            onClick={() => {
              setSelectedLesson(lesson); // update selected lesson
              setIsOpen(true);
            }}
          >
            {lesson.title}
          </div>
        ))}

        {selectedLesson && (
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="xl">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader style={{ textAlign: "right" }}>
                {selectedLesson.title}
              </ModalHeader>
              <ModalBody
                style={{
                  textAlign: "right",
                  display: "flex",
                  flexDirection: "column",
                  padding: "10vh 10vw",
                }}
              >
                <Button
                  style={{ margin: "10px", width: "100%", textAlign: "right"  }}
                  onClick={() => window.open(selectedLesson.fileLink, "_blank")}
                >
                  <p style={{ marginRight: "5px", width: "55%" }}>فتح الدرس</p>
                  {eyeSVG}
                </Button>

                <Button
                  style={{
                    margin: "10px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "right",
                  }}
                  onClick={() =>
                    window.open(
                      `https://drive.google.com/u/0/uc?id=${
                        selectedLesson.fileLink.split("/")[5]
                      }&export=download`,
                      "_blank"
                    )
                  }
                >
                  <div style={{ marginRight: "5px", width: "55%" }}>
                    {" "}
                    تحميل الدرس{" "}
                  </div>
                  <div>{downloadSVG}</div>
                </Button>

                <Button
                  style={{ margin: "10px", width: "100%", textAlign: "right" }}
                  onClick={() => window.open(selectedLesson.fileLink, "_blank")}
                >
                  <div style={{ marginRight: "5px", width: "55%" }}>
                    {" "}
                    التمارين المرفقة
                  </div>
                  <div>{exercicesSVG}</div>
                </Button>

                <Button
                  colorScheme="blue"
                  style={{ margin: "10px", width: "100%"}}
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
        )}
      </div>
    </div>
  );
}

export default Six;
