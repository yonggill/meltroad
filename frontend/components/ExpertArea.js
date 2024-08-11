import Image from "next/image";
const ExpertArea = () => {
  const expertItems = [
    { id: 1, icon: "assets/img/icons/python.svg", name: "Python" },
    { id: 2, icon: "assets/img/icons/django.svg", name: "Django" },
    { id: 3, icon: "assets/img/icons/aws.svg", name: "AWS" },
    { id: 4, icon: "assets/img/icons/java.svg", name: "Java" },
    { id: 5, icon: "assets/img/icons/node.svg", name: "Node.js" },
    { id: 6, icon: "assets/img/icons/react.svg", name: "React.js" },
  ];
  return (
    <div className="card expertise-card">
      <div className="card-body">
        <h3 className="card-title">My Expert Area</h3>
        <div className="expertise-main mt-4">
          <div className="row g-3">
            {expertItems.map((item) => (
              <div className="col-xl-4 col-md-4 col-sm-6 col-6" key={item.id}>
                <div className="expertise-item">
                  <div className="image text-center">
                    <Image  width={0} height={0} className="w-full h-auto d-inline" sizes={"100vw"} src={item.icon} alt={item.name} />
                  </div>
                  <div className="text">
                    <h4 className="title">{item.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExpertArea;
