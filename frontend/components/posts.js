import Link from "next/link";
import Image from "next/image";


export default async function Posts() {

  var data = await fetch(process.env.API_HOST + '/posts', { cache: 'no-store' }).then((res) =>
    res.json()
  )
  return (
    <div className="card card-projects">
      <div className="card-body">
        <h3 className="card-title">
          Recent Posts{" "}
          <Link className="link-btn" href="/posts">
            All Posts
            <svg
              className="icon d-inline-block"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16699 10H15.8337"
                stroke="#4770FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.833 15L15.833 10"
                stroke="#4770FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.833 5L15.833 10"
                stroke="#4770FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </h3>
        <div className="projects-main mt-4">
          <div className="row g-4 parent-container">
            {data.map((item) => (
              <div className="col-lg-6" key={item.id}>
                <div className="article-publications-item">
                  <div className="image">
                    <Link href={"/posts/" + item.id} className="d-block w-100 flex align-content-center justify-content-center">
                      <Image
                        width={0} height={0} sizes={"100vw"}
                        src={item.meta_image}
                        className="img-fluid w-100 h-auto"
                        alt="blog-img-1"
                      />
                    </Link>
                    <Link href="article" className="tags">
                      {item.category ? item.category.title : " "}
                    </Link>
                  </div>
                  <div className="text">
                    <Link href={"/posts/" + item.id} className="title">
                      {item.title}
                    </Link>
                    <p className="line-clamp-4">
                      {item.meta_description}
                    </p>
                    <ul className="list-unstyled">
                      <li>{item.reading_minutes} min read</li>
                      <li>{item.date_published}</li>
                    </ul>
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
