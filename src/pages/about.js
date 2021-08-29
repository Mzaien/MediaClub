import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import illus from "../images/Saly-20.svg"
const AboutPage = () => {
  return (
    <Layout>
      <Seo title="عن النادي" />
      <h1 style={{ fontWeight: "bolder", textAlign: "center" }}>عن النادي</h1>
      <br />
      <section style={{ fontSize: "1.55rem" }}>
        <p>
          النادي الإعلامي هو نادي طلابي تابع لجامعة الملك فهد للبترول والمعادن
          يهدف إلى خلق بيئة إعلامية تخدم الطلاب على الصعيد الأول، ومن ثم الجامعة
          والمجتمع، ويركز على مجالات الإعلام المتنوعة. أبرز أعمال النادي المقدمة
          للطلاب والمجتمع توجد في منصتي إذاعة البترول والجبل شو.
        </p>
        <br />
        <p>
          إذاعة البترول هي محطة إذاعية من إنتاج النادي الإعلامي وتهدف إلى إثراء
          ساحة المواد الصوتية بعدد من البرامج.
        </p>
        <br />
        <p>ومنصة الجبل شو هي المنصة المختصة بالبرامج المرئية المختلفة.</p>
      </section>
      <img
        src={illus}
        alt="illus"
        loading="lazy"
        style={{
          position: "static",
          width: "50%",
          height: "50%",
          margin: "0 auto",
        }}
      />
    </Layout>
  )
}

export default AboutPage
