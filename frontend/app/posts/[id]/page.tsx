import MeltRoadLayout from "@/layout/MeltRoadLayout";
import "@css/content.css";

export default async function page({ params }: { params: { id: number } }) {
  var postData = await fetch(process.env.API_HOST + '/posts/' + params.id).then((res) =>
    res.json()
  )
  return (
    <MeltRoadLayout>
      <div className="col-xl-9">
        <div className="card content-box-card">
          <div className="card-body portfolio-card article-details-card">
            <div className="article-details-area" dangerouslySetInnerHTML={{ __html: postData.content }}/>
          </div>
        </div>
      </div>
    </MeltRoadLayout>
  );
};
