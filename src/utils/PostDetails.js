import errorImg1 from "../assets/images/error1.png";
import errorImg2 from "../assets/images/error2.png";
import errorImg3 from "../assets/images/error3.png";
import userimg1 from "../assets/images/userimg1.png";
import userimg2 from "../assets/images/userimg2.png";
import userimg3 from "../assets/images/userimg3.png";

const PostDetails = [
  {
    id: 1,
    erroTitle:
      "Invalid OAuth Token Error: Access Denied Due to Expired or Invalid Token in Authentication Flow.",
    username: "Dev Squad",
    userProfile: userimg1,
    postDate: "Sep 02",
    screenShort: errorImg1,
    postTags: ["Authentication", "OAuth"],
    // language: 'Typescript'
  },
  {
    id: 2,
    erroTitle:
      "AWS EC2 Instance Connection Error: Unable to SSH Due to Security Group Misconfiguration",
    username: "Lowcode Devs",
    userProfile: userimg2,
    postDate: "Aug 14",
    screenShort: errorImg2,
    postTags: ["Cloud Computing", "AWS"],
    // language: 'html'
  },
  {
    id: 3,
    erroTitle:
      "Vue.js Component Data Not Reactive: Changes Not Reflecting in Template.",
    username: "Community picks",
    userProfile: userimg3,
    postDate: "Jan 01",
    screenShort: errorImg3,
    postTags: ["Frontend", "Vue.js"],
    language: "css",
  },
  {
    id: 3,
    erroTitle:
      "SQL Query Timeout Error: Query Execution Takes Too Long Due to Missing Indexes.",
    username: "Community picks",
    userProfile: userimg3,
    postDate: "Jan 01",
    screenShort: errorImg3,
    postTags: ["Database", "SQL"],
    language: "css",
  },
  {
    id: 4,
    erroTitle:
      "ensorFlow Model Training Error: Shape Mismatch Between Labels and Predictions",
    username: "Fullstack Developer",
    userProfile: userimg2,
    postDate: "Oct 01",
    screenShort: errorImg2,
    postTags: ["Machine Learning", "TensorFlow"],
    language: "javascript",
  },
  {
    id: 4,
    erroTitle: "API request failed",
    username: "Fullstack Developer",
    userProfile: userimg2,
    postDate: "Oct 01",
    screenShort: errorImg2,
    postTags: ["JAVASCRIPT", "JAVA", "PYTHON"],
    language: "javascript",
  },
  {
    id: 5,
    erroTitle:
      "CSS Flexbox Layout Issue: Elements Overlapping or Not Centering Properly in Responsive Design",
    username: "",
    userProfile: userimg3,
    postDate: "Oct 5",
    screenShort: errorImg1,
    postTags: ["Frontend", "CSS"],
    language: "Python",
  },
];
export default PostDetails;
