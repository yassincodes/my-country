import "./About.css";

function About() {
  return (
    <div
      style={{ width: "100%", marginTop: "6vh" }}
      className="About_container"
    >
      <div className="About_header">عن الموقع</div>
      <div className="About_section">
        <div className="About_section_text">
          موقع "بلادنا" هو عبارة عن مرجع كامل للمعلمين والتلاميذ المهتمين بدراسة
          جغرافيا البلاد التونسية ومعرفة المزيد عنها, يحتوي الموقع عشرات الدروس
          والتمارين المعدة بعناية والمطابقة للبرامج الرسمية
        </div>
        <div className="About_section_image">
          <img src="https://i.gifer.com/origin/5f/5f4c86705e3811531edbd64ae5ed0a09_w200.gif" />
        </div>
      </div>
    </div>
  );
}

export default About;
