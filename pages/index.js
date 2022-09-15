import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import { comments } from "../libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto bg-white p-3 rounded rounded-3 shadow-sm"
      >
        <PostOwner
          name="Saran kimanuwat 640612192"
          content="Quiz ง่ายจังเลยขอยากกว่านี้ได้ไหมครับ #261207"
          like="1800"
          userImagePath="/profileImages/sara.jpg"
        />
        {comments.map((x, i) => {
          return (
            <Comment
              key={i}
              username={x.username}
              userImagePath={x.userImagePath}
              commentText={x.commentText}
              likeNum={x.likeNum}
              replies={x.replies}
            />
          );
        })}
      </div>
    </div>
  );
}