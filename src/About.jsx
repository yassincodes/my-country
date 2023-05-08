import "./About.css";
// ns1.dnssafozi.com
// ns2.dnssafozi.com
function About() {
  return (
    <div
      style={{ width: "100%", marginTop: "6vh" }}
      className="About_container"
    >
      <div className="About_header">عن الموقع</div>
      <div className="About_section">
        <div className="About_section_text">
          موقع "إعرف بلادك" هو عبارة عن مرجع كامل للمعلمين والتلاميذ المهتمين بدراسة
          جغرافيا البلاد التونسية ومعرفة المزيد عنها, يحتوي الموقع عشرات الدروس
          والتمارين المعدة بعناية والمطابقة للبرامج الرسمية
        </div>
        <div className="About_section_image">
          <img className="About_section_image_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/800px-Flag_of_Tunisia.svg.png" />
        </div>
      </div>
    </div>
  );
}

export default About;
