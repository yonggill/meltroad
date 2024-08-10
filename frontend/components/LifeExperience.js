const Experience = () => {
  const experiancesItems = [
    {
      id: 1,
      title: "Korea Univ.",
      subTitle: "Computer Science",
      icon: "/assets/img/icons/koreauniv.svg",
      date: "2010-current",
    },
    {
      id: 2,
      title: "Wishket Inc.",
      subTitle: "CTO",
      icon: "/assets/img/icons/wishket.svg",
      date: "2014-current",
    },
    {
      id: 3,
      title: "Marriage",
      subTitle: "Husband",
      icon: "/assets/img/icons/marriage.svg",
      date: "2022-current",
    },
  ];
  return (
    <ul className="work-experiance-slider list-unstyled">
      {experiancesItems.map((item) => (
        <li key={item.id}>
          <div className="date col-lg-2">
            <p>{item.date}</p>
          </div>
          <div className="info col-lg-10">
            <div className="icon">
              <img src={item.icon} alt="adobe" />
            </div>
            <div className="text">
              <h4 className="title">{item.title}</h4>
              <h6 className="subtitle">{item.subTitle}</h6>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const LifeExperience = () => {
  return (
    <div className="card">
      <div className="card-body work-experiance-card">
        <h3 className="card-title">Life Experience</h3>
        <div className="work-experiance-main">
          <Experience />
          <Experience />
        </div>
      </div>
    </div>
  );
};
export default LifeExperience;
