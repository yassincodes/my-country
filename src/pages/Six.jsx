import Header from "../Header";
import { Link } from "react-router-dom";

function Six() {
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
      <div
        style={{
          textAlign: "right",
          padding: "10vh",
          fontSize: "1.3em"
        }}
      >
        <div
          style={{
            margin: "20px",
            width: "60vw",
            borderRadius: "20px",
            background: "#F7EAC8",
            padding: "5px",
          }}
        >
          <Link to="/6/lesson-1">
            الدّرس الأوّل: التّوزّع الجغرافي للسّكان والأدفاق الهجريّة في البلاد
            التّونسيّة
          </Link>
        </div>
        <div
          style={{
            margin: "20px",
            width: "60vw",
            borderRadius: "20px",
            background: "#D5E5F5",
            padding: "5px",
          }}
        >
          <Link to="/6/lesson-2">
            الدّرس الثّاني: المؤشّرات الدّيمغرافيّة والاجتماعيّة بالبلاد
            التّونسيّة
          </Link>
        </div>
        <div
          style={{
            margin: "20px",
            width: "60vw",
            borderRadius: "20px",
            background: "#FFC0CB",
            padding: "5px",
          }}
        >
          <Link to="/6/lesson-3">
            الدّرس الثالث: ظروف النّشاط الفلاحي الطّبيعيّة والبشريّة{" "}
          </Link>
        </div>
        <div
          style={{
            margin: "20px",
            width: "60vw",
            borderRadius: "20px",
            background: "#E4E4C5",
            padding: "5px",
          }}
        >
          <Link to="/6/lesson-4">
            الدّرس الرّابع: توزع الإنتاج الفلاحي في المجال التونسي وتطوّره
          </Link>
        </div>
        <div
          style={{
            margin: "20px",
            width: "60vw",
            borderRadius: "20px",
            background: "#F5D0C5 ",
            padding: "5px",
          }}
        >
          <Link to="/6/lesson-5">
            الدّرس الخامس: ظروف النّشاط الصناعي: الموارد والظّروف البشريّة
          </Link>
        </div>
        <div
          style={{
            margin: "20px",
            width: "60vw",
            borderRadius: "20px",
            background: "#B1D4E0",
            padding: "5px",
          }}
        >
          <Link to="/6/lesson-6">
            الدّرس السّادس: التّوزّع الجغرافي للصّناعة التّونسيّة وتطوّر أهمّ
            منتجاتها
          </Link>
        </div>
        <div
          style={{
            margin: "20px",
            width: "60vw",
            borderRadius: "20px",
            background: "#E2E2E2",
            padding: "5px",
          }}
        >
          <Link to="/6/lesson-7">
            الدّرس السّابع: ظروف النّشاط السّياحي والمناطق السّياحيّة بالبلاد
            التّونسيّة{" "}
          </Link>
        </div>
        <div
          style={{
            margin: "20px",
            width: "60vw",
            borderRadius: "20px",
            background: "#EFE0E9",
            padding: "5px",
          }}
        >
          <Link to="/6/lesson-8">
            الدّرس الثّامن: تطوّر القطاع السّياحي بالبلاد التّونسيّة وانعكاسه
            على المجال والاقتصاد
          </Link>
        </div>
        <div
          style={{
            margin: "20px",
            width: "60vw",
            borderRadius: "20px",
            background: "#F3F3E7",
            padding: "5px",
          }}
        >
          <Link to="/6/lesson-9">
            الدّرس التّاسع: التّجارة الخارجيّة بالبلاد التّونسيّة الواردات
            والصّادرات (تركيبها وتطوّرها)
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Six;
