import MeltRoadLayout from "@/layout/MeltRoadLayout";
const page = () => {
  return (
    <MeltRoadLayout>
      <div className="col-xl-9">
        <div className="card content-box-card">
          <div className="card-body portfolio-card contact-card">
            <div className="top-info">
              <div className="text">
                <h1 className="main-title">
                  👋 <span>같이</span> 일해요
                </h1>
                <p>
                  저와 저희 팀은 항상 채용에 열려있어요.<br/>
                  - <span>Python, Django</span> 기반의 백엔드<br/>
                  - <span>React.js, Next.js</span> 기반의 프론트엔드<br/>
                  두 가지 영역의 기술스택을 바탕으로 다양한 플랫폼을 구성, 운영하고 있습니다.
                </p>
              </div>
            </div>
            <div className="contact-area">
              <div className="leave-comments-area">
                <div className="comments-box">
                  <form
                    id="contact-form"
                    action="https://api.yong-yong.net/contact/"
                    method="POST"
                  >
                    <div className="row gx-3">
                      <div className="col-md-6">
                        <div className="mb-4">
                          <label className="form-label">Name</label>
                          <input
                            name="name"
                            required
                            type="text"
                            className="form-control shadow-none"
                            placeholder="성함을 넣어주세요."
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-4">
                          <label className="form-label">Email</label>
                          <input
                            name="email"
                            required
                            type="email"
                            className="form-control shadow-none"
                            placeholder="이메일 주소를 넣어주세요."
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button className="submit-btn" type="submit">
                          Send Meeting Request
                          <svg
                            className="icon d-inline-block mt-[-4px]"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.5 11.6665V6.6665H12.5"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.5 6.6665L10 14.1665L2.5 6.6665"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="ajax-response mb-0" />
                </div>
              </div>
              <div className="contact-map-area">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.258131890527!2d127.03674887651599!3d37.50182957205547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cbca16448f109%3A0x762757a59467561c!2z7JyE7Iuc7LyT!5e0!3m2!1sko!2skr!4v1723290774710!5m2!1sko!2skr"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MeltRoadLayout>
  );
};
export default page;
