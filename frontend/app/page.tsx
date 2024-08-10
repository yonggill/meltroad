import ExpertArea from "@/components/ExpertArea";
import Posts from "@/components/posts";
import WorkExperience from "@/components/LifeExperience";
import MeltRoadLayout from "@/layout/MeltRoadLayout";

export default function Page() {
  return (
    <MeltRoadLayout homePage={true}>
      <div className="col-xl-9">
        <Posts />
      </div>
      <div className="col-xl-12">
        <div className="row g-4">
          <div className="col-lg-6">
            <WorkExperience />
          </div>
          <div className="col-lg-6">
            <ExpertArea />
          </div>
        </div>
      </div>
    </MeltRoadLayout>
  );
};
