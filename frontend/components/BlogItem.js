import Link from "next/link";
import Image from "next/image";

const BlogItem = ({ item }) => {
  return (
    <div className="col-lg-6" key={item.id}>
      <div className="article-publications-item">
        <div className="image">
          <Link href={"/posts/" + item.id} className="d-block w-100 flex align-content-center justify-content-center">
            <Image width={0} height={0} sizes={"100vw"} src={item.meta_image} alt="blog-img-1" className="img-fluid w-100" />
          </Link>
          <Link href={"/posts/" + item.id} className="tags">
            {item.category ? item.category.title : " "}
          </Link>
        </div>
        <div className="text">
          <Link href={"/posts/" + item.id} className="title">
            {item.title}
          </Link>
          <ul className="list-unstyled">
            <li>{item.reading_minutes} min read</li>
            <li>{item.date_published}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default BlogItem;
