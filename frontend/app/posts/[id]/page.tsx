import MeltRoadLayout from "@/layout/MeltRoadLayout";
import "@css/content.css";

type post = {
  id: number,
  category: any,
  images: [any],
  title: string,
  slug: string,
  content: string,
  meta_description: string,
  meta_image: string,
  reading_minutes: number,
  date_published: string
}

export default async function page({ params }: { params: { id: number } }) {
  const postData:post = await fetch(process.env.API_HOST + '/posts/' + params.id).then((res) =>
    res.json()
  )
  return (
    <MeltRoadLayout>
      <div className="col-xl-9">
        <div className="card content-box-card">
          <div className="card-body portfolio-card article-details-card">
            <div className="article-details-area">
              <h1 className="mb-8">{ postData.title }</h1>
            </div>
            <div className="article-details-area" dangerouslySetInnerHTML={{ __html: postData.content }}/>
          </div>
        </div>
      </div>
    </MeltRoadLayout>
  );
};
