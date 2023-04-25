import Header from "../Header";
import { Link } from "react-router-dom";
import GIF from "../assets/GIF.mp4";

function Five() {
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
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "space-between",
        }}
      >
        <div style={{ textAlign: "right", padding: "10vh", fontSize: "1.3em" }}>
          <div style={{ margin: "20px" }}>
            <Link to="/5/lesson-1">الدرس الأوّل: موقع مدرستي</Link>
          </div>
          <div style={{ margin: "20px" }}>
            <Link to="/5/lesson-2">
              الدّرس الثاني: خريطة تونس: موقع البلاد التونسيّة
            </Link>
          </div>
          <div style={{ margin: "20px" }}>
            <Link to="/5/lesson-3">
              الدّرس الثالث: المشهد الريفي المحلي: أنواعه - عناصره
            </Link>
          </div>
          <div style={{ margin: "20px" }}>
            <Link to="/5/lesson-4">
              الدّرس الرّابع: مشهد ريفي من الشمال التونسي
            </Link>
          </div>
          <div style={{ margin: "20px" }}>
            <Link to="/5/lesson-5">
              الدرس الخامس: مشهد ريفي من الوسط التونسي
            </Link>
          </div>
          <div style={{ margin: "20px" }}>
            <Link to="/5/lesson-6">
              الدّرس السّادس: مشهد ريفي من الجنوب التونسي
            </Link>
          </div>
          <div style={{ margin: "20px" }}>
            <Link to="/5/lesson-7">الدّرس السّابع: المشهد الحضري المحلّي</Link>
          </div>
          <div style={{ margin: "20px" }}>
            <Link to="/5/lesson-8">الدّرس الثامن: موضع المدينة وموقعها</Link>
          </div>
          <div style={{ margin: "20px" }}>
            <Link to="/5/lesson-9">الدرس التاسع: تصميم المدينة</Link>
          </div>
          <div style={{ margin: "20px" }}>
            <Link to="/5/lesson-10">الدرس العاشر: أنشطة المدينة</Link>
          </div>
          <div style={{ margin: "20px" }}>
            <Link to="/5/lesson-11">
              الدرس11: مشهد مدينة تونس: الموقع والموضع
            </Link>
          </div>
          <div style={{ margin: "20px" }}>
            <Link to="/5/lesson-12">الدرس 12: تونس العاصمة: تصميم المدينة</Link>
          </div>
          <div style={{ margin: "20px" }}>
            <Link to="/5/lesson-13">
              الدرس 13: تونس العاصمة: الأنشطة والوظائف
            </Link>
          </div>
          <div style={{ margin: "20px" }}>
            <Link to="/5/lesson-14">الدرس 14: المدينة في حاجة إلى الريف</Link>
          </div>
          <div style={{ margin: "20px" }}>
            <Link to="/5/lesson-15">الدرس 15: الريف في حاجة إلى المدينة</Link>
          </div>
 
        </div>
      </div>
    </div>
  );
}

export default Five;
